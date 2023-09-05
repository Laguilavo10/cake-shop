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
  console.log(images);
  
  return (
    <section className='justify-self-center self-center border-4 border-secondary p-5 rounded-lg'>
      <ImageGallery items={images} showPlayButton={false} showBullets showNav={false} onErrorImageURL='https://i.stack.imgur.com/lA6ai.png'/>
    </section>
  )
}