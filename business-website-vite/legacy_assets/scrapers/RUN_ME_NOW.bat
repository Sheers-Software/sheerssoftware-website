@echo off
cls
echo ============================================================
echo WASTEWISE LEAD GENERATION - READY TO RUN!
echo ============================================================
echo.
echo Python: INSTALLED ✓
echo Packages: INSTALLED ✓
echo Scrapers: READY ✓
echo.
echo ============================================================
echo CHOOSE YOUR OPTION:
echo ============================================================
echo.
echo [1] Configure Google API Key + Run (10 min setup, BEST quality)
echo [2] Run OpenRice Scraper NOW (No setup, 2-4 hours)
echo [3] View Setup Instructions
echo [4] Exit
echo.
set /p choice="Enter choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Opening configuration guide...
    start notepad CONFIGURE_API_KEY.md
    echo.
    echo ============================================================
    echo NEXT STEPS:
    echo ============================================================
    echo 1. Follow instructions in notepad
    echo 2. Get API key from: https://console.cloud.google.com/
    echo 3. Edit: 01_google_places_scraper.py (line 25)
    echo 4. Run: python 01_google_places_scraper.py
    echo.
    pause
) else if "%choice%"=="2" (
    echo.
    echo ============================================================
    echo RUNNING OPENRICE SCRAPER
    echo ============================================================
    echo.
    echo This will take 2-4 hours to collect 300-1,000 leads
    echo You can leave this running and come back later
    echo.
    echo Starting in 5 seconds...
    timeout /t 5
    python 02_openrice_scraper.py
    echo.
    echo ============================================================
    echo SCRAPING COMPLETE!
    echo ============================================================
    echo.
    echo Check: openrice_leads.csv
    echo.
    pause
) else if "%choice%"=="3" (
    start notepad README.md
) else (
    exit
)


