import os

# Get the current directory
path = os.getcwd()

# Get a list of all the files in the directory
files = os.listdir(path)

# Set a counter to keep track of the number to rename the files to
prefix = input('please enter your prefix: ')
counter = 1

# Loop through each file in the directory
for file in files:
    if os.path.splitext(file)[1] == '.py':
      # If it is, skip this file and move on to the next one
      continue
    # Create the new filename by combining the directory path, the counter, and the original file extension
    new_filename = os.path.join(path, f"{prefix}{counter}{os.path.splitext(file)[1]}")
    
    # Rename the file to the new filename
    os.rename(os.path.join(path, file), new_filename)
    
    # Increment the counter for the next file
    if counter == len(files):
      print('#'.repeat(20))
      print(f'{len(files)} files have been renamed successfully')
      print('#'.repeat(20))
    counter += 1