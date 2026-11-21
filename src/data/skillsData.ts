import { SkillGroup } from '../types';
import { Language } from '../context/LanguageContext';

const skillsDataVi: SkillGroup[] = [
  {
    category: "Mobile Core & Native",
    description: "Phát triển song song Flutter đa nền tảng và Native iOS / Android",
    iconName: "smartphone",
    proofPoint: "Hahalolo (iOS Swift VIPER + Flutter Add-to-App), Halome (Swift MVVM + CallKit), Finviet (Kotlin Platform Channels).",
    skills: [
      { name: "Flutter 3.x & Dart", isKey: true },
      { name: "Native iOS (Swift / UIKit)", isKey: true },
      { name: "Android (Kotlin)", isKey: true },
      { name: "Platform Channels", isKey: true },
      { name: "Add-to-App" },
      { name: "WidgetKit & AppWidget" },
    ],
  },
  {
    category: "Kiến Trúc & Quản Lý State",
    description: "Phân tách module rõ ràng, dễ mở rộng và cô lập phạm vi kiểm thử",
    iconName: "layers",
    proofPoint: "AstroBite (12 modules Clean Architecture + Riverpod 2.6 code-gen), ECO POS (BLoC + Drift), Hahalolo (VIPER).",
    skills: [
      { name: "Clean Architecture (Feature-First)", isKey: true },
      { name: "Riverpod 2.6 (AsyncNotifier)", isKey: true },
      { name: "BLoC (flutter_bloc)", isKey: true },
      { name: "VIPER & MVVM", isKey: true },
      { name: "RxSwift" },
      { name: "AutoRoute / GoRouter" },
    ],
  },
  {
    category: "Offline-First, Mạng & Phần Cứng",
    description: "Đảm bảo không mất dữ liệu khi rớt mạng và giao tiếp thiết bị ngoại vi",
    iconName: "cpu",
    proofPoint: "POS Sunmi/iMin in bill nhiệt ESC/POS, quét mã vạch & lưu đơn SQLite; chat Halome chạy Starscream WebSocket.",
    skills: [
      { name: "SQLite / Drift Offline Queue", isKey: true },
      { name: "Base Dio Client (Auto-Refresh 401)", isKey: true },
      { name: "WebSocket / Starscream", isKey: true },
      { name: "ESC/POS Printer & Barcode", isKey: true },
      { name: "Firebase & Firestore" },
      { name: "Gemini Vision / NLU & GenUI" },
    ],
  },
  {
    category: "Hiệu Năng, Kiểm Thử & CI/CD",
    description: "Đo bằng công cụ thực tế và tự động hóa quy trình đóng gói bản dựng",
    iconName: "terminal",
    proofPoint: "277/277 unit & widget tests pass 100% trên AstroBite; soi Memory/Profiler giữ 60 FPS và >99.5% crash-free.",
    skills: [
      { name: "Flutter DevTools (Profiler/Memory)", isKey: true },
      { name: "RepaintBoundary (60 FPS)", isKey: true },
      { name: "277+ Automated Tests", isKey: true },
      { name: "Fastlane & GitHub Actions", isKey: true },
      { name: "GitLab CI/CD" },
      { name: "Firebase Crashlytics" },
    ],
  },
];

const skillsDataEn: SkillGroup[] = [
  {
    category: "Mobile Core & Native",
    description: "Production delivery across cross-platform Flutter and Native iOS / Android",
    iconName: "smartphone",
    proofPoint: "Hahalolo (iOS Swift VIPER + Flutter Add-to-App), Halome (Swift MVVM + CallKit), Finviet (Kotlin Platform Channels).",
    skills: [
      { name: "Flutter 3.x & Dart", isKey: true },
      { name: "Native iOS (Swift / UIKit)", isKey: true },
      { name: "Android (Kotlin)", isKey: true },
      { name: "Platform Channels", isKey: true },
      { name: "Add-to-App" },
      { name: "WidgetKit & AppWidget" },
    ],
  },
  {
    category: "Architecture & State Management",
    description: "Feature-first modularization with strict unidirectional data flow",
    iconName: "layers",
    proofPoint: "AstroBite (12 Clean Architecture modules + Riverpod 2.6 code-gen), ECO POS (BLoC + Drift), Hahalolo (VIPER).",
    skills: [
      { name: "Clean Architecture (Feature-First)", isKey: true },
      { name: "Riverpod 2.6 (AsyncNotifier)", isKey: true },
      { name: "BLoC (flutter_bloc)", isKey: true },
      { name: "VIPER & MVVM", isKey: true },
      { name: "RxSwift" },
      { name: "AutoRoute / GoRouter" },
    ],
  },
  {
    category: "Offline-First, Network & Hardware",
    description: "Local persistence when connectivity drops and native peripheral control",
    iconName: "cpu",
    proofPoint: "Sunmi/iMin POS ESC/POS thermal printing, hardware barcode scanning & SQLite queue; Halome Starscream WebSocket.",
    skills: [
      { name: "SQLite / Drift Offline Queue", isKey: true },
      { name: "Base Dio Client (401 Refresh)", isKey: true },
      { name: "WebSocket / Starscream", isKey: true },
      { name: "ESC/POS Printer & Barcode", isKey: true },
      { name: "Firebase & Firestore" },
      { name: "Gemini Vision / NLU & GenUI" },
    ],
  },
  {
    category: "Performance, Testing & CI/CD",
    description: "Profiling with DevTools and automating store/tester distributions",
    iconName: "terminal",
    proofPoint: "277/277 unit & widget tests passing on AstroBite; DevTools memory profiling holding 60 FPS and 99.5%+ crash-free.",
    skills: [
      { name: "Flutter DevTools (Profiler/Memory)", isKey: true },
      { name: "RepaintBoundary (60 FPS)", isKey: true },
      { name: "277+ Automated Tests", isKey: true },
      { name: "Fastlane & GitHub Actions", isKey: true },
      { name: "GitLab CI/CD" },
      { name: "Firebase Crashlytics" },
    ],
  },
];

export const getSkillsData = (lang: Language = 'en'): SkillGroup[] => {
  return lang === 'en' ? skillsDataEn : skillsDataVi;
};
