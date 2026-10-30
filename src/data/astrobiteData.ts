import { AstroPillar, ScreenshotItem, AstroFeature } from '../types';
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
  version: "Personal Project",
  tagline: "Trợ Lý Ghi Nhận Bữa Ăn & Theo Dõi Dinh Dưỡng Bằng AI",
  role: "Solo Developer / Personal Project",
  description: "AstroBite là ứng dụng Flutter hỗ trợ ghi nhận bữa ăn và theo dõi dinh dưỡng hằng ngày. Người dùng có thể nhập thực phẩm thủ công, tra cứu sản phẩm bằng mã vạch, phân tích hình ảnh món ăn bằng Gemini Vision và ghi nhận bữa ăn từ giọng nói tiếng Việt. Ứng dụng sử dụng Cloud Firestore để lưu trữ dữ liệu và local cache để hỗ trợ các luồng ghi nhận khi không có kết nối mạng.",
  metrics: [
    { label: "Nền Tảng", value: "Flutter & Dart" },
    { label: "Quản Lý State", value: "Riverpod 2.x" },
    { label: "Mô Hình AI", value: "Google Gemini Vision" },
    { label: "Lưu Trữ Dữ Liệu", value: "Firestore & Local Cache" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Dart 3.x",
    "Riverpod 2.x",
    "Google Gemini Vision",
    "Speech-to-Text",
    "Cloud Firestore",
    "SQLite Local Cache",
    "Clean Architecture",
    "FL Chart",
    "Fastlane CI/CD",
  ],
};

const astrobiteOverviewEn: AstrobiteOverview = {
  name: "AstroBite",
  version: "Personal Project",
  tagline: "AI Food Scanner & Nutrition Tracker",
  role: "Solo Developer / Personal Project",
  description: "AstroBite is a Flutter application designed for meal logging and daily nutrition tracking. Users can enter food manually, look up products through barcode, analyze meal photos with Gemini Vision, and record meals using Vietnamese voice input. The application uses Cloud Firestore for persistence and local caching for responsive logging during offline periods.",
  metrics: [
    { label: "Platform", value: "Flutter & Dart" },
    { label: "State Management", value: "Riverpod 2.x" },
    { label: "AI Integration", value: "Google Gemini Vision" },
    { label: "Data Persistence", value: "Firestore & Local Cache" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Dart 3.x",
    "Riverpod 2.x",
    "Google Gemini Vision",
    "Speech-to-Text",
    "Cloud Firestore",
    "SQLite Local Cache",
    "Clean Architecture",
    "FL Chart",
    "Fastlane CI/CD",
  ],
};

const astrobitePillarsVi: AstroPillar[] = [
  {
    id: "vision-ai",
    number: "01",
    title: "Phân Tích Bữa Ăn Bằng Gemini Vision",
    tag: "Thị Giác AI & Ước Tính Dinh Dưỡng",
    description: "Tích hợp Google Gemini Vision để phân tích hình ảnh món ăn từ camera và trích xuất dữ liệu dinh dưỡng có cấu trúc. Giá trị calo và vi chất được xử lý như ước tính dinh dưỡng do AI tạo ra, cho phép người dùng xem lại và điều chỉnh trước khi lưu vào nhật ký.",
    highlights: [
      "Gửi ảnh món ăn kèm prompt có cấu trúc JSON schema để nhận diện tên món và thành phần.",
      "Ước tính các nhóm chất đa lượng: Carbs, Đạm (Protein) và Chất béo (Fat).",
      "Giao diện trực quan cho phép người dùng tùy chỉnh khẩu phần và thành phần topping trước khi lưu.",
    ],
    metricBadge: "Gemini Vision AI",
  },
  {
    id: "voice-ai",
    number: "02",
    title: "Ghi Nhận Bữa Ăn Bằng Giọng Nói Tiếng Việt",
    tag: "Speech-to-Text & Gemini NLU",
    description: "Kết hợp Speech-to-Text và Gemini NLU để nhận diện câu nói tiếng Việt tự nhiên khi người dùng đang bận nấu ăn hoặc di chuyển. Hệ thống phân tích tên món ăn và đơn vị dân dã (tô, bát, đĩa, ly) để tạo bản ghi bữa ăn có cấu trúc.",
    highlights: [
      "Chuyển đổi âm thanh thành văn bản tiếng Việt on-device theo thời gian thực.",
      "Gemini NLU phân tích ngữ cảnh câu nói để trích xuất món ăn và ước tính lượng calo tương ứng.",
      "Tự động điền thông tin vào phiếu ghi nhận bữa ăn chỉ với một lần xác nhận.",
    ],
    metricBadge: "Vietnamese Voice STT",
  },
  {
    id: "offline-data",
    number: "03",
    title: "Lưu Trữ Cục Bộ & Đồng Bộ Firestore",
    tag: "Local Cache & Pending Queue",
    description: "Áp dụng cơ chế lưu trữ cục bộ và hàng đợi đồng bộ (pending queue) để người dùng có thể ghi nhận bữa ăn ngay cả khi kết nối mạng chập chờn. Khi có mạng trở lại, ứng dụng tự động đồng bộ dữ liệu lên Cloud Firestore.",
    highlights: [
      "Lưu trữ danh mục món ăn đã tạo vào local cache để phản hồi giao diện tức thì.",
      "Hàng đợi lưu trữ tạm thời các thao tác thêm mới khi mất mạng và tự động đồng bộ khi kết nối lại.",
      "Cloud Firestore bảo đảm đồng bộ dữ liệu nhật ký bữa ăn giữa các phiên đăng nhập.",
    ],
    metricBadge: "Local Cache & Sync",
  },
  {
    id: "architecture",
    number: "04",
    title: "Kiến Trúc Feature-First & Quản Lý State",
    tag: "Clean Architecture & Riverpod 2.x",
    description: "Mã nguồn được tổ chức theo cấu trúc Feature-First, phân tách rõ ràng giữa presentation, domain và data layers. Sử dụng Riverpod 2.x với Unidirectional Data Flow và xử lý toàn diện các trạng thái giao diện.",
    highlights: [
      "Mỗi phân hệ (auth, food_log, nutrition, profile) được đóng gói độc lập, dễ mở rộng và kiểm thử.",
      "Sử dụng AsyncValue của Riverpod để kiểm soát chặt chẽ 4 trạng thái: Loading, Data, Error và Empty.",
      "Tách biệt hoàn toàn tầng truy xuất dữ liệu (Repository / Data Source) khỏi Widget UI.",
    ],
    metricBadge: "Feature-First & Riverpod",
  },
];

const astrobitePillarsEn: AstroPillar[] = [
  {
    id: "vision-ai",
    number: "01",
    title: "Food Recognition with Gemini Vision",
    tag: "Vision AI & Nutritional Estimation",
    description: "Integrated Google Gemini Vision to analyze food photos from the camera and parse structured nutritional metrics. Caloric and macronutrient breakdowns are handled as AI-generated estimates, allowing users to verify and adjust them before saving.",
    highlights: [
      "Sends meal photos with strict JSON schema prompts to identify dishes and visible components.",
      "Estimates core macronutrient distributions: Carbohydrates, Protein, and Fat.",
      "Intuitive review screen enabling users to adjust portion sizes and toppings before confirming.",
    ],
    metricBadge: "Gemini Vision AI",
  },
  {
    id: "voice-ai",
    number: "02",
    title: "Vietnamese Voice Meal Logging",
    tag: "Speech-to-Text & Gemini NLU",
    description: "Combines Speech-to-Text with Gemini NLU to interpret natural Vietnamese spoken meals when users are busy cooking or on the move. Extracts dish names and colloquial portion sizes into structured entries.",
    highlights: [
      "Converts speech to Vietnamese text in real time using on-device STT capabilities.",
      "Prompts Gemini NLU to analyze context and extract portion units into structured JSON.",
      "Pre-populates meal creation forms for seamless 1-tap confirmation.",
    ],
    metricBadge: "Vietnamese Voice STT",
  },
  {
    id: "offline-data",
    number: "03",
    title: "Local Persistence & Firestore Sync",
    tag: "Local Cache & Pending Queue",
    description: "Applies local caching and a pending-sync queue so users can record meal entries even with intermittent network connectivity. Once reconnected, data syncs to Cloud Firestore.",
    highlights: [
      "Caches recent food entries locally for immediate UI responsiveness without latency.",
      "Maintains a pending mutation queue during network drops with reconnection sync.",
      "Persists multi-day meal logs to Cloud Firestore under authenticated user accounts.",
    ],
    metricBadge: "Local Cache & Sync",
  },
  {
    id: "architecture",
    number: "04",
    title: "Feature-First Architecture & State Flow",
    tag: "Clean Architecture & Riverpod 2.x",
    description: "Codebase is structured following Feature-First principles, establishing clean boundaries between presentation, domain, and data layers. Employs Riverpod 2.x with explicit state handling.",
    highlights: [
      "Encapsulates modules (auth, food_log, nutrition, profile) independently for testability.",
      "Leverages Riverpod AsyncValue for resilient handling of Loading, Data, Error, and Empty states.",
      "Decouples data sources and repositories completely from UI widgets.",
    ],
    metricBadge: "Feature-First & Riverpod",
  },
];

const astrobiteFeaturesVi: AstroFeature[] = [
  {
    id: "feat-camera",
    number: "01",
    iconName: "camera",
    title: "Quét Bữa Ăn Bằng Camera AI",
    tag: "Gemini Multimodal Vision",
    naturalDescription: "Chụp ảnh món ăn để nhận diện tên món và ước tính lượng calo cùng các dưỡng chất đa lượng tự động.",
    badge: "AI Vision",
  },
  {
    id: "feat-mic",
    number: "02",
    iconName: "mic",
    title: "Ghi Âm Giọng Nói Tiếng Việt",
    tag: "Speech-to-Text & NLU",
    naturalDescription: "Ghi nhận bữa ăn rảnh tay bằng câu nói tự nhiên tiếng Việt, tự động bóc tách tên món và khẩu phần.",
    badge: "Voice STT",
  },
  {
    id: "feat-manual",
    number: "03",
    iconName: "utensils",
    title: "Nhập Liệu Món Ăn Thủ Công",
    tag: "Cơ Sở Dữ Liệu Thực Phẩm",
    naturalDescription: "Tìm kiếm các món ăn quen thuộc, tra cứu thông tin dinh dưỡng và tùy chỉnh khẩu phần chi tiết.",
    badge: "Food Database",
  },
  {
    id: "feat-coach",
    number: "04",
    iconName: "bot",
    title: "Hỏi Đáp Trợ Lý Dinh Dưỡng",
    tag: "Gemini Chat Interaction",
    naturalDescription: "Trò chuyện nhiều lượt với trợ lý AI để tra cứu thông tin dinh dưỡng và nhận gợi ý thực đơn phù hợp.",
    badge: "AI Coach",
  },
  {
    id: "feat-analytics",
    number: "05",
    iconName: "trending-up",
    title: "Biểu Đồ Theo Dõi Dinh Dưỡng",
    tag: "FL Chart Visualization",
    naturalDescription: "Biểu đồ trực quan theo dõi lượng calo tiêu thụ và diễn tiến cân nặng qua các ngày trong tuần.",
    badge: "Analytics",
  },
  {
    id: "feat-bmr",
    number: "06",
    iconName: "activity",
    title: "Tính Toán Chỉ Số BMR & TDEE",
    tag: "Tính Toán Nhu Cầu Năng Lượng",
    naturalDescription: "Xác định nhu cầu calo hằng ngày dựa trên chiều cao, cân nặng, độ tuổi và mức độ hoạt động thể chất.",
    badge: "Health Metrics",
  },
];

const astrobiteFeaturesEn: AstroFeature[] = [
  {
    id: "feat-camera",
    number: "01",
    iconName: "camera",
    title: "AI Camera Food Scanner",
    tag: "Gemini Multimodal Vision",
    naturalDescription: "Snap food photos to identify dishes and estimate calories and macronutrients automatically.",
    badge: "AI Vision",
  },
  {
    id: "feat-mic",
    number: "02",
    iconName: "mic",
    title: "Vietnamese Voice Meal Logging",
    tag: "Speech-to-Text & NLU",
    naturalDescription: "Hands-free logging using natural Vietnamese speech, parsing dish names and portion quantities.",
    badge: "Voice STT",
  },
  {
    id: "feat-manual",
    number: "03",
    iconName: "utensils",
    title: "Manual Food Entry & Scaling",
    tag: "Food Item Database",
    naturalDescription: "Search common local and international foods, view nutrition facts, and scale serving portions.",
    badge: "Food Database",
  },
  {
    id: "feat-coach",
    number: "04",
    iconName: "bot",
    title: "Nutrition AI Chat Assistant",
    tag: "Gemini Chat Interaction",
    naturalDescription: "Multi-turn conversational assistant to answer dietary questions and provide meal suggestions.",
    badge: "AI Coach",
  },
  {
    id: "feat-analytics",
    number: "05",
    iconName: "trending-up",
    title: "Weekly Nutrition Charts",
    tag: "FL Chart Visualization",
    naturalDescription: "Visual trendline charts monitoring weekly caloric intake, macro ratios, and weight progress.",
    badge: "Analytics",
  },
  {
    id: "feat-bmr",
    number: "06",
    iconName: "activity",
    title: "BMR & TDEE Calculation",
    tag: "Metabolic Profiling",
    naturalDescription: "Calculates baseline metabolic rate and total daily energy expenditure based on user biometrics.",
    badge: "Health Metrics",
  },
];

const astrobiteScreenshotsVi: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "Dashboard Theo Dõi Dinh Dưỡng Hằng Ngày",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard UI & Overview",
    description: "Màn hình chính hiển thị tiến độ calo trong ngày, tỷ lệ 3 nhóm dưỡng chất Carbs/Protein/Fat, nhật ký các bữa ăn và điều hướng nhanh.",
    techSpecs: ["FL Chart Custom Painters", "Riverpod AsyncNotifier", "Giao diện Claymorphism", "Theme Engine"],
  },
  {
    id: "screen-ai-scanner",
    title: "Quét Và Nhận Diện Món Ăn Bằng Camera AI",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "Gemini Vision AI",
    description: "Giao diện camera tích hợp Google Gemini Vision để phân tích ảnh món ăn, trích xuất thành phần và ước tính chỉ số dinh dưỡng.",
    techSpecs: ["Camera Stream Controller", "Gemini Vision API", "JSON Schema Parsing", "State Validation"],
  },
  {
    id: "screen-manual-scaler",
    title: "Nhập Món Ăn & Điều Chỉnh Khẩu Phần",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Portion Scaling",
    description: "Tra cứu món ăn và điều chỉnh khối lượng gram hoặc đơn vị phần ăn, tự động tính toán lại lượng calo và dinh dưỡng tương ứng.",
    techSpecs: ["Reactive Macro Calculation", "Food Database Lookup", "Immutable Models", "Form Validation"],
  },
  {
    id: "screen-genui-chat",
    title: "Trò Chuyện Cùng Trợ Lý Dinh Dưỡng AI",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "Conversational AI",
    description: "Khung chat hỗ trợ người dùng hỏi đáp về chế độ ăn uống, gợi ý thực đơn lành mạnh và sinh thẻ thông tin món ăn trực tiếp.",
    techSpecs: ["Multi-turn Gemini Chat", "Context History Management", "Structured Card Widgets", "Firestore Sync"],
  },
  {
    id: "screen-analytics-chart",
    title: "Thống Kê Xu Hướng Calo Tuần",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Data Visualization",
    description: "Biểu đồ đường biểu diễn lượng calo tiêu thụ qua 7 ngày trong tuần, so sánh với mục tiêu dinh dưỡng đã thiết lập.",
    techSpecs: ["FL Chart LineChart", "RepaintBoundary Optimization", "Weekly Aggregation Logic", "Goal Target Line"],
  },
  {
    id: "screen-profile-bmr",
    title: "Thiết Lập Mục Tiêu & Chỉ Số BMR/TDEE",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "User Profile & Goals",
    description: "Màn hình hồ sơ cá nhân giúp tính toán chỉ số BMR và TDEE theo công thức Mifflin-St Jeor, hỗ trợ tùy chọn mục tiêu tăng, giảm hoặc duy trì cân nặng.",
    techSpecs: ["Biometric Formula Calculations", "SharedPreferences Storage", "Target Goal Settings", "Responsive Layout"],
  },
];

const astrobiteScreenshotsEn: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "Daily Nutrition Dashboard",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard UI & Overview",
    description: "Main dashboard displaying daily caloric progress, macronutrient split (Carbs/Protein/Fat), meal logs, and quick action navigation.",
    techSpecs: ["FL Chart Custom Painters", "Riverpod AsyncNotifier", "Claymorphic Styling", "Dynamic Theme"],
  },
  {
    id: "screen-ai-scanner",
    title: "AI Camera Food Recognition",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "Gemini Vision AI",
    description: "Camera interface integrated with Google Gemini Vision to analyze food photography, identify items, and estimate nutrition facts.",
    techSpecs: ["Camera Stream Controller", "Gemini Vision API", "JSON Schema Parsing", "State Validation"],
  },
  {
    id: "screen-manual-scaler",
    title: "Manual Food Entry & Portion Adjustment",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Portion Scaling",
    description: "Search local food database and adjust serving weights, automatically recalculating calories and macronutrients in real time.",
    techSpecs: ["Reactive Macro Calculation", "Food Database Lookup", "Immutable Models", "Form Validation"],
  },
  {
    id: "screen-genui-chat",
    title: "AI Nutrition Coach Chat",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "Conversational AI",
    description: "Interactive chat assistant answering nutritional questions, offering meal suggestions, and rendering interactive meal cards.",
    techSpecs: ["Multi-turn Gemini Chat", "Context History Management", "Structured Card Widgets", "Firestore Sync"],
  },
  {
    id: "screen-analytics-chart",
    title: "Weekly Caloric Intake Analytics",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Data Visualization",
    description: "Visual trendline chart showing daily calories consumed across 7 days against target energy goals.",
    techSpecs: ["FL Chart LineChart", "RepaintBoundary Optimization", "Weekly Aggregation Logic", "Goal Target Line"],
  },
  {
    id: "screen-profile-bmr",
    title: "BMR & TDEE Metabolic Setup",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "User Profile & Goals",
    description: "User profile screen calculating Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) based on biometric parameters.",
    techSpecs: ["Biometric Formula Calculations", "SharedPreferences Storage", "Target Goal Settings", "Responsive Layout"],
  },
];

export const getAstrobiteOverview = (lang: Language = 'vi'): AstrobiteOverview => {
  return lang === 'en' ? astrobiteOverviewEn : astrobiteOverviewVi;
};

export const getAstrobitePillars = (lang: Language = 'vi'): AstroPillar[] => {
  return lang === 'en' ? astrobitePillarsEn : astrobitePillarsVi;
};

export const getAstrobiteFeatures = (lang: Language = 'vi'): AstroFeature[] => {
  return lang === 'en' ? astrobiteFeaturesEn : astrobiteFeaturesVi;
};

export const getAstrobiteScreenshots = (lang: Language = 'vi'): ScreenshotItem[] => {
  return lang === 'en' ? astrobiteScreenshotsEn : astrobiteScreenshotsVi;
};

export const astrobiteOverview = astrobiteOverviewVi;
export const astrobitePillars = astrobitePillarsVi;
export const astrobiteFeatures = astrobiteFeaturesVi;
export const astrobiteScreenshots = astrobiteScreenshotsVi;
