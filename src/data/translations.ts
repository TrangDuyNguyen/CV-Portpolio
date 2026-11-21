import { Language } from '../context/LanguageContext';

export interface TranslationDictionary {
  navbar: {
    brandRole: string;
    navAbout: string;
    navExperience: string;
    navProjects: string;
    navGallery: string;
    navSkills: string;
    navEngineering: string;
    navContact: string;
    downloadCv: string;
    downloadCvFull: string;
    themeLightTooltip: string;
    themeDarkTooltip: string;
    langSwitchTooltip: string;
  };
  hero: {
    eyebrow: string;
    roleLabel: string;
    fullName: string;
    headline: string;
    supportingLine: string;
    description: string;
    ctaDownloadCv: string;
    ctaProjects: string;
    ctaContact: string;
    viewPrintableCv: string;
    floatingBadge: string;
    mockupBadge: string;
    scrollCue: string;
    metricsTitle: string;
    metricsSub: string;
    copyEmailLabel: string;
    copiedLabel: string;
    stageVideoLabel: string;
    stageScreensLabel: string;
  };
  about: {
    badge: string;
    headline: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  astrobite: {
    badgeFlagship: string;
    roleTag: string;
    tagline: string;
    description: string;
    pillarsHeader: string;
    pillarsSub: string;
    macroIntro: string;
    macroCarbs: string;
    macroProtein: string;
    macroFat: string;
    viewScreensLink: string;
    galleryBannerTitle: string;
    galleryBannerDesc: string;
    galleryBannerBtn: string;
    featuresHeader: string;
    featuresSub: string;
    featuresBadge: string;
    demoVideoTitle: string;
    demoVideoSubtitle: string;
    interactiveModeScreens: string;
    interactiveModeVideo: string;
    codeInsightLabel: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    catAll: string;
    catAi: string;
    catGenui: string;
    catCockpit: string;
    catFeatures: string;
    catWidgets: string;
    techSpecsLabel: string;
    closeTooltip: string;
    prevTooltip: string;
    nextTooltip: string;
  };
  career: {
    badge: string;
    title: string;
    subtitle: string;
    eduBadge: string;
    eduSchool: string;
    eduDegree: string;
    eduDetails: string;
    ecosystemHeader: string;
    keyContributionsLabel: string;
  };
  engineering: {
    badge: string;
    title: string;
    description: string;
    quote: string;
    subquote: string;
    ruleTags: [string, string, string];
    principles: {
      title: string;
      description: string;
      example: string;
    }[];
  };
  skills: {
    badge: string;
    title: string;
    description: string;
    coreStrength: string;
    productionReady: string;
    proofLabel: string;
    principlesHeader: string;
  };
  contact: {
    statusBadge: string;
    title: string;
    description: string;
    terminalChannel: string;
    statusActive: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    copyTooltip: string;
    copiedText: string;
    downloadTitle: string;
    downloadDesc: string;
    downloadPdfBtn: string;
    viewWebBtn: string;
  };
  footer: {
    roleDesc: string;
    rights: string;
    craftedWith: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  vi: {
    navbar: {
      brandRole: "Mobile Engineer",
      navAbout: "Tổng quan",
      navExperience: "Kinh nghiệm",
      navProjects: "AstroBite",
      navGallery: "Giao diện",
      navSkills: "Năng lực",
      navEngineering: "Cách làm",
      navContact: "Liên hệ",
      downloadCv: "Tải CV",
      downloadCvFull: "Tải CV (PDF 2 Trang)",
      themeLightTooltip: "Chuyển sang giao diện Sáng (Warm Cream)",
      themeDarkTooltip: "Chuyển sang giao diện Tối (Carbon Dark)",
      langSwitchTooltip: "Switch to English",
    },
    hero: {
      eyebrow: "MOBILE ENGINEER · 5+ NĂM THỰC CHIẾN",
      roleLabel: "MOBILE ENGINEER",
      fullName: "Nguyễn Duy Tráng",
      headline: "Xây dựng ứng dụng di động từ phần cứng POS đến AI đa phương thức.",
      supportingLine: "Flutter 3.x · Native iOS (Swift) · Android (Kotlin)",
      description: "5+ năm làm sản phẩm thương mại tại Hahalolo (1M+ lượt tải) và Finviet (ECO POS). Dùng Clean Architecture, Riverpod/BLoC, Platform Channels giao tiếp phần cứng và tối ưu 60 FPS trên máy cấu hình thấp.",
      ctaDownloadCv: "Tải CV (PDF)",
      ctaProjects: "Xem AstroBite",
      ctaContact: "Liên hệ",
      viewPrintableCv: "Xem CV Bản In A4",
      floatingBadge: "5+ Năm Mobile Engineering",
      mockupBadge: "AstroBite v3.0.0 · Flagship",
      scrollCue: "Kéo xuống xem chi tiết",
      metricsTitle: "Số liệu thực tế",
      metricsSub: "Các mốc đã kiểm chứng trên sản phẩm thật",
      copyEmailLabel: "Copy Email",
      copiedLabel: "Đã copy!",
      stageVideoLabel: "Video Demo",
      stageScreensLabel: "Màn hình thật",
    },
    about: {
      badge: "CÁCH LÀM VIỆC",
      headline: "Rõ bài toán trước, chọn kiến trúc vừa vặn, đo trực tiếp trên máy thật.",
      p1: "5+ năm làm việc trên cả Flutter lẫn Native iOS Swift và Android Kotlin giúp tôi xử lý từ UI 60 FPS đến giao tiếp phần cứng và đồng bộ dữ liệu khi rớt mạng.",
      p2: "Tôi ưu tiên code dễ đọc, tách module độc lập, kiểm thử tự động và dùng DevTools đo RAM/frame thực tế thay vì đoán.",
      pillar1Title: "Đọc kỹ luồng nghiệp vụ & phần cứng",
      pillar1Desc: "Kiểm tra thực tế thiết bị POS, máy in nhiệt, điều kiện mạng tại điểm bán trước khi thiết kế Channel.",
      pillar2Title: "Tách module & luồng dữ liệu 1 chiều",
      pillar2Desc: "Feature-First Clean Architecture (Riverpod / BLoC / VIPER) để nhiều người sửa song song không dẫm chân nhau.",
      pillar3Title: "Đo RAM & Frame Rate bằng DevTools",
      pillar3Desc: "Giải phóng buffer camera, bọc RepaintBoundary, kiểm soát rò rỉ bộ nhớ trên máy cấu hình thấp.",
    },
    astrobite: {
      badgeFlagship: "SẢN PHẨM CHỦ LỰC · ASTROBITE v3.0.0",
      roleTag: "Mobile Engineer & System Architect · Flutter 3.x",
      tagline: "Đếm calo món Việt dưới 2.5 giây bằng ảnh chụp & giọng nói.",
      description: "Giải quyết đúng điểm yếu của các app đếm calo ngoại: bóc tách riêng Nước dùng & Topping món Á, đọc giọng nói tiếng Việt theo đơn vị tô/chén/ly (~1.1s), sinh thẻ món ăn tương tác GenUI trong chat và đạt 277/277 bài test tự động.",
      pillarsHeader: "KIẾN TRÚC & BÀI TOÁN ĐÃ GIẢI",
      pillarsSub: "Bấm vào từng hạng mục để xem màn hình thực tế và cách xử lý kỹ thuật tương ứng.",
      macroIntro: "Phân bổ 3 nhóm dưỡng chất theo màu:",
      macroCarbs: "Tinh bột (Carbs)",
      macroProtein: "Chất đạm (Protein)",
      macroFat: "Chất béo (Fat)",
      viewScreensLink: "Xem toàn bộ 10 màn hình",
      galleryBannerTitle: "Kho màn hình thực tế",
      galleryBannerDesc: "Giao diện Claymorphic 3D tự viết thuần Flutter primitives.",
      galleryBannerBtn: "Mở thư viện màn hình ↓",
      featuresHeader: "6 TÍNH NĂNG CỐT LÕI",
      featuresSub: "Thiết kế để ghi một bữa ăn dưới 3 thao tác.",
      featuresBadge: "CORE MODULES",
      demoVideoTitle: "Video chạy thực tế AstroBite",
      demoVideoSubtitle: "Quét ảnh món ăn, AstroVoice tiếng Việt và thẻ GenUI trong chat",
      interactiveModeScreens: "Màn hình theo module",
      interactiveModeVideo: "Chạy Video Demo",
      codeInsightLabel: "Chi tiết kỹ thuật:",
    },
    gallery: {
      badge: "GIAO DIỆN SẢN PHẨM",
      title: "10 màn hình thực tế của AstroBite v3.0.0",
      subtitle: "Giao diện Claymorphic tự code thuần Flutter primitives (APK 62.4MB). Rê chuột để tạm dừng hoặc bấm vào từng màn hình để phóng to.",
      catAll: "Tất cả (10)",
      catAi: "AI Vision",
      catGenui: "GenUI Chat",
      catCockpit: "Dashboard & Streak",
      catFeatures: "Công cụ & Biểu đồ",
      catWidgets: "OS Widgets",
      techSpecsLabel: "Thành phần kỹ thuật",
      closeTooltip: "Đóng (Esc)",
      prevTooltip: "Màn hình trước (←)",
      nextTooltip: "Màn hình sau (→)",
    },
    career: {
      badge: "KINH NGHIỆM THƯƠNG MẠI",
      title: "Những sản phẩm đã trực tiếp xây dựng & vận hành.",
      subtitle: "5+ năm thực chiến từ ứng dụng mạng xã hội 1M+ lượt tải, nhắn tin thời gian thực đến máy POS bán hàng và hóa đơn điện tử.",
      eduBadge: "HỌC VẤN",
      eduSchool: "Cao Đẳng FPT Polytechnic — Lập trình máy tính & Phát triển phần mềm",
      eduDegree: "Cử nhân Thực hành CNTT · Tiếng Anh chuyên ngành",
      eduDetails: "Nền tảng về cấu trúc dữ liệu, thuật toán, OOP và quy trình phát triển ứng dụng di động.",
      ecosystemHeader: "Hệ sinh thái 6 ứng dụng tại Hahalolo (2021 — 2025)",
      keyContributionsLabel: "Việc đã làm trực tiếp:",
    },
    engineering: {
      badge: "CÁCH LÀM VIỆC",
      title: "Giải bài toán thật trên thiết bị thật.",
      description: "Ba nguyên tắc rút ra từ việc bảo trì app hàng triệu lượt tải và máy POS chạy liên tục ngoài cửa hàng.",
      quote: "\"Đo bằng DevTools trên máy cấu hình thấp trước khi bàn giao; không đoán bằng máy dev cấu hình cao.\"",
      subquote: "Mọi tính năng chỉ tính là xong khi chịu được rớt mạng giữa chừng và giữ 60 FPS.",
      ruleTags: ["Bài toán", "Cấu trúc", "Vận hành"],
      principles: [
        {
          title: "1. Hiểu giới hạn phần cứng & nghiệp vụ trước",
          description: "Đọc kỹ quy trình thanh toán, cách hoạt động của máy in nhiệt hay thói quen ăn món nước của người dùng trước khi chọn kiến trúc.",
          example: "Finviet ECO POS: kiểm tra driver ESC/POS và quy định Nghị định 123 trước khi viết Android Platform Channel (Kotlin).",
        },
        {
          title: "2. Tách module độc lập, dữ liệu 1 chiều",
          description: "Chia rạch ròi Domain, Data và Presentation theo Feature-First để dễ viết unit test và không đụng code nhau khi team làm song song.",
          example: "AstroBite: 12 module độc lập với Riverpod 2.6 code-gen, cô lập test từng Repository & Notifier (277/277 tests pass).",
        },
        {
          title: "3. Thiết kế cho lúc rớt mạng & máy RAM thấp",
          description: "Ghi dữ liệu vào SQLite cục bộ trước khi gọi API, đồng bộ lại theo hàng đợi khi mạng có lại, giải phóng bộ nhớ ảnh ngay sau khi xử lý.",
          example: "ECO POS dùng SQLite/Drift giữ 100% đơn hàng khi mất Wi-Fi; AstroBite giải phóng buffer camera giữ 0 memory leak.",
        },
      ],
    },
    skills: {
      badge: "NĂNG LỰC KỸ THUẬT & CÁCH LÀM VIỆC",
      title: "Công nghệ sử dụng và bằng chứng thực tế.",
      description: "Mỗi kỹ năng dưới đây đều gắn trực tiếp với module đã viết và đưa vào vận hành trên sản phẩm thật.",
      coreStrength: "Chuyên sâu",
      productionReady: "Đã dùng trong sản phẩm",
      proofLabel: "Thực tế triển khai:",
      principlesHeader: "Nguyên tắc làm việc trên sản phẩm thật",
    },
    contact: {
      statusBadge: "LIÊN HỆ & HỒ SƠ",
      title: "Trao đổi về cơ hội Mobile Engineer.",
      description: "Sẵn sàng trao đổi cho các vị trí Flutter, iOS hoặc Mobile Engineer (TP.HCM hoặc Remote). Bạn có thể xem trực tiếp bản CV A4 hoặc tải PDF 2 trang bên dưới.",
      terminalChannel: "trangndps10349@gmail.com",
      statusActive: "Sẵn sàng nhận việc",
      emailLabel: "Email trực tiếp",
      phoneLabel: "Điện thoại",
      locationLabel: "Khu vực",
      locationValue: "TP. Hồ Chí Minh, Việt Nam",
      copyTooltip: "Sao chép email",
      copiedText: "Đã sao chép!",
      downloadTitle: "Hồ sơ CV (Bản in chuẩn ATS)",
      downloadDesc: "Bản CV 2 trang đầy đủ kinh nghiệm thương mại & dự án AstroBite",
      downloadPdfBtn: "Tải PDF",
      viewWebBtn: "Gửi Email ngay",
    },
    footer: {
      roleDesc: "Mobile Engineer",
      rights: "Nguyễn Duy Tráng · Mobile Engineer (Flutter · iOS Swift · Android Kotlin)",
      craftedWith: "TP. Hồ Chí Minh · Cập nhật 2026",
      backToTop: "Lên đầu trang",
    },
  },
  en: {
    navbar: {
      brandRole: "Mobile Engineer",
      navAbout: "Overview",
      navExperience: "Experience",
      navProjects: "AstroBite",
      navGallery: "Screens",
      navSkills: "Skills",
      navEngineering: "Approach",
      navContact: "Contact",
      downloadCv: "Download CV",
      downloadCvFull: "Download CV (2-Page PDF)",
      themeLightTooltip: "Switch to Light Mode (Warm Cream)",
      themeDarkTooltip: "Switch to Dark Mode (Carbon)",
      langSwitchTooltip: "Chuyển sang Tiếng Việt",
    },
    hero: {
      eyebrow: "MOBILE ENGINEER · 5+ YEARS IN PRODUCTION",
      roleLabel: "MOBILE ENGINEER",
      fullName: "Nguyen Duy Trang",
      headline: "Shipping mobile apps from retail POS hardware to multimodal AI.",
      supportingLine: "Flutter 3.x · Native iOS (Swift) · Android (Kotlin)",
      description: "5+ years shipping commercial apps at Hahalolo (1M+ downloads) and Finviet (ECO POS). Experienced in Feature-First Clean Architecture, Riverpod/BLoC, custom Platform Channels for hardware, and keeping 60 FPS on low-spec devices.",
      ctaDownloadCv: "Download CV (PDF)",
      ctaProjects: "Explore AstroBite",
      ctaContact: "Contact",
      viewPrintableCv: "View Printable A4 CV",
      floatingBadge: "5+ Years Mobile Engineering",
      mockupBadge: "AstroBite v3.0.0 · Flagship",
      scrollCue: "Scroll to inspect work",
      metricsTitle: "Verified Proof Points",
      metricsSub: "Measured across production apps & automated test runs",
      copyEmailLabel: "Copy Email",
      copiedLabel: "Copied!",
      stageVideoLabel: "Live Video",
      stageScreensLabel: "Real Screens",
    },
    about: {
      badge: "ENGINEERING APPROACH",
      headline: "Clarify constraints first, keep modules decoupled, and profile on real devices.",
      p1: "5+ years working across Flutter, Native iOS Swift, and Android Kotlin lets me own everything from 60 FPS custom UI to native hardware bridges and offline-first sync.",
      p2: "I keep codebases readable, modular, and verified with automated tests and Flutter DevTools profiling rather than guesswork.",
      pillar1Title: "Hardware & Flow First",
      pillar1Desc: "Verify thermal printer specs, store network conditions, and user flows before writing Platform Channels.",
      pillar2Title: "Feature-First Modularization",
      pillar2Desc: "Strict Clean Architecture (Riverpod / BLoC / VIPER) so teams ship features independently without conflicts.",
      pillar3Title: "DevTools-Verified Runtime",
      pillar3Desc: "Deallocate camera buffers promptly, isolate repaints with RepaintBoundary, and track memory on low-RAM hardware.",
    },
    astrobite: {
      badgeFlagship: "FLAGSHIP PROJECT · ASTROBITE v3.0.0",
      roleTag: "Mobile Engineer & System Architect · Flutter 3.x",
      tagline: "Log Vietnamese & Asian meals in under 2.5s via camera or voice.",
      description: "Built to solve where Western calorie apps fail: separates broth and toppings on Asian dishes, parses spoken Vietnamese servings (bowl, cup, piece) in ~1.1s, renders interactive GenUI cards inside chat, and passes 277/277 automated tests.",
      pillarsHeader: "ARCHITECTURE & SOLVED PROBLEMS",
      pillarsSub: "Click any module below to inspect its matching production screen and engineering details.",
      macroIntro: "Color-coded macronutrient targets:",
      macroCarbs: "Carbohydrates",
      macroProtein: "Protein",
      macroFat: "Healthy Fats",
      viewScreensLink: "Browse all 10 screens",
      galleryBannerTitle: "Production Screen Gallery",
      galleryBannerDesc: "Custom 3D Claymorphic UI coded natively with Flutter primitives.",
      galleryBannerBtn: "Browse gallery below ↓",
      featuresHeader: "6 CORE CAPABILITIES",
      featuresSub: "Designed to log a complete meal in under 3 taps.",
      featuresBadge: "CORE MODULES",
      demoVideoTitle: "AstroBite Live Walkthrough",
      demoVideoSubtitle: "Vision food scanning, Vietnamese AstroVoice, and GenUI chat cards",
      interactiveModeScreens: "Screen by Module",
      interactiveModeVideo: "Watch Live Video",
      codeInsightLabel: "Engineering note:",
    },
    gallery: {
      badge: "PRODUCTION INTERFACES",
      title: "10 live screens from AstroBite v3.0.0",
      subtitle: "Custom Claymorphic UI built from Flutter primitives (62.4MB APK). Hover to pause the reel or click any phone screen to inspect full size.",
      catAll: "All (10)",
      catAi: "AI Vision",
      catGenui: "GenUI Chat",
      catCockpit: "Dashboard & Streak",
      catFeatures: "Tools & Charts",
      catWidgets: "OS Widgets",
      techSpecsLabel: "Technical stack",
      closeTooltip: "Close (Esc)",
      prevTooltip: "Previous (←)",
      nextTooltip: "Next (→)",
    },
    career: {
      badge: "COMMERCIAL EXPERIENCE",
      title: "Production apps shipped and maintained.",
      subtitle: "5+ years spanning a 1M+ download social platform, native iOS real-time chat, fintech apps, and retail Android POS systems.",
      eduBadge: "EDUCATION",
      eduSchool: "FPT Polytechnic College — Computer Programming & Software Development",
      eduDegree: "Associate Degree in IT · Technical English",
      eduDetails: "Core foundation in data structures, algorithms, OOP, and mobile engineering workflows.",
      ecosystemHeader: "6-App Production Ecosystem at Hahalolo (2021 — 2025)",
      keyContributionsLabel: "Direct engineering contributions:",
    },
    engineering: {
      badge: "HOW I WORK",
      title: "Built for real devices and unreliable networks.",
      description: "Three practical rules shaped by maintaining consumer apps at 1M+ scale and retail POS terminals in busy stores.",
      quote: "\"Profile RAM and frame timing on low-spec hardware before shipping. Never assume dev-machine speed.\"",
      subquote: "A feature is finished only when it survives dropped Wi-Fi and holds 60 FPS under real load.",
      ruleTags: ["Constraints", "Structure", "Runtime"],
      principles: [
        {
          title: "1. Verify hardware & domain constraints first",
          description: "Map payment rules, printer drivers, and real eating habits before committing to an implementation.",
          example: "Finviet ECO POS: validated ESC/POS thermal driver quirks and Decree 123 tax rules prior to designing Kotlin Platform Channels.",
        },
        {
          title: "2. Keep modules independent with 1-way state",
          description: "Split Domain, Data, and Presentation by feature so unit testing stays isolated and parallel work stays conflict-free.",
          example: "AstroBite: 12 independent Clean Architecture modules using Riverpod 2.6 code-gen and 277 isolated unit/widget tests.",
        },
        {
          title: "3. Build for offline drops & tight memory",
          description: "Persist to local SQLite before hitting the network, sync queues when online, and free image buffers immediately.",
          example: "ECO POS keeps 100% orders via SQLite/Drift offline; AstroBite frees camera buffers on encode to maintain zero leaks.",
        },
      ],
    },
    skills: {
      badge: "CAPABILITIES & WORK PRINCIPLES",
      title: "Core stack backed by production proof.",
      description: "Every skill listed here maps directly to modules shipped and profiled in live products.",
      coreStrength: "Core Competency",
      productionReady: "Shipped in Production",
      proofLabel: "Where shipped:",
      principlesHeader: "How I work on production codebases",
    },
    contact: {
      statusBadge: "CONTACT & RESUME",
      title: "Open to Mobile Engineer opportunities.",
      description: "Available for Flutter, iOS, or cross-platform Mobile Engineer roles (Ho Chi Minh City or Remote). View the printable A4 resume or download the 2-page PDF below.",
      terminalChannel: "trangndps10349@gmail.com",
      statusActive: "Available for hire",
      emailLabel: "Direct Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Ho Chi Minh City, Vietnam",
      copyTooltip: "Copy email",
      copiedText: "Copied!",
      downloadTitle: "Resume (ATS-Ready 2-Page A4)",
      downloadDesc: "Complete commercial history and AstroBite architecture breakdown",
      downloadPdfBtn: "Download PDF",
      viewWebBtn: "Send Email",
    },
    footer: {
      roleDesc: "Mobile Engineer",
      rights: "Nguyen Duy Trang · Mobile Engineer (Flutter · iOS Swift · Android Kotlin)",
      craftedWith: "Ho Chi Minh City · Updated 2026",
      backToTop: "Back to top",
    },
  },
};
