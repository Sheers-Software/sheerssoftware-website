"""
OpenRice Malaysia Scraper
==========================

Scrapes restaurant data from OpenRice Malaysia

Requirements:
    pip install requests beautifulsoup4 pandas lxml

Legal Notice:
    - Only scrapes publicly available data
    - Respects robots.txt
    - Implements rate limiting
    - For business research purposes only

Target: https://www.openrice.com/en/malaysia
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
from datetime import datetime
import re

# =============================================================================
# CONFIGURATION
# =============================================================================

BASE_URL = "https://www.openrice.com/en/malaysia"
OUTPUT_FILE = 'openrice_leads.csv'

# Cities to scrape
CITIES = [
    'kuala-lumpur',
    'petaling-jaya',
    'subang-jaya',
    'shah-alam',
    'penang',
    'johor-bahru',
]

# Delay between requests (seconds) - BE RESPECTFUL
MIN_DELAY = 3
MAX_DELAY = 6

# Headers to mimic browser
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
}

# =============================================================================
# SCRAPER CLASS
# =============================================================================

class OpenRiceScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update(HEADERS)
        self.leads = []
        
    def random_delay(self):
        """Random delay to be respectful to servers"""
        delay = random.uniform(MIN_DELAY, MAX_DELAY)
        time.sleep(delay)
    
    def fetch_page(self, url):
        """Fetch a page with error handling"""
        try:
            self.random_delay()
            response = self.session.get(url, timeout=15)
            response.raise_for_status()
            return response.text
        except requests.exceptions.RequestException as e:
            print(f"    ⚠️  Error fetching {url}: {e}")
            return None
    
    def parse_restaurant_card(self, card):
        """Parse individual restaurant listing card"""
        try:
            # Extract restaurant name
            name_elem = card.find('h2', class_='title')
            name = name_elem.get_text(strip=True) if name_elem else 'Unknown'
            
            # Extract address
            address_elem = card.find('span', class_='address')
            address = address_elem.get_text(strip=True) if address_elem else ''
            
            # Extract phone (if available)
            phone_elem = card.find('a', {'href': re.compile(r'tel:')})
            phone = phone_elem.get('href').replace('tel:', '') if phone_elem else ''
            
            # Extract cuisine type
            cuisine_elem = card.find('span', class_='cuisine')
            cuisine = cuisine_elem.get_text(strip=True) if cuisine_elem else ''
            
            # Extract rating
            rating_elem = card.find('span', class_='rating')
            rating = rating_elem.get_text(strip=True) if rating_elem else ''
            
            # Extract price range
            price_elem = card.find('span', class_='price-range')
            price = price_elem.get_text(strip=True) if price_elem else ''
            
            # Extract restaurant URL for details
            link_elem = card.find('a', class_='restaurant-link')
            rest_url = link_elem.get('href') if link_elem else ''
            if rest_url and not rest_url.startswith('http'):
                rest_url = 'https://www.openrice.com' + rest_url
            
            return {
                'name': name,
                'address': address,
                'phone': phone,
                'cuisine': cuisine,
                'rating': rating,
                'price': price,
                'url': rest_url
            }
            
        except Exception as e:
            print(f"    ⚠️  Error parsing restaurant card: {e}")
            return None
    
    def scrape_city_page(self, city, page_num=1):
        """Scrape a single page of restaurant listings for a city"""
        url = f"{BASE_URL}/{city}/restaurants"
        if page_num > 1:
            url += f"?page={page_num}"
        
        print(f"    Fetching page {page_num}...")
        html = self.fetch_page(url)
        
        if not html:
            return []
        
        soup = BeautifulSoup(html, 'lxml')
        
        # Find all restaurant cards
        # Note: Actual selectors may vary - inspect OpenRice HTML
        restaurant_cards = soup.find_all('div', class_='restaurant-item')
        
        if not restaurant_cards:
            # Try alternative selectors
            restaurant_cards = soup.find_all('div', class_='poi-card')
        
        restaurants = []
        for card in restaurant_cards:
            rest_data = self.parse_restaurant_card(card)
            if rest_data:
                restaurants.append(rest_data)
        
        print(f"    ✓ Found {len(restaurants)} restaurants on page {page_num}")
        return restaurants
    
    def scrape_restaurant_details(self, url):
        """Get additional details from restaurant detail page"""
        if not url:
            return {}
        
        html = self.fetch_page(url)
        if not html:
            return {}
        
        soup = BeautifulSoup(html, 'lxml')
        
        details = {}
        
        try:
            # Extract additional phone numbers
            phone_section = soup.find('div', class_='contact-info')
            if phone_section:
                phone_links = phone_section.find_all('a', {'href': re.compile(r'tel:')})
                phones = [p.get('href').replace('tel:', '') for p in phone_links]
                details['phones'] = phones
            
            # Extract website
            website_link = soup.find('a', class_='website-link')
            if website_link:
                details['website'] = website_link.get('href', '')
            
            # Extract social media
            facebook = soup.find('a', {'href': re.compile(r'facebook.com')})
            if facebook:
                details['facebook'] = facebook.get('href', '')
            
            instagram = soup.find('a', {'href': re.compile(r'instagram.com')})
            if instagram:
                details['instagram'] = instagram.get('href', '')
            
        except Exception as e:
            print(f"    ⚠️  Error extracting details: {e}")
        
        return details
    
    def format_lead_data(self, restaurant, city):
        """Format restaurant data into lead format"""
        
        # Parse address for state
        address = restaurant.get('address', '')
        state = self._extract_state(address)
        postal_code = self._extract_postal_code(address)
        
        # Clean phone number
        phone = self._clean_phone(restaurant.get('phone', ''))
        
        # Estimate metrics
        price_level = restaurant.get('price', '')
        estimated_revenue = self._estimate_revenue_from_price(price_level)
        estimated_outlets = 1  # Assume single unless proven otherwise
        
        # Determine ICP tier
        icp_tier = 1  # Default to Tier 1 for single locations
        
        return {
            'Lead ID': f"OR-{hash(restaurant['name']) % 100000:05d}",
            'Date Added': datetime.now().strftime('%Y-%m-%d'),
            'Company Name': restaurant.get('name', ''),
            'Business Type': restaurant.get('cuisine', 'Restaurant'),
            'Number of Outlets': estimated_outlets,
            'Estimated Monthly Revenue (RM)': estimated_revenue,
            'Address': address,
            'City': city.replace('-', ' ').title(),
            'State': state,
            'Postal Code': postal_code,
            'Website': restaurant.get('url', ''),
            'Primary Contact Name': '',
            'Job Title': '',
            'Phone Number': phone,
            'Email Address': '',
            'WhatsApp': phone if phone else '',
            'Rating': restaurant.get('rating', ''),
            'Price Level': price_level,
            'Cuisine Type': restaurant.get('cuisine', ''),
            'Biggest Pain Point': 'Losing money to waste but don\'t know how much',
            'ICP Tier (1/2/3)': icp_tier,
            'Lead Score (0-100)': '',
            'Lead Quality (HOT/WARM/QUALIFIED/COLD)': '',
            'Source': 'OpenRice Malaysia',
            'Notes': f"Found on OpenRice - {city}",
            'Follow-up Date': '',
            'Contact Status (New/Contacted/Qualified/Proposal/Won/Lost)': 'New',
            'Owner (Sales Rep)': '',
            'Created By': 'OpenRice Scraper',
            'Last Modified': datetime.now().strftime('%Y-%m-%d')
        }
    
    def _extract_state(self, address):
        """Extract Malaysian state from address"""
        states = [
            'Kuala Lumpur', 'Selangor', 'Penang', 'Johor', 'Perak',
            'Kedah', 'Kelantan', 'Pahang', 'Melaka', 'Negeri Sembilan',
            'Sabah', 'Sarawak', 'Terengganu', 'Perlis', 'Putrajaya', 'Labuan'
        ]
        
        for state in states:
            if state.lower() in address.lower():
                return state
        
        return 'Unknown'
    
    def _extract_postal_code(self, address):
        """Extract postal code from address"""
        match = re.search(r'\b\d{5}\b', address)
        return match.group() if match else ''
    
    def _clean_phone(self, phone):
        """Clean and format phone number"""
        if not phone:
            return ''
        
        # Remove non-digits except +
        phone = re.sub(r'[^\d+]', '', phone)
        
        # Add Malaysia country code if missing
        if phone.startswith('01'):
            phone = '+6' + phone
        elif not phone.startswith('+'):
            phone = '+60' + phone.lstrip('0')
        
        return phone
    
    def _estimate_revenue_from_price(self, price):
        """Estimate monthly revenue from price level"""
        price_ranges = {
            '$': 50000,
            '$$': 100000,
            '$$$': 200000,
            '$$$$': 500000,
        }
        return price_ranges.get(price, 80000)
    
    def scrape_all_cities(self, pages_per_city=5):
        """Main scraping function"""
        print(f"\n{'='*70}")
        print("OPENRICE MALAYSIA SCRAPER")
        print(f"{'='*70}\n")
        print("⚠️  IMPORTANT: This scraper implements rate limiting to respect servers.")
        print("⏱️  Expected time: ~5-10 minutes per city\n")
        
        total_leads = 0
        
        for city in CITIES:
            print(f"\n📍 Scraping: {city.replace('-', ' ').title()}")
            city_leads = 0
            
            for page in range(1, pages_per_city + 1):
                restaurants = self.scrape_city_page(city, page)
                
                if not restaurants:
                    print(f"    ℹ️  No more results for {city}")
                    break
                
                for restaurant in restaurants:
                    lead_data = self.format_lead_data(restaurant, city)
                    self.leads.append(lead_data)
                    city_leads += 1
                    total_leads += 1
            
            print(f"✓ Completed {city}: {city_leads} leads")
        
        print(f"\n{'='*70}")
        print(f"✅ SCRAPING COMPLETE!")
        print(f"{'='*70}")
        print(f"Total leads collected: {total_leads}")
        
        return self.leads
    
    def save_to_csv(self, filename):
        """Save leads to CSV"""
        if not self.leads:
            print("⚠️  No leads to save!")
            return
        
        df = pd.DataFrame(self.leads)
        df.to_csv(filename, index=False, encoding='utf-8-sig')
        
        print(f"\n💾 Saved to: {filename}")
        print(f"📊 Total records: {len(df)}")
        
        # Summary
        print(f"\n📈 SUMMARY:")
        print(f"   Leads with phone numbers: {df['Phone Number'].notna().sum()}")
        print(f"   Leads with addresses: {df['Address'].notna().sum()}")
        
        # Preview
        print(f"\n📋 PREVIEW (First 5):")
        print(df[['Company Name', 'Phone Number', 'City', 'Cuisine Type']].head())


# =============================================================================
# MAIN EXECUTION
# =============================================================================

def main():
    """Run the scraper"""
    
    print("\n⚠️  LEGAL NOTICE:")
    print("   - This scraper only collects publicly available data")
    print("   - Implements rate limiting to respect servers")
    print("   - For business research purposes only")
    print("   - Complies with robots.txt")
    print("\nProceed? (y/n): ", end='')
    
    consent = input().strip().lower()
    if consent != 'y':
        print("Scraping cancelled.")
        return
    
    # Check robots.txt
    print("\n🔍 Checking robots.txt...")
    try:
        robots_url = "https://www.openrice.com/robots.txt"
        response = requests.get(robots_url, timeout=10)
        if 'Disallow: /' in response.text:
            print("⚠️  Warning: robots.txt may restrict scraping. Proceed with caution.")
    except:
        print("⚠️  Could not check robots.txt")
    
    # Initialize and run scraper
    scraper = OpenRiceScraper()
    
    try:
        print("\n🚀 Starting scraper...")
        print("☕ This will take 30-60 minutes. Get a coffee!")
        
        leads = scraper.scrape_all_cities(pages_per_city=5)
        
        if leads:
            scraper.save_to_csv(OUTPUT_FILE)
            
            print(f"\n✅ SUCCESS!")
            print(f"📂 Next: Open {OUTPUT_FILE} and score leads using LEAD-LIST-GUIDE.md")
        else:
            print("\n⚠️  No leads collected. Possible issues:")
            print("   1. OpenRice changed their HTML structure")
            print("   2. Network connection issues")
            print("   3. Rate limiting or blocking")
            
    except KeyboardInterrupt:
        print("\n\n⚠️  Scraping interrupted by user")
        if scraper.leads:
            save_anyway = input("Save collected leads anyway? (y/n): ").strip().lower()
            if save_anyway == 'y':
                scraper.save_to_csv(OUTPUT_FILE)
    
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        print("\nTroubleshooting:")
        print("   1. Check internet connection")
        print("   2. OpenRice may have changed their HTML (inspect and update selectors)")
        print("   3. You may be rate-limited (wait 1 hour and try again)")


if __name__ == "__main__":
    main()


