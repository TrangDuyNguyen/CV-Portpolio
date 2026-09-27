import { StatItem } from '../types';

export const profileData = {
  name: "Nguyen Duy Trang",
  roleTitle: "Mobile Engineer",
  levelTag: "Mid-Level",
  tagline: "Building High-Performance Mobile Experiences with Vision AI & Clean Architecture",
  location: "TP. Hồ Chí Minh, Việt Nam",
  birthYear: "2000",
  status: "🟢 Open to Opportunities (Mobile Engineer)",
  email: "trangndps10349@gmail.com",
  phone: "0397308962",
  github: "https://github.com/TrangDuyNguyen",
  linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/",
  cvPdfUrl: "/Mobile_Engineer_Nguyen_Duy_Trang.pdf",
  cvViewUrl: "/cv-print.html",
  bio: "Kỹ sư di động với hơn 5 năm kinh nghiệm thực chiến phát triển và vận hành các ứng dụng iOS & Android đạt mốc triệu lượt tải (1M+) và tỷ lệ ổn định 99.5%+ crash-free. Chuyên sâu về Flutter (Dart), Native iOS (Swift) & Android (Kotlin), kiến trúc Clean Architecture, mô hình phân tán Offline-first và tiên phong tích hợp Multimodal Vision AI (Google Gemini) cùng Flutter Generative UI (GenUI).",
};

export const verifiedStats: StatItem[] = [
  {
    value: "1M+",
    label: "Production Downloads",
    desc: "Vận hành ứng dụng mạng xã hội & du lịch quy mô lớn trên cả iOS và Android.",
    iconName: "download",
  },
  {
    value: "99.5%+",
    label: "Crash-Free Rate",
    desc: "Quản lý vòng đời RAM chặt chẽ, tối ưu luồng render 60 FPS và bắt ngoại lệ an toàn.",
    iconName: "shield",
  },
  {
    value: "198",
    label: "Tests Pass 100%",
    desc: "Bộ kiểm thử tự động toàn diện từ Domain, Repositories đến UI không có flaky test.",
    iconName: "check-circle",
  },
  {
    value: "< 2.5s",
    label: "AI Latency & 0 Leak",
    desc: "Nhận diện món ăn đa vùng tức thì, giải phóng camera buffer pipeline độc lập.",
    iconName: "zap",
  },
];
