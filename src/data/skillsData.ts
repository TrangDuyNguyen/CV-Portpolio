import { SkillGroup } from '../types';
import { Language } from '../context/LanguageContext';

const skillsDataVi: SkillGroup[] = [
  {
    category: "Mobile Development",
    description: "Phát triển ứng dụng di động đa nền tảng và native",
    skills: [
      { name: "Flutter", isKey: true },
      { name: "Dart", isKey: true },
      { name: "Native iOS (Swift)", isKey: true },
      { name: "Native Android (Kotlin)", isKey: true },
      { name: "Platform Channels", isKey: true },
      { name: "Add-to-App" },
    ],
  },
  {
    category: "Architecture & State Management",
    description: "Cấu trúc phần mềm, quản lý trạng thái và luồng dữ liệu",
    skills: [
      { name: "Clean Architecture", isKey: true },
      { name: "State Management (Riverpod, BLoC)", isKey: true },
      { name: "Modularization", isKey: true },
      { name: "Reactive Programming (RxSwift)", isKey: true },
      { name: "Offline-First Design", isKey: true },
    ],
  },
  {
    category: "Platform & Integration",
    description: "Giao tiếp mạng, phần cứng và dịch vụ tích hợp",
    skills: [
      { name: "REST API", isKey: true },
      { name: "WebSocket & Realtime", isKey: true },
      { name: "Firebase (Firestore, Auth)", isKey: true },
      { name: "SQLite Local Storage", isKey: true },
      { name: "Native Hardware Integration", isKey: true },
    ],
  },
  {
    category: "Delivery & Quality",
    description: "Quy trình phát hành, tự động hóa và đo lường hiệu năng",
    skills: [
      { name: "CI/CD & Fastlane", isKey: true },
      { name: "GitHub Actions", isKey: true },
      { name: "Debugging & Profiling", isKey: true },
      { name: "Performance Optimization", isKey: true },
      { name: "Unit & Widget Testing" },
    ],
  },
];

const skillsDataEn: SkillGroup[] = [
  {
    category: "Mobile Development",
    description: "Cross-platform and native mobile application engineering",
    skills: [
      { name: "Flutter", isKey: true },
      { name: "Dart", isKey: true },
      { name: "Native iOS (Swift)", isKey: true },
      { name: "Native Android (Kotlin)", isKey: true },
      { name: "Platform Channels", isKey: true },
      { name: "Add-to-App" },
    ],
  },
  {
    category: "Architecture & State Management",
    description: "Software structure, state lifecycle, and data flow",
    skills: [
      { name: "Clean Architecture", isKey: true },
      { name: "State Management (Riverpod, BLoC)", isKey: true },
      { name: "Modularization", isKey: true },
      { name: "Reactive Programming (RxSwift)", isKey: true },
      { name: "Offline-First Design", isKey: true },
    ],
  },
  {
    category: "Platform & Integration",
    description: "Networking, peripheral hardware, and service integrations",
    skills: [
      { name: "REST API", isKey: true },
      { name: "WebSocket & Realtime", isKey: true },
      { name: "Firebase (Firestore, Auth)", isKey: true },
      { name: "SQLite Local Storage", isKey: true },
      { name: "Native Hardware Integration", isKey: true },
    ],
  },
  {
    category: "Delivery & Quality",
    description: "Release automation, profiling, and quality pipelines",
    skills: [
      { name: "CI/CD & Fastlane", isKey: true },
      { name: "GitHub Actions", isKey: true },
      { name: "Debugging & Profiling", isKey: true },
      { name: "Performance Optimization", isKey: true },
      { name: "Unit & Widget Testing" },
    ],
  },
];

export const getSkillsData = (lang: Language = 'en'): SkillGroup[] => {
  return lang === 'en' ? skillsDataEn : skillsDataVi;
};
