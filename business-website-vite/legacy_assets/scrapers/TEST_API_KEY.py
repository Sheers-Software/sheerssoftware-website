"""
Google Places API - Quick Test Script
======================================

This script tests your API key with a small request
to make sure everything works before running the full scraper.

Time: 10-20 seconds
Cost: FREE (uses 2-3 API requests)
"""

import googlemaps
from datetime import datetime

# =============================================================================
# CONFIGURATION - PASTE YOUR API KEY HERE
# =============================================================================

GOOGLE_MAPS_API_KEY = "AIzaSyAt4ffNgd6uBhYT7yOn16tQOAOV4jIqUrw"  # ← Your configured key

# =============================================================================
# TEST SCRIPT
# =============================================================================

def test_api_key():
    """Test if API key works with a simple request"""
    
    print("\n" + "="*70)
    print("GOOGLE MAPS API KEY TEST")
    print("="*70 + "\n")
    
    # Check if API key is configured
    if GOOGLE_MAPS_API_KEY == "YOUR_API_KEY_HERE":
        print("❌ ERROR: API key not configured!")
        print("\nPlease:")
        print("1. Open: TEST_API_KEY.py")
        print("2. Line 17: GOOGLE_MAPS_API_KEY = \"YOUR_API_KEY_HERE\"")
        print("3. Replace with your actual API key")
        print("4. Save and run again")
        print("\nGet API key from: https://console.cloud.google.com/")
        return False
    
    print(f"Testing API key: {GOOGLE_MAPS_API_KEY[:20]}...")
    print()
    
    try:
        # Initialize Google Maps client
        print("Step 1: Initializing Google Maps client...")
        gmaps = googlemaps.Client(key=GOOGLE_MAPS_API_KEY)
        print("✓ Client initialized successfully")
        print()
        
        # Test 1: Search for restaurants in KLCC (small area)
        print("Step 2: Testing Places API (searching KLCC restaurants)...")
        klcc_location = (3.1578, 101.7123)
        
        results = gmaps.places_nearby(
            location=klcc_location,
            radius=1000,  # 1km only (small test)
            type='restaurant',
            language='en'
        )
        
        places = results.get('results', [])
        print(f"✓ Places API working! Found {len(places)} restaurants")
        print()
        
        if len(places) > 0:
            # Test 2: Get details for first restaurant
            print("Step 3: Testing Place Details API...")
            test_place = places[0]
            place_id = test_place['place_id']
            
            details = gmaps.place(
                place_id=place_id,
                fields=['name', 'formatted_address', 'formatted_phone_number', 'website']
            )
            
            result = details.get('result', {})
            print("✓ Place Details API working!")
            print()
            
            # Show sample data
            print("="*70)
            print("SAMPLE DATA (First Restaurant Found):")
            print("="*70)
            print(f"Name: {result.get('name', 'N/A')}")
            print(f"Address: {result.get('formatted_address', 'N/A')}")
            print(f"Phone: {result.get('formatted_phone_number', 'N/A')}")
            print(f"Website: {result.get('website', 'N/A')}")
            print()
        
        # Success!
        print("="*70)
        print("✅ API KEY TEST SUCCESSFUL!")
        print("="*70)
        print()
        print("Your API key is working correctly!")
        print()
        print("NEXT STEPS:")
        print("1. Copy your API key")
        print("2. Open: 01_google_places_scraper.py")
        print("3. Paste API key at line 25")
        print("4. Run: python 01_google_places_scraper.py")
        print()
        print("This will collect 500-2,000 leads in 30-60 minutes!")
        print()
        
        return True
        
    except googlemaps.exceptions.ApiError as e:
        print()
        print("="*70)
        print("❌ API ERROR")
        print("="*70)
        print(f"Error: {e}")
        print()
        print("COMMON ISSUES:")
        print("1. API key is invalid")
        print("2. Places API not enabled")
        print("   → Go to: https://console.cloud.google.com/")
        print("   → Search: Places API → Enable")
        print("3. Billing not set up (required even for free tier)")
        print("   → Go to: Billing → Set up billing account")
        print("   → Don't worry: You won't be charged (free tier is generous)")
        print()
        return False
        
    except Exception as e:
        print()
        print("="*70)
        print("❌ ERROR")
        print("="*70)
        print(f"Error: {e}")
        print()
        print("Please check:")
        print("1. Internet connection")
        print("2. API key is copied correctly (no extra spaces)")
        print("3. googlemaps package is installed: pip install googlemaps")
        print()
        return False


if __name__ == "__main__":
    try:
        success = test_api_key()
        
        if success:
            print("🎉 Ready to start scraping!")
        else:
            print("⚠️  Please fix the issues above and try again")
            
    except KeyboardInterrupt:
        print("\n\nTest interrupted by user")
    
    input("\nPress ENTER to exit...")

