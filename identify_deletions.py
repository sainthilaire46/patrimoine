import os
import glob

# Base IDs of images to remove
ressegue_ids = [
    "0026", "0027", "0029", "0030", "0031", "0041", "0045", "0053", "0054", 
    "0061", "0064", "0066", "0067", "0068", "0070", "0072", "0075", "0084", 
    "0085", "0087", "0088", "0089"
]

prat_ids = [
    "0109", "0111", "0123", "0125", "0127", "0128", "0133", "0137", "0138", 
    "0140", "0143", "0145", "0151", "0153", "0156", "0162", "0163", "0166", 
    "0170"
]

all_ids = ressegue_ids + prat_ids
images_dir = "images"
files_to_delete = []

# Find files matching the IDs
print("Scanning for files to delete...")
for img_id in all_ids:
    pattern = f"DSC_{img_id}*.jpg"
    full_pattern = os.path.join(images_dir, pattern)
    matches = glob.glob(full_pattern)
    files_to_delete.extend(matches)

# Dedup list
files_to_delete = sorted(list(set(files_to_delete)))

if not files_to_delete:
    print("No matching files found.")
else:
    print(f"Found {len(files_to_delete)} files to delete:")
    for f in files_to_delete:
        print(f)
        try:
            os.remove(f)
            print(f"Deleted: {f}")
        except Exception as e:
            print(f"Error deleting {f}: {e}")
    print("Deletion complete.")
