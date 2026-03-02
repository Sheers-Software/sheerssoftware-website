"""
Master Scraper - Run All Lead Collection Scripts
=================================================

This script runs all available scrapers and combines results

Usage:
    python RUN_ALL_SCRAPERS.py

Output:
    combined_leads.csv - All leads from all sources
"""

import subprocess
import pandas as pd
import os
from datetime import datetime

# =============================================================================
# CONFIGURATION
# =============================================================================

SCRAPERS = [
    {
        'name': 'Google Places API',
        'script': '01_google_places_scraper.py',
        'output': 'google_places_leads.csv',
        'enabled': True,  # Set to False to skip
        'priority': 1  # Run first (best source)
    },
    {
        'name': 'OpenRice Malaysia',
        'script': '02_openrice_scraper.py',
        'output': 'openrice_leads.csv',
        'enabled': False,  # Requires longer time, enable if needed
        'priority': 2
    },
    {
        'name': 'Manual Directories',
        'script': '03_manual_directory_scraper.py',
        'output': 'manual_directory_leads.csv',
        'enabled': True,
        'priority': 3
    },
]

COMBINED_OUTPUT = 'combined_leads_all_sources.csv'

# =============================================================================
# MASTER SCRAPER
# =============================================================================

class MasterScraper:
    def __init__(self):
        self.results = []
        self.all_leads = []
    
    def run_scraper(self, scraper_info):
        """Run a single scraper script"""
        name = scraper_info['name']
        script = scraper_info['script']
        output_file = scraper_info['output']
        
        print(f"\n{'='*70}")
        print(f"Running: {name}")
        print(f"{'='*70}\n")
        
        try:
            # Run the scraper script
            result = subprocess.run(
                ['python', script],
                capture_output=True,
                text=True,
                timeout=3600  # 1 hour timeout
            )
            
            # Check if output file was created
            if os.path.exists(output_file):
                df = pd.read_csv(output_file)
                lead_count = len(df)
                
                print(f"\n✅ {name} completed: {lead_count} leads")
                
                self.results.append({
                    'scraper': name,
                    'status': 'success',
                    'leads': lead_count,
                    'file': output_file
                })
                
                return df
            else:
                print(f"\n⚠️  {name}: No output file generated")
                self.results.append({
                    'scraper': name,
                    'status': 'no_output',
                    'leads': 0,
                    'file': None
                })
                return None
                
        except subprocess.TimeoutExpired:
            print(f"\n⚠️  {name}: Timeout (>1 hour)")
            self.results.append({
                'scraper': name,
                'status': 'timeout',
                'leads': 0,
                'file': None
            })
            return None
            
        except Exception as e:
            print(f"\n❌ {name}: Error - {e}")
            self.results.append({
                'scraper': name,
                'status': 'error',
                'leads': 0,
                'file': None
            })
            return None
    
    def run_all_scrapers(self):
        """Run all enabled scrapers in priority order"""
        print(f"\n{'#'*70}")
        print("WASTEWISE MASTER SCRAPER - All Sources")
        print(f"{'#'*70}\n")
        print("⏱️  This may take 1-3 hours depending on enabled scrapers")
        print("☕ Grab a coffee and let the system work!\n")
        
        # Sort by priority
        enabled_scrapers = [s for s in SCRAPERS if s['enabled']]
        enabled_scrapers.sort(key=lambda x: x['priority'])
        
        if not enabled_scrapers:
            print("⚠️  No scrapers enabled! Edit SCRAPERS list to enable.")
            return
        
        print(f"📋 Running {len(enabled_scrapers)} scrapers:\n")
        for scraper in enabled_scrapers:
            print(f"   {scraper['priority']}. {scraper['name']}")
        
        input("\n▶️  Press ENTER to start scraping...")
        
        # Run each scraper
        for scraper_info in enabled_scrapers:
            leads_df = self.run_scraper(scraper_info)
            if leads_df is not None:
                self.all_leads.append(leads_df)
        
        print(f"\n{'='*70}")
        print("✅ ALL SCRAPERS COMPLETED!")
        print(f"{'='*70}\n")
        
        self.print_summary()
    
    def combine_and_deduplicate(self):
        """Combine all lead sources and remove duplicates"""
        if not self.all_leads:
            print("⚠️  No leads collected from any scraper")
            return None
        
        print(f"\n📊 Combining {len(self.all_leads)} data sources...")
        
        # Combine all dataframes
        combined = pd.concat(self.all_leads, ignore_index=True)
        
        print(f"   Total records before deduplication: {len(combined)}")
        
        # Remove duplicates based on company name and phone
        combined = combined.drop_duplicates(
            subset=['Company Name', 'Phone Number'],
            keep='first'  # Keep first occurrence
        )
        
        print(f"   Total records after deduplication: {len(combined)}")
        print(f"   Duplicates removed: {len(pd.concat(self.all_leads)) - len(combined)}")
        
        # Sort by ICP tier (best leads first)
        if 'ICP Tier (1/2/3)' in combined.columns:
            combined = combined.sort_values('ICP Tier (1/2/3)', ascending=False)
        
        return combined
    
    def save_combined(self):
        """Save combined leads to CSV"""
        combined = self.combine_and_deduplicate()
        
        if combined is None:
            return
        
        combined.to_csv(COMBINED_OUTPUT, index=False, encoding='utf-8-sig')
        
        print(f"\n💾 COMBINED LEADS SAVED")
        print(f"{'='*70}")
        print(f"📁 File: {COMBINED_OUTPUT}")
        print(f"📊 Total leads: {len(combined)}")
        
        # Statistics
        print(f"\n📈 BREAKDOWN BY SOURCE:")
        if 'Source' in combined.columns:
            source_counts = combined['Source'].value_counts()
            for source, count in source_counts.items():
                print(f"   {source}: {count} leads")
        
        print(f"\n📈 BREAKDOWN BY ICP TIER:")
        if 'ICP Tier (1/2/3)' in combined.columns:
            tier_counts = combined['ICP Tier (1/2/3)'].value_counts().sort_index()
            for tier, count in tier_counts.items():
                tier_name = {1: 'Tier 1 (Quick Win)', 2: 'Tier 2 (Growth)', 3: 'Tier 3 (Enterprise)'}
                print(f"   {tier_name.get(tier, f'Tier {tier}')}: {count} leads")
        
        print(f"\n📈 DATA QUALITY:")
        print(f"   With phone numbers: {combined['Phone Number'].astype(bool).sum()}")
        print(f"   With emails: {combined['Email Address'].astype(bool).sum()}")
        if 'Website' in combined.columns:
            print(f"   With websites: {combined['Website'].astype(bool).sum()}")
        
        # Preview
        print(f"\n📋 PREVIEW (Top 10 Leads):")
        preview_cols = ['Company Name', 'Phone Number', 'City', 'ICP Tier (1/2/3)', 'Source']
        available_cols = [col for col in preview_cols if col in combined.columns]
        print(combined[available_cols].head(10).to_string(index=False))
    
    def print_summary(self):
        """Print summary of all scraper results"""
        print("\n📊 SCRAPING SUMMARY")
        print(f"{'='*70}\n")
        
        total_leads = sum(r['leads'] for r in self.results)
        successful = sum(1 for r in self.results if r['status'] == 'success')
        
        print(f"Scrapers run: {len(self.results)}")
        print(f"Successful: {successful}")
        print(f"Total leads collected: {total_leads}\n")
        
        print("Details:")
        for result in self.results:
            status_emoji = {
                'success': '✅',
                'no_output': '⚠️',
                'timeout': '⏱️',
                'error': '❌'
            }
            emoji = status_emoji.get(result['status'], '❓')
            print(f"  {emoji} {result['scraper']}: {result['leads']} leads ({result['status']})")
    
    def generate_next_steps_guide(self):
        """Generate personalized next steps based on results"""
        total_leads = sum(r['leads'] for r in self.results)
        
        print(f"\n{'='*70}")
        print("📋 YOUR NEXT STEPS")
        print(f"{'='*70}\n")
        
        if total_leads == 0:
            print("⚠️  No leads collected. Troubleshooting needed:")
            print("   1. Check Google API key is configured")
            print("   2. Verify internet connection")
            print("   3. Review error messages above")
            print("   4. Try manual collection (see LEAD-LIST-GUIDE.md)")
        
        elif total_leads < 100:
            print(f"✅ Good start! You have {total_leads} leads.\n")
            print("IMMEDIATE ACTIONS (This Week):")
            print("   1. Open combined_leads_all_sources.csv")
            print("   2. Score all leads using LEAD-LIST-GUIDE.md system")
            print("   3. Identify top 10-20 HOT leads (score 90-100)")
            print("   4. Begin personalized outreach (WhatsApp/Email)")
            print("   5. Track responses in spreadsheet")
            print("\nNEXT STEPS (This Month):")
            print("   6. Run scrapers again to get 200-500 total leads")
            print("   7. Import to CRM (HubSpot, Pipedrive)")
            print("   8. Set up follow-up sequences")
        
        elif total_leads < 500:
            print(f"🎉 Excellent! You have {total_leads} leads.\n")
            print("IMMEDIATE ACTIONS:")
            print("   1. Import combined_leads_all_sources.csv to CRM")
            print("   2. Segment by ICP tier (1/2/3)")
            print("   3. Score top 50-100 leads manually")
            print("   4. Begin systematic outreach:")
            print("      - HOT leads (90-100): Same day contact")
            print("      - WARM leads (75-89): Within 3 days")
            print("      - QUALIFIED leads (60-74): Within 2 weeks")
            print("   5. Set up email nurture campaigns for COLD leads")
            print("\nTARGETS:")
            print("   - Week 1: Contact 50 leads, get 10-15 responses")
            print("   - Week 2: Qualify 20 opportunities")
            print("   - Week 3-4: Send 5-10 proposals")
            print("   - Month 1 Goal: 2-3 customers won")
        
        else:
            print(f"🚀 Outstanding! You have {total_leads} leads!\n")
            print("SCALE-UP ACTIONS:")
            print("   1. Import to enterprise CRM immediately")
            print("   2. Hire/train additional sales reps")
            print("   3. Build automated scoring system")
            print("   4. Create tier-specific nurture sequences")
            print("   5. Set up reporting dashboards")
            print("   6. Implement sales playbook")
            print("\nREVENUE POTENTIAL:")
            conserv_customers = int(total_leads * 0.02)  # 2% conversion
            optimistic_customers = int(total_leads * 0.05)  # 5% conversion
            conserv_revenue = conserv_customers * 3500  # Average RM 3,500/mo
            optimistic_revenue = optimistic_customers * 5000  # Average RM 5,000/mo
            print(f"   Conservative (2% conversion): {conserv_customers} customers")
            print(f"   → RM {conserv_revenue:,}/month revenue")
            print(f"   Optimistic (5% conversion): {optimistic_customers} customers")
            print(f"   → RM {optimistic_revenue:,}/month revenue")
        
        print(f"\n📖 DOCUMENTATION:")
        print("   - Lead scoring: LEAD-LIST-GUIDE.md")
        print("   - ICP definitions: ICP-SEGMENTATION-FRAMEWORK.md")
        print("   - What to offer: PRICING-DELIVERABLES-PAIRING.md")
        print("   - System overview: LEAD-GENERATION-SYSTEM-SUMMARY.md")


# =============================================================================
# MAIN EXECUTION
# =============================================================================

def main():
    """Run the master scraper"""
    
    print("\n" + "="*70)
    print("WASTEWISE MASTER LEAD GENERATION SYSTEM")
    print("="*70)
    print("\n🎯 This script will:")
    print("   1. Run all enabled scrapers")
    print("   2. Collect leads from multiple sources")
    print("   3. Combine and deduplicate results")
    print("   4. Generate ready-to-use lead list\n")
    
    print("⏱️  Estimated time: 1-3 hours")
    print("📊 Expected output: 200-2,000+ leads\n")
    
    print("⚙️  ENABLED SCRAPERS:")
    for scraper in SCRAPERS:
        status = "✅ ENABLED" if scraper['enabled'] else "❌ DISABLED"
        print(f"   {status} - {scraper['name']}")
    
    print("\n📝 Note: You can enable/disable scrapers by editing RUN_ALL_SCRAPERS.py")
    
    scraper = MasterScraper()
    
    try:
        # Run all scrapers
        scraper.run_all_scrapers()
        
        # Combine and save results
        scraper.save_combined()
        
        # Generate next steps
        scraper.generate_next_steps_guide()
        
        print(f"\n{'='*70}")
        print("🎉 LEAD GENERATION COMPLETE!")
        print(f"{'='*70}")
        print(f"\n📁 Your leads are in: {COMBINED_OUTPUT}")
        print("\n🚀 Ready to start selling!")
        
    except KeyboardInterrupt:
        print("\n\n⚠️  Scraping interrupted by user")
        print("Partial results may be available in individual scraper output files")
    
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()


