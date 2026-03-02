# Web Scraping Implementation Guide
## Malaysian F&B Directory Lead Generation

**Created**: November 4, 2025  
**Purpose**: Technical guide for scraping F&B establishment data from Malaysian directories  
**Legal Compliance**: Aligned with Malaysia PDPA and ethical scraping practices

---

## ⚠️ IMPORTANT LEGAL DISCLAIMER

### Before You Begin: Legal & Ethical Considerations

**✅ ALLOWED (Generally Legal):**
- Publicly available business information
- Data displayed without login
- Business names, addresses, phone numbers (publicly listed)
- Information from business directories
- Data available via search engines

**❌ NOT ALLOWED (Illegal/Unethical):**
- Personal data requiring login/password
- Data marked "private" or behind paywalls
- Circumventing security measures
- Ignoring robots.txt restrictions
- Overwhelming servers (DDoS-like behavior)
- Reselling scraped personal data

### Malaysian Laws to Consider

**Personal Data Protection Act 2010 (PDPA)**
- Applies to: Personal data of individuals
- Business contact info: Generally okay (business-to-business)
- Personal contact info: Must have consent
- **Best Practice**: Only scrape business-identified contacts

**Computer Crimes Act 1997**
- Section 3: Unauthorized access = offense
- Section 4: Unauthorized modification = offense
- **Best Practice**: Only access publicly available data

**Copyright Act 1987**
- Don't copy entire database content
- Factual data (names, addresses): Not copyrightable
- Creative descriptions: May be copyrighted
- **Best Practice**: Extract facts only, rewrite descriptions

---

## RECOMMENDED SCRAPING APPROACH

### Option 1: Manual Collection (SAFEST)
**Best for**: <100 leads, one-time collection

**Process:**
1. Visit directory website
2. Manually copy-paste into spreadsheet
3. No tools needed, 100% legal
4. Time: ~2-5 minutes per lead

**Pros:**
- ✅ Zero legal risk
- ✅ No technical skills needed
- ✅ Highest data quality

**Cons:**
- ❌ Time-consuming
- ❌ Not scalable
- ❌ Manual errors possible

### Option 2: Browser Extension (EASIEST)
**Best for**: 100-500 leads, occasional use

**Recommended Tools:**
- **Data Miner** (Chrome/Firefox) - Free
- **Web Scraper** (Chrome) - Free
- **Instant Data Scraper** (Chrome) - Free

**Process:**
1. Install extension
2. Navigate to directory
3. Click extension icon
4. Select data elements
5. Extract to CSV

**Pros:**
- ✅ No coding required
- ✅ Visual interface
- ✅ Quick setup

**Cons:**
- ❌ Limited to single-page extraction
- ❌ Requires manual pagination
- ❌ Less customizable

### Option 3: No-Code Tools (RECOMMENDED)
**Best for**: 500-5,000 leads, ongoing collection

**Recommended Tools:**

**A) Octoparse** (Recommended)
- Cost: Free (limited) or ~RM 300/month
- Skill Level: Beginner-friendly
- Cloud-based scraping
- Visual point-and-click interface
- Scheduled scraping
- Website: octoparse.com

**B) ParseHub**
- Cost: Free (limited) or ~RM 400/month
- Skill Level: Beginner
- Desktop application
- Good for JavaScript-heavy sites
- Website: parsehub.com

**C) Apify**
- Cost: Pay-as-you-go (~RM 50-200/month)
- Skill Level: Intermediate
- Cloud-based
- Ready-made scrapers available
- Website: apify.com

**Process (Octoparse Example):**
1. Sign up for Octoparse
2. Create new task → Enter URL
3. Auto-detect web data (or manual selection)
4. Configure: fields to extract
5. Run scraper (local or cloud)
6. Export to CSV

**Pros:**
- ✅ No coding required
- ✅ Handles pagination automatically
- ✅ Cloud-based (runs 24/7)
- ✅ Can schedule regular scraping

**Cons:**
- ❌ Monthly cost (after free tier)
- ❌ Learning curve (2-4 hours)
- ❌ May struggle with complex sites

### Option 4: Python Scripting (MOST POWERFUL)
**Best for**: 5,000+ leads, advanced customization, developers

**Tech Stack:**
- Python 3.8+
- BeautifulSoup4 (HTML parsing)
- Requests (HTTP requests)
- Selenium (JavaScript-heavy sites)
- Pandas (data manipulation)

**When to Use:**
- Need advanced logic
- Want full control
- Scraping multiple sources
- Have programming experience

---

## PYTHON SCRAPING IMPLEMENTATION

### Prerequisites

**Install Python Packages:**
```bash
pip install requests beautifulsoup4 selenium pandas lxml
```

**Install Chrome WebDriver (for Selenium):**
1. Download: https://chromedriver.chromium.org/
2. Place in PATH or project folder
3. Match Chrome browser version

### Basic Scraping Script (BeautifulSoup)

**Use Case**: Simple HTML websites

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random

# Target URL (example - replace with actual directory)
BASE_URL = "https://example-directory.com/restaurants"

# Headers to mimic browser
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def scrape_restaurant_listings(page_num=1):
    """
    Scrape restaurant listings from a single page
    """
    url = f"{BASE_URL}?page={page_num}"
    
    # Add random delay (be respectful to servers)
    time.sleep(random.uniform(2, 5))
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'lxml')
        
        restaurants = []
        
        # Find all restaurant entries (CUSTOMIZE based on target site)
        # Example selectors - inspect target site for actual structure
        listings = soup.find_all('div', class_='restaurant-card')
        
        for listing in listings:
            try:
                # Extract data (CUSTOMIZE selectors)
                name = listing.find('h3', class_='restaurant-name').get_text(strip=True)
                address = listing.find('span', class_='address').get_text(strip=True)
                phone = listing.find('a', class_='phone-number').get_text(strip=True)
                
                # Optional fields
                website = listing.find('a', class_='website')
                website = website['href'] if website else ''
                
                cuisine = listing.find('span', class_='cuisine-type')
                cuisine = cuisine.get_text(strip=True) if cuisine else ''
                
                restaurants.append({
                    'Company Name': name,
                    'Address': address,
                    'Phone Number': phone,
                    'Website': website,
                    'Cuisine Type': cuisine,
                    'Source': 'Example Directory',
                    'Date Added': pd.Timestamp.now().strftime('%Y-%m-%d')
                })
                
            except AttributeError as e:
                # Skip entries with missing data
                print(f"Skipping entry due to missing data: {e}")
                continue
        
        return restaurants
        
    except requests.exceptions.RequestException as e:
        print(f"Error fetching page {page_num}: {e}")
        return []

def scrape_all_pages(max_pages=10):
    """
    Scrape multiple pages
    """
    all_restaurants = []
    
    for page in range(1, max_pages + 1):
        print(f"Scraping page {page} of {max_pages}...")
        page_data = scrape_restaurant_listings(page)
        
        if not page_data:
            print(f"No data found on page {page}. Stopping.")
            break
        
        all_restaurants.extend(page_data)
        
        print(f"Collected {len(page_data)} restaurants from page {page}")
    
    return all_restaurants

def save_to_csv(data, filename='restaurant_leads.csv'):
    """
    Save scraped data to CSV
    """
    df = pd.DataFrame(data)
    df.to_csv(filename, index=False, encoding='utf-8-sig')
    print(f"Saved {len(df)} restaurants to {filename}")

# Main execution
if __name__ == "__main__":
    print("Starting scraper...")
    
    # Scrape 10 pages (adjust as needed)
    restaurants = scrape_all_pages(max_pages=10)
    
    # Save to CSV
    if restaurants:
        save_to_csv(restaurants)
        print(f"Total restaurants collected: {len(restaurants)}")
    else:
        print("No data collected.")
```

### Advanced Script (Selenium for JavaScript Sites)

**Use Case**: Dynamic websites with JavaScript content

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import pandas as pd
import time

def setup_driver():
    """
    Configure Chrome WebDriver
    """
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')  # Run in background
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
    
    driver = webdriver.Chrome(options=options)
    return driver

def scrape_with_selenium(url):
    """
    Scrape JavaScript-rendered content
    """
    driver = setup_driver()
    restaurants = []
    
    try:
        driver.get(url)
        
        # Wait for content to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "restaurant-card"))
        )
        
        # Scroll to load more content (if infinite scroll)
        last_height = driver.execute_script("return document.body.scrollHeight")
        while True:
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(2)
            
            new_height = driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height
        
        # Find all restaurant elements
        listings = driver.find_elements(By.CLASS_NAME, "restaurant-card")
        
        for listing in listings:
            try:
                name = listing.find_element(By.CLASS_NAME, "restaurant-name").text
                address = listing.find_element(By.CLASS_NAME, "address").text
                phone = listing.find_element(By.CLASS_NAME, "phone-number").text
                
                restaurants.append({
                    'Company Name': name,
                    'Address': address,
                    'Phone Number': phone,
                    'Date Added': pd.Timestamp.now().strftime('%Y-%m-%d')
                })
                
            except NoSuchElementException:
                continue
        
    except TimeoutException:
        print("Timeout waiting for page to load")
    
    finally:
        driver.quit()
    
    return restaurants

# Main execution
if __name__ == "__main__":
    URL = "https://example-directory.com/restaurants"
    data = scrape_with_selenium(URL)
    
    if data:
        df = pd.DataFrame(data)
        df.to_csv('selenium_leads.csv', index=False)
        print(f"Collected {len(data)} leads")
```

---

## TARGET SOURCES FOR MALAYSIAN F&B LEADS

### 1. OpenRice Malaysia

**URL**: https://www.openrice.com/en/malaysia

**Data Available:**
- Restaurant name
- Address
- Phone number
- Cuisine type
- Price range
- Location/area

**Scraping Difficulty**: Medium
- JavaScript-rendered content
- Use: Selenium
- Respect: robots.txt

**Estimated Leads**: 10,000+ KL/Selangor restaurants

**robots.txt Check:**
```bash
https://www.openrice.com/robots.txt
```
Review before scraping.

### 2. Google Business Listings

**URL**: https://www.google.com/maps

**Data Available:**
- Business name
- Address
- Phone number
- Website
- Hours
- Reviews

**Scraping Method:**
- Use: Google Places API (RECOMMENDED)
- Cost: Free tier (basic details)
- Legal: Official API, fully compliant

**Google Places API Example:**
```python
import googlemaps
import pandas as pd

# API Key (get from Google Cloud Console)
API_KEY = 'YOUR_GOOGLE_API_KEY'

gmaps = googlemaps.Client(key=API_KEY)

def search_restaurants(location, radius=5000):
    """
    Search for restaurants using Google Places API
    """
    results = gmaps.places_nearby(
        location=location,  # (lat, lng)
        radius=radius,  # meters
        type='restaurant'
    )
    
    restaurants = []
    for place in results['results']:
        place_id = place['place_id']
        details = gmaps.place(place_id)['result']
        
        restaurants.append({
            'Company Name': details.get('name'),
            'Address': details.get('formatted_address'),
            'Phone Number': details.get('formatted_phone_number'),
            'Website': details.get('website'),
            'Rating': details.get('rating'),
            'Source': 'Google Places API'
        })
    
    return restaurants

# Example: Search KL City Centre
kl_center = (3.1390, 101.6869)
data = search_restaurants(kl_center, radius=10000)

df = pd.DataFrame(data)
df.to_csv('google_places_leads.csv', index=False)
```

**Cost**: Free for 28,000 requests/month (basic)

### 3. Malaysia Halal Directory

**URL**: https://www.hdcglobal.com/publisher/mhd

**Data Format**: PDF directory

**Data Available:**
- Company name
- Address
- Phone
- Email (sometimes)
- Halal certification number

**Scraping Method:**
- Download PDF manually
- Use PDF parser (PyPDF2, pdfplumber)
- Extract tabular data

**Python PDF Extraction:**
```python
import pdfplumber
import pandas as pd

def extract_from_halal_directory(pdf_path):
    """
    Extract business listings from Halal Directory PDF
    """
    restaurants = []
    
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            # Extract tables
            tables = page.extract_tables()
            
            for table in tables:
                for row in table[1:]:  # Skip header
                    if len(row) >= 4:
                        restaurants.append({
                            'Company Name': row[0],
                            'Address': row[1],
                            'Phone Number': row[2],
                            'Email': row[3] if len(row) > 3 else '',
                            'Source': 'Malaysia Halal Directory'
                        })
    
    return restaurants

# Usage
leads = extract_from_halal_directory('MHD-2021.pdf')
df = pd.DataFrame(leads)
df.to_csv('halal_directory_leads.csv', index=False)
```

### 4. Food & Drinks Malaysia Show Directory

**URL**: https://www.fooddrinksmalaysia.com/

**Data Format**: PDF exhibitor list

**Data Available:**
- Company name
- Contact person
- Phone
- Email
- Products/services

**Method**: Same as Halal Directory (PDF extraction)

### 5. Zomato Malaysia

**URL**: https://www.zomato.com/malaysia

**Data Available:**
- Restaurant name
- Address
- Phone
- Cuisine
- Menu

**Note**: Zomato has API but requires approval
**Alternative**: Scrape public pages (carefully, respect robots.txt)

---

## ETHICAL SCRAPING BEST PRACTICES

### 1. Respect robots.txt

**Check before scraping:**
```
https://example.com/robots.txt
```

**Example robots.txt:**
```
User-agent: *
Disallow: /admin/
Disallow: /private/
Crawl-delay: 10
```

**Respect:**
- `Disallow` paths: Don't scrape
- `Crawl-delay`: Wait X seconds between requests

### 2. Implement Rate Limiting

**Add delays between requests:**
```python
import time
import random

# Random delay 2-5 seconds
time.sleep(random.uniform(2, 5))
```

**Recommended:**
- Small sites: 3-10 seconds between requests
- Large sites: 1-3 seconds
- APIs: Follow rate limit (e.g., 100 req/hour)

### 3. Use Proper User-Agent

**Identify yourself:**
```python
HEADERS = {
    'User-Agent': 'WasteWiseBot/1.0 (+https://wastewise.my/bot)'
}
```

**Avoid:**
- Fake/misleading user agents
- Claiming to be Googlebot
- Empty/generic strings

### 4. Handle Errors Gracefully

```python
try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
except requests.exceptions.Timeout:
    print("Request timeout - server slow")
except requests.exceptions.HTTPError as e:
    if response.status_code == 429:
        print("Rate limited - wait and retry")
        time.sleep(60)
    elif response.status_code == 403:
        print("Forbidden - stop scraping")
except Exception as e:
    print(f"Error: {e}")
```

### 5. Cache & Avoid Re-scraping

**Save intermediate results:**
```python
import json

# Save scraped data
with open('cache.json', 'w') as f:
    json.dump(data, f)

# Load cached data
try:
    with open('cache.json', 'r') as f:
        data = json.load(f)
except FileNotFoundError:
    data = scrape_new_data()
```

**Benefits:**
- Avoid redundant requests
- Resume after errors
- Faster development/testing

---

## DATA CLEANING & ENRICHMENT

### After Scraping: Clean the Data

```python
import pandas as pd
import re

def clean_phone_numbers(phone):
    """
    Standardize Malaysian phone numbers
    """
    if pd.isna(phone):
        return ''
    
    # Remove non-digits
    phone = re.sub(r'[^\d+]', '', str(phone))
    
    # Add Malaysia country code if missing
    if phone.startswith('01'):
        phone = '+6' + phone
    elif not phone.startswith('+'):
        phone = '+60' + phone
    
    return phone

def clean_addresses(address):
    """
    Clean and standardize addresses
    """
    if pd.isna(address):
        return ''
    
    # Remove extra whitespace
    address = ' '.join(address.split())
    
    # Capitalize properly
    address = address.title()
    
    return address

def enrich_with_city_state(address):
    """
    Extract city and state from address
    """
    states = [
        'Selangor', 'Kuala Lumpur', 'Penang', 'Johor', 'Perak',
        'Kedah', 'Kelantan', 'Pahang', 'Melaka', 'Negeri Sembilan',
        'Sabah', 'Sarawak', 'Terengganu', 'Perlis', 'Putrajaya'
    ]
    
    for state in states:
        if state.lower() in address.lower():
            return state
    
    return 'Unknown'

# Usage
df = pd.read_csv('raw_leads.csv')

# Clean phone numbers
df['Phone Number'] = df['Phone Number'].apply(clean_phone_numbers)

# Clean addresses
df['Address'] = df['Address'].apply(clean_addresses)

# Extract state
df['State'] = df['Address'].apply(enrich_with_city_state)

# Remove duplicates
df = df.drop_duplicates(subset=['Company Name', 'Phone Number'])

# Remove entries with no contact info
df = df[df['Phone Number'] != '']

# Save cleaned data
df.to_csv('cleaned_leads.csv', index=False)
print(f"Cleaned data: {len(df)} leads")
```

---

## AUTOMATION & SCHEDULING

### Schedule Regular Scraping

**Option 1: Cron Jobs (Linux/Mac)**
```bash
# Edit crontab
crontab -e

# Run scraper every Monday at 9am
0 9 * * 1 /usr/bin/python3 /path/to/scraper.py
```

**Option 2: Task Scheduler (Windows)**
1. Open: Task Scheduler
2. Create Basic Task
3. Trigger: Weekly (Monday 9am)
4. Action: Start Program
5. Program: python.exe
6. Arguments: C:\path\to\scraper.py

**Option 3: Cloud Scraping (Recommended)**

**Apify Scheduled Actors:**
1. Create scraper on Apify
2. Schedule: Daily/Weekly/Monthly
3. Export: Auto-send to email/Google Sheets
4. Cost: ~RM 50-200/month

**Benefits:**
- Runs automatically
- No local computer needed
- Handles errors/retries
- Export directly to CRM

---

## TROUBLESHOOTING COMMON ISSUES

### Issue 1: "403 Forbidden" Error

**Cause**: Website blocking scrapers

**Solutions:**
1. Add proper User-Agent header
2. Use residential proxies
3. Slow down requests (increase delay)
4. Use Selenium (mimics real browser)

### Issue 2: JavaScript Content Not Loading

**Cause**: Content rendered by JavaScript

**Solution**: Use Selenium
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get(url)

# Wait for JavaScript to load
driver.implicitly_wait(10)

# Now scrape
html = driver.page_source
```

### Issue 3: CAPTCHA Blocking

**Cause**: Anti-bot protection

**Solutions:**
1. Manual solving (for small-scale)
2. CAPTCHA solving services (2Captcha, Anti-Captcha)
3. Avoid: Use official APIs instead
4. Respect: If site doesn't want scraping, don't force it

### Issue 4: IP Banned

**Cause**: Too many requests from same IP

**Solutions:**
1. Increase delays (wait longer)
2. Use proxies (rotate IP addresses)
3. Contact site owner for permission
4. Use official API if available

### Issue 5: Data Not Found

**Cause**: Selectors wrong or page structure changed

**Solution**: Inspect HTML again
```python
# Debug: Print HTML to inspect
print(soup.prettify())

# Try different selectors
listings = soup.find_all('div', class_='restaurant')
# or
listings = soup.select('.restaurant-card')
# or
listings = soup.find_all(attrs={'data-type': 'restaurant'})
```

---

## COMPLIANCE CHECKLIST

Before scraping, verify:

- [ ] Data is publicly available (no login required)
- [ ] robots.txt allows scraping of target pages
- [ ] Rate limiting implemented (delays between requests)
- [ ] Proper User-Agent header included
- [ ] Only collecting business data (not personal data)
- [ ] Have plan to respect opt-outs/unsubscribes
- [ ] Storing data securely
- [ ] Won't resell personal data
- [ ] Have PDPA compliance plan
- [ ] Documented purpose and legal basis

---

## NEXT STEPS

1. **Start Small**: Test scraper on 1-2 pages
2. **Validate Data**: Check accuracy manually
3. **Scale Gradually**: Increase volume slowly
4. **Monitor**: Watch for errors or blocks
5. **Clean Data**: Apply cleaning scripts
6. **Enrich**: Add ICP scoring (see LEAD-LIST-GUIDE.md)
7. **Import to CRM**: Upload to HubSpot/Pipedrive
8. **Begin Outreach**: Start with HOT leads

---

## ALTERNATIVE: OUTSOURCE SCRAPING

If scraping is too complex, consider:

**Freelancers:**
- **Upwork**: ~RM 50-200/project
- **Fiverr**: ~RM 20-100/project
- **Freelancer.com**: ~RM 30-150/project

**Data Providers:**
- **Crunchbase**: Company data (~RM 50/month)
- **ZoomInfo**: B2B contacts (expensive, ~RM 500+/mo)
- **Local data brokers**: Malaysian business lists

**Specify:**
- Target sources (OpenRice, etc.)
- Fields needed (name, phone, email, etc.)
- Data format (CSV)
- Budget and timeline

---

## TOOLS SUMMARY

| Tool | Type | Skill Level | Cost | Best For |
|------|------|-------------|------|----------|
| **Manual** | Copy-paste | Beginner | Free | <100 leads |
| **Data Miner** | Extension | Beginner | Free | 100-500 leads |
| **Octoparse** | No-code | Beginner | RM 300/mo | 500-5k leads |
| **ParseHub** | No-code | Beginner | RM 400/mo | JavaScript sites |
| **Python** | Code | Advanced | Free | 5k+ leads |
| **Apify** | Cloud | Intermediate | RM 50-200/mo | Scheduled scraping |
| **Freelancer** | Outsource | N/A | RM 50-200 | One-time projects |

---

## RECOMMENDED STARTING POINT

**For Non-Technical Users:**
1. Start with **Manual Collection** (50 leads)
2. Test outreach and conversion
3. If successful, upgrade to **Octoparse** (scale to 500-1,000)
4. Hire freelancer for larger databases

**For Technical Users:**
1. Use **Python + BeautifulSoup** for simple sites
2. **Selenium** for JavaScript-heavy sites
3. **Google Places API** for Google Business data
4. Automate with **Apify** or cron jobs

---

## RELATED DOCUMENTS

- **LEAD-LIST-GUIDE.md**: How to use collected leads
- **ICP-SEGMENTATION-FRAMEWORK.md**: How to score/segment leads
- **LEAD-LIST-TEMPLATE.csv**: CSV template for leads

---

## SUPPORT & RESOURCES

**Python Documentation:**
- BeautifulSoup: https://www.crummy.com/software/BeautifulSoup/
- Selenium: https://selenium-python.readthedocs.io/
- Requests: https://docs.python-requests.org/

**Legal Resources:**
- Malaysia PDPA: http://www.pdp.gov.my/
- Robots.txt Guide: https://developers.google.com/search/docs/crawling-indexing/robots/intro

**Community:**
- r/webscraping (Reddit)
- Stack Overflow (tag: web-scraping)

---

## DOCUMENT CONTROL

**Version**: 1.0  
**Created**: November 4, 2025  
**Owner**: Sales & Technology Teams  
**Last Updated**: November 4, 2025  
**Review**: Quarterly (legal compliance evolves)

---

**Final Note**: Scraping should always be a last resort. Prefer official APIs, partnerships, or manual collection when possible. When scraping is necessary, do it ethically, legally, and respectfully.


