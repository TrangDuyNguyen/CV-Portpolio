# Nguyen Duy Trang: hồ sơ gốc

Hồ sơ gốc dùng để sinh CV, LinkedIn và portfolio.

---

## 1. Thông tin cá nhân và định vị

* Họ và tên: NGUYEN DUY TRANG
* Ngày sinh: 10/04/2000
* Vị trí mục tiêu: Mobile Engineer (Flutter, iOS, Android, Clean Architecture)
* Kinh nghiệm: 5+ năm phát triển ứng dụng di động và frontend thương mại quy mô lớn.
* Địa điểm: TP. Hồ Chí Minh, Việt Nam
* Số điện thoại: [0397308962](tel:0397308962)
* Email: [trangndps10349@gmail.com](mailto:trangndps10349@gmail.com)
* GitHub: [github.com/TrangDuyNguyen](https://github.com/TrangDuyNguyen)
* LinkedIn: [linkedin.com/in/nguyễn-duy-tráng-132567224](https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/)
* Trạng thái: sẵn sàng cho các cơ hội Mobile Engineer.

### Elevator pitch

> Mobile Engineer với hơn 5 năm làm ứng dụng di động và đa nền tảng (Flutter, iOS, Android, Web/Kiosk). Dùng Clean Architecture, MVVM, BLoC (flutter_bloc) và Riverpod với Unidirectional Data Flow, và đã dựng Core Design System, Base Dio Client (Interceptors, Auto-Refresh Token, Retry) và Global Error Handling. Dùng Flutter DevTools (Profiler, Memory, Network) trên Widget/Element/RenderObject để giữ 60 FPS và 0 memory leak. Có kinh nghiệm Flutter Web (GoRouter/AutoRoute, CanvasKit/WASM, asset caching). Đã vận hành sản phẩm 1M+ downloads, dựng CI/CD (Fastlane, GitHub Actions, GitLab CI/CD, Docker), code review và mentoring.

---

## 2. Chỉ số đã xác minh

| Chỉ số | Phạm vi và dự án | Ý nghĩa kỹ thuật |
| :--- | :--- | :--- |
| 1M+ downloads | Hahalolo và Halome | Xây dựng và duy trì ứng dụng mạng xã hội và nhắn tin trên iOS và Android. |
| 99.5%+ crash-free | Production (Crashlytics) | Quản lý vòng đời bộ nhớ, bắt ngoại lệ và tối ưu render 60 FPS. |
| -30% thời gian giao dịch | Finviet F&B POS Kiosk | Tối ưu UI/UX flow và xử lý bất đồng bộ trong Kiosk tự phục vụ. |
| 277 tests pass 100% | AstroBite (`flutter test`) | 277 test từ 12 module Domain, Repositories, Notifiers đến Widget UI đều pass, 0 cảnh báo. |
| < 2.5s latency, 60 FPS | AstroBite AI Scanner và Claymorphic UI | Nhận diện món ăn bằng Gemini dưới 2.5s, hiển thị 60 FPS, 0 memory leak. |

---

## 3. Dự án tiêu biểu: AstroBite (v3.0.0)

> Tên dự án: AstroBite, Smart AI Food Scanner và Voice Calorie Tracker  
> Vai trò: Mobile Engineer và System Architect  
> Nền tảng: Flutter 3.x, iOS và Android. Backend và AI: Google Gemini 3.8 Flash Vision và NLU, Firebase  
> Kiến trúc: Feature-First Clean Architecture (12 module độc lập), Riverpod 2.x, Flutter Generative UI (GenUI), Ponytail Mindset  
> Phiên bản mới nhất: `v3.0.0` (ghi chép rảnh tay AstroVoice AI, tách ẩm thực Á Đông, Social Leaderboard, 277 test pass 100%).

---

### 3.1. Góc nhìn sản phẩm (12 tính năng)

#### Bài toán

* Thói quen bỏ dở sau 3-5 ngày: hơn 90% người ăn kiêng bỏ cuộc vì tra cứu và cân đo từng gam thức ăn mất thời gian.
* Ẩm thực Á Đông: người Việt thường húp ít nước phở, bún bò, bỏ sốt mayonnaise hoặc bớt pate khi ăn bánh mì. Các app nước ngoài tính cả tô nên calo và natri bị lệch.
* Bận tay: khi nấu ăn, bưng bê hoặc lái xe thì không gõ phím được.
* Giao diện khô: hầu hết app đếm calo mang màu y tế lạnh, dễ gây áp lực.

#### Giải pháp

AstroBite kết hợp Gemini (Vision và NLU) với giao diện Claymorphic 3D:

1. Quét món ăn bằng camera (Gemini Vision Scanner):
   * Chụp một đĩa cơm hoặc cả bàn ăn, AI phân tích trong dưới 2.5 giây, tách từng món và ước tính tổng calo cùng 3 chất đa lượng, mỗi chất một màu: Carbs xanh dương `#1CB0F6`, Protein cam `#FF9600`, Fat hồng `#FF5C8D`.
2. Ghi chép bằng giọng nói tiếng Việt (AstroVoice AI, v3.0.0):
   * Bấm Mic và nói: *"Sáng nay mình ăn một tô bún bò giò heo với hai cái quẩy"* hoặc *"Uống 1 ly cà phê sữa đá ít đường"*.
   * App nhận tiếng Việt có dấu (`vi-VN`) với streaming transcript, hiểu các đơn vị thường gặp (tô, bát, đĩa, cái, quả, ly, cốc), đoán bữa ăn theo giờ 24h và hiện thẻ GenUI. Bấm Lưu một chạm mất khoảng 45ms (độ trễ AI khoảng 1.1s).
3. Tách nước dùng và topping (v2.9.0):
   * AI tách "cái" (thịt bò, bánh phở) khỏi nước dùng. Công tắc `[Ăn cả nước / Chỉ ăn cái]` trừ calo và giảm hơn 65% natri tương ứng.
   * Với combo như cơm tấm sườn bì chả hay bánh mì, checklist topping cho phép bỏ từng món (chả trứng, chén nước mắm đường) và calo đổi theo ngay.
4. Trợ lý AI Coach (Interactive GenUI Chat và Voice Input):
   * Người dùng chat bằng bàn phím hoặc giọng nói tiếng Việt:
     - Chạm Mic trong ô chat: Speech-to-Text tiếng Việt điền câu nói vào ô chat.
     - Nhấn giữ Mic: mở modal AstroVoice Sheet để tách món và ghi nhật ký một chạm, không đổi màn hình.
   * AI trả về thẻ món ăn tương tác ngay trong chat, có nút tăng giảm khẩu phần (+/-20g) và nút `[1-Chạm Lưu]` vào nhật ký.
5. Giao diện đất nặn 3D Solar Fresh (Claymorphic UI):
   * Nút bấm, thanh tiến độ và thẻ món ăn phồng mềm, co lại 0.98 scale khi nhấn giữ, trên nền kem `#FAF8F5`.
   * Ghi chép bữa ăn thành thao tác nhẹ nhàng, tạo lý do mở app mỗi ngày.
6. Bảng điều khiển dinh dưỡng và nhật ký 4 bữa (Celestial Cockpit và Diary):
   * Vòng cung calo bên trái, 3 thanh tiến độ Carbs/Protein/Fat bên phải, nhìn một giây là biết năng lượng còn lại trong ngày.
   * 4 bữa (Sáng, Trưa, Tối, Xế) có nút nhanh một chạm và sao chép bữa ăn.
7. Chuỗi ngày ăn sạch và Khiên Sao (Cosmic Streak, Starlight Shield):
   * Đếm chuỗi ngày ăn sạch liên tiếp. Nếu quên một ngày, Khiên Sao tự bật để chuỗi không về 0, nhằm giữ D30 Retention.
8. Bảng xếp hạng bạn bè và nhắc chuỗi (Astro Leaderboard, Streak Nudge):
   * Bảng xếp hạng trực tuyến qua Cloud Firestore Stream, thẻ thành tích 3D chia sẻ lên Story.
   * Streak Nudge: nhắc bạn bè mở app để giữ chuỗi.
9. Widget màn hình khóa và màn hình chính (Mobile OS Widgets):
   * Xem calo còn lại và mở camera quét món từ màn hình chính iOS và Android với một chạm (< 300ms), không chạy nền nên không hao pin.
10. Báo cáo xu hướng dinh dưỡng và cân nặng (Nutrition Analytics):
    * Biểu đồ theo ngày/tuần/tháng về thâm hụt calo, đối chiếu với cân nặng thực tế.
11. Sổ tay món tự nấu và kế hoạch bữa ăn (Custom Recipes, Meal Plans):
    * Tự tạo công thức, tự tính tổng calo cả nồi và chia đều ra từng hộp meal prep.
12. Đồng bộ đồng hồ và thiết bị sức khỏe (Apple Health, Health Connect):
    * Đọc bước chân và năng lượng tiêu hao từ Apple Watch hoặc smartwatch Android để bù trừ ngân sách calo.

---

### 3.2. Góc nhìn công nghệ (Engineering highlights và tech stack)

#### Tech stack v3.0.0

* Mobile framework: Flutter 3.x (Dart 3.x), iOS và Android
* Kiến trúc: Feature-First Clean Architecture (12 phân hệ độc lập)
* State: `flutter_riverpod: ^2.6.1` (code generation `@riverpod`, `AsyncNotifier`)
* Điều hướng: `auto_route: ^9.2.2` (type-safe routing, route guards)
* AI: Google Gemini 3.8 Flash (Multimodal Vision và NLU) qua `firebase_ai`, nhận giọng nói on-device (`speech_to_text`, `vi-VN`)
* Cloud: Firebase (Authentication, Cloud Firestore, Cloud Storage, App Check, Cloud Messaging FCM)
* Native: iOS WidgetKit (Swift), Android AppWidget (RemoteViews/Kotlin), Apple Health, Health Connect
* Kiểm thử: 277 automated tests (`flutter test` 100% pass), `flutter analyze` 0 lỗi 0 cảnh báo
* DevOps: Fastlane ký số tự động, GitHub Actions CI/CD phân phối lên Firebase App Distribution

#### 6 thay đổi kỹ thuật chính (v3.0.0)

##### 1. Pipeline giọng nói AstroVoice và Gemini NLU (v3.0.0)
* Speech-to-Text on-device tiếng Việt (`vi-VN`) với streaming feedback.
* Tối ưu prompt NLU để tách các đơn vị thường gặp (bát, tô, cái, ly, quả), suy ra bữa ăn theo giờ 24h và tính calo với độ trễ khoảng 1.1s (SLA <= 1.5s).
* GenUI `MealQuickLogCard` ghi 1-Tap Log vào Firestore trong khoảng 45ms (SLA < 150ms).

##### 2. Engine tách nước dùng và topping (v2.9.0)
* Gemini 3.8 Flash Vision One-Pass Prompt tách riêng Broth và Topping của món combo Á Đông.
* Gạt công tắc `[Ăn cả nước / Chỉ ăn cái]` thì calo và natri tự trừ, giảm 68% thao tác sửa số liệu thủ công.

##### 3. Bảng xếp hạng và Streak Nudge thời gian thực (v2.8.0)
* Đồng bộ bảng xếp hạng qua Cloud Firestore Stream, có phân trang và local caching để giảm chi phí đọc dữ liệu.
* Xuất thẻ thành tích 3D bằng `RepaintBoundary` và chia sẻ native đa nền tảng; dùng FCM cho tính năng nhắc chuỗi.

##### 4. Design System Claymorphic 2D/3D tự viết
* Xây Design System bằng Flutter native primitives, không dùng package UI bên ngoài. APK đạt 62.4MB (giới hạn 65MB).
* Mô phỏng nút co lại 0.98 scale khi nhấn giữ, bo góc 20pt, đổ bóng nổi 2 lớp.
* Bọc biểu đồ FL Chart bằng `RepaintBoundary` để cuộn trang đạt 60 FPS.

##### 5. Generative UI (GenUI) và giao thức A2UI
* Dùng kiến trúc Agent-to-User Interface (A2UI) của Google trong Flutter: AI sinh trực tiếp Native Widgets trong khung chat thay vì chỉ trả văn bản.
* Bộ widget gồm thẻ món ăn `MealQuickLogCard`, thước đo ngân sách calo `MacroBudgetGauge` và các chip gợi ý phản hồi hai chiều.
* System Prompt dùng Context Injection (BMR, TDEE, dị ứng, mục tiêu) và giữ dưới 250 tokens để giảm chi phí gọi AI và tăng tốc độ phản hồi.

##### 6. Widget màn hình khóa đa nền tảng và 277 automated tests
* Widget cho iOS (Swift WidgetKit) và Android (RemoteViews AppWidget), chia sẻ dữ liệu qua AppGroup UserDefaults và SharedPreferences.
* Reactive Sync cập nhật ngay khi người dùng ghi món ăn, không chạy background service nên không hao pin. Deep-link `astrobite://scanner` mở camera trong < 300ms.
* Bộ test đạt 277/277 pass, 0 lint warning, và đã qua audit bảo mật nội bộ theo Cloudflare và OWASP MASVS.

---

### 3.3. English executive project summary

> Role: Mobile Engineer and System Architect  
> Project: AstroBite, Smart AI Food Scanner and Voice Calorie Tracker (`v3.0.0`)  
> Core stack: Flutter 3.x, Dart 3.x, Riverpod 2.6, Google Gemini 3.8 Flash Vision and NLU, Firebase, iOS WidgetKit (Swift), Android AppWidget (Kotlin).

#### Overview

AstroBite makes daily calorie tracking easier by pairing Google Gemini 3.8 Flash Multimodal Vision and NLU with a custom 3D Claymorphic UI. Users snap a food photo or speak a Vietnamese sentence, including Asian dishes like Pho and Broken Rice and colloquial units, and get a nutritional breakdown in 1.1 to 2.5 seconds. The app also has hands-free voice logging, automatic broth/topping separation, a GenUI chat, a Starlight Streak Shield, OS widgets and 277 automated tests passing 100%.

#### Key achievements

* Hands-free Vietnamese voice logging (AstroVoice AI): built an on-device speech-to-text pipeline with Gemini 3.8 Flash NLU. It parses colloquial Asian food units (bowls, glasses, pieces) and infers the meal from the 24-hour clock, with about 1.1s response latency and 45ms 1-tap logging.
* Multimodal AI food scanner and Asian cuisine engine: built an image pipeline that streams camera buffers to Gemini Vision and returns calorie and macro breakdowns in under 2.5s. Automatic broth/topping separation cut manual corrections by 68%, and the pipeline has 0 memory leaks.
* Claymorphic 2D/3D design system: built a custom tactile design language in Flutter with no third-party UI packages, with a 0.98 tap scale, a 4pt layout grid and fixed nutrient color semantics, at a steady 60 FPS.
* Flutter Generative UI chat: implemented Google's Agent-to-User Interface (A2UI) protocol so raw AI output becomes interactive native widgets in the chat, such as food cards with portion steppers and 1-tap logging.
* Native OS widgets: built lock-screen and home-screen widgets for iOS (Swift WidgetKit) and Android (Kotlin AppWidget). They deep-link into the camera scanner in under 300ms and sync through reactive state with no background battery use.
* Quality and CI/CD: set up a CI/CD pipeline and a test suite with 277/277 tests passing, zero lint warnings, and no secret leaks in an internal Zero-Trust security audit.

---

## 4. Kinh nghiệm làm việc thương mại

### 1. Finviet Technology

* Thời gian: 08/2025 đến 08/2026
* Vị trí: Mobile Developer
* Dự án: hệ sinh thái F&B POS và Kiosk tự phục vụ
* Đóng góp:
  * Phát triển và bàn giao module Kiosk tự gọi món (Self-Order Kiosk) và Thu ngân bằng Flutter, rút ngắn thời gian giao dịch 30%.
  * Thiết kế luồng đồng bộ đơn hàng offline-first bằng Clean Architecture, BLoC và SQLite: không mất đơn khi mất mạng, tự đồng bộ khi có mạng lại.
  * Viết Android Platform Channels (Kotlin) để tích hợp máy in hóa đơn nhiệt (ESC/POS) và máy quét mã vạch/QR, giúp ngoại vi ổn định hơn và phản hồi nhanh hơn.
  * Tích hợp Firebase FCM, Crashlytics và Analytics cho thông báo thời gian thực và giám sát crash trên production.
  * Dùng quy trình phát triển có AI hỗ trợ (Git Worktrees, Cursor, Claude Code) để làm song song nhiều tính năng.
  * Thiết lập pipeline build/release Android và iOS bằng Fastlane và GitHub Actions.

---

### 2. Hahalolo Social Travel Network

* Thời gian: 05/2021 đến 07/2025 (4 năm 2 tháng)
* Vị trí: Mobile Developer (iOS và Flutter)
* Dự án: hệ sinh thái 6 ứng dụng (mạng xã hội, OTT, du lịch, fintech, outsource)
* Các ứng dụng và đóng góp:

  1. Hahalolo, mạng xã hội du lịch (Native iOS và Flutter, team mobile 20 người)
     * Phát triển app đạt 1M+ lượt tải với các phân hệ Tour, Flight, Hotel, Community Site, Handnotes và Profile View.
     * Xây module Native iOS bằng Swift, Autolayout theo kiến trúc VIPER, quản lý dependency bằng Cocoapods.
     * Tích hợp module Flutter qua Add-to-App để giữ trải nghiệm liền mạch giữa native và Flutter.
     * Tích hợp Google Maps, Push Notification, Deep Linking/Universal Link và Autoplay Video.
     * Giám sát crash bằng Firebase Crashlytics, phân phối qua Firebase Distribution.

  2. Halome, nhắn tin OTT realtime (Native iOS Swift, team iOS 5 người)
     * Xây app nhắn tin hỗ trợ đăng nhập ẩn danh và SSO Hahalolo bằng Native iOS Swift theo MVVM.
     * Dùng Starscream (WebSocket) cho realtime, Alamofire cho API, RxSwift cho data binding và IG List cho danh sách hội thoại.
     * Lưu tin nhắn offline bằng SQLite để dùng được khi mất mạng.
     * Triển khai CallKit SDK cho cuộc gọi VoIP âm thanh và video.
     * Tích hợp DeepLink mở thẳng luồng chat từ web, cùng chia sẻ đa phương tiện, chia sẻ vị trí và đặt lời nhắc.

  3. Haloki, fintech chuyển tiền đa quốc gia (Flutter)
     * Bảo trì và sửa lỗi app chuyển tiền quốc tế (192 quốc gia) trên Flutter.
     * Giữ ổn định luồng giao dịch, xác thực KYC và bảo mật dữ liệu người dùng.

  4. Hahalolo Invest, fintech giao dịch cổ phiếu (Flutter)
     * Bảo trì và sửa lỗi app giao dịch cổ phiếu nội bộ công ty trên Flutter.
     * Xử lý biểu đồ realtime, danh mục đầu tư và lệnh mua/bán.

  5. Aquannets, outsource cho Galactic Holdings (Flutter, team mobile 2 người)
     * Phát triển app quản lý nuôi trồng thủy sản cho Tập đoàn Galactic Holdings.
     * Dùng Clean Architecture với Riverpod, lưu dữ liệu local bằng SQLite để chạy offline-first tại ao nuôi.

  6. SocTrip, QC và kiểm thử
     * Làm QC cho app mạng xã hội du lịch SocTrip.
     * Kiểm thử end-to-end, viết test case, regression test và xác nhận chất lượng trước mỗi lần release lên Store.

* Công nghệ: iOS Swift, UIKit, VIPER, MVVM, RxSwift, Socket.IO, SQLite, CallKit, Flutter, Add-to-App, Clean Architecture, Riverpod, Firebase Crashlytics, KYC, Bitrise

---

## 5. Học vấn và ngoại ngữ

* Trường: Cao đẳng FPT Polytechnic
* Chuyên ngành: Lập trình máy tính / Phát triển phần mềm (Software Development)
* Bằng cấp: Cử nhân Thực hành Công nghệ Thông tin (Associate Degree in IT)
* Ngoại ngữ: tiếng Anh (Working Proficiency, đọc tài liệu kỹ thuật và giao tiếp công việc)

---

## 6. Ma trận kỹ năng kỹ thuật

| Nhóm kỹ năng | Chi tiết công nghệ |
| :--- | :--- |
| Ngôn ngữ và nền tảng | Flutter và Dart (5+ năm Expert), Swift, SwiftUI, UIKit, Kotlin, Rust, HTML5, CSS3, TypeScript |
| Kiến trúc và state | Clean Architecture (Package-based / Feature-First), BLoC (flutter_bloc), Riverpod 2.x (AsyncNotifier, Code-Gen), MVVM, Unidirectional Data Flow, SOLID, Modularization, Offline-First |
| Design System và Base UI | Core UI Library, Custom Widgets, Theme Engine (Dark/Light), Responsive Layout (Mobile/Tablet/Web), Localization (`intl`), Exception/Error Handler |
| Networking và dữ liệu local | Base Dio Client (Interceptors: Bearer Token, Auto Refresh Token khi 401, Exponential Retry, Client Cache), WebSocket/Socket.IO, Cloud Firestore Stream, SQLite/Drift, Hive, Isar/SharedPreferences, Dart FFI (Rust core) |
| Hiệu năng và Flutter Web | Widget Lifecycle và Render Tree (Widget/Element/RenderObject, RepaintBoundary, const), Flutter DevTools (Profiler, Memory, Network; 60 FPS, 0 memory leak), GoRouter và AutoRoute (Nested Routes, URL Query Params), CanvasKit/WASM, Asset Caching |
| DevOps, CI/CD và testing | Fastlane, GitHub Actions, GitLab CI/CD, Docker, Sentry, Crashlytics, 277 Automated Unit và Widget Tests (100% pass), Static Analysis và Lint Rules (`analysis_options.yaml`) |
| Quy trình và đội ngũ | Code Review, Mentoring Junior developers, Coding Conventions, Gitflow (Rebase, Cherry-pick), Scrum/Agile, Ponytail Mindset |

---

## 7. Nội dung mẫu để copy vào CV

### Bản tiếng Anh (Google XYZ: accomplished [X], measured by [Y], by doing [Z])

#### Professional projects
```markdown
ASTROBITE | AI Food Scanner & Hands-Free Calorie Tracker (v3.0.0) | Mobile Engineer & Architect
Tech Stack: Flutter 3.x, Dart 3.x, Clean Architecture (12 Modular Packages), Riverpod 2.6 (AsyncNotifier), AutoRoute & GoRouter (Deep Linking, Web Query Params), Gemini 3.8 Flash Vision & NLU, Base Dio Client, Custom Design System, Flutter DevTools (60 FPS, 0 memory leak), Fastlane, GitHub Actions & GitLab CI/CD (277 Tests 100% Pass).
• Architected AstroBite (v3.0.0) as modular package-based Clean Architecture across 12 decoupled business modules, with 277 automated unit and widget tests passing and zero static analysis issues.
• Built a 2D/3D Design System and base components in Flutter with no third-party UI packages (custom widgets, Theme Engine, responsive breakpoints), holding 60 FPS.
• Built the base network client and local persistence: Dio Interceptors (bearer token injection, 401 token refresh, exponential backoff retry), WebSocket and Firestore stream sync, Hive/SQLite offline cache.
• Profiled the Render Tree and memory with Flutter DevTools: RepaintBoundary, const constructors and camera buffer disposal gave sub-2.5s AI latency and 0 memory leaks.
• Configured GoRouter and AutoRoute with nested routes, query params, CanvasKit/WASM rendering and static asset caching.
• Automated Web, Android (APK/AAB) and iOS (IPA) releases with Fastlane, GitHub Actions and GitLab CI/CD on Docker runners.
```

#### Work experience
```markdown
FINVIET TECHNOLOGY | Mobile Developer, Flutter, Web & Kiosk (Aug 2025 - Aug 2026)
• Architected modular Clean Architecture / MVVM apps with BLoC (flutter_bloc) and Unidirectional Data Flow for multi-vertical POS and self-order Kiosks (F&B, Retail, Spa), cutting transaction time by 30%.
• Built a base UI library and responsive layout shared across Mobile, Tablet and Kiosk/Web, with common custom widgets and a Theme Engine.
• Built the base network client with Dio Interceptors: bearer token injection, 401 token refresh, exponential backoff retry, client-side offline cache.
• Designed an offline-first data pipeline (BLoC, SQLite/Drift) that kept 100% of orders during network drops and synced them on reconnect.
• Profiled the Render Tree and memory with Flutter DevTools to remove jank and RAM leaks while driving ESC/POS thermal printers and barcode scanners through Kotlin Platform Channels.
• Set coding conventions and strict lint rules (analysis_options.yaml), led PR code reviews and mentored junior developers.
• Configured CI/CD build and release pipelines (Android APK/AAB, Web bundle) with Fastlane, GitHub Actions and GitLab CI/CD.

HAHALOLO SOCIAL TRAVEL NETWORK | Mobile & Frontend Developer, iOS & Flutter (May 2021 - Jul 2025)
Ecosystem of 6 apps: social network, OTT messaging, travel, fintech and outsource

• [Hahalolo, travel social network (1M+ downloads)] Developed the Tour, Flight, Hotel and Community modules; built Native iOS (Swift, VIPER) and integrated Flutter via Add-to-App; handled responsive UI, Deep Linking and Firebase Crashlytics (<0.5% crash rate). Mobile team: 20.
• [Halome, OTT realtime messaging] Built a real-time chat app from scratch in Native iOS Swift (MVVM) with WebSocket, SQLite offline storage, RxSwift and CallKit VoIP; list scrolling held at 60 FPS. Team: 5.
• [Haloki and Hahalolo Invest, fintech] Maintained an international money transfer app (192 countries) and a stock trading app in Flutter, covering transaction integrity, KYC, real-time charts and Dio interceptors.
• [Aquannets, outsource for Galactic Holdings] Built an aquaculture farm management app in Flutter with Clean Architecture and Riverpod, with SQLite offline-first for use at the ponds. Team: 2.
• [SocTrip, QC & Testing] Ran end-to-end testing, wrote test matrices and regression tests, and confirmed quality before App Store and Google Play releases.
Tech: Flutter, Dart, Add-to-App, Clean Architecture, Riverpod, BLoC, iOS Swift, VIPER, MVVM, WebSocket, SQLite, CallKit, Firebase Crashlytics, GitLab CI/CD.
```

---

### Bản tiếng Việt (ngắn gọn cho thị trường trong nước)

```markdown
DỰ ÁN: ASTROBITE | AI Food Scanner & Hands-Free Calorie Tracker (v3.0.0)
Vai trò: Mobile Engineer & System Architect | Công nghệ: Flutter 3.x, Dart 3.x, Clean Architecture (12 Modular Packages), Riverpod 2.6, AutoRoute & GoRouter, Gemini 3.8 Flash (Vision & NLU), Base Dio Client, Custom Design System, Flutter DevTools (60 FPS, 0 memory leak), Fastlane, GitHub Actions & GitLab CI/CD (277 Tests 100% Pass).
- Thiết kế kiến trúc AstroBite (v3.0.0) theo Clean Architecture / Modular Package-based với Riverpod 2.x code-gen trên 12 phân hệ độc lập, giữ 277 automated unit và widget test pass 100% và 0 lỗi linter.
- Đóng gói Design System 2D/3D và Base Components bằng Flutter primitives (Custom Widgets, Theme Engine, Responsive Breakpoints), giữ cuộn trang 60 FPS.
- Xây Base Network Client và Offline Storage: Dio Interceptor (auto-refresh token, retry policy), WebSocket và Firestore stream real-time, Hive/SQLite offline cache.
- Tối ưu Render Tree và bộ nhớ bằng Flutter DevTools: tách render bằng RepaintBoundary, const constructors, giải phóng camera buffer; độ trễ AI < 2.5s và 0 memory leak.
- Cấu hình GoRouter và AutoRoute với nested routes, URL navigation, query params, CanvasKit/WASM và asset caching.
- Thiết lập 277 automated unit và widget test (100% pass); chuẩn hóa CI/CD build/release đa nền tảng (Web/Android/iOS) bằng Fastlane, GitHub Actions và GitLab CI/CD.
```

---

## 8. Câu hỏi phỏng vấn Tech Lead

### Q1: Tại sao chọn Feature-First Clean Architecture cho AstroBite thay vì Layer-First?
> Trả lời: *"Tôi chọn Feature-First vì app có hơn 10 phân hệ (`scanner`, `tracker`, `coach`, `health`...). Với Layer-First, mọi controller và repository nằm chung vài folder lớn, nên dev hay xung đột git khi sửa cùng thư mục và khó tách một tính năng ra package riêng. Với Feature-First, mỗi module chứa đủ Domain (Freezed models), Data (Repositories/DTOs) và Presentation (Riverpod Notifiers). Nhờ đó phạm vi test gọn hơn, dễ tái sử dụng và một module lỗi ít ảnh hưởng module khác."*

### Q2: Flutter Generative UI (GenUI) và giao thức A2UI trong ADR-06 hoạt động thế nào?
> Trả lời: *"Thay vì để LLM trả Markdown thô, tôi thiết kế giao thức A2UI. Client định nghĩa sẵn một `Catalog` các thành phần giao diện (`MealQuickLogCard`, `MacroBudgetGauge`). Khi người dùng chat với AstroCoach, Gemini 3.8 Flash trả về JSON có cấu trúc, chỉ định component ID và props. Flutter đối chiếu payload với Catalog rồi render widget native. Widget có data binding hai chiều: người dùng bấm stepper tăng giảm khối lượng (+/-20g) và bấm 1-Tap Log để ghi thẳng vào Cloud Firestore mà không rời màn hình chat."*

### Q3: Đồng bộ dữ liệu ra OS Home Widgets thế nào để không hao pin?
> Trả lời: *"Tôi không dùng background service polling theo phút, vì hệ điều hành sẽ kill nó và nó tốn pin. Tôi dùng Reactive Sync: mỗi khi người dùng ghi bữa ăn hoặc Riverpod Notifier tính xong `DailySummary`, app ghi dữ liệu mới nhất dạng Key-Value vào AppGroup UserDefaults (iOS) và SharedPreferences (Android) qua plugin `home_widget`, rồi gọi `updateWidget()`. Widget luôn hiện calo mới nhất và không có tác vụ nền nào chạy thêm."*

### Q4: Xử lý lệch múi giờ trong thuật toán Streak Engine thế nào?
> Trả lời: *"Lỗi hay gặp là so sánh timestamp thô (`DateTime.now().difference`) hoặc dùng UTC thuần, khiến người dùng đổi múi giờ hoặc ăn khuya bị mất chuỗi. Trong ADR-05, tôi chuẩn hóa ngày ghi nhận thành chuỗi ISO cục bộ `yyyy-MM-dd` theo Local Timezone của người dùng. Chuỗi ngày tính theo số ngày nguyên so với `lastActiveDate`. Starlight Shield cho phép bỏ lỡ một ngày (`Gap == 1`) mà vẫn giữ chuỗi, để hỗ trợ D30 Retention."*

### Q5: Kiểm soát chất lượng và phát hành thế nào trong dự án này?
> Trả lời: *"Tôi dùng quy trình 8 cổng chất lượng (8-Gate SOP) kết hợp Ponytail: Gate 0 nghiên cứu kiến trúc (ADR), Gate 3 thiết kế test BDD Gherkin, Gate 5 review code để cắt bloat, Gate 6 xác minh 277 automated unit và widget test pass 100%. Ở Gate 7, pipeline CI/CD bằng Fastlane và GitHub Actions build Android APK/AAB và iOS IPA, kiểm tra giới hạn kích thước binary, rồi đẩy lên Firebase App Distribution cho internal testers."*
