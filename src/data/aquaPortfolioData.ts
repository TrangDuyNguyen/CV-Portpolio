import { Language } from '../context/LanguageContext';

export interface AquaProjectItem {
  id: string;
  titleLines: [string, string];
  fullName: string;
  companyOrContext: string;
  period: string;
  role: string;
  shortDesc: string;
  coverImage: string;
  previewImage: string;
  previewVideo?: string;
  previewSlides?: string[];
  darkenCover?: boolean;
  externalUrl?: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  bullets: string[];
  themeAccent: string;
}

export interface AquaHobbyItem {
  id: string;
  tabLabel: string;
  roleTitle: string;
  description: string;
  highlights: string[];
  modelType: 'phone' | 'terminal' | 'guitar';
}

export interface AquaTechQA {
  question: string;
  answer: string;
}

export const getAquaProjects = (lang: Language = 'en'): AquaProjectItem[] => {
  const isEn = lang === 'en';
  return [
    {
      id: 'astrobite',
      titleLines: ['ASTRO', 'BITE'],
      fullName: 'AstroBite v3.0.0 — Smart AI Food Scanner & Voice Calorie Tracker',
      companyOrContext: isEn ? 'Flagship System Architecture · Flutter 3.x & Gemini AI' : 'Dự án Kiến trúc Chủ lực · Flutter 3.x & Gemini AI',
      period: '2025 — 2026',
      role: isEn ? 'Mobile Engineer & System Architect' : 'Mobile Engineer & System Architect',
      shortDesc: isEn
        ? 'AI FOOD SCANNER & VIETNAMESE VOICE CALORIE TRACKER (V3.0.0) WITH GEMINI 3.8 FLASH, GENUI A2UI & 277 AUTOMATED TESTS (100% PASS).'
        : 'ỨNG DỤNG QUÉT MÓN ĂN AI & ĐẾM CALO GIỌNG NÓI TIẾNG VIỆT (V3.0.0) DÙNG GEMINI 3.8 FLASH, GENUI A2UI & 277 TESTS PASS 100%.',
      coverImage: '/screenshots/clay/cockpit_dashboard.png',
      previewImage: '/screenshots/clay/ar_camera_scanner.png',
      previewSlides: [
        '/screenshots/clay/ar_camera_scanner.png',
        '/screenshots/clay/genui_astrocoach_chat.png',
        '/screenshots/clay/manual_portion_scaler.png',
        '/screenshots/clay/widget_home_screen.png',
        '/screenshots/clay/analytics_fl_chart.png',
      ],
      darkenCover: true,
      metrics: [
        { label: isEn ? 'Architecture' : 'Kiến trúc', value: '12 Clean Modules' },
        { label: isEn ? 'AI Latency' : 'Độ trễ AI', value: '< 2.5s Vision · ~1.1s Voice' },
        { label: isEn ? 'Automated QA' : 'Kiểm thử', value: '277 / 277 Tests Pass' },
        { label: isEn ? 'Frame Budget' : 'Hiệu năng', value: '60 FPS · 0 Leak' },
      ],
      techStack: [
        'Flutter 3.x',
        'Dart 3.x',
        'Riverpod 2.6',
        'Clean Architecture',
        'Gemini 3.8 Flash Vision & NLU',
        'Flutter GenUI (A2UI)',
        'Speech-to-Text (vi-VN)',
        'iOS WidgetKit (Swift)',
        'Android AppWidget (Kotlin)',
        'SQLite & Cloud Firestore',
        'Fastlane & GitHub Actions',
      ],
      bullets: isEn
        ? [
            'Architected AstroBite v3.0.0 across 12 decoupled Feature-First Clean Architecture modules with Riverpod 2.6 code-gen and 277 automated tests passing 100%.',
            'Built AstroVoice AI: on-device Vietnamese (vi-VN) speech-to-text paired with Gemini 3.8 Flash NLU parsing colloquial units (bowls, cups, pieces) in ~1.1s latency and ~45ms 1-tap Firestore logging.',
            'Engineered an Asian Cuisine Vision Engine that separates fatty broth from solid noodles/meat and individual toppings, cutting manual macro edits by 68% with 0 camera buffer leaks.',
            'Implemented Google A2UI Generative UI protocol rendering native interactive food cards (+/-20g steppers, 1-tap log) inside chat with <250-token context injection.',
            'Developed zero-dependency 2D/3D Claymorphic Design System (60 FPS, 62.4MB APK) and native iOS WidgetKit / Android AppWidget with <300ms scanner deep-link.',
          ]
        : [
            'Thiết kế kiến trúc AstroBite v3.0.0 theo Feature-First Clean Architecture gồm 12 phân hệ độc lập với Riverpod 2.6 code-gen, đạt 277/277 automated tests pass 100%.',
            'Xây dựng AstroVoice AI: nhận diện giọng nói tiếng Việt on-device (vi-VN) kết hợp Gemini 3.8 Flash NLU bóc tách đơn vị dân dã (tô, bát, ly, cái) trong ~1.1s và lưu 1 chạm ~45ms.',
            'Phát triển Engine tách Nước dùng & Topping món Á (phở, bún bò, cơm tấm), tự trừ calo và >65% natri, giảm 68% thao tác sửa tay với 0 memory leak camera buffer.',
            'Triển khai giao thức Flutter Generative UI (A2UI) render trực tiếp thẻ món ăn tương tác (+/-20g stepper, 1-Tap Log) ngay trong luồng chat.',
            'Tự viết Design System Claymorphic 2D/3D bằng Flutter primitives (60 FPS, APK 62.4MB) cùng Widget màn hình khóa iOS (Swift) & Android (Kotlin) mở camera <300ms.',
          ],
      themeAccent: '#111111',
    },
    {
      id: 'ecopos',
      titleLines: ['ECO', 'POS'],
      fullName: 'Finviet ECO POS — Retail & F&B POS, Kiosk & E-Invoice',
      companyOrContext: 'Finviet Technology · 860 Commits · 201 Tickets',
      period: '08/2025 — 08/2026',
      role: 'Mobile Developer (Flutter & Rust FFI)',
      shortDesc: isEn
        ? 'RETAIL & F&B POS, KIOSK & DECREE 123 E-INVOICE ECOSYSTEM (860 COMMITS, 201 TICKETS). RUST SQLITE PRICE STORE & -30% CHECKOUT TIME.'
        : 'HỆ SINH THÁI BÁN HÀNG RETAIL/F&B, KIOSK & HÓA ĐƠN ĐIỆN TỬ NĐ123 (860 COMMITS, 201 TICKETS). RUST SQLITE PRICE STORE & -30% THỜI GIAN GIAO DỊCH.',
      coverImage:
        "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%23111318'/%3E%3Cg stroke='%23252a34' stroke-width='1'%3E%3Cline x1='0' y1='200' x2='800' y2='200'/%3E%3Cline x1='0' y1='400' x2='800' y2='400'/%3E%3Cline x1='0' y1='600' x2='800' y2='600'/%3E%3Cline x1='0' y1='800' x2='800' y2='800'/%3E%3Cline x1='200' y1='0' x2='200' y2='1000'/%3E%3Cline x1='400' y1='0' x2='400' y2='1000'/%3E%3Cline x1='600' y1='0' x2='600' y2='1000'/%3E%3C/g%3E%3Crect x='110' y='140' width='580' height='720' rx='16' fill='%23181c24' stroke='%23ffffff' stroke-opacity='0.25' stroke-width='2'/%3E%3Ctext x='150' y='210' fill='%23ffffff' font-family='monospace' font-size='22' font-weight='bold'%3EFINVIET ECO POS // TERMINAL V2%3C/text%3E%3Ctext x='150' y='245' fill='%239ba3b0' font-family='monospace' font-size='15'%3ERUST + SQLITE FFI (50,000 SKUS) · DECREE 123 E-INVOICE%3C/text%3E%3Crect x='150' y='285' width='500' height='110' fill='%230d1015' stroke='%23333b48'/%3E%3Ctext x='175' y='330' fill='%234ade80' font-family='monospace' font-size='20'%3E%26gt; flutter_rust_bridge: 50,000 items indexed%3C/text%3E%3Ctext x='175' y='365' fill='%23e2e8f0' font-family='monospace' font-size='16'%3E%26gt; Checkout Time: -30%25 | VietQR T+0 | 60 FPS%3C/text%3E%3C/svg%3E",
      previewImage:
        "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 400'%3E%3Crect width='640' height='400' fill='%230d0f14'/%3E%3Crect x='24' y='24' width='592' height='352' rx='8' fill='%23151922' stroke='%23ffffff' stroke-opacity='0.2'/%3E%3Ctext x='48' y='72' fill='%23ffffff' font-family='monospace' font-size='18' font-weight='bold'%3EECO POS · SUNMI / IMIN TERMINAL%3C/text%3E%3Ctext x='48' y='105' fill='%2394a3b8' font-family='monospace' font-size='13'%3E860 COMMITS · 201 TICKETS · 61 TEST FILES%3C/text%3E%3C/svg%3E",
      previewSlides: [],
      darkenCover: true,
      externalUrl: 'https://play.google.com/store/apps/details?id=vn.com.finviet.ecopos&hl=vi',
      metrics: [
        { label: isEn ? 'Checkout Speed' : 'Tốc độ bán hàng', value: '-30% Transaction Time' },
        { label: isEn ? 'Verified Output' : 'Đóng góp thực tế', value: '860 Commits · 201 Tickets' },
        { label: isEn ? 'Rust FFI Store' : 'Hiệu năng Rust FFI', value: '50,000 SKUs Stress-Tested' },
        { label: isEn ? 'Unit & Widget QA' : 'Kiểm thử', value: '61 Automated Test Files' },
      ],
      techStack: [
        'Flutter',
        'Rust (flutter_rust_bridge FFI)',
        'SQLite & Hive',
        'BLoC / Cubit',
        'Clean Architecture',
        'WebSocket (TableOrder)',
        'ESC/POS & iMin Thermal Printer',
        'Decree 123 E-Invoice',
        'VietQR Pay',
        'Fastlane & Sentry',
      ],
      bullets: isEn
        ? [
            'Built POS/Kiosk & barcode checkout flows cutting transaction time by 30%, F&B modifiers/returns/VAT, and a Clean Architecture TableOrder module syncing live table status over WebSocket.',
            'Engineered an embedded Rust SQLite Price Store via flutter_rust_bridge (v1.8.0) with indexed migrations, multi-row batch inserts, and a 50,000-item stress benchmark across Android/iOS.',
            'Built multi-step tax declaration workflows, Decree 123 e-invoicing with digital signatures, and a bank_declaration module (T+0 settlement, Pub/Sub).',
            'Implemented RegisterV2 onboarding (BR-03 OTP lockout, tax ID lookup) and enforced RBAC permission matrices across menus, thermal printers, and cashbooks.',
            'Optimized low-RAM Sunmi/iMin POS terminals with BaseNetworkImageV2 (_MemCacheSize by devicePixelRatio), ESC/POS printer probing cache, and 61 unit/widget test files holding 60 FPS.',
          ]
        : [
            'Xây dựng luồng quét barcode & POS/Kiosk giảm 30% thời gian giao dịch, xử lý đơn F&B và module TableOrder dùng Clean Architecture + WebSocket đồng bộ bàn theo thời gian thực.',
            'Phát triển local SQLite Price Store bằng Rust qua flutter_rust_bridge (Dart FFI) với schema migrations đánh index, batch INSERT và stress test 50.000 mã hàng.',
            'Xây dựng luồng kê khai thuế đa bước, phát hành hóa đơn điện tử Nghị định 123 kèm chữ ký số và module bank_declaration đối soát T+0.',
            'Triển khai luồng đăng ký RegisterV2 (khóa OTP BR-03, tra cứu MST) và áp dụng phân quyền RBAC cho menu, máy in nhiệt và sổ quỹ.',
            'Tối ưu thiết bị POS RAM thấp (Sunmi, iMin) qua BaseNetworkImageV2, cache máy in ESC/POS, In-app DevTools và 61 file unit/widget test giữ vững 60 FPS.',
          ],
      themeAccent: '#1a1a1a',
    },
    {
      id: 'hahalolo',
      titleLines: ['HAHA', 'LOLO'],
      fullName: 'Hahalolo — Social Travel Network (1M+ Downloads)',
      companyOrContext: 'Hahalolo Ecosystem · 20-Engineer Mobile Team',
      period: '05/2021 — 07/2025',
      role: 'Mobile Developer (Native iOS Swift & Flutter)',
      shortDesc: isEn
        ? 'SOCIAL TRAVEL SUPER-APP WITH 1M+ DOWNLOADS & 99.5%+ CRASH-FREE SESSIONS BUILT WITH NATIVE IOS SWIFT (VIPER) & FLUTTER ADD-TO-APP.'
        : 'SIÊU ỨNG DỤNG MẠNG XÃ HỘI DU LỊCH 1M+ LƯỢT TẢI & 99.5%+ CRASH-FREE XÂY BẰNG NATIVE IOS SWIFT (VIPER) & FLUTTER ADD-TO-APP.',
      coverImage: '/assets/apps/hahalolo.png',
      previewImage: '/assets/apps/hahalolo.png',
      metrics: [
        { label: isEn ? 'User Scale' : 'Quy mô người dùng', value: '1,000,000+ Downloads' },
        { label: isEn ? 'Stability' : 'Độ ổn định', value: '99.5%+ Crash-Free' },
        { label: isEn ? 'Architecture' : 'Kiến trúc', value: 'iOS VIPER + Flutter Add-to-App' },
        { label: isEn ? 'Team Size' : 'Quy mô đội ngũ', value: '20 Mobile Engineers' },
      ],
      techStack: [
        'Native iOS (Swift / UIKit)',
        'VIPER Architecture',
        'Flutter Add-to-App',
        'Google Maps SDK',
        'Universal Deep Linking',
        'Autoplay Video Feed',
        'Firebase Crashlytics',
      ],
      bullets: isEn
        ? [
            'Developed core Tour, Flight, Hotel, Community Site, Handnotes, and Profile modules for a production travel social network exceeding 1M+ downloads on iOS and Android.',
            'Architected Native iOS modules in Swift using VIPER and Autolayout, and bridged cross-platform Flutter modules seamlessly via Flutter Add-to-App.',
            'Integrated Google Maps, Push Notifications, Universal Links, and smooth Autoplay Video feeds while maintaining 99.5%+ crash-free sessions in Firebase Crashlytics.',
          ]
        : [
            'Phát triển các phân hệ cốt lõi Tour, Flight, Hotel, Community, Handnotes và Profile cho mạng xã hội du lịch vượt mốc 1M+ lượt tải trên iOS và Android.',
            'Xây dựng module Native iOS bằng Swift theo kiến trúc VIPER và tích hợp liền mạch các phân hệ Flutter thông qua cơ chế Add-to-App.',
            'Tích hợp Google Maps, Push Notification, Universal Deep Linking và Autoplay Video trên bảng tin, duy trì tỷ lệ 99.5%+ crash-free qua Firebase Crashlytics.',
          ],
      themeAccent: '#0d2628',
    },
    {
      id: 'halome',
      titleLines: ['HALO', 'ME'],
      fullName: 'Halome — Real-time OTT Messaging & VoIP Calling',
      companyOrContext: 'Hahalolo Ecosystem · 5-Engineer iOS Team',
      period: '2021 — 2025',
      role: 'Native iOS Developer (Swift & MVVM)',
      shortDesc: isEn
        ? 'REALTIME OTT MESSAGING & CALLKIT VOIP APP ENGINEERED IN NATIVE IOS SWIFT (MVVM) WITH STARSCREAM WEBSOCKET, RXSWIFT & SQLITE.'
        : 'ỨNG DỤNG NHẮN TIN OTT THỜI GIAN THỰC & GỌI THOẠI CALLKIT XÂY BẰNG NATIVE IOS SWIFT (MVVM), STARSCREAM WEBSOCKET & SQLITE.',
      coverImage: '/assets/apps/halome.png',
      previewImage: '/assets/apps/halome.png',
      metrics: [
        { label: isEn ? 'Messaging Engine' : 'Luồng tin nhắn', value: 'Starscream WebSocket' },
        { label: isEn ? 'Voice & Video' : ' Đàm thoại', value: 'Apple CallKit VoIP' },
        { label: isEn ? 'Feed Rendering' : 'Hiển thị hội thoại', value: 'IGListKit 60 FPS' },
        { label: isEn ? 'Offline Cache' : 'Lưu trữ cục bộ', value: 'SQLite Persistence' },
      ],
      techStack: [
        'Native iOS Swift',
        'MVVM Architecture',
        'Starscream (WebSocket)',
        'RxSwift',
        'IGListKit',
        'Apple CallKit VoIP',
        'SQLite Offline Storage',
        'Alamofire',
      ],
      bullets: isEn
        ? [
            'Built a real-time OTT messaging app from scratch in Native iOS Swift (MVVM) supporting anonymous login and Hahalolo SSO.',
            'Implemented Starscream WebSockets for bi-directional chat events, RxSwift for reactive data binding, and IGListKit for 60 FPS conversation threads.',
            'Persisted chat histories in local SQLite for instant offline access and integrated Apple CallKit SDK for native lock-screen audio/video VoIP calls.',
          ]
        : [
            'Xây dựng từ đầu ứng dụng nhắn tin OTT thời gian thực bằng Native iOS Swift (MVVM) hỗ trợ đăng nhập ẩn danh và SSO Hahalolo.',
            'Sử dụng Starscream WebSocket cho luồng chat hai chiều, RxSwift cho reactive data binding và IGListKit giữ cuộn hội thoại mượt 60 FPS.',
            'Lưu trữ tin nhắn offline bằng SQLite và tích hợp Apple CallKit SDK cho cuộc gọi thoại và video VoIP trực tiếp từ màn hình khóa.',
          ],
      themeAccent: '#131d31',
    },
    {
      id: 'haloki',
      titleLines: ['HALO', 'KI'],
      fullName: 'Haloki — Cross-Border Fintech Remittance (192 Countries)',
      companyOrContext: 'Hahalolo Fintech · International Money Transfer',
      period: '2022 — 2025',
      role: 'Flutter Mobile Developer',
      shortDesc: isEn
        ? 'CROSS-BORDER FINTECH REMITTANCE PLATFORM SERVING 192 COUNTRIES IN FLUTTER WITH MULTI-STEP KYC & TRANSACTION INTEGRITY GUARDS.'
        : 'NỀN TẢNG FINTECH CHUYỂN TIỀN QUỐC TẾ 192 QUỐC GIA TRÊN FLUTTER VỚI XÁC THỰC ĐỊNH DANH KYC & BẢO MẬT GIAO DỊCH.',
      coverImage: '/assets/apps/haloki.png',
      previewImage: '/assets/apps/haloki.png',
      metrics: [
        { label: isEn ? 'Global Reach' : 'Phạm vi quốc tế', value: '192 Countries' },
        { label: isEn ? 'Compliance' : 'Bảo mật & Định danh', value: 'Multi-Step eKYC' },
        { label: isEn ? 'Network Layer' : 'Tầng mạng', value: 'Dio 401 Auto-Refresh' },
        { label: isEn ? 'Framework' : 'Nền tảng', value: 'Flutter Cross-Platform' },
      ],
      techStack: [
        'Flutter',
        'Dart',
        'BLoC State Management',
        'eKYC Identity Verification',
        'Dio Interceptors',
        'Secure Token Storage',
      ],
      bullets: isEn
        ? [
            'Maintained and stabilized a cross-border remittance mobile application serving money transfers across 192 countries in Flutter.',
            'Hardened multi-step eKYC verification workflows, transaction integrity state machines, and Dio token refresh interceptors.',
          ]
        : [
            'Phát triển và duy trì độ ổn định cho ứng dụng chuyển tiền đa quốc gia phục vụ giao dịch trên 192 quốc gia bằng Flutter.',
            'Tối ưu luồng định danh điện tử eKYC, kiểm soát tính toàn vẹn của giao dịch tài chính và bảo mật token qua Dio Interceptors.',
          ],
      themeAccent: '#0f2338',
    },
    {
      id: 'invest',
      titleLines: ['IN', 'VEST'],
      fullName: 'Hahalolo Invest — Real-time Stock & Portfolio Trading',
      companyOrContext: 'Hahalolo Fintech · Securities & Equity Analytics',
      period: '2022 — 2025',
      role: 'Flutter Mobile Developer',
      shortDesc: isEn
        ? 'REALTIME SECURITIES TRADING & PORTFOLIO ANALYTICS APPLICATION IN FLUTTER WITH WEBSOCKET PRICE STREAMS & FINANCIAL CHARTS.'
        : 'ỨNG DỤNG GIAO DỊCH CỔ PHIẾU & DANH MỤC ĐẦU TƯ REALTIME TRÊN FLUTTER VỚI BIỂU ĐỒ TÀI CHÍNH & WEBSOCKET STREAM.',
      coverImage: '/assets/apps/hahalolo-invest.png',
      previewImage: '/assets/apps/hahalolo-invest.png',
      metrics: [
        { label: isEn ? 'Data Stream' : 'Luồng giá', value: 'Realtime WebSocket' },
        { label: isEn ? 'Visualization' : 'Đồ thị', value: '60 FPS Candlestick Charts' },
        { label: isEn ? 'Order Flow' : 'Giao dịch', value: 'Live Buy/Sell Execution' },
        { label: isEn ? 'Stack' : 'Công nghệ', value: 'Flutter & BLoC' },
      ],
      techStack: [
        'Flutter',
        'Dart',
        'WebSocket Market Feed',
        'Financial Charting',
        'BLoC / Cubit',
        'REST & Dio Client',
      ],
      bullets: isEn
        ? [
            'Engineered real-time financial chart views, portfolio valuation dashboards, and buy/sell order execution screens in Flutter.',
            'Synchronized high-frequency WebSocket market price streams with isolated widget rebuilds to prevent UI frame drops.',
          ]
        : [
            'Xây dựng biểu đồ biến động giá theo thời gian thực, bảng quản lý danh mục đầu tư và luồng đặt lệnh mua/bán cổ phiếu trên Flutter.',
            'Đồng bộ luồng dữ liệu giá WebSocket tần suất cao với cơ chế cô lập widget rebuild để giữ giao diện luôn mượt 60 FPS.',
          ],
      themeAccent: '#1c1936',
    },
    {
      id: 'aquannets',
      titleLines: ['AQUA', 'NNETS'],
      fullName: 'Aquannets — Offline-First Aquaculture Farm Management',
      companyOrContext: 'Galactic Holdings Outsource · 2-Engineer Mobile Team',
      period: '2023 — 2024',
      role: 'Flutter Mobile Engineer',
      shortDesc: isEn
        ? 'OFFLINE-FIRST AQUACULTURE FARM MANAGEMENT SYSTEM FOR GALACTIC HOLDINGS BUILT WITH FLUTTER CLEAN ARCHITECTURE, RIVERPOD & SQLITE.'
        : 'HỆ THỐNG QUẢN LÝ AO NUÔI THỦY SẢN OFFLINE-FIRST CHO GALACTIC HOLDINGS XÂY BẰNG FLUTTER CLEAN ARCHITECTURE, RIVERPOD & SQLITE.',
      coverImage:
        "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%230c1f1b'/%3E%3Crect x='110' y='140' width='580' height='720' rx='16' fill='%23122b26' stroke='%23ffffff' stroke-opacity='0.22' stroke-width='2'/%3E%3Ctext x='150' y='210' fill='%23ffffff' font-family='monospace' font-size='22' font-weight='bold'%3EAQUANNETS // GALACTIC HOLDINGS%3C/text%3E%3Ctext x='150' y='245' fill='%2399f6e4' font-family='monospace' font-size='15'%3EOFFLINE-FIRST AQUACULTURE POND TELEMETRY%3C/text%3E%3C/svg%3E",
      previewImage:
        "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 400'%3E%3Crect width='640' height='400' fill='%230b1c18'/%3E%3Crect x='24' y='24' width='592' height='352' rx='8' fill='%23132e28' stroke='%23ffffff' stroke-opacity='0.2'/%3E%3Ctext x='48' y='72' fill='%23ffffff' font-family='monospace' font-size='18' font-weight='bold'%3EPOND SQLITE SYNC · RIVERPOD CLEAN ARCH%3C/text%3E%3C/svg%3E",
      darkenCover: true,
      metrics: [
        { label: isEn ? 'Field Mode' : 'Chế độ vận hành', value: '100% Pond Offline-First' },
        { label: isEn ? 'Architecture' : 'Kiến trúc', value: 'Clean Arch + Riverpod' },
        { label: isEn ? 'Persistence' : 'Lưu trữ', value: 'SQLite Sync Queue' },
        { label: isEn ? 'Client' : 'Khách hàng', value: 'Galactic Holdings' },
      ],
      techStack: [
        'Flutter',
        'Clean Architecture',
        'Riverpod',
        'SQLite Offline Queue',
        'Dio Retry Interceptor',
      ],
      bullets: isEn
        ? [
            'Architected an aquaculture pond management application for Galactic Holdings using Flutter Clean Architecture and Riverpod.',
            'Built an offline-first SQLite synchronization engine so technicians record feed ratios, water metrics, and harvest logs at remote ponds without Wi-Fi.',
          ]
        : [
            'Thiết kế ứng dụng quản lý trang trại nuôi trồng thủy sản cho Tập đoàn Galactic Holdings bằng Flutter Clean Architecture và Riverpod.',
            'Xây dựng cơ chế lưu trữ SQLite Offline-First giúp kỹ thuật viên ghi nhật ký thức ăn, chỉ số nước ngay tại ao nuôi không có sóng Internet.',
          ],
      themeAccent: '#0f2922',
    },
  ];
};

export const getAquaProducts = (lang: Language = 'en'): AquaProjectItem[] => {
  const isEn = lang === 'en';
  return [
    {
      id: 'astrovoice-engine',
      titleLines: ['ASTRO', 'VOICE'],
      fullName: 'AstroVoice AI — Vietnamese On-Device Speech & Gemini NLU Pipeline',
      companyOrContext: 'AstroBite v3.0.0 Core Module · ~1.1s NLU Latency',
      period: '2026',
      role: 'System Architect',
      shortDesc: isEn
        ? 'HANDS-FREE VIETNAMESE (VI-VN) SPEECH-TO-TEXT & GEMINI 3.8 FLASH NLU PIPELINE PARSING ASIAN FOOD UNITS IN ~1.1S WITH 45MS 1-TAP LOGGING.'
        : 'PIPELINE NHẬN DIỆN GIỌNG NÓI TIẾNG VIỆT (VI-VN) & GEMINI 3.8 FLASH NLU BÓC TÁCH ĐƠN VỊ MÓN Á TRONG ~1.1S, LƯU 1 CHẠM ~45MS.',
      coverImage: '/screenshots/clay/manual_portion_scaler.png',
      previewImage: '/screenshots/clay/genui_astrocoach_chat.png',
      darkenCover: true,
      metrics: [
        { label: 'NLU Latency', value: '~1.1s (SLA <= 1.5s)' },
        { label: '1-Tap Firestore Write', value: '~45ms (SLA < 150ms)' },
        { label: 'Locale Support', value: 'On-Device vi-VN' },
        { label: 'Prompt Footprint', value: '< 250 Tokens' },
      ],
      techStack: ['Speech-to-Text (vi-VN)', 'Gemini 3.8 Flash NLU', 'Riverpod AsyncNotifier', 'GenUI MealQuickLogCard'],
      bullets: isEn
        ? [
            'Streams on-device Vietnamese speech recognition directly into a structured Gemini 3.8 Flash NLU prompt.',
            'Automatically normalizes colloquial units (tô, bát, đĩa, ly, cái, quả) and infers meal slots from the 24-hour clock.',
          ]
        : [
            'Nhận diện giọng nói tiếng Việt có dấu trực tiếp trên thiết bị kết hợp prompt NLU chuẩn hóa đơn vị dân dã (tô, bát, đĩa, ly, cái).',
            'Tự động suy luận bữa ăn theo khung giờ 24h và sinh thẻ GenUI lưu nhật ký chỉ với 1 chạm (~45ms).',
          ],
      themeAccent: '#111111',
    },
    {
      id: 'rust-price-store',
      titleLines: ['RUST', 'STORE'],
      fullName: 'Rust + SQLite Price Store (Dart FFI via flutter_rust_bridge)',
      companyOrContext: 'Finviet ECO POS Core Module · 50,000-Item Benchmark',
      period: '2025 — 2026',
      role: 'Mobile Systems Engineer',
      shortDesc: isEn
        ? 'EMBEDDED RUST + SQLITE PRICE ENGINE VIA DART FFI (FLUTTER_RUST_BRIDGE) BENCHMARKED AT 50,000 RETAIL ITEMS ON LOW-RAM POS TERMINALS.'
        : 'ENGINE BẢNG GIÁ RUST + SQLITE QUA DART FFI (FLUTTER_RUST_BRIDGE) VƯỢT BÀI STRESS TEST 50.000 MÃ HÀNG TRÊN MÁY POS CẤU HÌNH THẤP.',
      coverImage:
        "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%23111318'/%3E%3Crect x='110' y='140' width='580' height='720' rx='16' fill='%23181c24' stroke='%23ffffff' stroke-opacity='0.25' stroke-width='2'/%3E%3Ctext x='150' y='210' fill='%23ffffff' font-family='monospace' font-size='22' font-weight='bold'%3ERUST + SQLITE // DART FFI BRIDGE%3C/text%3E%3Ctext x='150' y='245' fill='%234ade80' font-family='monospace' font-size='15'%3E50,000 SKUS BENCHMARKED · ARM64-V8A / IOS%3C/text%3E%3C/svg%3E",
      previewImage:
        "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 400'%3E%3Crect width='640' height='400' fill='%230d0f14'/%3E%3Crect x='24' y='24' width='592' height='352' rx='8' fill='%23151922' stroke='%23ffffff' stroke-opacity='0.2'/%3E%3Ctext x='48' y='72' fill='%23ffffff' font-family='monospace' font-size='18' font-weight='bold'%3EFLUTTER_RUST_BRIDGE V1.8 · 50K ITEMS%3C/text%3E%3C/svg%3E",
      darkenCover: true,
      metrics: [
        { label: 'Stress Benchmark', value: '50,000 Retail SKUs' },
        { label: 'Bridge', value: 'flutter_rust_bridge 1.8' },
        { label: 'Targets', value: 'arm64-v8a / armeabi-v7a / iOS' },
        { label: 'Sync', value: 'PriceContextCubit Multi-Branch' },
      ],
      techStack: ['Rust', 'SQLite Indexed Migrations', 'Dart FFI', 'flutter_rust_bridge', 'PriceContextCubit'],
      bullets: isEn
        ? [
            'Compiled native Rust `.so` binaries (`arm64-v8a`, `armeabi-v7a`, `x86_64`) and iOS static libraries for deterministic offline price resolution.',
            'Implemented indexed SQLite schema migrations and multi-row batch INSERTs keeping UI thread at 60 FPS during 50k-item catalog syncs.',
          ]
        : [
            'Biên dịch thư viện Rust native `.so` cho Android và static lib cho iOS giúp truy vấn giá bán lẻ tức thì không làm nghẽn UI thread.',
            'Thiết kế schema migrations đánh index và multi-row batch INSERT, vượt bài kiểm thử chịu tải 50.000 sản phẩm.',
          ],
      themeAccent: '#1a1a1a',
    },
    {
      id: 'clay-genui-kit',
      titleLines: ['CLAY', 'GENUI'],
      fullName: 'Solar Fresh Claymorphic UI & Flutter GenUI (A2UI) Catalog',
      companyOrContext: 'Zero-Dependency Design System · 60 FPS · 62.4MB APK',
      period: '2025 — 2026',
      role: 'UI & Design System Architect',
      shortDesc: isEn
        ? 'ZERO-DEPENDENCY 2D/3D CLAYMORPHIC DESIGN SYSTEM & GOOGLE A2UI GENERATIVE WIDGET CATALOG BUILT Purely WITH FLUTTER PRIMITIVES.'
        : 'HỆ THỐNG DESIGN SYSTEM CLAYMORPHIC 2D/3D & BỘ WIDGET TƯƠNG TÁC GENUI A2UI TỰ VIẾT 100% BẰNG FLUTTER PRIMITIVES.',
      coverImage: '/screenshots/clay/genui_astrocoach_chat.png',
      previewImage: '/screenshots/clay/cockpit_dashboard.png',
      darkenCover: true,
      metrics: [
        { label: 'External UI Packages', value: '0 (100% Native Primitives)' },
        { label: 'APK Footprint', value: '62.4 MB (Limit < 65 MB)' },
        { label: 'Tap Physics', value: '0.98 Scale · Dual Shadow' },
        { label: 'Scrolling', value: '60 FPS RepaintBoundary' },
      ],
      techStack: ['Flutter Primitives', 'Google A2UI Protocol', 'RepaintBoundary', '4pt Layout Grid'],
      bullets: isEn
        ? [
            'Built tactile 2D/3D Claymorphic surfaces with 0.98 tap compression, 20pt corner radii, and dual elevation shadows without external UI libraries.',
            'Mapped structured LLM JSON responses directly to interactive native widgets (`MealQuickLogCard`, `MacroBudgetGauge`) inside the chat stream.',
          ]
        : [
            'Tự xây dựng hệ thống nút bấm và thẻ 3D Claymorphic phản hồi lực nhấn 0.98 scale trên lưới 4pt mà không dùng bất kỳ thư viện UI bên ngoài nào.',
            'Ánh xạ JSON từ Gemini sang Native Widget tương tác hai chiều ngay trong khung chat.',
          ],
      themeAccent: '#222222',
    },
    {
      id: 'os-lock-widgets',
      titleLines: ['OS', 'WIDGET'],
      fullName: 'Native iOS WidgetKit (Swift) & Android AppWidget (Kotlin)',
      companyOrContext: 'Zero-Battery Reactive Sync · <300ms Scanner Deep-Link',
      period: '2026',
      role: 'Native iOS & Android Engineer',
      shortDesc: isEn
        ? 'LOCK-SCREEN & HOME-SCREEN WIDGETS IN SWIFT WIDGETKIT & KOTLIN APPWIDGET WITH ZERO-DRAIN REACTIVE SYNC & <300MS CAMERA DEEP-LINK.'
        : 'TIỆN ÍCH MÀN HÌNH KHÓA & MÀN HÌNH CHÍNH BẰNG SWIFT WIDGETKIT & KOTLIN APPWIDGET ĐỒNG BỘ TỨC THÌ 0 HAO PIN, MỞ CAMERA <300MS.',
      coverImage: '/screenshots/clay/widget_home_screen.png',
      previewImage: '/screenshots/clay/ar_camera_scanner.png',
      darkenCover: true,
      metrics: [
        { label: 'Deep-Link Launch', value: '< 300ms to Scanner' },
        { label: 'Background Drain', value: '0% (Event-Driven Sync)' },
        { label: 'iOS Bridge', value: 'AppGroup UserDefaults' },
        { label: 'Android Bridge', value: 'SharedPreferences RemoteViews' },
      ],
      techStack: ['iOS Swift WidgetKit', 'Android Kotlin AppWidget', 'AppGroup Shared Container', 'astrobite:// Deep Link'],
      bullets: isEn
        ? [
            'Eliminated background polling daemons by writing key-value snapshots to AppGroup UserDefaults and SharedPreferences immediately upon meal mutations.',
            'Configured `astrobite://scanner` deep-links launching the camera scanner directly from the lock screen in under 300ms.',
          ]
        : [
            'Loại bỏ hoàn toàn background service chạy ngầm gây hao pin bằng cơ chế Reactive Sync qua AppGroup UserDefaults và SharedPreferences ngay khi lưu bữa.',
            'Tích hợp deep-link `astrobite://scanner` mở thẳng camera quét món từ màn hình chính trong dưới 300ms.',
          ],
      themeAccent: '#161616',
    },
  ];
};

export const getAquaServices = (lang: Language = 'en'): { title: string; align: 'left' | 'right'; sub: string }[] => {
  const isEn = lang === 'en';
  return [
    {
      title: 'FLUTTER & CLEAN ARCHITECTURE',
      align: 'left',
      sub: isEn ? '12-Module Feature-First · Riverpod 2.6 · BLoC · 277 Automated Tests' : '12 Phân hệ Feature-First · Riverpod 2.6 · BLoC · 277 Automated Tests',
    },
    {
      title: 'NATIVE IOS SWIFT & KOTLIN',
      align: 'right',
      sub: isEn ? 'UIKit · VIPER · MVVM · CallKit VoIP · WidgetKit & AppWidget · Add-to-App' : 'UIKit · VIPER · MVVM · CallKit VoIP · WidgetKit & AppWidget · Add-to-App',
    },
    {
      title: 'RUST FFI & OFFLINE-FIRST POS',
      align: 'left',
      sub: isEn ? 'flutter_rust_bridge · 50k-SKU SQLite · ESC/POS Thermal Printers · Sunmi/iMin' : 'flutter_rust_bridge · 50k-SKU SQLite · Máy in nhiệt ESC/POS · Sunmi/iMin',
    },
    {
      title: 'GEMINI AI & GENERATIVE UI',
      align: 'right',
      sub: isEn ? 'Multimodal Vision (<2.5s) · On-Device vi-VN Voice NLU (~1.1s) · Google A2UI' : 'Multimodal Vision (<2.5s) · Giọng nói vi-VN NLU (~1.1s) · Google A2UI',
    },
  ];
};

export const getAquaHobbies = (lang: Language = 'en'): AquaHobbyItem[] => {
  const isEn = lang === 'en';
  return [
    {
      id: 'architecture',
      tabLabel: 'ARCHITECTURE',
      roleTitle: isEn ? 'SYSTEM ARCHITECT / 60 FPS PURIST' : 'KIẾN TRÚC HỆ THỐNG / TỐI ƯU 60 FPS',
      description: isEn
        ? 'I enjoy dissecting widget render trees in Flutter DevTools, isolating high-frequency animations with RepaintBoundary, and enforcing Ponytail minimalism — deleting dead abstractions so 12-module codebases stay fast, testable, and predictable at 277/277 passing tests.'
        : 'Đam mê mổ xẻ Render Tree trên Flutter DevTools, cô lập các vùng vẽ lại bằng RepaintBoundary và áp dụng triết lý Ponytail tinh gọn — xóa bỏ mọi abstraction thừa để hệ thống 12 phân hệ luôn đạt 60 FPS và 277/277 bài test tự động.',
      highlights: ['Feature-First Clean Arch', 'Flutter DevTools Profiler', '277/277 Automated Tests', '0 Memory Leaks'],
      modelType: 'phone',
    },
    {
      id: 'hardware',
      tabLabel: 'POS & RUST FFI',
      roleTitle: isEn ? 'LOW-RAM POS & RUST FFI ENGINEER' : 'KỸ SƯ PHẦN CỨNG POS & RUST FFI',
      description: isEn
        ? 'Real-world retail hardware never forgives sloppy code. I love bridging Dart with embedded Rust + SQLite over FFI to benchmark 50,000 items on low-RAM Android POS terminals (Sunmi, iMin), tuning image memory caches by devicePixelRatio, and driving ESC/POS thermal printers.'
        : 'Phần cứng máy POS bán lẻ thực tế không bao giờ dung thứ cho code nặng nề. Tôi thích kết nối Dart với Rust + SQLite qua FFI để chạy mượt 50.000 mã hàng trên máy POS RAM thấp (Sunmi, iMin), tinh chỉnh bộ nhớ ảnh theo devicePixelRatio và điều khiển máy in nhiệt ESC/POS.',
      highlights: ['Rust SQLite (50k SKUs)', 'Sunmi & iMin POS Terminals', 'ESC/POS Thermal Printing', '-30% Checkout Time'],
      modelType: 'terminal',
    },
    {
      id: 'ai-audio',
      tabLabel: 'AI & AUDIO',
      roleTitle: isEn ? 'ON-DEVICE AI & ACOUSTIC EXPLORER' : 'AI ĐA PHƯƠNG THỨC & ÂM THANH',
      description: isEn
        ? 'From streaming Vietnamese speech-to-text into Gemini 3.8 Flash NLU (~1.1s latency) and rendering interactive GenUI cards, to unwinding with acoustic guitar and ambient synthwave after shipping production builds — blending rhythm with engineering discipline.'
        : 'Từ việc truyền nhận diện giọng nói tiếng Việt trực tiếp vào Gemini 3.8 Flash NLU (~1.1s) để dựng thẻ GenUI tương tác, cho đến những giờ thư giãn với guitar thùng và nhạc Synthwave sau mỗi đợt release — sự kết hợp giữa nhịp điệu và kỷ luật kỹ thuật.',
      highlights: ['AstroVoice vi-VN (~1.1s)', 'Gemini 3.8 Flash Vision', 'Google A2UI GenUI', 'Acoustic Guitar & Synth'],
      modelType: 'guitar',
    },
  ];
};

export const getAquaTechQAs = (lang: Language = 'en'): AquaTechQA[] => {
  const isEn = lang === 'en';
  if (isEn) {
    return [
      {
        question: '01 // Why Feature-First Clean Architecture over Layer-First in AstroBite?',
        answer:
          'With 12 modules (scanner, tracker, coach, health, etc.), Layer-First causes constant Git merge conflicts in shared folders. Feature-First isolates Domain (Freezed models), Data (Repositories/DTOs), and Presentation (Riverpod Notifiers) inside each feature package, shrinking test blast radius and keeping 277/277 tests deterministic.',
      },
      {
        question: '02 // How does Flutter Generative UI (GenUI) & A2UI work in production?',
        answer:
          'Instead of returning raw Markdown from the LLM, the client defines a strongly-typed Widget Catalog (MealQuickLogCard, MacroBudgetGauge). Gemini 3.8 Flash outputs structured JSON specifying component IDs and props, which Flutter binds two-way so users adjust +/-20g steppers and tap 1-Tap Log (~45ms) straight to Firestore.',
      },
      {
        question: '03 // How did you benchmark 50,000 items on low-RAM Android POS terminals?',
        answer:
          'In Finviet ECO POS, I built an embedded SQLite Price Store in Rust bridged via flutter_rust_bridge (Dart FFI) with indexed migrations and multi-row batch inserts, paired with BaseNetworkImageV2 sizing _MemCacheSize by devicePixelRatio so Sunmi/iMin devices stay at 60 FPS.',
      },
      {
        question: '04 // How do iOS WidgetKit & Android AppWidget sync with zero battery drain?',
        answer:
          'No background polling daemons. Using Reactive Sync, whenever a meal is logged or DailySummary recalculates, the app writes a key-value snapshot into AppGroup UserDefaults (iOS) and SharedPreferences (Android) and triggers updateWidget(), with a <300ms deep-link (astrobite://scanner) back to the camera.',
      },
    ];
  }
  return [
    {
      question: '01 // Tại sao chọn Feature-First Clean Architecture thay vì Layer-First cho AstroBite?',
      answer:
        'Với 12 phân hệ độc lập (scanner, tracker, coach, health...), Layer-First dễ gây xung đột Git khi nhiều người sửa chung thư mục lớn. Feature-First đóng gói trọn vẹn Domain (Freezed), Data (Repositories/DTOs) và Presentation (Riverpod Notifiers) trong từng module, giúp cô lập phạm vi test và giữ 277/277 tests luôn xanh.',
    },
    {
      question: '02 // Flutter Generative UI (GenUI) và giao thức A2UI hoạt động thế nào?',
      answer:
        'Thay vì để LLM trả về văn bản Markdown thụ động, Client định nghĩa sẵn Catalog các Native Widget (MealQuickLogCard, MacroBudgetGauge). Gemini 3.8 Flash trả về JSON có cấu trúc chỉ định component ID và props để Flutter render widget tương tác hai chiều (+/-20g stepper, 1-Tap Log ~45ms vào Firestore) ngay trong khung chat.',
    },
    {
      question: '03 // Xử lý bài toán 50.000 mã hàng trên máy POS Android RAM thấp như thế nào?',
      answer:
        'Tại Finviet ECO POS, tôi xây dựng local SQLite Price Store bằng Rust nối qua flutter_rust_bridge (Dart FFI) với schema migrations đánh index và multi-row batch INSERT, kết hợp BaseNetworkImageV2 giới hạn _MemCacheSize theo devicePixelRatio giúp thiết bị Sunmi/iMin luôn giữ 60 FPS.',
    },
    {
      question: '04 // Đồng bộ dữ liệu ra OS Home Widgets thế nào để không hao pin?',
      answer:
        'Không dùng background service chạy ngầm theo phút. Mỗi khi người dùng lưu bữa ăn hoặc Riverpod tính xong DailySummary, app ghi snapshot dạng Key-Value vào AppGroup UserDefaults (iOS) và SharedPreferences (Android) rồi gọi updateWidget(), kèm deep-link mở thẳng camera trong <300ms.',
    },
  ];
};
