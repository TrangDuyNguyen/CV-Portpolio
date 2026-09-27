import { StatItem } from '../types';
import { Language } from '../context/LanguageContext';

export interface ProfileInfo {
  name: string;
  roleTitle: string;
  levelTag: string;
  tagline: string;
  location: string;
  birthYear: string;
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
  levelTag: "Mid-Level",
  tagline: "Building High-Performance Mobile Experiences with Vision AI & Clean Architecture",
  location: "TP. Hồ Chí Minh, Việt Nam",
  birthYear: "2000",
  status: "🟢 Đang tìm kiếm cơ hội mới (Mobile Engineer)",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang.pdf",
  cvViewUrl: "/cv-print.html?lang=vi",
  avatarUrl: "/avatar.png?v=2",
  bio: "Lập trình viên Mobile với 5 năm kinh nghiệm thực chiến xây dựng ứng dụng iOS, Android và Cross-platform (Flutter) cho các sản phẩm Mạng xã hội, Chat/OTT, CRM, Delivery và hệ sinh thái POS Kiosk đa ngành (F&B, Bán lẻ, Dịch vụ Spa). Thế mạnh chuyên sâu về Clean Architecture / MVVM, tối ưu hiệu năng và chuyển hóa các codebase outsource làm theo tiến độ nhanh thành sản phẩm Product sạch, dễ bảo trì và có thể scale lâu dài. Tích cực ứng dụng AI vào quy trình kỹ thuật và tích hợp Vision AI thế hệ mới.",
};

const profileDataEn: ProfileInfo = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Mid-Level",
  tagline: "Building High-Performance Mobile Experiences with Vision AI & Clean Architecture",
  location: "Ho Chi Minh City, Vietnam",
  birthYear: "2000",
  status: "🟢 Open to Opportunities (Mobile Engineer)",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf",
  cvViewUrl: "/cv-print.html?lang=en",
  avatarUrl: "/avatar.png?v=2",
  bio: "Mobile Engineer with 5 years of hands-on experience building iOS, Android, and Cross-platform (Flutter) applications for Social Networks, Chat/OTT, CRM, Delivery, and multi-industry POS/Kiosk ecosystems (F&B, Retail, Spa Services). Core strength in Feature-First Clean Architecture, MVVM, performance profiling (0 memory leak, 60 FPS), and transforming fast-paced outsourced codebases into clean, scalable products. Actively integrating Gemini Multimodal Vision AI and Flutter Generative UI.",
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
        value: "1M+",
        label: "Production Downloads",
        desc: "Engineered large-scale social travel network & real-time chat OTT on iOS & Android.",
        iconName: "download",
      },
      {
        value: "-30%",
        label: "Transaction Time",
        desc: "Optimized order flow, thermal bill printing & checkout on POS counters & self-order kiosks.",
        iconName: "zap",
      },
      {
        value: "100%",
        label: "Clean Architecture",
        desc: "Standardized codebase from outsource agency into clean, maintainable & scalable product.",
        iconName: "boxes",
      },
      {
        value: "< 2.5s",
        label: "Multimodal AI & GenUI",
        desc: "Real-time multi-region food recognition & dynamic interactive widget generation via A2UI.",
        iconName: "bot",
      },
    ];
  }

  return [
    {
      value: "1M+",
      label: "Production Downloads",
      desc: "Vận hành mạng xã hội du lịch & chat OTT quy mô lớn trên cả iOS và Android.",
      iconName: "download",
    },
    {
      value: "-30%",
      label: "Thời Gian Giao Dịch",
      desc: "Tối ưu hóa luồng đặt món, in bill và thanh toán trên máy POS thu ngân & Kiosk self-order.",
      iconName: "zap",
    },
    {
      value: "100%",
      label: "Clean Architecture",
      desc: "Chuẩn hóa codebase từ outsource thành sản phẩm Product sạch sẽ, dễ bảo trì và scale.",
      iconName: "boxes",
    },
    {
      value: "< 2.5s",
      label: "Multimodal AI & GenUI",
      desc: "Nhận diện món ăn đa vùng thời gian thực và tự động sinh giao diện tương tác cá nhân hóa.",
      iconName: "bot",
    },
  ];
};

export const verifiedStats: StatItem[] = getVerifiedStats('vi');
