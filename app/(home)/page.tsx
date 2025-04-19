'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";
import type { RenderSlideProps } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; 

const Lightbox = dynamic(
  () => import("yet-another-react-lightbox"), 
  { ssr: false }
);

const features = [
  {
    title: '高性能',
    description: '基于 Next.js 构建，具有优秀的性能表现和 SEO 友好特性'
  },
  {
    title: '易于使用',
    description: '直观的界面设计，简单易用的文档系统'
  },
  {
    title: '可扩展',
    description: '模块化设计，支持自定义扩展和插件'
  }
];

const images = [
  { 
    src: '/img/image1.png', 
    alt: 'ImageFlow Screenshot 1',
    width: 1920,
    height: 1080
  },
  { 
    src: '/img/image2.png', 
    alt: 'ImageFlow Screenshot 2',
    width: 1920,
    height: 1080
  },
  { 
    src: '/img/image3.png', 
    alt: 'ImageFlow Screenshot 3',
    width: 1920,
    height: 1080
  },
  { 
    src: '/img/image4.png', 
    alt: 'ImageFlow Screenshot 4',
    width: 1920,
    height: 1080
  },
  { 
    src: '/img/image5.png', 
    alt: 'ImageFlow Screenshot 5',
    width: 1920,
    height: 1080
  },
  { 
    src: '/img/image6.png', 
    alt: 'ImageFlow Screenshot 6',
    width: 1920,
    height: 1080
  },
];

const LoadingSpinner = () => (
  <div className="hidden group-hover:block absolute right-4 w-4 h-4">
    <div className="w-full h-full border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-background">
      {/* Hero Section */}
      <section className="max-w-5xl text-center space-y-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
          ImageFlow Documentation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          现代化的图像处理文档系统，为开发者提供清晰、直观的指南。
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/docs"
            prefetch={true}
            className="group relative flex items-center gap-2 px-6 py-3 text-primary-foreground bg-primary rounded-full 
                     hover:bg-primary/90 transition-all duration-300 ease-in-out
                     shadow-[0_4px_14px_0_rgb(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)]
                     hover:scale-105 active:scale-95"
          >
            <span className="pr-2">查看文档</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <LoadingSpinner />
          </Link>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="w-full max-w-6xl py-20">
        <h2 className="text-3xl font-bold text-center mb-10">功能预览</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-video cursor-pointer overflow-hidden rounded-xl 
                       transform transition-all duration-300 hover:scale-105 bg-black/5"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">点击查看大图</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors feature-card"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
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
    </main>
  );
}
