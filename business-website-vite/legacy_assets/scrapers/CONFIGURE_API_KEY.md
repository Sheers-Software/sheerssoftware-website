# ⚠️ REQUIRED: Configure Google Maps API Key

## You're Almost Ready! Just Need API Key (10 minutes)

Your scrapers are installed and ready. To run them, you need a **FREE** Google Maps API key.

---

## 🚀 FASTEST WAY (10 Minutes)

### Step 1: Get API Key (5 minutes)
1. Go to: https://console.cloud.google.com/
2. Click "Select a project" → "New Project"
3. Name it: "WasteWise Lead Gen"
4. Click "Create"

### Step 2: Enable APIs (2 minutes)
1. Search for "Places API" → Click → Click "ENABLE"
2. Search for "Geocoding API" → Click → Click "ENABLE"

### Step 3: Create API Key (1 minute)
1. Go to: "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "API key"
3. **COPY THE KEY** (looks like: AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX)

### Step 4: Configure Scraper (2 minutes)
1. Open: `01_google_places_scraper.py`
2. Find line 25:
```python
GOOGLE_MAPS_API_KEY = "YOUR_API_KEY_HERE"
```
3. Replace with your actual key:
```python
GOOGLE_MAPS_API_KEY = "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```
4. Save the file

### Step 5: RUN!
```bash
python 01_google_places_scraper.py
```

---

## 💰 COST: $0

- **Free Tier**: 28,000 requests/month
- **Gets You**: ~2,800 businesses
- **Typical Cost**: $0/month (unless you scrape 10,000+ businesses)

---

## 🔥 OR Run Without API Key (Right Now)

If you don't want to get an API key yet, you can run:

```bash
python 02_openrice_scraper.py
```

This scrapes OpenRice Malaysia (no API key needed, but takes 2-4 hours).

---

## ✅ After Configuration

Once you've added your API key, run:

```bash
python 01_google_places_scraper.py
```

Wait 30-60 minutes, and you'll have 500-2,000 leads! 🎉


