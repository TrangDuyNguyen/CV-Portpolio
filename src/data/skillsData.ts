import { SkillGroup } from '../types';

export const skillsData: SkillGroup[] = [
  {
    category: "Mobile Core & Platforms",
    description: "Kỹ năng lập trình di động chuyên sâu đa nền tảng và Native",
    skills: [
      { name: "Flutter & Dart", level: "Expert", isKey: true },
      { name: "iOS Native (Swift / SwiftUI / UIKit)", level: "Advanced", isKey: true },
      { name: "Android Native (Kotlin)", level: "Proficient", isKey: true },
      { name: "Platform Channels (MethodChannel)", level: "Advanced" },
      { name: "Flutter Add-to-App", level: "Proficient" },
      { name: "HTML5 / CSS3 / JavaScript", level: "Working" },
    ],
  },
  {
    category: "Architecture & State Management",
    description: "Thiết kế kiến trúc hệ thống module hóa, chịu tải cao và dễ kiểm thử",
    skills: [
      { name: "Clean Architecture (Feature-First)", level: "Expert", isKey: true },
      { name: "Riverpod 2.x (Code Generation)", level: "Expert", isKey: true },
      { name: "BLoC Pattern", level: "Advanced" },
      { name: "Offline-First & Local Persistence", level: "Advanced", isKey: true },
      { name: "AutoRoute & Deep Linking", level: "Advanced" },
      { name: "Freezed & JSON Serializable", level: "Expert" },
      { name: "SQLite, Hive & SharedPreferences", level: "Advanced" },
    ],
  },
  {
    category: "AI & Real-Time Cloud Services",
    description: "Tiên phong tích hợp Vision AI, GenUI và truyền thông độ trễ thấp",
    skills: [
      { name: "Google Gemini Multimodal Vision AI", level: "Advanced", isKey: true },
      { name: "Flutter GenUI (A2UI Protocol)", level: "Advanced", isKey: true },
      { name: "Firebase (Auth, Firestore, FCM, App Check)", level: "Advanced" },
      { name: "WebSocket & Socket.IO (Real-time OTT)", level: "Advanced" },
      { name: "RESTful API Integration", level: "Expert" },
      { name: "Crashlytics & Performance Monitoring", level: "Advanced" },
    ],
  },
  {
    category: "DevOps, Hardware & Quality SOP",
    description: "Tự động hóa pipeline phân phối, tích hợp ngoại vi và kiểm thử nghiêm ngặt",
    skills: [
      { name: "Fastlane & GitHub Actions CI/CD", level: "Advanced", isKey: true },
      { name: "Unit & Widget Testing (198 Tests 100%)", level: "Expert", isKey: true },
      { name: "iOS WidgetKit & Android AppWidget", level: "Advanced", isKey: true },
      { name: "Hardware Integration (ESC/POS Thermal & Barcode)", level: "Proficient" },
      { name: "Apple HealthKit & iOS CallKit", level: "Proficient" },
      { name: "Strict Ponytail Mindset (Zero Bloat)", level: "Core Philosophy" },
    ],
  },
];
