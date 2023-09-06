import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export default function GalleryImages({
  images
}: {
  images: {
    original: string
    thumbnail: string
  }[]
}) {
  return (
    <section className='self-center justify-self-center rounded-lg md:p-5 w-full h-full min-h-[200px]'>
      {!images.length ? (
        <div className='h-full w-full animate-pulse rounded-lg bg-secondary object-cover' />
      ) : (
        <ImageGallery
          items={images}
          showPlayButton={false}
          showBullets
          showNav={false}
          onErrorImageURL='https://i.stack.imgur.com/lA6ai.png'
          showFullscreenButton={false}
        />
      )}
    </section>
  )
}
