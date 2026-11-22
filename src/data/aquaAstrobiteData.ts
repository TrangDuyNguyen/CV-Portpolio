import { Language } from '../context/LanguageContext';

// Source of truth: audit of ~/flutter_project/AstroBite (v3.6.0+24, 222 commits, `flutter test` 400/400 pass).
// Only verified numbers are used. Latency/FPS/leak figures have no measurement logs, so they are intentionally omitted.

export interface AstroPillarV2 {
  number: string;
  title: string;
  tag: string;
  badge: string;
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
}

export interface AstroFact {
  label: string;
  value: string;
}

export interface AstroContent {
  version: string;
  tagline: string;
  role: string;
  description: string;
  metrics: AstroFact[];
  pillars: AstroPillarV2[];
  engineering: AstroFact[];
}

const en: AstroContent = {
  version: 'v3.6.0 (Build 24)',
  tagline: 'AI food scanner, Vietnamese voice logging and nutrition coach in one Flutter app.',
  role: 'Personal Project · Mobile Engineer & System Architect',
  description:
    'Most calorie trackers log a whole bowl of pho even if you skip the broth, and you cannot type with wet hands. AstroBite scans plated dishes and packaged food, takes Vietnamese voice input, and answers in chat with interactive cards. I built it solo on Feature-First Clean Architecture, from the Flutter app to the Cloud Functions backend and the release pipeline.',
  metrics: [
    { label: 'Release', value: 'v3.6.0 · 222 commits' },
    { label: 'Architecture', value: '13 Modules · 50K+ LOC' },
    { label: 'Tests', value: '400 / 400 Pass' },
    { label: 'AI Backend', value: '10 scans/user/day · Cloud Function proxy' },
  ],
  pillars: [
    {
      number: '01',
      title: 'Dual-Mode AI Scanner',
      tag: 'Gemini Vision',
      badge: 'Dish + Packaged',
      description:
        'The camera has two modes. Dish mode reads plated and Asian meals. Packaged mode reads snacks, drinks, nutrition fact tables and barcodes. Both return calories and Carbs / Protein / Fat.',
      highlights: [
        'Mode switcher with its own widget tests (Dish and Packaged tabs).',
        'Gemini requests go through a backend proxy, with fallback models and retry on 503.',
      ],
      tech: ['Gemini Vision', 'Barcode & Label OCR', 'camera'],
      image: '/screenshots/clay/cockpit_dashboard.png',
    },
    {
      number: '02',
      title: 'AstroVoice: Vietnamese Voice Logging',
      tag: 'speech_to_text vi-VN + Gemini NLU',
      badge: 'Hands-free',
      description:
        'Hold the mic and say what you ate. On-device Vietnamese speech recognition feeds a Gemini NLU prompt that turns colloquial units and meal times into a log entry.',
      highlights: [
        'Speech recognition service and NLU datasource are separate classes.',
        'Covered by voice logging tests.',
      ],
      tech: ['speech_to_text', 'Gemini NLU', 'Riverpod'],
      image: '/screenshots/clay/manual_portion_scaler.png',
    },
    {
      number: '03',
      title: 'AstroCoach: Generative UI Chat',
      tag: 'A2UI parser + widget catalog',
      badge: 'GenUI',
      description:
        'The coach does not reply with plain Markdown. Gemini returns structured JSON, a parser checks it against a local widget catalog, and Flutter renders native interactive cards inside the chat.',
      highlights: [
        'Coach mirrors the language of the user (vi / en).',
        'Every AI bubble has a report button, added for the Google Play AI content policy.',
      ],
      tech: ['A2UI Parser', 'Catalog', 'flutter_markdown_plus'],
      image: '/screenshots/clay/genui_astrocoach_chat.png',
    },
    {
      number: '04',
      title: 'Offline-First Sync',
      tag: 'Local cache + pending queue',
      badge: 'Offline-First',
      description:
        'Meals and water intake are written to the local datasource first. A pending queue holds unsynced entries, and NetworkSyncCoordinator flushes them to Firestore when connectivity returns.',
      highlights: [
        'connectivity_plus listener, sync on network restore.',
        'Food logs and water logs share the same recovery path.',
      ],
      tech: ['Local datasource', 'connectivity_plus', 'Cloud Firestore'],
    },
    {
      number: '05',
      title: 'Streaks, Guilds, Health & Native Widgets',
      tag: 'Retention + platform integration',
      badge: 'Social',
      description:
        'Cosmic Streak with Starlight Shield, friend leaderboard and nudges over FCM, Guilds on a real Firestore backend, HealthKit and Health Connect sync, plus iOS WidgetKit and Android AppWidget.',
      highlights: [
        'Streak nudge runs as Cloud Functions (Firestore trigger and callable).',
        'Widgets in Swift (WidgetKit) and Kotlin (AppWidgetProvider).',
      ],
      tech: ['FCM', 'HealthKit / Health Connect', 'WidgetKit', 'AppWidget'],
      image: '/screenshots/clay/gamification_streak_shield.png',
    },
  ],
  engineering: [
    { label: 'AI proxy', value: 'Cloud Function geminiProxy: login required, 10 AI scans per user per day counted in Firestore, API key kept off the client' },
    { label: 'Data rules', value: 'Firestore rules with owner-only access and field-level validation on the user document' },
    { label: 'Auth & integrity', value: 'Firebase Auth, App Check, in-app account deletion' },
    { label: 'Store compliance', value: 'Apple Privacy Manifest, Privacy Policy and Terms pages, AI content reporting' },
    { label: 'Quality gate', value: 'flutter test 400/400 pass, 98 test files plus an integration test, Ponytail file-length guard script' },
    { label: 'CI/CD', value: 'GitHub Actions: Quality Gate, then Android and iOS builds with Fastlane, published to GitHub Releases and Firebase App Distribution' },
    { label: 'i18n', value: 'Full vi / en localization through ARB files' },
  ],
};

const vi: AstroContent = {
  version: 'v3.6.0 (Build 24)',
  tagline: 'Quét món ăn bằng AI, ghi bữa bằng giọng nói tiếng Việt và huấn luyện viên dinh dưỡng trong một app Flutter.',
  role: 'Dự án cá nhân · Mobile Engineer & System Architect',
  description:
    'Đa số app đếm calo tính nguyên tô phở dù bạn bỏ nước, và tay ướt thì không gõ phím được. AstroBite quét món ăn trên đĩa lẫn thực phẩm đóng gói, nhận giọng nói tiếng Việt và trả lời trong chat bằng thẻ tương tác. Tôi tự xây toàn bộ theo Feature-First Clean Architecture: từ app Flutter, backend Cloud Functions đến pipeline phát hành.',
  metrics: [
    { label: 'Phát hành', value: 'v3.6.0 · 222 commits' },
    { label: 'Kiến trúc', value: '13 Module · 50K+ LOC' },
    { label: 'Kiểm thử', value: '400 / 400 Pass' },
    { label: 'AI Backend', value: '10 lượt quét/user/ngày · Cloud Function proxy' },
  ],
  pillars: [
    {
      number: '01',
      title: 'Scanner AI hai chế độ',
      tag: 'Gemini Vision',
      badge: 'Dish + Packaged',
      description:
        'Camera có hai chế độ. Dish đọc món ăn trên đĩa và món Á. Packaged đọc bánh kẹo, đồ uống, bảng thành phần dinh dưỡng và mã vạch. Cả hai trả về calo và Carbs / Protein / Fat.',
      highlights: [
        'Bộ chuyển chế độ có widget test riêng (tab Dish và Packaged).',
        'Gemini gọi qua backend proxy, có model dự phòng và retry khi gặp lỗi 503.',
      ],
      tech: ['Gemini Vision', 'Barcode & Label OCR', 'camera'],
      image: '/screenshots/clay/cockpit_dashboard.png',
    },
    {
      number: '02',
      title: 'AstroVoice: ghi món bằng giọng nói',
      tag: 'speech_to_text vi-VN + Gemini NLU',
      badge: 'Rảnh tay',
      description:
        'Giữ nút Mic và nói món vừa ăn. Nhận giọng nói tiếng Việt trên thiết bị, rồi prompt Gemini NLU chuyển đơn vị dân dã và giờ ăn thành bản ghi.',
      highlights: [
        'Service nhận giọng nói và datasource NLU là hai class riêng.',
        'Có test cho luồng ghi bằng giọng nói.',
      ],
      tech: ['speech_to_text', 'Gemini NLU', 'Riverpod'],
      image: '/screenshots/clay/manual_portion_scaler.png',
    },
    {
      number: '03',
      title: 'AstroCoach: chat Generative UI',
      tag: 'A2UI parser + widget catalog',
      badge: 'GenUI',
      description:
        'Coach không trả Markdown thô. Gemini trả JSON có cấu trúc, parser đối chiếu với catalog widget cục bộ, rồi Flutter render thẻ tương tác native ngay trong khung chat.',
      highlights: [
        'Coach trả lời theo đúng ngôn ngữ người dùng (vi / en).',
        'Mỗi bubble AI có nút báo cáo, thêm theo chính sách nội dung AI của Google Play.',
      ],
      tech: ['A2UI Parser', 'Catalog', 'flutter_markdown_plus'],
      image: '/screenshots/clay/genui_astrocoach_chat.png',
    },
    {
      number: '04',
      title: 'Offline-first và đồng bộ',
      tag: 'Local cache + pending queue',
      badge: 'Offline-First',
      description:
        'Bữa ăn và lượng nước được ghi xuống local datasource trước. Hàng đợi pending giữ các bản ghi chưa đồng bộ, NetworkSyncCoordinator đẩy lên Firestore khi có mạng lại.',
      highlights: [
        'Lắng nghe connectivity_plus, đồng bộ khi mạng phục hồi.',
        'Food log và water log dùng chung một luồng phục hồi.',
      ],
      tech: ['Local datasource', 'connectivity_plus', 'Cloud Firestore'],
    },
    {
      number: '05',
      title: 'Chuỗi ngày, Guilds, Health và Widget native',
      tag: 'Giữ chân người dùng + tích hợp nền tảng',
      badge: 'Social',
      description:
        'Cosmic Streak với Khiên Sao, bảng xếp hạng bạn bè và nhắc chuỗi qua FCM, Guilds chạy trên backend Firestore thật, đồng bộ HealthKit và Health Connect, cùng widget iOS WidgetKit và Android AppWidget.',
      highlights: [
        'Nhắc chuỗi chạy bằng Cloud Functions (Firestore trigger và callable).',
        'Widget viết bằng Swift (WidgetKit) và Kotlin (AppWidgetProvider).',
      ],
      tech: ['FCM', 'HealthKit / Health Connect', 'WidgetKit', 'AppWidget'],
      image: '/screenshots/clay/gamification_streak_shield.png',
    },
  ],
  engineering: [
    { label: 'AI proxy', value: 'Cloud Function geminiProxy: bắt buộc đăng nhập, 10 lượt quét AI mỗi user mỗi ngày đếm trong Firestore, API key không nằm trong client' },
    { label: 'Quy tắc dữ liệu', value: 'Firestore rules chỉ cho chủ sở hữu truy cập, kiểm tra từng trường của document user' },
    { label: 'Xác thực', value: 'Firebase Auth, App Check, xoá tài khoản ngay trong app' },
    { label: 'Tuân thủ store', value: 'Apple Privacy Manifest, trang Privacy Policy và Terms, báo cáo nội dung AI' },
    { label: 'Cổng chất lượng', value: 'flutter test 400/400 pass, 98 file test cùng 1 integration test, script giới hạn độ dài file Ponytail' },
    { label: 'CI/CD', value: 'GitHub Actions: Quality Gate, rồi build Android và iOS bằng Fastlane, phát hành lên GitHub Releases và Firebase App Distribution' },
    { label: 'Đa ngôn ngữ', value: 'Bản địa hoá vi / en đầy đủ qua file ARB' },
  ],
};

export const getAstroContent = (lang: Language = 'en'): AstroContent => (lang === 'en' ? en : vi);
