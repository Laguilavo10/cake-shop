import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export default function GalleryImages({ images }: { images: string[] }) {
  const imagesWithFormat = images.map((image) => ({
    original: image,
    thumbnail: image
  }))
  return (
    <section className='w-full rounded-lg'>
      {imagesWithFormat.length === 0 ? (
        <p>f</p>
      ) : (
        <ImageGallery
          items={imagesWithFormat}
          showPlayButton={false}
          showBullets={true}
          showNav={false}
          showFullscreenButton={false}
        />
      )}
    </section>
  )
}
