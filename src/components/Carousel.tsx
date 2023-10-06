import React from 'react'
import { Carousel as CarouselImages } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export function Carousel({ images }: { images?: string[] }) {
  return (
    <>
      {images?.length === 0 ? (
        <div className='h-96 w-full animate-pulse bg-slate-500/40' />
      ) : (
        <CarouselImages className='!max-h-min [&>*]:!max-h-auto'>
          {images?.map((image) => {
            return <img src={image} key={image} />
          })}
        </CarouselImages>
      )}
    </>
  )
}
