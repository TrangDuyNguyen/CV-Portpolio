import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "08/2025 — 08/2026",
    role: "Mobile Developer",
    company: "Finviet",
    project: "ECO POS — Quản Lý Bán Hàng Retail/F&B, Kiosk & Hóa Đơn Điện Tử",
    type: "Thương mại · POS & Kiosk",
    summary: "Đóng góp 860 non-merge commits (201 tickets) và 61 file test xây dựng ECO POS cho cửa hàng tạp hóa, F&B, nhà thuốc và chuỗi bán lẻ. Ứng dụng chạy trên máy POS Android cấu hình thấp (Sunmi, iMin), tích hợp bán hàng đặt bàn realtime, bảng giá offline bằng Rust + SQLite, kê khai thuế/HĐĐT Nghị định 123 và thanh toán VietQR.",
    achievements: [
      "Bán hàng Retail & F&B Đặt bàn: Xây luồng quét barcode & POS/Kiosk (-30% thời gian giao dịch), xử lý đơn F&B (món chính/phụ, tùy chọn, VAT), trả hàng và module TableOrder dùng Clean Architecture + WebSocket update_table đồng bộ đơn nháp theo thời gian thực.",
      "Rust + SQLite Price Store (Dart FFI): Xây local SQLite Price Store bằng Rust qua flutter_rust_bridge (nhánh v1.8.0) với schema migrations đánh index, multi-row batch INSERT và stress test 50.000 items; phát triển PriceContextCubit đồng bộ bảng giá đa chi nhánh.",
      "Hàng hóa, Combo & Kho hàng: Xây CRUD hàng hóa đa biến thể/đơn vị quy đổi, combo, thêm hàng nhanh theo phương pháp tính thuế, tách quyền sửa giá vốn chi nhánh/công ty và nghiệp vụ kiểm kê, nhập xuất kho.",
      "Kê khai Thuế, HĐĐT & Ngân hàng: Phát triển luồng kê khai thuế đa bước (tờ khai bổ sung, khấu trừ/trực tiếp, xuất PDF), phát hành hóa đơn điện tử NĐ 123 kèm chữ ký số và module bank_declaration (đối soát T+0, Pub/Sub).",
      "Onboarding V2 & Phân quyền RBAC: Thiết kế spec/plan và triển khai luồng đăng ký mới (RegisterV2: OTP khóa đếm ngược BR-03, tra cứu MST, đơn vị hành chính) theo Clean Architecture; áp dụng RBAC cho menu, máy in và sổ quỹ.",
      "Tối ưu máy POS RAM thấp & Mạng: Viết BaseNetworkImageV2 tính _MemCacheSize theo devicePixelRatio cho Sunmi/iMin; tối ưu cache/probing máy in ESC/POS/iMin, chuẩn hóa ApiError qua Dio và xây In-app DevTools (đổi API host, network log, seed 50k items).",
      "Thanh toán, Hiệu năng 60 FPS & Phát hành: Tích hợp thanh toán VietQR Pay động, thẻ POS, tiền mặt; giữ render 60 FPS trên thiết bị POS RAM thấp (Sunmi, iMin), hỗ trợ màn hình phụ và phát hành build qua Fastlane, GitHub Actions, Sentry & Crashlytics.",
    ],
    technologies: [
      "Flutter", "BLoC / Cubit", "Clean Architecture", "Hive", "Rust (Dart FFI / SQLite)",
      "Dio", "Socket.IO", "ESC/POS & iMin Printer", "VietQR Pay", "Hóa Đơn Điện Tử NĐ123",
      "RBAC", "61 Test Files", "Sentry & Crashlytics", "Fastlane"
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
    project: "ECO POS — Retail & F&B POS, Table Order, Kiosk & E-Invoice",
    type: "Commercial · POS & Kiosk",
    summary: "Contributed 860 non-merge commits across 201 tickets (61 test files) building ECO POS for grocery stores, F&B outlets, pharmacies, and retail chains. Runs on low-spec Android POS hardware (Sunmi, iMin) with real-time table orders, an embedded Rust SQLite price store, Decree 123 tax & e-invoicing, and dynamic VietQR payments.",
    achievements: [
      "Retail & F&B Table Order POS: Built POS/Kiosk & barcode checkout flows (cutting transaction time by 30%), F&B modifiers/returns/VAT, and a Clean Architecture TableOrder module syncing live table status and draft orders over WebSocket update_table.",
      "Rust + SQLite Price Store (Dart FFI): Built an embedded Rust SQLite Price Store via flutter_rust_bridge (v1.8.0 branch) with indexed migrations, multi-row batch inserts, and a 50,000-item stress benchmark; added PriceContextCubit for multi-branch price sync.",
      "Catalog, Combos & Warehouse: Developed variant/sub-unit catalog CRUD, combos, quick add by tax method, branch vs. company cost-price permissions, stock counts, and stock-in/out workflows.",
      "Tax Declaration, E-Invoice & Banking: Built multi-step tax declaration flows (supplementary filings, deduction/direct methods, PDF export), Decree 123 e-invoicing with digital signatures, and bank_declaration (T+0 settlement, Pub/Sub).",
      "Onboarding V2 & System RBAC: Authored specs/plans and implemented the Clean Architecture RegisterV2 wizard (BR-03 OTP lockout, tax ID lookup, admin units); enforced RBAC permission gates across menus, printers, and cashbooks.",
      "Low-RAM Optimization & Networking: Built BaseNetworkImageV2 sizing _MemCacheSize by devicePixelRatio for low-spec Sunmi/iMin terminals; added printer probing cache, standardized Dio ApiError parsing, and built In-app DevTools (API host switcher, network log, 50k-item seed).",
      "Payments, 60 FPS & Releases: Integrated dynamic VietQR Pay, POS card, and cash flows; held 60 FPS rendering on low-RAM Android POS hardware (Sunmi, iMin) with dual customer displays and shipped multi-env builds via Fastlane, GitHub Actions, Sentry & Crashlytics.",
    ],
    technologies: [
      "Flutter", "BLoC / Cubit", "Clean Architecture", "Hive", "Rust (Dart FFI / SQLite)",
      "Dio", "Socket.IO", "ESC/POS & iMin Printer", "VietQR Pay", "E-Invoice (Decree 123)",
      "RBAC", "61 Test Files", "Sentry & Crashlytics", "Fastlane"
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
        description: "Built an aquaculture farm app in Flutter using Clean Architecture, Riverpod, and SQLite so technicians log feed and water data offline at ponds.",
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
