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
  tagline: "5+ Years Production Experience • 1M+ Downloads • Clean Architecture & Multi-Platform (Mobile & Web)",
  location: "TP. Hồ Chí Minh, Việt Nam",
  birthYear: "10/04/2000",
  status: "🟢 Sẵn sàng cho cơ hội Mobile Engineer mới",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang.pdf?v=20261014",
  cvViewUrl: "/cv-print.html?lang=vi",
  avatarUrl: "/avatar.png?v=2",
  bio: "Mobile Engineer với hơn 5 năm kinh nghiệm thực chiến phát triển ứng dụng đa nền tảng (Mobile & Web/Kiosk). Chuyên sâu thiết kế kiến trúc chuẩn hóa (Clean Architecture, MVVM, Modular/Package-based), làm chủ cả BLoC (flutter_bloc) và Riverpod với Unidirectional Data Flow, đóng gói Core Design System & Base Components (Custom Widgets, dynamic Theme Engine, Responsive Multi-screen, Localization, Base Dio Client với Interceptors/Token Refresh/Retry, Global Error Handling). Am hiểu tường tận vòng đời Widget và Render Tree (Widget/Element/RenderObject), làm chủ Flutter DevTools (Profiler, Memory, Network) để duy trì 60 FPS mượt mà, triệt tiêu drop frames và rò rỉ RAM (0 memory leak). Tối ưu hóa chuyên sâu Flutter Web (GoRouter/AutoRoute nested routes, query params, CanvasKit/WASM, asset caching). Từng vận hành sản phẩm 1M+ downloads, thiết lập pipeline CI/CD (Fastlane, GitHub Actions, GitLab CI/CD, Docker) và văn hóa code review, mentoring cho đội ngũ.",
};

const profileDataEn: ProfileInfo = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Mid-Level",
  tagline: "5+ Years Production Experience • 1M+ Downloads • Clean Architecture & Multi-Platform (Mobile & Web)",
  location: "Ho Chi Minh City, Vietnam",
  birthYear: "10/04/2000",
  status: "🟢 Open to Mobile Engineer Opportunities",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf?v=20261014",
  cvViewUrl: "/cv-print.html?lang=en",
  avatarUrl: "/avatar.png?v=2",
  bio: "Mobile Engineer with 5+ years of hands-on experience developing high-performance multi-platform applications (Mobile & Web/Kiosk). Expert in standardized architecture (Clean Architecture, MVVM, Modular/Package-based), mastering both BLoC (flutter_bloc) and Riverpod with Unidirectional Data Flow, packaging Core Design Systems & Base Components (Custom Widgets, dynamic Theme Engine, Responsive Multi-screen Layout, Localization, Base Dio Client with Interceptors/Auto-Refresh Token/Retry Policy, Global Exception Handling). Deep understanding of Widget lifecycle and the Render Tree (Widget/Element/RenderObject), utilizing Flutter DevTools (Profiler, Memory, Network) to ensure smooth 60 FPS, zero jank/drop frames, and zero memory leaks. Specialized in Flutter Web optimization (GoRouter/AutoRoute nested routes, query params, CanvasKit/WASM, asset caching). Proven track record operating 1M+ download apps, establishing automated CI/CD pipelines (Fastlane, GitHub Actions, GitLab CI/CD, Docker), code review standards, and junior developer mentoring.",
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
        value: "277 Tests",
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
      value: "277 Tests",
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
