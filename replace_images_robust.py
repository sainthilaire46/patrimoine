
import re
import os

files_map = {
    'moulin_prat.html': 'moulin_du_prat_gallery.html',
    'moulin_ressegue.html': 'moulin_de_la_ressègue_gallery.html'
}

base_dir = "/Users/olivierguillemant/Desktop/Sainthilaire46/"

def process_file(html_filename, gallery_filename):
    html_path = os.path.join(base_dir, html_filename)
    gallery_path = os.path.join(base_dir, gallery_filename)
    
    print(f"Processing {html_filename}...")
    
    if not os.path.exists(html_path):
        print(f"Error: {html_path} not found.")
        return
    if not os.path.exists(gallery_path):
        print(f"Error: {gallery_path} not found.")
        return

    with open(html_path, 'r') as f:
        content = f.read()
    
    with open(gallery_path, 'r') as f:
        gallery_content = f.read()
        
    # We want to replace the existing grid div with the new one.
    # The existing grid starts with: <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    # The new grid starts with: <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
    # We will look for the section markers to be safe.
    # <!-- Gallery Section --> ... <!-- Lightbox Overlay -->
    
    pattern = re.compile(
        r'(<!-- Gallery Section -->\s*<section.*?>\s*<h3.*?>Galerie Photos</h3>\s*)(.*?)(</section>)', 
        re.DOTALL
    )
    
    # Check if we find the section
    match = pattern.search(content)
    if match:
        print("Found Gallery Section.")
        header = match.group(1)
        footer = match.group(3)
        
        # New block
        new_block = f"{header}\n{gallery_content}\n{footer}"
        
        # Replace
        new_content = content.replace(match.group(0), new_block)
        
        with open(html_path, 'w') as f:
            f.write(new_content)
        print("Replaced content successfully.")
    else:
        print("Could not find Gallery Section pattern. Dumping snippet for debug:")
        print(content[10000:11000]) # approximate location

print("Starting replacement...")
for html, gal in files_map.items():
    process_file(html, gal)
