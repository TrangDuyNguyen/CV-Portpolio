import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet",
    project: "ECO POS — Quản Lý Bán Hàng & Hóa Đơn Điện Tử",
    type: "Commercial Production",
    summary: "Tham gia phát triển ECO POS — giải pháp quản lý bán hàng, thu ngân và chuyển đổi số toàn diện của Finviet dành cho các hộ kinh doanh cá thể, cửa hàng tạp hóa, F&B, nhà thuốc và chuỗi bán lẻ. Ứng dụng tích hợp thanh toán VietQR Pay động, hóa đơn điện tử và chữ ký số trực tiếp theo chuẩn Tổng cục Thuế ngay trên điện thoại và máy POS chuyên dụng.",
    achievements: [
      "Phát triển và hoàn thiện luồng bán hàng tốc độ cao: tạo đơn, quét mã vạch bằng camera/máy quét phần cứng và in bill nhiệt ESC/POS (Bluetooth/USB) chỉ trong vài giây.",
      "Tích hợp cổng thanh toán VietQR Pay động của Finviet, tự động nhận diện và cập nhật trạng thái thanh toán ngân hàng theo thời gian thực.",
      "Tích hợp giải pháp xuất hóa đơn điện tử từ máy tính tiền và ký số chuẩn Nghị định 123 (Tổng cục Thuế) trực tiếp trên ứng dụng mà không cần thiết bị rườm rà.",
      "Thiết kế cơ chế Offline-First với BLoC và SQLite, đảm bảo 100% dữ liệu đơn hàng không bị mất khi mất kết nối mạng và tự động đồng bộ khi online.",
      "Tối ưu hóa UI render và kiểm soát rò rỉ RAM cho các dòng máy POS Android cấu hình thấp (Sunmi, iMin) và Kiosk bán hàng tự phục vụ.",
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
    summary: "Contributed to engineering ECO POS — Finviet's smart retail and point-of-sale ecosystem for grocery stores, F&B outlets, pharmacies, and retail chains. The application integrates dynamic VietQR Pay, electronic invoice issuance compliant with Tax Authority regulations, and in-app digital signatures directly on mobile and Android POS devices.",
    achievements: [
      "Engineered rapid point-of-sale checkout workflows: barcode scanning via camera/hardware scanners and instant ESC/POS thermal receipt printing via Bluetooth/USB.",
      "Integrated Finviet's dynamic VietQR Pay gateway, enabling automated banking payment reconciliation and real-time transaction status updates.",
      "Integrated E-Invoice issuance and in-app digital signature workflows complying with Vietnamese tax decree standards (Decree 123) without external hardware.",
      "Architected an offline-first data layer with BLoC and SQLite, guaranteeing zero order loss during network interruptions and seamless background synchronization upon reconnection.",
      "Profiled and optimized UI rendering and memory footprint for low-spec Android POS hardware (Sunmi, iMin) and self-order kiosks.",
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
