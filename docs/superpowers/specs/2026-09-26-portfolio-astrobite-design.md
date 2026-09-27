# Design Spec: Mobile Engineer Portfolio & AstroBite Flagship Showcase

- **Author**: Nguyen Duy Trang
- **Positioning**: **Mobile Engineer** (Mid-Level Mobile Engineer | Flutter & Native iOS/Android)
- **Target Project**: Personal Portfolio & Flagship Project Showcase (AstroBite v2.0)
- **Tech Stack**: Vite + React 18 + TypeScript + Tailwind CSS v3 + Lucide Icons
- **Design Aesthetic**: Modern Minimalist Tech (Linear / Vercel dark theme: `#090D16` canvas, hairline borders, subtle glow)
- **Date**: 2026-09-26

---

## 1. Mục tiêu & Định vị Dự án (Goals & Positioning)

### 1.1. Mục tiêu Cốt lõi
Xây dựng một trang Landing Page Portfolio cá nhân hiện đại, tốc độ cao, tôn vinh năng lực chuyên môn của một **Mobile Engineer (Mid-Level)** thực chiến, đồng thời làm nổi bật dự án Flagship **AstroBite v2.0** (AI Food Scanner & GenUI Calorie/Macro Tracker).

### 1.2. Định vị Chuyên môn (Professional Positioning)
- **Chức danh định vị**: **Mobile Engineer** (Mid-Level Mobile Engineer)
- **Chuyên môn cốt lõi**: Flutter (Dart) & Native iOS (Swift) / Android (Kotlin), Clean Architecture, Offline-first, Multimodal Vision AI (Google Gemini) & Generative UI (GenUI / A2UI).
- **Chỉ số bảo chứng (Verified Metrics)**:
  - **1M+ Downloads**: Kinh nghiệm vận hành ứng dụng quy mô lớn (Hahalolo & Halome Social Travel).
  - **99.5%+ Crash-Free**: Quản trị độ ổn định sản phẩm trên production.
  - **198 Tests Pass 100%**: Bộ kiểm thử tự động toàn diện trong AstroBite.
  - **< 2.5s Latency & 0 Leak**: Tối ưu pipeline xử lý ảnh camera và inference AI.

---

## 2. Kiến trúc Kỹ thuật (Technical Architecture)

### 2.1. Tech Stack
- **Bundler & Dev Server**: Vite 5.x
- **Framework**: React 18 (TypeScript Strict Mode)
- **Styling**: Tailwind CSS v3, `@tailwindcss/typography`
- **Iconography**: `lucide-react`
- **State Management**: React Native Hooks (`useState`, `useCallback`, `useMemo`) — Zero unnecessary dependencies (Strict Ponytail).
- **Assets**: Bộ sưu tập screenshots thực tế trong thư mục `assets/` và file CV gốc `Mobile Engineer_Nguyen Duy Trang.pdf`.

### 2.2. Cấu trúc Thư mục (Directory Structure)
```
CV+Portpolio/
├── assets/                           # Ảnh chụp màn hình ứng dụng AstroBite
├── public/
│   ├── favicon.svg
│   └── Mobile Engineer_Nguyen Duy Trang.pdf  # File PDF CV phục vụ tải trực tiếp
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.tsx             # Thẻ nhãn tag công nghệ & trạng thái
│   │   │   ├── Button.tsx            # Nút bấm tương tác chuẩn Linear
│   │   │   └── Modal.tsx             # Hộp thoại modal xem ảnh sắc nét
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky header với blurred backdrop
│   │   │   └── Footer.tsx            # Footer tối giản kèm social links
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Định vị Mobile Engineer & 4 chỉ số vàng
│   │       ├── AstroBiteSection.tsx  # Showcase chi tiết dự án AstroBite
│   │       ├── GalleryLightbox.tsx   # Trình xem ảnh screenshot full-screen tương tác
│   │       ├── CareerSection.tsx     # Lộ trình kinh nghiệm làm việc thương mại
│   │       ├── EngineeringSection.tsx# Triết lý Ponytail & kỷ luật 8-Gate Quality
│   │       ├── SkillsSection.tsx     # Ma trận kỹ năng công nghệ
│   │       └── ContactSection.tsx    # Card liên hệ & nút tải CV
│   ├── data/
│   │   ├── profileData.ts            # Dữ liệu cá nhân, thông tin liên hệ, stats
│   │   ├── astrobiteData.ts          # Dữ liệu kỹ thuật, 4 trụ cột kiến trúc, danh mục ảnh
│   │   ├── careerData.ts             # Dữ liệu kinh nghiệm thực chiến (AstroBite, Finviet, Hahalolo)
│   │   └── skillsData.ts             # Danh mục kỹ năng phân theo nhóm
│   ├── types/
│   │   └── index.ts                  # Toàn bộ TypeScript interfaces & types
│   ├── App.tsx                       # Single page ghép nối toàn bộ sections
│   ├── index.css                     # Custom styles, glow effects, theme tokens
│   └── main.tsx                      # Entry point React
├── index.html                        # Root HTML kèm Meta SEO, OpenGraph
├── tailwind.config.js                # Bảng màu dark minimalist, font chữ
├── package.json
└── tsconfig.json
```

---

## 3. Đặc tả Chi tiết các Sections (Section Specifications)

### 3.1. Sticky Navbar
- **Trái**: Tên **Trang Nguyen** kèm badge trạng thái nhấp nháy: `🟢 Open to Opportunities (Mobile Engineer)`.
- **Giữa**: Smooth anchor links: `#about`, `#astrobite`, `#career`, `#engineering`, `#skills`, `#contact`.
- **Phải**:
  - Nút tải CV trực tiếp: `Download CV (PDF)`.
  - Icon liên kết nhanh: GitHub (`github.com/TrangDuyNguyen`), LinkedIn, Email.

### 3.2. Hero Section
- **Visual**: Dark canvas (`#090D16`), hiệu ứng lưới hairline tinh tế, ánh sáng radial xanh dịu mờ phía sau.
- **Badge**: `Mobile Engineer | Flutter & Native iOS/Android`.
- **Headline**: *"Crafting High-Performance Mobile Applications with Vision AI & Clean Architecture"*.
- **Sub-headline**: Kỹ sư di động với hơn 5 năm kinh nghiệm thực chiến, đồng hành cùng các sản phẩm triệu lượt tải, cam kết độ ổn định 99.5%+ crash-free và tốc độ thực thi xuất sắc.
- **4 Thẻ Chỉ số Vàng (Verified Stats Bento Cards)**:
  1. `1M+` Downloads — Sản phẩm mạng xã hội & du lịch (Hahalolo & Halome).
  2. `99.5%+` Crash-Free — Quản lý bộ nhớ nghiêm ngặt, bắt ngoại lệ an toàn trên production.
  3. `198` Tests Pass 100% — Bộ kiểm thử tự động toàn diện trong dự án AstroBite.
  4. `< 2.5s` AI Latency & 0 Leak — Pipeline bóc tách dinh dưỡng qua Gemini Vision AI.
- **CTAs**:
  - Nút chính: `Khám phá Flagship AstroBite ↓` (cuộn mượt tới section AstroBite).
  - Nút phụ: `Tải CV đầy đủ (PDF)` (mở trực tiếp file PDF).

### 3.3. Flagship Showcase: AstroBite v2.0
- **Header**: Badge `FEATURED PROJECT — Mobile Engineer`.
- **Tiêu đề**: `AstroBite: AI Food Scanner & GenUI Calorie/Macro Tracker`.
- **Tóm tắt sản phẩm**: Ứng dụng theo dõi dinh dưỡng và quét calo/macro tức thì qua camera với Google Gemini Vision AI, giao diện Dark Celestial độc bản và kiến trúc Clean Architecture chuẩn mực.
- **4 Trụ cột Kỹ thuật Đột phá (Interactive Bento Cards)**:
  1. **Gemini Multimodal Vision AI & Live AR HUD Camera**:
     - Phân tích bữa ăn phức tạp trong 2–4s.
     - Bóc tách đa lượng theo bảng màu dinh dưỡng chuẩn: Carbs (`#1A73E8`), Fat (`#FF69B4`), Protein (`#FFD700`).
     - Giải phóng camera buffer độc lập, triệt tiêu hoàn toàn rò rỉ RAM (0 memory leak).
  2. **Flutter Generative UI (GenUI) & Giao thức A2UI (ADR-06)**:
     - Biến JSON payload từ Gemini 3.8 Flash thành Native Widgets tương tác trực tiếp (`MealQuickLogCard`, `MacroBudgetGauge`).
     - Context Injection duy trì dưới 250 tokens giúp tiết kiệm chi phí và tăng tốc phản hồi.
  3. **Cross-Platform OS Home Widgets & Streak Engine (ADR-05)**:
     - Hỗ trợ iOS WidgetKit & Android AppWidget chia sẻ dữ liệu qua AppGroup UserDefaults và SharedPreferences.
     - Đồng bộ dữ liệu phản ứng không hao pin ngầm. Thuật toán chuỗi ngày tất định kèm cơ chế Khiên Sao (Starlight Shield).
  4. **Clean Architecture & Enterprise Super-Repo**:
     - Phân tách 10 feature modules độc lập (`scanner`, `tracker`, `analytics`, `coach`...).
     - Quản lý 3 Git Submodules (`docs`, `tests`, `frontend`) và pipeline tự động hóa CI/CD Fastlane.

### 3.4. Showcase Gallery & Lightbox Modal (Tương tác trực quan)
- **Gallery Grid**: Lưới trưng bày các ảnh chụp màn hình thực tế từ thư mục `assets/` được đóng khung trong thiết bị di động bo góc thanh lịch.
- **Bộ lọc / Danh mục**:
  - `Tất cả` (All Screens)
  - `AI Vision Scanner` (AR Camera, bóc tách món ăn)
  - `GenUI & Dashboard` (AstroCoach chat, Daily macro ring)
  - `Features & Gamification` (Recipe builder, Streak engine)
- **Lightbox Modal**:
  - Khi click vào bất kỳ ảnh nào, hộp thoại modal phóng to kích thước lớn, hiển thị:
    - Ảnh chụp màn hình chất lượng cao.
    - Tiêu đề màn hình & Badge phân loại.
    - Chú giải kỹ thuật chuyên sâu (ví dụ: các widgets được sử dụng, cách quản lý state Riverpod, cơ chế render).
    - Các nút điều hướng: Previous (`←`), Next (`→`), Đóng (`Esc` / `✕`).

### 3.5. Commercial Track Record (Kinh nghiệm Thực chiến)
- **AstroBite** (2024 - Hiện tại): Mobile Engineer (Core Developer & AI Integration).
- **Finviet Technology** (2022 - 2024): Mobile Engineer (F&B POS Kiosk, giảm 30% thời gian đặt món, tích hợp phần cứng máy in nhiệt/quét mã).
- **Hahalolo & Halome** (2019 - 2022): Mobile Engineer (Mạng xã hội & OTT Chat 1M+ người dùng, iOS/Android, tối ưu hóa WebRTC/Socket.IO, crash-free 99.5%+).

### 3.6. Engineering Culture (Triết lý Kỹ thuật Ponytail)
- **YAGNI First**: Không viết code phỏng đoán tương lai, loại bỏ triệt để abstraction thừa.
- **Native over Bloat**: Ưu tiên thư viện chuẩn và tính năng native trước khi cài package ngoài.
- **Shortest Working Diff**: Code tinh gọn, rõ ràng, dễ bảo trì.
- **Zero-Tolerance Quality (8-Gate SOP)**: Cam kết 100% test pass thực chất, không du di với lỗi hiệu năng.

### 3.7. Skills Matrix (Ma trận Kỹ năng)
- **Mobile Core**: Flutter, Dart, Swift (iOS), Kotlin (Android), Platform Channels.
- **Architecture & State**: Clean Architecture, Feature-First, Riverpod 2.x, Offline-First, SQLite / Hive.
- **AI & Cloud**: Google Gemini Vision AI, Firebase (Auth, Firestore, Storage), RESTful API, WebSocket.
- **DevOps & Testing**: Fastlane, GitHub Actions CI/CD, Unit/Widget Testing, Firebase App Distribution.

### 3.8. Contact & Download CV Section
- Thẻ liên hệ phong cách Terminal tối giản:
  - Email: `trangndps10349@gmail.com` (có nút copy 1-click).
  - Điện thoại: `0397308962`.
  - GitHub: `github.com/TrangDuyNguyen`.
  - Nút bấm nổi bật: **Tải CV Mobile Engineer (PDF)**.

---

## 4. Hiệu năng & Chỉ tiêu Chất lượng (SLAs & Performance)

- **LCP (Largest Contentful Paint)**: < 1.2 giây.
- **CLS (Cumulative Layout Shift)**: 0.0 (giữ khung cố định cho tất cả hình ảnh).
- **Frame Rate**: Đạt 60 FPS mượt mà trên mọi thiết bị khi cuộn trang hoặc mở modal.
- **Responsive**: Hỗ trợ toàn diện từ màn hình di động nhỏ (360px), tablet đến màn hình 4K.
- **Accessibility**: Đạt chuẩn WCAG 2.1 AA (độ tương phản màu sắc rõ ràng, hỗ trợ điều hướng bàn phím).

---

## 5. Kế hoạch Kiểm thử & Bàn giao (Verification)

1. **Kiểm thử giao diện & Responsive**: Kiểm tra hiển thị trên các viewport Mobile, Tablet, Desktop.
2. **Kiểm thử Gallery Lightbox**: Xác thực mở/đóng modal mượt mà, chuyển ảnh qua lại chính xác, hỗ trợ phím tắt `Esc`, `ArrowLeft`, `ArrowRight`.
3. **Kiểm thử liên kết**: Xác thực các anchor link cuộn đúng vị trí, nút tải CV mở đúng file PDF.
4. **Kiểm tra Console & Build**: 0 lỗi TypeScript, 0 cảnh báo ESLint, build production gọn nhẹ.
