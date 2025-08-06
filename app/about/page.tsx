'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail, Download } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
  'HTML/CSS', 'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'MongoDB', 'AWS'
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    duration: '2022 - Present',
    description: 'Leading frontend development for modern web applications using React and Next.js.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    duration: '2020 - 2022',
    description: 'Built scalable web applications and APIs using Node.js and React.'
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency',
    duration: '2018 - 2020',
    description: 'Created responsive websites and web applications for various clients.'
  }
];

export default function AboutPage() {
  const { t } = useLanguage();

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('aboutTitle')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('aboutDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                  <p>
                    Hello! I'm a passionate web developer and writer who loves creating
                    beautiful, functional, and user-friendly applications. My journey in
                    tech started over 6 years ago, and I've been fortunate to work on
                    a wide variety of projects.
                  </p>
                  <p>
                    I specialize in modern web technologies, particularly React and Next.js,
                    but I'm always excited to learn new tools and frameworks. When I'm not
                    coding, you'll find me writing blog posts, contributing to open source
                    projects, or exploring the latest trends in web development.
                  </p>
                  <p>
                    I believe in the power of sharing knowledge and helping others grow
                    in their careers. That's why I maintain this blog and actively
                    participate in the developer community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <span className="text-primary font-medium">{exp.company}</span>
                          <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">JD</span>
                  </div>
                  <CardTitle>John Doe</CardTitle>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-2 mb-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://twitter.com" target="_blank">
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="https://linkedin.com" target="_blank">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="mailto:hello@example.com">
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interested in working together or just want to say hello?
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">
                      {t('getInTouch')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}