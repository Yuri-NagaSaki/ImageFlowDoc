import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

export default function HomePage() {
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
            className="group flex items-center gap-2 px-6 py-3 text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            查看文档
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
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
    </main>
  );
}
