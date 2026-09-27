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
  version: "v2.0.0",
  tagline: "Trợ Lý Dinh Dưỡng Thông Minh & AI Coach Cá Nhân Hóa",
  role: "Mobile Engineer (Core Developer & AI Integration)",
  description: "AstroBite biến việc ăn uống lành mạnh thành thói quen dễ dàng mỗi ngày: chỉ cần chụp ảnh bữa ăn để hệ thống tự động bóc tách calo và các nhóm chất (Đạm, Tinh bột, Béo), hoặc trò chuyện trực tiếp với Trợ lý AI Coach để ghi nhận món ăn bằng tin nhắn và nhận gợi ý thực đơn tức thì (“Tối nay còn 400 calo thì nên ăn gì?”, “Uống ly trà sữa 50% đường thì tính thế nào?”). Kết hợp cùng bảng quản lý năng lượng trực quan, biểu đồ theo dõi tiến độ sức khỏe và giao diện đất sét 3D vui nhộn, AstroBite đóng vai trò như một chuyên gia dinh dưỡng đồng hành 24/7 giúp bạn đạt mục tiêu vóc dáng bền vững.",
  metrics: [
    { label: "AI Latency", value: "< 2.5s" },
    { label: "Memory Leak", value: "0 bytes" },
    { label: "Automated Tests", value: "198 Pass" },
    { label: "Clean Modules", value: "10 Features" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Dart 3.x",
    "Riverpod 2.6",
    "Google Gemini Vision",
    "A2UI Protocol",
    "iOS WidgetKit",
    "Android AppWidget",
    "Clean Architecture",
    "Fastlane CI/CD",
  ],
};

const astrobiteOverviewEn: AstrobiteOverview = {
  name: "AstroBite",
  version: "v2.0.0",
  tagline: "Intelligent Nutrition Assistant & Personalized AI Coach",
  role: "Mobile Engineer (Core Developer & AI Integration)",
  description: "AstroBite makes healthy eating effortless every day: simply snap a meal photo for instant multi-macro decomposition (Protein, Carbs, Fat) and calorie estimation, or chat with the AI Coach for contextual meal logging and real-time suggestions ('I have 400 kcal left for dinner, what should I eat?'). Combining intuitive energy budgets, long-term health trend charts, and a playful 3D claymorphic UI, AstroBite acts as your 24/7 nutrition companion.",
  metrics: [
    { label: "AI Latency", value: "< 2.5s" },
    { label: "Memory Leak", value: "0 bytes" },
    { label: "Automated Tests", value: "198 Pass" },
    { label: "Clean Modules", value: "10 Features" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Dart 3.x",
    "Riverpod 2.6",
    "Google Gemini Vision",
    "A2UI Protocol",
    "iOS WidgetKit",
    "Android AppWidget",
    "Clean Architecture",
    "Fastlane CI/CD",
  ],
};

const astrobitePillarsVi: AstroPillar[] = [
  {
    id: "vision-ai",
    number: "01",
    title: "Gemini Vision AI & Live AR HUD",
    tag: "AI & Image Pipeline",
    description: "Nhận diện món ăn đa vùng trong 2–4s, phân tích khẩu phần và bóc tách Calories cùng 3 chất đa lượng theo bảng màu chuẩn dinh dưỡng.",
    highlights: [
      "🌾 Carbs (Xanh dương), 🥩 Protein / Đạm (Vàng), 💧 Fat / Chất béo (Hồng) chuẩn mực quốc tế.",
      "Pipeline giải phóng Camera Frame buffer độc lập, triệt tiêu 100% rò rỉ RAM.",
      "Hỗ trợ các món ăn phức tạp của Việt Nam (Phở, Cơm tấm, Bún chả...) và quốc tế.",
    ],
    metricBadge: "< 2.5s Latency | 0 Leak",
  },
  {
    id: "genui-a2ui",
    number: "02",
    title: "Flutter Generative UI (A2UI Protocol)",
    tag: "Agent-to-User Interface",
    description: "Tiên phong triển khai kiến trúc A2UI: Gemini 3.8 Flash trả về cấu trúc JSON payload chuẩn hóa để sinh ra các Native Widgets tương tác trực tiếp trong khung chat.",
    highlights: [
      "MealQuickLogCard: Thẻ món ăn có Steppers +/-20g và nút 1-Tap Log lưu Firestore.",
      "MacroBudgetGauge: Đồng hồ so sánh calo nạp vs ngân sách còn lại trong ngày.",
      "Context Injection (BMR, TDEE, dị ứng) được tối ưu duy trì dưới 250 tokens.",
    ],
    metricBadge: "ADR-06 | 1-Tap Log",
  },
  {
    id: "os-widgets",
    number: "03",
    title: "Cross-Platform Home Widgets & Streak",
    tag: "Native Integration",
    description: "Tiện ích màn hình chính / màn hình khóa (iOS WidgetKit & Android AppWidget) chia sẻ dữ liệu qua AppGroup UserDefaults và SharedPreferences.",
    highlights: [
      "Đồng bộ dữ liệu phản ứng (Reactive Sync) ngay khi log bữa ăn, không hao pin ngầm.",
      "Deep-link astrobite://scanner mở thẳng camera trong < 300ms.",
      "Deterministic Streak Engine kèm cơ chế Khiên Sao (Starlight Shield) bảo vệ chuỗi ngày.",
    ],
    metricBadge: "ADR-05 | < 300ms Deep Link",
  },
  {
    id: "clean-arch",
    number: "04",
    title: "Clean Architecture & Super-Repo CI/CD",
    tag: "Engineering Quality",
    description: "Tổ chức Feature-First phân tách 10 phân hệ nghiệp vụ độc lập, quản lý 3 Git Submodules và tự động hóa toàn bộ quy trình biên dịch/phân phối.",
    highlights: [
      "Phân tầng nghiêm ngặt: Domain (Entities, UseCases) -> Data (Repos, DTOs) -> Presentation.",
      "Super-repo 3 submodules: docs/ (BA Agile), tests/ (QA BDD), frontend/ (Flutter).",
      "Pipeline Fastlane & GitHub Actions tự động ký số và phân phối Firebase App Distribution.",
    ],
    metricBadge: "198 Tests | 100% Green",
  },
];

const astrobitePillarsEn: AstroPillar[] = [
  {
    id: "vision-ai",
    number: "01",
    title: "Gemini Vision AI & Live AR HUD",
    tag: "AI & Image Pipeline",
    description: "Multi-region food recognition in 2–4s, estimating portion sizes, Calories, and 3 macronutrients mapped to international color standards.",
    highlights: [
      "🌾 Carbs (Blue), 🥩 Protein (Yellow), 💧 Fat (Pink) per international nutrition guidelines.",
      "Independent camera frame stream buffer disposal pipeline, eliminating 100% of RAM leaks.",
      "Supports complex multi-dish Asian meals (Pho, Broken Rice, Bun Cha) and international cuisine.",
    ],
    metricBadge: "< 2.5s Latency | 0 Leak",
  },
  {
    id: "genui-a2ui",
    number: "02",
    title: "Flutter Generative UI (A2UI Protocol)",
    tag: "Agent-to-User Interface",
    description: "Pioneered A2UI architecture: Gemini 3.8 Flash returns structured JSON payloads to dynamically render interactive Native Widgets inside the chat flow.",
    highlights: [
      "MealQuickLogCard: Interactive food cards with +/-20g Steppers and 1-Tap Log to Firestore.",
      "MacroBudgetGauge: Real-time gauge comparing consumed calories vs remaining daily budget.",
      "Context Injection (BMR, TDEE, allergies) strictly optimized to stay under 250 tokens.",
    ],
    metricBadge: "ADR-06 | 1-Tap Log",
  },
  {
    id: "os-widgets",
    number: "03",
    title: "Cross-Platform Home Widgets & Streak",
    tag: "Native Integration",
    description: "Home & lock screen widgets (iOS WidgetKit & Android AppWidget) sharing reactive state via AppGroup UserDefaults & SharedPreferences.",
    highlights: [
      "Reactive synchronization immediately upon meal logging with zero background battery drain.",
      "astrobite://scanner deep-link launching camera scanner in < 300ms.",
      "Deterministic Streak Engine with Starlight Shield mechanism preserving consecutive logging.",
    ],
    metricBadge: "ADR-05 | < 300ms Deep Link",
  },
  {
    id: "clean-arch",
    number: "04",
    title: "Clean Architecture & Super-Repo CI/CD",
    tag: "Engineering Quality",
    description: "Feature-First design separating 10 decoupled business modules, managing 3 Git Submodules with automated multi-platform compilation & deployment.",
    highlights: [
      "Strict layering: Domain (Entities, UseCases) -> Data (Repos, DTOs) -> Presentation.",
      "Super-repo 3 submodules: docs/ (BA Agile), tests/ (QA BDD), frontend/ (Flutter).",
      "Automated Fastlane & GitHub Actions pipelines code-signing & deploying to Firebase App Distribution.",
    ],
    metricBadge: "198 Tests | 100% Green",
  },
];

const astrobiteScreenshotsVi: ScreenshotItem[] = [
  {
    id: "screen-1",
    title: "AR Food Scanner & Live Nutrients Extraction",
    category: "ai",
    image: "/screenshots/Screenshot_1790433768.png",
    tag: "Multimodal Vision AI",
    description: "Camera quét trực tiếp món ăn với khung ngắm AR HUD, nhận diện nguyên liệu và hiển thị bảng thành phần Calories, Carbs, Protein, Fat theo thời gian thực.",
    techSpecs: ["Camera Frame Stream Buffer", "Gemini 3.8 Flash Vision", "Color Tokens Standardization"],
  },
  {
    id: "screen-2",
    title: "Daily Nutrition Cockpit & Macro Ring",
    category: "features",
    image: "/screenshots/Screenshot_1790433762.png",
    tag: "Dashboard UI",
    description: "Màn hình trung tâm hiển thị tiến độ calo trong ngày, vòng tròn dinh dưỡng đa lượng chuyển động mượt mà và danh sách nhật ký bữa ăn.",
    techSpecs: ["fl_chart Custom Painters", "Riverpod AsyncNotifier", "Claymorphism UI"],
  },
  {
    id: "screen-3",
    title: "AstroCoach GenUI Chat & Interactive Cards",
    category: "genui",
    image: "/screenshots/Screenshot_1790433736.png",
    tag: "Generative UI (A2UI)",
    description: "Khung chat tương tác với trợ lý AI dinh dưỡng, tự động sinh các thẻ Native Widget MealQuickLogCard cho phép điều chỉnh khẩu phần và ghi log 1 chạm.",
    techSpecs: ["A2UI JSON Catalog Parser", "Interactive Steppers", "Context Injection < 250 tokens"],
  },
  {
    id: "screen-4",
    title: "Meal Details & Custom Portion Scaler",
    category: "features",
    image: "/screenshots/Screenshot_1790433744.png",
    tag: "Portion Scaling",
    description: "Chi tiết món ăn với thanh trượt trọng lượng gram linh hoạt, tự động tính toán lại vi chất (Sodium, Fiber, Sugar) theo tỷ lệ chuẩn xác.",
    techSpecs: ["Reactive Macro Recalculation", "Freezed Immutable Models", "Offline Cache Hive"],
  },
  {
    id: "screen-5",
    title: "Weekly Analytics & Macronutrient Breakdown",
    category: "features",
    image: "/screenshots/Screenshot_1790433755.png",
    tag: "Data Visualization",
    description: "Biểu đồ phân tích xu hướng dinh dưỡng theo tuần/tháng, đánh giá độ cân bằng tỷ lệ Carbs/Fat/Protein so với mục tiêu thể trạng người dùng.",
    techSpecs: ["fl_chart Bar & Line Charts", "Date Utility Normalizer", "Export Data Reports"],
  },
  {
    id: "screen-6",
    title: "Android Home Screen Widget & Quick AI Scanner",
    category: "widgets",
    image: "/screenshots/Screenshot_astrobite_widget.png",
    tag: "OS Native Widgets",
    description: "Tiện ích màn hình chính (Android AppWidget / iOS WidgetKit) hiển thị chuỗi ngày (Streak), năng lượng còn lại, 3 nhóm đa lượng theo dõi thời gian thực và nút 1 chạm mở thẳng AI Scanner.",
    techSpecs: ["Android AppWidget (Kotlin)", "iOS WidgetKit (Swift)", "SharedPreferences / UserDefaults Sync", "Deep-link astrobite://scanner < 300ms"],
  },
  {
    id: "screen-9",
    title: "AI Multi-Item Decomposition & Micro Nutrients",
    category: "ai",
    image: "/screenshots/Screenshot_1790433779.png",
    tag: "AI Food Decomposition",
    description: "Bóc tách đa thành phần món ăn phức tạp với độ tin cậy 98%, tính toán chi tiết vi chất (Muối, Xơ, Đường) và cảnh báo ngưỡng dinh dưỡng.",
    techSpecs: ["Gemini 3.8 Flash Multimodal", "Sub-dish Itemization", "Freezed Nutrition DTOs"],
  },
  {
    id: "screen-7",
    title: "Custom Recipe Builder & Ingredient Tracker",
    category: "features",
    image: "/screenshots/Screenshot_1790433789.png",
    tag: "Recipe Engine",
    description: "Bộ công cụ tự tạo công thức nấu ăn cá nhân, cộng gộp dinh dưỡng từ từng thành phần nguyên liệu và tính toán khẩu phần cho mỗi người ăn.",
    techSpecs: ["Ingredient Search Index", "Dynamic Form Validation", "Cloud Firestore Sync"],
  },
  {
    id: "screen-8",
    title: "Onboarding & Calorie Target Calibration",
    category: "features",
    image: "/screenshots/Screenshot_1790433795.png",
    tag: "User Onboarding",
    description: "Quy trình thiết lập mục tiêu thể hình, tính toán BMR & TDEE theo công thức Mifflin-St Jeor và phân bổ tỷ lệ đa lượng cá nhân hóa.",
    techSpecs: ["Mifflin-St Jeor Algorithm", "Smooth PageView Transitions", "Local Storage Encryption"],
  },
];

const astrobiteScreenshotsEn: ScreenshotItem[] = [
  {
    id: "screen-1",
    title: "AR Food Scanner & Live Nutrients Extraction",
    category: "ai",
    image: "/screenshots/Screenshot_1790433768.png",
    tag: "Multimodal Vision AI",
    description: "Live camera scanner with AR HUD viewfinder, recognizing ingredients and displaying real-time Calories, Carbs, Protein, and Fat breakdown.",
    techSpecs: ["Camera Frame Stream Buffer", "Gemini 3.8 Flash Vision", "Color Tokens Standardization"],
  },
  {
    id: "screen-2",
    title: "Daily Nutrition Cockpit & Macro Ring",
    category: "features",
    image: "/screenshots/Screenshot_1790433762.png",
    tag: "Dashboard UI",
    description: "Central dashboard presenting daily calorie progress, smoothly animated macronutrient rings, and interactive meal history cards.",
    techSpecs: ["fl_chart Custom Painters", "Riverpod AsyncNotifier", "Claymorphism UI"],
  },
  {
    id: "screen-3",
    title: "AstroCoach GenUI Chat & Interactive Cards",
    category: "genui",
    image: "/screenshots/Screenshot_1790433736.png",
    tag: "Generative UI (A2UI)",
    description: "Interactive chat with the nutrition AI assistant, dynamically generating MealQuickLogCard native widgets with steppers and 1-tap logging.",
    techSpecs: ["A2UI JSON Catalog Parser", "Interactive Steppers", "Context Injection < 250 tokens"],
  },
  {
    id: "screen-4",
    title: "Meal Details & Custom Portion Scaler",
    category: "features",
    image: "/screenshots/Screenshot_1790433744.png",
    tag: "Portion Scaling",
    description: "Detailed meal inspector with gram-slider portion scaler, dynamically re-calculating micronutrients (Sodium, Fiber, Sugar) accurately.",
    techSpecs: ["Reactive Macro Recalculation", "Freezed Immutable Models", "Offline Cache Hive"],
  },
  {
    id: "screen-5",
    title: "Weekly Analytics & Macronutrient Breakdown",
    category: "features",
    image: "/screenshots/Screenshot_1790433755.png",
    tag: "Data Visualization",
    description: "Weekly/monthly nutrition analytics charts evaluating macro ratios (Carbs/Fat/Protein) against user body-goal benchmarks.",
    techSpecs: ["fl_chart Bar & Line Charts", "Date Utility Normalizer", "Export Data Reports"],
  },
  {
    id: "screen-6",
    title: "Android Home Screen Widget & Quick AI Scanner",
    category: "widgets",
    image: "/screenshots/Screenshot_astrobite_widget.png",
    tag: "OS Native Widgets",
    description: "Home screen widgets (Android AppWidget / iOS WidgetKit) displaying streak count, remaining calories, live macros, and 1-tap AI scanner deep-link.",
    techSpecs: ["Android AppWidget (Kotlin)", "iOS WidgetKit (Swift)", "SharedPreferences / UserDefaults Sync", "Deep-link astrobite://scanner < 300ms"],
  },
  {
    id: "screen-9",
    title: "AI Multi-Item Decomposition & Micro Nutrients",
    category: "ai",
    image: "/screenshots/Screenshot_1790433779.png",
    tag: "AI Food Decomposition",
    description: "Decomposes complex multi-dish meals with 98% accuracy, calculating micronutrients (Sodium, Fiber, Sugar) and dietary thresholds.",
    techSpecs: ["Gemini 3.8 Flash Multimodal", "Sub-dish Itemization", "Freezed Nutrition DTOs"],
  },
  {
    id: "screen-7",
    title: "Custom Recipe Builder & Ingredient Tracker",
    category: "features",
    image: "/screenshots/Screenshot_1790433789.png",
    tag: "Recipe Engine",
    description: "Custom recipe builder aggregating nutrition from raw ingredients and calculating portion metrics per serving.",
    techSpecs: ["Ingredient Search Index", "Dynamic Form Validation", "Cloud Firestore Sync"],
  },
  {
    id: "screen-8",
    title: "Onboarding & Calorie Target Calibration",
    category: "features",
    image: "/screenshots/Screenshot_1790433795.png",
    tag: "User Onboarding",
    description: "Goal setting flow calculating BMR & TDEE using Mifflin-St Jeor formula and generating personalized macro distributions.",
    techSpecs: ["Mifflin-St Jeor Algorithm", "Smooth PageView Transitions", "Local Storage Encryption"],
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
