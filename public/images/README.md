# Image Assets for The Architects Cluster Portfolio

This folder contains all the images used in The Architects Cluster portfolio website.

## Folder Structure

```
public/images/
├── hero/              # Hero section images
├── architecture/      # Architectural project images  
├── services/          # Service-related images
└── README.md         # This file
```

## How to Add Images

1. **Place your images** in the appropriate subfolder:
   - `hero/` - For main hero section backgrounds
   - `architecture/` - For architectural project photos
   - `services/` - For service illustrations or photos

2. **Recommended Image Formats:**
   - JPG for photographs
   - PNG for images with transparency
   - WebP for optimized web images

3. **Recommended Image Sizes:**
   - Hero images: 1920x1080px or higher
   - Architecture images: 800x600px minimum
   - Service images: 400x400px minimum

## Using Images in Components

In your React components, reference images like this:

```jsx
// For hero background
<img src="/images/hero/main-building.jpg" alt="Modern Architecture" />

// For architecture gallery
<img src="/images/architecture/project-1.jpg" alt="Project 1" />

// For services
<img src="/images/services/interior-design.jpg" alt="Interior Design" />
```

## Current Image Placeholders

The portfolio currently uses Unsplash images as placeholders. Replace these with your actual project photos:

1. **Hero Section**: Modern building exterior
2. **Our Story**: Architectural interior design
3. **Our Vision**: Spiral staircase or modern architecture
4. **Services**: Various architectural elements

## Tips

- Use descriptive filenames (e.g., `modern-house-exterior.jpg`)
- Optimize images for web to improve loading times
- Maintain consistent aspect ratios within each section
- Use high-quality images that represent your work professionally