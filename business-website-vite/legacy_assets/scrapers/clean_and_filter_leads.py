"""
Lead Cleaning & F&B Filtering Script
=====================================

Cleans the scraped data and filters to F&B establishments only
Removes: Hotels, pharmacies, schools, non-F&B businesses
Keeps: Restaurants, cafes, bakeries, food businesses
"""

import pandas as pd
import re
from datetime import datetime

# =============================================================================
# CONFIGURATION
# =============================================================================

INPUT_FILE = 'google_places_leads.csv'
OUTPUT_FILE = 'wastewise_fb_leads_filtered.csv'

# F&B business type keywords (include if present)
FB_KEYWORDS_INCLUDE = [
    'restaurant', 'cafe', 'coffee', 'bakery', 'bistro', 'kitchen',
    'food', 'nasi', 'makan', 'western', 'pizza', 'burger', 'chicken',
    'sushi', 'steamboat', 'bbq', 'grill', 'steak', 'seafood',
    'mamak', 'kopitiam', 'kedai kopi', 'kedai makan', 'warung',
    'restoran', 'kafe', 'catering', 'cooking', 'cuisine', 'dining',
    'eatery', 'bar', 'pub', 'tavern', 'diner', 'canteen',
    'noodle', 'rice', 'mee', 'ayam', 'satay', 'laksa', 'tomyam',
    'dim sum', 'yum cha', 'dessert', 'pastry', 'bread', 'cake',
    'donut', 'waffle', 'crepe', 'ice cream', 'gelato', 'yogurt',
    'tea', 'bubble tea', 'boba', 'juice', 'smoothie',
    'halal', 'vegetarian', 'vegan', 'organic',
    'takoyaki', 'ramen', 'tempura', 'bento', 'shawarma', 'kebab',
    'claypot', 'hotpot', 'shabu', 'korean', 'japanese', 'chinese',
    'thai', 'indian', 'italian', 'mexican', 'arabic', 'western'
]

# Non-F&B keywords (exclude if present without F&B keywords)
NON_FB_KEYWORDS = [
    'hotel', 'motel', 'inn', 'suite', 'lodge', 'homestay', 'resort',
    'hospital', 'clinic', 'pharmacy', 'medical', 'dental', 'doctor',
    'school', 'college', 'university', 'kindergarten', 'taska',
    'bank', 'atm', 'finance', 'insurance',
    'salon', 'spa', 'beauty', 'barber', 'nail',
    'gym', 'fitness', 'yoga', 'sports club',
    'mosque', 'masjid', 'church', 'temple', 'surau',
    'petrol', 'petronas', 'shell', 'caltex', 'station',
    'auto', 'car', 'motor', 'tire', 'workshop',
    'hardware', 'engineering', 'construction',
    'bookstore', 'library', 'optical', 'jewelry',
    'travel', 'tour', 'immigration', 'embassy'
]

# =============================================================================
# CLEANING & FILTERING
# =============================================================================

class LeadCleaner:
    def __init__(self):
        self.df = None
        
    def load_data(self, filename):
        """Load CSV data"""
        print(f"\n📂 Loading: {filename}")
        self.df = pd.read_csv(filename)
        print(f"   Total records: {len(self.df)}")
        return self.df
    
    def is_fb_business(self, row):
        """Determine if business is F&B related"""
        # Combine name and business type for checking
        text = f"{row.get('Company Name', '')} {row.get('Business Type', '')}".lower()
        
        # Check for F&B keywords
        has_fb_keyword = any(keyword in text for keyword in FB_KEYWORDS_INCLUDE)
        
        # Check for non-F&B keywords
        has_non_fb_keyword = any(keyword in text for keyword in NON_FB_KEYWORDS)
        
        # Logic: Include if F&B keyword present, or exclude if non-F&B without F&B
        if has_fb_keyword:
            return True  # F&B business
        elif has_non_fb_keyword and not has_fb_keyword:
            return False  # Clearly non-F&B
        else:
            # Unclear - check business type field more carefully
            business_type = str(row.get('Business Type', '')).lower()
            if any(fb in business_type for fb in ['restaurant', 'cafe', 'bakery', 'food']):
                return True
            return False  # Default: exclude if unsure
    
    def filter_fb_only(self):
        """Filter to F&B establishments only"""
        print(f"\n🔍 Filtering to F&B establishments...")
        
        # Apply filter
        self.df['is_fb'] = self.df.apply(self.is_fb_business, axis=1)
        fb_count = self.df['is_fb'].sum()
        
        print(f"   F&B businesses identified: {fb_count}")
        print(f"   Non-F&B businesses: {len(self.df) - fb_count}")
        
        # Keep only F&B
        self.df = self.df[self.df['is_fb'] == True].copy()
        self.df = self.df.drop(columns=['is_fb'])
        
        print(f"   ✓ Filtered to {len(self.df)} F&B leads")
        
        return self.df
    
    def clean_phone_numbers(self):
        """Standardize phone numbers"""
        print(f"\n📞 Cleaning phone numbers...")
        
        def clean_phone(phone):
            if pd.isna(phone) or str(phone).strip() == '':
                return ''
            
            # Remove all non-digits except +
            phone = re.sub(r'[^\d+]', '', str(phone))
            
            # Malaysian formatting
            if phone.startswith('01') and len(phone) >= 10:
                phone = '+6' + phone
            elif phone.startswith('6') and len(phone) >= 11:
                phone = '+' + phone
            elif not phone.startswith('+') and len(phone) >= 9:
                phone = '+60' + phone.lstrip('0')
            
            return phone if len(phone) > 10 else ''
        
        if 'Phone Number' in self.df.columns:
            self.df['Phone Number'] = self.df['Phone Number'].apply(clean_phone)
            self.df['WhatsApp'] = self.df['Phone Number']  # Assume same
            
            valid_phones = self.df['Phone Number'].astype(bool).sum()
            print(f"   ✓ {valid_phones} leads with valid phone numbers")
        
        return self.df
    
    def remove_duplicates(self):
        """Remove duplicate leads"""
        print(f"\n🔄 Removing duplicates...")
        
        before = len(self.df)
        
        # Remove duplicates based on company name + phone
        self.df = self.df.drop_duplicates(
            subset=['Company Name', 'Phone Number'],
            keep='first'
        )
        
        removed = before - len(self.df)
        print(f"   Duplicates removed: {removed}")
        print(f"   ✓ {len(self.df)} unique leads remaining")
        
        return self.df
    
    def recalculate_icp_tiers(self):
        """Recalculate ICP tiers with better accuracy"""
        print(f"\n🎯 Recalculating ICP tiers...")
        
        def determine_tier(row):
            name = str(row.get('Company Name', '')).lower()
            outlets = int(row.get('Number of Outlets', 1))
            revenue = int(row.get('Estimated Monthly Revenue (RM)', 0))
            
            # Check for chain indicators in name
            chain_keywords = ['chain', 'group', 'holdings', 'international', 
                            'franchise', 'corporation', 'sdn bhd', 'berhad']
            
            is_likely_chain = any(keyword in name for keyword in chain_keywords)
            
            # More aggressive tier 2/3 assignment for chains
            if is_likely_chain:
                if outlets >= 5 or revenue >= 500000:
                    return 3  # Enterprise
                elif outlets >= 2 or revenue >= 150000:
                    return 2  # Growth
            
            # Standard logic
            if outlets >= 10 or revenue >= 1000000:
                return 3  # Enterprise
            elif outlets >= 3 or revenue >= 200000:
                return 2  # Growth
            else:
                return 1  # Quick Win
        
        self.df['ICP Tier (1/2/3)'] = self.df.apply(determine_tier, axis=1)
        
        # Print distribution
        tier_dist = self.df['ICP Tier (1/2/3)'].value_counts().sort_index()
        for tier, count in tier_dist.items():
            tier_name = {1: 'Quick Win', 2: 'Growth', 3: 'Enterprise'}
            print(f"   Tier {tier} ({tier_name.get(tier)}): {count} leads")
        
        return self.df
    
    def add_scoring_hints(self):
        """Add initial scoring hints"""
        print(f"\n💡 Adding scoring hints...")
        
        def get_initial_score_hint(row):
            score = 50  # Base score
            
            # Has phone number
            if row.get('Phone Number'):
                score += 15
            
            # Has website
            if row.get('Website'):
                score += 10
            
            # Has rating
            if pd.notna(row.get('Rating')) and row.get('Rating') != '':
                score += 5
                # High rating
                try:
                    if float(row.get('Rating', 0)) >= 4.0:
                        score += 5
                except:
                    pass
            
            # Has many reviews (popular)
            try:
                reviews = int(row.get('Review Count', 0))
                if reviews > 1000:
                    score += 10
                elif reviews > 500:
                    score += 5
            except:
                pass
            
            return min(score, 100)  # Cap at 100
        
        self.df['Initial Score Hint'] = self.df.apply(get_initial_score_hint, axis=1)
        
        # Suggest lead quality based on hint
        def get_quality_hint(score):
            if score >= 90:
                return 'HOT'
            elif score >= 75:
                return 'WARM'
            elif score >= 60:
                return 'QUALIFIED'
            else:
                return 'COLD'
        
        self.df['Quality Hint'] = self.df['Initial Score Hint'].apply(get_quality_hint)
        
        quality_dist = self.df['Quality Hint'].value_counts()
        for quality, count in quality_dist.items():
            print(f"   {quality}: {count} leads")
        
        return self.df
    
    def save_cleaned(self, filename):
        """Save cleaned data"""
        print(f"\n💾 Saving cleaned data...")
        
        self.df.to_csv(filename, index=False, encoding='utf-8-sig')
        
        print(f"   ✓ Saved to: {filename}")
        print(f"   📊 Total F&B leads: {len(self.df)}")
        
        return filename


# =============================================================================
# MAIN EXECUTION
# =============================================================================

def main():
    """Clean and filter leads"""
    
    print("\n" + "="*70)
    print("LEAD CLEANING & F&B FILTERING")
    print("="*70)
    
    cleaner = LeadCleaner()
    
    try:
        # Load data
        cleaner.load_data(INPUT_FILE)
        
        # Filter to F&B only
        cleaner.filter_fb_only()
        
        # Clean data
        cleaner.clean_phone_numbers()
        cleaner.remove_duplicates()
        cleaner.recalculate_icp_tiers()
        cleaner.add_scoring_hints()
        
        # Save cleaned data
        output = cleaner.save_cleaned(OUTPUT_FILE)
        
        print("\n" + "="*70)
        print("✅ CLEANING COMPLETE!")
        print("="*70)
        
        # Print summary
        df = cleaner.df
        
        print(f"\n📊 FINAL LEAD SUMMARY:")
        print(f"   Total F&B Leads: {len(df)}")
        print(f"   With Phone Numbers: {df['Phone Number'].astype(bool).sum()}")
        print(f"   With Websites: {df['Website'].astype(bool).sum()}")
        print(f"   With Emails: {df['Email Address'].astype(bool).sum()}")
        
        print(f"\n🎯 ICP TIER BREAKDOWN:")
        tier_dist = df['ICP Tier (1/2/3)'].value_counts().sort_index()
        for tier, count in tier_dist.items():
            pct = (count / len(df)) * 100
            tier_name = {1: 'Quick Win', 2: 'Growth', 3: 'Enterprise'}
            print(f"   Tier {tier} ({tier_name.get(tier)}): {count} leads ({pct:.1f}%)")
        
        print(f"\n⭐ LEAD QUALITY HINTS:")
        quality_dist = df['Quality Hint'].value_counts()
        for quality in ['HOT', 'WARM', 'QUALIFIED', 'COLD']:
            count = quality_dist.get(quality, 0)
            pct = (count / len(df)) * 100 if len(df) > 0 else 0
            print(f"   {quality}: {count} leads ({pct:.1f}%)")
        
        print(f"\n📍 TOP CITIES:")
        if 'City' in df.columns:
            city_dist = df['City'].value_counts().head(10)
            for city, count in city_dist.items():
                print(f"   {city}: {count} leads")
        
        print(f"\n📋 PREVIEW (Top 10 Best Leads):")
        # Sort by quality hint and initial score
        preview_df = df.sort_values(['Quality Hint', 'Initial Score Hint'], ascending=[True, False])
        preview_cols = ['Company Name', 'Phone Number', 'City', 'ICP Tier (1/2/3)', 'Quality Hint', 'Initial Score Hint']
        print(preview_df[preview_cols].head(10).to_string(index=False))
        
        print(f"\n📂 NEXT STEPS:")
        print(f"   1. Open: {OUTPUT_FILE}")
        print(f"   2. Focus on: HOT and WARM leads first")
        print(f"   3. Score manually using: ../LEAD-LIST-GUIDE.md")
        print(f"   4. Start outreach with top 20-30 leads")
        print(f"   5. Track responses and conversions")
        
        print(f"\n🚀 You're ready to start selling!")
        
    except FileNotFoundError:
        print(f"\n❌ ERROR: Could not find {INPUT_FILE}")
        print("   Make sure the Google Places scraper completed successfully")
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()


