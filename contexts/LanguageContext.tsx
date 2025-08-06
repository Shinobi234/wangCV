'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Welcome to My Digital Space',
    heroSubtitle: 'Sharing thoughts, ideas, and experiences through writing',
    heroDescription: 'A personal blog where I explore technology, creativity, and life. Join me on this journey of discovery and learning.',
    readLatestPosts: 'Read Latest Posts',
    getInTouch: 'Get in Touch',
    
    // Blog
    latestPosts: 'Latest Posts',
    readMore: 'Read More',
    backToBlog: 'Back to Blog',
    publishedOn: 'Published on',
    readTime: 'min read',
    
    // About
    aboutTitle: 'About Me',
    aboutDescription: 'I\'m a passionate writer and developer who loves to share knowledge and connect with others through storytelling.',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactDescription: 'Have a question or want to collaborate? I\'d love to hear from you.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    builtWith: 'Built with',
    subscribeNewsletter: 'Subscribe to Newsletter',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    
    // Theme
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
  },
  vi: {
    // Navigation
    home: 'Trang Chủ',
    blog: 'Blog',
    about: 'Giới Thiệu',
    contact: 'Liên Hệ',
    
    // Hero Section
    heroTitle: 'Chào Mừng Đến Không Gian Số Của Tôi',
    heroSubtitle: 'Chia sẻ suy nghĩ, ý tưởng và trải nghiệm qua văn viết',
    heroDescription: 'Một blog cá nhân nơi tôi khám phá công nghệ, sáng tạo và cuộc sống. Hãy cùng tôi trong hành trình khám phá và học hỏi này.',
    readLatestPosts: 'Đọc Bài Viết Mới',
    getInTouch: 'Liên Hệ',
    
    // Blog
    latestPosts: 'Bài Viết Mới Nhất',
    readMore: 'Đọc Thêm',
    backToBlog: 'Quay Lại Blog',
    publishedOn: 'Đăng ngày',
    readTime: 'phút đọc',
    
    // About
    aboutTitle: 'Giới Thiệu',
    aboutDescription: 'Tôi là một người yêu thích viết lách và phát triển, thích chia sẻ kiến thức và kết nối với mọi người thông qua việc kể chuyện.',
    
    // Contact
    contactTitle: 'Liên Hệ',
    contactDescription: 'Có câu hỏi hoặc muốn hợp tác? Tôi rất mong được nghe từ bạn.',
    name: 'Tên',
    email: 'Email',
    message: 'Tin Nhắn',
    sendMessage: 'Gửi Tin Nhắn',
    
    // Footer
    allRightsReserved: 'Bảo lưu mọi quyền',
    builtWith: 'Được xây dựng với',
    subscribeNewsletter: 'Đăng Ký Nhận Tin',
    enterEmail: 'Nhập email của bạn',
    subscribe: 'Đăng Ký',
    
    // Theme
    lightMode: 'Chế Độ Sáng',
    darkMode: 'Chế Độ Tối',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'vi'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}