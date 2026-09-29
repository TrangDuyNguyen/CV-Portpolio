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
  roleTitle: "Mid Mobile Engineer",
  levelTag: "Mid-Level",
  tagline: "5+ Years Production Experience • 1M+ Downloads • Gemini Vision AI & GenUI • Clean Architecture",
  location: "TP. Hồ Chí Minh, Việt Nam",
  birthYear: "2000",
  status: "🟢 Sẵn sàng cho cơ hội Mid Mobile Engineer",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang.pdf",
  cvViewUrl: "/cv-print.html?lang=vi",
  avatarUrl: "/avatar.png?v=2",
  bio: "Kỹ sư di động với hơn 5 năm kinh nghiệm thực chiến phát triển và vận hành các hệ thống ứng dụng di động iOS & Android đạt mốc triệu lượt tải (1M+) và độ ổn định 99.5%+ crash-free. Làm chủ kiến trúc Clean Architecture, mô hình phân tán Offline-first, giao tiếp thời gian thực (WebSocket/Socket.IO) và tích hợp phần cứng ngoại vi (POS, máy in nhiệt, máy quét mã vạch). Tiên phong ứng dụng Multimodal Vision AI (Google Gemini) và kiến trúc Flutter Generative UI (GenUI) tương tác thời gian thực trên thiết bị di động.",
};

const profileDataEn: ProfileInfo = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mid Mobile Engineer",
  levelTag: "Mid-Level",
  tagline: "5+ Years Production Experience • 1M+ Downloads • Gemini Vision AI & GenUI • Clean Architecture",
  location: "Ho Chi Minh City, Vietnam",
  birthYear: "2000",
  status: "🟢 Open to Mid Mobile Engineer Roles",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf",
  cvViewUrl: "/cv-print.html?lang=en",
  avatarUrl: "/avatar.png?v=2",
  bio: "Mobile Engineer with 5+ years of production experience developing high-scale iOS & Android applications reaching 1M+ downloads and 99.5%+ crash-free sessions. Master of Clean Architecture, Offline-first sync, real-time networking (WebSocket/Socket.IO), and POS hardware integration. Pioneer in Multimodal Vision AI (Google Gemini) and Flutter Generative UI (GenUI / A2UI protocol).",
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
        desc: "Engineered and scaled large-scale social travel network & real-time chat OTT on iOS & Android.",
        iconName: "download",
      },
      {
        value: "99.5%+",
        label: "Crash-Free Rate",
        desc: "Strict memory lifecycle management, safe exception boundaries & 60 FPS rendering.",
        iconName: "shield",
      },
      {
        value: "-30%",
        label: "Transaction Time",
        desc: "Optimized UI/UX order flow, thermal receipt printing & asynchronous POS Kiosk checkout.",
        iconName: "zap",
      },
      {
        value: "226 Tests",
        label: "Automated Tests Pass",
        desc: "100% Pass rate across Domain, Repositories, Notifiers, and Widget UI (0 warnings).",
        iconName: "check-circle",
      },
      {
        value: "< 2.5s",
        label: "AI Latency & 60 FPS",
        desc: "Instant Gemini food recognition and silky smooth 60 FPS Claymorphic UI with 0 memory leaks.",
        iconName: "bot",
      },
    ];
  }

  return [
    {
      value: "1M+",
      label: "Lượt Tải Production",
      desc: "Xây dựng và duy trì mạng xã hội du lịch & chat OTT quy mô lớn trên cả iOS và Android.",
      iconName: "download",
    },
    {
      value: "99.5%+",
      label: "Độ Ổn Định Crash-Free",
      desc: "Quản lý vòng đời bộ nhớ nghiêm ngặt, rào chắn ngoại lệ an toàn và tối ưu render 60 FPS.",
      iconName: "shield",
    },
    {
      value: "-30%",
      label: "Thời Gian Đặt Món",
      desc: "Tối ưu hóa UI/UX flow và xử lý bất đồng bộ trong hệ thống POS Kiosk tự phục vụ F&B.",
      iconName: "zap",
    },
    {
      value: "226 Tests",
      label: "Kiểm Thử Tự Động",
      desc: "100% Pass toàn bộ test suite từ Domain, Repositories, Notifiers đến Widget UI (0 cảnh báo).",
      iconName: "check-circle",
    },
    {
      value: "< 2.5s",
      label: "AI Latency & 60 FPS",
      desc: "Nhận diện món ăn Gemini siêu tốc và giao diện Đất nặn 60 FPS mượt mà (0 rò rỉ RAM).",
      iconName: "bot",
    },
  ];
};

export const verifiedStats: StatItem[] = getVerifiedStats('vi');
