# DESIGN.md — 1:1 Design Specification (`aquadev.site` Replica)

> Đặc tả chi tiết 1:1 về hệ thống thiết kế (Design System), kiến trúc trang, bố cục (Layout), Typography, Bảng màu, và Cơ chế Chuyển động / Tương tác (Interactions & Animations) của **https://aquadev.site/** (Aqua Dev — Akogun Oyindamola Portfolio).

---

## 1. Triết lý & Phong cách Thiết kế (Aesthetic Direction)

- **Phong cách chủ đạo**: **Swiss Brutalist Editorial × Kinetic Typography** (Minimalist Monochrome Awwwards Portfolio).
- **Tương phản cực đại**: Nền trắng tinh khiết (`#FFFFFF`) kết hợp chữ đen tuyền (`#000000`), không dùng đổ bóng mềm (no drop-shadow), không dùng glassmorphism (`backdrop-filter`), không dùng gradient màu mè.
- **Độ sâu thị giác (Visual Depth)** được tạo hoàn toàn từ:
  1. **`mix-blend-mode: difference`**: Con trỏ chuột hình tròn, logo `AD`, đồng hồ thời gian thực, và nút Hamburger Menu tự động đảo màu Đen ↔ Trắng khi đi qua các vùng nền khác nhau.
  2. **Oversized Viewport Typography (`20vw` – `30vw`)**: Chữ tiêu đề dự án khổng lồ nằm đè hoặc giao cắt với khung ảnh Parallax dọc (`504×700px`) và ảnh GIF preview chuyển động ở trung tâm.
  3. **Cursor Spotlight Masking**: Hiệu ứng mặt nạ SVG (`mask-image`) đi theo con trỏ chuột tại Hero Section, mở ra lớp nền đen ẩn bên dưới với nội dung văn bản hoàn toàn khác (Easter-egg copy).

---

## 2. Design Tokens (Màu sắc, Typography, Spacing & Grid)

### 2.1. Bảng màu (Color Palette)

| Token / Vai trò | Giá trị Hex / RGB | Class / Cách sử dụng |
| :--- | :--- | :--- |
| **Primary Canvas (Nền chính)** | `#FFFFFF` (`rgb(255, 255, 255)`) | `bg-primary` — Nền toàn trang Home, Works, phần dưới About |
| **Primary Ink (Mực chính / Nền đảo)** | `#000000` (`rgb(0, 0, 0)`) | `bg-neutral`, `text-neutral` — Chữ tiêu đề, đường kẻ divider, nền Mask Hero, nền Menu Drawer, nền Hero trang About |
| **Secondary Text** | `#1E2022` (`rgb(30, 32, 34)`) | `text-secondary` — Text trong badge đồng hồ, icon line của hamburger |
| **Deep Link Ink** | `#100D25` (`rgb(16, 13, 37)`) | `text-black-100` — Màu chữ link mạng xã hội ở Footer |
| **Muted / Ghost Text** | `rgba(0, 0, 0, 0.2)` – `rgba(0, 0, 0, 0.3)` | `opacity-[0.2]`, `opacity-[0.3]` — Lớp chữ mờ làm nền trước khi scroll-reveal ở phần giới thiệu (About Intro) và Hero mobile |
| **Drawer Micro-Label** | `#999999` | Tiêu đề nhỏ `NAVIGATION`, `GET IN TOUCH` và đường gạch chân trong Drawer |
| **Hamburger Surface** | `#E1DFDD` | Nền nút tròn nổi góc dưới phải (`45×45px`) kết hợp `mix-blend-mode: difference` |
| **Drawer Curve SVG Fill** | `#292929` / `#000000` | Đường cong Bezier SVG bên mép trái của Menu Drawer khi trượt ra |

### 2.2. Hệ thống chữ (Typography)

Trang sử dụng **2 họ font chính** (load qua `@font-face` định dạng `.otf`):

1. **`Clash Grotesk` (`Clash-Grotesk-Bold` 700, `Clash-Grotesk-Medium` 500)**:
   - Dùng cho các tiêu đề Display khổng lồ, tên dự án, chữ `SAY HI!`, và địa chỉ email liên hệ.
2. **`Neue Montreal` (`NeueMontreal-Regular` 400, `Medium` 500, `Bold`, `Light`, `Italic`)**:
   - Dùng cho toàn bộ văn bản Editorial, thanh điều hướng, mô tả dự án, danh sách dịch vụ (Services) và Footer.

#### Bảng kích thước chữ (Type Scale)

| Thành phần | Font Family | Kích thước (Desktop → Mobile) | Line Height | Kiểu chữ |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display Headline** | `Clash-Grotesk-Bold` / `NeueMontreal-Bold` | `~6.5vw` – `7.5vw` (3 dòng xếp chồng) | `0.95` – `1.0` | `UPPERCASE` (từ `innovative` trong mask để *italic lowercase*) |
| **Project Card Title** | `Clash-Grotesk-Bold` | `md:text-[20vw]` / `sm:text-[25vw]` / `text-[30vw]` | `md:leading-[105%]` / `sm:leading-[90%]` / `leading-[80%]` | `UPPERCASE`, ngắt làm 2 dòng (VD: `DREAM` / `LABS`) |
| **Contact `SAY HI!`** | `Clash-Grotesk-Bold` | `text-[11vw]` | `leading-[11vw]` | `UPPERCASE`, căn giữa |
| **Contact Email** | `Clash-Grotesk-Medium` | `text-[7.9vw]` | `leading-normal` | `UPPERCASE`, căn giữa |
| **Services Row Headings** | `NeueMontreal-Regular` | `~5.5vw` – `6.5vw` | `1.05` | `UPPERCASE`, căn trái/phải xen kẽ |
| **About Editorial Paragraph** | `NeueMontreal-Regular` | `lg:text-[40px]` / `md:text-3xl` / `text-[22px]` | `lg:leading-[1.25]` / `md:leading-[28px]` / `leading-[24px]` | `UPPERCASE`, `max-w-[1152px]` |
| **Drawer Menu Links** | `NeueMontreal-Light` (300) | `56px` | `1.15` | `Title Case` (`Home`, `Work`, `About`) |
| **Project Description** | `NeueMontreal-Regular` | `big:text-[20px]` / `text-[16px]` | `1.35` | `UPPERCASE`, cột phải `xl:w-[19%]` |
| **Section Header & Footer** | `NeueMontreal-Regular` | `18px` | `30px` (container `h-[33px]`) | `UPPERCASE` (`PORTFOLIO`, `SERVICES`, `CONTACT`) |
| **Navbar Status & Index** | `NeueMontreal-Regular` | `15px` (Clock badge: `14px`) | `1.2` | `UPPERCASE` (`01//04 — HOVER →`) |
| **Drawer Section Label** | `NeueMontreal-Regular` | `11px` | `1.2` | `UPPERCASE`, màu `#999`, có `border-bottom: 1px solid #999` |

### 2.3. Layout Grid, Breakpoints & Spacing

- **Custom Breakpoints (Tailwind)**:
  - `xxs: 250px` | `xs: 450px` | `sm: 640px` | `md: 768px` | `big: 992px` | `lg: 1024px` | `xl: 1280px` | `2xl: 1536px`
- **Container Horizontal Padding**:
  - Mobile: `px-5` (`20px`)
  - Tablet (`sm`): `sm:px-[45px]` (`45px`)
  - Desktop (`lg`): `lg:px-[70px]` (`70px` mỗi bên → vùng nội dung rộng `1300px` trên màn hình `1440px`)
- **Khoảng cách dọc giữa các Section (Vertical Rhythm)**:
  - Hero: `100vh` (`900px` trên desktop)
  - About Intro: `lg:mt-[73px] lg:mb-[300px]`
  - Portfolio (Selected Works): `lg:mb-[300px] mb-[100px]`
  - Services: `md:gap-[67px] gap-[30px]` giữa 4 hàng dịch vụ
  - Contact & Footer: `md:mt-[200px] mt-[100px]`, khối `SAY HI!` cách đường kẻ `lg:mt-[236px] mt-[30px]`

---

## 3. Cấu trúc Chi tiết Từng Thành phần & Section

### 3.1. Global Chrome & Fixed Overlays (Hiển thị xuyên suốt)

1. **Preloader Screen**:
   - Màn hình splash `100vw × 100vh` xuất hiện ~3.5s khi mới tải trang, hiển thị cụm chữ đậm **`AQUA [icon laptop] DEV`** ở chính giữa trước khi mở màn hình chính.
2. **Custom Cursor (`.custom-cursor`)**:
   - Hình tròn `30×30px`, `position: fixed`, `background: #fff`, `mix-blend-mode: difference`, `pointer-events: none`, `z-index: 9999`, ẩn con trỏ mặc định (`body { cursor: none; }`).
   - Khi hover vào thẻ dự án (`.cursor-proj-img.view`), hình tròn phóng to và hiện chữ **_"View more"_** (ở trang chủ) hoặc **_"View Works"_** (ở trang `/works`) ngay tâm con trỏ.
3. **Top Navbar (`<nav>`)**:
   - **Trái**: Logo chữ **`AD`** (`20px`, `text-white mix-blend-difference`).
   - **Giữa (chỉ hiện trên Desktop `lg:block hidden`)**: Dòng trạng thái **`CURRENT CONTRACT DEVELOPER @DREAMLABS`** (`15px`, uppercase) đặt trong khung `h-[30px] overflow-hidden` với hiệu ứng cuộn từng ký tự khi hover.
   - **Phải**: Hộp đồng hồ thời gian thực (VD: **`8:27: PM`**), kích thước `w-[100px] px-4 py-2 text-[14px]`, nền `#fff` với `mix-blend-mode: difference` (nhìn trên nền trắng sẽ thành hộp chữ nhật đen sắc cạnh chữ trắng).
4. **Sound Toggle (Góc dưới trái cố định)**:
   - Xoay dọc `-90deg` (`-rotate-90`): **`SOUND OFF`** / **`SOUND ON`** (chữ `SOUND` mờ, chữ `OFF`/`ON` đậm), click để bật/tắt âm thanh nền/hiệu ứng.
5. **Floating Hamburger Button & Slide-Out Drawer (Góc dưới phải cố định)**:
   - Nút tròn `45×45px` tại `bottom: 10px; right: 40px` (mobile: `bottom: 30px; right: 20px`), `z-index: 701`, `mix-blend-mode: difference`, gồm 2 vạch ngang mảnh `1px` biến thành dấu `×` khi mở.
   - Khi mở, **Drawer màu đen (`#000`)** trượt từ phải sang (`width: 40vw` trên desktop, `50vw` trên tablet, `100vw` trên mobile `<=510px`; `padding: 100px`).
   - Mép trái Drawer có **SVG Bezier Curve (`100px` rộng)** uốn cong mượt mà theo chuyển động đóng/mở.
   - Nội dung Drawer gồm:
     - Nhóm `NAVIGATION`: `Home` (`/`), `Work` (`/works`), `About` (`/about`) cỡ chữ `56px`, có chấm tròn trắng `10px` đánh dấu trang đang active ở `left: -30px`.
     - Nhóm `GET IN TOUCH`: `Twitter`, `Github`, `LinkedIn` xếp hàng ngang.

---

### 3.2. Trang Chủ (`/`) — 5 Sections Chính

#### Section 1: Hero (`.landing_main__6aiEQ.heroupgrade`)
- **Chỉ mục bên trái (`top: 335px`)**: `01//04 — HOVER →` kèm icon mũi tên nhỏ `11×11px` (trên mobile đổi thành `01//04 — SCROLL ↓`).
- **Lớp hiển thị mặc định (`.landing_body__Lt8sp` — Nền trắng, chữ đen)**:
  - Nhãn nhỏ `AD` phía trên bên trái khối chữ.
  - Đại tự 3 dòng:
    ```
    MULTI–
    DISCIPLINED
    DEVELOPER        GOOD DESIGN IS HONEST
    ```
- **Lớp mặt nạ ẩn (`.landing_mask__ur_og` — Nền đen `#000`, chữ trắng)**:
  - Đè tuyệt đối (`position: absolute; inset: 0; z-index: 300`), cắt bằng `mask-image: url(mask.svg)`.
  - Bình thường mặt nạ rộng `40px` như một chấm tròn; khi di chuột vào vùng chữ Hero, mặt nạ phóng to lên `~330px` đi theo tâm chuột, làm lộ lớp nội dung ẩn:
    - Nhãn `AD` biến thành **`Aqua_dev`**
    - Đại tự biến thành:
      ```
      TALENTED
      innovative
      DEVELOPER        IF THE PAY IS HONEST
      ```
- **Nút cuộn xuống ở đáy giữa (`.circouttercnt`)**: Vòng tròn viền đen `1px solid #000` chứa mũi tên chỉ xuống (`35×35px`).

#### Section 2: About Intro (Tuyên ngôn cá nhân)
- Khối văn bản căn giữa (`max-w-[1152px]`), chữ in hoa toàn bộ (`40px` trên desktop, `22px` trên mobile):
  > *"WELL ESTEEMED FRONTEND ENGINEER AND MOBILE DEVELOPER HELPING COMPANIES AROUND THE WORLD GROW THEIR BUSINESS. BLENDING CREATIVITY WITH TECH — TO DELIVER CAPTIVATING USER EXPERIENCES, SCALABLE WEB EXPERIENCES BUILT, HIGH-QUALITY SOLUTIONS DELIVERED, THE UNIVERSE RESEARCHED — I CONSTANTLY WEAVE MY PASSIONS INTO LIFE'S TAPESTRY."*
- **Hiệu ứng Scroll Word-by-Word Fill**: Mỗi từ có 1 lớp `<span class="opacity-[0.3]">` cố định và 1 lớp `<span>` đè lên chuyển `opacity: 0 → 1` tuần tự theo vị trí thanh cuộn (GSAP ScrollTrigger scrub).

#### Section 3: Portfolio — Selected Works
- **Header của Section**:
  - Hàng ngang gồm nhãn `PORTFOLIO` bên trái và link **`SEE ALL PROJECTS →`** bên phải (có hiệu ứng cuộn chữ 2 tầng khi hover).
  - Đường kẻ ngang `.projectLine` cao `1.5px` màu đen `#000` tự vẽ từ `width: 0% → 100%` khi cuộn tới.
  - Tiêu đề phụ căn giữa: **`SELECTED WORKS`**.
- **Danh sách 7 Dự án (Editorial Staggered Project Cards)**:
  - Mỗi thẻ dự án (`.cursor-proj-img.view`) là một bố cục 3 lớp bất đối xứng:
    1. **Trái**: Tên dự án cỡ `20vw` (`Clash-Grotesk-Bold`, in hoa, ngắt thành 2 dòng lớn như `DREAM` / `LABS`, `IMPAC` / `T2024`, `INTEN` / `TIONLIZ`, `GARNE` / `RLY`, `SEBAS` / `TIAN`, `SHOPA` / `XA`, `VOLVE`). Từng dòng chữ trượt từ dưới lên qua mặt nạ `overflow: hidden`.
    2. **Giữa lệch phải (`left: 45%`, `top: 100px`, `w-[35vw]`, `z-[100]`)**:
       - Khung ảnh dọc `504×700px` (`xl:h-[700px] lg:h-[500px] md:h-[400px]`), bo góc nhẹ `rounded-[7px]`, `overflow-hidden`.
       - Ảnh bìa bên trong áp dụng hiệu ứng **Ukiyo Parallax** (`scale: 1.2`, `speed: 1.7`).
       - Đè chính giữa khung ảnh dọc là một **khung GIF quay màn hình dự án** rộng `80%` (`~400×218px`) chạy lặp liên tục.
    3. **Ngoài cùng bên phải (`xl:w-[19%] lg:self-end`)**: Đoạn mô tả ngắn gọn `16px–20px` in hoa nằm ở góc dưới bên phải của card.

#### Section 4: Services (Dịch vụ / Chuyên môn)
- **Header của Section**: Nhãn `SERVICES` bên trái + link **`MORE ABOUT ME →`** (trỏ tới `/about`) bên phải + đường kẻ ngang `1.5px` `#000`.
- **4 Hàng Kinetic Typography xếp so le Trái – Phải (`gap-[67px]`)**:
  1. `CREATIVE DEVELOPMENT` (Căn trái)
  2. `FRONT END ENGINEERING` (Căn phải — `self-end text-right`)
  3. `MOBILE DEVELOPMENT` (Căn trái)
  4. `BACK END DEVELOPMENT` (Căn phải — `self-end text-right`)
- Chữ được tách từng ký tự (`.char`) bằng SplitType với hiệu ứng nghiêng/xoay nhẹ từng chữ cái khi cuộn và di chuột.

#### Section 5: Contact & Footer
- **Header của Section**: Nhãn `CONTACT` + đường kẻ ngang `.projectLinewannawork` dày `2px` màu đen.
- **Khối CTA chính**:
  - Dòng phụ nhỏ căn giữa: **`WANT TO WORK TOGETHER?`**
  - Chữ khổng lồ căn giữa: **`SAY HI!`** (`11vw`, `Clash-Grotesk-Bold`)
  - Link Email lớn căn giữa: **`HELLO@AQUADEV.SITE`** (`7.9vw`, `Clash-Grotesk-Medium`, `mailto:hello@aquadev.site`) với hiệu ứng trượt từng ký tự.
- **Footer (`<footer>`)**:
  - **Trái**: `Innovative Developer` (`18px`)
  - **Giữa (chỉ trên Desktop `lg:flex hidden`)**: Đường khung viền chữ U mỏng (`h-[14px] border-r border-b border-l rounded-b-lg border-[#000]`) nối giữa cụm bên trái và cụm bên phải.
  - **Phải**: Các link `Twitter`, `LinkedIn`, `Github` (hiệu ứng hover cuộn 2 tầng) + bản quyền `Aquadev Portfolio ©2026`.

---

### 3.3. Hai Trang Phụ (`/works` & `/about`)

1. **Trang `/works`**:
   - Thanh chuyển tab lớn ở đầu trang: **`Project`** (chữ đen đậm khi active) và **`Products`** (chữ xám `#ccc` khi inactive), ngăn cách bởi đường kẻ đen toàn chiều ngang và đoạn mô tả ngắn.
   - Tab **Project** hiển thị 7 dự án giống trang chủ; tab **Products** chuyển sang danh sách 4 sản phẩm (`Squarereme`, `Pkchange`, `Tryklas`, `DENTAL-O`).
2. **Trang `/about`**:
   - **Phần 1 (Split-Screen Đen `#000`)**: Nửa trái là nhãn `(Scroll)` + ảnh bàn phím cơ; nửa phải là 4 dòng chuyên môn có đường kẻ ngang phân cách; đáy phần đen có khối bo tròn trắng lấn lên tạo hiệu ứng chuyển cảnh.
   - **Phần 2 (Editorial Bio nền trắng)**: Đại tự `I / TALENTED / CREATIVE / DEVELOPER`, ảnh góc làm việc 2 màn hình (`.about-cover`), và hàng tag lĩnh vực (`EXPEREINCED DEVELOPER` — `FINTECH`, `E-COMMERCE`, `EDU-TECH`, `AGENCY`).
   - **Phần 3 (`// HOBBIES INTERACT`)**: Bộ chọn tương tác ngang (`Music` / `Gaming` / `Science`) kết hợp mô hình 3D WebGL (Three.js — ví dụ cây đàn guitar 3D xoay được) và đoạn giới thiệu sở thích cá nhân.

---

## 4. Đặc tả Kỹ thuật & Thư viện Chuyển động (Animation Stack)

Để tái tạo (rep) chuẩn 1:1 cảm giác mượt và "đắt" của `aquadev.site`, bộ khung kỹ thuật cần có:

1. **Smooth Scroll**: `Lenis` (`@studio-freight/lenis` hoặc `lenis`) đồng bộ với `GSAP ScrollTrigger`.
2. **Text Splitting & Scroll Reveal**:
   - Tách văn bản thành `.line`, `.word`, `.char`.
   - Các dòng tiêu đề đặt trong wrapper `overflow: hidden`, animate `yPercent: 100 → 0` với easing `power3.out` hoặc `power4.out`.
   - Đoạn giới thiệu (About Intro) dùng kỹ thuật **Dual-Span Scrub**: mỗi từ có span nền `opacity: 0.3` và span đè lên animate `opacity: 0 → 1` theo `scrollTrigger: { scrub: true }`.
3. **Dual-Layer Hover Roll Links**:
   - Container `h-[33px] overflow-y-hidden relative`.
   - Khi hover, span trên (`#link-upper`) trượt lên `translateY(-100%)` và span dưới (`#link-lower`) trượt từ dưới lên `translateY(0%)` theo từng ký tự (stagger `0.02s`).
4. **Hero SVG Mask Spotlight**:
   - Lắng nghe sự kiện `mousemove` trên Hero container, nội suy tọa độ `(x, y)` mượt bằng `gsap.to` hoặc `lerp`, cập nhật CSS `-webkit-mask-position: ${x - size/2}px ${y - size/2}px` và `-webkit-mask-size: ${size}px` (`size` từ `40px` lên `330px` khi hover vào vùng chữ).
5. **Project Image Parallax**:
   - Ảnh bìa dự án có chiều cao lớn hơn khung chứa ~20% (`scale: 1.2`) và dịch chuyển dọc (`translateY`) ngược chiều cuộn trang, kèm theo lớp ảnh GIF preview nằm đè chính giữa (`z-index` cao hơn ảnh bìa).
