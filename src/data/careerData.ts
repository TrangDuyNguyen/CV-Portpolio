import { CareerItem } from '../types';
import { Language } from '../context/LanguageContext';

const careerDataVi: CareerItem[] = [
  {
    period: "2026 — Hiện tại",
    role: "Ứng dụng quét thực phẩm bằng AI và theo dõi dinh dưỡng",
    company: "ASTROBITE",
    project: "ASTROBITE — AI Food Scanner & Nutrition Tracker",
    type: "Dự án cá nhân | Flutter, Dart, Riverpod, Firebase, Google Gemini AI",
    summary: "Ứng dụng quét thực phẩm bằng AI và theo dõi dinh dưỡng đa nền tảng kết hợp Feature-First Architecture, Riverpod, Gemini Multimodal Vision, offline-first Firestore và voice logging tiếng Việt.",
    achievements: [
      "Thiết kế và phát triển ứng dụng Flutter đa nền tảng theo kiến trúc Feature-First Architecture, sử dụng Riverpod để quản lý trạng thái. Các chức năng chính bao gồm xác thực người dùng, ghi nhận thực phẩm, theo dõi calories và các chất dinh dưỡng đa lượng (macronutrients), phân tích dữ liệu dinh dưỡng, quản lý công thức nấu ăn và lập kế hoạch bữa ăn.",
      "Tích hợp Gemini Vision để phân tích hình ảnh món ăn bằng AI, nhận diện và phân tách nhiều món trong cùng một hình ảnh, đồng thời ước tính giá trị dinh dưỡng có cấu trúc, bao gồm calories, macronutrients, nước dùng và các thành phần đi kèm. Ngoài ra, tích hợp Open Food Facts API để tra cứu sản phẩm bằng mã vạch và sử dụng AI để trích xuất thông tin từ nhãn dinh dưỡng.",
      "Triển khai cơ chế ghi nhận thực phẩm có hỗ trợ offline, kết hợp local cache, hàng đợi dữ liệu chờ đồng bộ (pending-sync queue), cơ chế xử lý bản ghi trùng lặp và lưu trữ dữ liệu trên Cloud Firestore. Ứng dụng sử dụng các luồng dữ liệu thời gian thực để cập nhật thông tin, cùng với Firestore Security Rules nhằm giới hạn quyền truy cập dữ liệu theo từng người dùng.",
      "Phát triển AI Nutrition Coach có khả năng duy trì ngữ cảnh hội thoại, sử dụng Gemini multi-turn conversation và lưu lại lịch sử trò chuyện. Xây dựng các thành phần giao diện Flutter tương tác ngay trong cuộc hội thoại, cho phép người dùng thao tác và ghi nhận bữa ăn trực tiếp từ nội dung tư vấn.",
      "Xây dựng tính năng ghi nhận bữa ăn bằng giọng nói tiếng Việt, kết hợp Speech-to-Text để chuyển đổi lời nói thành văn bản và Gemini NLU để phân tích ý định, trích xuất thông tin món ăn từ ngôn ngữ tự nhiên, sau đó chuyển đổi thành dữ liệu dinh dưỡng có cấu trúc.",
      "Tự động hóa quy trình build và release cho Android và iOS bằng Fastlane và GitHub Actions. Thiết lập pipeline CI để thực hiện các bước build, đóng gói và quản lý artifact phục vụ quá trình phát hành ứng dụng.",
    ],
    technologies: [
      "Flutter", "Dart", "Riverpod", "AutoRoute", "Firebase Authentication", "Cloud Firestore",
      "Firebase App Check", "Google Generative AI SDK", "SharedPreferences", "Open Food Facts API", "Fastlane", "GitHub Actions"
    ],
  },
  {
    period: "08/2025 — 08/2026",
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
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo Social Travel Network",
    project: "Hệ sinh thái 6 ứng dụng: Mạng xã hội, OTT, Du lịch, Fintech & Outsource",
    type: "Enterprise Scale 1M+",
    summary: "Phát triển, bảo trì và vận hành hệ sinh thái đa sản phẩm gồm 6 ứng dụng trên iOS và Android, bao phủ các lĩnh vực Mạng xã hội Du lịch, Nhắn tin OTT, Fintech và Outsource Nông nghiệp thủy sản.",
    achievements: [
      "[Hahalolo — Mạng xã hội Du lịch] Phát triển ứng dụng mạng xã hội du lịch đạt 1M+ lượt tải với các phân hệ Tour, Flight, Hotel, Community Site, Handnotes. Xây dựng module Native iOS (Swift, Autolayout) theo kiến trúc VIPER. Tích hợp Google Maps, Deep Linking, Autoplay Video. Quản lý dependency qua Cocoapods. Tích hợp các module Flutter qua cơ chế Add-to-App. Giám sát bằng Firebase Crashlytics. Team Mobile: 20 người.",
      "[Halome — Nhắn tin OTT Realtime] Xây dựng ứng dụng nhắn tin (hỗ trợ đăng nhập ẩn danh & SSO Hahalolo) bằng Native iOS Swift theo kiến trúc MVVM. Tích hợp Starscream (WebSocket) cho giao tiếp realtime, Alamofire gọi API, IG List hiển thị mượt mà cuộc trò chuyện, RxSwift cho reactive data binding, SQLite lưu trữ tin nhắn offline. Triển khai CallKit SDK cho cuộc gọi âm thanh và video, DeepLink mở luồng chat từ web, chia sẻ đa phương tiện & vị trí. Team Mobile iOS: 5 người.",
      "[Haloki & Hahalolo Invest — Fintech] Tối ưu hóa và bảo mật luồng giao dịch tài chính cho ứng dụng chuyển tiền quốc tế (192 quốc gia) và giao dịch cổ phiếu bằng Flutter: triển khai xác thực KYC an toàn, mã hóa dữ liệu cục bộ (SQLite/Keychain) và tối ưu hóa biểu đồ realtime không drop frames.",
      "[Aquannets — Outsource cho Galactic Holdings] Phát triển ứng dụng quản lý nuôi trồng thủy sản (outsource cho Tập đoàn Galactic Holdings) bằng Flutter. Áp dụng Clean Architecture kết hợp Riverpod, lưu trữ dữ liệu local bằng SQLite cho chế độ offline-first tại ao nuôi. Team Mobile: 2 người.",
      "[SocTrip — QC & Kiểm thử] Đảm nhận vai trò QC (Quality Control) cho ứng dụng mạng xã hội du lịch SocTrip: kiểm thử đầu cuối (end-to-end testing), viết test cases, regression testing và xác nhận chất lượng trước mỗi lần release lên Store.",
    ],
    technologies: [
      "iOS Swift", "Autolayout", "VIPER", "MVVM", "RxSwift", "Starscream", "Alamofire", "IG List", "SQLite",
      "CallKit", "Flutter", "Add-to-App", "Clean Architecture", "Riverpod",
      "Firebase", "KYC", "Bitrise"
    ],
  },
];

const careerDataEn: CareerItem[] = [
  {
    period: "2026 — Present",
    role: "AI Food Scanner & Nutrition Tracker",
    company: "ASTROBITE",
    project: "ASTROBITE — AI Food Scanner & Nutrition Tracker",
    type: "Personal Project | Flutter, Dart, Riverpod, Firebase, Google Gemini AI",
    summary: "Cross-platform AI food scanner and nutrition tracker built with Feature-First Architecture, Riverpod, Gemini Multimodal Vision, offline-first Firestore, and Vietnamese voice meal logging.",
    achievements: [
      "Designed and developed a cross-platform Flutter application using Feature-First Architecture and Riverpod, implementing user authentication, food tracking, calorie and macronutrient dashboards, nutrition analytics, custom recipes, and meal planning.",
      "Integrated Gemini multimodal Vision to analyze meal images and extract structured nutritional data, including multi-dish decomposition, broth and topping estimation; added barcode lookup through Open Food Facts and AI-powered nutrition label parsing.",
      "Implemented offline-capable food logging with local caching, a pending-sync queue, duplicate handling, and Firestore-backed persistence and real-time data streams, supported by user-scoped Firestore security rules.",
      "Built a context-aware AI Nutrition Coach using Gemini multi-turn conversations, persisted chat history, and custom interactive Flutter components for in-chat meal logging.",
      "Developed Vietnamese voice-based meal logging by combining speech-to-text recognition with Gemini NLU to transform natural-language transcripts into structured nutrition records.",
      "Automated Android and iOS release build workflows using Fastlane and GitHub Actions, with successful release build jobs and artifact generation for both platforms.",
    ],
    technologies: [
      "Flutter", "Dart", "Riverpod", "AutoRoute", "Firebase Authentication", "Cloud Firestore",
      "Firebase App Check", "Google Generative AI SDK", "SharedPreferences", "Open Food Facts API", "Fastlane", "GitHub Actions"
    ],
  },
  {
    period: "08/2025 — 08/2026",
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
    role: "Mobile Developer (iOS & Flutter)",
    company: "Hahalolo Social Travel Network",
    project: "Ecosystem of 6 Apps: Social Network, OTT, Travel, Fintech & Outsource",
    type: "Enterprise Scale (1M+ Downloads)",
    summary: "Developed, maintained and operated a multi-product ecosystem of 6 applications across iOS and Android, spanning Travel Social Networking, OTT Messaging, Fintech and Aquaculture Outsource.",
    achievements: [
      "[Hahalolo — Travel Social Network] Developed flagship travel social app (Tour, Flight, Hotel, Handnotes) achieving 1M+ downloads. Built native iOS modules (Swift, Autolayout) following VIPER architecture and Cocoapods. Integrated Maps, Deep Linking, Autoplay Video, Firebase Crashlytics. Added Flutter modules via Add-to-App mechanism. Mobile team size: 20.",
      "[Halome — OTT Realtime Messaging] Engineered real-time messaging app (SSO, Anonymous login) using Native iOS Swift with MVVM architecture. Integrated Starscream (WebSocket) for real-time communication, Alamofire for API, IG List for chat rendering, RxSwift for reactive data binding, SQLite for offline message storage. Implemented CallKit SDK for audio/video calls, multimedia/location sharing, and DeepLink for web-to-app chats. Mobile iOS team size: 5.",
      "[Haloki & Hahalolo Invest — Fintech] Engineered and secured financial transaction workflows for international remittance (192 countries) and stock trading in Flutter: implemented robust KYC verification, local encrypted persistence (SQLite/Keychain), and smooth real-time financial charting without frame drops.",
      "[Aquannets — Outsource for Galactic Holdings] Developed an aquaculture farm management application (outsourced for Galactic Holdings Group) using Flutter. Applied Clean Architecture with Riverpod state management, SQLite for offline-first local data storage at farming ponds. Mobile team size: 2.",
      "[SocTrip — QC & Testing] Served as QC (Quality Control) for the SocTrip travel social network app: end-to-end testing, writing test cases, regression testing and quality sign-off before each Store release.",
    ],
    technologies: [
      "iOS Swift", "Autolayout", "VIPER", "MVVM", "RxSwift", "Starscream", "Alamofire", "IG List", "SQLite",
      "CallKit", "Flutter", "Add-to-App", "Clean Architecture", "Riverpod",
      "Firebase", "KYC", "Bitrise"
    ],
  },
];

export const getCareerData = (lang: Language = 'vi'): CareerItem[] => {
  return lang === 'en' ? careerDataEn : careerDataVi;
};

export const careerData = careerDataVi;
