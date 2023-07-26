const IMAGE_URL = process.env.IMAGE_URL
export default function myImageLoader({ src, width, quality }) {
    return `${IMAGE_URL}/${src}?w=${width}&q=${quality || 75}`
  }