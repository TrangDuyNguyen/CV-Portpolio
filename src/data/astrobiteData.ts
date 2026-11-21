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
  version: "v3.0.0",
  tagline: "Đếm calo món Việt nhanh dưới 2.5 giây bằng ảnh chụp & giọng nói.",
  role: "Dự án cá nhân chủ lực · Flutter & System Architect",
  description: "Phần lớn app đếm calo nước ngoài không hiểu món Việt: ăn tô phở bỏ nước béo hay gạt bớt mỡ hành nhưng app vẫn tính nguyên tô, còn lúc tay ướt nấu ăn thì không thể gõ phím. Tôi tự thiết kế và xây dựng AstroBite v3.0.0 theo Clean Architecture 12 phân hệ để giải quyết đúng những bất tiện đó. App chạy 60 FPS, dùng được khi mất mạng và đạt 277/277 bài test tự động.",
  metrics: [
    { label: "Kiến trúc", value: "12 Modules · Riverpod 2.6" },
    { label: "Tốc độ AI", value: "< 2.5s Ảnh · ~1.1s Giọng nói" },
    { label: "Kiểm thử", value: "277 / 277 Tests Pass" },
    { label: "Hiệu năng", value: "60 FPS · 0 Memory Leak" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Riverpod 2.6",
    "Gemini 3.8 Flash",
    "GenUI A2UI",
    "Speech-to-Text (vi-VN)",
    "SQLite + Firestore",
    "iOS WidgetKit",
    "Android AppWidget",
    "Fastlane",
  ],
};

const astrobiteOverviewEn: AstrobiteOverview = {
  name: "AstroBite",
  version: "v3.0.0",
  tagline: "Track Vietnamese & Asian meals in under 2.5s via camera or voice.",
  role: "Flagship Personal Project · Mobile Engineer & Architect",
  description: "Most foreign calorie trackers break down on Asian meals: you leave the fatty broth in a bowl of Pho or skip toppings on broken rice, yet the app logs the full bowl; and you cannot type when cooking with wet hands. I architected AstroBite v3.0.0 across 12 Clean Architecture modules to fix these friction points. It holds 60 FPS, works offline-first, and has 277 passing automated tests.",
  metrics: [
    { label: "Architecture", value: "12 Modules · Riverpod 2.6" },
    { label: "AI Latency", value: "< 2.5s Vision · ~1.1s Voice" },
    { label: "Test Suite", value: "277 / 277 Tests Pass" },
    { label: "Runtime", value: "60 FPS · 0 Memory Leak" },
  ],
  stackBadges: [
    "Flutter 3.x",
    "Riverpod 2.6",
    "Gemini 3.8 Flash",
    "GenUI A2UI",
    "Speech-to-Text (vi-VN)",
    "SQLite + Firestore",
    "iOS WidgetKit",
    "Android AppWidget",
    "Fastlane",
  ],
};

const astrobitePillarsVi: AstroPillar[] = [
  {
    id: "asian-cuisine-engine",
    number: "01",
    title: "Tách Nước Dùng & Topping Món Việt",
    tag: "Gemini 3.8 Flash Vision",
    description: "Khi quét ảnh tô phở, bún bò hay đĩa cơm tấm, AI bóc tách riêng phần Cái, Nước dùng béo và từng món Topping kèm công tắc [Ăn cả nước / Chỉ ăn cái] để tự động trừ calo và giảm hơn 65% lượng muối Natri.",
    highlights: [
      "Nhận diện ảnh chụp món ăn và trả về 3 chỉ số Carbs / Protein / Fat dưới 2.5 giây.",
      "Giải phóng bộ nhớ camera buffer độc lập sau mỗi khung hình, giữ 0 memory leak khi quét liên tục.",
      "Cắt giảm 68% thao tác sửa số liệu thủ công so với việc tìm từng nguyên liệu rời.",
    ],
    metricBadge: "< 2.5s Vision",
    screenImage: "/screenshots/clay/ar_camera_scanner.png",
    techStack: ["Gemini Vision", "Camera Buffer Dispose", "One-Pass Prompt"],
    codeInsight: "Buffer ảnh camera được giải phóng ngay khi nén JPEG xong, tránh tràn RAM trên máy tầm trung.",
  },
  {
    id: "astro-voice-ai",
    number: "02",
    title: "Đọc Giọng Nói Tiếng Việt Rảnh Tay",
    tag: "AstroVoice NLU (~1.1s)",
    description: "Bấm giữ Mic và nói tự nhiên: 'Sáng nay ăn tô bún bò với hai cái quẩy'. Pipeline speech-to-text tiếng Việt kết hợp NLU tự hiểu đơn vị dân dã (tô, bát, chén, ly, cái) và tự gán vào bữa ăn theo khung giờ.",
    highlights: [
      "Nhận diện tiếng Việt có dấu trực tiếp trên thiết bị (vi-VN) theo thời gian thực.",
      "Độ trễ bóc tách NLU khoảng ~1.1 giây; lưu bữa ăn chỉ với 1 chạm mất ~45ms.",
      "Hỗ trợ điều chỉnh khẩu phần nhanh theo đơn vị gram hoặc phần ăn quen thuộc.",
    ],
    metricBadge: "~1.1s Voice NLU",
    screenImage: "/screenshots/clay/manual_portion_scaler.png",
    techStack: ["Speech-to-Text vi-VN", "Gemini NLU", "Portion Scaler"],
    codeInsight: "Prompt NLU chuẩn hóa đơn vị dân dã Việt Nam sang gram thực tế trong 1 lần gọi duy nhất.",
  },
  {
    id: "genui-a2ui-protocol",
    number: "03",
    title: "Thẻ Món Ăn Tương Tác Trong Khung Chat",
    tag: "Flutter GenUI (A2UI)",
    description: "Thay vì bắt người dùng đọc một đoạn văn bản trả lời dài dòng, Gemini trả về JSON khớp với Catalog Widget có sẵn để Flutter render ra thẻ món ăn tương tác trực tiếp ngay trong luồng chat.",
    highlights: [
      "Chạm nút +/-20g để chỉnh khối lượng món ăn và bấm Lưu 1 chạm ngay trong khung trò chuyện.",
      "Context Injection (BMR, TDEE, dị ứng, mục tiêu) nén gọn dưới 250 tokens để giữ chi phí thấp.",
      "Giao diện đất nặn Claymorphic 3D tự viết bằng Flutter primitives (không thêm package UI nặng).",
    ],
    metricBadge: "A2UI Protocol",
    screenImage: "/screenshots/clay/genui_astrocoach_chat.png",
    techStack: ["GenUI Catalog", "2-Way Data Binding", "Claymorphic UI"],
    codeInsight: "Ánh xạ component ID từ payload AI sang Native Flutter Widget thay vì parse Markdown thụ động.",
  },
  {
    id: "offline-widgets-qa",
    number: "04",
    title: "Offline-First, OS Widgets & 277 Tests",
    tag: "Độ ổn định & Kiểm thử",
    description: "Ghi chép bữa ăn ghi xuống SQLite trước rồi mới đồng bộ lên Cloud Firestore. Dữ liệu calo được đẩy sang Widget màn hình chính iOS/Android ngay khi lưu bữa mà không chạy service ngầm gây hao pin.",
    highlights: [
      "Tiện ích iOS WidgetKit (Swift) & Android AppWidget (Kotlin) mở thẳng camera trong < 300ms qua deep link.",
      "Kiến trúc Feature-First Clean Architecture tách 12 phân hệ độc lập, giữ 60 FPS với RepaintBoundary.",
      "Đạt 277/277 automated unit, repository & widget tests pass 100%, 0 lỗi flutter analyze.",
    ],
    metricBadge: "277/277 Tests",
    screenImage: "/screenshots/clay/cockpit_dashboard.png",
    techStack: ["WidgetKit Swift", "AppWidget Kotlin", "277 Tests"],
    codeInsight: "Reactive sync qua AppGroup & SharedPreferences giúp Widget cập nhật ngay khi lưu bữa, 0 background drain.",
  },
];

const astrobitePillarsEn: AstroPillar[] = [
  {
    id: "asian-cuisine-engine",
    number: "01",
    title: "Broth & Topping Separation for Asian Meals",
    tag: "Gemini 3.8 Flash Vision",
    description: "When scanning Pho, Bun Bo, or Com Tam, AI separates solid noodles/meat from fatty broth and individual toppings, providing a 1-tap [With Broth / Meat Only] switch that cuts calories and over 65% sodium.",
    highlights: [
      "Analyzes meal photos into calories and Carbs / Protein / Fat macros in under 2.5 seconds.",
      "Disposes camera frame buffers independently right after capture, keeping memory leaks at zero.",
      "Cuts manual macro editing steps by 68% compared to searching single ingredients.",
    ],
    metricBadge: "< 2.5s Vision",
    screenImage: "/screenshots/clay/ar_camera_scanner.png",
    techStack: ["Gemini Vision", "Camera Buffer Dispose", "One-Pass Prompt"],
    codeInsight: "Camera buffers are deallocated immediately after JPEG encoding to avoid OOM spikes on mid-range phones.",
  },
  {
    id: "astro-voice-ai",
    number: "02",
    title: "Hands-Free Vietnamese Voice Logging",
    tag: "AstroVoice NLU (~1.1s)",
    description: "Hold the mic and speak naturally: 'Had a bowl of beef noodles and two fried dough sticks this morning'. On-device vi-VN speech recognition and NLU parse local units (bowl, cup, piece) and infer the meal slot.",
    highlights: [
      "Real-time Vietnamese (vi-VN) streaming transcript directly on device.",
      "Sub-1.1s NLU extraction latency with ~45ms 1-tap confirmation into storage.",
      "Quick portion scaler supports grams or familiar local serving units.",
    ],
    metricBadge: "~1.1s Voice NLU",
    screenImage: "/screenshots/clay/manual_portion_scaler.png",
    techStack: ["Speech-to-Text vi-VN", "Gemini NLU", "Portion Scaler"],
    codeInsight: "NLU schema normalizes colloquial Vietnamese units into gram weights in a single round-trip.",
  },
  {
    id: "genui-a2ui-protocol",
    number: "03",
    title: "Interactive Food Cards Inside Chat",
    tag: "Flutter GenUI (A2UI)",
    description: "Instead of dumping passive text paragraphs, Gemini returns structured JSON matched against a local Widget Catalog so Flutter renders interactive meal cards straight inside the chat stream.",
    highlights: [
      "Adjust +/-20g portions with stepper buttons and log in 1 tap without leaving the chat.",
      "Context Injection (BMR, TDEE, allergies, goals) stays under 250 tokens for fast responses.",
      "Custom 3D Claymorphic UI built from Flutter primitives with no external UI packages (62.4MB APK).",
    ],
    metricBadge: "A2UI Protocol",
    screenImage: "/screenshots/clay/genui_astrocoach_chat.png",
    techStack: ["GenUI Catalog", "2-Way Data Binding", "Claymorphic UI"],
    codeInsight: "AI JSON payload maps to pre-registered Flutter Widgets with live Firestore mutation bindings.",
  },
  {
    id: "offline-widgets-qa",
    number: "04",
    title: "Offline-First, OS Widgets & 277 Tests",
    tag: "Runtime & Quality",
    description: "Meals persist to local SQLite first and sync to Cloud Firestore when online. Calorie budgets mirror immediately to iOS and Android home widgets without running background services.",
    highlights: [
      "iOS WidgetKit (Swift) & Android AppWidget (Kotlin) deep-link into the scanner in < 300ms.",
      "12 independent Clean Architecture modules isolated with RepaintBoundary for steady 60 FPS.",
      "277/277 automated unit, repository, and widget tests passing with 0 static analysis warnings.",
    ],
    metricBadge: "277/277 Tests",
    screenImage: "/screenshots/clay/cockpit_dashboard.png",
    techStack: ["WidgetKit Swift", "AppWidget Kotlin", "277 Tests"],
    codeInsight: "Reactive sync via AppGroup & SharedPreferences updates OS widgets on meal save with zero background drain.",
  },
];

const astrobiteFeaturesVi: AstroFeature[] = [
  {
    id: "feat-camera",
    number: "01",
    iconName: "camera",
    title: "Quét ảnh & Tách nước dùng",
    tag: "Gemini Vision",
    naturalDescription: "Phân tích đĩa cơm hoặc bàn ăn trong < 2.5s; gạt công tắc tách nước dùng món Á.",
    badge: "< 2.5s",
  },
  {
    id: "feat-voice",
    number: "02",
    iconName: "mic",
    title: "Ghi món bằng giọng nói vi-VN",
    tag: "AstroVoice AI",
    naturalDescription: "Đọc tự nhiên theo tô, chén, ly; NLU bóc tách món ăn trong ~1.1 giây.",
    badge: "~1.1s",
  },
  {
    id: "feat-coach",
    number: "03",
    iconName: "bot",
    title: "Thẻ GenUI trong khung chat",
    tag: "A2UI Protocol",
    naturalDescription: "AI sinh trực tiếp widget tăng giảm khẩu phần (+/-20g) và nút Lưu 1 chạm.",
    badge: "GenUI",
  },
  {
    id: "feat-offline",
    number: "04",
    iconName: "activity",
    title: "Lưu offline & Đồng bộ queue",
    tag: "SQLite + Firestore",
    naturalDescription: "Ghi dữ liệu vào máy trước trong ~45ms, tự đồng bộ Firestore khi có mạng.",
    badge: "Offline-First",
  },
  {
    id: "feat-widgets",
    number: "05",
    iconName: "utensils",
    title: "Widget iOS & Android",
    tag: "Swift & Kotlin",
    naturalDescription: "Xem calo còn lại trên màn hình chính và mở camera quét món trong < 300ms.",
    badge: "< 300ms",
  },
  {
    id: "feat-streak",
    number: "06",
    iconName: "trending-up",
    title: "Chuỗi ăn sạch & Thống kê FL Chart",
    tag: "60 FPS UI",
    naturalDescription: "Khiên Sao bảo vệ chuỗi ngày, bảng xếp hạng bạn bè và biểu đồ cân nặng theo tuần.",
    badge: "277 Tests",
  },
];

const astrobiteFeaturesEn: AstroFeature[] = [
  {
    id: "feat-camera",
    number: "01",
    iconName: "camera",
    title: "Vision Scan & Broth Switch",
    tag: "Gemini Vision",
    naturalDescription: "Breaks down multi-dish photos in < 2.5s with a broth/topping exclusion toggle.",
    badge: "< 2.5s",
  },
  {
    id: "feat-voice",
    number: "02",
    iconName: "mic",
    title: "Vietnamese Voice Logging",
    tag: "AstroVoice AI",
    naturalDescription: "Speaks local units (bowl, cup, piece); NLU parses food entries in ~1.1s.",
    badge: "~1.1s",
  },
  {
    id: "feat-coach",
    number: "03",
    iconName: "bot",
    title: "Interactive GenUI Chat Cards",
    tag: "A2UI Protocol",
    naturalDescription: "Renders native +/-20g portion steppers and 1-tap log cards inside chat.",
    badge: "GenUI",
  },
  {
    id: "feat-offline",
    number: "04",
    iconName: "activity",
    title: "Offline-First Local Persistence",
    tag: "SQLite + Firestore",
    naturalDescription: "Writes meals locally in ~45ms and syncs cleanly to Firestore once online.",
    badge: "Offline-First",
  },
  {
    id: "feat-widgets",
    number: "05",
    iconName: "utensils",
    title: "Native iOS & Android Widgets",
    tag: "Swift & Kotlin",
    naturalDescription: "Checks daily calories on the home screen and deep-links to scanner in < 300ms.",
    badge: "< 300ms",
  },
  {
    id: "feat-streak",
    number: "06",
    iconName: "trending-up",
    title: "Streak Shield & FL Chart Analytics",
    tag: "60 FPS UI",
    naturalDescription: "Starlight Streak Shield, friend leaderboard, and RepaintBoundary-isolated charts.",
    badge: "277 Tests",
  },
];

const astrobiteScreenshotsVi: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "Cockpit Dinh Dưỡng 1 Giây",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard",
    description: "Vòng cung Calo bên trái và 3 thanh Carbs/Protein/Fat song song bên phải, giúp liếc 1 giây thấy ngay ngân sách còn lại trong ngày.",
    techSpecs: ["Claymorphic UI", "Riverpod 2.6", "60 FPS"],
  },
  {
    id: "screen-ai-scanner",
    title: "Camera AI & Tách Nước Dùng",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "AI Scanner",
    description: "Nhận diện món ăn trong < 2.5s, tự tách phần Cái / Nước dùng và từng Topping để trừ bớt calo và natri.",
    techSpecs: ["Gemini 3.8 Flash", "Buffer Dispose", "< 2.5s"],
  },
  {
    id: "screen-genui-chat",
    title: "AstroCoach GenUI Chat",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "GenUI A2UI",
    description: "Trò chuyện tiếng Việt và nhận trực tiếp thẻ món ăn tương tác ngay trong luồng chat để chỉnh khẩu phần và lưu 1 chạm.",
    techSpecs: ["A2UI Protocol", "Context <250 Tokens", "Voice Input"],
  },
  {
    id: "screen-manual-scaler",
    title: "Chỉnh Khẩu Phần & AstroVoice",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Portion Scaler",
    description: "Điều chỉnh khẩu phần theo đơn vị dân dã (tô, bát, cái, ly) hoặc nói trực tiếp qua AstroVoice với độ trễ ~1.1s.",
    techSpecs: ["Speech-to-Text", "NLU Parsing", "SQLite"],
  },
  {
    id: "screen-analytics-chart",
    title: "Biểu Đồ Xu Hướng FL Chart",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Analytics",
    description: "Theo dõi thâm hụt calo theo ngày/tuần đối chiếu cân nặng; bọc RepaintBoundary để không rớt khung hình khi cuộn.",
    techSpecs: ["FL Chart", "RepaintBoundary", "60 FPS"],
  },
  {
    id: "screen-meal-planner",
    title: "Thực Đơn 7 Ngày Linh Hoạt",
    category: "features",
    image: "/screenshots/clay/meal_planner_7days.png",
    tag: "Meal Planner",
    description: "Lên kế hoạch 4 bữa ăn theo tuần và sao chép nhanh các món ăn quen thuộc.",
    techSpecs: ["Clean Architecture", "Local Cache", "4pt Grid"],
  },
  {
    id: "screen-streak-shield",
    title: "Chuỗi Ăn Sạch & Khiên Sao",
    category: "cockpit",
    image: "/screenshots/clay/gamification_streak_shield.png",
    tag: "Streak & Rank",
    description: "Giữ chuỗi ngày ăn lành mạnh với cơ chế Khiên Sao bảo vệ khi bận đột xuất và nhắc chuỗi cùng bạn bè qua FCM.",
    techSpecs: ["Firestore Stream", "FCM Nudge", "RepaintBoundary"],
  },
  {
    id: "screen-widget-home",
    title: "Widget Màn Hình Chính",
    category: "widgets",
    image: "/screenshots/clay/widget_home_screen.png",
    tag: "OS Widgets",
    description: "Tiện ích iOS WidgetKit & Android AppWidget cập nhật ngay khi lưu bữa, deep-link mở camera trong < 300ms.",
    techSpecs: ["Swift WidgetKit", "Kotlin AppWidget", "< 300ms"],
  },
  {
    id: "screen-recipe-builder",
    title: "Sổ Tay Món Tự Nấu",
    category: "features",
    image: "/screenshots/clay/recipe_builder.png",
    tag: "Custom Recipes",
    description: "Tự tạo công thức món ăn gia đình, tính tổng calo cả nồi rồi chia đều ra từng hộp mang đi làm.",
    techSpecs: ["Meal Prep Math", "Offline-First", "Riverpod"],
  },
  {
    id: "screen-profile-bmr",
    title: "Tính BMR / TDEE & Mục Tiêu",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "Profile & Health",
    description: "Thiết lập mục tiêu cân nặng và đồng bộ bước chân tiêu hao từ Apple Health / Health Connect.",
    techSpecs: ["Apple Health", "Health Connect", "BMR/TDEE"],
  },
];

const astrobiteScreenshotsEn: ScreenshotItem[] = [
  {
    id: "screen-cockpit",
    title: "1-Second Nutrition Cockpit",
    category: "cockpit",
    image: "/screenshots/clay/cockpit_dashboard.png",
    tag: "Dashboard",
    description: "Calorie arc paired with Carbs, Protein, and Fat progress bars so daily remaining budget is readable in one glance.",
    techSpecs: ["Claymorphic UI", "Riverpod 2.6", "60 FPS"],
  },
  {
    id: "screen-ai-scanner",
    title: "AI Vision & Broth Switch",
    category: "ai",
    image: "/screenshots/clay/ar_camera_scanner.png",
    tag: "AI Scanner",
    description: "Identifies multi-item meals in < 2.5s and separates broth and toppings to adjust calories and sodium in one tap.",
    techSpecs: ["Gemini 3.8 Flash", "Buffer Dispose", "< 2.5s"],
  },
  {
    id: "screen-genui-chat",
    title: "AstroCoach GenUI Chat",
    category: "genui",
    image: "/screenshots/clay/genui_astrocoach_chat.png",
    tag: "GenUI A2UI",
    description: "Chat naturally and receive native interactive food cards inside the stream with +/-20g steppers and 1-tap logging.",
    techSpecs: ["A2UI Protocol", "Context <250 Tokens", "Voice Input"],
  },
  {
    id: "screen-manual-scaler",
    title: "Portion Scaler & AstroVoice",
    category: "features",
    image: "/screenshots/clay/manual_portion_scaler.png",
    tag: "Portion Scaler",
    description: "Scale local units (bowl, cup, piece) or log hands-free via Vietnamese AstroVoice with ~1.1s latency.",
    techSpecs: ["Speech-to-Text", "NLU Parsing", "SQLite"],
  },
  {
    id: "screen-analytics-chart",
    title: "FL Chart Calorie Trends",
    category: "features",
    image: "/screenshots/clay/analytics_fl_chart.png",
    tag: "Analytics",
    description: "Daily and weekly calorie deficit trends correlated with weight, wrapped in RepaintBoundary for 60 FPS scrolling.",
    techSpecs: ["FL Chart", "RepaintBoundary", "60 FPS"],
  },
  {
    id: "screen-meal-planner",
    title: "7-Day Meal Planner",
    category: "features",
    image: "/screenshots/clay/meal_planner_7days.png",
    tag: "Meal Planner",
    description: "Plan four daily meal slots across the week and duplicate frequent dishes quickly.",
    techSpecs: ["Clean Architecture", "Local Cache", "4pt Grid"],
  },
  {
    id: "screen-streak-shield",
    title: "Cosmic Streak & Shield",
    category: "cockpit",
    image: "/screenshots/clay/gamification_streak_shield.png",
    tag: "Streak & Rank",
    description: "Protects logging streaks with Starlight Shield and supports friend nudges over Cloud Firestore and FCM.",
    techSpecs: ["Firestore Stream", "FCM Nudge", "RepaintBoundary"],
  },
  {
    id: "screen-widget-home",
    title: "Home Screen OS Widgets",
    category: "widgets",
    image: "/screenshots/clay/widget_home_screen.png",
    tag: "OS Widgets",
    description: "Native iOS WidgetKit & Android AppWidget syncing on save with < 300ms deep-link directly into the camera.",
    techSpecs: ["Swift WidgetKit", "Kotlin AppWidget", "< 300ms"],
  },
  {
    id: "screen-recipe-builder",
    title: "Custom Recipe Builder",
    category: "features",
    image: "/screenshots/clay/recipe_builder.png",
    tag: "Custom Recipes",
    description: "Compute total batch calories for home-cooked recipes and split evenly across meal-prep boxes.",
    techSpecs: ["Meal Prep Math", "Offline-First", "Riverpod"],
  },
  {
    id: "screen-profile-bmr",
    title: "BMR / TDEE & Health Sync",
    category: "cockpit",
    image: "/screenshots/clay/profile_bmr_tdee.png",
    tag: "Profile & Health",
    description: "Set energy targets and sync active steps/burn from Apple Health and Android Health Connect.",
    techSpecs: ["Apple Health", "Health Connect", "BMR/TDEE"],
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
