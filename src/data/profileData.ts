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
  name: "Nguyễn Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Flutter · Native iOS · Android",
  tagline: "Xây dựng ứng dụng Mobile chỉn chu từ kiến trúc đến trải nghiệm.",
  location: "TP. Hồ Chí Minh, Việt Nam",
  status: "🟢 Sẵn sàng cho cơ hội Mobile Engineer mới",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang.pdf?v=20261014",
  cvViewUrl: "/cv-print.html?lang=vi",
  avatarUrl: "/avatar.webp",
  bio: "Mobile Engineer với hơn 5 năm kinh nghiệm phát triển ứng dụng bằng Flutter và native iOS/Android. Đã tham gia xây dựng sản phẩm thuộc các lĩnh vực du lịch, nhắn tin thời gian thực, fintech và POS/Kiosk. Tập trung vào kiến trúc dễ bảo trì, tích hợp nền tảng và độ tin cậy của ứng dụng trong môi trường production.",
};

const profileDataEn: ProfileInfo = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Flutter · Native iOS · Android",
  tagline: "Building dependable mobile experiences.",
  location: "Ho Chi Minh City, Vietnam",
  status: "🟢 Open to Mobile Engineer Opportunities",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf?v=20261014",
  cvViewUrl: "/cv-print.html?lang=en",
  avatarUrl: "/avatar.webp",
  bio: "Mobile Engineer with 5+ years of experience building applications across Flutter and native iOS/Android. Contributed to products in social travel, real-time messaging, fintech, and POS/Kiosk systems. Focused on maintainable architecture, platform integration, and reliable production experiences.",
};

export const getProfileData = (lang: Language = 'vi'): ProfileInfo => {
  return lang === 'en' ? profileDataEn : profileDataVi;
};

// Default export for backward compatibility
export const profileData = profileDataVi;

export const getVerifiedStats = (lang: Language = 'vi'): StatItem[] => {
  if (lang === 'en') {
    return [
      {
        value: "5+ Years",
        label: "Mobile Experience",
        desc: "Hands-on commercial mobile engineering across social, messaging, fintech, and retail POS.",
        iconName: "shield",
      },
      {
        value: "1M+",
        label: "Hahalolo Downloads",
        desc: "Key contributor to Hahalolo Social Travel Network on iOS and Android app stores.",
        iconName: "download",
      },
      {
        value: "Flutter · Swift",
        label: "Cross-Platform & Native",
        desc: "Proficient in Flutter along with Native iOS (Swift) and Android (Kotlin) platform channels.",
        iconName: "boxes",
      },
      {
        value: "6+ Products",
        label: "Commercial Portfolio",
        desc: "Built features for Hahalolo, Halome, Haloki, Hahalolo Invest, Aquannets, and Finviet POS.",
        iconName: "check-circle",
      },
    ];
  }

  return [
    {
      value: "5+ Năm",
      label: "Kinh Nghiệm Mobile",
      desc: "Phát triển ứng dụng thực tế qua các mảng mạng xã hội, nhắn tin OTT, fintech và hệ thống POS.",
      iconName: "shield",
    },
    {
      value: "1M+",
      label: "Lượt Tải Hahalolo",
      desc: "Đóng góp phát triển mạng xã hội du lịch Hahalolo trên cả App Store và Google Play.",
      iconName: "download",
    },
    {
      value: "Flutter · Swift",
      label: "Cross-Platform & Native",
      desc: "Thành thạo Flutter kết hợp Native iOS (Swift) và Android (Kotlin) qua Platform Channels.",
      iconName: "boxes",
    },
    {
      value: "6+ Sản Phẩm",
      label: "Sản Phẩm Thương Mại",
      desc: "Trực tiếp tham gia phát triển Hahalolo, Halome, Haloki, Hahalolo Invest, Aquannets và Finviet POS.",
      iconName: "check-circle",
    },
  ];
};

export const verifiedStats: StatItem[] = getVerifiedStats('vi');
