import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet",
    project: "Hệ thống POS, Thu Ngân & Kiosk",
    type: "Commercial Production",
    summary: "Tham gia phát triển các giải pháp phục vụ hoạt động bán hàng và thanh toán, bao gồm hệ thống POS, ứng dụng thu ngân và Self-Order Kiosk.",
    achievements: [
      "Phát triển và hoàn thiện các luồng chức năng phục vụ hoạt động bán hàng tại điểm giao dịch.",
      "Làm việc với tích hợp phần cứng và các thành phần native phục vụ nghiệp vụ của thiết bị.",
      "Xử lý các tình huống kết nối không ổn định và yêu cầu vận hành tại điểm bán.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "Platform Channels",
      "ESC/POS Thermal Printer", "Barcode Scanner", "RBAC", "Fastlane"
    ],
  },
  {
    period: "05/2020 — 06/2025 (5 năm)",
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo",
    project: "Hệ sinh thái sản phẩm mạng xã hội, OTT & Fintech",
    type: "Commercial Production",
    summary: "Tham gia phát triển hệ sinh thái sản phẩm của Hahalolo, với nhiều ứng dụng và dịch vụ phục vụ các nhu cầu khác nhau của người dùng.",
    achievements: [
      "Phát triển các phân hệ Tour, Flight, Hotel và Community trên mạng xã hội du lịch Hahalolo.",
      "Xây dựng ứng dụng nhắn tin OTT Halome native iOS Swift với WebSocket, RxSwift, SQLite và CallKit.",
      "Tham gia phát triển và hoàn thiện các ứng dụng fintech, nông nghiệp và đối soát chất lượng (Haloki, Hahalolo Invest, Aquannets, SocTrip).",
    ],
    subProjects: [
      {
        name: "Hahalolo — Travel Social Network",
        category: "Social Travel Platform",
        description: "Phát triển các phân hệ Tour, Flight, Hotel và Community. Tích hợp native iOS Swift và module Flutter Add-to-App.",
        technologies: ["iOS Swift", "VIPER", "Flutter Add-to-App", "Google Maps", "Crashlytics"],
      },
      {
        name: "Halome — OTT Realtime Messaging",
        category: "OTT Messaging & VoIP",
        description: "Ứng dụng nhắn tin native iOS với WebSocket Starscream, RxSwift, SQLite và CallKit cho cuộc gọi thoại.",
        technologies: ["iOS Swift", "MVVM", "WebSocket", "RxSwift", "SQLite", "CallKit"],
      },
      {
        name: "Haloki — International Remittance",
        category: "Fintech & Chuyển Tiền",
        description: "Ứng dụng chuyển tiền quốc tế bằng Flutter; đảm bảo luồng giao dịch tài chính, xác thực KYC và bảo mật.",
        technologies: ["Flutter", "Dart", "BLoC", "KYC Verification", "REST API"],
      },
      {
        name: "Hahalolo Invest — Stock Trading",
        category: "Fintech & Đầu Tư",
        description: "Ứng dụng giao dịch tài chính bằng Flutter; xử lý biểu đồ thời gian thực, quản lý danh mục và khớp lệnh.",
        technologies: ["Flutter", "Dart", "Financial Charts", "WebSocket"],
      },
      {
        name: "Aquannets — Quản Lý Nuôi Trồng Thủy Sản",
        category: "Enterprise Farm Management",
        description: "Ứng dụng Flutter phục vụ quản lý ao nuôi; áp dụng Clean Architecture, Riverpod và SQLite tại ao nuôi.",
        technologies: ["Flutter", "Clean Architecture", "Riverpod", "SQLite"],
      },
      {
        name: "SocTrip — QC & Kiểm Thử Phát Hành",
        category: "Quality Control & Store Release",
        description: "Kiểm thử chức năng, regression test và đối soát chất lượng trước mỗi đợt phát hành lên App Store và Google Play.",
        technologies: ["Manual Testing", "Regression Testing", "Test Cases", "Release QC"],
      },
    ],
    technologies: [
      "iOS Swift", "VIPER", "MVVM", "Flutter", "Add-to-App", "WebSocket",
      "RxSwift", "SQLite", "CallKit", "Clean Architecture", "Riverpod", "BLoC"
    ],
  },
];

const careerDataEn: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet",
    project: "POS, Cashier & Self-Order Kiosk Systems",
    type: "Commercial Production",
    summary: "Contributed to developing checkout and payment solutions, including POS systems, cashier applications, and self-order kiosks.",
    achievements: [
      "Developed and refined core POS transaction workflows at point-of-sale terminals.",
      "Integrated hardware peripherals and native Android platform channels for device workflows.",
      "Handled intermittent network conditions and offline business requirements.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "Platform Channels",
      "ESC/POS Thermal Printer", "Barcode Scanner", "RBAC", "Fastlane"
    ],
  },
  {
    period: "05/2020 — 06/2025 (5 years)",
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo",
    project: "Social Travel, OTT & Fintech Ecosystem",
    type: "Commercial Production",
    summary: "Contributed to developing Hahalolo's multi-product ecosystem, spanning consumer social travel, real-time messaging, and fintech applications.",
    achievements: [
      "Engineered Tour, Flight, Hotel, and Community modules on the Hahalolo travel social network.",
      "Built the Halome OTT real-time messaging native iOS application with WebSocket, RxSwift, SQLite, and CallKit.",
      "Contributed to fintech, aquaculture, and release quality verification (Haloki, Hahalolo Invest, Aquannets, SocTrip).",
    ],
    subProjects: [
      {
        name: "Hahalolo — Travel Social Network",
        category: "Social Travel Platform",
        description: "Engineered Tour, Flight, Hotel, and Community modules. Integrated native iOS Swift with Flutter Add-to-App.",
        technologies: ["iOS Swift", "VIPER", "Flutter Add-to-App", "Google Maps", "Crashlytics"],
      },
      {
        name: "Halome — OTT Realtime Messaging",
        category: "OTT Messaging & VoIP",
        description: "Native iOS messaging with Starscream WebSockets, RxSwift, SQLite persistence, and CallKit integration.",
        technologies: ["iOS Swift", "MVVM", "WebSocket", "RxSwift", "SQLite", "CallKit"],
      },
      {
        name: "Haloki — International Remittance",
        category: "Fintech & Money Transfer",
        description: "Cross-border remittance app with Flutter; secured transaction flows, KYC validation, and REST API.",
        technologies: ["Flutter", "Dart", "BLoC", "KYC Verification", "REST API"],
      },
      {
        name: "Hahalolo Invest — Stock Trading",
        category: "Fintech & Investing",
        description: "Securities trading application with Flutter; real-time charts, portfolio management, and order flow.",
        technologies: ["Flutter", "Dart", "Financial Charts", "WebSocket"],
      },
      {
        name: "Aquannets — Aquaculture Management",
        category: "Enterprise Farm Management",
        description: "Enterprise farm management app with Clean Architecture, Riverpod, and SQLite for offline connectivity.",
        technologies: ["Flutter", "Clean Architecture", "Riverpod", "SQLite"],
      },
      {
        name: "SocTrip — QC & Store Release",
        category: "Quality Control & Store Release",
        description: "Functional testing, regression testing, and quality verification before App Store and Google Play releases.",
        technologies: ["Manual Testing", "Regression Testing", "Test Cases", "Release QC"],
      },
    ],
    technologies: [
      "iOS Swift", "VIPER", "MVVM", "Flutter", "Add-to-App", "WebSocket",
      "RxSwift", "SQLite", "CallKit", "Clean Architecture", "Riverpod", "BLoC"
    ],
  },
];

export const getCareerData = (lang: Language = 'en'): CareerItem[] => {
  return lang === 'en' ? careerDataEn : careerDataVi;
};
