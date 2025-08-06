'use client';

import { PageTransition } from '@/components/PageTransition';
import { BlogCard } from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Sample blog posts data
const allPosts = [
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
  {
    slug: 'react-hooks-guide',
    title: 'Complete Guide to React Hooks',
    description: 'Master React hooks with practical examples and common patterns for modern React development.',
    date: '2023-12-28',
    readTime: 15,
    tags: ['React', 'Hooks', 'JavaScript'],
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization',
    description: 'Techniques and strategies to improve your website\'s loading speed and user experience.',
    date: '2023-12-20',
    readTime: 11,
    tags: ['Performance', 'Web Development', 'Optimization'],
  },
  {
    slug: 'css-grid-flexbox',
    title: 'CSS Grid vs Flexbox: When to Use What',
    description: 'Understanding the differences between CSS Grid and Flexbox and when to use each layout system.',
    date: '2023-12-15',
    readTime: 9,
    tags: ['CSS', 'Layout', 'Web Development'],
  },
];

const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags)));

export default function BlogPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, ideas, and insights on web development, design, and technology
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedTag === null ? 'default' : 'secondary'}
              className="cursor-pointer"
              onClick={() => setSelectedTag(null)}
            >
              All Posts
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No posts found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}