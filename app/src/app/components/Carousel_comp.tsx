import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
function Carousel_comp() {
  let Array = ["/carousel1.jpeg","/carousel3.jpeg","carousel2.avif","next.svg"]
    
  return (
    <Carousel className="w-full h-24 md:h-48 md:w-[80%] border-none outline-none ">
      <CarouselContent>
        {Array.map((index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full h-full ">
              <img className='w-full h-24 md:h-48' src={index} alt="afs" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Carousel_comp