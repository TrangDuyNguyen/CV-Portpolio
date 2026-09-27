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
