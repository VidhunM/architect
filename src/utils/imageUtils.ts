/**
 * Utility functions for handling images in The Architects Cluster portfolio
 */

/**
 * Get image path with fallback to placeholder
 * @param imagePath - The path to the image
 * @param fallbackUrl - Optional fallback URL if local image doesn't exist
 */
export const getImagePath = (imagePath: string, fallbackUrl?: string): string => {
  // In production, you might want to check if the image exists
  // For now, we'll return the local path and let the browser handle 404s
  return imagePath;
};

/**
 * Common image paths used throughout the application
 */
export const imagePaths = {
  hero: {
    mainBuilding: '/images/hero/main-building.jpg',
    buildingSide: '/images/hero/building-side.jpg',
  },
  architecture: {
    storyBuilding: '/images/architecture/story-building.jpg',
    spiralStaircase: '/images/architecture/spiral-staircase.jpg',
  },
  services: {
    architecture: '/images/services/architecture.jpg',
    renovation: '/images/services/renovation.jpg',
    interiors: '/images/services/interiors.jpg',
    consultation: '/images/services/consultation.jpg',
  }
};

/**
 * Fallback URLs for when local images are not available
 */
export const fallbackImages = {
  hero: {
    mainBuilding: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop',
    buildingSide: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
  },
  architecture: {
    storyBuilding: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
    spiralStaircase: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
  }
};