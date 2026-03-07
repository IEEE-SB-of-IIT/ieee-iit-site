import json
import re

def update_descriptions(ts_file_path, json_file_path):
    with open(json_file_path, 'r', encoding='utf-8') as f:
        descriptions = json.load(f)

    with open(ts_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    updated_count = 0

    # Parse and replace each description
    for slug, new_desc in descriptions.items():
        # Match the block for the specific slug
        # We look for slug: "...", name: "...", description: "...",
        pattern = re.compile(
            r'(slug:\s*"' + re.escape(slug) + r'".*?description:\s*")(.*?)(")',
            re.DOTALL | re.IGNORECASE
        )
        
        # Function to escape the new description properly for TS string
        escaped_desc = new_desc.replace('"', '\\"').replace('\n', '\\n')
        
        def repl(match):
            nonlocal updated_count
            updated_count += 1
            return match.group(1) + escaped_desc + match.group(3)
        
        content = pattern.sub(repl, content)

    with open(ts_file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully updated {updated_count} event descriptions.")

if __name__ == "__main__":
    update_descriptions('./constants/projectinto.ts', './manual_descs.json')
