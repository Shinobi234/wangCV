'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Code, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import { BlogCard } from '@/components/BlogCard';

// Sample featured posts data
const featuredPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 13',
    description: 'Learn how to build modern web applications with Next.js 13, including the new app directory and server components.',
    date: '2024-01-15',
    readTime: 8,
    tags: ['Next.js', 'React', 'Web Development'],
    featured: true,
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS',
    description: 'A comprehensive guide to building beautiful and responsive designs with Tailwind CSS utility-first framework.',
    date: '2024-01-10',
    readTime: 12,
    tags: ['CSS', 'Tailwind', 'Design'],
    featured: true,
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    description: 'Essential TypeScript patterns and practices for building maintainable and type-safe applications.',
    date: '2024-01-05',
    readTime: 10,
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    featured: true,
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Blog Posts',
    description: 'Share thoughts and ideas through well-crafted articles',
  },
  {
    icon: Code,
    title: 'Code Snippets',
    description: 'Useful code examples and programming tutorials',
  },
  {
    icon: Palette,
    title: 'Design Ideas',
    description: 'Creative inspiration and design showcases',
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {t('heroSubtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/blog">
                    {t('readLatestPosts')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link href="/contact">
                    {t('getInTouch')}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Find Here</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a diverse collection of content designed to inspire and educate
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('latestPosts')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recent articles and insights from the blog
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}