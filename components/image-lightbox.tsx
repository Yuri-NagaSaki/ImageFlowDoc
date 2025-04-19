'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { type RenderSlideProps } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import { type ImageItem } from './carousel-section';

const Lightbox = dynamic(
  () => import("yet-another-react-lightbox"), 
  { ssr: false }
);

interface ImageLightboxProps {
  images: ImageItem[];
  open: boolean;
  index: number;
  onClose: () => void;
}

export function ImageLightbox({ images, open, index, onClose }: ImageLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={images}
      plugins={[Zoom, Fullscreen, Counter]}
      animation={{ fade: 320 }}
      carousel={{ preload: 2 }}
      render={{
        slide: ({ slide }: RenderSlideProps) => {
          return (
            <div className="relative w-full h-full flex items-center justify-center bg-black/95">
              <Image
                src={slide.src}
                alt={slide.alt || ""}
                width={slide.width}
                height={slide.height}
                className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
                priority
                quality={100}
              />
            </div>
          );
        },
        buttonPrev: () => (
          <button
            type="button"
            className="yarl__button absolute left-3 top-[50%] -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        ),
        buttonNext: () => (
          <button
            type="button"
            className="yarl__button absolute right-3 top-[50%] -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-blur rounded-full p-2 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        ),
      }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, .95)" },
        button: { filter: "none" },
      }}
    />
  );
} 