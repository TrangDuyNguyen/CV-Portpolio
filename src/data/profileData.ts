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
  name: "Nguyễn Duy Tráng",
  roleTitle: "Mobile Engineer",
  levelTag: "Flutter · Native iOS (Swift) · Android (Kotlin)",
  tagline: "5+ năm phát triển ứng dụng Flutter, Native iOS (Swift) và Android (Kotlin) cho sản phẩm thương mại.",
  location: "TP. Hồ Chí Minh, Việt Nam",
  status: "SẴN SÀNG TRAO ĐỔI CƠ HỘI MỚI",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang.pdf?v=20261030_v2",
  cvViewUrl: "/cv-print.html?lang=vi",
  avatarUrl: "/avatar.webp",
  bio: "Trực tiếp xây dựng từ mạng xã hội du lịch hơn 1 triệu lượt tải (Hahalolo), ứng dụng nhắn tin thời gian thực (Halome), máy POS bán hàng & hóa đơn điện tử (Finviet ECO POS) đến ứng dụng dinh dưỡng AI (AstroBite). Tập trung vào cấu trúc code rõ ràng, giữ 60 FPS trên cả thiết bị cấu hình thấp và không mất dữ liệu khi rớt mạng.",
};

const profileDataEn: ProfileInfo = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Flutter · Native iOS (Swift) · Android (Kotlin)",
  tagline: "5+ years building production Flutter, Native iOS (Swift), and Android (Kotlin) applications.",
  location: "Ho Chi Minh City, Vietnam",
  status: "OPEN TO MOBILE ENGINEER ROLES",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf?v=20261030_v2",
  cvViewUrl: "/cv-print.html?lang=en",
  avatarUrl: "/avatar.webp",
  bio: "Hands-on experience shipping consumer apps with 1M+ downloads (Hahalolo, Halome OTT), retail POS & e-invoice hardware systems (Finviet ECO POS), and AI nutrition tools (AstroBite). I focus on modular Clean Architecture, steady 60 FPS performance on low-spec devices, and offline-first data reliability.",
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
        label: "Flutter · Swift · Kotlin",
        desc: "Commercial production mobile engineering from consumer apps to retail hardware.",
        iconName: "shield",
        metricTag: "Production Track",
      },
      {
        value: "1M+ Downloads",
        label: "Hahalolo & Halome OTT",
        desc: "Consumer social travel & real-time messaging apps maintaining 99.5%+ crash-free sessions.",
        iconName: "download",
        metricTag: "Scale & Stability",
      },
      {
        value: "-30% Checkout",
        label: "Finviet ECO POS & Kiosk",
        desc: "Faster order & thermal receipt flow on low-spec Android POS terminals.",
        iconName: "zap",
        metricTag: "Retail Hardware",
      },
      {
        value: "277/277 Tests",
        label: "AstroBite v3.0.0 (<2.5s AI)",
        desc: "100% automated unit & widget test pass rate with sub-2.5s Gemini Vision inference.",
        iconName: "check-circle",
        metricTag: "Quality Gate",
      },
    ];
  }

  return [
    {
      value: "5+ Năm",
      label: "Flutter · Swift · Kotlin",
      desc: "Kinh nghiệm làm sản phẩm thương mại thực tế từ app phổ thông đến máy POS bán hàng.",
      iconName: "shield",
      metricTag: "Thực chiến",
    },
    {
      value: "1M+ Lượt tải",
      label: "Hahalolo & Halome OTT",
      desc: "Hệ sinh thái mạng xã hội du lịch & nhắn tin giữ mức ổn định 99.5%+ không văng app.",
      iconName: "download",
      metricTag: "Quy mô lớn",
    },
    {
      value: "-30% Thao tác",
      label: "Finviet ECO POS & Kiosk",
      desc: "Rút ngắn thời gian gọi món, thanh toán và in bill nhiệt trên máy POS Android.",
      iconName: "zap",
      metricTag: "Phần cứng POS",
    },
    {
      value: "277/277 Tests",
      label: "AstroBite v3.0.0 (<2.5s AI)",
      desc: "100% unit & widget test đạt chuẩn; nhận diện món ăn qua Gemini Vision dưới 2.5 giây.",
      iconName: "check-circle",
      metricTag: "Kiểm thử tự động",
    },
  ];
};

export const verifiedStats: StatItem[] = getVerifiedStats('en');
