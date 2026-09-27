import { CareerItem } from '../types';

export const careerData: CareerItem[] = [
  {
    period: "2026 — Hiện tại",
    role: "Owner & Core Developer",
    company: "AstroBite Ecosystem",
    project: "AI Food Scanner & GenUI Calorie/Macro Tracker (v2.0.0)",
    type: "Dự Án Cá Nhân",
    summary: "Chủ trì xây dựng ứng dụng di động phân tích dinh dưỡng đa lượng tức thì bằng trí tuệ nhân tạo Gemini Multimodal Vision AI và giao thức Flutter GenUI A2UI.",
    achievements: [
      "Xây dựng trọn vẹn kiến trúc Clean Architecture Feature-First với Riverpod 2.x code-gen trên 10 phân hệ nghiệp vụ độc lập.",
      "Tối ưu pipeline giải phóng camera frame buffer, đảm bảo độ trễ AI dưới 2.5 giây và triệt tiêu 100% rò rỉ RAM (0 memory leak).",
      "Tiên phong triển khai giao thức A2UI biến JSON từ Gemini thành Native Widgets tương tác trực tiếp trong chat (1-Tap Log).",
      "Xây dựng tiện ích màn hình chính / màn hình khóa (iOS WidgetKit & Android AppWidget) phản ứng không hao pin ngầm.",
      "Đạt tỷ lệ 198/198 automated unit & widget tests pass 100% và tự động hóa release với Fastlane & GitHub Actions.",
    ],
    technologies: [
      "Flutter", "Dart", "Riverpod 2.6", "Google Gemini 3.8", "GenUI (A2UI)",
      "iOS WidgetKit", "Android AppWidget", "Firebase", "Fastlane", "CI/CD"
    ],
  },
  {
    period: "06/2025 — 08/2025",
    role: "Mobile Developer",
    company: "Finviet Technology",
    project: "Hệ sinh thái F&B POS & Kiosk Tự Phục Vụ",
    type: "Commercial Production",
    summary: "Phát triển và vận hành hệ thống Kiosk tự gọi món và POS thu ngân chuỗi bán lẻ / nhà hàng trên nền tảng Flutter và Android Native.",
    achievements: [
      "Bàn giao các module Kiosk tự gọi món (Self-Order Kiosk) và Thu ngân, giúp rút ngắn thời gian giao dịch đặt món xuống 30%.",
      "Thiết kế luồng đồng bộ đơn hàng Offline-first sử dụng Clean Architecture, BLoC và SQLite, đảm bảo không bao giờ mất đơn khi rớt mạng.",
      "Tự phát triển Android Platform Channels (Kotlin) chuyên dụng kết nối máy in hóa đơn nhiệt ESC/POS và máy quét mã vạch phần cứng.",
      "Thiết lập pipeline tự động hóa CI/CD build và release cho Android & iOS bằng Fastlane và GitHub Actions.",
    ],
    technologies: [
      "Flutter", "Android Kotlin", "BLoC", "SQLite", "Platform Channels",
      "ESC/POS Thermal Printer", "Barcode Scanner", "Fastlane"
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
