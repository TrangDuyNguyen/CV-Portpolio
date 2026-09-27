# Implementation Plan: Mobile Engineer Portfolio & AstroBite Flagship Showcase

- **Design Spec**: [2026-09-26-portfolio-astrobite-design.md](file:///Users/nguyenduytrang/CV+Portpolio/docs/superpowers/specs/2026-09-26-portfolio-astrobite-design.md)
- **Role**: **Mobile Engineer** (Mid-Level)
- **Tech Stack**: Vite + React 18 + TypeScript + Tailwind CSS v3 + Lucide Icons
- **Target Aesthetic**: Modern Minimalist Tech (Linear / Vercel style dark theme)

---

## Giai đoạn 1: Khởi tạo Project & Cấu hình Hạ tầng (Setup & Config)

1. **Khởi tạo Vite + React + TypeScript**:
   - Khởi tạo project trong thư mục hiện tại hoặc tạo cấu trúc `package.json`, `tsconfig.json`, `vite.config.ts`.
   - Cài đặt dependencies: `react`, `react-dom`, `lucide-react`.
   - Cài đặt devDependencies: `@types/react`, `@types/react-dom`, `typescript`, `vite`, `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/typography`.
2. **Cấu hình Tailwind CSS & Fonts**:
   - `tailwind.config.js`: Thêm bảng màu Dark Minimalist (`#090D16`, `#0F172A`, `#1E293B`), hairline border colors, cyan/emerald subtle accents.
   - `src/index.css`: Cấu hình custom scrollbar, glow utilities, smooth scrolling behavior.
3. **Cấu hình Assets & Public**:
   - Đảm bảo file `Mobile Engineer_Nguyen Duy Trang.pdf` nằm trong `public/` để hỗ trợ tải CV trực tiếp.
   - Sao chép và ánh xạ các ảnh chụp màn hình trong `assets/` sang `public/screenshots/` hoặc import trực tiếp.

---

## Giai đoạn 2: Xây dựng Module Dữ liệu (Single Source of Truth)

1. `src/types/index.ts`:
   - Định nghĩa types: `ProfileInfo`, `StatMetric`, `ProjectFeature`, `ScreenshotItem`, `CareerMilestone`, `SkillCategory`.
2. `src/data/profileData.ts`:
   - Họ tên, định vị `Mobile Engineer (Mid-Level)`, liên hệ, 4 chỉ số vàng (1M+, 99.5%, 198 tests, <2.5s latency).
3. `src/data/astrobiteData.ts`:
   - 4 trụ cột kiến trúc (Gemini Vision AI, GenUI A2UI, Home Widgets & Streak Engine, Clean Architecture).
   - Danh sách các màn hình chụp thực tế kèm metadata (tiêu đề, thẻ danh mục, mô tả kỹ thuật).
4. `src/data/careerData.ts`:
   - Dữ liệu 3 cột mốc: AstroBite, Finviet POS Kiosk, Hahalolo & Halome.
5. `src/data/skillsData.ts`:
   - Ma trận kỹ năng phân 4 nhóm: Mobile Core, Architecture, AI & Cloud, DevOps & Testing.

---

## Giai đoạn 3: Xây dựng Components UI dùng chung (Common Primitives)

1. `src/components/common/Badge.tsx`: Tag hiển thị trạng thái và công nghệ với viền mờ tinh tế.
2. `src/components/common/Button.tsx`: Nút tương tác phong cách Linear/Vercel (viền hairline, hiệu ứng hover subtle glow).
3. `src/components/common/StatCard.tsx`: Thẻ hiển thị chỉ số năng lực với typography sắc nét.
4. `src/components/common/Modal.tsx`: Hộp thoại modal hỗ trợ backdrop-blur, animation mượt mà và phím `Esc` để đóng.

---

## Giai đoạn 4: Xây dựng các Sections chính (Feature Sections)

1. `src/components/layout/Navbar.tsx`:
   - Sticky header với backdrop blur.
   - Badge trạng thái `🟢 Open to Opportunities (Mobile Engineer)`.
   - Smooth navigation anchors & nút tải CV.
2. `src/components/sections/HeroSection.tsx`:
   - Định vị Mobile Engineer, headline ấn tượng.
   - 4 Stat Bento Cards bảo chứng năng lực.
   - Nút CTA kép: Khám phá AstroBite & Xem CV.
3. `src/components/sections/AstroBiteSection.tsx`:
   - Giới thiệu tổng quan Flagship AstroBite v2.0.
   - 4 Bento Cards bóc tách 4 trụ cột kỹ thuật.
4. `src/components/sections/GalleryLightbox.tsx`:
   - Lưới hiển thị các ảnh chụp màn hình thực tế trong khung điện thoại bo góc.
   - Bộ lọc theo danh mục (Tất cả, AI Vision, GenUI, Features).
   - Lightbox modal phóng to ảnh full-screen, điều hướng Next/Previous và chú thích kỹ thuật.
5. `src/components/sections/CareerSection.tsx`:
   - Timeline kinh nghiệm thực chiến (AstroBite, Finviet, Hahalolo).
6. `src/components/sections/EngineeringSection.tsx`:
   - Giới thiệu văn hóa kỹ thuật: Strict Ponytail Mindset & 8-Gate Quality SOP.
7. `src/components/sections/SkillsSection.tsx`:
   - Ma trận kỹ năng trực quan, phân nhóm chuyên môn.
8. `src/components/sections/ContactSection.tsx`:
   - Thẻ liên hệ Terminal-style, nút copy email 1-click, các liên kết mạng xã hội và nút tải CV.
9. `src/components/layout/Footer.tsx`:
   - Footer bản quyền và triết lý làm việc.

---

## Giai đoạn 5: Tích hợp & Kiểm thử Toàn diện (Assembly & QA)

1. **Ghép nối tại `src/App.tsx`**:
   - Đảm bảo toàn bộ luồng trang hoạt động mượt mà, không giật lag.
2. **Kiểm tra TypeScript & Linter**:
   - Chạy `npx tsc --noEmit` để đảm bảo 0 lỗi kiểu dữ liệu.
3. **Kiểm tra Responsive & Giao diện**:
   - Kiểm tra trên Mobile (375px), Tablet (768px), Desktop (1280px+).
   - Kiểm tra tương tác mở Modal, chuyển ảnh và phím tắt `Esc`.
4. **Kiểm tra Tải File CV**:
   - Xác thực nút tải CV mở đúng file PDF.
5. **Kiểm tra Build Production**:
   - Chạy `npm run build` để xác thực bundle tối ưu, không có chunk bị lỗi.
