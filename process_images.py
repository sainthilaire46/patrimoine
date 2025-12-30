
import shutil
import os

# Config
source_dir = "/Users/olivierguillemant/Desktop/Sainthilaire46/ancien_site_backup/Sainthilaire46/wp-content/uploads/2019/12/"
dest_dir = "/Users/olivierguillemant/Desktop/Sainthilaire46/images/"
list_file = "/Users/olivierguillemant/Desktop/Sainthilaire46/recovered_images_list.txt"

html_templates = {
    'Moulin du Prat': [],
    'Moulin de la Ressègue': []
}

current_section = None

print("Starting processing...")

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

with open(list_file, 'r') as f:
    for line in f:
        line = line.strip()
        if not line: continue
        
        if line.startswith("---"):
            if "Prat" in line:
                current_section = 'Moulin du Prat'
            elif "Ress" in line: # covers Ressègue/Ressegue
                current_section = 'Moulin de la Ressègue'
            continue
            
        if line.startswith("Total:"):
            continue
            
        # exclude non-image lines if any slipped in
        if not line.lower().endswith(('.jpg', '.jpeg', '.png')):
            continue
            
        filename = line
        src_path = os.path.join(source_dir, filename)
        dst_path = os.path.join(dest_dir, filename)
        
        # Copy file
        try:
            if os.path.exists(src_path):
                shutil.copy2(src_path, dst_path)
            else:
                print(f"Warning: Source file not found: {filename}")
                # Try without -1 or with ?? No, stick to exact match first.
        except Exception as e:
            print(f"Error copying {filename}: {e}")
            
        # Generate HTML
        # Using a responsive grid item
        html_item = f"""
            <div class="aspect-[4/3] group overflow-hidden rounded-sm shadow-md cursor-pointer relative" onclick="openLightbox('images/{filename}')">
                <img src="images/{filename}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Photo historique" loading="lazy">
                <div class="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-all duration-300"></div>
                <i class="fas fa-search-plus absolute bottom-2 right-2 text-white/0 group-hover:text-white/90 text-xl transition-all duration-300 drop-shadow-md"></i>
            </div>"""
        
        if current_section:
            html_templates[current_section].append(html_item)

# Output HTML to files for easy reading/usage
for section, items in html_templates.items():
    print(f"\n--- HTML for {section} ({len(items)} items) ---")
    
    # Grid container
    grid_html = """
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    """ + "".join(items) + """
    </div>
    """
    
    # Save to a temp file to read back with tool or just print simplified
    # We will write to separate files for easier injection
    filename_safe = section.replace(" ", "_").lower() + "_gallery.html"
    with open(f"/Users/olivierguillemant/Desktop/Sainthilaire46/{filename_safe}", "w") as out:
        out.write(grid_html)
    print(f"Saved gallery HTML to {filename_safe}")

print("Done.")
