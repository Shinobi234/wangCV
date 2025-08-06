'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

// Sample post data - in a real app, this would come from your CMS or markdown files
const samplePost = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with Next.js 13',
  description: 'Learn how to build modern web applications with Next.js 13, including the new app directory and server components.',
  date: '2024-01-15',
  readTime: 8,
  tags: ['Next.js', 'React', 'Web Development'],
  content: `
# Getting Started with Next.js 13

Next.js 13 introduces several groundbreaking features that revolutionize how we build React applications. In this comprehensive guide, we'll explore the new app directory structure, server components, and other exciting features.

## What's New in Next.js 13?

### 1. App Directory Structure
The new app directory provides a more intuitive way to organize your application. Instead of the traditional pages directory, you can now use:

- **Layouts**: Shared UI that persists across multiple pages
- **Pages**: The UI of a route that is unique to a route
- **Loading**: Loading UI for a segment and its children
- **Error**: Error UI for a segment and its children

### 2. Server Components
Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client. This results in:

- Faster initial page loads
- Better SEO
- Improved performance on slower devices

### 3. Streaming and Suspense
Next.js 13 fully embraces React 18's Suspense feature, allowing you to:

- Stream parts of your page as they become ready
- Show loading states for specific components
- Improve perceived performance

## Getting Started

To create a new Next.js 13 application, run:

\`\`\`bash
npx create-next-app@latest my-app --experimental-app
cd my-app
npm run dev
\`\`\`

## Building Your First App Directory Route

Create a new route by adding a page.tsx file in your app directory:

\`\`\`typescript
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 13!</h1>
      <p>This is rendered using the new app directory.</p>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Use Server Components by Default**: Only use Client Components when you need interactivity
2. **Leverage Layouts**: Create reusable layouts for consistent UI
3. **Implement Loading States**: Use loading.tsx files for better UX
4. **Handle Errors Gracefully**: Add error.tsx files for error boundaries

## Conclusion

Next.js 13 represents a significant leap forward in React development. The new app directory structure, combined with Server Components and improved streaming capabilities, makes it easier than ever to build fast, scalable web applications.

Start experimenting with these new features today and see how they can improve your development experience and application performance.
  `
};

export default function BlogPostPage() {
  const params = useParams();
  const { t } = useLanguage();
  const slug = params.slug as string;

  // In a real app, you would fetch the post data based on the slug
  const post = samplePost;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <PageTransition>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backToBlog')}
            </Link>
          </Button>
        </motion.div>

        {/* Post Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          
          <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{t('publishedOn')} {new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} {t('readTime')}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.header>

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, '<br>').replace(/```(\w+)?\n([\s\S]*?)\n```/g, '<pre><code class="language-$1">$2</code></pre>')
            }}
          />
        </motion.div>

        {/* Post Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm text-muted-foreground">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('backToBlog')}
              </Link>
            </Button>
            
            <Button variant="ghost" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share this post
            </Button>
          </div>
        </motion.footer>
      </article>
    </PageTransition>
  );
}