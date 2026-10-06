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
| **277 Tests Pass 100%** | AstroBite Test Suite (`flutter test`) | Toàn bộ 277 kiểm thử tự động từ 12 module Domain, Repositories, Notifiers đến Widget UI đạt 100% Pass, 0 lỗi cảnh báo. |
| **< 2.5s Latency & 60 FPS** | AstroBite AI Scanner & Claymorphic UI | Nhận diện món ăn Gemini AI siêu tốc và hiển thị mượt mà 60 FPS trên mọi thiết bị di động (0 memory leak). |

---

## 🌌 3. DỰ ÁN TIÊU BIỂU: ASTROBITE (v3.0.0 — MAJOR MILESTONE)

> **Tên dự án**: **AstroBite — Smart AI Food Scanner & Voice Calorie Tracker**  
> **Vai trò**: **Senior Mobile Engineer & System Architect**  
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
4. 💬 **Trợ Lý AI Coach Trò Chuyện Tương Tác Sống Động (Interactive GenUI Chat)**:
   * Người dùng trò chuyện tự nhiên bằng tiếng Việt (*"Tối nay mình còn 350 calo thì nên ăn gì nhẹ bụng mà no lâu?"*).
   * AI không chỉ trả lời bằng chữ mà sinh ra trực tiếp **Thẻ món ăn tương tác sống động ngay trong chat**, cho phép bấm nút tăng giảm khẩu phần (+/-20g) và bấm **[1-Chạm Lưu]** vào nhật ký tức thì.
5. 🧸 **Giao Diện Đất Nặn 3D Solar Fresh Đàn Hồi Vui Vẻ (Claymorphic UI)**:
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

> **Role**: **Senior Mobile Engineer & System Architect**  
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
| **Ngôn ngữ & Framework** | **Flutter, Dart, Swift, SwiftUI, UIKit, Kotlin**, HTML5, CSS3, JavaScript |
| **Kiến trúc & Quản lý State** | **Clean Architecture (Feature-First)**, **VIPER**, **Riverpod 2.x (Code-Gen)**, **BLoC**, **RxSwift**, AutoRoute, Freezed, MVVM, SOLID, Modularization, Offline-First Architecture |
| **Dữ liệu & Thời gian thực** | WebSocket, Socket.IO, RESTful API, SQLite, Cloud Firestore, Local Caching & Background Sync |
| **AI & Điện toán Đám mây** | **Google Gemini Multimodal AI (Vision & Flash)**, **Flutter GenUI (A2UI Protocol)**, Firebase (Auth, Firestore, Storage, App Check, Crashlytics, FCM, Remote Config) |
| **Hệ thống & Tích hợp Phần cứng** | **iOS WidgetKit, Android AppWidget**, Platform Channels (MethodChannel), Máy in nhiệt POS (ESC/POS), Máy quét mã vạch/QR, **Apple HealthKit, Android Health Connect, iOS CallKit** |
| **DevOps, CI/CD & Testing** | **Fastlane, GitHub Actions, Bitrise**, 277 Unit/Widget Tests (`flutter test`), App Store Connect, Google Play Console, Git Submodules, Makefile automation |
| **Công cụ & Phương pháp luận** | Git, Git Worktrees, Jira, Agile/Scrum, Cursor IDE, Claude Code, Antigravity |

---

## 📝 7. NỘI DUNG MẪU SẴN SÀNG COPY VÀO CV / PROFILE

### 🇬🇧 Bản Tiếng Anh chuẩn Quốc Tế (Chuẩn STAR / Google XYZ: Accomplished [X], measured by [Y], by doing [Z])

#### Section: Personal Projects
```markdown
ASTROBITE — AI Food Scanner & Voice Calorie Tracker (v3.0.0) | Senior Mobile Engineer & Architect
Tech Stack: Flutter 3.x, Riverpod 2.6 (AsyncNotifier), AutoRoute 9.x, Gemini 3.8 Flash Vision & NLU, GenUI (A2UI), Firebase, iOS WidgetKit (Swift), Android AppWidget (Kotlin), Fastlane, GitHub Actions CI/CD (277 Tests).
• Architected AstroBite (v3.0.0) using Feature-First Clean Architecture across 12 decoupled business modules, maintaining 100% test pass rate across 277 automated unit and widget tests with zero static analysis issues.
• Pioneered AstroVoice AI: a hands-free Vietnamese voice logging engine combining on-device speech recognition with Gemini 3.8 Flash NLU, parsing colloquial Asian units (bowls, glasses, pieces) and rendering GenUI 1-tap logging cards in ~45ms with ~1.1s AI latency.
• Engineered a multi-modal Gemini Vision pipeline recognizing complex dishes in <2.5s and pioneering Multi-Region Asian Cuisine Intelligence with automatic broth & topping separation, slashing manual logging friction by 68%.
• Designed a proprietary Claymorphic 2D/3D Design System natively in Flutter without third-party bloat, delivering tactile squash physics (0.98 scale) and locked nutrient color semantics at a consistent 60 FPS.
• Implemented Flutter Generative UI (GenUI) via the A2UI protocol, rendering rich, bidirectional interactive widgets directly inside chat streams for instant Firestore mutations.
• Built cross-platform lock-screen and home-screen widgets (iOS WidgetKit & Android AppWidget) supporting sub-300ms camera scanner deep-linking with reactive zero-background-drain sync.
• Automated multi-platform release pipelines (APK/AAB/IPA) using Fastlane and GitHub Actions, delivering builds to Firebase App Distribution under a Zero-Trust security audit.
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

• [Hahalolo — Travel Social Network] Developed the flagship travel social app (1M+ downloads) focusing on Tour, Flight, Hotel booking, Community Site, and Handnotes. Built native iOS modules (Swift, Autolayout) with VIPER architecture and Cocoapods. Integrated Google Maps, Push Notifications, Deep Linking, and Autoplay Video. Added Flutter modules via Add-to-App. Monitored via Firebase Crashlytics. Mobile team: 20.
• [Halome — OTT Realtime Messaging] Engineered real-time messaging app (SSO, Anonymous) from scratch using Native iOS Swift (MVVM). Integrated Starscream (WebSocket) for realtime, Alamofire for API, IG List for chat rendering, RxSwift, and SQLite for offline storage. Implemented CallKit SDK for audio/video calls, multimedia sharing, location sharing, and DeepLink for web-to-app chats. iOS team: 5.
• [Haloki — Fintech: International Money Transfer] Maintained and bug-fixed international money transfer app (192 countries) in Flutter. Ensured stable financial transaction flows, KYC verification and user data security.
• [Hahalolo Invest — Fintech: Stock Trading] Maintained and bug-fixed stock trading app in Flutter. Real-time chart rendering, portfolio management and buy/sell order workflows.
• [Aquannets — Outsource for Galactic Holdings] Developed aquaculture farm management app (outsourced for Galactic Holdings Group) in Flutter. Clean Architecture + Riverpod, SQLite offline-first at farming ponds. Mobile team: 2.
• [SocTrip — QC & Testing] Served as QC for the SocTrip travel social app: end-to-end testing, test cases, regression testing and quality sign-off before each Store release.
Tech: iOS Swift, UIKit, VIPER, MVVM, RxSwift, Socket.IO, SQLite, CallKit, Flutter, Add-to-App, Clean Architecture, Riverpod, KYC, Bitrise
```

---

### 🇻🇳 Bản Tiếng Việt (Ngắn gọn, súc tích cho thị trường trong nước)

```markdown
DỰ ÁN: ASTROBITE — AI Food Scanner & Hands-Free Calorie Tracker (v3.0.0)
Vai trò: Senior Mobile Engineer & System Architect | Công nghệ: Flutter 3.x, Riverpod 2.6, AutoRoute, Gemini 3.8 Flash (Vision & NLU), GenUI (A2UI), Firebase, iOS WidgetKit, Android AppWidget, Fastlane, GitHub Actions.
- Chủ trì kiến trúc hệ sinh thái AstroBite theo Feature-First Clean Architecture với 12 phân hệ nghiệp vụ độc lập (`scanner`, `voice`, `tracker`, `coach`, `social`...), bảo đảm độ ổn định tuyệt đối với 277 automated tests pass 100% và 0 lỗi linter.
- Tiên phong triển khai AstroVoice AI — ghi chép dinh dưỡng rảnh tay bằng giọng nói tiếng Việt tự nhiên (`vi-VN`) kết hợp Gemini NLU bóc tách đơn vị dân dã (bát, tô, quả, cái, ly) và GenUI 1-Tap Log lưu dữ liệu chỉ trong ~45ms (độ trễ AI ~1.1s).
- Phát triển pipeline thị giác Gemini Multimodal AI nhận diện món ăn trong <2.5s và công nghệ bóc tách ẩm thực Á Đông tự động phân chia nước dùng/topping (Phở, Bún bò, Cơm tấm), giảm 68% thao tác sửa số liệu thủ công.
- Sáng tạo hệ thống thiết kế Đất nặn Claymorphic 2D/3D thuần Flutter Primitives với vật lý đàn hồi tactile squash (0.98 scale) và bộ màu dinh dưỡng chuẩn mực, duy trì tốc độ cuộn 60 FPS ổn định.
- Triển khai Flutter Generative UI (GenUI) qua giao thức A2UI biến hội thoại AI thành bảng điều khiển tương tác trực tiếp 2 chiều trong khung chat.
- Xây dựng Cross-Platform OS Home Widgets cho iOS & Android với tính năng deep-link mở camera scanner <300ms và đồng bộ phản ứng tức thì không tiêu tốn pin ngầm.
- Tự động hóa toàn diện quy trình kiểm thử và phát hành (CI/CD) qua Fastlane & GitHub Actions, phân phối trực tiếp lên Firebase App Distribution.
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
