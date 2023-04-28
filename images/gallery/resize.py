from PIL import Image
import os

# Get user input for image width
width = int(input("Enter the desired width: "))

# Set the directory to the current directory
dir_path = os.getcwd()

# Loop through all files in the directory
for file_name in os.listdir(dir_path):
    # Check if the file is an image
    if file_name.endswith(".jpg") or file_name.endswith(".png") or file_name.endswith(".webp"):
        # Open the image using Pillow
        image_path = os.path.join(dir_path, file_name)
        image = Image.open(image_path)
        
        # Calculate the new height based on the aspect ratio of the original image
        aspect_ratio = image.width / image.height
        height = int(width / aspect_ratio)
        
        # Resize the image
        resized_image = image.resize((width, height))
        
        # Overwrite the original image with the resized image
        resized_image.save(image_path)
        
        # Close the image
        image.close()
        
print("All images have been resized.")