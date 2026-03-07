import requests
from bs4 import BeautifulSoup
import re

def scrape_and_update():
    projectinto_path = r"c:\Users\Dimesh Prasantha\OneDrive\Documents\Projects\IEEE SB Site\ieee-iit-site\constants\projectinto.ts"
    with open(projectinto_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    blocks = re.findall(r'(\{[^{}]*slug:\s*"([^"]+)"[^{}]*\})', content)
    
    new_content = content
    matched = 0
    total = len(blocks)
    count = 0
    
    for full_match, slug in blocks:
        count += 1
        # Some URLs might have differences like 'inception-2023' vs 'inception23'
        # Let's try the direct slug first
        urls_to_try = [
            f"https://ieee.iit.ac.lk/{slug}/",
            f"https://ieee.iit.ac.lk/{slug.replace('-', '')}/",
            f"https://ieee.iit.ac.lk/{slug.replace('-', '-0')}/", # eg industpro-4 -> industpro-4-0
            f"https://ieee.iit.ac.lk/{slug}-0/"
        ]
        
        desc = None
        for url in urls_to_try:
            try:
                res = requests.get(url, timeout=10)
                if res.status_code == 200:
                    print(f"[{count}/{total}] Success: {url}")
                    e_soup = BeautifulSoup(res.text, 'html.parser')
                    
                    # Check for OG description
                    meta = e_soup.find('meta', attrs={'property': 'og:description'})
                    if meta and meta.get('content') and len(meta['content']) > 50:
                        desc = meta['content']
                    else:
                        # try description tag
                        meta_desc = e_soup.find('meta', attrs={'name': 'description'})
                        if meta_desc and meta_desc.get('content') and len(meta_desc['content']) > 50:
                            desc = meta_desc['content']
                        else:
                            # fallback to first paragraph
                            for p in e_soup.find_all('p'):
                                text = p.get_text(strip=True)
                                if len(text) > 80:
                                    desc = text
                                    break
                    if desc:
                        break # found it!
            except Exception:
                pass
                
        if desc:
            # Clean up desc text a bit, replace smart quotes
            desc = desc.replace('"', '\\"').replace('\n', ' ')
            # truncate if too long
            if len(desc) > 300:
                desc = desc[:297] + "..."
            
            # replace description block
            new_block = re.sub(r'description:\s*"[^"]*"', f'description: "{desc}"', full_match)
            new_content = new_content.replace(full_match, new_block)
            matched += 1
            print(f"  -> Updated: {slug}")
        else:
            print(f"[{count}/{total}] Failed to find description for: {slug}")
            
    with open(projectinto_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Successfully updated {matched}/{total} descriptions in projectinto.ts.")

if __name__ == "__main__":
    scrape_and_update()
