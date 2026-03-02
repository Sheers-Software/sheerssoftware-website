"""
Google Places API Scraper for Malaysian F&B Establishments
============================================================

RECOMMENDED: Most reliable, legal, and comprehensive source

Requirements:
    pip install googlemaps pandas

Setup:
    1. Get API key from: https://console.cloud.google.com/
    2. Enable: Places API, Geocoding API
    3. Free tier: 28,000 requests/month (enough for ~2,800 businesses with details)

Cost: FREE for moderate use
Legal: 100% compliant (official API)
Data Quality: EXCELLENT
"""

import googlemaps
import pandas as pd
import time
from datetime import datetime
import json

# =============================================================================
# CONFIGURATION - EDIT THESE VALUES
# =============================================================================

# Get your API key from: https://console.cloud.google.com/google/maps-apis
GOOGLE_MAPS_API_KEY = "AIzaSyAt4ffNgd6uBhYT7yOn16tQOAOV4jIqUrw"  # REPLACE THIS

# Target locations (latitude, longitude)
LOCATIONS = {
    "Kuala Lumpur City Centre": (3.1390, 101.6869),
    "KLCC": (3.1578, 101.7123),
    "Bukit Bintang": (3.1472, 101.7097),
    "Mont Kiara": (3.1725, 101.6509),
    "Bangsar": (3.1278, 101.6700),
    "Petaling Jaya": (3.1073, 101.6067),
    "Subang Jaya": (3.0464, 101.5861),
    "Shah Alam": (3.0733, 101.5185),
    "Penang Georgetown": (5.4164, 100.3327),
    "Johor Bahru": (1.4927, 103.7414),
}

# Search radius in meters (max 50,000)
SEARCH_RADIUS = 5000  # 5km

# Business types to search
BUSINESS_TYPES = [
    'restaurant',
    'cafe',
    'bakery',
    'meal_takeaway',
    'food',
]

# Output file
OUTPUT_FILE = 'google_places_leads.csv'

# =============================================================================
# SCRAPER CODE
# =============================================================================

class GooglePlacesScraper:
    def __init__(self, api_key):
        """Initialize Google Maps client"""
        self.gmaps = googlemaps.Client(key=api_key)
        self.all_places = []
        self.place_ids_seen = set()  # Avoid duplicates
        
    def search_area(self, location, radius, business_type):
        """Search for businesses in a specific area"""
        try:
            print(f"  Searching {business_type} within {radius}m...")
            
            results = self.gmaps.places_nearby(
                location=location,
                radius=radius,
                type=business_type,
                language='en'
            )
            
            places = results.get('results', [])
            print(f"  Found {len(places)} results")
            
            # Handle pagination (Google returns max 20 per page, up to 60 total)
            while 'next_page_token' in results:
                time.sleep(2)  # Required delay for next_page_token to activate
                results = self.gmaps.places_nearby(
                    page_token=results['next_page_token']
                )
                new_places = results.get('results', [])
                places.extend(new_places)
                print(f"  Found {len(new_places)} more results (pagination)")
            
            return places
            
        except Exception as e:
            print(f"  Error searching: {e}")
            return []
    
    def get_place_details(self, place_id):
        """Get detailed information for a specific place"""
        try:
            result = self.gmaps.place(
                place_id=place_id,
                fields=[
                    'name',
                    'formatted_address',
                    'formatted_phone_number',
                    'international_phone_number',
                    'website',
                    'rating',
                    'user_ratings_total',
                    'price_level',
                    'opening_hours',
                    'geometry',
                    'business_status'
                ]
            )
            
            time.sleep(0.5)  # Rate limiting - be nice to API
            return result.get('result', {})
            
        except Exception as e:
            print(f"  Error getting details for {place_id}: {e}")
            return {}
    
    def extract_data(self, place_basic, place_details):
        """Extract and format data from place info"""
        
        # Basic info (from search)
        name = place_basic.get('name', '')
        place_id = place_basic.get('place_id', '')
        location = place_basic.get('geometry', {}).get('location', {})
        types = place_basic.get('types', [])  # Get from basic search results
        
        # Detailed info (from place details call)
        address = place_details.get('formatted_address', '')
        phone = place_details.get('formatted_phone_number', 
                                 place_details.get('international_phone_number', ''))
        website = place_details.get('website', '')
        rating = place_details.get('rating', '')
        reviews = place_details.get('user_ratings_total', '')
        price_level = place_details.get('price_level', '')
        business_status = place_details.get('business_status', '')
        
        # Extract location details
        city, state, postal_code = self._parse_address(address)
        
        # Estimate business size based on reviews and rating
        estimated_outlets = self._estimate_outlets(name, reviews)
        estimated_revenue = self._estimate_revenue(price_level, reviews)
        
        # Determine ICP tier
        icp_tier = self._determine_icp_tier(estimated_outlets, estimated_revenue)
        
        return {
            'Lead ID': f"GOOGLE-{place_id[:8]}",
            'Date Added': datetime.now().strftime('%Y-%m-%d'),
            'Company Name': name,
            'Business Type': self._format_types(types),
            'Number of Outlets': estimated_outlets,
            'Estimated Monthly Revenue (RM)': estimated_revenue,
            'Address': address,
            'City': city,
            'State': state,
            'Postal Code': postal_code,
            'Website': website,
            'Primary Contact Name': '',  # Not available from API
            'Job Title': '',
            'Phone Number': phone,
            'Email Address': '',  # Not available from API
            'WhatsApp': phone if phone else '',
            'Rating': rating,
            'Review Count': reviews,
            'Price Level': self._format_price_level(price_level),
            'Business Status': business_status,
            'Google Place ID': place_id,
            'Latitude': location.get('lat', ''),
            'Longitude': location.get('lng', ''),
            'Biggest Pain Point': self._infer_pain_point(estimated_outlets),
            'ICP Tier (1/2/3)': icp_tier,
            'Lead Score (0-100)': '',  # To be scored manually
            'Lead Quality (HOT/WARM/QUALIFIED/COLD)': '',
            'Source': 'Google Places API',
            'Notes': f"Rating: {rating}/5 ({reviews} reviews)",
            'Follow-up Date': '',
            'Contact Status (New/Contacted/Qualified/Proposal/Won/Lost)': 'New',
            'Owner (Sales Rep)': '',
            'Created By': 'Google Places Scraper',
            'Last Modified': datetime.now().strftime('%Y-%m-%d')
        }
    
    def _parse_address(self, address):
        """Extract city, state, postal code from address"""
        city = ''
        state = ''
        postal_code = ''
        
        if not address:
            return city, state, postal_code
        
        # Malaysian states
        states_list = [
            'Kuala Lumpur', 'Selangor', 'Penang', 'Johor', 'Perak',
            'Kedah', 'Kelantan', 'Pahang', 'Melaka', 'Negeri Sembilan',
            'Sabah', 'Sarawak', 'Terengganu', 'Perlis', 'Putrajaya', 'Labuan'
        ]
        
        # Find state
        for s in states_list:
            if s in address:
                state = s
                break
        
        # Extract postal code (5 digits)
        import re
        postal_match = re.search(r'\b\d{5}\b', address)
        if postal_match:
            postal_code = postal_match.group()
        
        # Extract city (rough heuristic)
        parts = [p.strip() for p in address.split(',')]
        if len(parts) >= 2:
            city = parts[-3] if len(parts) > 2 else parts[-2]
        
        return city, state, postal_code
    
    def _estimate_outlets(self, name, review_count):
        """Estimate number of outlets based on name and reviews"""
        name_lower = name.lower()
        
        # Check for chain indicators in name
        chain_keywords = ['chain', 'group', 'holdings', 'international', 'franchise']
        if any(keyword in name_lower for keyword in chain_keywords):
            return 10  # Likely chain
        
        # High review count might indicate multiple locations
        if review_count:
            if review_count > 5000:
                return 5  # Likely multiple locations
            elif review_count > 2000:
                return 2  # Possibly 2-3 locations
        
        return 1  # Default: single location
    
    def _estimate_revenue(self, price_level, review_count):
        """Estimate monthly revenue based on price level and popularity"""
        # Base revenue by price level
        base_revenue = {
            1: 50000,   # Budget
            2: 100000,  # Moderate
            3: 200000,  # Expensive
            4: 500000,  # Very Expensive
        }
        
        revenue = base_revenue.get(price_level, 80000)
        
        # Adjust by popularity (review count as proxy)
        if review_count:
            if review_count > 5000:
                revenue *= 3
            elif review_count > 2000:
                revenue *= 2
            elif review_count > 1000:
                revenue *= 1.5
        
        return int(revenue)
    
    def _determine_icp_tier(self, outlets, revenue):
        """Determine ICP tier based on outlets and revenue"""
        if outlets >= 10 or revenue >= 1000000:
            return 3  # Enterprise
        elif outlets >= 3 or revenue >= 200000:
            return 2  # Growth
        else:
            return 1  # Quick Win
    
    def _format_types(self, types):
        """Format business types into readable string"""
        # Remove generic types
        ignore = ['point_of_interest', 'establishment', 'food']
        readable = [t.replace('_', ' ').title() for t in types if t not in ignore]
        return ', '.join(readable[:3]) if readable else 'Restaurant'
    
    def _format_price_level(self, level):
        """Format price level"""
        levels = {
            0: 'Free',
            1: '$ (Budget)',
            2: '$$ (Moderate)',
            3: '$$$ (Expensive)',
            4: '$$$$ (Very Expensive)'
        }
        return levels.get(level, 'Unknown')
    
    def _infer_pain_point(self, outlets):
        """Infer likely pain point based on business size"""
        if outlets >= 10:
            return "Need enterprise integration with existing systems"
        elif outlets >= 3:
            return "Can't standardize operations across locations"
        else:
            return "Losing money to waste but don't know how much"
    
    def scrape_all_locations(self):
        """Main scraping function"""
        print(f"\n{'='*70}")
        print("GOOGLE PLACES API SCRAPER - Malaysian F&B Leads")
        print(f"{'='*70}\n")
        
        total_found = 0
        
        for location_name, coordinates in LOCATIONS.items():
            print(f"\n📍 Searching: {location_name}")
            print(f"   Coordinates: {coordinates}")
            
            for business_type in BUSINESS_TYPES:
                places = self.search_area(coordinates, SEARCH_RADIUS, business_type)
                
                for place in places:
                    place_id = place.get('place_id')
                    
                    # Skip duplicates
                    if place_id in self.place_ids_seen:
                        continue
                    
                    self.place_ids_seen.add(place_id)
                    
                    # Get detailed information
                    print(f"    Fetching details: {place.get('name', 'Unknown')}...")
                    details = self.get_place_details(place_id)
                    
                    if details:
                        # Extract and store data
                        lead_data = self.extract_data(place, details)
                        self.all_places.append(lead_data)
                        total_found += 1
                
                print(f"  ✓ Completed {business_type}")
            
            print(f"✓ Completed {location_name} (Total so far: {total_found})")
        
        print(f"\n{'='*70}")
        print(f"✅ SCRAPING COMPLETE!")
        print(f"{'='*70}")
        print(f"Total leads collected: {total_found}")
        print(f"Unique businesses: {len(self.place_ids_seen)}")
        
        return self.all_places
    
    def save_to_csv(self, filename):
        """Save results to CSV"""
        if not self.all_places:
            print("⚠️  No data to save!")
            return
        
        df = pd.DataFrame(self.all_places)
        df.to_csv(filename, index=False, encoding='utf-8-sig')
        
        print(f"\n💾 Saved to: {filename}")
        print(f"📊 Total records: {len(df)}")
        
        # Print summary statistics
        print(f"\n📈 SUMMARY STATISTICS:")
        print(f"   ICP Tier 1 (Quick Win): {len(df[df['ICP Tier (1/2/3)'] == 1])}")
        print(f"   ICP Tier 2 (Growth): {len(df[df['ICP Tier (1/2/3)'] == 2])}")
        print(f"   ICP Tier 3 (Enterprise): {len(df[df['ICP Tier (1/2/3)'] == 3])}")
        
        # Show preview
        print(f"\n📋 PREVIEW (First 5 leads):")
        print(df[['Company Name', 'Phone Number', 'City', 'ICP Tier (1/2/3)']].head())


# =============================================================================
# MAIN EXECUTION
# =============================================================================

def main():
    """Run the scraper"""
    
    # Validate API key
    if GOOGLE_MAPS_API_KEY == "YOUR_API_KEY_HERE":
        print("❌ ERROR: Please set your Google Maps API key!")
        print("\n📖 HOW TO GET API KEY:")
        print("   1. Go to: https://console.cloud.google.com/")
        print("   2. Create a project (or select existing)")
        print("   3. Enable: Places API, Geocoding API")
        print("   4. Create credentials → API Key")
        print("   5. Copy the API key and paste above")
        print("\n💰 COST: FREE for 28,000 requests/month")
        return
    
    # Initialize scraper
    scraper = GooglePlacesScraper(GOOGLE_MAPS_API_KEY)
    
    # Run scraping
    try:
        leads = scraper.scrape_all_locations()
        
        # Save results
        if leads:
            scraper.save_to_csv(OUTPUT_FILE)
            
            print(f"\n✅ SUCCESS! Your leads are ready.")
            print(f"📂 Next step: Open {OUTPUT_FILE} and start qualifying leads!")
            print(f"📖 See: LEAD-LIST-GUIDE.md for scoring and segmentation instructions")
        else:
            print("\n⚠️  No leads found. Check your API key and internet connection.")
            
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        print("\nTroubleshooting:")
        print("   1. Check your API key is valid")
        print("   2. Ensure Places API is enabled")
        print("   3. Check internet connection")
        print("   4. Verify you haven't exceeded API quota")


if __name__ == "__main__":
    main()

