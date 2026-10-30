import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet Technology",
    project: "Hệ thống POS & Kiosk Đa Ngành (F&B, Bán Lẻ & Spa)",
    type: "Commercial Production",
    summary: "Phát triển và bảo trì hệ thống POS bán hàng, Kiosk tự phục vụ, quản lý kho vận, bảng giá và phân quyền tính năng chuyên biệt cho 3 mô hình: F&B (Nhà hàng/Cafe), Bán lẻ (Chuỗi cửa hàng) và Dịch vụ Spa trên Flutter và Android Native.",
    achievements: [
      "Phát triển các luồng POS và self-service Kiosk trên Flutter cho mô hình F&B, bán lẻ và dịch vụ Spa (bán hàng, giỏ hàng, đặt món, quản lý quy trình phục vụ).",
      "Xây dựng các phân hệ quản lý hàng hóa, bảng giá đa cấp theo chi nhánh, quản lý kho vận và phân quyền theo vai trò nghiệp vụ (RBAC).",
      "Tích hợp máy in hóa đơn nhiệt ESC/POS và máy quét mã vạch phần cứng Android thông qua Kotlin Platform Channels.",
      "Tham gia xây dựng luồng lưu đơn hàng cục bộ bằng SQLite và đồng bộ dữ liệu khi có kết nối mạng.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "Platform Channels",
      "ESC/POS Thermal Printer", "Barcode Scanner", "RBAC", "Fastlane"
    ],
  },
  {
    period: "05/2020 — 06/2025 (5 năm)",
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo Social Travel Network",
    project: "Hệ sinh thái sản phẩm: Mạng xã hội, OTT, Fintech & Outsource",
    type: "Commercial Production (1M+ Downloads)",
    summary: "Tham gia phát triển và duy trì hệ sinh thái ứng dụng thuộc các lĩnh vực social travel, OTT messaging, fintech và outsource nông nghiệp. Làm việc linh hoạt với cả Flutter và native iOS, tùy theo sản phẩm và phạm vi tính năng.",
    achievements: [
      "Phát triển các phân hệ Tour, Flight, Hotel và Community trên mạng xã hội du lịch Hahalolo (1M+ downloads).",
      "Xây dựng ứng dụng nhắn tin OTT Halome native iOS Swift với WebSocket, RxSwift, SQLite và CallKit.",
      "Tham gia bảo trì và hoàn thiện tính năng cho ứng dụng chuyển tiền quốc tế Haloki và ứng dụng giao dịch cổ phiếu Hahalolo Invest bằng Flutter.",
      "Phát triển ứng dụng quản lý nuôi trồng thủy sản Aquannets bằng Flutter với Clean Architecture, Riverpod và SQLite.",
      "Thực hiện kiểm thử chức năng (QC) và regression test cho ứng dụng mạng xã hội SocTrip trước các đợt phát hành.",
    ],
    subProjects: [
      {
        name: "Hahalolo — Travel Social Network",
        category: "Social Travel (1M+ Downloads)",
        description: "Phát triển các phân hệ Tour, Flight, Hotel và Community. Tham gia phát triển native iOS bằng Swift theo kiến trúc VIPER và tích hợp module Flutter qua cơ chế Add-to-App. Tích hợp Google Maps, Deep Linking và Firebase Crashlytics.",
        technologies: ["iOS Swift", "VIPER", "Flutter Add-to-App", "Google Maps", "Crashlytics"],
      },
      {
        name: "Halome — OTT Realtime Messaging",
        category: "OTT Messaging & VoIP",
        description: "Phát triển ứng dụng nhắn tin native iOS bằng Swift theo kiến trúc MVVM. Tích hợp WebSocket (Starscream) cho realtime messaging, RxSwift cho luồng dữ liệu phản ứng, SQLite cho lưu trữ hội thoại cục bộ và CallKit cho cuộc gọi trên iOS.",
        technologies: ["iOS Swift", "MVVM", "WebSocket", "RxSwift", "SQLite", "CallKit"],
      },
      {
        name: "Haloki — Fintech / International Money Transfer",
        category: "Fintech & Remittance",
        description: "Tham gia phát triển ứng dụng chuyển tiền quốc tế bằng Flutter (hỗ trợ nhiều quốc gia). Đảm bảo tính ổn định của luồng giao dịch tài chính, xác minh danh tính KYC và bảo mật dữ liệu.",
        technologies: ["Flutter", "Dart", "BLoC", "KYC Verification", "REST API"],
      },
      {
        name: "Hahalolo Invest — Stock Trading",
        category: "Fintech & Securities",
        description: "Tham gia phát triển ứng dụng giao dịch cổ phiếu bằng Flutter. Xử lý biểu đồ tài chính thời gian thực, quản lý danh mục đầu tư và luồng khớp lệnh mua bán.",
        technologies: ["Flutter", "Dart", "Financial Charts", "WebSocket"],
      },
      {
        name: "Aquannets — Aquaculture Management (Galactic Holdings)",
        category: "Enterprise Farm Management",
        description: "Phát triển ứng dụng Flutter phục vụ quản lý hoạt động nuôi trồng thủy sản (dự án outsource cho Galactic Holdings). Áp dụng Clean Architecture, Riverpod và SQLite cho dữ liệu cục bộ tại ao nuôi.",
        technologies: ["Flutter", "Clean Architecture", "Riverpod", "SQLite"],
      },
      {
        name: "SocTrip — QC / E2E Testing",
        category: "Quality Control & Store Release",
        description: "Thực hiện kiểm thử chức năng, regression test và end-to-end cho mạng xã hội SocTrip; đối soát chất lượng trước mỗi đợt phát hành lên App Store và Google Play.",
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
    company: "Finviet Technology",
    project: "Multi-Industry POS & Kiosk Ecosystem (F&B, Retail & Spa)",
    type: "Commercial Production",
    summary: "Engineered and maintained commercial POS checkout applications, self-order kiosks, inventory warehouse management, dynamic price policies, and role-based permissions customized for 3 business verticals: F&B, Retail, and Spa Services on Flutter and Android Native.",
    achievements: [
      "Developed POS and self-service Kiosk workflows on Flutter for F&B, Retail, and Spa verticals (ordering, shopping cart, and service workflows).",
      "Built goods management, multi-tier pricing policies per branch, warehouse operations, and role-based access control (RBAC).",
      "Integrated ESC/POS thermal receipt printers and hardware barcode scanners via Android Kotlin Platform Channels.",
      "Implemented offline order persistence using SQLite with automatic synchronization once network connectivity restores.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "Platform Channels",
      "ESC/POS Thermal Printer", "Barcode Scanner", "RBAC", "Fastlane"
    ],
  },
  {
    period: "05/2020 — 06/2025 (5 years)",
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo Social Travel Network",
    project: "Multi-Product Ecosystem: Social Travel, OTT, Fintech & Outsource",
    type: "Commercial Production (1M+ Downloads)",
    summary: "Contributed to developing and maintaining a multi-product ecosystem across social travel, OTT messaging, fintech, and agricultural management. Worked with both Flutter and native iOS depending on product architecture and feature scope.",
    achievements: [
      "Engineered Tour, Flight, Hotel, and Community modules for Hahalolo travel social network (1M+ downloads).",
      "Built native iOS OTT messaging app Halome with WebSocket, RxSwift, SQLite, and CallKit integration.",
      "Maintained and enhanced international remittance app Haloki and stock trading app Hahalolo Invest using Flutter.",
      "Developed Aquannets farm management app using Flutter with Clean Architecture, Riverpod, and SQLite.",
      "Conducted functional, regression, and end-to-end QC testing for SocTrip social app prior to Store releases.",
    ],
    subProjects: [
      {
        name: "Hahalolo — Travel Social Network",
        category: "Social Travel (1M+ Downloads)",
        description: "Developed Tour, Flight, Hotel, and Community features. Built native iOS Swift modules with VIPER architecture and integrated Flutter modules via Add-to-App. Integrated Google Maps, Deep Linking, and Firebase Crashlytics.",
        technologies: ["iOS Swift", "VIPER", "Flutter Add-to-App", "Google Maps", "Crashlytics"],
      },
      {
        name: "Halome — OTT Realtime Messaging",
        category: "OTT Messaging & VoIP",
        description: "Built native iOS messaging app in Swift using MVVM architecture. Integrated WebSocket (Starscream) for real-time messaging, RxSwift for reactive streams, SQLite for local message caching, and CallKit for native call handling.",
        technologies: ["iOS Swift", "MVVM", "WebSocket", "RxSwift", "SQLite", "CallKit"],
      },
      {
        name: "Haloki — Fintech / International Money Transfer",
        category: "Fintech & Remittance",
        description: "Maintained and resolved issues for international money transfer app built with Flutter. Ensured stability across transaction flows, KYC identity verification, and financial data security.",
        technologies: ["Flutter", "Dart", "BLoC", "KYC Verification", "REST API"],
      },
      {
        name: "Hahalolo Invest — Stock Trading",
        category: "Fintech & Securities",
        description: "Contributed to stock trading application built with Flutter. Handled real-time financial chart rendering, portfolio management, and trade execution workflows.",
        technologies: ["Flutter", "Dart", "Financial Charts", "WebSocket"],
      },
      {
        name: "Aquannets — Aquaculture Management (Galactic Holdings)",
        category: "Enterprise Farm Management",
        description: "Developed Flutter aquaculture management app (outsourced project for Galactic Holdings Group). Applied Clean Architecture, Riverpod state management, and SQLite for offline data storage at farm ponds.",
        technologies: ["Flutter", "Clean Architecture", "Riverpod", "SQLite"],
      },
      {
        name: "SocTrip — QC / E2E Testing",
        category: "Quality Control & Store Release",
        description: "Performed end-to-end testing, test case authoring, regression verification, and release sign-off for SocTrip travel app before Store deployment.",
        technologies: ["Manual Testing", "Regression Testing", "Test Cases", "Release QC"],
      },
    ],
    technologies: [
      "iOS Swift", "VIPER", "MVVM", "Flutter", "Add-to-App", "WebSocket",
      "RxSwift", "SQLite", "CallKit", "Clean Architecture", "Riverpod", "BLoC"
    ],
  },
];

export const getCareerData = (lang: Language = 'vi'): CareerItem[] => {
  return lang === 'en' ? careerDataEn : careerDataVi;
};

export const careerData = careerDataVi;
