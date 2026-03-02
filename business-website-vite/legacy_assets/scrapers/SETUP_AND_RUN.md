# Web Scraping Setup & Execution Guide
## Get Your First 1,000+ F&B Leads in 2 Hours

**Last Updated**: November 4, 2025  
**Difficulty**: Beginner-Friendly  
**Time Required**: 30 min setup + 1-2 hours scraping

---

## 🚀 QUICK START (5 Minutes)

### Step 1: Install Python
```bash
# Check if Python is installed
python --version

# If not installed, download from: https://www.python.org/downloads/
# Choose Python 3.8 or higher
```

### Step 2: Install Required Packages
```bash
# Open terminal/command prompt in the scrapers/ folder
cd scrapers

# Install all dependencies at once
pip install googlemaps pandas requests beautifulsoup4 lxml selenium openpyxl pdfplumber
```

### Step 3: Get Google Maps API Key (RECOMMENDED)
1. Go to: https://console.cloud.google.com/
2. Create a new project (or select existing)
3. Enable APIs:
   - Places API
   - Geocoding API
4. Create credentials → API Key
5. Copy the API key

### Step 4: Configure & Run
```bash
# Open 01_google_places_scraper.py in a text editor
# Find line ~25: GOOGLE_MAPS_API_KEY = "YOUR_API_KEY_HERE"
# Replace with your actual API key

# Run the scraper
python 01_google_places_scraper.py
```

**That's it!** Your first leads will start collecting immediately.

---

## 📁 FILE STRUCTURE

```
scrapers/
│
├── 01_google_places_scraper.py   ← RECOMMENDED (Best quality, legal)
├── 02_openrice_scraper.py        ← Optional (Takes longer)
├── 03_manual_directory_scraper.py ← For downloaded files
├── RUN_ALL_SCRAPERS.py            ← Master script (runs everything)
│
├── SETUP_AND_RUN.md               ← This file
│
└── data/                          ← Put downloaded files here
    └── (your PDFs, Excel files, etc.)
```

---

## 🎯 WHICH SCRAPER TO USE?

### Option 1: Google Places API (BEST - RECOMMENDED)
**File**: `01_google_places_scraper.py`

**Pros:**
- ✅ Highest quality data
- ✅ 100% legal (official API)
- ✅ Comprehensive information
- ✅ Fast (2,800 businesses in 30-60 minutes)
- ✅ Includes: phone, address, rating, website

**Cons:**
- ❌ Requires API key (free to get)
- ❌ Free tier limit: 28,000 requests/month

**When to Use**: Primary lead source, always run this first

**Setup Time**: 10 minutes (get API key)
**Scraping Time**: 30-60 minutes
**Expected Leads**: 500-2,000+ (depends on locations)

### Option 2: OpenRice Malaysia
**File**: `02_openrice_scraper.py`

**Pros:**
- ✅ No API key needed
- ✅ Restaurant-specific data
- ✅ Includes cuisine type

**Cons:**
- ❌ Slower (30-60 minutes per city)
- ❌ May hit rate limits
- ❌ HTML structure can change

**When to Use**: Supplement to Google Places, focus on restaurant-only

**Setup Time**: 0 minutes
**Scraping Time**: 2-4 hours (multiple cities)
**Expected Leads**: 300-1,000

**WARNING**: May be blocked if scraping too aggressively. Use responsibly.

### Option 3: Manual Directory Import
**File**: `03_manual_directory_scraper.py`

**Pros:**
- ✅ Works with downloaded files
- ✅ No scraping required
- ✅ Good for: Government directories, trade show lists

**Cons:**
- ❌ You must find and download files first
- ❌ Data quality varies

**When to Use**: You have existing CSV/Excel/PDF files

**Setup Time**: Time to find files
**Processing Time**: 1-5 minutes per file
**Expected Leads**: Depends on file

### Option 4: Run Everything
**File**: `RUN_ALL_SCRAPERS.py`

**What It Does**:
- Runs all enabled scrapers
- Combines results
- Removes duplicates
- Creates master lead file

**When to Use**: Maximum lead generation, overnight run

**Time**: 1-3 hours (automated)
**Expected Leads**: 1,000-5,000+

---

## 📖 DETAILED SETUP INSTRUCTIONS

### Setup for Google Places API (Primary Source)

#### Step 1: Create Google Cloud Project
1. Go to: https://console.cloud.google.com/
2. Click "Select a project" → "New Project"
3. Name: "WasteWise Lead Gen" (or any name)
4. Click "Create"

#### Step 2: Enable Required APIs
1. In Google Cloud Console, go to: "APIs & Services" → "Library"
2. Search for "Places API" → Click → Enable
3. Search for "Geocoding API" → Click → Enable

#### Step 3: Create API Key
1. Go to: "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "API key"
3. Copy the API key (it will look like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)

#### Step 4: (Optional) Restrict API Key
For security (optional but recommended):
1. Click on the API key you just created
2. Under "API restrictions", select "Restrict key"
3. Choose: "Places API" and "Geocoding API"
4. Save

#### Step 5: Configure Scraper
1. Open `01_google_places_scraper.py` in text editor
2. Find line ~25:
```python
GOOGLE_MAPS_API_KEY = "YOUR_API_KEY_HERE"
```
3. Replace with your actual API key:
```python
GOOGLE_MAPS_API_KEY = "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```
4. Save the file

#### Step 6: Customize Locations (Optional)
In the same file, around line ~30, you can edit target locations:
```python
LOCATIONS = {
    "Kuala Lumpur City Centre": (3.1390, 101.6869),
    "KLCC": (3.1578, 101.7123),
    # Add more locations...
}
```

#### Step 7: Run the Scraper
```bash
python 01_google_places_scraper.py
```

Watch it work! It will show progress for each location.

#### Step 8: Find Your Leads
Output file: `google_places_leads.csv`

Open in Excel, Google Sheets, or your CRM!

---

### Setup for OpenRice Scraper (Optional)

#### Step 1: Check robots.txt
```bash
# The scraper will do this automatically, but you can check manually:
# Visit: https://www.openrice.com/robots.txt
# Look for: Disallow directives
```

#### Step 2: Customize Cities (Optional)
Open `02_openrice_scraper.py`, around line ~30:
```python
CITIES = [
    'kuala-lumpur',
    'petaling-jaya',
    # Add or remove cities...
]
```

#### Step 3: Run the Scraper
```bash
python 02_openrice_scraper.py
```

**Note**: This will take 30-60 minutes. Be patient!

#### Step 4: Review Output
Output file: `openrice_leads.csv`

---

### Setup for Manual Directory Import

#### Step 1: Find and Download Directory Files
Good sources:
- Malaysia Halal Directory: https://www.hdcglobal.com/
- Food & Drinks Malaysia Show: https://www.fooddrinksmalaysia.com/
- Google: "malaysian restaurant directory filetype:pdf"
- Trade association member lists

#### Step 2: Organize Files
```bash
# Create data folder if it doesn't exist
mkdir data

# Move your downloaded files there
# Supported formats: CSV, Excel (XLS, XLSX), PDF
```

#### Step 3: Configure Script
Open `03_manual_directory_scraper.py`, around line ~20:
```python
INPUT_FILES = [
    'data/halal_directory.pdf',
    'data/fdm_exhibitors.xlsx',
    'data/restaurant_list.csv',
]
```
List all your files.

#### Step 4: Run the Scraper
```bash
python 03_manual_directory_scraper.py
```

#### Step 5: Check Output
Output file: `manual_directory_leads.csv`

---

## 🚀 RUNNING THE MASTER SCRAPER

### What It Does
`RUN_ALL_SCRAPERS.py` runs all enabled scrapers and combines results into one master file.

### How to Use

#### Step 1: Review Configuration
Open `RUN_ALL_SCRAPERS.py`, around line ~20:
```python
SCRAPERS = [
    {
        'name': 'Google Places API',
        'enabled': True,  # ← Set to False to skip
        'priority': 1
    },
    {
        'name': 'OpenRice Malaysia',
        'enabled': False,  # ← Enable for more leads
        'priority': 2
    },
    # ...
]
```

Enable/disable as needed.

#### Step 2: Run Master Scraper
```bash
python RUN_ALL_SCRAPERS.py
```

This will:
1. Run each enabled scraper
2. Show progress for each
3. Combine all results
4. Remove duplicates
5. Create `combined_leads_all_sources.csv`

#### Step 3: Review Combined Output
The master file includes:
- All leads from all sources
- No duplicates
- Sorted by ICP tier (best leads first)
- Source tracking (know where each lead came from)

---

## 📊 WHAT HAPPENS DURING SCRAPING?

### Google Places API Scraper
```
📍 Searching: Kuala Lumpur City Centre
   Coordinates: (3.139, 101.6869)
  Searching restaurant within 5000m...
  Found 20 results
  Found 20 more results (pagination)
  Found 15 more results (pagination)
    Fetching details: Nando's KLCC...
    Fetching details: The Chicken Rice Shop...
    ...
✓ Completed Kuala Lumpur City Centre (Total so far: 55)

📍 Searching: Penang Georgetown
   ...
```

It will search each location, fetch details for each restaurant, and save to CSV.

### Progress Indicators
- `📍` = New location
- `✓` = Location complete
- `Fetching details: [Name]...` = Getting full info for a restaurant

### When It's Done
```
✅ SCRAPING COMPLETE!
Total leads collected: 1,247
Unique businesses: 1,247

💾 Saved to: google_places_leads.csv
📊 Total records: 1,247

📈 SUMMARY STATISTICS:
   ICP Tier 1 (Quick Win): 892
   ICP Tier 2 (Growth): 298
   ICP Tier 3 (Enterprise): 57
```

---

## 🐛 TROUBLESHOOTING

### Error: "Module not found"
**Problem**: Missing Python packages

**Solution**:
```bash
pip install [package-name]
# or install all at once:
pip install googlemaps pandas requests beautifulsoup4 lxml selenium openpyxl pdfplumber
```

### Error: "Invalid API key"
**Problem**: Google API key not configured or invalid

**Solution**:
1. Double-check you copied the full API key
2. Ensure Places API is enabled
3. Check API key restrictions (if any)
4. Verify you didn't exceed free tier quota

### Error: "403 Forbidden" (OpenRice)
**Problem**: Website is blocking scraper

**Solution**:
1. Increase delay (line ~27, change `MIN_DELAY = 5`, `MAX_DELAY = 10`)
2. Try again in 1 hour (rate limit may reset)
3. Use Google Places API instead

### Error: "Timeout"
**Problem**: Slow internet or server not responding

**Solution**:
1. Check internet connection
2. Increase timeout (find `timeout=15`, change to `timeout=30`)
3. Try again later

### No leads collected
**Problem**: Various causes

**Solution**:
1. **Google Places**: Check API key is valid
2. **OpenRice**: May have changed HTML structure (inspect and update selectors)
3. **Manual**: Ensure files are in correct format and location
4. Run with `-v` flag for verbose output (if available)

### "HTMLParseError" or "AttributeError"
**Problem**: Website HTML structure changed

**Solution**:
- For OpenRice: Inspect current HTML and update selectors
- Or: Use Google Places API instead (more reliable)

---

## 💰 COST BREAKDOWN

### Google Places API
- **Free Tier**: 28,000 requests/month
- **What This Gets You**: ~2,800 businesses with full details (10 requests per business)
- **Cost if Exceeded**: ~$0.017 per request after free tier
- **Typical Monthly Cost**: $0 (unless scraping 10,000+ businesses)

### OpenRice Scraper
- **Cost**: FREE (public web scraping)
- **Limits**: Rate limiting (server may block if too aggressive)

### Manual Directory
- **Cost**: FREE (processing downloaded files)

### All Other Requirements
- **Python**: FREE
- **Python Packages**: FREE
- **Your Time**: 30 min setup + automated scraping

**Total Cost**: $0 for first 2,800 businesses/month ✅

---

## 📈 EXPECTED RESULTS

### Conservative Estimate (Google Places Only)
- **Runtime**: 30-60 minutes
- **Leads Collected**: 500-1,000
- **With Phone Numbers**: 80-90%
- **With Addresses**: 100%
- **Data Quality**: HIGH

### Aggressive Estimate (All Scrapers)
- **Runtime**: 2-4 hours
- **Leads Collected**: 1,500-5,000
- **With Phone Numbers**: 70-85%
- **With Addresses**: 90-100%
- **Data Quality**: MIXED (varies by source)

### After Deduplication
- **Unique Leads**: 1,000-3,000
- **Tier 1 (Quick Win)**: 60-70%
- **Tier 2 (Growth)**: 25-35%
- **Tier 3 (Enterprise)**: 5-10%

---

## 🎯 NEXT STEPS AFTER SCRAPING

### Immediate (This Week)
1. **Open the CSV file** in Excel or Google Sheets
2. **Review first 10-20 leads** to understand data structure
3. **Score top 50 leads** using LEAD-LIST-GUIDE.md scoring system
4. **Identify 10-15 HOT leads** (score 90-100)
5. **Begin outreach** - WhatsApp or Email (use templates in LEAD-LIST-GUIDE.md)

### Short-Term (This Month)
1. **Import to CRM** (HubSpot free, Pipedrive, Salesforce)
2. **Score all leads** or use bulk scoring
3. **Set up follow-up sequences** for each tier
4. **Track conversions** by source and ICP tier
5. **Target**: Contact 100+ leads, qualify 20+, win 2-3 customers

### Long-Term (This Quarter)
1. **Automate scraping** (run weekly/monthly)
2. **Build referral program** (best quality leads)
3. **Expand to new cities** (edit LOCATIONS in scraper)
4. **Hire sales reps** (train on ICP framework)
5. **Target**: 1,000+ leads in pipeline, 10+ customers

---

## 📚 RELATED DOCUMENTATION

- **Scoring & Segmentation**: LEAD-LIST-GUIDE.md
- **ICP Definitions**: ICP-SEGMENTATION-FRAMEWORK.md
- **What to Offer**: PRICING-DELIVERABLES-PAIRING.md
- **System Overview**: LEAD-GENERATION-SYSTEM-SUMMARY.md
- **Web Scraping Deep Dive**: WEB-SCRAPING-IMPLEMENTATION-GUIDE.md

---

## ✅ PRE-RUN CHECKLIST

Before running scrapers, ensure:

- [ ] Python 3.8+ installed
- [ ] All packages installed (`pip install ...`)
- [ ] Google Maps API key obtained (for Google Places)
- [ ] Google Places API enabled
- [ ] API key configured in script
- [ ] Internet connection stable
- [ ] Enough disk space (~50MB for 5,000 leads)
- [ ] Read and understood PDPA compliance (see WEB-SCRAPING-IMPLEMENTATION-GUIDE.md)

---

## 🆘 NEED HELP?

### Documentation
1. Re-read relevant section above
2. Check WEB-SCRAPING-IMPLEMENTATION-GUIDE.md for technical details
3. Review error messages carefully

### Community Help
1. Stack Overflow (tag: python, web-scraping)
2. Reddit: r/webscraping
3. Python Discord communities

### Hire Help
If all else fails, hire a freelancer:
- **Upwork**: ~RM 50-200/project
- **Fiverr**: ~RM 20-100/project
- **Freelancer.com**: ~RM 30-150/project

Search for: "Python web scraping Malaysia"

---

## 🎉 YOU'RE READY!

Everything is set up. Time to run the scrapers and start building your pipeline!

**Recommended First Run**:
```bash
python 01_google_places_scraper.py
```

Good luck, and happy scraping! 🚀📊

---

**Version**: 1.0  
**Last Updated**: November 4, 2025  
**Maintained By**: WasteWise Team


