import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'MyBlog - Personal Blog & Portfolio',
    template: '%s | MyBlog'
  },
  description: 'A modern personal blog sharing thoughts, ideas, and experiences through writing. Built with Next.js, Tailwind CSS, and TypeScript.',
  keywords: ['blog', 'personal', 'writing', 'technology', 'web development'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-blog-url.com',
    title: 'MyBlog - Personal Blog & Portfolio',
    description: 'A modern personal blog sharing thoughts, ideas, and experiences through writing.',
    siteName: 'MyBlog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyBlog - Personal Blog & Portfolio',
    description: 'A modern personal blog sharing thoughts, ideas, and experiences through writing.',
    creator: '@yourusername',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}