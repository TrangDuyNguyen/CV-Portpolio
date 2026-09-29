import { AstroPillar, ScreenshotItem } from '../types';
import { Language } from '../context/LanguageContext';

export interface AstrobiteOverview {
  name: string;
  version: string;
  tagline: string;
  role: string;
  description: string;
  metrics: { label: string; value: string }[];
  stackBadges: string[];
}

const astrobiteOverviewVi: AstrobiteOverview = {
  name: "AstroBite",
  version: "v2.5.1",
  tagline: "Trợ Lý Dinh Dưỡng Thông Minh & Quét Bữa Ăn AI",
  role: "Mobile Engineer & System Architect",
  description: "AstroBite tái định nghĩa trải nghiệm theo dõi dinh dưỡng bằng cách kết hợp Trí tuệ nhân tạo thị giác Google Gemini và Ngôn ngữ thiết kế Đất nặn Claymorphic 3D: chụp 1 bức ảnh bóc tách trọn bữa ăn trong < 2.5s, trò chuyện với Trợ lý AI Coach tự sinh thẻ món ăn tương tác GenUI 2 chiều (giao thức A2UI), bảo vệ chuỗi ngày với Cơ chế Khiên Sao (Starlight Streak Shield), và tiện ích màn hình khóa iOS & Android mở máy ảnh siêu tốc < 300ms với 0 rò rỉ RAM.",
  metrics: [
    { label: "AI Latency", value: "< 2.5s" },
    { label: "Rendering Speed", value: "60 FPS Smooth" },
    { label: "Automated Tests", value: "226 Pass (100%)" },
    { label: "Memory Leak", value: "0 Bytes (Zero)" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Dart 3.x",
    "Riverpod 2.6",
    "Gemini Vision AI",
    "Claymorphic 3D",
    "Generative UI (A2UI)",
    "iOS WidgetKit",
    "Android AppWidget",
    "Clean Architecture",
    "226 Tests (100%)",
    "Fastlane CI/CD",
  ],
};

const astrobiteOverviewEn: AstrobiteOverview = {
  name: "AstroBite",
  version: "v2.5.1",
  tagline: "Smart AI Food Scanner",
  role: "Mobile Engineer & System Architect",
  description: "AstroBite transforms healthy eating from a tedious chore into an engaging, dopamine-rich daily habit. Fusing Google Gemini Multimodal Vision AI with a delightful 3D Claymorphic UI, users snap a photo of any meal (with deep localization for complex Asian dishes like Pho and Broken Rice) to receive a full nutritional breakdown within < 2.5s. Features an interactive GenUI Chat Cockpit, Starlight Streak Shield gamification, cross-platform OS Lock-Screen Widgets, and 226 automated tests passing 100%.",
  metrics: [
    { label: "AI Latency", value: "< 2.5s" },
    { label: "Rendering Speed", value: "60 FPS Smooth" },
    { label: "Automated Tests", value: "226 Pass (100%)" },
    { label: "Memory Leak", value: "0 Bytes (Zero)" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Dart 3.x",
    "Riverpod 2.6",
    "Gemini Vision AI",
    "Claymorphic 3D",
    "Generative UI (A2UI)",
    "iOS WidgetKit",
    "Android AppWidget",
    "Clean Architecture",
    "226 Tests (100%)",
    "Fastlane CI/CD",
  ],
};

const astrobitePillarsVi: AstroPillar[] = [
  {
    id: "vision-ai",
    number: "01",
    title: "Gemini Vision AI — Chụp 1 Giây, Hiểu Trọn Bữa Ăn",
    tag: "Trí Tuệ Nhân Tạo Thị Giác",
    description: "Nhận diện món ăn siêu tốc trong < 2.5s, tự động tính toán Calo và 3 nhóm dưỡng chất chính xác cho cả món ăn Việt Nam phức tạp (Phở, Cơm tấm sườn bì chả, Bún chả...) và ẩm thực quốc tế.",
    highlights: [
      "🌾 Carbs (#1CB0F6 Xanh dương), 🥩 Đạm (#FF9600 Cam), 💧 Chất béo (#FF5C8D Hồng) chuẩn trực quan.",
      "Pipeline giải phóng Camera Frame buffer độc lập, tối ưu triệt để và cam kết 0 rò rỉ RAM.",
      "Ép chặt kết quả trả về theo chuẩn JSON Schema nghiêm ngặt, tự động xử lý khi mạng chập chờn.",
    ],
    metricBadge: "< 2.5s Latency | 0 Leak",
  },
  {
    id: "claymorphic-ui",
    number: "02",
    title: "Giao Diện Đất Nặn Claymorphic 3D & Solar Fresh",
    tag: "Thiết Kế Cảm Xúc & Trực Quan",
    description: "Toàn bộ thẻ thông tin và nút bấm có hiệu ứng phồng xốp đàn hồi tactile 3D (thu nhỏ 0.98 scale khi bấm) trên nền kem sữa dịu mắt (#FAF8F5), biến việc ăn kiêng thành niềm vui xả stress.",
    highlights: [
      "Hệ thống Design System độc bản tự phát triển thuần túy bằng Flutter native primitives, 0 phụ thuộc thư viện ngoài bloat.",
      "Tối ưu hóa biểu đồ phân tích xu hướng FL Chart với kỹ thuật RepaintBoundary, đảm bảo 60 FPS mượt mà trên mọi thiết bị.",
      "Độ tương phản cao chuẩn quốc tế WCAG AAA/AA, bo góc phồng 20pt và đổ bóng nổi 2 lớp sống động.",
    ],
    metricBadge: "Claymorphic 3D | 60 FPS",
  },
  {
    id: "genui-coach",
    number: "03",
    title: "Trợ Lý AI Coach & Thẻ Món Ăn Tương Tác (GenUI / A2UI)",
    tag: "Giao Diện Tương Tác Thông Minh",
    description: "Tiên phong đưa kiến trúc Agent-to-User Interface (A2UI) vào Flutter: AI không chỉ trả lời văn bản mà trực tiếp sinh ra các Native Widget sống động ngay trong chat để điều chỉnh khẩu phần và lưu 1-chạm.",
    highlights: [
      "Thẻ món ăn thông minh MealQuickLogCard có thanh tăng giảm khối lượng (+/-20g) và nút [1-Chạm Lưu] tức thì vào Firestore.",
      "Đồng hồ năng lượng MacroBudgetGauge so sánh calo món ăn với ngân sách còn lại trong ngày theo thời gian thực.",
      "Tối ưu hóa System Prompt với cơ chế Context Injection (BMR, TDEE, dị ứng, mục tiêu) giữ dưới 250 tokens.",
    ],
    metricBadge: "GenUI | 1-Tap Log",
  },
  {
    id: "widgets-quality",
    number: "04",
    title: "Widget Màn Hình Khóa & 226 Automated Tests",
    tag: "Tích Hợp Hệ Thống & Độ Ổn Định",
    description: "Theo dõi calo và mở camera quét thức ăn ngay trên màn hình khóa iOS & Android chỉ với 1 chạm (< 300ms), kết hợp cơ chế Khiên Sao (Starlight Streak Shield) và bộ test suite 226 Tests Pass 100%.",
    highlights: [
      "Tiện ích màn hình chính iOS WidgetKit (Swift) & Android AppWidget (Kotlin) đồng bộ phản ứng (Reactive Sync) với 0 hao pin ngầm.",
      "Mở thẳng camera AI Scanner qua deep-link astrobite://scanner siêu tốc chỉ trong < 300ms.",
      "226/226 automated unit & widget tests pass 100%, 0 lint warnings, vượt qua kiểm toán an ninh đa tầng chuẩn Cloudflare & OWASP MASVS.",
    ],
    metricBadge: "226 Tests | 100% Pass",
  },
];

const astrobitePillarsEn: AstroPillar[] = [
  {
    id: "vision-ai",
    number: "01",
    title: "Gemini Vision AI — Snap in 1s, Understand Every Meal",
    tag: "Multimodal Vision AI",
    description: "Instant food recognition in < 2.5s, accurately calculating Calories and 3 macronutrients for complex Vietnamese dishes (Pho, Broken Rice, Bun Cha) and global cuisine.",
    highlights: [
      "🌾 Carbs (#1CB0F6 Blue), 🥩 Protein (#FF9600 Orange), 💧 Fat (#FF5C8D Pink) with intuitive color standards.",
      "Independent camera buffer disposal pipeline, perfectly optimized with zero memory leaks.",
      "Strict JSON Schema enforcement ensuring safe, reliable offline-ready parsing.",
    ],
    metricBadge: "< 2.5s Latency | 0 Leak",
  },
  {
    id: "claymorphic-ui",
    number: "02",
    title: "Claymorphic 3D & Solar Fresh Design System",
    tag: "Emotional & Intuitive UI",
    description: "Featuring squishy tactile 3D clay cards and buttons (0.98 scale tap physics) over a warm milk canvas (#FAF8F5), turning calorie tracking into a joyful daily ritual.",
    highlights: [
      "Proprietary Design System built entirely on native Flutter primitives with 0 third-party bloat.",
      "Optimized animations and FL Chart trend graphs delivering butter-smooth 60 FPS on all devices via RepaintBoundary.",
      "High contrast WCAG AAA/AA compliance with appetizing 20pt rounded corners and layered depth shadows.",
    ],
    metricBadge: "Claymorphic 3D | 60 FPS",
  },
  {
    id: "genui-coach",
    number: "03",
    title: "AI Nutrition Coach & Generative UI (GenUI / A2UI)",
    tag: "Interactive Smart Chat",
    description: "Pioneering Google's Agent-to-User Interface (A2UI) protocol in Flutter: transforming raw AI output into rich, interactive native widgets inside the chat stream for seamless 1-tap logging.",
    highlights: [
      "Interactive MealQuickLogCard native widgets with portion steppers (+/-20g) and 1-tap logging directly to Firestore.",
      "MacroBudgetGauge comparing meal calories against remaining daily budget in real time.",
      "Context-aware system prompt injection (BMR, TDEE, dietary targets, allergies) kept strictly under 250 tokens.",
    ],
    metricBadge: "GenUI | 1-Tap Log",
  },
  {
    id: "widgets-quality",
    number: "04",
    title: "Lock Screen Widgets & 226 Automated Tests",
    tag: "System Integration & Stability",
    description: "Track calories and launch the food scanner straight from iOS & Android lock screens (< 300ms), supported by Starlight Streak Shield gamification and 226 automated tests passing 100%.",
    highlights: [
      "Home & lock screen widgets (iOS WidgetKit & Android AppWidget) updating reactively with zero background battery drain.",
      "Sub-300ms deep-link directly into AI Camera Scanner (astrobite://scanner).",
      "Backed by 226/226 automated unit/widget tests and rigorous Cloudflare & OWASP MASVS security auditing with zero memory leaks.",
    ],
    metricBadge: "226 Tests | 100% Pass",
  },
];

const astrobiteScreenshotsVi: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "Celestial Cockpit & Claymorphic 3D Dashboard",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard UI & 3D Dock",
    description: "Màn hình trung tâm hiển thị tiến độ 2051 kcal, bộ 3 dưỡng chất Carbs/Protein/Fat chuẩn màu, vi chất chi tiết, nhật ký 4 bữa ăn và thanh dock điều hướng đất nặn 3D phồng xốp mềm mại.",
    techSpecs: ["fl_chart Custom Painters", "Tactile Claymorphism (0.98 Squash)", "Riverpod AsyncNotifier", "WCAG AAA/AA Palette"],
  },
  {
    id: "screen-ai-scanner",
    title: "AR Food Scanner & Live Nutrients Extraction",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "Multimodal Vision AI",
    description: "Khung ngắm camera AR HUD tích hợp Gemini Multimodal Vision bóc tách món ăn trong < 2.5s với pipeline giải phóng buffer độc lập không rò rỉ RAM và hiển thị số lượt quét trong ngày.",
    techSpecs: ["Camera Frame Stream Buffer", "Gemini 2.0 Flash / Vision AI", "JSON Schema Enforcement", "0 Memory Leak Pipeline"],
  },
  {
    id: "screen-genui-chat",
    title: "AstroCoach AI GenUI & Interactive Food Cards",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "Generative UI (A2UI)",
    description: "Khung chat tương tác thời gian thực: AI tự sinh thẻ Native Widget MealQuickLogCard (Bánh mì trứng 420 kcal, stepper khẩu phần, thẻ tác động ngân sách ngày, nút Ghi vào nhật ký ngay).",
    techSpecs: ["A2UI JSON Catalog Parser", "Context Injection < 250 tokens", "Interactive Portion Stepper", "1-Tap Firestore Mutate"],
  },
  {
    id: "screen-gamification-shield",
    title: "Starlight Streak Shield & Tiểu Vũ Trụ Dinh Dưỡng",
    category: "cockpit",
    image: "/screenshots/clay/gamification_streak_shield.png",
    tag: "Streak Shield & Badges",
    description: "Tiểu Vũ Trụ Dinh Dưỡng: Cơ chế Khiên Sao (Starlight Streak Shield) tự động bảo vệ chuỗi ngày lành mạnh khi lỡ quên 1 bữa, tích lũy huy hiệu vũ trụ duy trì tỷ lệ gắn bó D30 Retention.",
    techSpecs: ["Deterministic Streak Engine (ADR-05)", "Local ISO Date Normalizer", "Gap == 1 Shield Protection", "Tactile Clay Badges"],
  },
  {
    id: "screen-manual-scaler",
    title: "Nhập Tay & Tactile Portion Scaler",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Tactile Portion Scaler",
    description: "Bộ tìm kiếm món ăn Việt (Phở bò, Cơm tấm, Bún chả) kết hợp thanh trượt gram 50g–350g, nút nhanh (+/-50g, 1 Bát, 1 Đĩa) tự động tính toán lại vi chất (Sodium, Fiber, Sugar) tức thì.",
    techSpecs: ["Reactive Macro Recalculation", "Vietnamese Dish Database", "Tactile Stepper Physics", "Freezed Immutable Models"],
  },
  {
    id: "screen-home-widget",
    title: "Android AppWidget & iOS WidgetKit",
    category: "widgets",
    image: "/screenshots/clay/widget_home_screen.png",
    tag: "OS Native Widgets",
    description: "Tiện ích màn hình chính đất nặn hiển thị calo còn lại, chuỗi Streak, thanh Carbs/Protein/Fat và nút Quét AI mở camera siêu tốc < 300ms với chi phí pin bằng 0.",
    techSpecs: ["Android AppWidget (Kotlin)", "iOS WidgetKit (Swift)", "AppGroup UserDefaults / SharedPreferences", "Deep-link astrobite://scanner < 300ms"],
  },
  {
    id: "screen-analytics-chart",
    title: "Weekly Analytics & FL Chart Trendlines",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Data Visualization",
    description: "Biểu đồ phân tích xu hướng calo nạp vào 7 ngày và đường diễn tiến cân nặng chuẩn xác với thư viện FL Chart, bọc RepaintBoundary giữ 60 FPS mượt mà trên mọi thiết bị.",
    techSpecs: ["fl_chart Cubic Curves", "RepaintBoundary Optimization", "60 FPS Smooth Scrolling", "Target Baseline Benchmarks"],
  },
  {
    id: "screen-profile-tdee",
    title: "Hồ Sơ Năng Lượng Sinh Học (BMR & TDEE)",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "Metabolic Calibration",
    description: "Hồ sơ cá nhân và công cụ hiệu chuẩn năng lượng sinh học (BMR 1719 kcal, TDEE 2063 kcal) theo công thức Mifflin-St Jeor và khuyến nghị calo cá nhân hóa.",
    techSpecs: ["Mifflin-St Jeor Engine", "BMR & TDEE Calculator", "Biometric Metric Normalizer", "Encrypted Local Storage"],
  },
  {
    id: "screen-recipe-builder",
    title: "Tạo Công Thức Món Ăn & Nutrient Aggregator",
    category: "features",
    image: "/screenshots/clay/recipe_builder.png",
    tag: "Recipe Engine",
    description: "Bộ công cụ tự sáng tạo công thức nấu ăn, cộng gộp dinh dưỡng từ từng thành phần nguyên liệu và tính toán vi chất theo khẩu phần người ăn.",
    techSpecs: ["Dynamic Ingredients Array", "Live Macro Aggregation", "Claymorphic Form Controls", "Cloud Firestore Sync"],
  },
  {
    id: "screen-meal-planner",
    title: "Kế Hoạch Bữa Ăn 7 Ngày (Meal Schedule)",
    category: "features",
    image: "/screenshots/clay/meal_planner_7days.png",
    tag: "Meal Schedule",
    description: "Lập kế hoạch thực đơn dinh dưỡng 7 ngày linh hoạt, quản lý 4 bữa ăn (Sáng, Trưa, Tối, Phụ) đồng bộ với ngân sách calo theo tuần.",
    techSpecs: ["Horizontal Week Strip Calendar", "Meal Slot Allocation", "Async Weekly Pre-fetch", "Optimistic State Mutation"],
  },
  {
    id: "screen-edit-goals",
    title: "Hiệu Chỉnh Mục Tiêu Thể Hình & Cường Độ",
    category: "features",
    image: "/screenshots/clay/edit_profile_goals.png",
    tag: "Goal Setting",
    description: "Chỉnh sửa mục tiêu thể hình: Giảm mỡ (-500 kcal), Duy trì cân nặng, hoặc Tăng cơ (+300 kcal) kết hợp thang đo cường độ vận động tuần.",
    techSpecs: ["Caloric Deficit/Surplus Logic", "Activity Multiplier TDEE", "Tactile Radio Selectors", "Form Validation Guards"],
  },
  {
    id: "screen-auth-login",
    title: "Claymorphic Authentication & Onboarding",
    category: "features",
    image: "/screenshots/clay/auth_login_clay.png",
    tag: "Tactile Auth & Security",
    description: "Màn hình đăng nhập phong cách đất nặn 3D êm ái, hỗ trợ Google Sign-In và bảo mật App Check chống giả mạo API.",
    techSpecs: ["Firebase Auth & Google Sign-In", "Firebase App Check Security", "Claymorphic Elevation Shadows", "Zero Third-Party UI Bloat"],
  },
];

const astrobiteScreenshotsEn: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "Celestial Cockpit & Claymorphic 3D Dashboard",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard UI & 3D Dock",
    description: "Central dashboard presenting 2051 kcal energy ring, macro budget bars, detailed micronutrients, 4-meal daily log, and a tactile 3D clay bottom navigation dock.",
    techSpecs: ["fl_chart Custom Painters", "Tactile Claymorphism (0.98 Squash)", "Riverpod AsyncNotifier", "WCAG AAA/AA Palette"],
  },
  {
    id: "screen-ai-scanner",
    title: "AR Food Scanner & Live Nutrients Extraction",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "Multimodal Vision AI",
    description: "Live AR camera scanner streaming buffers to Gemini Vision AI, extracting meal nutrients in < 2.5s with zero memory leaks and daily scan limits.",
    techSpecs: ["Camera Frame Stream Buffer", "Gemini 2.0 Flash / Vision AI", "JSON Schema Enforcement", "0 Memory Leak Pipeline"],
  },
  {
    id: "screen-genui-chat",
    title: "AstroCoach AI GenUI & Interactive Food Cards",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "Generative UI (A2UI)",
    description: "Real-time AI chat dynamically generating MealQuickLogCard native widgets with portion steppers, budget gauges, and 1-tap logging into Cloud Firestore.",
    techSpecs: ["A2UI JSON Catalog Parser", "Context Injection < 250 tokens", "Interactive Portion Stepper", "1-Tap Firestore Mutate"],
  },
  {
    id: "screen-gamification-shield",
    title: "Starlight Streak Shield & Gamification",
    category: "cockpit",
    image: "/screenshots/clay/gamification_streak_shield.png",
    tag: "Streak Shield & Badges",
    description: "Nutrition Universe gamification: Starlight Streak Shield preserving streaks during missed days, paired with cosmic achievement badges maximizing D30 retention.",
    techSpecs: ["Deterministic Streak Engine (ADR-05)", "Local ISO Date Normalizer", "Gap == 1 Shield Protection", "Tactile Clay Badges"],
  },
  {
    id: "screen-manual-scaler",
    title: "Manual Food Entry & Tactile Portion Scaler",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Tactile Portion Scaler",
    description: "Search Vietnamese culinary database with responsive gram portion scaler (50g–350g, +/-50g, bowl/plate presets) and live micronutrient recalculations.",
    techSpecs: ["Reactive Macro Recalculation", "Vietnamese Dish Database", "Tactile Stepper Physics", "Freezed Immutable Models"],
  },
  {
    id: "screen-home-widget",
    title: "Android AppWidget & iOS WidgetKit",
    category: "widgets",
    image: "/screenshots/clay/widget_home_screen.png",
    tag: "OS Native Widgets",
    description: "Tactile home-screen widgets for Android & iOS displaying remaining calories, streaks, live macro bars, and sub-300ms scanner deep-link with 0 battery drain.",
    techSpecs: ["Android AppWidget (Kotlin)", "iOS WidgetKit (Swift)", "AppGroup UserDefaults / SharedPreferences", "Deep-link astrobite://scanner < 300ms"],
  },
  {
    id: "screen-analytics-chart",
    title: "Weekly Analytics & FL Chart Trendlines",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Data Visualization",
    description: "Weekly calorie intake trends and weight trajectory line charts rendered butter-smooth at 60 FPS via isolated FL Chart repaint boundaries.",
    techSpecs: ["fl_chart Cubic Curves", "RepaintBoundary Optimization", "60 FPS Smooth Scrolling", "Target Baseline Benchmarks"],
  },
  {
    id: "screen-profile-tdee",
    title: "Biometric Energy Metrics (BMR & TDEE)",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "Metabolic Calibration",
    description: "Personal biometric profile calculating BMR (1719 kcal) and TDEE (2063 kcal) via Mifflin-St Jeor formula with tailored caloric targets.",
    techSpecs: ["Mifflin-St Jeor Engine", "BMR & TDEE Calculator", "Biometric Metric Normalizer", "Encrypted Local Storage"],
  },
  {
    id: "screen-recipe-builder",
    title: "Custom Recipe Builder & Nutrient Aggregator",
    category: "features",
    image: "/screenshots/clay/recipe_builder.png",
    tag: "Recipe Engine",
    description: "Custom recipe builder aggregating calorie and macronutrient data from raw ingredients with dynamic serving-size calculations.",
    techSpecs: ["Dynamic Ingredients Array", "Live Macro Aggregation", "Claymorphic Form Controls", "Cloud Firestore Sync"],
  },
  {
    id: "screen-meal-planner",
    title: "7-Day Meal Schedule Planner",
    category: "features",
    image: "/screenshots/clay/meal_planner_7days.png",
    tag: "Meal Schedule",
    description: "7-day meal schedule planner allocating balanced nutrition across breakfast, lunch, dinner, and snacks aligned with weekly goals.",
    techSpecs: ["Horizontal Week Strip Calendar", "Meal Slot Allocation", "Async Weekly Pre-fetch", "Optimistic State Mutation"],
  },
  {
    id: "screen-edit-goals",
    title: "Goal Calibration & Activity Level Profiling",
    category: "features",
    image: "/screenshots/clay/edit_profile_goals.png",
    tag: "Goal Setting",
    description: "Fitness goal configuration: Fat Loss (-500 kcal deficit), Maintenance, or Lean Muscle Gain (+300 kcal surplus) with weekly activity selector.",
    techSpecs: ["Caloric Deficit/Surplus Logic", "Activity Multiplier TDEE", "Tactile Radio Selectors", "Form Validation Guards"],
  },
  {
    id: "screen-auth-login",
    title: "Claymorphic Authentication & Onboarding",
    category: "features",
    image: "/screenshots/clay/auth_login_clay.png",
    tag: "Tactile Auth & Security",
    description: "Delightful Claymorphic authentication experience featuring Google Sign-In, Firebase Auth, and App Check bot protection.",
    techSpecs: ["Firebase Auth & Google Sign-In", "Firebase App Check Security", "Claymorphic Elevation Shadows", "Zero Third-Party UI Bloat"],
  },
];

export const getAstrobiteOverview = (lang: Language = 'vi'): AstrobiteOverview => {
  return lang === 'en' ? astrobiteOverviewEn : astrobiteOverviewVi;
};

export const getAstrobitePillars = (lang: Language = 'vi'): AstroPillar[] => {
  return lang === 'en' ? astrobitePillarsEn : astrobitePillarsVi;
};

export const getAstrobiteScreenshots = (lang: Language = 'vi'): ScreenshotItem[] => {
  return lang === 'en' ? astrobiteScreenshotsEn : astrobiteScreenshotsVi;
};

export const astrobiteOverview = astrobiteOverviewVi;
export const astrobitePillars = astrobitePillarsVi;
export const astrobiteScreenshots = astrobiteScreenshotsVi;
