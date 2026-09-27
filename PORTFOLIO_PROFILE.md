# NGUYEN DUY TRANG — PORTFOLIO & CAREER MASTER PROFILE

> **Tài liệu tổng hợp toàn diện hồ sơ năng lực, kinh nghiệm thực chiến và phân tích kiến trúc dự án AstroBite.**  
> *Sẵn sàng sử dụng cho CV, LinkedIn, GitHub Profile README, Notion hoặc Portfolio cá nhân.*

---

## 👤 1. THÔNG TIN CÁ NHÂN & ĐỊNH VỊ NGHỀ NGHIỆP

* **Họ và tên**: **NGUYEN DUY TRANG**
* **Năm sinh**: **2000**
* **Vị trí mục tiêu**: **Mobile Tech Lead | Senior Mobile Engineer (Flutter & Native iOS/Android)**
* **Kinh nghiệm**: 5+ năm phát triển ứng dụng di động thương mại quy mô lớn (Production).
* **Địa điểm**: TP. Hồ Chí Minh, Việt Nam
* **Số điện thoại**: [0397308962](tel:0397308962)
* **Email**: [trangndps10349@gmail.com](mailto:trangndps10349@gmail.com)
* **GitHub**: [github.com/TrangDuyNguyen](https://github.com/TrangDuyNguyen)
* **LinkedIn**: [linkedin.com/in/nguyễn-duy-tráng-132567224](https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/)
* **Trạng thái**: 🟢 Sẵn sàng cho các cơ hội Mobile Tech Lead & Senior Mobile Engineer.

### 🌟 Elevator Pitch (Tóm tắt giá trị cốt lõi)
> Kỹ sư di động với hơn 5 năm kinh nghiệm thực chiến phát triển và vận hành các hệ thống ứng dụng di động iOS & Android đạt mốc **triệu lượt tải (1M+)** và độ ổn định **99.5%+ crash-free**. Làm chủ kiến trúc Clean Architecture, mô hình phân tán Offline-first, giao tiếp thời gian thực (WebSocket/Socket.IO) và tích hợp phần cứng ngoại vi (POS, máy in nhiệt, máy quét mã vạch). Tiên phong ứng dụng **Multimodal Vision AI** (Google Gemini) và kiến trúc **Flutter Generative UI (GenUI)** tương tác thời gian thực trên thiết bị di động.

---

## 📊 2. CÁC CHỈ SỐ VÀNG BẢO CHỨNG NĂNG LỰC (VERIFIED METRICS)

| Chỉ số | Phạm vi & Dự án | Ý nghĩa kỹ thuật |
| :--- | :--- | :--- |
| **1M+ Downloads** | Hahalolo & Halome Social Travel | Xây dựng và duy trì ứng dụng mạng xã hội & nhắn tin quy mô lớn trên cả iOS và Android. |
| **99.5%+ Crash-Free** | Production Monitoring (Crashlytics) | Quản lý vòng đời bộ nhớ chặt chẽ, bắt ngoại lệ an toàn và tối ưu hóa hiệu năng render 60 FPS. |
| **-30% Thời gian đặt món** | Finviet Technology F&B POS Kiosk | Tối ưu hóa UI/UX flow và xử lý bất đồng bộ trong hệ thống Kiosk tự phục vụ. |
| **198 Tests Pass 100%** | AstroBite Test Suite (`flutter test`) | Bộ kiểm thử tự động toàn diện từ Domain, Repositories, Notifiers đến Widget UI không có flaky test. |
| **< 2.5s Latency & 0 Leak** | AstroBite Multimodal AI Scanner | Xử lý ảnh và stream kết quả dinh dưỡng từ Gemini AI với vòng đời giải phóng camera buffer triệt để. |

---

## 🌌 3. DỰ ÁN TIÊU BIỂU: ASTROBITE (v2.0.0)

> **Tên dự án**: **AstroBite — AI Food Scanner & GenUI Calorie/Macro Tracker**  
> **Vai trò**: **Mobile Tech Lead & System Architect**  
> **Kiến trúc**: Enterprise Super-Repo (3 Git Submodules), Feature-First Clean Architecture, Riverpod 2.x, Flutter GenUI (A2UI Protocol).

### 3.1. Tổng quan Dự án
AstroBite là ứng dụng theo dõi dinh dưỡng và quét calo/macro bữa ăn tức thì thông qua camera sử dụng trí tuệ nhân tạo **Google Gemini Multimodal Vision AI** (`firebase_ai`) kết hợp giao diện **Celestial Dark UI** độc bản. Dự án được xây dựng với kỷ luật kiến trúc nghiêm ngặt (Ponytail mindset, Clean Architecture, 8-Gate Quality SOP).

### 3.2. Cấu trúc Công nghệ (Tech Stack)
* **Framework**: Flutter 3.x / Dart 3.x
* **State Management**: `flutter_riverpod: ^2.6.1` (Code Generation với `@riverpod`, `AsyncNotifier`)
* **Routing**: `auto_route: ^9.2.2` (Type-safe routing, Route Guards)
* **Data Modeling**: `freezed: ^3.0.2`, `json_serializable: ^6.9.4`
* **Trí tuệ nhân tạo (AI)**: Google Gemini 2.0 / 3.8 Flash (`firebase_ai`, `google_generative_ai`)
* **Cloud Backend**: Firebase (Auth, Cloud Firestore, Cloud Storage, App Check)
* **Hệ điều hành & Native**: iOS WidgetKit & Android AppWidget (`home_widget`), Apple Health & Android Health Connect, Platform Channels
* **UI/UX & Charts**: Material 3, Celestial Dark Theme, Glassmorphism (`BackdropFilter`), `fl_chart: ^0.70.2`
* **DevOps & QA**: Fastlane, GitHub Actions CI/CD, Firebase App Distribution, 198 Unit/Widget Tests

### 3.3. Các Đột Phá Kỹ Thuật Trọng Yếu (Key Engineering Innovations)

#### 1. Gemini Multimodal Vision AI & Live AR HUD Camera
* Nhận diện bữa ăn đa vùng chỉ trong **2–4 giây**, phân tích chính xác các món ăn phức tạp của Việt Nam (Phở, Cơm tấm, Bún chả...) và quốc tế.
* Bóc tách năng lượng (Calories) và 3 chất đa lượng theo chuẩn màu dinh dưỡng bất biến: **Carbs (`#1A73E8` - Xanh dương)**, **Fat (`#FF69B4` - Hồng)**, **Protein (`#FFD700` - Vàng)** cùng các vi chất (Sodium, Fiber, Sugar).
* Quản lý bộ đệm Camera Frame bằng pipeline độc lập, triệt tiêu hoàn toàn hiện tượng rò rỉ RAM (0 memory leak).

#### 2. Flutter Generative UI (GenUI) Chat Cockpit & Giao thức A2UI (ADR-06)
* Tiên phong triển khai kiến trúc **Agent-to-User Interface (A2UI)** dựa trên đặc tả Google Flutter GenUI SDK.
* Thay vì chỉ trả về text Markdown đơn thuần, Gemini 3.8 Flash trả về cấu trúc A2UI JSON payload có định dạng chuẩn, ứng dụng đối soát với `Catalog` nội bộ để sinh ra các **Interactive Native Widgets** trực tiếp trong khung chat:
  * `MealQuickLogCard`: Thẻ món ăn có bộ điều chỉnh khẩu phần (Steppers +/-20g) và nút **[1-Tap Log]** lưu trực tiếp vào Firestore.
  * `MacroBudgetGauge`: Đồng hồ so sánh calo nạp dự kiến vs ngân sách calo còn lại trong ngày.
  * `QuickChoiceChips`: Dải chip lựa chọn ngữ cảnh tương tác 2 chiều với AI.
* Tối ưu hóa System Prompt với cơ chế Context Injection (BMR, TDEE, dị ứng, mục tiêu) duy trì dưới 250 tokens.

#### 3. Cross-Platform OS Home Widgets & Streak Engine (ADR-05)
* Xây dựng tiện ích màn hình chính / màn hình khóa (iOS WidgetKit & Android AppWidget) qua `home_widget` chia sẻ dữ liệu qua AppGroup UserDefaults (iOS) và SharedPreferences (Android).
* Đồng bộ dữ liệu phản ứng (Reactive Sync): Cập nhật calo còn lại và chuỗi ngày ngay khi có meal log mới mà **không chạy background service liên tục gây hao pin**.
* Hỗ trợ deep-link `astrobite://scanner` mở thẳng camera trong **< 300ms**.
* **Thuật toán tính Streak tất định (Deterministic Streak Engine)**: Chuẩn hóa ngày theo chuỗi ISO địa phương (`yyyy-MM-dd`), tích hợp cơ chế bảo vệ "Khiên Sao" (Starlight Shield) cho phép bỏ lỡ 1 ngày không bị đứt chuỗi, tối ưu tỷ lệ D30 Retention.

#### 4. Clean Architecture & Enterprise Super-Repo
* Phân tách 10 phân hệ nghiệp vụ độc lập theo Feature-First: `scanner`, `tracker`, `analytics`, `coach`, `health`, `gamification`, `widgets`, `recipes`, `profile`, `auth`.
* Tổ chức mã nguồn chuẩn Super-Repo quản lý 3 Git Submodules:
  * `docs/`: Đặc tả yêu cầu nghiệp vụ BABOK/Agile (`astrobite-ba-docs`)
  * `tests/`: Chiến lược QA, Test Plan & BDD Gherkin (`astrobite-testcases`)
  * `frontend/`: Toàn bộ Flutter Clean Architecture (`astrobite-frontend`)
* Tự động hóa toàn diện bằng `Makefile`: `make setup`, `make update`, `make test-fe`, `make build-android`, `make build-ios`, `make release`.

#### 5. Pipeline CI/CD Fastlane & Tự Động Phân Phối
* File cấu hình GitHub Actions (`.github/workflows/release.yml`) tự động hóa 100% quy trình:
  * Biên dịch Android Release (APK & AAB) và iOS Release (IPA).
  * Ký số ứng dụng (Code Signing & Keystore management).
  * Phân phối tự động lên **Firebase App Distribution** cho nhóm testers nội bộ mỗi khi push git tag release (`v*`).

### 3.4. Tài nguyên Hình ảnh Thực tế trong Repository
* **AR Food Scanner Live View**: `portfolio/assets/images/astrobite_ar_scanner.jpg`
* **Floating Navigation Cockpit & Macro Ring**: `docs/02-design-system/stitch_screens/floating_nav_cockpit.png`
* **AstroCoach GenUI Chat Cockpit**: `docs/03-prd-features/16-astrocoach-intelligence-v2/astrocoach_v2_mockup.png`
* **Recipe Builder & Meal Planning**: `docs/03-prd-features/17-custom-recipes-meal-plan/recipe_builder_mockup.png`
* **App Icon & Mascot**: `assets/icons/app_icon.png`, `assets/images/astrobot_mascot.png`

---

## 💼 4. KINH NGHIỆM LÀM VIỆC THƯƠNG MẠI (WORK EXPERIENCE)

### 🏢 1. FINVIET TECHNOLOGY
* **Thời gian**: Tháng 06/2025 – Hiện tại
* **Vị trí**: **Mobile Developer**
* **Dự án**: Hệ sinh thái F&B POS & Kiosk tự phục vụ
* **Đóng góp & Thành tựu nổi bật**:
  * Phát triển và bàn giao các module **Kiosk tự gọi món (Self-Order Kiosk)** và Thu ngân bằng Flutter, giúp rút ngắn thời gian giao dịch đặt món xuống **30%**.
  * Thiết kế luồng đồng bộ đơn hàng **Offline-first** sử dụng Clean Architecture, BLoC và SQLite, đảm bảo 100% đơn hàng không bị mất khi mất kết nối mạng và tự động đồng bộ khi có mạng trở lại.
  * Tự phát triển các **Android Platform Channels (Kotlin)** chuyên dụng để tích hợp máy in hóa đơn nhiệt (ESC/POS) và máy quét mã vạch/QR phần cứng, nâng cao độ ổn định và thời gian phản hồi của ngoại vi.
  * Tích hợp Firebase FCM, Crashlytics và Analytics phục vụ thông báo thời gian thực, giám sát crash trên môi trường production.
  * Ứng dụng quy trình phát triển hỗ trợ bởi AI (AI-assisted development) với Git Worktrees, Cursor và Claude Code để quản lý song song nhiều luồng tính năng.
  * Thiết lập pipeline tự động hóa build/release cho Android & iOS bằng **Fastlane** và **GitHub Actions**.

---

### 🏢 2. HAHALOLO SOCIAL TRAVEL NETWORK
* **Thời gian**: Tháng 05/2020 – Tháng 06/2025 (5 năm)
* **Vị trí**: **Mobile Developer**
* **Dự án**: Mạng xã hội du lịch Hahalolo & Ứng dụng nhắn tin Halome
* **Đóng góp & Thành tựu nổi bật**:
  * Phát triển và duy trì ứng dụng mạng xã hội du lịch và nhắn tin OTT với quy mô **hơn 1.000.000 lượt tải (1M+)** trên iOS App Store và Google Play Store.
  * Xây dựng từ đầu hệ thống nhắn tin tức thời **Halome**, hỗ trợ chat, truyền file đa phương tiện và cuộc gọi thoại/video độ trễ thấp thông qua **WebSocket** và **Socket.IO**.
  * Phát triển các module native iOS bằng **Swift, SwiftUI và UIKit**, đồng thời tích hợp mượt mà các module Flutter thông qua giải pháp **Flutter Add-to-App**.
  * Tích hợp Firebase Cloud Messaging (FCM) với **iOS CallKit** để xử lý cuộc gọi đến ở màn hình khóa native, duy trì chỉ số ổn định **99.5%+ crash-free sessions** qua Crashlytics.
  * Tối ưu hóa chu kỳ rebuild của Widget, cấu trúc bộ nhớ và render UI, duy trì tốc độ khung hình ổn định **60 FPS** kể cả trên các dòng máy cấu hình thấp.
  * Tự động hóa phân phối bản build TestFlight và store releases thông qua **Bitrise** và **Fastlane**.

---

## 🎓 5. HỌC VẤN & NGOẠI NGỮ

* **Trường đào tạo**: **Cao Đẳng FPT Polytechnic**
* **Chuyên ngành**: Lập trình máy tính / Phát triển phần mềm (Software Development)
* **Bằng cấp**: Cử nhân Thực hành Công nghệ Thông tin (Associate Degree in IT)
* **Ngoại ngữ**: Tiếng Anh (Working Proficiency — đọc hiểu tài liệu kỹ thuật, giao tiếp công việc)

---

## 🛠️ 6. MA TRẬN KỸ NĂNG KỸ THUẬT (TECHNICAL SKILLS MATRIX)

| Nhóm kỹ năng | Chi tiết công nghệ |
| :--- | :--- |
| **Ngôn ngữ & Framework** | **Flutter, Dart, Swift, SwiftUI, UIKit, Kotlin**, HTML5, CSS3, JavaScript |
| **Kiến trúc & Quản lý State** | **Clean Architecture (Feature-First)**, **Riverpod 2.x (Code-Gen)**, **BLoC**, AutoRoute, Freezed, MVVM, SOLID, Modularization, Offline-First Architecture |
| **Dữ liệu & Thời gian thực** | WebSocket, Socket.IO, RESTful API, SQLite, Cloud Firestore, Local Caching & Background Sync |
| **AI & Điện toán Đám mây** | **Google Gemini Multimodal AI (Vision & Flash)**, **Flutter GenUI (A2UI Protocol)**, Firebase (Auth, Firestore, Storage, App Check, Crashlytics, FCM, Remote Config) |
| **Hệ thống & Tích hợp Phần cứng** | **iOS WidgetKit, Android AppWidget**, Platform Channels (MethodChannel), Máy in nhiệt POS (ESC/POS), Máy quét mã vạch/QR, **Apple HealthKit, Android Health Connect, iOS CallKit** |
| **DevOps, CI/CD & Testing** | **Fastlane, GitHub Actions, Bitrise**, 198 Unit/Widget Tests (`flutter test`), App Store Connect, Google Play Console, Git Submodules, Makefile automation |
| **Công cụ & Phương pháp luận** | Git, Git Worktrees, Jira, Agile/Scrum, Cursor IDE, Claude Code, Antigravity |

---

## 📝 7. NỘI DUNG MẪU SẴN SÀNG COPY VÀO CV / PROFILE

### 🇬🇧 Bản Tiếng Anh chuẩn Quốc Tế (Chuẩn STAR / Google XYZ: Accomplished [X], measured by [Y], by doing [Z])

#### Section: Personal Projects
```markdown
ASTROBITE — AI Food Scanner & GenUI Calorie/Macro Tracker | Mobile Tech Lead
Tech Stack: Flutter 3.x, Riverpod 2.x, AutoRoute 9.x, Gemini 3.8 Flash (firebase_ai), GenUI (A2UI), Firebase, iOS WidgetKit, Android AppWidget, Fastlane, GitHub Actions CI/CD (198 Tests).
• Architected and delivered AstroBite (v2.0.0), a nutrition tracking ecosystem featuring a Celestial Dark UI, implementing Feature-First Clean Architecture with Riverpod 2.x code-gen across 10 independent domain modules.
• Engineered an end-to-end Gemini Multimodal Vision AI scanner (firebase_ai), identifying complex dishes within 2–4 seconds and extracting macronutrients (Calories, Carbs, Protein, Fat) with 0 memory leaks.
• Pioneered a Generative UI (GenUI) Chat Cockpit (ADR-06) using the A2UI Protocol with Gemini 3.8 Flash, generating native interactive widgets (MealQuickLogCard, MacroBudgetGauge) with 1-tap Firestore diary logging.
• Implemented cross-platform Home Screen Widgets (home_widget) for iOS WidgetKit and Android AppWidget via AppGroup UserDefaults & SharedPreferences, providing sub-300ms camera scanner deep-linking and reactive offline sync.
• Automated multi-platform release pipelines (APK/AAB/IPA) using Fastlane and GitHub Actions, delivering builds to Firebase App Distribution with 198 automated unit and widget tests (100% pass rate).
```

#### Section: Work Experience
```markdown
FINVIET TECHNOLOGY | Mobile Developer (Jun 2025 – Present)
• Built multi-industry POS cashier screens and Self-Order Kiosks tailored for F&B (table layout, kitchen tickets), Retail (barcode checkout), and Spa Services (technician booking, treatment packages), accelerating transactions by 30%.
• Implemented feature-level Role-Based Access Control (RBAC) across cashiers, stockkeepers, spa therapists, store managers, and administrators.
• Developed Product/Service Catalog Management and Multi-Tier Price List modules (branch-based pricing, combo meals, spa service tiers, and promotional discounts).
• Built end-to-end Inventory Management: goods receipt & issue notes (phiếu nhập/xuất kho), stock tracking, and real-time inventory reconciliation.
• Shipped comprehensive Sales & Inventory Reporting modules (shift revenue, multi-model sales analytics for F&B/Retail/Spa, stock balance).
• Designed and delivered an offline-first order synchronization engine using Clean Architecture, BLoC, and SQLite, ensuring 100% order persistence during network disconnects.
• Developed custom Android (Kotlin) Platform Channels to interface with hardware thermal POS receipt printers (ESC/POS) and barcode scanners.
• Streamlined multi-platform store releases through automated Fastlane and GitHub Actions CI/CD workflows.

HAHALOLO SOCIAL TRAVEL NETWORK | Mobile Developer (May 2020 – Jun 2025)
• Maintained and scaled social travel and messaging production apps with 1M+ downloads across iOS and Android.
• Built the Halome real-time messaging architecture from scratch, supporting chat, media sharing, and low-latency audio/video calling using WebSocket and Socket.IO.
• Implemented native iOS modules with Swift, SwiftUI, and UIKit, integrating Flutter modules via Flutter Add-to-App.
• Integrated Firebase Cloud Messaging (FCM) with iOS CallKit for native lock-screen incoming calls, sustaining 99.5%+ crash-free sessions via Firebase Crashlytics.
• Optimized widget rebuilds, image memory caching, and rendering pipelines to sustain smooth 60 FPS on low-end hardware.
```

---

### 🇻🇳 Bản Tiếng Việt (Ngắn gọn, súc tích cho thị trường trong nước)

```markdown
DỰ ÁN TIÊU BIỂU: ASTROBITE (AI Food Scanner & GenUI Macro Tracker)
Vai trò: Mobile Tech Lead | Công nghệ: Flutter, Riverpod 2.x, AutoRoute, Gemini Flash AI, GenUI A2UI, Firebase, Fastlane.
- Chủ trì thiết kế kiến trúc toàn diện dự án AstroBite theo mô hình Feature-First Clean Architecture, phân tách 10 phân hệ nghiệp vụ, quản lý state bất đồng bộ an toàn qua Riverpod 2.x code-gen.
- Tích hợp Google Gemini Multimodal Vision AI nhận diện bữa ăn phức tạp trong 2–4s, trích xuất chính xác calo/macro với 0 rò rỉ bộ nhớ.
- Thiết kế giao thức A2UI Protocol (ADR-06) biến hội thoại AI thành buồng lái tương tác (Chat Cockpit), sinh trực tiếp các widget động có thể tương tác 2 chiều và lưu dữ liệu 1 chạm vào Firestore.
- Xây dựng tiện ích màn hình chính iOS WidgetKit & Android AppWidget chia sẻ qua AppGroup/SharedPreferences, hỗ trợ deep-link mở camera <300ms và cơ chế Streak Engine bảo vệ chuỗi ngày.
- Thiết lập pipeline CI/CD với Fastlane & GitHub Actions tự động build APK/IPA lên Firebase App Distribution, bảo chứng bởi 198 bài kiểm thử tự động pass 100%.
```

---

## 🎯 8. BỘ CÂU HỎI & CÂU TRẢ LỜI PHỎNG VẤN TECH LEAD (INTERVIEW CHEAT SHEET)

### Q1: Tại sao bạn lại chọn kiến trúc Feature-First Clean Architecture cho AstroBite thay vì Layer-First?
> **Trả lời**: *"Khi hệ sinh thái ứng dụng phình to lên 10+ phân hệ (`scanner`, `tracker`, `coach`, `health`...), cấu trúc Layer-First (gom tất cả controller, tất cả repository vào từng folder lớn) sẽ gây thắt cổ chai: các lập trình viên thường xuyên xung đột git khi sửa cùng thư mục, và rất khó xóa hoặc tách một tính năng ra làm package riêng. Với Feature-First, mỗi module là một 'vương quốc độc lập' chứa trọn vẹn Domain (Freezed models), Data (Repositories/DTOs) và Presentation (Riverpod Notifiers). Điều này giúp cô lập phạm vi kiểm thử, tái sử dụng linh hoạt và tăng tính chịu lỗi của hệ thống."*

### Q2: Cơ chế Flutter Generative UI (GenUI) và giao thức A2UI trong ADR-06 hoạt động cụ thể thế nào?
> **Trả lời**: *"Thay vì để LLM trả về chuỗi Markdown thô khiến người dùng chỉ đọc thụ động, tôi thiết kế giao thức A2UI Protocol. Client định nghĩa sẵn một `Catalog` các thành phần giao diện (`MealQuickLogCard`, `MacroBudgetGauge`). Khi người dùng chat với AstroCoach, Gemini 3.8 Flash trả về payload JSON có cấu trúc chỉ định component ID và props tương ứng. Phía Flutter đối soát payload với Catalog để render ra widget native thực thụ. Widget này có data binding 2 chiều: người dùng có thể bấm nút stepper tăng giảm khối lượng món ăn (+/-20g) và bấm nút 1-Tap Log để mutate trực tiếp vào Cloud Firestore mà không cần rời màn hình chat."*

### Q3: Làm cách nào để bạn đồng bộ dữ liệu ra OS Home Widgets mà không gây hao pin người dùng?
> **Trả lời**: *"Tôi cấm tuyệt đối việc tạo background service chạy polling định kỳ theo phút vì sẽ bị hệ điều hành kill và làm hao pin thiết bị. Thay vào đó, tôi áp dụng mô hình Reactive Sync: mỗi khi người dùng ghi log bữa ăn hoặc Riverpod Notifier tính toán xong bản ghi tóm tắt ngày (`DailySummary`), hệ thống bất đồng bộ ghi dữ liệu mới nhất dưới dạng Key-Value vào AppGroup UserDefaults (iOS) và SharedPreferences (Android) qua plugin `home_widget`, sau đó kích hoạt `updateWidget()`. Nhờ đó, Widget ngoài màn hình khóa luôn hiển thị calo mới nhất ngay lập tức với chi phí pin bằng 0."*

### Q4: Bạn xử lý bài toán lệch múi giờ trong thuật toán Streak Engine ra sao?
> **Trả lời**: *"Lỗi phổ biến nhất của các ứng dụng tracking là so sánh timestamp thô (`DateTime.now().difference`) hoặc dùng UTC thuần túy, dẫn đến việc người dùng bay qua múi giờ khác hoặc log ăn khuya bị mất chuỗi. Trong ADR-05, tôi chuẩn hóa toàn bộ ngày ghi nhận thành chuỗi ISO cục bộ `yyyy-MM-dd` dựa trên Local Timezone của người dùng. Chuỗi ngày được tính toán tất định theo khoảng cách số ngày nguyên vẹn so với `lastActiveDate`. Ngoài ra, tôi thiết kế cơ chế 'Starlight Shield' (khiên sao) cho phép bỏ lỡ 1 ngày (`Gap == 1`) mà vẫn bảo toàn chuỗi, giúp tối ưu D30 Retention của sản phẩm."*

### Q5: Bạn kiểm soát chất lượng và phát hành phần mềm như thế nào trong dự án này?
> **Trả lời**: *"Tôi thiết lập quy trình 8 Cổng Chất Lượng (8-Gate SOP) kết hợp văn hóa Ponytail: từ Gate 0 nghiên cứu kiến trúc (ADR), Gate 3 thiết kế kịch bản test BDD Gherkin, Gate 5 Review code triệt tiêu bloat, đến Gate 6 xác minh 198 automated unit & widget tests đạt tỷ lệ 100% pass thực chất. Cuối cùng tại Gate 7, tôi làm chủ pipeline CI/CD bằng Fastlane và GitHub Actions: tự động biên dịch Android APK/AAB và iOS IPA, kiểm tra giới hạn kích thước binary, và đẩy trực tiếp lên Firebase App Distribution cho nhóm internal testers."*

---

> [!NOTE]
> File này được lưu trữ tại [**`PORTFOLIO_PROFILE.md`**](file:///Users/nguyenduytrang/flutter_project/AstroBite/PORTFOLIO_PROFILE.md) trong thư mục gốc của dự án. Bạn có thể mở ra để xem định dạng Markdown sắc nét bất cứ lúc nào!
