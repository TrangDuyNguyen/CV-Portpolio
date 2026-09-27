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
  avatarUrl: "/avatar.png?v=2",
  bio: "Lập trình viên Mobile với 5 năm kinh nghiệm thực chiến xây dựng ứng dụng iOS, Android và Cross-platform (Flutter) cho các sản phẩm Mạng xã hội, Chat/OTT, CRM, Delivery và hệ thống máy POS, Kiosk self-order. Thế mạnh chuyên sâu về Clean Architecture / MVVM, tối ưu hiệu năng và chuyển hóa các codebase outsource làm theo tiến độ nhanh thành sản phẩm Product sạch, dễ bảo trì và có thể scale lâu dài. Tích cực ứng dụng AI vào quy trình kỹ thuật và tích hợp Vision AI thế hệ mới.",
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
