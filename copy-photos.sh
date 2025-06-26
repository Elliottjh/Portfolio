#!/bin/bash

# Script to copy the most recent JPEG files from Downloads to public/images
# This helps you quickly populate your portfolio with your latest photos

echo "🏗️  Building Portfolio - Photo Copy Script"
echo "==========================================="

# Create images directory if it doesn't exist
mkdir -p public/images

# Check if Downloads directory exists
if [ ! -d "$HOME/Downloads" ]; then
    echo "❌ Downloads directory not found at $HOME/Downloads"
    exit 1
fi

# Find the most recent JPEG files in Downloads
echo "📸 Finding the most recent JPEG files in Downloads..."

# Get the 15 most recent JPEG files (case insensitive)
recent_jpegs=$(find "$HOME/Downloads" -name "*.jpg" -o -name "*.jpeg" -o -name "*.JPG" -o -name "*.JPEG" | xargs ls -t | head -15)

if [ -z "$recent_jpegs" ]; then
    echo "❌ No JPEG files found in Downloads"
    exit 1
fi

echo "Found the following recent JPEG files:"
echo "$recent_jpegs"
echo ""

# Ask user to confirm
read -p "📋 Do you want to copy these files to public/images/? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📂 Copying files..."
    
    # Copy files with sequential naming
    counter=1
    for file in $recent_jpegs; do
        if [ -f "$file" ]; then
            # Get filename without path
            filename=$(basename "$file")
            extension="${filename##*.}"
            
            # Create meaningful names based on counter
            if [ $counter -eq 1 ]; then
                new_name="hero-image.jpg"
            elif [ $counter -eq 2 ]; then
                new_name="about-hero.jpg"
            elif [ $counter -eq 3 ]; then
                new_name="about-story.jpg"
            elif [ $counter -le 9 ]; then
                project_num=$((counter - 3))
                new_name="project-${project_num}.jpg"
            elif [ $counter -eq 10 ]; then
                new_name="residential-service.jpg"
            elif [ $counter -eq 11 ]; then
                new_name="commercial-service.jpg"
            elif [ $counter -eq 12 ]; then
                new_name="renovation-service.jpg"
            elif [ $counter -eq 13 ]; then
                new_name="carpentry-service.jpg"
            else
                new_name="extra-${counter}.jpg"
            fi
            
            # Copy and rename the file
            cp "$file" "public/images/$new_name"
            echo "✅ Copied: $filename → $new_name"
            
            counter=$((counter + 1))
        fi
    done
    
    echo ""
    echo "🎉 Photos copied successfully!"
    echo "📁 Check the public/images/ folder to see your photos"
    echo ""
    echo "💡 Next steps:"
    echo "   1. Review the photos in public/images/"
    echo "   2. Rename any files if needed"
    echo "   3. Run 'npm run dev' to see your site with the new photos"
    echo "   4. When ready, deploy with 'npm run deploy'"
    
else
    echo "❌ Copy cancelled"
fi 