import os
from PIL import Image

# Set the directory to the current directory
dir_path = os.getcwd()

# Loop through all files in the directory
for file_name in os.listdir(dir_path):
    # Check if the file is an image
    if file_name.endswith(".jpg") or file_name.endswith(".png"):
        # Open the image using pillow
        image_path = os.path.join(dir_path, file_name)
        image = Image.open(image_path)
        
        # Convert the image to webp format
        new_file_name = f"{file_name[:-4]}.webp"
        new_image_path = os.path.join(dir_path, new_file_name)
        image.save(new_image_path, "webp")
        
        # Close the image
        image.close()

print("All images have been converted to WebP format.")