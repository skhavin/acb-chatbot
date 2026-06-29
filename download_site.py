import requests
from bs4 import BeautifulSoup
import os

URL = "https://acb.telangana.gov.in/"
OUTPUT_DIR = "cloned-site"

def download_website():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Get homepage
    response = requests.get(URL)
    response.raise_for_status()
    
    # Save homepage
    with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(response.text)
    
    print("Homepage downloaded successfully!")

if __name__ == "__main__":
    download_website()

