#!/bin/bash
# WasteWise Lead Generation - Quick Start Script for Mac/Linux
# Run with: bash QUICK_START.sh

echo "============================================================"
echo "WASTEWISE LEAD GENERATION SYSTEM - QUICK START"
echo "============================================================"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python is not installed!"
    echo ""
    echo "Please install Python from: https://www.python.org/downloads/"
    echo "Or use your package manager:"
    echo "  - Mac: brew install python3"
    echo "  - Ubuntu/Debian: sudo apt install python3"
    echo ""
    exit 1
fi

echo "Python detected:"
python3 --version
echo ""

# Ask user if they want to install dependencies
read -p "Do you want to install required packages? (Y/N) " install_deps

if [[ "$install_deps" =~ ^[Yy]$ ]]; then
    echo ""
    echo "Installing required packages..."
    echo "This may take 2-5 minutes..."
    echo ""
    pip3 install -r requirements.txt
    if [ $? -ne 0 ]; then
        echo ""
        echo "ERROR: Failed to install packages"
        echo "Try manually: pip3 install -r requirements.txt"
        exit 1
    fi
    echo ""
    echo "✓ Packages installed successfully!"
    echo ""
fi

echo "============================================================"
echo "WHICH SCRAPER DO YOU WANT TO RUN?"
echo "============================================================"
echo ""
echo "[1] Google Places API (RECOMMENDED - Best quality, needs API key)"
echo "[2] OpenRice Malaysia (No API key needed, takes longer)"
echo "[3] Manual Directory Import (For downloaded files)"
echo "[4] RUN ALL SCRAPERS (Maximum leads, 1-3 hours)"
echo "[5] Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo ""
        echo "Running Google Places API Scraper..."
        echo "============================================================"
        echo "IMPORTANT: Make sure you've configured your API key!"
        echo "Open 01_google_places_scraper.py and set GOOGLE_MAPS_API_KEY"
        echo "============================================================"
        echo ""
        read -p "Press ENTER to continue..."
        python3 01_google_places_scraper.py
        ;;
    2)
        echo ""
        echo "Running OpenRice Malaysia Scraper..."
        echo "This will take 30-60 minutes..."
        echo ""
        read -p "Press ENTER to continue..."
        python3 02_openrice_scraper.py
        ;;
    3)
        echo ""
        echo "Running Manual Directory Scraper..."
        echo "Make sure you've added your files to INPUT_FILES list!"
        echo ""
        read -p "Press ENTER to continue..."
        python3 03_manual_directory_scraper.py
        ;;
    4)
        echo ""
        echo "Running ALL Scrapers..."
        echo "This will take 1-3 hours. You can leave this running!"
        echo ""
        read -p "Press ENTER to continue..."
        python3 RUN_ALL_SCRAPERS.py
        ;;
    *)
        echo ""
        echo "Exiting..."
        exit 0
        ;;
esac

echo ""
echo "============================================================"
echo "SCRAPING COMPLETE!"
echo "============================================================"
echo ""
echo "Your leads are in CSV files in this folder."
echo ""
echo "NEXT STEPS:"
echo "1. Open the CSV file in Excel or Google Sheets"
echo "2. Score leads using LEAD-LIST-GUIDE.md"
echo "3. Start outreach with top leads!"
echo ""


