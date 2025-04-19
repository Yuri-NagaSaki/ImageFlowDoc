"use client"

import * as React from "react"
import { Carousel } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const AutoplayCarousel = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Carousel>>((props, ref) => {
  const autoplayPlugin = React.useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: false }), [])
  
  return (
    <Carousel 
      ref={ref}
      plugins={[autoplayPlugin]}
      {...props}
    />
  )
})

AutoplayCarousel.displayName = "AutoplayCarousel"

export { AutoplayCarousel } 