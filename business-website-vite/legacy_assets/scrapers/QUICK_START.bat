@echo off
REM WasteWise Lead Generation - Quick Start Script for Windows
REM Double-click this file to run the setup and scraper

echo ============================================================
echo WASTEWISE LEAD GENERATION SYSTEM - QUICK START
echo ============================================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed!
    echo.
    echo Please install Python from: https://www.python.org/downloads/
    echo Choose Python 3.8 or higher
    echo.
    pause
    exit /b 1
)

echo Python detected: 
python --version
echo.

REM Ask user if they want to install dependencies
echo Do you want to install required packages? (Y/N)
set /p install_deps="This is needed for first-time setup: "

if /i "%install_deps%"=="Y" (
    echo.
    echo Installing required packages...
    echo This may take 2-5 minutes...
    echo.
    pip install -r requirements.txt
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install packages
        echo Try manually: pip install -r requirements.txt
        pause
        exit /b 1
    )
    echo.
    echo ✓ Packages installed successfully!
    echo.
)

echo ============================================================
echo WHICH SCRAPER DO YOU WANT TO RUN?
echo ============================================================
echo.
echo [1] Google Places API (RECOMMENDED - Best quality, needs API key)
echo [2] OpenRice Malaysia (No API key needed, takes longer)
echo [3] Manual Directory Import (For downloaded files)
echo [4] RUN ALL SCRAPERS (Maximum leads, 1-3 hours)
echo [5] Exit
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo.
    echo Running Google Places API Scraper...
    echo ============================================================
    echo IMPORTANT: Make sure you've configured your API key!
    echo Open 01_google_places_scraper.py and set GOOGLE_MAPS_API_KEY
    echo ============================================================
    echo.
    pause
    python 01_google_places_scraper.py
) else if "%choice%"=="2" (
    echo.
    echo Running OpenRice Malaysia Scraper...
    echo This will take 30-60 minutes...
    echo.
    pause
    python 02_openrice_scraper.py
) else if "%choice%"=="3" (
    echo.
    echo Running Manual Directory Scraper...
    echo Make sure you've added your files to INPUT_FILES list!
    echo.
    pause
    python 03_manual_directory_scraper.py
) else if "%choice%"=="4" (
    echo.
    echo Running ALL Scrapers...
    echo This will take 1-3 hours. You can leave this running!
    echo.
    pause
    python RUN_ALL_SCRAPERS.py
) else (
    echo.
    echo Exiting...
    exit /b 0
)

echo.
echo ============================================================
echo SCRAPING COMPLETE!
echo ============================================================
echo.
echo Your leads are in CSV files in this folder.
echo.
echo NEXT STEPS:
echo 1. Open the CSV file in Excel or Google Sheets
echo 2. Score leads using LEAD-LIST-GUIDE.md
echo 3. Start outreach with top leads!
echo.
pause


