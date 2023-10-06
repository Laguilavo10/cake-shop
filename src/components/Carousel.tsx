import React from 'react'
import { Carousel as CarouselImages } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export function Carousel({ images }: { images?: string[] }) {
  return (
    <>
      {images?.length === 0 ? (
        <div className='h-full w-full animate-pulse bg-slate-500/40' />
      ) : (
        <CarouselImages>
          {images?.map((image) => {
            return <img src={image} key={image} />
          })}
        </CarouselImages>
      )}
    </>
  )
}
