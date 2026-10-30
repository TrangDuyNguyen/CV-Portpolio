import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet",
    project: "ECO POS — Quản Lý Bán Hàng & Hóa Đơn Điện Tử",
    type: "Commercial Production",
    summary: "Tham gia phát triển ECO POS — giải pháp quản lý bán hàng, thu ngân và chuyển đổi số toàn diện của Finviet dành cho các hộ kinh doanh cá thể, cửa hàng tạp hóa, F&B, nhà thuốc và chuỗi bán lẻ. Ứng dụng tích hợp phân quyền hệ thống (RBAC), thanh toán đa kênh (VietQR Pay động, quẹt thẻ POS, tiền mặt), quản lý kho xuất nhập tồn, hóa đơn điện tử & kê khai thuế theo Nghị định 123 và báo cáo doanh thu real-time.",
    achievements: [
      "Thiết lập ma trận phân quyền chi tiết (RBAC) theo vai trò nhân viên thu ngân, thủ kho, quản lý và chủ chuỗi cửa hàng.",
      "Phát triển luồng bán hàng tạp hóa tốc độ cao, quét mã vạch và thanh toán đa kênh linh hoạt: VietQR Pay động, quẹt thẻ POS và tiền mặt.",
      "Xây dựng module quản lý sản phẩm đa biến thể, kiểm kê kho, theo dõi nhập/xuất kho và tự động cảnh báo mức tồn kho.",
      "Tích hợp giải pháp kê khai thuế và phát hành hóa đơn điện tử kèm chữ ký số chuẩn Nghị định 123 ngay trên thiết bị POS di động.",
      "Xây dựng hệ thống báo cáo doanh thu, lợi nhuận, ca làm việc thu ngân và đối soát giao dịch ngân hàng theo thời gian thực.",
      "Thiết kế cơ chế Offline-First với BLoC và SQLite/Drift, đảm bảo 100% dữ liệu đơn hàng không bị mất khi mất kết nối mạng.",
      "Tối ưu hóa UI render 60 FPS và kiểm soát rò rỉ RAM cho các dòng máy POS Android cấu hình thấp (Sunmi, iMin) và Kiosk tự phục vụ.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "VietQR Pay",
      "Hóa Đơn Điện Tử", "Chữ Ký Số", "ESC/POS Thermal Printer", "Barcode Scanner",
      "Platform Channels", "RBAC", "Fastlane"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=vn.com.finviet.ecopos&hl=vi",
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
    project: "ECO POS — Smart Retail POS, Cashier & E-Invoice System",
    type: "Commercial Production",
    summary: "Contributed to engineering ECO POS — Finviet's smart retail and point-of-sale ecosystem for grocery stores, F&B outlets, pharmacies, and retail chains. The application integrates granular RBAC permissions, multi-modal payments (dynamic VietQR Pay, POS card terminals, cash), inventory management, Decree 123 tax filing with certified e-invoices, and real-time revenue analytics.",
    achievements: [
      "Designed and implemented granular Role-Based Access Control (RBAC) across cashiers, inventory staff, store managers, and multi-branch owners.",
      "Built high-speed retail checkout with barcode scanning and multi-channel payment reconciliation (dynamic VietQR, POS cards, cash).",
      "Developed variant product catalog management, barcode stock auditing, stock-in/stock-out logging, and automated low-inventory alerts.",
      "Integrated tax reporting and certified electronic invoice (E-Invoice) issuance compliant with Decree 123 regulations and in-app digital signatures.",
      "Engineered real-time revenue analytics dashboards, cashier shift reconciliation, and automated bank settlement tracking.",
      "Architected an offline-first data layer with BLoC and SQLite/Drift, guaranteeing zero order loss during network interruptions.",
      "Optimized rendering pipelines for steady 60 FPS and eliminated memory leaks on low-spec Android POS hardware (Sunmi, iMin) and self-order kiosks.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "VietQR Pay",
      "E-Invoice (Decree 123)", "Digital Signatures", "ESC/POS Thermal Printer",
      "Barcode Scanner", "Platform Channels", "RBAC", "Fastlane"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=vn.com.finviet.ecopos&hl=vi",
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
