import { Language } from '../context/LanguageContext';

export interface TranslationDictionary {
  navbar: {
    brandRole: string;
    navAbout: string;
    navAstroBite: string;
    navCareer: string;
    navEngineering: string;
    navSkills: string;
    navContact: string;
    downloadCv: string;
    downloadCvFull: string;
    themeLightTooltip: string;
    themeDarkTooltip: string;
    langSwitchTooltip: string;
  };
  hero: {
    openToWork: string;
    greeting: string;
    fullNameFirst: string;
    fullNameLast: string;
    subHeadline: string;
    bullet1Title: string;
    bullet1Text: string;
    bullet2Title: string;
    bullet2Text: string;
    bullet3Title: string;
    bullet3Text: string;
    missionTitle: string;
    missionText: string;
    ctaExploreAstroBite: string;
    ctaDownloadCv: string;
    ctaViewWebCv: string;
    avatarExpYears: string;
    avatarExpSkills: string;
    avatarWorkType: string;
    avatarWorkModes: string;
    avatarLocationYob: string;
    metricsTitle: string;
    metricsSub: string;
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
  };
  engineering: {
    badge: string;
    title: string;
    description: string;
    quote: string;
    subquote: string;
    testsPassingBadge: string;
    zeroLeakBadge: string;
    ruleTags: [string, string, string, string];
    principles: {
      title: string;
      description: string;
    }[];
  };
  skills: {
    badge: string;
    title: string;
    description: string;
    coreStrength: string;
    productionReady: string;
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
      brandRole: "Mid Mobile Engineer",
      navAbout: "Giới thiệu",
      navAstroBite: "AstroBite v2.5.1",
      navCareer: "Kinh nghiệm",
      navEngineering: "Kỷ luật Kỹ thuật",
      navSkills: "Kỹ năng",
      navContact: "Liên hệ",
      downloadCv: "Tải CV (PDF)",
      downloadCvFull: "Tải CV (PDF 2 Trang)",
      themeLightTooltip: "Chuyển sang giao diện tối",
      themeDarkTooltip: "Chuyển sang giao diện sáng",
      langSwitchTooltip: "Switch to English",
    },
    hero: {
      openToWork: "Open to Work",
      greeting: "Xin chào, tôi là",
      fullNameFirst: "Nguyen Duy",
      fullNameLast: "Trang",
      subHeadline: "Mid Mobile Engineer · Flutter · Native iOS/Android · AI",
      bullet1Title: "5+ năm thực chiến ứng dụng quy mô lớn (1M+ Downloads)",
      bullet1Text: "Xây dựng và tối ưu ứng dụng iOS, Android & Flutter cho Mạng xã hội du lịch 1M+ downloads (99.5%+ crash-free), hệ sinh thái POS Kiosk F&B (-30% thời gian đặt món) và tiện ích hệ điều hành.",
      bullet2Title: "Kiến trúc Feature-First & Chuẩn Hóa Bền Bỉ",
      bullet2Text: "Làm chủ Clean Architecture, mô hình phân tán Offline-first, quản trị state Riverpod 2.x, bảo đảm 0 rò rỉ RAM và đạt tốc độ 60 FPS mượt mà.",
      bullet3Title: "Tiên Phong Multimodal Vision AI & Flutter GenUI",
      bullet3Text: "Tích hợp Google Gemini Vision AI bóc tách dinh dưỡng trong < 2.5s và kiến trúc GenUI A2UI tự động sinh Native Widgets tương tác 2 chiều trong chat.",
      missionTitle: "Mục tiêu & Định vị:",
      missionText: "Sẵn sàng đảm nhận vai trò Mid Mobile Engineer, mang lại giá trị thực chiến và kiến tạo sản phẩm di động chất lượng cao cho doanh nghiệp.",
      ctaExploreAstroBite: "Khám phá AstroBite v2.5.1",
      ctaDownloadCv: "Tải CV PDF (2 Trang)",
      ctaViewWebCv: "Xem Bản In Web A4",
      avatarExpYears: "5+ Năm Kinh Nghiệm",
      avatarExpSkills: "Flutter · Swift · Kotlin",
      avatarWorkType: "Full-time",
      avatarWorkModes: "Hybrid · Remote · Onsite",
      avatarLocationYob: "TP. Hồ Chí Minh · Sinh năm 2000",
      metricsTitle: "Verified Production Metrics",
      metricsSub: "Chỉ Số Vàng Bảo Chứng Năng Lực",
    },
    astrobite: {
      badgeFlagship: "DỰ ÁN TIÊU BIỂU (FLAGSHIP) — v2.5.1",
      roleTag: "Mobile Engineer & System Architect",
      tagline: "Trợ Lý Dinh Dưỡng Thông Minh & Quét Bữa Ăn AI",
      description: "AstroBite tái định nghĩa trải nghiệm theo dõi dinh dưỡng bằng cách kết hợp Trí tuệ nhân tạo thị giác Google Gemini và Ngôn ngữ thiết kế Đất nặn Claymorphic 3D: chụp 1 bức ảnh bóc tách trọn bữa ăn trong < 2.5s, trò chuyện với Trợ lý AI Coach tự sinh thẻ món ăn tương tác GenUI 2 chiều (giao thức A2UI), bảo vệ chuỗi ngày với Cơ chế Khiên Sao (Starlight Streak Shield), và tiện ích màn hình khóa iOS & Android mở máy ảnh siêu tốc < 300ms với 0 rò rỉ RAM.",
      pillarsHeader: "4 Đột Phá Kiến Trúc Trọng Yếu",
      pillarsSub: "Deep Engineering Breakdown (v2.5.1 Innovations)",
      macroIntro: "Bóc tách 3 nhóm chất đa lượng chuẩn màu trực quan quốc tế:",
      macroCarbs: "🌾 Carbs (#1CB0F6 Xanh)",
      macroProtein: "🥩 Đạm (#FF9600 Cam)",
      macroFat: "💧 Chất béo (#FF5C8D Hồng)",
      viewScreensLink: "Xem màn hình thực tế",
      galleryBannerTitle: "Bộ Sưu Tập 12 Màn Hình Thực Tế Claymorphic 3D",
      galleryBannerDesc: "Khám phá giao diện Đất nặn Solar Fresh, AR Camera Scanner, AstroCoach GenUI và Tiện ích màn hình khóa.",
      galleryBannerBtn: "Khám phá Gallery 12 màn hình bên dưới ↓",
    },
    gallery: {
      badge: "Visual Experience",
      title: "Showcase Gallery & UI Walkthrough (v2.5.1)",
      subtitle: "Bộ sưu tập 12 ảnh chụp màn hình thực tế AstroBite v2.5.1 với phong cách Đất nặn 3D Solar Fresh. Nhấp vào bất kỳ ảnh nào để xem kích thước lớn kèm thông số kỹ thuật chi tiết.",
      catAll: "Tất cả (12)",
      catAi: "AI Vision Scanner",
      catGenui: "GenUI & Chat",
      catCockpit: "Clay Cockpit & Streak",
      catFeatures: "Công cụ & Dinh dưỡng",
      catWidgets: "OS Home Widgets",
      techSpecsLabel: "Thông số kỹ thuật & Kiến trúc",
      closeTooltip: "Đóng (Esc)",
      prevTooltip: "Ảnh trước (←)",
      nextTooltip: "Ảnh sau (→)",
    },
    career: {
      badge: "LỊCH SỬ KINH NGHIỆM",
      title: "Commercial Track Record & Milestones",
      subtitle: "Hơn 5 năm kinh nghiệm chuyên sâu về Mobile (Flutter / iOS / Android), trực tiếp đóng góp vào hệ thống mạng xã hội 1M+ downloads, giải pháp phần cứng POS/Kiosk F&B và sản phẩm Vision AI hiện đại.",
      eduBadge: "NỀN TẢNG HỌC VẤN CHUYÊN NGÀNH",
      eduSchool: "Cao Đẳng FPT Polytechnic — Lập trình máy tính & Phát triển phần mềm",
      eduDegree: "Bằng Cử nhân Thực hành CNTT • Tiếng Anh chuyên ngành (Working Proficiency)",
      eduDetails: "Tập trung nền tảng thuật toán, kiến trúc hướng đối tượng, phát triển ứng dụng di động chuẩn công nghiệp.",
    },
    engineering: {
      badge: "TRIẾT LÝ PHÁT TRIỂN PHẦN MỀM",
      title: "Strict Ponytail Mindset & 8-Gate Quality",
      description: "Tôi tiếp cận công việc lập trình với tinh thần tôn trọng sự tối giản, triệt tiêu bloat không cần thiết và bảo vệ chất lượng sản phẩm bằng hệ thống kiểm thử tự động nghiêm ngặt.",
      quote: "\"Boring code over clever code. Fewest files possible.\"",
      subquote: "Mã nguồn tốt nhất là mã nguồn dễ hiểu, dễ sửa, chịu tải cao và không gây bất ngờ trong môi trường production.",
      testsPassingBadge: "226/226 Tests Passing (100%)",
      zeroLeakBadge: "0 Memory Leak",
      ruleTags: ["Rule #1", "Rule #2", "Rule #3", "Rule #4"],
      principles: [
        {
          title: "YAGNI First (Ruthless Simplicity)",
          description: "Có thực sự cần xây dựng tính năng này không? Không viết code phỏng đoán tương lai hay tạo ra các abstraction phức tạp không ai yêu cầu.",
        },
        {
          title: "Native & Standard Libs Over Bloat",
          description: "Tận dụng tối đa sức mạnh native của iOS/Android và chuẩn hóa thư viện nền tảng trước khi kéo bất kỳ dependency bên ngoài nào.",
        },
        {
          title: "Shortest Working Diff",
          description: "Một dòng giải quyết vấn đề tốt hơn 50 dòng phức tạp. Ưu tiên giải pháp tinh gọn, minh bạch, giảm thiểu diện tích bề mặt lỗi.",
        },
        {
          title: "Zero-Tolerance Quality (8-Gate SOP)",
          description: "Không chấp nhận 'du di' chất lượng. 100% test pass thực chất (226/226 tests trong AstroBite), 0 memory leak và 60 FPS ổn định.",
        },
      ],
    },
    skills: {
      badge: "NĂNG LỰC CÔNG NGHỆ",
      title: "Technical Skills & Architecture Matrix",
      description: "Hệ sinh thái kỹ năng tích lũy qua hơn 5 năm thực chiến, phân định rõ ràng giữa các kỹ năng lõi (Core Specialty) và khả năng tích hợp công nghệ chuyên sâu.",
      coreStrength: "Điểm mạnh trọng tâm",
      productionReady: "Production Ready",
    },
    contact: {
      statusBadge: "🟢 Sẵn sàng cơ hội Mid Mobile Engineer",
      title: "Kết Nối & Trao Đổi Cơ Hội Nghề Nghiệp",
      description: "Tôi luôn cởi mở đón nhận các cơ hội vị trí Mid Mobile Engineer, cùng đội ngũ kiến tạo những sản phẩm di động đột phá và bền bỉ.",
      terminalChannel: "contact-channel // mid-mobile-engineer",
      statusActive: "Active & Responsive",
      emailLabel: "Email Address",
      phoneLabel: "Hotline / Zalo",
      locationLabel: "Location & YOB",
      locationValue: "TP. Hồ Chí Minh, Việt Nam • Sinh năm 2000",
      copyTooltip: "Sao chép email",
      copiedText: "Đã chép!",
      downloadTitle: "Tải Hồ Sơ Năng Lực (CV PDF)",
      downloadDesc: "Bản cập nhật mới nhất đầy đủ kinh nghiệm và dự án thực chiến.",
      downloadPdfBtn: "Tải CV (PDF 2 Trang Chuẩn)",
      viewWebBtn: "Xem Bản In Web A4",
    },
    footer: {
      roleDesc: "Chuyên sâu Flutter, Native iOS/Android, Clean Architecture và ứng dụng Multimodal AI trong sản phẩm di động thực tế.",
      rights: "© 2026 Nguyen Duy Trang. All rights reserved.",
      craftedWith: "Crafted with",
      backToTop: "Lên đầu trang",
    },
  },

  en: {
    navbar: {
      brandRole: "Mid Mobile Engineer",
      navAbout: "About",
      navAstroBite: "AstroBite v2.5.1",
      navCareer: "Experience",
      navEngineering: "Engineering",
      navSkills: "Skills",
      navContact: "Contact",
      downloadCv: "Download CV",
      downloadCvFull: "Download CV (2-Page PDF)",
      themeLightTooltip: "Switch to dark theme",
      themeDarkTooltip: "Switch to light theme",
      langSwitchTooltip: "Chuyển sang Tiếng Việt",
    },
    hero: {
      openToWork: "Open to Work",
      greeting: "Hello, I am",
      fullNameFirst: "Nguyen Duy",
      fullNameLast: "Trang",
      subHeadline: "Mid Mobile Engineer · Flutter · Native iOS/Android · AI",
      bullet1Title: "5+ Years Engineering Large-Scale Apps (1M+ Downloads)",
      bullet1Text: "Engineered and scaled iOS, Android & Flutter applications reaching 1M+ downloads (99.5%+ crash-free), multi-industry F&B POS Kiosks (-30% transaction time), and native OS widgets.",
      bullet2Title: "Feature-First Clean Architecture & High Resilience",
      bullet2Text: "Deep mastery in Clean Architecture, Offline-first synchronization, Riverpod 2.x state management, guaranteeing 0 memory leaks and butter-smooth 60 FPS rendering.",
      bullet3Title: "Pioneering Multimodal Vision AI & Flutter GenUI",
      bullet3Text: "Integrated Google Gemini Vision AI extracting nutrients in < 2.5s and GenUI A2UI protocol dynamically generating interactive 2-way native chat widgets.",
      missionTitle: "Mission & Commitment:",
      missionText: "Ready for Mid Mobile Engineer roles, bringing hands-on engineering excellence and high-impact product delivery for your organization.",
      ctaExploreAstroBite: "Explore AstroBite v2.5.1",
      ctaDownloadCv: "Download CV (2-Page PDF)",
      ctaViewWebCv: "View Web Print A4",
      avatarExpYears: "5+ Years Experience",
      avatarExpSkills: "Flutter · Swift · Kotlin",
      avatarWorkType: "Full-time",
      avatarWorkModes: "Hybrid · Remote · Onsite",
      avatarLocationYob: "Ho Chi Minh City · Born 2000",
      metricsTitle: "Verified Production Metrics",
      metricsSub: "Proven Commercial Track Record",
    },
    astrobite: {
      badgeFlagship: "FEATURED FLAGSHIP PROJECT — v2.5.1",
      roleTag: "Mobile Engineer & System Architect",
      tagline: "Smart AI Food Scanner",
      description: "AstroBite transforms healthy eating from a tedious chore into an engaging, dopamine-rich daily habit. Fusing Google Gemini Multimodal Vision AI with a delightful 3D Claymorphic UI, users snap a photo of any meal to receive a full nutritional breakdown within < 2.5s. Features an interactive GenUI Chat Cockpit, Starlight Streak Shield gamification, cross-platform OS Lock-Screen Widgets, and 226 automated tests passing 100%.",
      pillarsHeader: "4 Key Architectural Breakthroughs",
      pillarsSub: "Deep Engineering Breakdown (v2.5.1 Innovations)",
      macroIntro: "Decomposes 3 essential macronutrients per standardized color tokens:",
      macroCarbs: "🌾 Carbs (#1CB0F6 Blue)",
      macroProtein: "🥩 Protein (#FF9600 Orange)",
      macroFat: "💧 Fat (#FF5C8D Pink)",
      viewScreensLink: "View Live Screens",
      galleryBannerTitle: "Live 12-Screen Claymorphic 3D Showcase Collection",
      galleryBannerDesc: "Explore Solar Fresh Claymorphic UI, AR Camera Scanner, AstroCoach GenUI, and Lock-Screen Widgets.",
      galleryBannerBtn: "Explore 12-Screen Gallery Below ↓",
    },
    gallery: {
      badge: "Visual Experience",
      title: "Showcase Gallery & UI Walkthrough (v2.5.1)",
      subtitle: "High-fidelity production screenshots of AstroBite v2.5.1 featuring Solar Fresh 3D Claymorphism. Click any screenshot to inspect full resolution with technical architecture specs.",
      catAll: "All (12)",
      catAi: "AI Vision Scanner",
      catGenui: "GenUI & Chat",
      catCockpit: "Clay Cockpit & Streak",
      catFeatures: "Tools & Analytics",
      catWidgets: "OS Home Widgets",
      techSpecsLabel: "Technical Architecture & Specs",
      closeTooltip: "Close (Esc)",
      prevTooltip: "Previous (←)",
      nextTooltip: "Next (→)",
    },
    career: {
      badge: "CAREER TRACK RECORD",
      title: "Commercial Track Record & Milestones",
      subtitle: "5+ years of dedicated mobile engineering (Flutter / iOS / Android), directly contributing to 1M+ download social networks, multi-industry POS/Kiosk hardware systems, and cutting-edge Vision AI products.",
      eduBadge: "ACADEMIC BACKGROUND",
      eduSchool: "FPT Polytechnic College — Computer Programming & Software Development",
      eduDegree: "Associate Degree in Information Technology • Professional Working English",
      eduDetails: "Core foundations in algorithms, object-oriented design, and enterprise-grade mobile software engineering.",
    },
    engineering: {
      badge: "SOFTWARE ENGINEERING PHILOSOPHY",
      title: "Strict Ponytail Mindset & 8-Gate Quality",
      description: "I approach software engineering with ruthless simplicity, zero tolerance for unnecessary complexity (bloat), and protect system reliability through disciplined automated testing.",
      quote: "\"Boring code over clever code. Fewest files possible.\"",
      subquote: "The best code is simple to read, easy to debug, highly resilient under load, and never produces surprises in production.",
      testsPassingBadge: "226/226 Tests Passing (100%)",
      zeroLeakBadge: "0 Memory Leak",
      ruleTags: ["Rule #1", "Rule #2", "Rule #3", "Rule #4"],
      principles: [
        {
          title: "YAGNI First (Ruthless Simplicity)",
          description: "Does this really need to exist? Never write speculative code or build complex abstractions that no one requested.",
        },
        {
          title: "Native & Standard Libs Over Bloat",
          description: "Leverage native iOS/Android system APIs and standard platform libraries before introducing any third-party dependencies.",
        },
        {
          title: "Shortest Working Diff",
          description: "One line that solves the problem beats 50 clever lines. Favor concise, transparent solutions that minimize bug surface area.",
        },
        {
          title: "Zero-Tolerance Quality (8-Gate SOP)",
          description: "Zero compromises on product health. 100% genuine automated test passes (226/226 in AstroBite), 0 memory leak, and locked 60 FPS.",
        },
      ],
    },
    skills: {
      badge: "CORE COMPETENCIES",
      title: "Technical Skills & Architecture Matrix",
      description: "Skillset refined over 5+ years of production experience, strictly organized between core specialties and deep platform integration capabilities.",
      coreStrength: "Core Specialty",
      productionReady: "Production Ready",
    },
    contact: {
      statusBadge: "🟢 Open to Mid Mobile Engineer Roles",
      title: "Get in Touch & Career Opportunities",
      description: "I am actively open to Mid Mobile Engineer roles to build robust, scalable mobile applications and drive high-impact engineering.",
      terminalChannel: "contact-channel // mid-mobile-engineer",
      statusActive: "Active & Responsive",
      emailLabel: "Email Address",
      phoneLabel: "Hotline / Zalo",
      locationLabel: "Location & YOB",
      locationValue: "Ho Chi Minh City, Vietnam • Born 2000",
      copyTooltip: "Copy email",
      copiedText: "Copied!",
      downloadTitle: "Download Resume (CV PDF)",
      downloadDesc: "Latest version with comprehensive commercial experience and flagship projects.",
      downloadPdfBtn: "Download CV (2-Page PDF)",
      viewWebBtn: "View Web Print A4",
    },
    footer: {
      roleDesc: "Specializing in Flutter, Native iOS/Android, Clean Architecture, and Multimodal AI in production mobile products.",
      rights: "© 2026 Nguyen Duy Trang. All rights reserved.",
      craftedWith: "Crafted with",
      backToTop: "Back to Top",
    },
  },
};
