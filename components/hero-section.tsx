'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="hidden group-hover:block absolute right-4 w-4 h-4">
    <div className="w-full h-full border-2 border-white border-t-transparent rounded-full animate-spin" />
  </div>
);

export function HeroSection() {
  return (
    <section className="max-w-5xl text-center space-y-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
        ImageFlow Documentation
      </h1>
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
  );
} 