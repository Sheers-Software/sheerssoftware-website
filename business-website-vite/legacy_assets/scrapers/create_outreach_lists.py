"""
Create Prioritized Outreach Lists
==================================

Generates separate CSV files for each outreach priority:
- HOT leads (contact today)
- WARM leads (contact this week)
- By ICP tier
"""

import pandas as pd

# =============================================================================
# CONFIGURATION
# =============================================================================

INPUT_FILE = 'wastewise_fb_leads_filtered.csv'

# Output files
HOT_LEADS_FILE = 'OUTREACH_1_HOT_LEADS.csv'
WARM_LEADS_FILE = 'OUTREACH_2_WARM_LEADS.csv'
TIER1_FILE = 'ICP_TIER_1_QUICK_WIN.csv'
TIER2_FILE = 'ICP_TIER_2_GROWTH.csv'
TIER3_FILE = 'ICP_TIER_3_ENTERPRISE.csv'

# =============================================================================
# LIST GENERATOR
# =============================================================================

class OutreachListGenerator:
    def __init__(self):
        self.df = None
    
    def load_data(self, filename):
        """Load cleaned data"""
        print(f"\n📂 Loading: {filename}")
        self.df = pd.read_csv(filename)
        print(f"   Total F&B leads: {len(self.df)}")
        return self.df
    
    def create_hot_leads_list(self):
        """Create HOT leads list (90-100 score)"""
        print(f"\n🔥 Creating HOT leads list...")
        
        hot_df = self.df[self.df['Quality Hint'] == 'HOT'].copy()
        
        # Sort by score (highest first)
        hot_df = hot_df.sort_values('Initial Score Hint', ascending=False)
        
        # Add outreach priority
        hot_df.insert(0, 'Priority', range(1, len(hot_df) + 1))
        hot_df.insert(1, 'Action', 'CONTACT TODAY')
        hot_df.insert(2, 'Suggested Approach', 'WhatsApp + Personal')
        
        hot_df.to_csv(HOT_LEADS_FILE, index=False, encoding='utf-8-sig')
        
        print(f"   ✓ {len(hot_df)} HOT leads")
        print(f"   💾 Saved to: {HOT_LEADS_FILE}")
        print(f"   🎯 ACTION: Contact these leads TODAY")
        
        return hot_df
    
    def create_warm_leads_list(self):
        """Create WARM leads list (75-89 score)"""
        print(f"\n⭐ Creating WARM leads list...")
        
        warm_df = self.df[self.df['Quality Hint'] == 'WARM'].copy()
        
        # Sort by score
        warm_df = warm_df.sort_values('Initial Score Hint', ascending=False)
        
        # Add outreach priority
        warm_df.insert(0, 'Priority', range(1, len(warm_df) + 1))
        warm_df.insert(1, 'Action', 'CONTACT THIS WEEK')
        warm_df.insert(2, 'Suggested Approach', 'Email + WhatsApp Follow-up')
        
        warm_df.to_csv(WARM_LEADS_FILE, index=False, encoding='utf-8-sig')
        
        print(f"   ✓ {len(warm_df)} WARM leads")
        print(f"   💾 Saved to: {WARM_LEADS_FILE}")
        print(f"   🎯 ACTION: Contact these leads THIS WEEK")
        
        return warm_df
    
    def create_icp_tier_lists(self):
        """Create separate lists for each ICP tier"""
        print(f"\n🎯 Creating ICP tier lists...")
        
        # Tier 1 - Quick Win
        tier1_df = self.df[self.df['ICP Tier (1/2/3)'] == 1].copy()
        tier1_df = tier1_df.sort_values('Initial Score Hint', ascending=False)
        tier1_df.insert(0, 'Recommended Package', 'Quick Win - RM 2,997/mo')
        tier1_df.insert(1, 'Dream Outcome', 'Save RM 15-25k/mo in 60 days')
        tier1_df.to_csv(TIER1_FILE, index=False, encoding='utf-8-sig')
        print(f"   ✓ Tier 1 (Quick Win): {len(tier1_df)} leads → {TIER1_FILE}")
        
        # Tier 2 - Growth
        tier2_df = self.df[self.df['ICP Tier (1/2/3)'] == 2].copy()
        tier2_df = tier2_df.sort_values('Initial Score Hint', ascending=False)
        tier2_df.insert(0, 'Recommended Package', 'Growth System - RM 5,997/mo')
        tier2_df.insert(1, 'Dream Outcome', 'Save RM 35-50k/mo, 35-45% reduction')
        tier2_df.to_csv(TIER2_FILE, index=False, encoding='utf-8-sig')
        print(f"   ✓ Tier 2 (Growth): {len(tier2_df)} leads → {TIER2_FILE}")
        
        # Tier 3 - Enterprise
        tier3_df = self.df[self.df['ICP Tier (1/2/3)'] == 3].copy()
        tier3_df = tier3_df.sort_values('Initial Score Hint', ascending=False)
        tier3_df.insert(0, 'Recommended Package', 'Enterprise - Custom Pricing')
        tier3_df.insert(1, 'Dream Outcome', 'Save RM 100-300k+/mo, 8% margin increase')
        tier3_df.to_csv(TIER3_FILE, index=False, encoding='utf-8-sig')
        print(f"   ✓ Tier 3 (Enterprise): {len(tier3_df)} leads → {TIER3_FILE}")
        
        return tier1_df, tier2_df, tier3_df
    
    def generate_daily_action_plan(self):
        """Generate action plan for next 7 days"""
        print(f"\n📅 Generating 7-day action plan...")
        
        hot_df = self.df[self.df['Quality Hint'] == 'HOT'].copy()
        hot_df = hot_df.sort_values('Initial Score Hint', ascending=False)
        
        # Top 30 HOT leads for daily outreach
        daily_targets = []
        leads_per_day = 5
        
        for day in range(1, 8):  # 7 days
            start_idx = (day - 1) * leads_per_day
            end_idx = day * leads_per_day
            
            day_leads = hot_df.iloc[start_idx:end_idx]
            
            if len(day_leads) == 0:
                break
            
            daily_targets.append({
                'Day': day,
                'Leads': len(day_leads),
                'Companies': ', '.join(day_leads['Company Name'].head(3).tolist()) + '...'
            })
        
        action_plan_df = pd.DataFrame(daily_targets)
        action_plan_df.to_csv('7_DAY_OUTREACH_PLAN.csv', index=False)
        
        print(f"   ✓ Created 7-day action plan")
        print(f"   💾 Saved to: 7_DAY_OUTREACH_PLAN.csv")
        print(f"\n   📋 WEEK AT A GLANCE:")
        for idx, row in action_plan_df.iterrows():
            print(f"      Day {row['Day']}: {row['Leads']} leads - {row['Companies']}")
        
        return action_plan_df
    
    def print_immediate_actions(self):
        """Print what to do right now"""
        hot_df = self.df[self.df['Quality Hint'] == 'HOT'].copy()
        hot_df = hot_df.sort_values('Initial Score Hint', ascending=False)
        
        print(f"\n{'='*70}")
        print("🚀 YOUR IMMEDIATE ACTION ITEMS")
        print(f"{'='*70}\n")
        
        print("TODAY - Contact These 5 Leads via WhatsApp:")
        print("-" * 70)
        
        for idx, row in hot_df.head(5).iterrows():
            print(f"\n{idx + 1}. {row['Company Name']}")
            print(f"   📱 WhatsApp: {row['Phone Number']}")
            print(f"   📍 Location: {row['City']}, {row['State']}")
            print(f"   🎯 ICP: Tier {row['ICP Tier (1/2/3)']} ({['Quick Win', 'Growth', 'Enterprise'][int(row['ICP Tier (1/2/3)']) - 1]})")
            print(f"   💬 Message: Hi! Are you currently tracking food waste at {row['Company Name']}?")
        
        print(f"\n{'='*70}")
        print("📖 OUTREACH TEMPLATES: See ../LEAD-LIST-GUIDE.md")
        print(f"{'='*70}\n")


# =============================================================================
# MAIN EXECUTION
# =============================================================================

def main():
    """Generate all outreach lists"""
    
    print("\n" + "="*70)
    print("OUTREACH LIST GENERATOR")
    print("="*70)
    
    generator = OutreachListGenerator()
    
    try:
        # Load cleaned data
        generator.load_data(INPUT_FILE)
        
        # Create lists
        generator.create_hot_leads_list()
        generator.create_warm_leads_list()
        generator.create_icp_tier_lists()
        generator.generate_daily_action_plan()
        
        # Print immediate actions
        generator.print_immediate_actions()
        
        print(f"\n✅ ALL LISTS CREATED!")
        print(f"\n📁 YOUR FILES:")
        print(f"   • OUTREACH_1_HOT_LEADS.csv - Contact TODAY")
        print(f"   • OUTREACH_2_WARM_LEADS.csv - Contact THIS WEEK")
        print(f"   • ICP_TIER_1_QUICK_WIN.csv - RM 2,997/mo package")
        print(f"   • ICP_TIER_2_GROWTH.csv - RM 5,997/mo package")
        print(f"   • ICP_TIER_3_ENTERPRISE.csv - Custom pricing")
        print(f"   • 7_DAY_OUTREACH_PLAN.csv - Daily action plan")
        
        print(f"\n🚀 YOU'RE READY TO START SELLING!")
        
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()


