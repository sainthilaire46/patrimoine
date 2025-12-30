
import gzip
import re
import os

# Paths
db_path = "/Users/olivierguillemant/Desktop/Sainthilaire46/ancien_site_backup/Sainthilaire46/wp-content/updraft/backup_2020-02-14-1535_SaintHilaire_b0eaf20c1d74-db.gz"
output_file = "recovered_images_list.txt"

# Gallery IDs to look for
gallery_ids = {
    '29492': 'Moulin du Prat',
    '29558': 'Moulin de la Ressègue'
}

found_images = {
    'Moulin du Prat': [],
    'Moulin de la Ressègue': []
}

def extract_images():
    print(f"Reading {db_path}...")
    try:
        with gzip.open(db_path, 'rt', encoding='utf-8', errors='ignore') as f:
            # We iterate line by line to avoid memory issues and handle line-based dumps
            for line in f:
                for pid, name in gallery_ids.items():
                    # Simple check if line contains interesting data
                    if f"{pid}, '_eg_gallery_data'" in line:
                        print(f"Found match for {name} (ID {pid})")
                        
                        # Extract filenames using regex on the line
                        # Format: .../uploads/2019/12/filename.jpg
                        # We match any jpg inside the uploads folder 2019/12
                        
                        # Note: The grep showed "s:65:\"https://...\""
                        img_pattern = re.compile(r'uploads/2019/12/([^"]+\.jpg)')
                        images = img_pattern.findall(line)
                        
                        # Dedup and add
                        current_set = set(found_images[name])
                        for img in images:
                            img = img.replace('\\', '') # Remove backslashes if any
                            if img not in current_set:
                                found_images[name].append(img)
                                current_set.add(img)

    except Exception as e:
        print(f"Error: {e}")

    # Write results
    with open(output_file, 'w') as f:
        for name, images in found_images.items():
            f.write(f"--- {name} ---\n")
            for img in images:
                f.write(f"{img}\n")
            f.write(f"Total: {len(images)}\n\n")

    print("Extraction complete.")
    for name, images in found_images.items():
        print(f"{name}: {len(images)} images found.")

if __name__ == "__main__":
    extract_images()
