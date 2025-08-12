'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// ...existing code...
// Đã có translations ở đầu file, xóa các khai báo translations thừa ở đây
const translations = {
  en: {
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    heroTitle: 'Welcome to My Digital Space',
    heroSubtitle: 'Sharing thoughts, ideas, and experiences through writing',
    heroDescription: 'A personal blog where I explore technology, creativity, and life. Join me on this journey of discovery and learning.',
    readLatestPosts: 'Read Latest Posts',
    getInTouch: 'Get in Touch',
    latestPosts: 'Latest Posts',
    readMore: 'Read More',
    backToBlog: 'Back to Blog',
    publishedOn: 'Published on',
    readTime: 'min read',
    aboutTitle: 'About Me',
    profileName: 'Tran Duy Nhat Quang',
    profileRole: '4th-year IT Student @ DaLat University',
    profileBio1: `Hello! I'm Tran Duy Nhat Quang, a 4th-year IT student at DaLat University, Lam Dong, Vietnam.`,
    profileBio2: `I specialize in Python (Tkinter), Java (NetBeans, Android Studio), and web development with Node.js and VS Code. My passion is building modern web applications, Android apps, and software testing with a minimal, modern design.`,
    profileBio3: `This portfolio highlights my featured projects, learning experiences, and personal growth in programming.`,
    profileEmail: 'Email',
    profilePhone: 'Phone',
    profileGithub: 'GitHub',
    experience1Title: 'Web Application Projects',
    experience1Company: 'Personal & Team Projects',
    experience1Duration: '2022 - Present',
    experience1Desc: 'Developed and deployed modern web applications using Node.js, React, and Next.js with a focus on minimal, modern UI/UX.',
    experience2Title: 'Android App Development',
    experience2Company: 'Personal & Academic',
    experience2Duration: '2021 - Present',
    experience2Desc: 'Built Android applications using Java (Android Studio, NetBeans), focusing on usability and performance.',
    experience3Title: 'Software Testing',
    experience3Company: 'Academic Projects',
    experience3Duration: '2023',
    experience3Desc: 'Applied software testing methodologies to ensure quality and reliability for various software products.',
    skillsList: [
      'Python', 'Tkinter', 'Java', 'Android (Android Studio, NetBeans)',
      'Node.js', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS',
      'VS Code', 'Software Testing', 'Web App', 'Android App', 'Minimal Design'
    ],
    downloadResume: 'Download Resume',
    letsConnect: `Let's Connect`,
    letsConnectDesc: 'Interested in working together or just want to say hello?',
    aboutDescription: `I'm a passionate writer and developer who loves to share knowledge and connect with others through storytelling.`,
  },
  vi: {
    home: 'Trang Chủ',
    blog: 'Blog',
    about: 'Giới Thiệu',
    contact: 'Liên Hệ',
    heroTitle: 'Chào Mừng Đến Không Gian Số Của Tôi',
    heroSubtitle: 'Chia sẻ suy nghĩ, ý tưởng và trải nghiệm qua văn viết',
    heroDescription: 'Một blog cá nhân nơi tôi khám phá công nghệ, sáng tạo và cuộc sống. Hãy cùng tôi trong hành trình khám phá và học hỏi này.',
    readLatestPosts: 'Đọc Bài Viết Mới',
    getInTouch: 'Liên Hệ',
    latestPosts: 'Bài Viết Mới Nhất',
    readMore: 'Đọc Thêm',
    backToBlog: 'Quay Lại Blog',
    publishedOn: 'Đăng ngày',
    readTime: 'phút đọc',
    aboutTitle: 'Giới Thiệu',
    aboutDescription: 'Tôi là một người yêu thích viết lách và phát triển, thích chia sẻ kiến thức và kết nối với mọi người thông qua việc kể chuyện.',
    profileName: 'Trần Duy Nhật Quang',
    profileRole: 'Sinh viên IT năm 4 - Đại học Đà Lạt',
    profileBio1: `Xin chào! Mình là Trần Duy Nhật Quang, sinh viên năm 4 ngành CNTT tại Đại học Đà Lạt, Lâm Đồng, Việt Nam.`,
    profileBio2: `Mình chuyên về Python (Tkinter), Java (NetBeans, Android Studio), phát triển web với Node.js và VS Code. Đam mê của mình là xây dựng các ứng dụng web hiện đại, ứng dụng Android và kiểm thử phần mềm với phong cách thiết kế tối giản, hiện đại.`,
    profileBio3: `Portfolio này là nơi mình chia sẻ các dự án nổi bật, kinh nghiệm học tập và phát triển cá nhân trong lĩnh vực lập trình.`,
    profileEmail: 'Email',
    profilePhone: 'Số điện thoại',
    profileGithub: 'GitHub',
    experience1Title: 'Dự án Web Application',
    experience1Company: 'Dự án cá nhân & nhóm',
    experience1Duration: '2022 - Nay',
    experience1Desc: 'Phát triển và triển khai các ứng dụng web hiện đại với Node.js, React, Next.js, tập trung vào UI/UX tối giản, hiện đại.',
    experience2Title: 'Phát triển ứng dụng Android',
    experience2Company: 'Cá nhân & học tập',
    experience2Duration: '2021 - Nay',
    experience2Desc: 'Xây dựng ứng dụng Android bằng Java (Android Studio, NetBeans), chú trọng trải nghiệm và hiệu năng.',
    experience3Title: 'Kiểm thử phần mềm',
    experience3Company: 'Dự án học tập',
    experience3Duration: '2023',
    experience3Desc: 'Áp dụng các phương pháp kiểm thử phần mềm để đảm bảo chất lượng và độ tin cậy cho sản phẩm.',
    skillsList: [
      'Python', 'Tkinter', 'Java', 'Android (Android Studio, NetBeans)',
      'Node.js', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS',
      'VS Code', 'Kiểm thử phần mềm', 'Web App', 'Android App', 'Thiết kế tối giản'
    ],
    downloadResume: 'Tải CV',
    letsConnect: 'Kết nối với tôi',
    letsConnectDesc: 'Bạn muốn hợp tác hoặc chỉ đơn giản là chào hỏi?',
    builtWith: 'Được xây dựng với',
    subscribeNewsletter: 'Đăng Ký Nhận Tin',
    enterEmail: 'Nhập email của bạn',
    subscribe: 'Đăng Ký',
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
    const value = translations[language][key as keyof typeof translations['en']];
    if (typeof value === 'string') return value;
    return key;
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