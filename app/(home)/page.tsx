'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/hero-section';
import { CarouselSection } from '@/components/carousel-section';
import { ImageLightbox } from '@/components/image-lightbox';
import { imagesData } from '@/components/data/images-data';

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleViewImage = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  const handleCloseLightbox = () => {
    setOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Screenshots Section */}
      <CarouselSection 
        images={imagesData} 
        onViewImage={handleViewImage} 
      />


      {/* Lightbox Component */}
      <ImageLightbox
        images={imagesData}
        open={open}
        index={index}
        onClose={handleCloseLightbox}
      />
    </main>
  );
}
