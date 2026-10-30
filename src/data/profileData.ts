import { StatItem } from '../types';
import { Language } from '../context/LanguageContext';

export interface ProfileInfo {
  name: string;
  roleTitle: string;
  levelTag: string;
  tagline: string;
  location: string;
  status: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  cvPdfUrl: string;
  cvViewUrl: string;
  avatarUrl: string;
  bio: string;
}

const profileDataVi: ProfileInfo = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Flutter · Native iOS · Android",
  tagline: "Tôi xây dựng ứng dụng di động phục vụ những nhu cầu thực tế.",
  location: "TP. Hồ Chí Minh, Việt Nam",
  status: "MOBILE ENGINEER · 5+ YEARS EXPERIENCE",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang.pdf?v=20261030_v2",
  cvViewUrl: "/cv-print.html?lang=vi",
  avatarUrl: "/avatar.webp",
  bio: "Hơn 5 năm làm việc với Flutter và ứng dụng native iOS, Android. Tôi quan tâm đến chất lượng sản phẩm, kiến trúc dễ bảo trì và trải nghiệm ổn định khi đưa ứng dụng vào vận hành.",
};

const profileDataEn: ProfileInfo = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Flutter · Native iOS · Android",
  tagline: "Building dependable mobile applications for real-world needs.",
  location: "Ho Chi Minh City, Vietnam",
  status: "MOBILE ENGINEER · 5+ YEARS EXPERIENCE",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf?v=20261030_v2",
  cvViewUrl: "/cv-print.html?lang=en",
  avatarUrl: "/avatar.webp",
  bio: "5+ years working across Flutter and native iOS/Android. Focused on product craft, maintainable architecture, and stable production runtime.",
};

export const getProfileData = (lang: Language = 'en'): ProfileInfo => {
  return lang === 'en' ? profileDataEn : profileDataVi;
};

export const profileData = profileDataEn;

export const getVerifiedStats = (lang: Language = 'en'): StatItem[] => {
  if (lang === 'en') {
    return [
      {
        value: "5+ Years",
        label: "Commercial Experience",
        desc: "Proven production engineering across commercial products and platforms.",
        iconName: "shield",
      },
      {
        value: "Flutter",
        label: "Primary Platform",
        desc: "Core specialization in high-performance cross-platform applications.",
        iconName: "boxes",
      },
      {
        value: "iOS & Android",
        label: "Cross-Platform & Native",
        desc: "Hands-on native integration with Swift, Kotlin, and platform channels.",
        iconName: "check-circle",
      },
    ];
  }

  return [
    {
      value: "5+ Năm",
      label: "Kinh Nghiệm Thương Mại",
      desc: "Phát triển và bảo trì các sản phẩm thực tế đưa vào vận hành thương mại.",
      iconName: "shield",
    },
    {
      value: "Flutter",
      label: "Nền Tảng Phát Triển Chính",
      desc: "Chuyên môn sâu về kiến trúc, state management và tối ưu giao diện.",
      iconName: "boxes",
    },
    {
      value: "iOS & Android",
      label: "Kinh Nghiệm Đa Nền Tảng",
      desc: "Làm việc trực tiếp với Swift, Kotlin và các module native platform.",
      iconName: "check-circle",
    },
  ];
};

export const verifiedStats: StatItem[] = getVerifiedStats('en');
