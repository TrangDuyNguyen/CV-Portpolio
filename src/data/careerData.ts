import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet",
    project: "ECO POS — Quản Lý Bán Hàng, Kiosk & Hóa Đơn Điện Tử",
    type: "Thương mại · POS & Kiosk",
    summary: "Xây dựng ứng dụng bán hàng ECO POS và Kiosk tự gọi món cho cửa hàng tạp hóa, F&B, nhà thuốc và chuỗi bán lẻ. Hệ thống chạy trực tiếp trên máy POS Android cấu hình thấp (Sunmi, iMin), xử lý thanh toán VietQR động, xuất hóa đơn điện tử Nghị định 123 và lưu đơn hàng offline không mất dữ liệu khi rớt mạng.",
    achievements: [
      "Tối ưu luồng Kiosk tự gọi món và màn hình thu ngân, giảm 30% thời gian hoàn tất một đơn hàng tại quầy.",
      "Thiết kế tầng lưu trữ Offline-First bằng BLoC và SQLite/Drift: ghi đơn hàng xuống máy trước, tự động đồng bộ lên server khi mạng có lại.",
      "Tự viết Android Platform Channels (Kotlin) giao tiếp trực tiếp với máy in nhiệt ESC/POS và máy quét mã vạch/QR phần cứng.",
      "Tích hợp thanh toán đa kênh (VietQR Pay động, quẹt thẻ POS, tiền mặt), phân quyền nhân viên RBAC, kiểm kê kho và đối soát ca làm việc.",
      "Tích hợp phát hành hóa đơn điện tử kèm chữ ký số theo Nghị định 123 và khai báo thuế ngay trên thiết bị POS.",
      "Soi Render Tree và Memory bằng Flutter DevTools để giữ khung hình 60 FPS và tránh rò rỉ RAM trên máy Sunmi/iMin RAM thấp.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite / Drift", "Platform Channels",
      "ESC/POS Thermal Printer", "VietQR Pay", "Hóa Đơn Điện Tử NĐ123", "RBAC",
      "Fastlane", "GitHub Actions", "Firebase Crashlytics"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=vn.com.finviet.ecopos&hl=vi",
  },
  {
    period: "05/2021 — 07/2025 (4 năm 2 tháng)",
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo",
    project: "Hệ sinh thái 6 ứng dụng: Mạng xã hội, OTT, Fintech & Nông nghiệp",
    type: "Thương mại · 1M+ Lượt tải",
    summary: "Làm việc trực tiếp trên cả Native iOS Swift và Flutter trong đội ngũ Mobile 20 người. Phát triển các phân hệ cốt lõi cho mạng xã hội du lịch hơn 1 triệu lượt tải, ứng dụng nhắn tin thời gian thực và 4 sản phẩm vệ tinh khác từ lúc xây dựng đến khi đưa lên App Store / Google Play.",
    achievements: [
      "Phát triển các phân hệ Tour, Flight, Hotel và Community trên mạng xã hội Hahalolo (1M+ lượt tải) bằng Native iOS Swift (VIPER) kết hợp Flutter Add-to-App, giữ tỷ lệ phiên chạy ổn định trên 99.5%.",
      "Xây dựng ứng dụng nhắn tin OTT Halome bằng Native iOS Swift (MVVM) với Starscream WebSocket, RxSwift, IGListKit, SQLite lưu tin nhắn offline và CallKit gọi thoại/video.",
      "Bảo trì và tối ưu các app Fintech (Haloki chuyển tiền 192 quốc gia, Hahalolo Invest chứng khoán), app nông nghiệp Aquannets (Clean Architecture + Riverpod + SQLite) và phụ trách kiểm thử phát hành app SocTrip.",
    ],
    subProjects: [
      {
        name: "Hahalolo — Mạng xã hội Du lịch",
        category: "Social Travel · iOS & Flutter",
        scaleBadge: "1M+ Lượt tải",
        iconUrl: "/assets/apps/hahalolo.png",
        description: "Xây dựng các phân hệ đặt Tour, Vé máy bay, Khách sạn và Cộng đồng bằng Native iOS Swift (VIPER) kết hợp nhúng module Flutter Add-to-App, Google Maps, Deep Link và Autoplay Video.",
        technologies: ["iOS Swift", "VIPER", "Flutter Add-to-App", "Google Maps", "Crashlytics"],
      },
      {
        name: "Halome — Nhắn tin OTT & VoIP",
        category: "Realtime Chat · Native iOS",
        scaleBadge: "CallKit VoIP",
        iconUrl: "/assets/apps/halome.png",
        description: "Xây dựng app chat thời gian thực bằng Native iOS Swift (MVVM), dùng Starscream WebSocket, RxSwift, IGListKit cuộn danh sách 60 FPS, SQLite đọc tin nhắn khi mất mạng và CallKit VoIP.",
        technologies: ["iOS Swift", "MVVM", "Starscream WebSocket", "RxSwift", "SQLite", "CallKit"],
      },
      {
        name: "Haloki — Chuyển tiền Quốc tế",
        category: "Fintech · Flutter",
        scaleBadge: "192 Quốc gia",
        iconUrl: "/assets/apps/haloki.png",
        description: "Phát triển và sửa lỗi ứng dụng chuyển tiền đa quốc gia bằng Flutter; xử lý luồng xác thực danh tính KYC, kiểm tra tính toàn vẹn giao dịch và bảo mật dữ liệu.",
        technologies: ["Flutter", "Dart", "BLoC", "KYC Verification", "REST API"],
      },
      {
        name: "Hahalolo Invest — Giao dịch Cổ phiếu",
        category: "Fintech · Flutter",
        scaleBadge: "Realtime Charts",
        iconUrl: "/assets/apps/hahalolo-invest.png",
        description: "Bảo trì ứng dụng đầu tư tài chính bằng Flutter; xử lý luồng dữ liệu giá theo thời gian thực qua WebSocket, vẽ biểu đồ biến động và màn hình đặt lệnh mua/bán.",
        technologies: ["Flutter", "Dart", "Financial Charts", "WebSocket"],
      },
      {
        name: "Aquannets — Quản lý Ao nuôi Thủy sản",
        category: "Outsource · Galactic Holdings",
        scaleBadge: "Offline Ao nuôi",
        description: "Xây dựng ứng dụng quản lý trang trại thủy sản bằng Flutter (Clean Architecture + Riverpod). Dùng SQLite lưu số liệu cho ăn và môi trường nước trực tiếp ngoài ao nuôi không có Wi-Fi.",
        technologies: ["Flutter", "Clean Architecture", "Riverpod", "SQLite"],
      },
      {
        name: "SocTrip — Kiểm thử & Phát hành Store",
        category: "Quality Control · Release",
        scaleBadge: "Release Gate",
        iconUrl: "/assets/apps/soctrip.png",
        description: "Viết test case, kiểm thử end-to-end và chạy regression test kiểm soát chất lượng trước mỗi đợt phát hành lên App Store và Google Play.",
        technologies: ["Manual Testing", "Regression Testing", "Test Cases", "Store Release"],
      },
    ],
    technologies: [
      "iOS Swift", "VIPER", "MVVM", "RxSwift", "WebSocket", "CallKit",
      "Flutter", "Add-to-App", "Clean Architecture", "Riverpod", "BLoC", "SQLite",
      "Firebase Crashlytics", "GitLab CI/CD", "Bitrise"
    ],
  },
];

const careerDataEn: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet",
    project: "ECO POS — Retail Point-of-Sale, Self-Order Kiosk & E-Invoice",
    type: "Commercial · POS & Kiosk",
    summary: "Engineered ECO POS and self-order Kiosk applications for grocery stores, F&B outlets, pharmacies, and retail chains. Built to run reliably on low-spec Android POS hardware (Sunmi, iMin) with dynamic VietQR payments, Decree 123 e-invoicing, and offline order persistence.",
    achievements: [
      "Streamlined self-order Kiosk and cashier checkout flows, cutting transaction completion time by 30%.",
      "Architected an offline-first persistence layer with BLoC and SQLite/Drift so zero orders are lost during Wi-Fi drops, syncing automatically once reconnected.",
      "Built custom Android Platform Channels (Kotlin) to drive ESC/POS thermal receipt printers and hardware barcode/QR scanners directly.",
      "Implemented granular RBAC permissions, multi-channel payment reconciliation (dynamic VietQR, POS cards, cash), variant stock control, and shift cash reporting.",
      "Integrated Decree 123 tax reporting and digitally signed electronic invoice issuance right on mobile POS terminals.",
      "Profiled Render Tree and memory allocation with Flutter DevTools to hold 60 FPS and remove RAM leaks on low-memory Sunmi/iMin hardware.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite / Drift", "Platform Channels",
      "ESC/POS Thermal Printer", "VietQR Pay", "E-Invoice (Decree 123)", "RBAC",
      "Fastlane", "GitHub Actions", "Firebase Crashlytics"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=vn.com.finviet.ecopos&hl=vi",
  },
  {
    period: "05/2021 — 07/2025 (4 years 2 months)",
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo",
    project: "6-App Ecosystem: Social Travel, OTT Messaging, Fintech & AgriTech",
    type: "Commercial · 1M+ Downloads",
    summary: "Worked across Native iOS Swift and Flutter inside a 20-engineer mobile team. Built core features for a travel social network with 1M+ downloads, a real-time messaging app, and four production products from development through App Store / Google Play release.",
    achievements: [
      "Engineered Tour, Flight, Hotel, and Community modules on Hahalolo (1M+ downloads) using Native iOS Swift (VIPER) and Flutter Add-to-App, maintaining 99.5%+ crash-free sessions.",
      "Built the Halome OTT real-time messaging app from the ground up in Native iOS Swift (MVVM) with Starscream WebSocket, RxSwift, IGListKit, offline SQLite storage, and CallKit VoIP.",
      "Maintained and shipped Fintech apps (Haloki remittance across 192 countries, Hahalolo Invest stock trading), Aquannets aquaculture app (Clean Architecture + Riverpod + SQLite), and handled release QC for SocTrip.",
    ],
    subProjects: [
      {
        name: "Hahalolo — Travel Social Network",
        category: "Social Travel · iOS & Flutter",
        scaleBadge: "1M+ Downloads",
        iconUrl: "/assets/apps/hahalolo.png",
        description: "Built Tour, Flight, Hotel, and Community modules in Native iOS Swift (VIPER) integrated with Flutter Add-to-App, Google Maps, Deep Links, and Autoplay Video.",
        technologies: ["iOS Swift", "VIPER", "Flutter Add-to-App", "Google Maps", "Crashlytics"],
      },
      {
        name: "Halome — OTT Realtime Messaging",
        category: "Realtime Chat · Native iOS",
        scaleBadge: "CallKit VoIP",
        iconUrl: "/assets/apps/halome.png",
        description: "Built native iOS messaging with Starscream WebSockets, RxSwift, IGListKit for 60 FPS chat threads, SQLite offline message cache, and CallKit audio/video calls.",
        technologies: ["iOS Swift", "MVVM", "Starscream WebSocket", "RxSwift", "SQLite", "CallKit"],
      },
      {
        name: "Haloki — International Remittance",
        category: "Fintech · Flutter",
        scaleBadge: "192 Countries",
        iconUrl: "/assets/apps/haloki.png",
        description: "Maintained and debugged cross-border money transfer flows in Flutter, handling KYC verification steps, transaction state guards, and API security.",
        technologies: ["Flutter", "Dart", "BLoC", "KYC Verification", "REST API"],
      },
      {
        name: "Hahalolo Invest — Stock Trading",
        category: "Fintech · Flutter",
        scaleBadge: "Realtime Charts",
        iconUrl: "/assets/apps/hahalolo-invest.png",
        description: "Maintained Flutter securities trading app handling live WebSocket price feeds, interactive financial charts, portfolio state, and buy/sell order flows.",
        technologies: ["Flutter", "Dart", "Financial Charts", "WebSocket"],
      },
      {
        name: "Aquannets — Aquaculture Management",
        category: "Outsource · Galactic Holdings",
        scaleBadge: "Pond Offline",
        description: "Built an enterprise farm management Flutter app using Clean Architecture, Riverpod, and SQLite so technicians log feed and water data offline at remote ponds.",
        technologies: ["Flutter", "Clean Architecture", "Riverpod", "SQLite"],
      },
      {
        name: "SocTrip — QC & Store Release",
        category: "Quality Control · Release",
        scaleBadge: "Release Gate",
        iconUrl: "/assets/apps/soctrip.png",
        description: "Authored test cases, ran end-to-end and regression suites, and confirmed build quality before App Store and Google Play submissions.",
        technologies: ["Manual Testing", "Regression Testing", "Test Cases", "Store Release"],
      },
    ],
    technologies: [
      "iOS Swift", "VIPER", "MVVM", "RxSwift", "WebSocket", "CallKit",
      "Flutter", "Add-to-App", "Clean Architecture", "Riverpod", "BLoC", "SQLite",
      "Firebase Crashlytics", "GitLab CI/CD", "Bitrise"
    ],
  },
];

export const getCareerData = (lang: Language = 'en'): CareerItem[] => {
  return lang === 'en' ? careerDataEn : careerDataVi;
};
