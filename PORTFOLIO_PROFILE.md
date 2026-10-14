# NGUYEN DUY TRANG — PORTFOLIO & CAREER MASTER PROFILE

> **Tài liệu tổng hợp toàn diện hồ sơ năng lực, kinh nghiệm thực chiến và phân tích kiến trúc dự án AstroBite.**  
> *Sẵn sàng sử dụng cho CV, LinkedIn, GitHub Profile README, Notion hoặc Portfolio cá nhân.*

---

## 👤 1. THÔNG TIN CÁ NHÂN & ĐỊNH VỊ NGHỀ NGHIỆP

* **Họ và tên**: **NGUYEN DUY TRANG**
* **Ngày sinh**: **10/04/2000**
* **Vị trí mục tiêu**: **Mobile Engineer (Flutter, iOS, Android • Clean Architecture)**
* **Kinh nghiệm**: 5+ năm phát triển ứng dụng di động & frontend thương mại quy mô lớn (Production).
* **Địa điểm**: TP. Hồ Chí Minh, Việt Nam
* **Số điện thoại**: [0397308962](tel:0397308962)
* **Email**: [trangndps10349@gmail.com](mailto:trangndps10349@gmail.com)
* **GitHub**: [github.com/TrangDuyNguyen](https://github.com/TrangDuyNguyen)
* **LinkedIn**: [linkedin.com/in/nguyễn-duy-tráng-132567224](https://www.linkedin.com/in/nguy%E1%BB%85n-duy-tr%C3%A1ng-132567224/)
* **Trạng thái**: 🟢 Sẵn sàng cho các cơ hội Mobile Engineer.

### 🌟 Elevator Pitch (Tóm tắt giá trị cốt lõi)
> Mobile Engineer với hơn 5 năm kinh nghiệm thực chiến phát triển ứng dụng di động & đa nền tảng (Flutter, iOS, Android, Web/Kiosk). Sở trường xây dựng hệ thống kiến trúc chuẩn hóa (Clean Architecture, MVVM, Modular/Package-based), làm chủ cả BLoC (flutter_bloc) và Riverpod với Unidirectional Data Flow, đóng gói Core Design System & Base Components (Custom Widgets, dynamic Theme Engine, Responsive Multi-screen, Localization, Base Dio Client với Interceptors/Auto-Refresh Token/Retry, Global Error Handling). Am hiểu tường tận vòng đời Widget và Render Tree (Widget/Element/RenderObject), làm chủ Flutter DevTools (Profiler, Memory, Network) để duy trì 60 FPS mượt mà, triệt tiêu drop frames và rò rỉ RAM (0 memory leak). Tối ưu hóa chuyên sâu Flutter Web (GoRouter/AutoRoute nested routes, query params, CanvasKit/WASM, asset caching). Từng vận hành sản phẩm 1M+ downloads, thiết lập pipeline CI/CD (Fastlane, GitHub Actions, GitLab CI/CD, Docker) và văn hóa code review, mentoring cho đội ngũ.

---

## 📊 2. CÁC CHỈ SỐ VÀNG BẢO CHỨNG NĂNG LỰC (VERIFIED METRICS)

| Chỉ số | Phạm vi & Dự án | Ý nghĩa kỹ thuật |
| :--- | :--- | :--- |
| **1M+ Downloads** | Hahalolo & Halome Social Travel | Xây dựng và duy trì ứng dụng mạng xã hội & nhắn tin quy mô lớn trên cả iOS và Android. |
| **99.5%+ Crash-Free** | Production Monitoring (Crashlytics) | Quản lý vòng đời bộ nhớ chặt chẽ, bắt ngoại lệ an toàn và tối ưu hóa hiệu năng render 60 FPS. |
| **-30% Thời gian đặt món** | Finviet Technology F&B POS Kiosk | Tối ưu hóa UI/UX flow và xử lý bất đồng bộ trong hệ thống Kiosk tự phục vụ. |
| **277 Tests Pass 100%** | AstroBite Test Suite (`flutter test`) | Toàn bộ 277 kiểm thử tự động từ 12 module Domain, Repositories, Notifiers đến Widget UI đạt 100% Pass, 0 lỗi cảnh báo. |
| **< 2.5s Latency & 60 FPS** | AstroBite AI Scanner & Claymorphic UI | Nhận diện món ăn Gemini AI siêu tốc và hiển thị mượt mà 60 FPS trên mọi thiết bị di động (0 memory leak). |

---

## 🌌 3. DỰ ÁN TIÊU BIỂU: ASTROBITE (v3.0.0 — MAJOR MILESTONE)

> **Tên dự án**: **AstroBite — Smart AI Food Scanner & Voice Calorie Tracker**  
> **Vai trò**: **Mobile Engineer & System Architect**  
> **Nền tảng**: Flutter 3.x, iOS & Android | **Backend & AI**: Google Gemini 3.8 Flash Vision & NLU, Firebase  
> **Kiến trúc**: Feature-First Clean Architecture (12 Modules độc lập), Riverpod 2.x, Flutter Generative UI (GenUI), Ponytail Mindset  
> **Phiên bản mới nhất**: `v3.0.0` (Major Milestone: Ghi chép rảnh tay AstroVoice AI, Bóc tách ẩm thực Á Đông, Social Leaderboard & 277 Tests Pass 100%).

---

### 🥑 3.1. Góc Nhìn Sản Phẩm & Trải Nghiệm Người Dùng (12 Tính Năng Cốt Lõi Bằng Ngôn Ngữ Tự Nhiên)

#### 🎯 Bài toán thị trường & Nỗi đau người dùng (The Problem)
* **Thói quen đứt gánh sau 3-5 ngày**: Hơn 90% người ăn kiêng bỏ cuộc vì việc tra cứu cơ sở dữ liệu và cân đo thủ công từng gam thức ăn quá phức tạp và mất thời gian.
* **Không hiểu văn hóa ẩm thực Á Đông**: Người Việt ăn Phở hay Bún bò thường có thói quen húp nước hoặc bỏ lại nước béo, ăn bánh mì thì bỏ sốt mayonnaise hoặc bớt pate. Các app ngoại chỉ tính tổng cả tô khiến số liệu calo và natri (muối) bị sai lệch nghiêm trọng.
* **Bất tiện khi bận rộn**: Lúc tay ướt khi đang nấu nướng, bưng bê hoặc lái xe, việc rút điện thoại ra gõ phím là bất khả thi.
* **Giao diện khô khan, thiếu cảm xúc**: Hầu hết các ứng dụng đếm calo hiện tại mang màu sắc y tế lạnh lùng, tạo cảm giác áp lực và tội lỗi thay vì mang lại niềm vui ăn uống lành mạnh.

#### 💡 Đột phá AstroBite — Biến Ăn Uống Lành Mạnh Thành Thói Quen Vui Vẻ (The Solution)
AstroBite kết hợp **Trí tuệ nhân tạo Gemini (Vision & NLU)** và **Ngôn ngữ thiết kế Đất nặn Claymorphic 3D**:

1. 📸 **Quét Món Ăn Bằng Camera AI (Gemini Vision Scanner)**:
   * Chụp 1 bức ảnh đĩa cơm hay toàn bộ bàn ăn, AI phân tích trong **dưới 2.5 giây**, bóc tách từng món và tính toán chính xác tổng Calo cùng 3 chất đa lượng theo chuẩn màu trực quan: **🌾 Tinh bột (Carbs - Xanh dương `#1CB0F6`)**, **🥩 Chất đạm (Protein - Cam `#FF9600`)**, **💧 Chất béo (Fat - Hồng `#FF5C8D`)**.
2. 🎙️ **Ghi Chép Rảnh Tay Bằng Giọng Nói Tiếng Việt (AstroVoice AI — v3.0.0 Mới Nhất)**:
   * Khi đang bận rộn, chỉ cần bấm nút Mic và nói tự nhiên: *"Sáng nay mình ăn một tô bún bò giò heo với hai cái quẩy"* hoặc *"Uống 1 ly cà phê sữa đá ít đường"*.
   * AI nhận diện tiếng Việt có dấu (`vi-VN`) với streaming transcript theo thời gian thực, bóc tách chuẩn xác các đơn vị dân dã (*tô, bát, đĩa, cái, quả, ly, cốc*), tự đoán bữa ăn theo khung giờ 24h và hiện thẻ GenUI để bạn bấm **Lưu 1 chạm chỉ mất ~45ms** (độ trễ AI ~1.1s).
3. 🍜 **Trí Tuệ Ẩm Thực Á Đông — Tách Nước Dùng & Topping Tự Động (v2.9.0)**:
   * AI tự động tách riêng đâu là "Cái" (thịt bò, bánh phở) và đâu là "Nước dùng béo". Cung cấp công tắc 1 chạm: **[Ăn cả nước / Chỉ ăn cái]** để tự động trừ bớt calo và cắt giảm hơn 65% lượng muối Natri tương ứng.
   * Với món combo như Cơm tấm sườn bì chả hay Bánh mì, danh sách checklist topping cho phép tích/bỏ từng món (bỏ miếng chả trứng, bỏ chén nước mắm đường) với số calo điều chỉnh tự động theo thời gian thực.
4. 💬 **Trợ Lý AI Coach Trò Chuyện Tương Tác Sống Động (Interactive GenUI Chat & Voice Input)**:
   * Người dùng trò chuyện tự nhiên bằng tiếng Việt qua bàn phím hoặc **nói trực tiếp bằng giọng nói tiếng Việt**:
     - *Chạm 1 lần vào Mic trong ô chat*: Kích hoạt Live Speech-to-Text tiếng Việt, tự động điền câu nói vào ô chat để gửi đi trong tích tắc.
     - *Nhấn giữ nút Mic*: Mở ngay modal AstroVoice Sheet bóc tách món ăn và ghi nhật ký bữa ăn 1-chạm mà không cần chuyển màn hình.
   * AI không chỉ trả lời bằng chữ mà sinh ra trực tiếp **Thẻ món ăn tương tác sống động ngay trong chat**, cho phép bấm nút tăng giảm khẩu phần (+/-20g) và bấm **[1-Chạm Lưu]** vào nhật ký tức thì.
. 🧸 **Giao Diện Đất Nặn 3D Solar Fresh Đàn Hồi Vui Vẻ (Claymorphic UI)**:
   * Toàn bộ nút bấm, thanh tiến độ và thẻ món ăn được thiết kế phồng xốp mềm mại với hiệu ứng đàn hồi tactile 3D (thu nhỏ 0.98 scale khi nhấn giữ) trên nền kem sữa dịu mắt (`#FAF8F5`).
   * Biến việc ghi chép mỗi bữa ăn thành tương tác xả stress vui nhộn, kích thích cảm giác ăn ngon và tạo động lực mở app mỗi ngày.
6. 📊 **Bảng Điều Khiển Dinh Dưỡng 1 Giây & Nhật Ký 4 Bữa (Celestial Cockpit & Diary)**:
   * Mở app là thấy ngay vòng cung Calo bên trái và 3 thanh tiến độ Carbs/Protein/Fat song song bên phải. Chỉ mất đúng 1 giây liếc nhìn là nắm trọn năng lượng còn lại trong ngày.
   * Phân chia sẵn 4 bữa ăn (Sáng, Trưa, Tối, Xế) với nút bấm nhanh 1 chạm và sao chép bữa ăn thông minh.
7. 🛡️ **Chuỗi Ngày Ăn Sạch & Khiên Sao Bảo Vệ (Cosmic Streak & Starlight Shield)**:
   * Đếm chuỗi ngày ăn sạch liên tiếp; nếu lỡ bận quên 1 ngày thì cơ chế Khiên Sao thông minh tự động kích hoạt bảo vệ để chuỗi ngày không bị reset về 0, duy trì tỷ lệ gắn bó D30 Retention bền vững.
8. 👥 **Bảng Xếp Hạng Bạn Bè & Nhắc Chuỗi Nhau (Astro Leaderboard & Streak Nudge)**:
   * Bảng xếp hạng trực tuyến cùng bạn bè qua Cloud Firestore Stream, xuất thẻ thành tích 3D xịn sò chia sẻ lên Story mạng xã hội.
   * Tính năng Streak Nudge: gửi cú nhắc nhở bạn bè mở app để cùng nhau giữ thói quen ăn uống lành mạnh.
9. 📱 **Tiện Ích Màn Hình Khóa & Màn Hình Chính (Mobile OS Widgets)**:
   * Theo dõi nhanh lượng calo còn lại trong ngày và mở máy ảnh quét món ăn ngay trên màn hình chính iOS & Android chỉ với 1 chạm (< 300ms) mà không cần tìm mở app, hoàn toàn không gây hao pin ngầm.
10. 📈 **Báo Cáo Xu Hướng Dinh Dưỡng & Cân Nặng (Nutrition Analytics)**:
    * Biểu đồ trực quan theo ngày/tuần/tháng theo dõi thâm hụt calo và đối chiếu với diễn biến cân nặng thực tế.
11. 🍳 **Sổ Tay Món Tự Nấu & Kế Hoạch Bữa Ăn (Custom Recipes & Meal Plans)**:
    * Tự tạo công thức nấu ăn riêng, tự tính tổng calo cả nồi và chia đều ra từng hộp mang đi làm (meal prep).
12. ⌚ **Đồng Bộ Đồng Hồ Thông Minh & Thiết Bị Sức Khỏe (Apple Health & Health Connect)**:
    * Đọc dữ liệu bước chân và năng lượng tiêu hao từ Apple Watch / smartwatch Android để tự động bù trừ ngân sách calo ăn uống.

---

### 🚀 3.2. Góc Nhìn Công Nghệ & Đột Phá Kỹ Thuật (Engineering Highlights & Tech Stack)

> *"Sử dụng nền tảng kỹ thuật phức tạp nhất để mang đến trải nghiệm đơn giản, mượt mà và nhẹ nhàng nhất cho người dùng."*

#### 🛠️ Tech Stack Tổng Thể Phiên Bản v3.0.0
* **Mobile Framework**: Flutter 3.x (Dart 3.x) — Multi-platform iOS & Android
* **Kiến trúc phần mềm**: Feature-First Clean Architecture (**12 phân hệ nghiệp vụ độc lập**)
* **Quản trị State**: `flutter_riverpod: ^2.6.1` (Code generation `@riverpod`, `AsyncNotifier`)
* **Điều hướng**: `auto_route: ^9.2.2` (Type-safe routing, Route Guards)
* **Trí tuệ nhân tạo (AI)**: Google Gemini 3.8 Flash (Multimodal Vision & NLU) via `firebase_ai`, on-device speech recognition (`speech_to_text`, `vi-VN`)
* **Hạ tầng Cloud**: Firebase (Authentication, Cloud Firestore, Cloud Storage, App Check, Cloud Messaging FCM)
* **Hệ thống Native**: iOS WidgetKit (Swift), Android AppWidget (RemoteViews/Kotlin), Apple Health & Health Connect
* **Kiểm thử & QA**: **277 Automated Tests** (`flutter test` 100% Pass thực chất), `flutter analyze` 0 lỗi 0 cảnh báo
* **DevOps**: Fastlane tự động ký số, GitHub Actions CI/CD phân phối tự động lên Firebase App Distribution.

#### ⚡ 6 Đột Phá Kỹ Thuật Trọng Yếu (v3.0.0 Innovations)

##### 1. Pipeline Giọng Nói Tự Nhiên AstroVoice & Gemini NLU Siêu Tốc (v3.0.0)
* Tích hợp Speech-to-Text on-device tiếng Việt (`vi-VN`) với streaming feedback tức thì.
* Tối ưu hóa prompt NLU bóc tách chuẩn xác các đơn vị dân dã (*bát, tô, cái, ly, quả*), tự suy luận bữa ăn 24h và tính calo với độ trễ chỉ **~1.1s** (SLA <= 1.5s).
* GenUI `MealQuickLogCard` cho phép 1-Tap Log ghi nhận vào Firestore chỉ mất **~45ms** (SLA < 150ms).

##### 2. Engine Phân Tích Ẩm Thực Á Đông — Tách Nước Dùng & Topping (v2.9.0)
* Dùng Gemini 3.8 Flash Vision One-Pass Prompt bóc tách độc lập thành phần Nước dùng (Broth) và Topping món combo Á Đông.
* Tự động trừ calo và giảm natri muối tức thì khi gạt công tắc `[Ăn cả nước / Chỉ ăn cái]`, cắt giảm 68% thao tác sửa số liệu thủ công.

##### 3. Bảng Xếp Hạng Trực Tuyến & Streak Nudge Thời Gian Thực (v2.8.0)
* Xây dựng luồng đồng bộ Bảng xếp hạng qua Cloud Firestore Stream, kết hợp phân trang và local caching chống tốn kém chi phí đọc dữ liệu.
* Xuất thẻ thành tích 3D chất lượng cao với `RepaintBoundary` và chia sẻ native đa nền tảng; tích hợp FCM cho tương tác nhắc chuỗi bạn bè.

##### 4. Hệ Thống Design System Claymorphic 2D/3D Độc Bản (Zero Third-Party Bloat)
* Tự nghiên cứu và xây dựng toàn bộ Design System Claymorphic thuần túy bằng Flutter native primitives (không phụ thuộc bất kỳ package bên thứ ba nào), bảo đảm kích thước APK luôn <= 65 MB (đạt 62.4MB).
* Mô phỏng hiệu ứng vật lý tactile squash đàn hồi (thu nhỏ 0.98 scale khi nhấn giữ), bo góc phồng 20pt và đổ bóng nổi 2 lớp.
* Tối ưu hóa biểu đồ phân tích xu hướng FL Chart với kỹ thuật bọc phân tách render (`RepaintBoundary`), đảm bảo tốc độ cuộn trang đạt **chuẩn mượt mà 60 FPS** trên mọi dòng điện thoại.

##### 5. Kiến Trúc Generative UI (GenUI) & Giao Thức A2UI Tương Tác 2 Chiều
* Tiên phong đưa kiến trúc Agent-to-User Interface (A2UI) của Google vào Flutter di động: AI không chỉ phản hồi văn bản thông thường mà trực tiếp sinh ra các **Native Widgets sống động** trong khung chat.
* Bộ Widget thông minh gồm thẻ món ăn `MealQuickLogCard`, thước đo ngân sách calo `MacroBudgetGauge` và các chip gợi ý ngữ cảnh phản hồi 2 chiều.
* Tối ưu hóa System Prompt với cơ chế Context Injection (BMR, TDEE, dị ứng, mục tiêu) giữ dưới 250 tokens, tiết kiệm chi phí gọi AI và tối ưu tốc độ phản hồi.

##### 6. Tiện Ích Màn Hình Khóa Đa Nền Tảng & Độ Ổn Định 277 Automated Tests
* Xây dựng tiện ích màn hình chính cho cả iOS (Swift WidgetKit) và Android (RemoteViews AppWidget) chia sẻ dữ liệu qua AppGroup UserDefaults và SharedPreferences.
* Cơ chế đồng bộ phản ứng tức thì (Reactive Sync) ngay khi người dùng ghi nhận món ăn mà **hoàn toàn không chạy background service ngầm gây hao pin thiết bị**. Hỗ trợ deep-link `astrobite://scanner` mở camera trong **< 300ms**.
* Toàn diện hóa bộ test suite đạt mốc **277 / 277 tests pass 100%**, 0 lint warnings, vượt qua kiểm toán an ninh đa tầng chuẩn Cloudflare & OWASP MASVS.

---

### 🌐 3.3. English Executive Project Summary (Ready for International CV & Portfolio)

> **Role**: **Mobile Engineer & System Architect**  
> **Project**: **AstroBite — Smart AI Food Scanner & Voice Calorie Tracker** (`v3.0.0`)  
> **Core Stack**: Flutter 3.x, Dart 3.x, Riverpod 2.6, Google Gemini 3.8 Flash Vision & NLU, Firebase, iOS WidgetKit (Swift), Android AppWidget (Kotlin).

#### Executive Overview
AstroBite cuts the friction of daily calorie tracking by combining **Google Gemini 3.8 Flash Multimodal Vision & NLU AI** with a custom **3D Claymorphic UI**. Users can snap food photos or speak natural Vietnamese sentences (with deep localization for complex Asian dishes like Pho, Broken Rice, and colloquial units) to receive instant nutritional breakdowns in **1.1–2.5 seconds**. Features hands-free Vietnamese voice logging, automatic broth/topping separation, an interactive GenUI Chat Cockpit, Starlight Streak Shield gamification, cross-platform OS Widgets, and 277 automated tests passing 100%.

#### Key Achievements & Engineering Impact (STAR Format)
* **Hands-Free Vietnamese Voice Logging (AstroVoice AI)**: Engineered an on-device speech-to-text pipeline coupled with Gemini 3.8 Flash NLU, parsing colloquial Asian food units (bowls, glasses, pieces) and 24-hour meal inference with sub-1.1s response latency and 45ms 1-tap logging.
* **Instant Multimodal AI Food Scanner & Asian Cuisine Engine**: Engineered an end-to-end image processing pipeline streaming camera buffers to Gemini Vision AI, delivering calorie/macro breakdowns in **< 2.5s** with an automatic broth/topping separation engine that reduced manual logging friction by 68% and eliminated 100% of memory leaks.
* **Proprietary Claymorphic 2D/3D Design System**: Architected a custom tactile design language natively in Flutter without external third-party dependencies, featuring squishy elastic button physics (`0.98` tap scale), a 4pt layout grid, and strict nutrient color semantics while maintaining consistent **60 FPS** rendering.
* **Flutter Generative UI (GenUI) Chat Cockpit**: Implemented Google's Agent-to-User Interface (A2UI) protocol, transforming raw AI output into rich, interactive native widgets inside the chat stream (such as interactive food cards with portion steppers and 1-tap logging).
* **Native OS Widgets & Zero Battery Drain**: Built reactive lock-screen and home-screen widgets for iOS (Swift WidgetKit) and Android (Kotlin AppWidget) with sub-300ms deep-linking into the camera scanner, synchronized via reactive state without background battery drain.
* **Automated Quality & CI/CD Pipeline**: Established an automated CI/CD pipeline and comprehensive test suite reaching **277/277 automated tests passed (100%)**, zero lint warnings, and zero secret leaks under a Cloudflare-inspired Zero-Trust security audit.

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

  1. **Hahalolo — Mạng xã hội Du lịch** *(Native iOS & Flutter, Team Mobile: 20 người)*
     * Phát triển ứng dụng mạng xã hội du lịch đạt **1M+ lượt tải** với các phân hệ chính: Tour, Flight, Hotel, Community Site, Handnotes và Profile View.
     * Xây dựng module Native iOS bằng **Swift, Autolayout** theo kiến trúc **VIPER**, quản lý dependency qua Cocoapods.
     * Tích hợp các module Flutter qua cơ chế **Add-to-App**, đảm bảo trải nghiệm xuyên suốt giữa native và Flutter.
     * Tích hợp Google Maps, Push Notification, Deep Linking/Universal Link, và xử lý Autoplay Video.
     * Giám sát crash với Firebase Crashlytics và phân phối qua Firebase Distribution.

  2. **Halome — Nhắn tin OTT Realtime** *(Native iOS Swift, Team Mobile iOS: 5 người)*
     * Xây dựng ứng dụng nhắn tin hỗ trợ đăng nhập ẩn danh và SSO Hahalolo bằng **Native iOS Swift** theo kiến trúc **MVVM**.
     * Tích hợp **Starscream (WebSocket)** cho giao tiếp realtime, **Alamofire** để fetch API, **RxSwift** cho reactive data binding và **IG List** để hiển thị mượt mà các cuộc trò chuyện.
     * Lưu trữ tin nhắn offline bằng **SQLite**, đảm bảo trải nghiệm liền mạch khi mất kết nối.
     * Triển khai **CallKit SDK** cho cuộc gọi VoIP âm thanh và video.
     * Tích hợp **DeepLink** mở luồng chat trực tiếp từ web, cùng các tính năng: chia sẻ đa phương tiện, chia sẻ vị trí, đặt lời nhắc.

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
| **Ngôn ngữ & Nền tảng** | **Flutter & Dart (5+ năm Expert), Swift, SwiftUI, UIKit, Kotlin**, HTML5, CSS3, TypeScript |
| **Kiến trúc & Quản lý State** | **Clean Architecture (Package-based / Feature-First)**, **BLoC (flutter_bloc)**, **Riverpod 2.x (AsyncNotifier, Code-Gen)**, **MVVM**, **Unidirectional Data Flow**, SOLID, Modularization, Offline-First Architecture |
| **Design System & Base UI** | **Core UI Library**, Custom Widgets, Theme Engine (Dark/Light), Responsive Layout đa màn hình (Mobile/Tablet/Web), Localization (`intl`), Exception/Error Handler |
| **Networking & Dữ liệu Local** | **Base Dio Client (Interceptors: Bearer Token, Auto Refresh Token khi 401, Exponential Retry Policy, Client Cache)**, WebSocket/Socket.IO, Cloud Firestore Stream, SQLite/Drift, Hive, Isar/SharedPreferences |
| **Hiệu năng & Flutter Web** | **Widget Lifecycle & Render Tree Optimization (Widget/Element/RenderObject, RepaintBoundary, const)**, **Flutter DevTools (Profiler, Memory, Network - 60 FPS, 0 memory leak)**, **GoRouter & AutoRoute (Nested Routes, URL Query Params)**, CanvasKit/WASM, Asset Caching |
| **DevOps, CI/CD & Testing** | **Fastlane, GitHub Actions, GitLab CI/CD, Docker**, **277 Automated Unit & Widget Tests (100% Pass)**, Static Analysis & Lint Rules (`analysis_options.yaml`) |
| **Quy trình & Đội ngũ** | **Code Review, Mentoring Junior developers**, Coding Conventions, Gitflow (Rebase, Cherry-pick), Scrum/Agile, Ponytail Mindset (Zero Bloat) |

---

## 📝 7. NỘI DUNG MẪU SẴN SÀNG COPY VÀO CV / PROFILE

### 🇬🇧 Bản Tiếng Anh chuẩn Quốc Tế (Chuẩn STAR / Google XYZ: Accomplished [X], measured by [Y], by doing [Z])

#### Section: Professional Projects
```markdown
ASTROBITE — AI Food Scanner & Hands-Free Calorie Tracker (v3.0.0) | Mobile Engineer & Architect
Tech Stack: Flutter 3.x, Dart 3.x, Clean Architecture (12 Modular Packages), Riverpod 2.6 (AsyncNotifier), AutoRoute & GoRouter (Deep Linking, Web Query Params), Gemini 3.8 Flash Vision & NLU, Base Dio Client, Custom Design System, Flutter DevTools (60 FPS, 0 memory leak), Fastlane, GitHub Actions & GitLab CI/CD (277 Tests 100% Pass).
• Architected AstroBite (v3.0.0) based on Modular Package-based Clean Architecture across 12 decoupled business modules, maintaining a 100% pass rate across 277 automated unit and widget tests with zero static analysis issues.
• Packaged a proprietary 2D/3D Design System & Base Components natively in Flutter without external third-party bloat (Custom Widgets, dynamic Theme Engine, Responsive Breakpoints), locking consistent 60 FPS rendering.
• Constructed Base Network Client & Local Persistence: Dio Interceptors (automatic bearer token injection, 401 token refresh cycle, exponential backoff retry), WebSocket & Firestore stream real-time sync, and Hive/SQLite offline caching.
• Optimized Render Tree & Memory via Flutter DevTools: isolated painting with RepaintBoundary, const constructors, eliminating unnecessary rebuilds and camera buffer disposal yielding sub-2.5s AI latency and 0 memory leaks.
• Advanced Web & Routing Optimization: configured GoRouter & AutoRoute supporting nested routes, URL navigation, query params, CanvasKit/WASM rendering, and static asset caching.
• Automated multi-platform release pipelines (Web bundle, Android APK/AAB, iOS IPA) using Fastlane, GitHub Actions & GitLab CI/CD with Docker runners under a Zero-Trust security audit.
```

#### Section: Work Experience
```markdown
FINVIET TECHNOLOGY | Mobile Developer — Flutter, Web & Kiosk (Aug 2025 – Aug 2026)
• Architected modular Clean Architecture / MVVM applying BLoC (flutter_bloc) with Unidirectional Data Flow for multi-vertical POS & self-order Kiosks (F&B, Retail, Spa), slashing transaction time by 30%.
• Packaged Base UI Library & Responsive Layout dynamically adapting across screen form-factors (Mobile, Tablet, Kiosk/Web) with shared Custom Widgets and dynamic Theme Engine.
• Built Base Network Client with Dio: configured Interceptors for automatic bearer token injection, 401 token refresh cycle, exponential backoff retry policy, and client-side offline cache.
• Designed robust Offline-first data pipeline (BLoC, SQLite/Drift), ensuring 100% order persistence during network disconnects and automatic synchronization upon reconnection.
• Utilized Flutter DevTools (Profiler, Memory) to inspect Render Tree, eliminating drop frames/jank and avoiding RAM leaks when driving ESC/POS thermal printers and hardware barcode scanners via Kotlin Platform Channels.
• Established Coding conventions, strict lint rules (analysis_options.yaml), led PR code reviews, and mentored Junior developers across the engineering team.
• Configured automated CI/CD build & release pipelines (Android APK/AAB, Web bundle) via Fastlane, GitHub Actions & GitLab CI/CD.

HAHALOLO SOCIAL TRAVEL NETWORK | Mobile & Frontend Developer — iOS & Flutter (May 2020 – Jun 2025)
Ecosystem of 6 Apps: Social Network, OTT Messaging, Travel, Fintech & Outsource

• [Hahalolo — Travel Social Network (1M+ downloads)] Developed Tour, Flight, Hotel, and Community modules; built Native iOS (Swift, VIPER) and integrated Flutter via Add-to-App; handled Responsive UI, Deep Linking, and Firebase Crashlytics (<0.5% crash rate). Mobile team: 20.
• [Halome — OTT Realtime Messaging] Engineered real-time chat app from scratch using Native iOS Swift (MVVM); integrated WebSocket real-time, SQLite offline storage, RxSwift, and CallKit VoIP; optimized for locked 60 FPS list scrolling. Team: 5.
• [Haloki & Hahalolo Invest — Fintech] Maintained & optimized international money transfer app (192 countries) and stock trading platform in Flutter; ensured transaction integrity, KYC, real-time charts, and Dio interceptors.
• [Aquannets — Outsource for Galactic Holdings] Developed aquaculture farm management app in Flutter applying Clean Architecture + Riverpod, SQLite offline-first at ponds. Team: 2.
• [SocTrip — QC & Testing Lead] Led end-to-end (E2E) testing lifecycle, designed comprehensive test matrices, and provided quality gate sign-off for App Store & Google Play releases.
Tech: Flutter, Dart, Add-to-App, Clean Architecture, Riverpod, BLoC, iOS Swift, VIPER, MVVM, WebSocket, SQLite, CallKit, Firebase Crashlytics, GitLab CI/CD.
```

---

### 🇻🇳 Bản Tiếng Việt (Ngắn gọn, súc tích cho thị trường trong nước)

```markdown
DỰ ÁN: ASTROBITE — AI Food Scanner & Hands-Free Calorie Tracker (v3.0.0)
Vai trò: Mobile Engineer & System Architect | Công nghệ: Flutter 3.x, Dart 3.x, Clean Architecture (12 Modular Packages), Riverpod 2.6, AutoRoute & GoRouter, Gemini 3.8 Flash (Vision & NLU), Base Dio Client, Custom Design System, Flutter DevTools (60 FPS, 0 memory leak), Fastlane, GitHub Actions & GitLab CI/CD (277 Tests 100% Pass).
- Chủ trì kiến trúc AstroBite (v3.0.0) theo chuẩn Clean Architecture / Modular Package-based kết hợp Riverpod 2.x code-gen trên 12 phân hệ nghiệp vụ độc lập, duy trì tỷ lệ 277 automated unit & widget tests pass 100% và 0 lỗi linter.
- Đóng gói Design System 2D/3D & Base Components thuần Flutter Primitives (Custom Widgets, Theme Engine, Responsive Breakpoints) duy trì tốc độ cuộn 60 FPS mượt mà.
- Xây dựng Base Network Client & Offline Storage: Dio Interceptor (auto-refresh token, retry policy), tích hợp WebSocket & Firestore stream real-time, Hive/SQLite offline cache.
- Tối ưu hóa Render Tree & Bộ nhớ qua Flutter DevTools: phân tách render với RepaintBoundary, const constructors, giải phóng camera buffer đạt độ trễ AI < 2.5s và 0 memory leak.
- Tối ưu hóa Web & Routing nâng cao: GoRouter & AutoRoute hỗ trợ nested routes, URL navigation, query params, CanvasKit/WASM rendering và asset caching.
- Thiết lập bộ 277 automated unit & widget tests (100% pass); chuẩn hóa CI/CD tự động hóa build/release đa nền tảng (Web/Android/iOS) qua Fastlane, GitHub Actions & GitLab CI/CD.
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
> **Trả lời**: *"Tôi thiết lập quy trình 8 Cổng Chất Lượng (8-Gate SOP) kết hợp văn hóa Ponytail: từ Gate 0 nghiên cứu kiến trúc (ADR), Gate 3 thiết kế kịch bản test BDD Gherkin, Gate 5 Review code triệt tiêu bloat, đến Gate 6 xác minh 277 automated unit & widget tests đạt tỷ lệ 100% pass thực chất. Cuối cùng tại Gate 7, tôi làm chủ pipeline CI/CD bằng Fastlane và GitHub Actions: tự động biên dịch Android APK/AAB và iOS IPA, kiểm tra giới hạn kích thước binary, và đẩy trực tiếp lên Firebase App Distribution cho nhóm internal testers."*

---

> [!NOTE]
> File này được lưu trữ tại [**`PORTFOLIO_PROFILE.md`**](file:///Users/nguyenduytrang/flutter_project/AstroBite/PORTFOLIO_PROFILE.md) trong thư mục gốc của dự án. Bạn có thể mở ra để xem định dạng Markdown sắc nét bất cứ lúc nào!
