import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "2026 — Hiện tại",
    role: "Mobile Engineer & System Architect",
    company: "AstroBite Ecosystem",
    project: "AstroBite — Smart AI Food Scanner (v2.5.1)",
    type: "Personal Flagship Project",
    summary: "Chủ trì kiến trúc và phát triển toàn diện hệ sinh thái AstroBite v2.5.1: nhận diện món ăn trong < 2.5s bằng Google Gemini Multimodal Vision AI, ngôn ngữ thiết kế Đất nặn 3D Solar Fresh và giao thức GenUI A2UI.",
    achievements: [
      "Thiết kế trọn vẹn kiến trúc Feature-First Clean Architecture kết hợp Riverpod 2.x code-gen trên 10 phân hệ nghiệp vụ độc lập.",
      "Tối ưu pipeline giải phóng Camera buffer độc lập, đạt độ trễ AI dưới 2.5s và triệt tiêu 100% rò rỉ RAM (0 memory leak).",
      "Tiên phong triển khai giao thức A2UI biến phản hồi JSON từ Gemini thành Native Widgets tương tác trực tiếp trong chat (1-Tap Log).",
      "Nghiên cứu và phát triển Design System Claymorphic 3D độc bản bằng Flutter native primitives với hiệu ứng tactile squash 0.98, đạt chuẩn 60 FPS.",
      "Xây dựng tiện ích màn hình khóa (iOS WidgetKit & Android AppWidget) phản ứng không hao pin ngầm và cơ chế Khiên Sao (Starlight Streak Shield).",
      "Đạt tỷ lệ 226/226 automated unit & widget tests pass 100%, 0 lint warnings; tự động hóa release với Fastlane & GitHub Actions.",
    ],
    technologies: [
      "Flutter 3.x", "Dart 3.x", "Riverpod 2.6", "Google Gemini AI", "GenUI (A2UI)",
      "Claymorphic 3D", "iOS WidgetKit", "Android AppWidget", "Firebase", "Fastlane", "226 Tests"
    ],
  },
  {
    period: "06/2025 — 08/2025",
    role: "Mobile Developer",
    company: "Finviet Technology",
    project: "Hệ sinh thái POS Kiosk Đa Ngành (F&B, Bán Lẻ & Dịch Vụ Spa)",
    type: "Commercial Production",
    summary: "Phát triển và vận hành hệ thống POS bán hàng, Kiosk tự phục vụ, quản lý kho vận, bảng giá và phân quyền tính năng chuyên biệt cho 3 mô hình: F&B (Nhà hàng/Cafe), Bán lẻ (Chuỗi cửa hàng) và Dịch vụ Spa (Đặt lịch, liệu trình) trên Flutter và Android Native.",
    achievements: [
      "Xây dựng màn hình bán hàng POS & Kiosk tự phục vụ tối ưu theo 3 mô hình kinh doanh: F&B (sơ đồ bàn, combo món, in bếp), Bán lẻ (quét mã vạch barcode, giỏ hàng nhanh) và Dịch vụ Spa (chọn kỹ thuật viên, đặt lịch và quản lý gói liệu trình), giúp rút ngắn 30% thời gian giao dịch.",
      "Thiết kế hệ thống phân quyền tính năng (RBAC) chặt chẽ giữa các vai trò theo từng mô hình (Thu ngân F&B, Thủ kho bán lẻ, Kỹ thuật viên / Lễ tân Spa, Quản trị chi nhánh).",
      "Phát triển module Quản lý Hàng hóa & Bảng giá đa cấp linh hoạt: biểu giá theo chi nhánh, giá dịch vụ/gói liệu trình Spa, combo món F&B và khuyến mãi tự động.",
      "Xây dựng phân hệ Quản lý Kho vận: quy trình tạo phiếu nhập kho, phiếu xuất kho, theo dõi điều chuyển và kiểm soát tồn kho tức thời (real-time inventory).",
      "Triển khai module Báo cáo & Thống kê trực quan: phân tích doanh thu theo ca, báo cáo bán hàng đa mô hình (F&B, Bán lẻ, Spa) và tổng hợp biến động xuất/nhập/tồn kho.",
      "Thiết kế luồng đồng bộ đơn hàng Offline-first sử dụng Clean Architecture, BLoC và SQLite, đảm bảo 100% đơn hàng được ghi nhận và tự đồng bộ khi có mạng.",
      "Tự phát triển Android Platform Channels (Kotlin) chuyên dụng kết nối máy in hóa đơn nhiệt ESC/POS và máy quét mã vạch phần cứng.",
      "Thiết lập pipeline tự động hóa CI/CD build và release cho Android & iOS bằng Fastlane và GitHub Actions.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "Platform Channels",
      "ESC/POS Thermal Printer", "Barcode Scanner", "RBAC", "Fastlane"
    ],
  },
  {
    period: "05/2020 — 06/2025 (5 năm)",
    role: "Mobile Developer",
    company: "Hahalolo Social Travel Network",
    project: "Mạng xã hội Du lịch Hahalolo & Ứng dụng OTT Halome",
    type: "Enterprise Scale 1M+",
    summary: "Phát triển và duy trì ứng dụng mạng xã hội du lịch quy mô lớn và hệ thống nhắn tin tức thời đa nền tảng trên iOS và Android.",
    achievements: [
      "Vận hành và mở rộng ứng dụng đạt quy mô hơn 1.000.000 lượt tải (1M+) trên Apple App Store và Google Play Store.",
      "Xây dựng từ đầu hệ thống nhắn tin Halome, hỗ trợ chat, gửi media và gọi thoại/video độ trễ thấp qua WebSocket và Socket.IO.",
      "Phát triển module native iOS bằng Swift, SwiftUI và UIKit, tích hợp mượt mà với các module Flutter qua giải pháp Add-to-App.",
      "Tích hợp Firebase FCM với iOS CallKit cho cuộc gọi đến màn hình khóa, duy trì độ ổn định 99.5%+ crash-free qua Crashlytics.",
      "Tối ưu vòng đời render và bộ nhớ, đảm bảo tốc độ khung hình 60 FPS mượt mà trên cả các thiết bị cấu hình yếu.",
    ],
    technologies: [
      "iOS Swift", "SwiftUI", "UIKit", "Flutter Add-to-App", "WebSocket",
      "Socket.IO", "CallKit", "Firebase Crashlytics", "Bitrise"
    ],
  },
];

const careerDataEn: CareerItem[] = [
  {
    period: "2026 — Present",
    role: "Mobile Engineer & System Architect",
    company: "AstroBite Ecosystem",
    project: "AstroBite — Smart AI Food Scanner (v2.5.1)",
    type: "Personal Flagship Project",
    summary: "Architected and engineered the AstroBite v2.5.1 ecosystem: instant food recognition in < 2.5s via Google Gemini Multimodal Vision AI, 3D Claymorphic UI, and Flutter GenUI (A2UI protocol).",
    achievements: [
      "Constructed a complete Feature-First Clean Architecture utilizing Riverpod 2.x code-generation across 10 modularized business features.",
      "Engineered an efficient camera frame streaming buffer pipeline, achieving AI response latency < 2.5s with zero memory leaks (0 bytes leak).",
      "Pioneered Flutter GenUI (A2UI protocol) dynamically converting Gemini JSON payloads into interactive native chat widgets with 1-tap Firestore logging.",
      "Architected a custom tactile 3D Claymorphic Design System natively in Flutter without external third-party dependencies, delivering smooth 60 FPS.",
      "Developed reactive cross-platform home screen widgets (iOS WidgetKit & Android AppWidget) with zero battery drain and Starlight Streak Shield gamification.",
      "Achieved 100% passing rate across 226/226 automated unit & widget tests; zero lint warnings; automated CI/CD via Fastlane & GitHub Actions.",
    ],
    technologies: [
      "Flutter 3.x", "Dart 3.x", "Riverpod 2.6", "Google Gemini AI", "GenUI (A2UI)",
      "Claymorphic 3D", "iOS WidgetKit", "Android AppWidget", "Firebase", "Fastlane", "226 Tests"
    ],
  },
  {
    period: "06/2025 — 08/2025",
    role: "Mobile Developer",
    company: "Finviet Technology",
    project: "Multi-Industry POS Kiosk Ecosystem (F&B, Retail & Spa Services)",
    type: "Commercial Production",
    summary: "Engineered and maintained commercial POS checkout applications, self-order kiosks, inventory warehouse management, dynamic price policies, and role-based permissions customized for 3 business verticals: F&B (Restaurants/Cafes), Retail (Store Chains), and Spa Services (Appointments & Treatment Packages) on Flutter & Android Native.",
    achievements: [
      "Engineered dedicated POS & self-order Kiosk screens optimized across 3 business verticals: F&B (floor/table layout, food combos, kitchen ticket printing), Retail (barcode scanning, rapid checkout cart), and Spa Services (technician selection, appointment booking, package tracking), reducing transaction time by 30%.",
      "Designed a robust Role-Based Access Control (RBAC) security system across operating roles (Cashier, Warehouse keeper, Spa technician/receptionist, Branch manager).",
      "Built a flexible Goods & Multi-tier Pricing Policy module: branch-specific pricing, spa treatment packages, F&B combos, and automated discount rules.",
      "Developed comprehensive Warehouse Management subsystem: stock-in/stock-out receipts, inventory transfers, and real-time stock balance tracking.",
      "Implemented insightful Reporting & Analytics module: shift revenue, multi-model sales breakdown (F&B, Retail, Spa), and stock movement reconciliation.",
      "Architected offline-first order synchronization with Clean Architecture, BLoC, and SQLite, ensuring 100% order capture and auto-sync upon reconnection.",
      "Developed custom Android Platform Channels (Kotlin) interfacing with ESC/POS thermal receipt printers and hardware barcode scanners.",
      "Established automated CI/CD build and delivery pipelines for Android & iOS using Fastlane and GitHub Actions.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "Platform Channels",
      "ESC/POS Thermal Printer", "Barcode Scanner", "RBAC", "Fastlane"
    ],
  },
  {
    period: "05/2020 — 06/2025 (5 years)",
    role: "Mobile Developer",
    company: "Hahalolo Social Travel Network",
    project: "Hahalolo Travel Social Network & Halome OTT Communication",
    type: "Enterprise Scale (1M+ Downloads)",
    summary: "Engineered and scaled a high-concurrency travel social network mobile platform and real-time OTT communication application across iOS and Android.",
    achievements: [
      "Maintained and scaled the flagship mobile app to exceed 1,000,000+ production downloads (1M+) on Apple App Store and Google Play Store.",
      "Engineered the Halome real-time messaging subsystem from the ground up, supporting chat, multimedia delivery, and low-latency audio/video calls via WebSocket & Socket.IO.",
      "Developed high-performance native iOS modules using Swift, SwiftUI, and UIKit, seamlessly integrating into Flutter via Flutter Add-to-App.",
      "Integrated Firebase Cloud Messaging (FCM) with iOS CallKit for lock-screen incoming calls; sustained a 99.5%+ crash-free session rate via Crashlytics.",
      "Optimized rendering lifecycles, widget rebuild cascades, and memory usage, locking smooth 60 FPS performance even on resource-constrained devices.",
    ],
    technologies: [
      "iOS Swift", "SwiftUI", "UIKit", "Flutter Add-to-App", "WebSocket",
      "Socket.IO", "CallKit", "Firebase Crashlytics", "Bitrise"
    ],
  },
];

export const getCareerData = (lang: Language = 'vi'): CareerItem[] => {
  return lang === 'en' ? careerDataEn : careerDataVi;
};

export const careerData = careerDataVi;
