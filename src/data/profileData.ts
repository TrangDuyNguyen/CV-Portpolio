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
  bio: "Mobile Engineer với 5 năm kinh nghiệm thực chiến trên nền tảng Flutter, iOS và Android. Mình từng trực tiếp xây dựng hệ thống mạng xã hội quy mô lớn (1M+ downloads), các giải pháp POS/Kiosk bán hàng đa ngành (F&B, Bán lẻ, Spa), cùng với các ứng dụng Fintech (chuyển tiền quốc tế, giao dịch) và phần mềm quản lý nuôi trồng thủy sản mang tính ứng dụng cao vào đời sống. Điểm mạnh của mình là tư duy thiết kế kiến trúc rành mạch (Clean Architecture), giải quyết tốt bài toán dữ liệu offline và giao tiếp mượt mà với phần cứng (máy in nhiệt, máy quét). Mình đặc biệt khắt khe về hiệu năng, luôn đảm bảo ứng dụng chạy mượt 60 FPS và không bị rò rỉ bộ nhớ (memory leak). Hiện tại, mình đang tập trung ứng dụng Trí tuệ nhân tạo (Google Gemini Vision AI) kết hợp cùng Generative UI trên Flutter để tạo ra các trải nghiệm tương tác thông minh và đột phá hơn.",
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
  bio: "Mobile Engineer with 5+ years of hands-on experience across Flutter, iOS, and Android. I have directly built and scaled social network platforms with over 1 million downloads, robust POS/Kiosk solutions across multiple industries (F&B, Retail, Spa), as well as Fintech applications (international money transfer, stock trading) and real-world aquaculture management systems. My core strengths lie in designing clean architectures, handling seamless offline data sync, and integrating peripheral hardware like thermal printers and barcode scanners. I am deeply focused on performance, maintaining consistent 60 FPS rendering and zero memory leaks. Recently, my focus is applying Multimodal Vision AI (Google Gemini 3.8 Flash) and Generative UI architectures in Flutter to build reactive, AI-driven mobile experiences.",
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
