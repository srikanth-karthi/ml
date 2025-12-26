#!/bin/bash

# Image compression script for web optimization
# This will compress all JPG and PNG files in the public/images directory

IMAGE_DIR="/Users/srikanth/Documents/personal/ML/ml-artcourses/public/images"
QUALITY=80
MAX_WIDTH=1920

echo "Starting image compression..."
echo "Target quality: ${QUALITY}%"
echo "Max width: ${MAX_WIDTH}px"
echo ""

# Create backup directory
BACKUP_DIR="${IMAGE_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
echo "Creating backup at: ${BACKUP_DIR}"
cp -r "${IMAGE_DIR}" "${BACKUP_DIR}"
echo "Backup completed!"
echo ""

# Count total files
total_files=$(find "${IMAGE_DIR}" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
current=0

echo "Found ${total_files} images to compress"
echo ""

# Process all JPG and JPEG files
find "${IMAGE_DIR}" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read file; do
    current=$((current + 1))
    original_size=$(du -h "$file" | cut -f1)

    # Get current width
    width=$(sips -g pixelWidth "$file" | grep pixelWidth | awk '{print $2}')

    # Resize if needed and compress
    if [ "$width" -gt "$MAX_WIDTH" ]; then
        echo "[${current}/${total_files}] Resizing and compressing: $(basename "$file") (${original_size})"
        sips -s format jpeg -s formatOptions ${QUALITY} --resampleWidth ${MAX_WIDTH} "$file" --out "$file" > /dev/null 2>&1
    else
        echo "[${current}/${total_files}] Compressing: $(basename "$file") (${original_size})"
        sips -s format jpeg -s formatOptions ${QUALITY} "$file" --out "$file" > /dev/null 2>&1
    fi

    new_size=$(du -h "$file" | cut -f1)
    echo "    → Compressed to: ${new_size}"
done

# Process all PNG files (convert to JPG for better compression)
find "${IMAGE_DIR}" -type f -iname "*.png" | while read file; do
    current=$((current + 1))
    original_size=$(du -h "$file" | cut -f1)

    # Skip logo files
    if [[ "$file" == *"logo"* ]]; then
        echo "[${current}/${total_files}] Skipping logo: $(basename "$file")"
        continue
    fi

    echo "[${current}/${total_files}] Converting PNG to JPG: $(basename "$file") (${original_size})"

    # Get directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file" .png)

    # Convert PNG to JPG
    new_file="${dir}/${filename}.jpg"
    sips -s format jpeg -s formatOptions ${QUALITY} "$file" --out "$new_file" > /dev/null 2>&1

    # Get current width
    width=$(sips -g pixelWidth "$new_file" | grep pixelWidth | awk '{print $2}')

    # Resize if needed
    if [ "$width" -gt "$MAX_WIDTH" ]; then
        sips --resampleWidth ${MAX_WIDTH} "$new_file" --out "$new_file" > /dev/null 2>&1
    fi

    # Remove original PNG
    rm "$file"

    new_size=$(du -h "$new_file" | cut -f1)
    echo "    → Converted and compressed to: ${new_size}"
done

echo ""
echo "Compression complete!"
echo "Backup saved at: ${BACKUP_DIR}"
echo ""

# Show total size comparison
original_total=$(du -sh "${BACKUP_DIR}" | cut -f1)
new_total=$(du -sh "${IMAGE_DIR}" | cut -f1)
echo "Original total size: ${original_total}"
echo "New total size: ${new_total}"
