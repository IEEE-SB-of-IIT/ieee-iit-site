import requests
from bs4 import BeautifulSoup

def get_event_description(slug):
    url = f"https://ieee.iit.ac.lk/{slug}/"
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            # Try to get the meta description
            meta = soup.find('meta', attrs={'property': 'og:description'})
            if meta and meta.get('content'):
                return meta['content']
            
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            if meta_desc and meta_desc.get('content'):
                return meta_desc['content']
                
            # Fallback to the first non-empty paragraph
            for p in soup.find_all('p'):
                text = p.get_text(strip=True)
                if len(text) > 30:
                    return text
        else:
            print(f"Failed for slug {slug}: status {response.status_code}")
    except Exception as e:
        print(f"Error for slug {slug}: {e}")
    return None

print("prestige:", get_event_description("prestige"))
print("ignite:", get_event_description("ignite"))
print("industpro-4-0:", get_event_description("industpro-4-0"))
