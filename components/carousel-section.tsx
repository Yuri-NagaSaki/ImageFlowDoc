'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AutoplayCarousel } from '@/components/ui/carousel-autoplay';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';

export type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

interface CarouselSectionProps {
  images: ImageItem[];
  onViewImage: (index: number) => void;
}

export function CarouselSection({ images, onViewImage }: CarouselSectionProps) {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 在客户端渲染时设置isClient为true
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full max-w-6xl py-20">
      <h2 className="text-3xl font-bold text-center mb-10">功能预览</h2>
      {isClient && (
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <AutoplayCarousel 
            className="w-full"
            opts={{
              loop: true,
              watchDrag: false,
            }}
            setApi={(api) => {
              api?.on('select', () => {
                setCurrentIndex(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent>
              {images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <div 
                    className="relative aspect-video w-full h-full cursor-pointer"
                    onClick={() => onViewImage(idx)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority={idx < 2}
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-medium px-4 py-2 bg-black/40 rounded-lg">点击查看大图</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </AutoplayCarousel>
          <div className="absolute bottom-4 right-4 z-10 bg-black/30 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1}/{images.length}
          </div>
        </div>
      )}
    </section>
  );
} 