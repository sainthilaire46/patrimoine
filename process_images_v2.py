
import os

list_file = "/Users/olivierguillemant/Desktop/Sainthilaire46/recovered_images_list.txt"
images_dir = "/Users/olivierguillemant/Desktop/Sainthilaire46/images/"

html_templates = {
    'Moulin du Prat': [],
    'Moulin de la Ressègue': []
}
image_sizes_report = []

current_section = None

print("Processing images...")

if os.path.exists(list_file):
    with open(list_file, 'r') as f:
        for line in f:
            line = line.strip()
            if not line: continue
            
            if line.startswith("---"):
                if "Prat" in line:
                    current_section = 'Moulin du Prat'
                    image_sizes_report.append(f"\n## {current_section}\n")
                elif "Ress" in line:
                    current_section = 'Moulin de la Ressègue'
                    image_sizes_report.append(f"\n## {current_section}\n")
                continue
                
            if line.startswith("Total:"):
                continue
                
            if not line.lower().endswith(('.jpg', '.jpeg', '.png')):
                continue
                
            filename = line
            file_path = os.path.join(images_dir, filename)
            
            # Get size
            size_str = "Not found"
            if os.path.exists(file_path):
                size_bytes = os.path.getsize(file_path)
                size_kb = size_bytes / 1024
                size_str = f"{size_kb:.1f} KB"
            
            image_sizes_report.append(f"- **{filename}**: {size_str}")
                
            # Generate HTML with label
            # Added a bottom overlay div with the filename
            html_item = f"""
            <div class="aspect-[4/3] group overflow-hidden rounded-sm shadow-md cursor-pointer relative" onclick="openLightbox('images/{filename}')">
                <img src="images/{filename}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Photo historique ({filename})" loading="lazy">
                <div class="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-all duration-300"></div>
                
                <!-- Filename Overlay -->
                <div class="absolute bottom-0 inset-x-0 bg-black/70 text-white text-[10px] text-center py-1 font-mono truncate z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                    {filename} <span class="text-gray-400 ml-1 block text-[9px]">{size_str}</span>
                </div>
                
                <i class="fas fa-search-plus absolute bottom-8 right-2 text-white/0 group-hover:text-white/90 text-xl transition-all duration-300 drop-shadow-md"></i>
            </div>"""
            
            if current_section:
                html_templates[current_section].append(html_item)

# Save Report
with open("image_sizes_report.md", "w") as f:
    f.write("\n".join(image_sizes_report))

# Save HTML galleries
for section, items in html_templates.items():
    grid_html = """
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    """ + "".join(items) + """
    </div>
    """
    
    filename_safe = section.replace(" ", "_").lower().replace("è", "e").replace("é", "e") + "_gallery.html"
    # Handling the filename variance (previous script might have used accent or not)
    # Let's standardize on: moulin_du_prat_gallery.html and moulin_de_la_ressegue_gallery.html
    # But wait, the replace script expects:
    # 'moulin_ressegue.html': 'moulin_de_la_ressègue_gallery.html'
    # So I must match that filename exactly or update the replace script.
    # The previous script used: 
    # filename_safe = section.replace(" ", "_").lower() + "_gallery.html"
    # section "Moulin de la Ressègue" -> "moulin_de_la_ressègue_gallery.html"
    
    # Just to be safe, I'll stick to the logic:
    filename_safe = section.replace(" ", "_").lower() + "_gallery.html"
    
    with open(os.path.join("/Users/olivierguillemant/Desktop/Sainthilaire46/", filename_safe), "w") as out:
        out.write(grid_html)
    print(f"Saved {filename_safe}")

print("Done.")
