import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export default function GalleryImages({ images }: { images: string[] }) {
  console.log(images)
  const imagesWithFormat = images.map((image) => ({
    original: image,
    thumbnail: image,
  }))
  return (
    <section className='w-full rounded-lg'>
      <ImageGallery
        items={imagesWithFormat}
        showPlayButton={false}
        showBullets={true}
        showNav={false}
        showFullscreenButton={false}
      />
    </section>
  )
}
