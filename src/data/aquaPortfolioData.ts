import { Language } from '../context/LanguageContext';

export interface AquaProjectItem {
  id: string;
  displayTitle: string;
  monogram: string;
  iconUrl?: string;
  titleLines: [string, string];
  fullName: string;
  companyOrContext: string;
  period: string;
  role: string;
  shortDesc: string;
  coverImage: string;
  previewImage: string;
  previewSlides?: string[];
  externalUrl?: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  bullets: string[];
  themeAccent: string;
}

export interface AquaServiceItem {
  title: string;
  align: 'left' | 'right';
  sub: string;
  description: string;
  proof: string;
  tags: string[];
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
      displayTitle: 'AstroBite',
      monogram: 'AB',
      titleLines: ['ASTRO', 'BITE'],
      fullName: 'AstroBite v3.6.0 — AI Food Scanner & Vietnamese Voice Calorie Tracker',
      companyOrContext: isEn ? 'Personal Project · 13 Clean Modules · 222 Commits' : 'Dự án Cá nhân · 13 Phân hệ Clean Arch · 222 Commits',
      period: '2026',
      role: 'Mobile Engineer & System Architect',
      shortDesc: isEn
        ? 'Dual-mode AI food scanner (dish & barcode/label OCR), Vietnamese voice logging, and GenUI nutrition coach.'
        : 'Ứng dụng quét món ăn AI (món đĩa & mã vạch/nhãn), ghi giọng nói tiếng Việt và huấn luyện viên GenUI.',
      coverImage: '/screenshots/clay/cockpit_dashboard.png',
      previewImage: '/screenshots/clay/genui_astrocoach_chat.png',
      previewSlides: [
        '/screenshots/clay/genui_astrocoach_chat.png',
        '/screenshots/clay/cockpit_dashboard.png',
        '/screenshots/clay/analytics_fl_chart.png',
        '/screenshots/clay/manual_portion_scaler.png',
        '/screenshots/clay/widget_home_screen.png',
      ],
      metrics: [
        { label: isEn ? 'Automated QA' : 'Kiểm thử', value: '400 / 400 Tests Pass' },
        { label: isEn ? 'Architecture' : 'Kiến trúc', value: '13 Modules · 50K+ LOC' },
        { label: isEn ? 'AI Backend' : 'AI Proxy', value: '10 Scans/Day Proxy' },
        { label: isEn ? 'Release' : 'Phát hành', value: 'v3.6.0 · 222 Commits' },
      ],
      techStack: [
        'Flutter 3.x',
        'Riverpod 2.6',
        'Gemini Vision & NLU',
        'GenUI (A2UI)',
        'Speech-to-Text (vi-VN)',
        'Cloud Functions Proxy',
        'WidgetKit & AppWidget',
        'Cloud Firestore & FCM',
        'Fastlane & GitHub Actions',
      ],
      bullets: isEn
        ? [
            'Built solo on Feature-First Clean Architecture across 13 decoupled modules (50K+ LOC) with 400/400 unit & widget tests passing across 98 test files plus an integration test.',
            'Implemented dual-mode Gemini Vision scanning (Dish mode for plated/Asian meals and Packaged mode for barcodes & nutrition fact labels) routed via a Cloud Function geminiProxy enforcing login and a 10 scans/user/day Firestore quota.',
            'Engineered AstroVoice (on-device vi-VN speech_to_text + Gemini NLU) and AstroCoach GenUI (A2UI parser + local widget catalog, vi/en language mirroring, and Google Play AI content reporting).',
            'Built offline-first food and water logging with a pending-sync queue coordinated by NetworkSyncCoordinator on connectivity_plus restore.',
            'Shipped store compliance (in-app account deletion, Apple Privacy Manifest, Firestore owner-only field rules), Guilds/Streaks over FCM, HealthKit/Health Connect sync, and native iOS WidgetKit / Android AppWidget via GitHub Actions + Fastlane.',
          ]
        : [
            'Tự xây dựng theo Feature-First Clean Architecture gồm 13 phân hệ độc lập (50K+ LOC), đạt 400/400 unit & widget tests pass trên 98 file test cùng 1 integration test.',
            'Triển khai Scanner AI hai chế độ (Dish cho món ăn đĩa/món Á và Packaged cho mã vạch/nhãn dinh dưỡng) đi qua Cloud Function geminiProxy bắt buộc đăng nhập và giới hạn 10 lượt quét/user/ngày trên Firestore.',
            'Xây dựng AstroVoice (nhận giọng nói vi-VN on-device + Gemini NLU) và AstroCoach GenUI (A2UI parser + catalog widget cục bộ, phản hồi song ngữ vi/en và nút báo cáo nội dung AI).',
            'Lưu bữa ăn và lượng nước offline-first với hàng đợi pending-sync, tự đồng bộ lên Firestore qua NetworkSyncCoordinator khi mạng phục hồi.',
            'Hoàn thiện tuân thủ store (xoá tài khoản trong app, Apple Privacy Manifest, Firestore rules kiểm tra từng trường), Guilds/Streak qua FCM, HealthKit/Health Connect và Widget iOS (Swift) / Android (Kotlin) qua GitHub Actions + Fastlane.',
          ],
      themeAccent: '#0d0f14',
    },
    {
      id: 'ecopos',
      displayTitle: 'Finviet ECO POS',
      monogram: 'POS',
      titleLines: ['ECO', 'POS'],
      fullName: 'Finviet ECO POS — Retail & F&B POS, Kiosk & E-Invoice',
      companyOrContext: 'Finviet Technology · 860 Commits · 201 Tickets',
      period: '2025 — 2026',
      role: 'Mobile Developer (Flutter & Rust FFI)',
      shortDesc: isEn
        ? 'Retail & F&B POS, self-ordering kiosk, embedded Rust SQLite price store (50k SKUs), and Decree 123 e-invoicing.'
        : 'Hệ sinh thái máy POS bán lẻ/F&B, Kiosk tự phục vụ, bảng giá Rust SQLite 50.000 mã hàng và HĐĐT Nghị định 123.',
      coverImage: '',
      previewImage: '',
      externalUrl: 'https://play.google.com/store/apps/details?id=vn.com.finviet.ecopos&hl=vi',
      metrics: [
        { label: isEn ? 'Checkout Speed' : 'Tốc độ bán hàng', value: '-30% Checkout Time' },
        { label: isEn ? 'Verified Output' : 'Đóng góp thực tế', value: '860 Commits · 201 Tickets' },
        { label: isEn ? 'Rust FFI Store' : 'Hiệu năng Rust FFI', value: '50,000 SKUs Stress-Tested' },
        { label: isEn ? 'Unit & Widget QA' : 'Kiểm thử', value: '61 Automated Test Files' },
      ],
      techStack: [
        'Flutter',
        'Rust FFI (SQLite)',
        'BLoC / Cubit',
        'Clean Architecture',
        'WebSocket (TableOrder)',
        'ESC/POS & iMin Printer',
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
            'Optimized low-RAM Sunmi/iMin POS terminals with BaseNetworkImageV2 (_MemCacheSize by devicePixelRatio), ESC/POS printer probing cache, and 61 unit/widget test files.',
          ]
        : [
            'Xây dựng luồng quét barcode & POS/Kiosk giảm 30% thời gian giao dịch, xử lý đơn F&B và module TableOrder dùng Clean Architecture + WebSocket đồng bộ bàn theo thời gian thực.',
            'Phát triển local SQLite Price Store bằng Rust qua flutter_rust_bridge (Dart FFI) với schema migrations đánh index, batch INSERT và stress test 50.000 mã hàng.',
            'Xây dựng luồng kê khai thuế đa bước, phát hành hóa đơn điện tử Nghị định 123 kèm chữ ký số và module bank_declaration đối soát T+0.',
            'Triển khai luồng đăng ký RegisterV2 (khóa OTP BR-03, tra cứu MST) và áp dụng phân quyền RBAC cho menu, máy in nhiệt và sổ quỹ.',
            'Tối ưu thiết bị POS RAM thấp (Sunmi, iMin) qua BaseNetworkImageV2, cache máy in ESC/POS, In-app DevTools và 61 file unit/widget test.',
          ],
      themeAccent: '#1a1a1a',
    },
    {
      id: 'hahalolo',
      displayTitle: 'Hahalolo',
      monogram: 'HH',
      iconUrl: '/assets/apps/hahalolo.png',
      titleLines: ['HAHA', 'LOLO'],
      fullName: 'Hahalolo — Social Travel Network (1M+ Downloads)',
      companyOrContext: 'Hahalolo Ecosystem · 20-Engineer Mobile Team',
      period: '2021 — 2025',
      role: 'Mobile Developer (Native iOS Swift & Flutter)',
      shortDesc: isEn
        ? 'Social travel super-app (Tour, Flight, Hotel, Community) built with Native iOS Swift (VIPER) and Flutter Add-to-App.'
        : 'Siêu ứng dụng mạng xã hội du lịch (Tour, Vé bay, Khách sạn, Cộng đồng) chạy Native iOS Swift (VIPER) & Flutter Add-to-App.',
      coverImage: '/assets/apps/hahalolo.png',
      previewImage: '/assets/apps/hahalolo.png',
      metrics: [
        { label: isEn ? 'User Scale' : 'Quy mô người dùng', value: '1M+ Downloads' },
        { label: isEn ? 'Stability' : 'Độ ổn định', value: '99.5%+ Crash-Free' },
        { label: isEn ? 'Architecture' : 'Kiến trúc', value: 'iOS VIPER + Add-to-App' },
        { label: isEn ? 'Team Size' : 'Quy mô đội ngũ', value: '20 Mobile Engineers' },
      ],
      techStack: [
        'Native iOS Swift',
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
      displayTitle: 'Halome OTT',
      monogram: 'HM',
      iconUrl: '/assets/apps/halome.png',
      titleLines: ['HALO', 'ME'],
      fullName: 'Halome — Real-time OTT Messaging & VoIP Calling',
      companyOrContext: 'Hahalolo Ecosystem · 5-Engineer iOS Team',
      period: '2021 — 2025',
      role: 'Native iOS Developer (Swift & MVVM)',
      shortDesc: isEn
        ? 'Real-time OTT messaging and lock-screen VoIP audio/video calling engineered from scratch in Native iOS Swift.'
        : 'Ứng dụng nhắn tin OTT thời gian thực và gọi thoại/video màn hình khóa xây dựng từ đầu bằng Native iOS Swift.',
      coverImage: '/assets/apps/halome.png',
      previewImage: '/assets/apps/halome.png',
      metrics: [
        { label: isEn ? 'Voice & Video' : 'Đàm thoại', value: 'Apple CallKit VoIP' },
        { label: isEn ? 'Messaging Engine' : 'Luồng tin nhắn', value: 'Starscream WebSocket' },
        { label: isEn ? 'Feed Rendering' : 'Hiển thị hội thoại', value: 'IGListKit' },
        { label: isEn ? 'Offline Cache' : 'Lưu trữ cục bộ', value: 'SQLite Persistence' },
      ],
      techStack: [
        'Native iOS Swift',
        'MVVM Architecture',
        'Starscream WebSocket',
        'Apple CallKit VoIP',
        'RxSwift',
        'IGListKit',
        'SQLite Offline Storage',
        'Alamofire',
      ],
      bullets: isEn
        ? [
            'Built a real-time OTT messaging app from scratch in Native iOS Swift (MVVM) supporting anonymous login and Hahalolo SSO.',
            'Implemented Starscream WebSockets for bi-directional chat events, RxSwift for reactive data binding, and IGListKit for high-volume conversation threads.',
            'Persisted chat histories in local SQLite for instant offline access and integrated Apple CallKit SDK for native lock-screen audio/video VoIP calls.',
          ]
        : [
            'Xây dựng từ đầu ứng dụng nhắn tin OTT thời gian thực bằng Native iOS Swift (MVVM) hỗ trợ đăng nhập ẩn danh và SSO Hahalolo.',
            'Sử dụng Starscream WebSocket cho luồng chat hai chiều, RxSwift cho reactive data binding và IGListKit cho danh sách hội thoại lớn.',
            'Lưu trữ tin nhắn offline bằng SQLite và tích hợp Apple CallKit SDK cho cuộc gọi thoại và video VoIP trực tiếp từ màn hình khóa.',
          ],
      themeAccent: '#131d31',
    },
    {
      id: 'haloki',
      displayTitle: 'Haloki Fintech',
      monogram: 'HK',
      iconUrl: '/assets/apps/haloki.png',
      titleLines: ['HALO', 'KI'],
      fullName: 'Haloki — Cross-Border Fintech Remittance (192 Countries)',
      companyOrContext: 'Hahalolo Fintech · International Money Transfer',
      period: '2022 — 2025',
      role: 'Flutter Mobile Developer',
      shortDesc: isEn
        ? 'Cross-border money transfer app serving 192 countries with multi-step eKYC verification and transaction guards.'
        : 'Nền tảng chuyển tiền đa quốc gia phục vụ 192 nước trên Flutter với luồng định danh eKYC và bảo vệ giao dịch.',
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
        'BLoC State Management',
        'eKYC Verification',
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
      displayTitle: 'Hahalolo Invest',
      monogram: 'IV',
      titleLines: ['IN', 'VEST'],
      fullName: 'Hahalolo Invest — Real-time Stock & Portfolio Trading',
      companyOrContext: 'Hahalolo Fintech · Securities & Equity Analytics',
      period: '2022 — 2025',
      role: 'Flutter Mobile Developer',
      shortDesc: isEn
        ? 'Real-time securities trading and portfolio valuation dashboard with live WebSocket market feeds and financial charts.'
        : 'Ứng dụng giao dịch cổ phiếu và theo dõi danh mục đầu tư thời gian thực qua WebSocket và biểu đồ tài chính.',
      coverImage: '',
      previewImage: '',
      metrics: [
        { label: isEn ? 'Data Stream' : 'Luồng giá', value: 'Realtime WebSocket' },
        { label: isEn ? 'Visualization' : 'Đồ thị', value: 'Candlestick Charts' },
        { label: isEn ? 'Order Flow' : 'Giao dịch', value: 'Live Buy/Sell Execution' },
        { label: isEn ? 'Stack' : 'Công nghệ', value: 'Flutter & BLoC' },
      ],
      techStack: [
        'Flutter',
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
            'Đồng bộ luồng dữ liệu giá WebSocket tần suất cao với cơ chế cô lập widget rebuild tránh giật khung hình.',
          ],
      themeAccent: '#1c1936',
    },
    {
      id: 'aquannets',
      displayTitle: 'Aquannets',
      monogram: 'AQ',
      titleLines: ['AQUA', 'NNETS'],
      fullName: 'Aquannets — Offline-First Aquaculture Farm Management',
      companyOrContext: 'Galactic Holdings Outsource · 2-Engineer Mobile Team',
      period: '2023 — 2024',
      role: 'Flutter Mobile Engineer',
      shortDesc: isEn
        ? 'Offline-first pond telemetry and feed management app for Galactic Holdings using Clean Architecture, Riverpod, and SQLite.'
        : 'Hệ thống quản lý ao nuôi thủy sản offline-first cho Tập đoàn Galactic Holdings bằng Clean Architecture, Riverpod & SQLite.',
      coverImage: '',
      previewImage: '',
      metrics: [
        { label: isEn ? 'Field Mode' : 'Chế độ vận hành', value: 'Pond Offline-First' },
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
      displayTitle: 'AstroVoice NLU',
      monogram: 'AV',
      titleLines: ['ASTRO', 'VOICE'],
      fullName: 'AstroVoice AI — Vietnamese On-Device Speech & Gemini NLU Pipeline',
      companyOrContext: 'AstroBite v3.6.0 Core Module · On-Device vi-VN',
      period: '2026',
      role: 'System Architect',
      shortDesc: isEn
        ? 'Hands-free Vietnamese (vi-VN) speech recognition paired with Gemini NLU to parse colloquial food units and meal times.'
        : 'Pipeline nhận diện giọng nói tiếng Việt (vi-VN) kết hợp Gemini NLU bóc tách đơn vị món ăn dân dã và khung giờ ăn.',
      coverImage: '/screenshots/clay/manual_portion_scaler.png',
      previewImage: '/screenshots/clay/genui_astrocoach_chat.png',
      previewSlides: [
        '/screenshots/clay/manual_portion_scaler.png',
        '/screenshots/clay/genui_astrocoach_chat.png',
      ],
      metrics: [
        { label: 'Locale Support', value: 'On-Device vi-VN' },
        { label: 'AI Security', value: 'Cloud Function Proxy' },
        { label: 'State', value: 'Riverpod AsyncNotifier' },
        { label: 'Testing', value: 'Voice Logging Suite' },
      ],
      techStack: ['speech_to_text (vi-VN)', 'Gemini NLU', 'Riverpod 2.6', 'Cloud Function Proxy'],
      bullets: isEn
        ? [
            'Separates on-device Vietnamese speech recognition from the Gemini NLU datasource for clean unit testing.',
            'Normalizes colloquial Vietnamese units (tô, bát, đĩa, ly, cái) and infers meal slots from the 24-hour clock.',
          ]
        : [
            'Tách biệt service nhận giọng nói tiếng Việt trên thiết bị và datasource Gemini NLU thành các lớp độc lập dễ kiểm thử.',
            'Chuẩn hóa các đơn vị dân dã (tô, bát, đĩa, ly, cái) và tự suy luận bữa ăn theo khung giờ 24h.',
          ],
      themeAccent: '#111111',
    },
    {
      id: 'rust-price-store',
      displayTitle: 'Rust SQLite FFI',
      monogram: 'RS',
      titleLines: ['RUST', 'STORE'],
      fullName: 'Rust + SQLite Price Store (Dart FFI via flutter_rust_bridge)',
      companyOrContext: 'Finviet ECO POS Core Module · 50,000-Item Benchmark',
      period: '2025 — 2026',
      role: 'Mobile Systems Engineer',
      shortDesc: isEn
        ? 'Embedded Rust + SQLite price engine via Dart FFI benchmarked at 50,000 retail items on low-RAM POS terminals.'
        : 'Engine bảng giá Rust + SQLite qua Dart FFI vượt bài stress test 50.000 mã hàng trên máy POS cấu hình thấp.',
      coverImage: '',
      previewImage: '',
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
            'Implemented indexed SQLite schema migrations and multi-row batch INSERTs keeping UI responsive during 50k-item catalog syncs.',
          ]
        : [
            'Biên dịch thư viện Rust native `.so` cho Android và static lib cho iOS giúp truy vấn giá bán lẻ tức thì không làm nghẽn UI thread.',
            'Thiết kế schema migrations đánh index và multi-row batch INSERT, vượt bài kiểm thử chịu tải 50.000 sản phẩm.',
          ],
      themeAccent: '#1a1a1a',
    },
    {
      id: 'clay-genui-kit',
      displayTitle: 'Clay UI & GenUI',
      monogram: 'UI',
      titleLines: ['CLAY', 'GENUI'],
      fullName: 'Solar Fresh Claymorphic UI Kit & A2UI Widget Catalog',
      companyOrContext: 'Zero-Dependency UI Kit · AstroBite v3.6.0',
      period: '2025 — 2026',
      role: 'UI & Design System Architect',
      shortDesc: isEn
        ? 'Custom 2D/3D Claymorphic UI kit built from Flutter primitives paired with an A2UI parser and interactive chat widget catalog.'
        : 'Bộ UI Kit Claymorphic 2D/3D viết bằng Flutter primitives kết hợp A2UI parser và catalog widget tương tác trong khung chat.',
      coverImage: '/screenshots/clay/genui_astrocoach_chat.png',
      previewImage: '/screenshots/clay/cockpit_dashboard.png',
      previewSlides: [
        '/screenshots/clay/genui_astrocoach_chat.png',
        '/screenshots/clay/cockpit_dashboard.png',
      ],
      metrics: [
        { label: 'UI Kit', value: '0 External UI Libs' },
        { label: 'GenUI Engine', value: 'A2UI Parser + Catalog' },
        { label: 'Localization', value: 'vi / en Mirroring' },
        { label: 'Store Policy', value: 'AI Content Reporting' },
      ],
      techStack: ['Flutter Primitives', 'A2UI Parser', 'Widget Catalog', '4pt Layout Grid'],
      bullets: isEn
        ? [
            'Built tactile 2D/3D Claymorphic cards, buttons, and macro gauges on a 4pt grid without third-party UI libraries.',
            'Validated structured Gemini JSON against a local catalog so AstroCoach renders native interactive widgets inside chat.',
          ]
        : [
            'Tự xây dựng hệ thống thẻ, nút bấm 3D Claymorphic và thanh dinh dưỡng trên lưới 4pt không phụ thuộc thư viện UI ngoài.',
            'Đối chiếu JSON có cấu trúc từ Gemini với catalog cục bộ để render trực tiếp Native Widget tương tác trong khung chat.',
          ],
      themeAccent: '#222222',
    },
    {
      id: 'os-lock-widgets',
      displayTitle: 'Native OS Widgets',
      monogram: 'WG',
      titleLines: ['OS', 'WIDGET'],
      fullName: 'Native iOS WidgetKit (Swift) & Android AppWidget (Kotlin)',
      companyOrContext: 'AstroBite v3.6.0 · Home-Screen Integration',
      period: '2026',
      role: 'Native iOS & Android Engineer',
      shortDesc: isEn
        ? 'Home-screen calorie & streak widgets in Swift WidgetKit and Kotlin AppWidgetProvider synced reactively on meal updates.'
        : 'Tiện ích màn hình chính bằng Swift WidgetKit và Kotlin AppWidgetProvider tự đồng bộ tức thì mỗi khi cập nhật bữa ăn.',
      coverImage: '/screenshots/clay/widget_home_screen.png',
      previewImage: '/screenshots/clay/cockpit_dashboard.png',
      previewSlides: ['/screenshots/clay/widget_home_screen.png'],
      metrics: [
        { label: 'iOS Extension', value: 'Swift WidgetKit' },
        { label: 'Android Provider', value: 'Kotlin AppWidget' },
        { label: 'Sync Model', value: 'Event-Driven Sync' },
        { label: 'Bridge', value: 'home_widget Channel' },
      ],
      techStack: ['iOS Swift WidgetKit', 'Android Kotlin AppWidget', 'AppGroup UserDefaults', 'SharedPreferences'],
      bullets: isEn
        ? [
            'Wrote native Swift WidgetKit and Kotlin AppWidgetProvider extensions sharing state via AppGroup UserDefaults and SharedPreferences.',
            'Added graceful fallbacks and widget sync unit tests covering unsupported host environments.',
          ]
        : [
            'Xây dựng tiện ích native bằng Swift WidgetKit (iOS) và Kotlin AppWidgetProvider (Android) qua AppGroup UserDefaults và SharedPreferences.',
            'Bổ sung cơ chế fallback an toàn và unit test kiểm thử luồng đồng bộ widget.',
          ],
      themeAccent: '#161616',
    },
  ];
};

export const getAquaServices = (lang: Language = 'en'): AquaServiceItem[] => {
  const isEn = lang === 'en';
  return [
    {
      title: 'FLUTTER & CLEAN ARCHITECTURE',
      align: 'left',
      sub: isEn ? '13-Module Feature-First · Riverpod 2.6 · BLoC · 400 Automated Tests' : '13 Phân hệ Feature-First · Riverpod 2.6 · BLoC · 400 Automated Tests',
      description: isEn
        ? 'Modular Feature-First architecture isolating Domain, Data, and Presentation layers with strict lint gates and deterministic unit/widget test suites.'
        : 'Kiến trúc phân tách rõ Domain, Data và Presentation theo từng tính năng độc lập, dễ mở rộng và kiểm soát chất lượng bằng bộ test tự động.',
      proof: 'AstroBite v3.6.0 (13 modules, 400/400 tests) · Finviet ECO POS (61 test files)',
      tags: ['Flutter 3.x', 'Dart 3.x', 'Riverpod 2.6', 'BLoC / Cubit', 'AutoRoute'],
    },
    {
      title: 'NATIVE IOS SWIFT & KOTLIN',
      align: 'right',
      sub: isEn ? 'UIKit · VIPER · MVVM · CallKit VoIP · WidgetKit & AppWidget · Add-to-App' : 'UIKit · VIPER · MVVM · CallKit VoIP · WidgetKit & AppWidget · Add-to-App',
      description: isEn
        ? 'Deep native iOS & Android engineering from standalone VIPER/MVVM apps and lock-screen VoIP calls to Flutter Add-to-App and home-screen widgets.'
        : 'Phát triển trực tiếp Native iOS/Android từ ứng dụng độc lập (VIPER/MVVM), gọi thoại màn hình khóa CallKit đến nhúng Flutter Add-to-App và OS Widgets.',
      proof: 'Hahalolo (1M+ downloads, 99.5%+ crash-free) · Halome OTT (Swift MVVM, CallKit)',
      tags: ['Swift / UIKit', 'Kotlin', 'VIPER & MVVM', 'CallKit VoIP', 'WidgetKit'],
    },
    {
      title: 'RUST FFI & OFFLINE-FIRST POS',
      align: 'left',
      sub: isEn ? 'flutter_rust_bridge · 50k-SKU SQLite · ESC/POS Thermal Printers · Sunmi/iMin' : 'flutter_rust_bridge · 50k-SKU SQLite · Máy in nhiệt ESC/POS · Sunmi/iMin',
      description: isEn
        ? 'High-throughput local persistence with embedded Rust + SQLite over Dart FFI, pending-sync queues, and peripheral control on low-RAM retail terminals.'
        : 'Xử lý dữ liệu cục bộ tốc độ cao với Rust + SQLite qua Dart FFI, hàng đợi đồng bộ khi rớt mạng và điều khiển máy in nhiệt trên thiết bị POS RAM thấp.',
      proof: 'Finviet ECO POS (-30% checkout time, 50k SKUs) · Aquannets (Pond Offline-First)',
      tags: ['Rust (Dart FFI)', 'SQLite & Hive', 'ESC/POS Printer', 'WebSocket', 'VietQR'],
    },
    {
      title: 'GEMINI AI & CLOUD RELEASE OPS',
      align: 'right',
      sub: isEn ? 'Multimodal Vision · vi-VN Voice NLU · A2UI GenUI · Cloud Functions & Fastlane' : 'Multimodal Vision · Giọng nói vi-VN NLU · A2UI GenUI · Cloud Functions & Fastlane',
      description: isEn
        ? 'Production AI integration secured behind Firebase Cloud Functions proxies with daily per-user quotas, structured GenUI cards, and automated store pipelines.'
        : 'Tích hợp AI đa phương thức qua Cloud Functions proxy bảo mật API key kèm hạn mức theo ngày, thẻ tương tác GenUI và tự động hóa CI/CD lên Store.',
      proof: 'AstroBite v3.6.0 (geminiProxy, A2UI Coach, GitHub Actions + Fastlane)',
      tags: ['Gemini Vision & NLU', 'GenUI (A2UI)', 'Cloud Functions', 'Fastlane', 'GitHub Actions'],
    },
  ];
};

export const getAquaHobbies = (lang: Language = 'en'): AquaHobbyItem[] => {
  const isEn = lang === 'en';
  return [
    {
      id: 'architecture',
      tabLabel: 'ARCHITECTURE',
      roleTitle: isEn ? 'SYSTEM ARCHITECT / CLEAN CODE PURIST' : 'KIẾN TRÚC HỆ THỐNG / MÃ NGUỒN TINH GỌN',
      description: isEn
        ? 'I enjoy dissecting widget render trees in Flutter DevTools, isolating rebuilds with RepaintBoundary, and enforcing Ponytail minimalism — deleting dead abstractions so 13-module codebases stay fast, readable, and backed by 400/400 passing tests.'
        : 'Đam mê mổ xẻ Render Tree trên Flutter DevTools, cô lập vùng vẽ lại bằng RepaintBoundary và áp dụng triết lý Ponytail tinh gọn — xóa bỏ mọi abstraction thừa để hệ thống 13 phân hệ luôn gọn sạch với 400/400 bài test tự động.',
      highlights: ['Feature-First Clean Arch', 'Flutter DevTools Profiler', '400/400 Automated Tests', 'Ponytail Minimalism'],
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
      roleTitle: isEn ? 'MULTIMODAL AI & ACOUSTIC EXPLORER' : 'AI ĐA PHƯƠNG THỨC & ÂM THANH',
      description: isEn
        ? 'From routing Vietnamese speech-to-text and Gemini NLU through Cloud Function proxies to rendering interactive GenUI cards, and unwinding with acoustic guitar and synthwave after shipping builds — blending rhythm with engineering discipline.'
        : 'Từ việc kết nối nhận diện giọng nói tiếng Việt và Gemini NLU qua Cloud Functions để dựng thẻ GenUI tương tác, cho đến những giờ thư giãn với guitar thùng và nhạc Synthwave sau mỗi đợt release — kết hợp giữa nhịp điệu và kỷ luật kỹ thuật.',
      highlights: ['AstroVoice vi-VN', 'Gemini Vision & NLU', 'A2UI GenUI', 'Acoustic Guitar & Synth'],
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
          'With 13 modules (scanner, tracker, coach, guilds, health, etc.), Layer-First causes constant Git merge conflicts in shared folders. Feature-First isolates Domain (Freezed models), Data (Repositories/DTOs), and Presentation (Riverpod Notifiers) inside each feature folder, shrinking test blast radius and keeping all 400/400 tests deterministic.',
      },
      {
        question: '02 // How does Flutter Generative UI (GenUI) & A2UI work in AstroCoach?',
        answer:
          'Instead of returning plain Markdown, Gemini returns structured JSON validated by an A2UI parser against a local Widget Catalog so Flutter renders native interactive cards inside the chat stream, complete with vi/en language mirroring and AI content reporting.',
      },
      {
        question: '03 // How did you benchmark 50,000 items on low-RAM Android POS terminals?',
        answer:
          'In Finviet ECO POS, I built an embedded SQLite Price Store in Rust bridged via flutter_rust_bridge (Dart FFI) with indexed migrations and multi-row batch inserts, paired with BaseNetworkImageV2 sizing _MemCacheSize by devicePixelRatio on Sunmi/iMin devices.',
      },
      {
        question: '04 // How do iOS WidgetKit & Android AppWidget sync without background drain?',
        answer:
          'No background polling daemons. Whenever a meal is logged or updated, the app writes a key-value snapshot into AppGroup UserDefaults (iOS) and SharedPreferences (Android) over the home_widget channel and triggers an immediate widget refresh.',
      },
    ];
  }
  return [
    {
      question: '01 // Tại sao chọn Feature-First Clean Architecture thay vì Layer-First cho AstroBite?',
      answer:
        'Với 13 phân hệ độc lập (scanner, tracker, coach, guilds, health...), Layer-First dễ gây xung đột Git khi sửa chung thư mục lớn. Feature-First đóng gói trọn vẹn Domain (Freezed), Data (Repositories/DTOs) và Presentation (Riverpod Notifiers) trong từng module, giúp cô lập phạm vi test và giữ 400/400 tests luôn xanh.',
    },
    {
      question: '02 // Flutter Generative UI (GenUI) và giao thức A2UI hoạt động thế nào?',
      answer:
        'Thay vì trả về Markdown thô, Gemini trả JSON có cấu trúc được A2UI parser đối chiếu với Catalog Widget cục bộ để Flutter render thẻ tương tác native ngay trong luồng chat, hỗ trợ phản hồi song ngữ vi/en và nút báo cáo nội dung AI.',
    },
    {
      question: '03 // Xử lý bài toán 50.000 mã hàng trên máy POS Android RAM thấp như thế nào?',
      answer:
        'Tại Finviet ECO POS, tôi xây dựng local SQLite Price Store bằng Rust nối qua flutter_rust_bridge (Dart FFI) với schema migrations đánh index và multi-row batch INSERT, kết hợp BaseNetworkImageV2 giới hạn _MemCacheSize theo devicePixelRatio trên máy Sunmi/iMin.',
    },
    {
      question: '04 // Đồng bộ dữ liệu ra OS Home Widgets thế nào để không hao pin?',
      answer:
        'Không dùng background service chạy ngầm theo phút. Mỗi khi người dùng lưu hoặc cập nhật bữa ăn, app ghi snapshot dạng Key-Value vào AppGroup UserDefaults (iOS) và SharedPreferences (Android) qua kênh home_widget rồi kích hoạt làm mới widget ngay lập tức.',
    },
  ];
};
