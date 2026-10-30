import { SkillGroup } from '../types';
import { Language } from '../context/LanguageContext';

const skillsDataVi: SkillGroup[] = [
  {
    category: "Mobile Platforms",
    description: "Nền tảng phát triển ứng dụng di động đa nền tảng và Native",
    skills: [
      { name: "Flutter", isKey: true },
      { name: "Dart", isKey: true },
      { name: "iOS Native (Swift)", isKey: true },
      { name: "Android Native (Kotlin)", isKey: true },
      { name: "Platform Channels (MethodChannel)", isKey: true },
      { name: "Flutter Add-to-App" },
    ],
  },
  {
    category: "Architecture & State Management",
    description: "Mô hình kiến trúc phân tầng, phân tách trách nhiệm và quản lý trạng thái",
    skills: [
      { name: "Clean Architecture (Feature-First)", isKey: true },
      { name: "Riverpod 2.x (StateNotifier / Code-Gen)", isKey: true },
      { name: "BLoC Pattern (flutter_bloc)", isKey: true },
      { name: "MVVM & VIPER" },
      { name: "Offline-First & Local Caching", isKey: true },
      { name: "Freezed & JSON Serializable" },
    ],
  },
  {
    category: "Data & Networking",
    description: "Giao tiếp mạng, dữ liệu thời gian thực và lưu trữ cục bộ",
    skills: [
      { name: "RESTful API Integration", isKey: true },
      { name: "WebSocket & Realtime Streaming", isKey: true },
      { name: "SQLite & Local Database", isKey: true },
      { name: "Cloud Firestore & Firebase Auth" },
      { name: "SharedPreferences & Hive" },
      { name: "Dio (Interceptors, Retry & Token Refresh)" },
    ],
  },
  {
    category: "Native Integration & Peripherals",
    description: "Tích hợp phần cứng thiết bị, ngoại vi bán hàng và API hệ điều hành",
    skills: [
      { name: "Kotlin Platform Channels", isKey: true },
      { name: "ESC/POS Thermal Receipt Printer", isKey: true },
      { name: "Hardware Barcode Scanner", isKey: true },
      { name: "iOS CallKit SDK (VoIP & Calling)" },
      { name: "Google Maps & Deep Linking" },
    ],
  },
  {
    category: "Delivery, Quality & DevOps",
    description: "Tự động hóa build/release, đo đạc hiệu năng và kiểm thử chất lượng",
    skills: [
      { name: "Unit Testing & Widget Testing", isKey: true },
      { name: "Fastlane Mobile Automation", isKey: true },
      { name: "GitHub Actions & GitLab CI/CD", isKey: true },
      { name: "Flutter DevTools (Profiler, Memory)" },
      { name: "Firebase Crashlytics & App Performance" },
    ],
  },
];

const skillsDataEn: SkillGroup[] = [
  {
    category: "Mobile Platforms",
    description: "Cross-platform and native mobile application development",
    skills: [
      { name: "Flutter", isKey: true },
      { name: "Dart", isKey: true },
      { name: "iOS Native (Swift)", isKey: true },
      { name: "Android Native (Kotlin)", isKey: true },
      { name: "Platform Channels (MethodChannel)", isKey: true },
      { name: "Flutter Add-to-App" },
    ],
  },
  {
    category: "Architecture & State Management",
    description: "Layered architecture patterns, separation of concerns, and state flow",
    skills: [
      { name: "Clean Architecture (Feature-First)", isKey: true },
      { name: "Riverpod 2.x (StateNotifier / Code-Gen)", isKey: true },
      { name: "BLoC Pattern (flutter_bloc)", isKey: true },
      { name: "MVVM & VIPER" },
      { name: "Offline-First & Local Caching", isKey: true },
      { name: "Freezed & JSON Serializable" },
    ],
  },
  {
    category: "Data & Networking",
    description: "Network communications, real-time protocols, and client-side persistence",
    skills: [
      { name: "RESTful API Integration", isKey: true },
      { name: "WebSocket & Realtime Streaming", isKey: true },
      { name: "SQLite & Local Database", isKey: true },
      { name: "Cloud Firestore & Firebase Auth" },
      { name: "SharedPreferences & Hive" },
      { name: "Dio (Interceptors, Retry & Token Refresh)" },
    ],
  },
  {
    category: "Native Integration & Peripherals",
    description: "Hardware interfacing, POS peripherals, and platform capabilities",
    skills: [
      { name: "Kotlin Platform Channels", isKey: true },
      { name: "ESC/POS Thermal Receipt Printer", isKey: true },
      { name: "Hardware Barcode Scanner", isKey: true },
      { name: "iOS CallKit SDK (VoIP & Calling)" },
      { name: "Google Maps & Deep Linking" },
    ],
  },
  {
    category: "Delivery, Quality & DevOps",
    description: "Automated delivery pipelines, performance profiling, and test coverage",
    skills: [
      { name: "Unit Testing & Widget Testing", isKey: true },
      { name: "Fastlane Mobile Automation", isKey: true },
      { name: "GitHub Actions & GitLab CI/CD", isKey: true },
      { name: "Flutter DevTools (Profiler, Memory)" },
      { name: "Firebase Crashlytics & App Performance" },
    ],
  },
];

export const getSkillsData = (lang: Language = 'vi'): SkillGroup[] => {
  return lang === 'en' ? skillsDataEn : skillsDataVi;
};

export const skillsData = skillsDataVi;
