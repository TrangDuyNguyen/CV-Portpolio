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
  tagline: "Ăn uống khoa học, bắt đầu từ những lựa chọn hằng ngày.",
  role: "Personal Project · Flutter",
  description: "AstroBite là ứng dụng theo dõi dinh dưỡng, hỗ trợ ghi nhận bữa ăn và đưa ra thông tin tham khảo để người dùng hiểu rõ hơn thói quen ăn uống của mình.",
  metrics: [
    { label: "Nền Tảng", value: "Flutter & Dart" },
    { label: "Quản Lý State", value: "Riverpod" },
    { label: "Trợ Lý AI", value: "Google Gemini" },
    { label: "Dữ Liệu", value: "Firebase & Offline Cache" },
  ],
  stackBadges: [
    "Flutter",
    "Riverpod",
    "Gemini AI",
    "Firebase",
    "SQLite Local Cache",
    "Speech-to-Text",
    "FL Chart",
    "Open Food Facts",
  ],
};

const astrobiteOverviewEn: AstrobiteOverview = {
  name: "AstroBite",
  version: "Personal Project",
  tagline: "Healthy eating starts with mindful daily choices.",
  role: "Personal Project · Flutter",
  description: "AstroBite is a nutrition tracking application designed to log meals and provide helpful insights so users understand their nutritional habits.",
  metrics: [
    { label: "Platform", value: "Flutter & Dart" },
    { label: "State Management", value: "Riverpod" },
    { label: "AI Integration", value: "Google Gemini" },
    { label: "Data Persistence", value: "Firebase & Offline Cache" },
  ],
  stackBadges: [
    "Flutter",
    "Riverpod",
    "Gemini AI",
    "Firebase",
    "SQLite Local Cache",
    "Speech-to-Text",
    "FL Chart",
    "Open Food Facts",
  ],
};

const astrobitePillarsVi: AstroPillar[] = [
  {
    id: "convenient-logging",
    number: "01",
    title: "Ghi Nhận Bữa Ăn Thuận Tiện",
    tag: "Nhập Liệu Linh Hoạt",
    description: "Người dùng có thể tìm món bằng barcode, nhập nội dung hoặc dùng AI để hỗ trợ nhận diện món ăn.",
    highlights: [
      "Nhận diện món ăn bằng hình ảnh qua Google Gemini.",
      "Tra cứu sản phẩm nhanh qua barcode với cơ sở dữ liệu mở.",
      "Nhập nội dung bữa ăn bằng giọng nói tiếng Việt rảnh tay.",
    ],
    metricBadge: "Multimodal Input",
  },
  {
    id: "offline-tracking",
    number: "02",
    title: "Theo Dõi Ngay Cả Khi Offline",
    tag: "Local Cache & Sync",
    description: "Dữ liệu được lưu cục bộ trước, sau đó đồng bộ khi có kết nối. Trạng thái đồng bộ được quản lý để hạn chế mất dữ liệu.",
    highlights: [
      "Lưu trữ dữ liệu tức thì vào local database không phụ thuộc mạng.",
      "Hàng đợi tự động đồng bộ lên Firebase khi kết nối ổn định.",
      "Tránh gián đoạn trải nghiệm ghi chép trong sinh hoạt hằng ngày.",
    ],
    metricBadge: "Offline-First",
  },
  {
    id: "nutrition-insights",
    number: "03",
    title: "Hỗ Trợ Hiểu Thông Tin Dinh Dưỡng",
    tag: "Gemini Intelligence",
    description: "Gemini được tích hợp để phân tích hình ảnh món ăn và hỗ trợ giải đáp các câu hỏi liên quan đến dinh dưỡng.",
    highlights: [
      "Phân tích món ăn và ước tính tỷ lệ carbs, protein, fat.",
      "AI Nutrition Coach giải đáp thắc mắc về khẩu phần ăn uống.",
      "Biểu đồ trực quan theo dõi lượng năng lượng nạp qua từng ngày.",
    ],
    metricBadge: "AI Assistant",
  },
];

const astrobitePillarsEn: AstroPillar[] = [
  {
    id: "convenient-logging",
    number: "01",
    title: "Convenient Meal Logging",
    tag: "Flexible Input",
    description: "Users can find food via barcode, manual entry, or AI-assisted image recognition.",
    highlights: [
      "AI-powered meal recognition via Google Gemini.",
      "Fast product lookup through barcode scanning.",
      "Hands-free Vietnamese voice logging.",
    ],
    metricBadge: "Multimodal Input",
  },
  {
    id: "offline-tracking",
    number: "02",
    title: "Tracking Even When Offline",
    tag: "Local Cache & Sync",
    description: "Data is stored locally first, then synchronized once connected. Sync queues ensure zero data loss.",
    highlights: [
      "Instant offline persistence without network dependency.",
      "Automatic queue sync with Firebase when connection restores.",
      "Uninterrupted daily logging workflow.",
    ],
    metricBadge: "Offline-First",
  },
  {
    id: "nutrition-insights",
    number: "03",
    title: "Understanding Nutritional Information",
    tag: "Gemini Intelligence",
    description: "Gemini is integrated to analyze meal photos and answer dietary questions.",
    highlights: [
      "Meal analysis estimating carbs, protein, and fat.",
      "AI Nutrition Coach answering everyday dietary questions.",
      "Visual charts tracking weekly caloric intake and goals.",
    ],
    metricBadge: "AI Assistant",
  },
];

const astrobiteFeaturesVi: AstroFeature[] = [
  {
    id: "feat-camera",
    number: "01",
    iconName: "camera",
    title: "Nhận diện món ăn bằng hình ảnh",
    tag: "Gemini AI",
    naturalDescription: "Chụp ảnh món ăn để hỗ trợ nhận diện và ước tính dinh dưỡng.",
    badge: "AI Vision",
  },
  {
    id: "feat-barcode",
    number: "02",
    iconName: "utensils",
    title: "Tra cứu thực phẩm qua barcode",
    tag: "Open Food Facts",
    naturalDescription: "Quét mã vạch sản phẩm đóng gói để xem thông tin dinh dưỡng.",
    badge: "Barcode",
  },
  {
    id: "feat-offline",
    number: "03",
    iconName: "activity",
    title: "Ghi nhận bữa ăn khi offline",
    tag: "SQLite Cache",
    naturalDescription: "Lưu dữ liệu cục bộ trước và tự động đồng bộ khi có mạng.",
    badge: "Offline",
  },
  {
    id: "feat-sync",
    number: "04",
    iconName: "trending-up",
    title: "Đồng bộ dữ liệu với Firebase",
    tag: "Cloud Firestore",
    naturalDescription: "Lưu trữ nhật ký ăn uống an toàn trên nền tảng đám mây.",
    badge: "Cloud Sync",
  },
  {
    id: "feat-coach",
    number: "05",
    iconName: "bot",
    title: "AI Nutrition Coach",
    tag: "Gemini Chat",
    naturalDescription: "Trợ lý hỗ trợ giải đáp thắc mắc về dinh dưỡng và chế độ ăn.",
    badge: "AI Coach",
  },
  {
    id: "feat-voice",
    number: "06",
    iconName: "mic",
    title: "Nhập bữa ăn bằng giọng nói",
    tag: "Speech-to-Text",
    naturalDescription: "Ghi nhận nhanh món ăn bằng câu nói tiếng Việt tự nhiên.",
    badge: "Voice",
  },
];

const astrobiteFeaturesEn: AstroFeature[] = [
  {
    id: "feat-camera",
    number: "01",
    iconName: "camera",
    title: "Image Food Recognition",
    tag: "Gemini AI",
    naturalDescription: "Snap food photos for assisted dish identification and nutritional estimates.",
    badge: "AI Vision",
  },
  {
    id: "feat-barcode",
    number: "02",
    iconName: "utensils",
    title: "Barcode Product Lookup",
    tag: "Open Food Facts",
    naturalDescription: "Scan packaged food barcodes to look up nutritional facts.",
    badge: "Barcode",
  },
  {
    id: "feat-offline",
    number: "03",
    iconName: "activity",
    title: "Offline Meal Recording",
    tag: "SQLite Cache",
    naturalDescription: "Save data locally first and sync automatically when connected.",
    badge: "Offline",
  },
  {
    id: "feat-sync",
    number: "04",
    iconName: "trending-up",
    title: "Firebase Cloud Sync",
    tag: "Cloud Firestore",
    naturalDescription: "Securely synchronize meal logs with cloud storage.",
    badge: "Cloud Sync",
  },
  {
    id: "feat-coach",
    number: "05",
    iconName: "bot",
    title: "AI Nutrition Coach",
    tag: "Gemini Chat",
    naturalDescription: "Assistant answering everyday dietary and nutritional questions.",
    badge: "AI Coach",
  },
  {
    id: "feat-voice",
    number: "06",
    iconName: "mic",
    title: "Voice Meal Logging",
    tag: "Speech-to-Text",
    naturalDescription: "Quick meal recording using natural Vietnamese voice input.",
    badge: "Voice",
  },
];

const astrobiteScreenshotsVi: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "Tổng quan dinh dưỡng",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard",
    description: "Theo dõi lượng calo, tỷ lệ dinh dưỡng trong ngày và nhật ký bữa ăn.",
    techSpecs: ["FL Chart", "Riverpod", "Dashboard"],
  },
  {
    id: "screen-ai-scanner",
    title: "Phân tích món ăn bằng AI",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "AI Scanner",
    description: "Nhận diện món ăn qua hình ảnh và gợi ý thông tin dinh dưỡng.",
    techSpecs: ["Gemini Vision", "Camera", "AI Parsing"],
  },
  {
    id: "screen-manual-scaler",
    title: "Ghi nhận bữa ăn",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Meal Log",
    description: "Tùy chỉnh khẩu phần và tính toán lượng calo tương ứng.",
    techSpecs: ["Portion Scaling", "Local Cache"],
  },
  {
    id: "screen-genui-chat",
    title: "AI Nutrition Coach",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "AI Coach",
    description: "Hỏi đáp về dinh dưỡng và gợi ý lựa chọn thực phẩm lành mạnh.",
    techSpecs: ["Gemini AI", "Chat Interface"],
  },
  {
    id: "screen-analytics-chart",
    title: "Lịch sử ăn uống",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Analytics",
    description: "Biểu đồ theo dõi calo qua các ngày trong tuần.",
    techSpecs: ["FL Chart", "Weekly Aggregation"],
  },
  {
    id: "screen-profile-bmr",
    title: "Tra cứu thực phẩm & Mục tiêu",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "Profile",
    description: "Tính toán chỉ số năng lượng và thiết lập mục tiêu cá nhân.",
    techSpecs: ["BMR Calculation", "User Goals"],
  },
];

const astrobiteScreenshotsEn: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "Nutrition Overview",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard",
    description: "Track daily calories, macronutrient balance, and meal logs.",
    techSpecs: ["FL Chart", "Riverpod", "Dashboard"],
  },
  {
    id: "screen-ai-scanner",
    title: "AI Food Analysis",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "AI Scanner",
    description: "Analyze meal photos and receive nutritional estimates.",
    techSpecs: ["Gemini Vision", "Camera", "AI Parsing"],
  },
  {
    id: "screen-manual-scaler",
    title: "Meal Logging",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Meal Log",
    description: "Adjust portion sizes and calculate nutritional values.",
    techSpecs: ["Portion Scaling", "Local Cache"],
  },
  {
    id: "screen-genui-chat",
    title: "AI Nutrition Coach",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "AI Coach",
    description: "Ask nutritional questions and get practical meal guidance.",
    techSpecs: ["Gemini AI", "Chat Interface"],
  },
  {
    id: "screen-analytics-chart",
    title: "Weekly History",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Analytics",
    description: "Visual charts tracking calories across the week.",
    techSpecs: ["FL Chart", "Weekly Aggregation"],
  },
  {
    id: "screen-profile-bmr",
    title: "Food Lookup & Goals",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "Profile",
    description: "Calculate energy metrics and set personal nutrition targets.",
    techSpecs: ["BMR Calculation", "User Goals"],
  },
];

export const getAstrobiteOverview = (lang: Language = 'en'): AstrobiteOverview => {
  return lang === 'en' ? astrobiteOverviewEn : astrobiteOverviewVi;
};

export const getAstrobitePillars = (lang: Language = 'en'): AstroPillar[] => {
  return lang === 'en' ? astrobitePillarsEn : astrobitePillarsVi;
};

export const getAstrobiteFeatures = (lang: Language = 'en'): AstroFeature[] => {
  return lang === 'en' ? astrobiteFeaturesEn : astrobiteFeaturesVi;
};

export const getAstrobiteScreenshots = (lang: Language = 'en'): ScreenshotItem[] => {
  return lang === 'en' ? astrobiteScreenshotsEn : astrobiteScreenshotsVi;
};
