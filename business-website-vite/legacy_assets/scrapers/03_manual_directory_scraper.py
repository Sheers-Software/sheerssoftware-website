"""
Manual Directory Scraper
=========================

Simple scraper for static HTML directories (like Halal Directory exports)

Requirements:
    pip install pandas openpyxl pdfplumber

Handles:
    - CSV files
    - Excel files (XLS, XLSX)
    - PDF tables
    - HTML tables

Perfect for: Government directories, trade show lists, association members
"""

import pandas as pd
import os
from datetime import datetime

# =============================================================================
# CONFIGURATION
# =============================================================================

# Input files (put your downloaded files here)
INPUT_FILES = [
    # Add your files here, e.g.:
    # 'data/halal_directory.pdf',
    # 'data/fdm_exhibitors.xlsx',
    # 'data/restaurant_list.csv',
]

OUTPUT_FILE = 'manual_directory_leads.csv'

# =============================================================================
# SCRAPER FUNCTIONS
# =============================================================================

class ManualDirectoryScraper:
    def __init__(self):
        self.all_leads = []
    
    def process_csv(self, filepath):
        """Process CSV file"""
        print(f"📄 Processing CSV: {filepath}")
        
        try:
            df = pd.read_csv(filepath, encoding='utf-8-sig')
            leads = self._standardize_dataframe(df, 'CSV')
            print(f"   ✓ Extracted {len(leads)} records")
            return leads
        except Exception as e:
            print(f"   ❌ Error: {e}")
            return []
    
    def process_excel(self, filepath):
        """Process Excel file"""
        print(f"📊 Processing Excel: {filepath}")
        
        try:
            df = pd.read_excel(filepath, engine='openpyxl')
            leads = self._standardize_dataframe(df, 'Excel')
            print(f"   ✓ Extracted {len(leads)} records")
            return leads
        except Exception as e:
            print(f"   ❌ Error: {e}")
            return []
    
    def process_pdf(self, filepath):
        """Process PDF with tables"""
        print(f"📑 Processing PDF: {filepath}")
        
        try:
            import pdfplumber
            
            all_tables = []
            with pdfplumber.open(filepath) as pdf:
                for page_num, page in enumerate(pdf.pages, 1):
                    tables = page.extract_tables()
                    if tables:
                        print(f"   Found {len(tables)} table(s) on page {page_num}")
                        all_tables.extend(tables)
            
            # Convert tables to dataframe
            if all_tables:
                # Combine all tables
                combined_data = []
                for table in all_tables:
                    if table:
                        combined_data.extend(table)
                
                # First row is usually header
                if combined_data:
                    headers = combined_data[0]
                    data = combined_data[1:]
                    df = pd.DataFrame(data, columns=headers)
                    leads = self._standardize_dataframe(df, 'PDF')
                    print(f"   ✓ Extracted {len(leads)} records")
                    return leads
            
            print("   ⚠️  No tables found in PDF")
            return []
            
        except Exception as e:
            print(f"   ❌ Error: {e}")
            print("   Note: Install pdfplumber: pip install pdfplumber")
            return []
    
    def _standardize_dataframe(self, df, source_type):
        """Convert any dataframe to standardized lead format"""
        
        # Common column name mappings
        column_mappings = {
            # Company name variations
            'company_name': ['company', 'business name', 'name', 'restaurant', 'company name', 'business_name'],
            # Phone variations
            'phone': ['phone', 'tel', 'telephone', 'contact number', 'phone number', 'mobile'],
            # Email variations
            'email': ['email', 'e-mail', 'email address', 'contact email'],
            # Address variations
            'address': ['address', 'location', 'street', 'full address'],
            # City variations
            'city': ['city', 'town', 'area'],
            # State variations
            'state': ['state', 'province', 'region'],
            # Website variations
            'website': ['website', 'web', 'url', 'site'],
        }
        
        # Normalize column names
        df.columns = df.columns.str.lower().str.strip()
        
        # Map columns
        mapped_data = {}
        for standard_name, variations in column_mappings.items():
            for col in df.columns:
                if any(var in col.lower() for var in variations):
                    mapped_data[standard_name] = df[col]
                    break
        
        # Create standardized leads
        leads = []
        for idx, row in df.iterrows():
            company_name = mapped_data.get('company_name', pd.Series([None] * len(df)))[idx]
            
            if pd.isna(company_name) or str(company_name).strip() == '':
                continue  # Skip empty rows
            
            lead = {
                'Lead ID': f"MAN-{hash(str(company_name)) % 100000:05d}",
                'Date Added': datetime.now().strftime('%Y-%m-%d'),
                'Company Name': str(company_name).strip(),
                'Business Type': 'Restaurant',  # Default
                'Number of Outlets': 1,
                'Estimated Monthly Revenue (RM)': 80000,  # Default estimate
                'Address': str(mapped_data.get('address', pd.Series([None] * len(df)))[idx] or ''),
                'City': str(mapped_data.get('city', pd.Series([None] * len(df)))[idx] or ''),
                'State': str(mapped_data.get('state', pd.Series([None] * len(df)))[idx] or ''),
                'Postal Code': '',
                'Website': str(mapped_data.get('website', pd.Series([None] * len(df)))[idx] or ''),
                'Primary Contact Name': '',
                'Job Title': '',
                'Phone Number': self._clean_phone(str(mapped_data.get('phone', pd.Series([None] * len(df)))[idx] or '')),
                'Email Address': str(mapped_data.get('email', pd.Series([None] * len(df)))[idx] or ''),
                'WhatsApp': '',
                'Biggest Pain Point': '',
                'ICP Tier (1/2/3)': 1,  # Default to Tier 1
                'Lead Score (0-100)': '',
                'Lead Quality (HOT/WARM/QUALIFIED/COLD)': '',
                'Source': f'Manual Directory - {source_type}',
                'Notes': f'Imported from {source_type} file',
                'Follow-up Date': '',
                'Contact Status (New/Contacted/Qualified/Proposal/Won/Lost)': 'New',
                'Owner (Sales Rep)': '',
                'Created By': 'Manual Directory Scraper',
                'Last Modified': datetime.now().strftime('%Y-%m-%d')
            }
            
            leads.append(lead)
        
        return leads
    
    def _clean_phone(self, phone):
        """Clean and format phone number"""
        if not phone or phone == 'None' or phone == 'nan':
            return ''
        
        import re
        # Remove non-digits except +
        phone = re.sub(r'[^\d+]', '', phone)
        
        # Add Malaysia country code if missing
        if phone.startswith('01') and len(phone) > 9:
            phone = '+6' + phone
        elif phone.startswith('6') and len(phone) > 10:
            phone = '+' + phone
        elif not phone.startswith('+') and len(phone) > 9:
            phone = '+60' + phone.lstrip('0')
        
        return phone if len(phone) > 10 else ''
    
    def process_all_files(self):
        """Process all configured input files"""
        print(f"\n{'='*70}")
        print("MANUAL DIRECTORY SCRAPER")
        print(f"{'='*70}\n")
        
        if not INPUT_FILES:
            print("⚠️  No input files configured!")
            print("\n📖 HOW TO USE:")
            print("   1. Download directory files (CSV, Excel, PDF)")
            print("   2. Place files in 'data/' folder")
            print("   3. Update INPUT_FILES list in this script")
            print("   4. Run script again")
            return []
        
        total_leads = 0
        
        for filepath in INPUT_FILES:
            if not os.path.exists(filepath):
                print(f"⚠️  File not found: {filepath}")
                continue
            
            # Determine file type and process
            ext = os.path.splitext(filepath)[1].lower()
            
            if ext == '.csv':
                leads = self.process_csv(filepath)
            elif ext in ['.xlsx', '.xls']:
                leads = self.process_excel(filepath)
            elif ext == '.pdf':
                leads = self.process_pdf(filepath)
            else:
                print(f"⚠️  Unsupported file type: {ext}")
                continue
            
            self.all_leads.extend(leads)
            total_leads += len(leads)
        
        print(f"\n{'='*70}")
        print(f"✅ PROCESSING COMPLETE!")
        print(f"{'='*70}")
        print(f"Total leads extracted: {total_leads}")
        
        return self.all_leads
    
    def save_to_csv(self, filename):
        """Save leads to CSV"""
        if not self.all_leads:
            print("⚠️  No leads to save!")
            return
        
        df = pd.DataFrame(self.all_leads)
        
        # Remove duplicates
        df = df.drop_duplicates(subset=['Company Name', 'Phone Number'], keep='first')
        
        df.to_csv(filename, index=False, encoding='utf-8-sig')
        
        print(f"\n💾 Saved to: {filename}")
        print(f"📊 Total records: {len(df)}")
        
        # Summary
        print(f"\n📈 SUMMARY:")
        print(f"   With phone numbers: {df['Phone Number'].astype(bool).sum()}")
        print(f"   With email: {df['Email Address'].astype(bool).sum()}")
        print(f"   With websites: {df['Website'].astype(bool).sum()}")
        
        # Preview
        print(f"\n📋 PREVIEW:")
        print(df[['Company Name', 'Phone Number', 'Email Address', 'City']].head(10))


# =============================================================================
# MAIN EXECUTION
# =============================================================================

def main():
    """Run the scraper"""
    
    scraper = ManualDirectoryScraper()
    
    try:
        leads = scraper.process_all_files()
        
        if leads:
            scraper.save_to_csv(OUTPUT_FILE)
            
            print(f"\n✅ SUCCESS!")
            print(f"📂 Next: Open {OUTPUT_FILE} and score leads")
            print(f"📖 See: LEAD-LIST-GUIDE.md for scoring instructions")
        else:
            print("\n⚠️  No leads extracted.")
            print("\n💡 TIPS:")
            print("   1. Make sure files are in correct location")
            print("   2. Check file format is supported (CSV, Excel, PDF)")
            print("   3. Ensure files contain business data in tables")
            
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()


