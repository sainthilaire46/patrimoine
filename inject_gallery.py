
import os

files = {
    '/Users/olivierguillemant/Desktop/Sainthilaire46/moulin_prat.html': '/Users/olivierguillemant/Desktop/Sainthilaire46/moulin_du_prat_gallery.html',
    '/Users/olivierguillemant/Desktop/Sainthilaire46/moulin_ressegue.html': '/Users/olivierguillemant/Desktop/Sainthilaire46/moulin_de_la_ressègue_gallery.html'
}

for target_file, content_file in files.items():
    print(f"Injecting into {target_file}...")
    try:
        with open(target_file, 'r') as f:
            target_content = f.read()
            
        with open(content_file, 'r') as f:
            insert_content = f.read()
            
        new_content = target_content.replace('<!-- GALLERY_PLACEHOLDER -->', insert_content)
        
        with open(target_file, 'w') as f:
            f.write(new_content)
        print("Success.")
    except Exception as e:
        print(f"Error: {e}")
