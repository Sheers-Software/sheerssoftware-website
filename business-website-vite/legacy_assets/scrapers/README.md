# WasteWise Lead Generation Scrapers
## Get 1,000+ Malaysian F&B Leads Automatically

This folder contains ready-to-run web scrapers for collecting F&B establishment leads in Malaysia.

---

## 🚀 QUICK START (Choose One)

### Option 1: Windows Users - Double-Click to Run
1. Double-click `QUICK_START.bat`
2. Follow the prompts
3. Get leads! ✅

### Option 2: Mac/Linux Users - Terminal
```bash
bash QUICK_START.sh
```

### Option 3: Manual Execution
```bash
# Install dependencies
pip install -r requirements.txt

# Run Google Places scraper (RECOMMENDED)
python 01_google_places_scraper.py
```

---

## 📁 FILES IN THIS FOLDER

### Ready-to-Run Scrapers

1. **01_google_places_scraper.py** ⭐ RECOMMENDED
   - Best quality data
   - 100% legal (official API)
   - Needs: Google Maps API key (free)
   - Time: 30-60 minutes
   - Expected: 500-2,000 leads

2. **02_openrice_scraper.py**
   - No API key needed
   - Restaurant-specific
   - Time: 2-4 hours
   - Expected: 300-1,000 leads

3. **03_manual_directory_scraper.py**
   - Process downloaded files
   - Supports: CSV, Excel, PDF
   - Time: 1-5 minutes per file

4. **RUN_ALL_SCRAPERS.py**
   - Runs all scrapers at once
   - Combines and deduplicates
   - Time: 1-3 hours
   - Expected: 1,000-5,000 leads

### Configuration Files

- **requirements.txt** - Python packages needed
- **SETUP_AND_RUN.md** - Detailed setup guide

### Quick Start Scripts

- **QUICK_START.bat** - Windows quick launcher
- **QUICK_START.sh** - Mac/Linux quick launcher
- **README.md** - This file

---

## 📖 DOCUMENTATION

### For First-Time Users
1. **Start here**: `SETUP_AND_RUN.md` (Step-by-step setup)
2. **Then**: Run `01_google_places_scraper.py`
3. **Finally**: Score leads with `../LEAD-LIST-GUIDE.md`

### For Technical Details
- `../WEB-SCRAPING-IMPLEMENTATION-GUIDE.md` - Deep dive
- `../ICP-SEGMENTATION-FRAMEWORK.md` - Lead scoring
- `../PRICING-DELIVERABLES-PAIRING.md` - What to offer

---

## ⚙️ CONFIGURATION REQUIRED

### Google Places API (Required for 01_google_places_scraper.py)

**Get API Key**:
1. Go to: https://console.cloud.google.com/
2. Create project → Enable Places API
3. Create credentials → API Key
4. Copy key

**Configure**:
1. Open `01_google_places_scraper.py`
2. Line ~25: Replace `"YOUR_API_KEY_HERE"` with your key
3. Save and run

**Cost**: FREE (up to 28,000 requests/month)

### Other Scrapers
- **OpenRice**: No configuration needed
- **Manual Directory**: Add file paths to `INPUT_FILES`

---

## 📊 WHAT YOU'LL GET

### Output Files
- `google_places_leads.csv` - From Google Places
- `openrice_leads.csv` - From OpenRice
- `manual_directory_leads.csv` - From manual imports
- `combined_leads_all_sources.csv` - All sources merged

### Data Included
- ✅ Company Name
- ✅ Phone Number
- ✅ Address (Full)
- ✅ City, State, Postal Code
- ✅ Website (when available)
- ✅ Rating & Review Count
- ✅ Business Type
- ✅ ICP Tier (1/2/3)
- ✅ Source Tracking

### Pre-Calculated Fields
- Estimated Monthly Revenue
- Estimated Number of Outlets
- ICP Tier Assignment
- Likely Pain Points

---

## 🎯 RECOMMENDED WORKFLOW

### Day 1: Setup & First Run
1. Install Python 3.8+
2. Run: `pip install -r requirements.txt`
3. Get Google Maps API key
4. Configure `01_google_places_scraper.py`
5. Run scraper (30-60 min)
6. Review output CSV

### Day 2-3: Lead Scoring
1. Open output CSV in Excel/Sheets
2. Score top 50 leads manually
3. Identify 10-15 HOT leads
4. Use templates from `../LEAD-LIST-GUIDE.md`

### Day 4-7: Outreach
1. Contact HOT leads via WhatsApp/Email
2. Track responses
3. Qualify opportunities
4. Send proposals

### Week 2+: Scale
1. Score remaining leads
2. Import to CRM
3. Set up follow-up sequences
4. Run scrapers monthly for fresh leads

---

## 🐛 TROUBLESHOOTING

### "Module not found"
```bash
pip install [module-name]
# or install all:
pip install -r requirements.txt
```

### "Invalid API key" (Google Places)
- Double-check you copied the full key
- Ensure Places API is enabled
- Check you haven't exceeded quota

### "403 Forbidden" (OpenRice)
- Increase delays in script
- Try again in 1 hour
- Use Google Places instead

### No leads collected
- Check internet connection
- Verify API key (Google Places)
- Review error messages
- See `SETUP_AND_RUN.md` → Troubleshooting

---

## 💰 COST

### Google Places API
- **Free**: 28,000 requests/month
- **Gets You**: ~2,800 businesses
- **Typical Cost**: $0/month ✅

### Everything Else
- **Python**: FREE
- **Packages**: FREE
- **OpenRice Scraper**: FREE
- **Manual Import**: FREE

**Total Monthly Cost**: $0 for most users ✅

---

## 📈 EXPECTED RESULTS

### Google Places Only (30-60 minutes)
- 500-2,000 leads
- 80-90% with phone numbers
- 100% with addresses
- HIGH quality

### All Scrapers (1-3 hours)
- 1,500-5,000 leads
- 70-85% with phone numbers
- 90-100% with addresses
- MIXED quality (varies by source)

### After Scoring
- 10-20% HOT leads (score 90-100)
- 25-35% WARM leads (score 75-89)
- 40-50% QUALIFIED leads (score 60-74)

---

## 🔒 LEGAL & ETHICAL

### We Follow Best Practices
- ✅ Only public data
- ✅ Respects robots.txt
- ✅ Rate limiting implemented
- ✅ Malaysia PDPA compliant
- ✅ Business data (not personal)

### What We DON'T Do
- ❌ Scrape password-protected data
- ❌ Circumvent security
- ❌ Ignore rate limits
- ❌ Resell personal data

See `../WEB-SCRAPING-IMPLEMENTATION-GUIDE.md` for full legal compliance details.

---

## 🆘 GET HELP

### Internal Docs
1. `SETUP_AND_RUN.md` - Setup guide
2. `../WEB-SCRAPING-IMPLEMENTATION-GUIDE.md` - Technical details
3. `../LEAD-LIST-GUIDE.md` - What to do with leads

### External Resources
- Python documentation: https://docs.python.org/
- Google Places API: https://developers.google.com/maps/documentation/places/
- Stack Overflow: https://stackoverflow.com/

### Hire Expert (If Needed)
- Upwork: ~RM 50-200/project
- Fiverr: ~RM 20-100/project
- Search: "Python web scraping Malaysia"

---

## ✅ SUCCESS CHECKLIST

Before first run:
- [ ] Python 3.8+ installed
- [ ] Packages installed (`requirements.txt`)
- [ ] Google API key obtained
- [ ] API key configured in script
- [ ] Read `SETUP_AND_RUN.md`
- [ ] Internet connection stable

After scraping:
- [ ] CSV file generated
- [ ] Preview data looks correct
- [ ] No major errors in console
- [ ] Ready to score leads

---

## 🎉 YOU'RE READY!

1. **Setup takes 10 minutes**
2. **Scraping runs automatically**
3. **Get 1,000+ leads in 1-2 hours**
4. **Start selling same day!**

**Next**: Open `SETUP_AND_RUN.md` for step-by-step instructions.

Or just run: `python 01_google_places_scraper.py` and watch the magic happen! ✨

---

**Questions?** See `SETUP_AND_RUN.md` or `../LEAD-GENERATION-SYSTEM-SUMMARY.md`

**Good luck!** 🚀📊


