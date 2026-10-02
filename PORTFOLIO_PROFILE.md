# NGUYEN DUY TRANG — PORTFOLIO & CAREER MASTER PROFILE

> **Tài liệu tổng hợp toàn diện hồ sơ năng lực, kinh nghiệm thực chiến và phân tích kiến trúc dự án AstroBite.**  
> *Sẵn sàng sử dụng cho CV, LinkedIn, GitHub Profile README, Notion hoặc Portfolio cá nhân.*

---

## 👤 1. THÔNG TIN CÁ NHÂN & ĐỊNH VỊ NGHỀ NGHIỆP

* **Họ và tên**: **NGUYEN DUY TRANG**
* **Năm sinh**: **2000**
* **Vị trí mục tiêu**: **Mid Mobile Engineer (Flutter & Native iOS/Android)**
* **Kinh nghiệm**: 5+ năm phát triển ứng dụng di động thương mại quy mô lớn (Production).
* **Địa điểm**: TP. Hồ Chí Minh, Việt Nam
* **Số điện thoại**: [0397308962](tel:0397308962)
* **Email**: [trangndps10349@gmail.com](mailto:trangndps10349@gmail.com)
* **GitHub**: [github.com/TrangDuyNguyen](https://github.com/TrangDuyNguyen)
* **LinkedIn**: [linkedin.com/in/nguyễn-duy-tráng-132567224](https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/)
* **Trạng thái**: 🟢 Sẵn sàng cho các cơ hội Mid Mobile Engineer.

### 🌟 Elevator Pitch (Tóm tắt giá trị cốt lõi)
> Mobile Engineer với 5 năm kinh nghiệm thực chiến trên nền tảng Flutter, iOS và Android. Mình từng trực tiếp xây dựng hệ thống mạng xã hội quy mô lớn (1M+ downloads), các giải pháp POS/Kiosk bán hàng đa ngành (F&B, Bán lẻ, Spa), cùng với các ứng dụng Fintech (chuyển tiền quốc tế, giao dịch) và phần mềm quản lý nuôi trồng thủy sản mang tính ứng dụng cao vào đời sống. Điểm mạnh của mình là tư duy thiết kế kiến trúc rành mạch (Clean Architecture), giải quyết tốt bài toán dữ liệu offline và giao tiếp mượt mà với phần cứng (máy in nhiệt, máy quét). Mình đặc biệt khắt khe về hiệu năng, luôn đảm bảo ứng dụng chạy mượt 60 FPS và không bị rò rỉ bộ nhớ (memory leak). Hiện tại, mình đang tập trung ứng dụng Trí tuệ nhân tạo (Google Gemini Vision AI) kết hợp cùng Generative UI trên Flutter để tạo ra các trải nghiệm tương tác thông minh và đột phá hơn.

---

## 📊 2. CÁC CHỈ SỐ VÀNG BẢO CHỨNG NĂNG LỰC (VERIFIED METRICS)

| Chỉ số | Phạm vi & Dự án | Ý nghĩa kỹ thuật |
| :--- | :--- | :--- |
| **1M+ Downloads** | Hahalolo & Halome Social Travel | Xây dựng và duy trì ứng dụng mạng xã hội & nhắn tin quy mô lớn trên cả iOS và Android. |
| **99.5%+ Crash-Free** | Production Monitoring (Crashlytics) | Quản lý vòng đời bộ nhớ chặt chẽ, bắt ngoại lệ an toàn và tối ưu hóa hiệu năng render 60 FPS. |
| **-30% Thời gian đặt món** | Finviet Technology F&B POS Kiosk | Tối ưu hóa UI/UX flow và xử lý bất đồng bộ trong hệ thống Kiosk tự phục vụ. |
| **226 Tests Pass 100%** | AstroBite Test Suite (`flutter test`) | Toàn bộ kiểm thử tự động từ Domain, Repositories, Notifiers đến Widget UI đạt 100% Pass, 0 lỗi cảnh báo. |
| **< 2.5s Latency & 60 FPS** | AstroBite AI Scanner & Claymorphic UI | Nhận diện món ăn Gemini AI siêu tốc và hiển thị mượt mà 60 FPS trên mọi thiết bị di động (0 memory leak). |

---

## 🌌 3. DỰ ÁN TIÊU BIỂU: ASTROBITE (v2.5.1)

> **Tên dự án**: **AstroBite — Smart AI Food Scanner**  
> **Vai trò**: **Mobile Engineer & System Architect**  
> **Nền tảng**: Flutter 3.x, iOS & Android | **Backend & AI**: Google Gemini Multimodal Vision AI, Firebase  
> **Kiến trúc**: Feature-First Clean Architecture, Riverpod 2.x, Flutter Generative UI (GenUI), Ponytail Mindset  
> **Phiên bản mới nhất**: `v2.5.1` (Chiến dịch lột xác toàn diện giao diện Đất nặn 3D Solar Fresh & Hệ thống kiểm thử tự động 226 Tests).

---

### 🥑 3.1. Góc Nhìn Sản Phẩm & Trải Nghiệm Người Dùng (Product Story & Value Proposition)

#### 🎯 Bài toán thị trường & Nỗi đau người dùng (The Problem)
* **Thói quen đứt gánh sau 2 tuần**: Hơn 90% người ăn kiêng hoặc tập luyện bỏ cuộc vì việc tra cứu cơ sở dữ liệu và cân đo thủ công từng gam thức ăn quá phức tạp và mất thời gian.
* **Giao diện khô khan, thiếu cảm xúc**: Hầu hết các ứng dụng đếm calo hiện tại mang màu sắc y tế lạnh lùng, tạo cảm giác áp lực và kiểm soát thay vì mang lại niềm vui ăn uống lành mạnh.
* **Không hiểu ẩm thực Việt**: Cơ sở dữ liệu quốc tế gặp bế tắc khi nhận diện các món ăn hỗn hợp quen thuộc của người Việt (Phở, Cơm tấm sườn bì chả, Bún bò, Bánh mì...).

#### 💡 Đột phá AstroBite — Biến Ăn Uống Lành Mạnh Thành Thói Quen Vui Vẻ (The Solution)
AstroBite tái định nghĩa trải nghiệm theo dõi dinh dưỡng bằng cách kết hợp **Trí tuệ nhân tạo thị giác Gemini** và **Ngôn ngữ thiết kế Đất nặn Claymorphic 3D**:

1. 📸 **"Chụp 1 giây — Thấu hiểu trọn bữa ăn" (Instant AI Food Scanner)**:
   * Chỉ cần 1 bức ảnh chụp bàn ăn, AI phân tích trong **dưới 2.5 giây**, bóc tách từng món và tính toán chính xác tổng Calo cùng 3 chất đa lượng theo chuẩn màu trực quan: **🌾 Tinh bột (Carbs - Xanh dương `#1CB0F6`)**, **🥩 Chất đạm (Protein - Cam `#FF9600`)**, **💧 Chất béo (Fat - Hồng `#FF5C8D`)**.
   * Am hiểu sâu sắc các món ăn Việt Nam phức tạp và ẩm thực thế giới.
2. 🧸 **"Giao diện Đất nặn 3D Solar Fresh" (Solar Fresh Claymorphic UI)**:
   * Toàn bộ nút bấm, thanh tiến độ và thẻ món ăn được thiết kế phồng xốp mềm mại với hiệu ứng đàn hồi tactile 3D trên nền kem sữa dịu mắt (`#FAF8F5`).
   * Biến việc ghi chép mỗi bữa ăn thành tương tác xả stress vui nhộn, kích thích cảm giác ăn ngon và tạo động lực mở app mỗi ngày.
3. 💬 **"Trợ lý AI Coach trò chuyện như chuyên gia dinh dưỡng riêng" (Interactive GenUI Chat)**:
   * Người dùng trò chuyện tự nhiên bằng tiếng Việt (*"Tối nay mình còn 450 calo thì nên ăn gì?", "Ly trà sữa trân châu 50% đường này bao nhiêu calo?"*).
   * AI không chỉ trả lời bằng chữ mà sinh ra trực tiếp **Thẻ món ăn tương tác sống động ngay trong chat**, cho phép bấm nút tăng giảm khẩu phần (+/-20g) và bấm **[1-Chạm Lưu]** vào nhật ký tức thì.
4. 🛡️ **"Cơ chế Khiên Sao giữ chuỗi thói quen" (Starlight Streak Shield)**:
   * Thay vì trừ điểm hay xóa chuỗi gây áp lực, cơ chế Khiên Sao thông minh tự động bảo vệ chuỗi ngày lành mạnh khi người dùng lỡ quên 1 bữa, duy trì tỷ lệ gắn bó D30 Retention dài hạn.
5. 📱 **"Tiện ích Màn hình khóa (Home Screen & Lock Screen Widgets)"**:
   * Theo dõi nhanh lượng calo còn lại trong ngày và mở máy ảnh quét món ăn ngay trên màn hình chính iOS & Android chỉ với 1 chạm (< 300ms) mà không cần tìm mở app.

---

### 🚀 3.2. Góc Nhìn Công Nghệ & Đột Phá Kỹ Thuật (Engineering Highlights & Tech Stack)

> *"Sử dụng nền tảng kỹ thuật phức tạp nhất để mang đến trải nghiệm đơn giản, mượt mà và nhẹ nhàng nhất cho người dùng."*

#### 🛠️ Tech Stack Tổng Thể
* **Mobile Framework**: Flutter 3.x (Dart 3.x) — Multi-platform iOS & Android
* **Kiến trúc phần mềm**: Feature-First Clean Architecture (10 phân hệ nghiệp vụ độc lập)
* **Quản trị State**: `flutter_riverpod: ^2.6.1` (Code generation `@riverpod`, `AsyncNotifier`)
* **Điều hướng**: `auto_route: ^9.2.2` (Type-safe routing, Route Guards)
* **Trí tuệ nhân tạo (AI)**: Google Gemini 2.0 Flash / 3.1 Pro via `firebase_ai`
* **Hạ tầng Cloud**: Firebase (Authentication, Cloud Firestore, Cloud Storage, App Check)
* **Hệ thống Native**: iOS WidgetKit (Swift), Android AppWidget (RemoteViews/Kotlin), Apple Health & Health Connect
* **Kiểm thử & QA**: 226 Automated Tests (`flutter test` 100% Pass), `flutter analyze` 0 lỗi 0 cảnh báo
* **DevOps**: Fastlane tự động ký số, GitHub Actions CI/CD phân phối tự động lên Firebase App Distribution.

#### ⚡ 5 Đột Phá Kỹ Thuật Trọng Yếu (v2.5.1 Innovations)

##### 1. Pipeline Thị Giác Gemini Multimodal AI Siêu Tốc & Tối Ưu Bộ Nhớ
* Tích hợp Google Gemini Multimodal Vision API bóc tách dữ liệu dinh dưỡng chỉ trong **< 2.5s**.
* Ép chặt kết quả trả về theo chuẩn JSON Schema nghiêm ngặt, hỗ trợ cơ chế hoạt động offline thông minh khi kết nối mạng chập chờn.
* Xây dựng luồng xử lý khung hình camera độc lập, giải phóng tài nguyên triệt để sau khi chụp — cam kết **0 rò rỉ bộ nhớ (0 Memory Leak)**.

##### 2. Hệ Thống Design System Claymorphic 2D/3D Độc Bản (Zero Third-Party Bloat)
* Tự nghiên cứu và xây dựng toàn bộ Design System Claymorphic thuần túy bằng Flutter native primitives (không phụ thuộc bất kỳ package bên thứ ba nào), bảo đảm kích thước app gọn nhẹ.
* Mô phỏng hiệu ứng vật lý tactile squash đàn hồi (thu nhỏ 0.98 scale khi nhấn giữ), bo góc phồng 20pt và đổ bóng nổi 2 lớp.
* Tối ưu hóa biểu đồ phân tích xu hướng FL Chart với kỹ thuật bọc phân tách render (`RepaintBoundary`), đảm bảo tốc độ cuộn trang đạt **chuẩn mượt mà 60 FPS** trên mọi dòng điện thoại.

##### 3. Kiến Trúc Generative UI (GenUI) & Giao Thức A2UI Tương Tác 2 Chiều
* Tiên phong đưa kiến trúc Agent-to-User Interface (A2UI) của Google vào Flutter di động: AI không chỉ phản hồi văn bản thông thường mà trực tiếp sinh ra các **Native Widgets sống động** trong khung chat.
* Bộ Widget thông minh gồm thẻ món ăn `MealQuickLogCard`, thước đo ngân sách calo `MacroBudgetGauge` và các chip gợi ý ngữ cảnh phản hồi 2 chiều.
* Tối ưu hóa System Prompt với cơ chế Context Injection (BMR, TDEE, dị ứng, mục tiêu) giữ dưới 250 tokens, tiết kiệm chi phí gọi AI và tối ưu tốc độ phản hồi.

##### 4. Tiện Ích Màn Hình Khóa Đa Nền Tảng (Cross-Platform OS Home Widgets)
* Xây dựng tiện ích màn hình chính cho cả iOS (Swift WidgetKit) và Android (RemoteViews AppWidget) chia sẻ dữ liệu qua AppGroup UserDefaults và SharedPreferences.
* Cơ chế đồng bộ phản ứng tức thì (Reactive Sync) ngay khi người dùng ghi nhận món ăn mà **hoàn toàn không chạy background service ngầm gây hao pin thiết bị**.
* Hỗ trợ deep-link `astrobite://scanner` mở thẳng camera trong **< 300ms**.

##### 5. Độ Ổn Định Tuyệt Đối: 226 Automated Tests & Kiểm Toán An Ninh Zero-Trust
* Xây dựng bộ kiểm thử tự động toàn diện đạt mốc **226 / 226 tests pass 100%** bao phủ từ tầng Domain, Repositories, Notifiers cho đến giao diện Widget.
* Vận hành quy trình kiểm toán an ninh nguồn mã đa tầng theo tiêu chuẩn Cloudflare và OWASP MASVS, kiểm soát chặt chẽ quyền truy cập Firestore Rules và bảo đảm không rò rỉ bất kỳ API key / secret nào ra môi trường client.

---

### 🌐 3.3. English Executive Project Summary (Ready for International CV & Portfolio)

> **Role**: **Mobile Engineer & System Architect**  
> **Project**: **AstroBite — Smart AI Food Scanner** (`v2.5.1`)  
> **Core Stack**: Flutter 3.x, Dart, Riverpod 2.x, Google Gemini Multimodal Vision AI, Firebase, iOS WidgetKit (Swift), Android AppWidget (Kotlin).

#### Executive Overview
AstroBite transforms healthy eating from a tedious clinical chore into an engaging, dopamine-rich daily habit. By fusing **Google Gemini Multimodal Vision AI** with a delightful **3D Claymorphic UI**, users simply snap a photo of any meal (with deep localization for complex Asian dishes like Pho and Broken Rice) to receive a full nutritional breakdown within **2.5 seconds**. 

#### Key Achievements & Engineering Impact (STAR Format)
* **Instant Multimodal AI Food Scanner**: Engineered an end-to-end image processing pipeline streaming camera buffers to Gemini Vision AI, delivering calorie and macronutrient estimates in **< 2.5s** with an independent buffer disposal architecture that eradicated 100% of memory leaks.
* **Proprietary Claymorphic 2D/3D Design System**: Architected a custom tactile design language natively in Flutter without external third-party dependencies, featuring squishy elastic button physics (`0.98` tap scale), a 4pt layout grid, and strict nutrient color semantics while maintaining butter-smooth **60 FPS** rendering.
* **Flutter Generative UI (GenUI) Chat Cockpit**: Pioneered Google's Agent-to-User Interface (A2UI) protocol, transforming raw AI output into rich, interactive native widgets inside the chat stream (such as interactive food cards with portion steppers and 1-tap logging).
* **Native OS Widgets & Zero Battery Drain**: Built reactive lock-screen and home-screen widgets for iOS (Swift WidgetKit) and Android (Kotlin AppWidget) with sub-300ms deep-linking into the camera scanner, synchronized via reactive state without background battery drain.
* **Enterprise Stability & Quality Gates**: Established an automated CI/CD pipeline and comprehensive test suite reaching **226/226 automated tests passed (100%)**, zero lint warnings, and zero secret leaks under a Cloudflare-inspired Zero-Trust security audit.

---

## 💼 4. KINH NGHIỆM LÀM VIỆC THƯƠNG MẠI (WORK EXPERIENCE)

### 🏢 1. FINVIET TECHNOLOGY
* **Thời gian**: Tháng 08/2025 – Tháng 08/2026
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
* **Vị trí**: **Mobile Developer (iOS & Flutter)**
* **Dự án & Sản phẩm**: Phát triển hệ sinh thái 6 ứng dụng (Mạng xã hội, OTT, Du lịch, Fintech & Outsource)
* **Các ứng dụng trong hệ sinh thái & Đóng góp chi tiết**:

  1. **Hahalolo — Mạng xã hội Du lịch** *(Native iOS & Flutter, Team Mobile: 4 người)*
     * Phát triển ứng dụng mạng xã hội du lịch đạt **1M+ lượt tải** trên App Store & Google Play.
     * Xây dựng module Native iOS bằng **Swift, UIKit** theo kiến trúc **VIPER**.
     * Tích hợp các module Flutter qua cơ chế **Add-to-App**, đảm bảo trải nghiệm xuyên suốt giữa native và Flutter.

  2. **Halome — Nhắn tin OTT Realtime** *(Native iOS Swift, Team Mobile iOS: 2 người)*
     * Xây dựng từ đầu ứng dụng nhắn tin tức thời bằng **Native iOS Swift** theo kiến trúc **MVVM**.
     * Tích hợp **Socket.IO** cho giao tiếp realtime, **RxSwift** cho reactive data binding.
     * Lưu trữ tin nhắn offline bằng **SQLite**, đảm bảo trải nghiệm liền mạch khi mất kết nối.
     * Triển khai **CallKit SDK** cho cuộc gọi VoIP trên màn hình khóa iOS.
     * Phát triển các tính năng nâng cao: tin nhắn tự xóa (auto-delete messages), gọi video, lịch hẹn, chế độ ẩn danh (incognito mode).

  3. **Haloki — Fintech: Chuyển tiền Đa quốc gia** *(Flutter)*
     * Bảo trì và sửa lỗi ứng dụng chuyển tiền quốc tế (hỗ trợ **192 quốc gia**) trên Flutter.
     * Đảm bảo tính ổn định luồng giao dịch tài chính, xác thực **KYC** và bảo mật dữ liệu người dùng.

  4. **Hahalolo Invest — Fintech: Giao dịch Cổ phiếu** *(Flutter)*
     * Bảo trì và sửa lỗi ứng dụng giao dịch cổ phiếu nội bộ công ty trên Flutter.
     * Xử lý các nghiệp vụ hiển thị biểu đồ realtime, danh mục đầu tư và lệnh mua/bán.

  5. **Aquannets — Outsource cho Galactic Holdings** *(Flutter, Team Mobile: 2 người)*
     * Phát triển ứng dụng quản lý nuôi trồng thủy sản (outsource cho **Tập đoàn Galactic Holdings**).
     * Áp dụng **Clean Architecture** kết hợp **Riverpod**, lưu trữ dữ liệu local bằng **SQLite** cho chế độ offline-first tại ao nuôi.

  6. **SocTrip — QC & Kiểm thử**
     * Đảm nhận vai trò **QC (Quality Control)** cho ứng dụng mạng xã hội du lịch SocTrip.
     * Kiểm thử đầu cuối (end-to-end testing), viết test cases, regression testing và xác nhận chất lượng trước mỗi lần release lên Store.

* **Công nghệ sử dụng**: iOS Swift, UIKit, VIPER, MVVM, RxSwift, Socket.IO, SQLite, CallKit, Flutter, Add-to-App, Clean Architecture, Riverpod, Firebase Crashlytics, KYC, Bitrise

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
| **Kiến trúc & Quản lý State** | **Clean Architecture (Feature-First)**, **VIPER**, **Riverpod 2.x (Code-Gen)**, **BLoC**, **RxSwift**, AutoRoute, Freezed, MVVM, SOLID, Modularization, Offline-First Architecture |
| **Dữ liệu & Thời gian thực** | WebSocket, Socket.IO, RESTful API, SQLite, Cloud Firestore, Local Caching & Background Sync |
| **AI & Điện toán Đám mây** | **Google Gemini Multimodal AI (Vision & Flash)**, **Flutter GenUI (A2UI Protocol)**, Firebase (Auth, Firestore, Storage, App Check, Crashlytics, FCM, Remote Config) |
| **Hệ thống & Tích hợp Phần cứng** | **iOS WidgetKit, Android AppWidget**, Platform Channels (MethodChannel), Máy in nhiệt POS (ESC/POS), Máy quét mã vạch/QR, **Apple HealthKit, Android Health Connect, iOS CallKit** |
| **DevOps, CI/CD & Testing** | **Fastlane, GitHub Actions, Bitrise**, 226 Unit/Widget Tests (`flutter test`), App Store Connect, Google Play Console, Git Submodules, Makefile automation |
| **Công cụ & Phương pháp luận** | Git, Git Worktrees, Jira, Agile/Scrum, Cursor IDE, Claude Code, Antigravity |

---

## 📝 7. NỘI DUNG MẪU SẴN SÀNG COPY VÀO CV / PROFILE

### 🇬🇧 Bản Tiếng Anh chuẩn Quốc Tế (Chuẩn STAR / Google XYZ: Accomplished [X], measured by [Y], by doing [Z])

#### Section: Personal Projects
```markdown
ASTROBITE — AI Food Scanner & GenUI Calorie/Macro Tracker | Mid Mobile Engineer
Tech Stack: Flutter 3.x, Riverpod 2.x, AutoRoute 9.x, Gemini 3.8 Flash (firebase_ai), GenUI (A2UI), Firebase, iOS WidgetKit, Android AppWidget, Fastlane, GitHub Actions CI/CD (226 Tests).
• Architected and delivered AstroBite (v2.5.1 Solar Fresh 3D Clay), a nutrition tracking ecosystem featuring a Solar Fresh Claymorphic UI, implementing Feature-First Clean Architecture with Riverpod 2.x code-gen across 10 independent domain modules.
• Engineered an end-to-end Gemini Multimodal Vision AI scanner (firebase_ai), identifying complex dishes within 2–4 seconds and extracting macronutrients (Calories, Carbs, Protein, Fat) with 0 memory leaks.
• Pioneered a Generative UI (GenUI) Chat Cockpit (ADR-06) using the A2UI Protocol with Gemini 3.8 Flash, generating native interactive widgets (MealQuickLogCard, MacroBudgetGauge) with 1-tap Firestore diary logging.
• Implemented cross-platform Home Screen Widgets (home_widget) for iOS WidgetKit and Android AppWidget via AppGroup UserDefaults & SharedPreferences, providing sub-300ms camera scanner deep-linking and reactive offline sync.
• Automated multi-platform release pipelines (APK/AAB/IPA) using Fastlane and GitHub Actions, delivering builds to Firebase App Distribution with 226 automated unit and widget tests (100% pass rate).
```

#### Section: Work Experience
```markdown
FINVIET TECHNOLOGY | Mobile Developer (Aug 2025 – Aug 2026)
• Built multi-industry POS cashier screens and Self-Order Kiosks tailored for F&B (table layout, kitchen tickets), Retail (barcode checkout), and Spa Services (technician booking, treatment packages), accelerating transactions by 30%.
• Implemented feature-level Role-Based Access Control (RBAC) across cashiers, stockkeepers, spa therapists, store managers, and administrators.
• Developed Product/Service Catalog Management and Multi-Tier Price List modules (branch-based pricing, combo meals, spa service tiers, and promotional discounts).
• Built end-to-end Inventory Management: goods receipt & issue notes (phiếu nhập/xuất kho), stock tracking, and real-time inventory reconciliation.
• Shipped comprehensive Sales & Inventory Reporting modules (shift revenue, multi-model sales analytics for F&B/Retail/Spa, stock balance).
• Designed and delivered an offline-first order synchronization engine using Clean Architecture, BLoC, and SQLite, ensuring 100% order persistence during network disconnects.
• Developed custom Android (Kotlin) Platform Channels to interface with hardware thermal POS receipt printers (ESC/POS) and barcode scanners.
• Streamlined multi-platform store releases through automated Fastlane and GitHub Actions CI/CD workflows.

HAHALOLO SOCIAL TRAVEL NETWORK | Mobile Developer — iOS & Flutter (May 2020 – Jun 2025)
Ecosystem of 6 Apps: Social Network, OTT Messaging, Travel, Fintech & Outsource

• [Hahalolo — Travel Social Network] Developed the flagship travel social app (1M+ downloads). Built native iOS modules (Swift, UIKit) with VIPER architecture, integrated Flutter via Add-to-App. Mobile team: 4.
• [Halome — OTT Realtime Messaging] Engineered real-time messaging app from scratch using Native iOS Swift (MVVM). Socket.IO for realtime, RxSwift for reactive binding, SQLite for offline storage. Implemented CallKit SDK for VoIP, auto-delete messages, video calls, calendar, incognito mode. iOS team: 2.
• [Haloki — Fintech: International Money Transfer] Maintained and bug-fixed international money transfer app (192 countries) in Flutter. Ensured stable financial transaction flows, KYC verification and user data security.
• [Hahalolo Invest — Fintech: Stock Trading] Maintained and bug-fixed stock trading app in Flutter. Real-time chart rendering, portfolio management and buy/sell order workflows.
• [Aquannets — Outsource for Galactic Holdings] Developed aquaculture farm management app (outsourced for Galactic Holdings Group) in Flutter. Clean Architecture + Riverpod, SQLite offline-first at farming ponds. Mobile team: 2.
• [SocTrip — QC & Testing] Served as QC for the SocTrip travel social app: end-to-end testing, test cases, regression testing and quality sign-off before each Store release.
Tech: iOS Swift, UIKit, VIPER, MVVM, RxSwift, Socket.IO, SQLite, CallKit, Flutter, Add-to-App, Clean Architecture, Riverpod, KYC, Bitrise
```

---

### 🇻🇳 Bản Tiếng Việt (Ngắn gọn, súc tích cho thị trường trong nước)

```markdown
DỰ ÁN TIÊU BIỂU: ASTROBITE (AI Food Scanner & GenUI Macro Tracker)
Vai trò: Mid Mobile Engineer | Công nghệ: Flutter, Riverpod 2.x, AutoRoute, Gemini Flash AI, GenUI A2UI, Firebase, Fastlane.
- Chủ trì thiết kế kiến trúc toàn diện dự án AstroBite theo mô hình Feature-First Clean Architecture, phân tách 10 phân hệ nghiệp vụ, quản lý state bất đồng bộ an toàn qua Riverpod 2.x code-gen.
- Tích hợp Google Gemini Multimodal Vision AI nhận diện bữa ăn phức tạp trong 2–4s, trích xuất chính xác calo/macro với 0 rò rỉ bộ nhớ.
- Thiết kế giao thức A2UI Protocol (ADR-06) biến hội thoại AI thành buồng lái tương tác (Chat Cockpit), sinh trực tiếp các widget động có thể tương tác 2 chiều và lưu dữ liệu 1 chạm vào Firestore.
- Xây dựng tiện ích màn hình chính iOS WidgetKit & Android AppWidget chia sẻ qua AppGroup/SharedPreferences, hỗ trợ deep-link mở camera <300ms và cơ chế Streak Engine bảo vệ chuỗi ngày.
- Thiết lập pipeline CI/CD với Fastlane & GitHub Actions tự động build APK/IPA lên Firebase App Distribution, bảo chứng bởi 226 bài kiểm thử tự động pass 100%.
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
> **Trả lời**: *"Tôi thiết lập quy trình 8 Cổng Chất Lượng (8-Gate SOP) kết hợp văn hóa Ponytail: từ Gate 0 nghiên cứu kiến trúc (ADR), Gate 3 thiết kế kịch bản test BDD Gherkin, Gate 5 Review code triệt tiêu bloat, đến Gate 6 xác minh 226 automated unit & widget tests đạt tỷ lệ 100% pass thực chất. Cuối cùng tại Gate 7, tôi làm chủ pipeline CI/CD bằng Fastlane và GitHub Actions: tự động biên dịch Android APK/AAB và iOS IPA, kiểm tra giới hạn kích thước binary, và đẩy trực tiếp lên Firebase App Distribution cho nhóm internal testers."*

---

> [!NOTE]
> File này được lưu trữ tại [**`PORTFOLIO_PROFILE.md`**](file:///Users/nguyenduytrang/flutter_project/AstroBite/PORTFOLIO_PROFILE.md) trong thư mục gốc của dự án. Bạn có thể mở ra để xem định dạng Markdown sắc nét bất cứ lúc nào!
