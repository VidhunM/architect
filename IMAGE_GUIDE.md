# Image Guide for The Architects Cluster Portfolio

## 📁 Folder Structure Created

```
public/images/
├── hero/              # Main hero section images
├── architecture/      # Architectural project photos
├── services/          # Service-related images
└── README.md          # Detailed documentation
```

## 🖼️ Required Images

### Hero Section (`public/images/hero/`)
- **main-building.jpg** - Main background image for hero section (1920x1080px recommended)
- **building-side.jpg** - Side image in hero section (800x1000px recommended)

### Architecture Gallery (`public/images/architecture/`)
- **story-building.jpg** - Image for "Our Story" section (800x1000px recommended)
- **spiral-staircase.jpg** - Image for "Our Vision" section (800x1200px recommended)

### Services (`public/images/services/`)
- **architecture.jpg** - Architecture service image
- **renovation.jpg** - Renovation service image
- **interiors.jpg** - Interior design service image
- **consultation.jpg** - Consultation service image

## 🎯 How to Add Your Images

1. **Download/prepare your images**
2. **Rename them** according to the list above
3. **Place them** in the correct folders:
   - Hero images → `public/images/hero/`
   - Architecture images → `public/images/architecture/`
   - Service images → `public/images/services/`

## 🔄 Current Status

✅ **Folder structure created**
✅ **Components updated to use local images**
✅ **Fallback system implemented**
⏳ **Waiting for you to add actual images**

## 🚀 What Happens Next

1. When you add images with the correct names, they'll automatically appear
2. If images are missing, the site will show broken image placeholders
3. You can always update the image paths in the components if needed

## 💡 Tips

- Use high-quality images that represent your architectural work
- Keep image file sizes reasonable for web (under 2MB each)
- Use consistent aspect ratios within each section
- JPG format is recommended for photographs

## 🛠️ Updated Components

These components now use local images:
- `src/components/Hero.tsx`
- `src/components/OurStory.tsx`
- `src/components/OurVision.tsx`

## 📞 Need Help?

If you need to change image paths or add more images, you can:
1. Update the paths in the component files
2. Add more images to the folders
3. Update the `imagePaths` object in `src/utils/imageUtils.ts`