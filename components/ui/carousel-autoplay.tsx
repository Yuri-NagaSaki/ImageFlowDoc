"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { Carousel, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const AutoplayCarousel = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Carousel>>((props, ref) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const autoplayPlugin = React.useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: false }), [])
  
  return (
    <Carousel 
      ref={ref}
      plugins={[autoplayPlugin]}
      setApi={setApi}
      {...props}
    />
  )
})

AutoplayCarousel.displayName = "AutoplayCarousel"

export { AutoplayCarousel } 