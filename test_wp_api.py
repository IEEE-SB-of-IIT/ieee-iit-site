import requests
import json
import re
import os

projectinto_path = r"c:\Users\Dimesh Prasantha\OneDrive\Documents\Projects\IEEE SB Site\ieee-iit-site\constants\projectinto.ts"

# Let's try the WP API first
try:
    res = requests.get("https://ieee.iit.ac.lk/wp-json/wp/v2/pages?per_page=100", headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
    pages = res.json()
    slug_to_desc = {}
    if isinstance(pages, list):
        for p in pages:
            slug = p.get("slug", "")
            excerpt_html = p.get("excerpt", {}).get("rendered", "")
            content_html = p.get("content", {}).get("rendered", "")
            
            # Simple html tag removal
            text = re.sub(r'<[^>]+>', '', excerpt_html).strip()
            if not text:
                text = re.sub(r'<[^>]+>', '', content_html).strip()
                text = re.sub(r'\s+', ' ', text)
                text = text[:300] + "..." if len(text) > 300 else text
            
            slug_to_desc[slug] = text

        print(f"Fetched {len(slug_to_desc)} pages from API.")
        
        # Write slug mappings to a temp file to inspect
        with open("wp_slugs.json", "w", encoding="utf-8") as f:
            json.dump(slug_to_desc, f, indent=2)

except Exception as e:
    print(f"WP API failed: {e}")

