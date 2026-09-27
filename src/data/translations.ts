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
      brandRole: "Mobile Engineer (Mid-Level)",
      navAbout: "Giới thiệu",
      navAstroBite: "AstroBite v2.0",
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
      subHeadline: "Mobile Engineer (Mid-Level) · Flutter · iOS · Android · AI",
      bullet1Title: "5 năm thực chiến đa lĩnh vực",
      bullet1Text: "Xây dựng ứng dụng iOS, Android & Flutter cho Mạng xã hội, Chat/OTT, CRM, Delivery và hệ thống phần cứng chuyên dụng (POS, Kiosk self-order).",
      bullet2Title: "Kiến trúc sạch & Chuyển đổi Product bền bỉ",
      bullet2Text: "Thành thạo MVVM / Clean Architecture; năng lực chuẩn hóa các dự án outsource làm gấp thành sản phẩm Product sạch sẽ, tối ưu hiệu năng và dễ bảo trì lâu dài.",
      bullet3Title: "Ứng dụng AI & Đón đầu xu hướng công nghệ",
      bullet3Text: "Tận dụng AI-assisted engineering để tăng tốc độ delivery, đồng thời tiên phong tích hợp Multimodal Vision AI (Gemini) và Generative UI vào app di động.",
      missionTitle: "Mục tiêu đồng hành:",
      missionText: "Xây dựng những sản phẩm mobile chất lượng cao, có khả năng scale mở rộng và cam kết đồng hành lâu dài cùng doanh nghiệp.",
      ctaExploreAstroBite: "Khám phá AstroBite v2.0",
      ctaDownloadCv: "Tải CV PDF (2 Trang)",
      ctaViewWebCv: "Xem Bản In Web A4",
      avatarExpYears: "5 Năm Kinh Nghiệm",
      avatarExpSkills: "Flutter · Swift · Kotlin",
      avatarWorkType: "Full-time",
      avatarWorkModes: "Hybrid · Remote",
      avatarLocationYob: "TP. Hồ Chí Minh · Sinh năm 2000",
      metricsTitle: "Verified Production Metrics",
      metricsSub: "Proven Commercial Track Record",
    },
    astrobite: {
      badgeFlagship: "DỰ ÁN TIÊU BIỂU (FLAGSHIP) — v2.0.0",
      roleTag: "Mobile Engineer (Core Developer & AI Integration)",
      tagline: "Trợ Lý Dinh Dưỡng Thông Minh & AI Coach Cá Nhân Hóa",
      description: "AstroBite biến việc ăn uống lành mạnh thành thói quen dễ dàng mỗi ngày: chỉ cần chụp ảnh bữa ăn để hệ thống tự động bóc tách calo và các nhóm chất (Đạm, Tinh bột, Béo), hoặc trò chuyện trực tiếp với Trợ lý AI Coach để ghi nhận món ăn bằng tin nhắn và nhận gợi ý thực đơn tức thì (“Tối nay còn 400 calo thì nên ăn gì?”, “Uống ly trà sữa 50% đường thì tính thế nào?”). Kết hợp cùng bảng quản lý năng lượng trực quan, biểu đồ theo dõi tiến độ sức khỏe và giao diện đất sét 3D vui nhộn, AstroBite đóng vai trò như một chuyên gia dinh dưỡng đồng hành 24/7 giúp bạn đạt mục tiêu vóc dáng bền vững.",
      pillarsHeader: "4 Đột Phá Kiến Trúc Trọng Yếu",
      pillarsSub: "Deep Engineering Breakdown",
      macroIntro: "Bóc tách 3 nhóm chất đa lượng chuẩn quốc tế:",
      macroCarbs: "Carbs (Tinh bột)",
      macroProtein: "Protein (Đạm)",
      macroFat: "Fat (Chất béo)",
      viewScreensLink: "Xem màn hình thực tế",
      galleryBannerTitle: "Bộ sưu tập ảnh chụp màn hình ứng dụng thực tế",
      galleryBannerDesc: "Khám phá giao diện Claymorphism UI, AR Camera Scanner và trợ lý AstroCoach GenUI.",
      galleryBannerBtn: "Khám phá Gallery bên dưới ↓",
    },
    gallery: {
      badge: "Visual Experience",
      title: "Showcase Gallery & UI Walkthrough",
      subtitle: "Bộ sưu tập ảnh chụp màn hình ứng dụng AstroBite v2.0 thực tế trên thiết bị di động. Nhấp vào bất kỳ ảnh nào để xem kích thước lớn kèm thông số kỹ thuật chi tiết.",
      catAll: "Tất cả màn hình",
      catAi: "AI Vision Scanner",
      catGenui: "GenUI & Chat",
      catFeatures: "Dashboard & Features",
      catWidgets: "OS Home Widgets",
      techSpecsLabel: "Thông số kỹ thuật & Kiến trúc",
      closeTooltip: "Đóng (Esc)",
      prevTooltip: "Ảnh trước (←)",
      nextTooltip: "Ảnh sau (→)",
    },
    career: {
      badge: "LỊCH SỬ KINH NGHIỆM",
      title: "Commercial Track Record & Milestones",
      subtitle: "5 năm kinh nghiệm chuyên sâu về Mobile (Flutter / iOS / Android), trực tiếp đóng góp vào hệ thống mạng xã hội 1M+ downloads, giải pháp phần cứng POS/Kiosk và sản phẩm Vision AI hiện đại.",
      eduBadge: "NỀN TẢNG HỌC VẤN CHUYÊN NGÀNH",
      eduSchool: "Cao Đẳng FPT Polytechnic — Lập trình máy tính & Phát triển phần mềm",
      eduDegree: "Bằng Cử nhân Thực hành CNTT • Tiếng Anh chuyên ngành (Working Proficiency)",
      eduDetails: "Tập trung nền tảng thuật toán, kiến trúc hướng đối tượng, phát triển ứng dụng di động chuẩn công nghiệp.",
    },
    engineering: {
      badge: "TRIẾT LÝ PHÁT TRIỂN PHẦN MỀM",
      title: "Strict Ponytail Mindset & 8-Gate Quality",
      description: "Tôi tiếp cận công việc lập trình với tinh thần tôn trọng sự tối giản, ghét bỏ sự phức tạp hóa không cần thiết (bloat) và bảo vệ chất lượng sản phẩm bằng hệ thống kiểm thử tự động nghiêm ngặt.",
      quote: "\"Boring code over clever code. Fewest files possible.\"",
      subquote: "Mã nguồn tốt nhất là mã nguồn dễ hiểu, dễ sửa, chịu tải cao và không gây bất ngờ trong môi trường production.",
      testsPassingBadge: "198/198 Tests Passing",
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
          description: "Không chấp nhận 'du di' chất lượng. 100% test pass thực chất (198/198 tests trong AstroBite), 0 memory leak và 60 FPS ổn định.",
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
      statusBadge: "🟢 Open to Opportunities (Mobile Engineer)",
      title: "Kết Nối & Trao Đổi Cơ Hội Nghề Nghiệp",
      description: "Tôi luôn cởi mở đón nhận các cơ hội vị trí Mobile Engineer (Mid-Level), tham gia xây dựng các sản phẩm di động hiệu năng cao và giải quyết các bài toán công nghệ thách thức.",
      terminalChannel: "contact-channel // mobile-engineer",
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
      brandRole: "Mobile Engineer (Mid-Level)",
      navAbout: "About",
      navAstroBite: "AstroBite v2.0",
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
      subHeadline: "Mobile Engineer (Mid-Level) · Flutter · iOS · Android · AI",
      bullet1Title: "5 Years of Hands-on Domain Expertise",
      bullet1Text: "Engineered iOS, Android & Flutter apps for Social Travel, Chat/OTT, CRM, Delivery and specialized hardware systems (POS, self-order Kiosk).",
      bullet2Title: "Clean Architecture & Scalable Product Transformation",
      bullet2Text: "Deep mastery in MVVM / Feature-First Clean Architecture; proven capability transforming outsourced codebases into clean, high-performance, maintainable products.",
      bullet3Title: "AI-Driven Engineering & Cutting-Edge Innovation",
      bullet3Text: "Accelerating delivery with AI-assisted workflows while pioneering Multimodal Vision AI (Gemini) and Generative UI (A2UI) in mobile applications.",
      missionTitle: "Professional Commitment:",
      missionText: "Delivering high-performance, scalable mobile products with long-term engineering ownership and strong business alignment.",
      ctaExploreAstroBite: "Explore AstroBite v2.0",
      ctaDownloadCv: "Download CV (2-Page PDF)",
      ctaViewWebCv: "View Web Print A4",
      avatarExpYears: "5 Years Experience",
      avatarExpSkills: "Flutter · Swift · Kotlin",
      avatarWorkType: "Full-time",
      avatarWorkModes: "Hybrid · Remote",
      avatarLocationYob: "Ho Chi Minh City · Born 2000",
      metricsTitle: "Verified Production Metrics",
      metricsSub: "Proven Commercial Track Record",
    },
    astrobite: {
      badgeFlagship: "FEATURED FLAGSHIP PROJECT — v2.0.0",
      roleTag: "Mobile Engineer (Core Developer & AI Integration)",
      tagline: "Intelligent Nutrition Assistant & Personalized AI Coach",
      description: "AstroBite makes healthy eating effortless every day: simply snap a meal photo for instant multi-macro decomposition (Protein, Carbs, Fat) and calorie estimation, or chat with the AI Coach for contextual meal logging and real-time suggestions ('I have 400 kcal left for dinner, what should I eat?'). Combining intuitive energy budgets, long-term health trend charts, and a playful 3D claymorphic UI, AstroBite acts as your 24/7 nutrition companion.",
      pillarsHeader: "4 Key Architectural Breakthroughs",
      pillarsSub: "Deep Engineering Breakdown",
      macroIntro: "Decomposes 3 essential macronutrients per global standards:",
      macroCarbs: "Carbs",
      macroProtein: "Protein",
      macroFat: "Fat",
      viewScreensLink: "View Live Screens",
      galleryBannerTitle: "Live Production Screenshots Collection",
      galleryBannerDesc: "Explore Claymorphism UI, AR Camera Scanner, and the AstroCoach GenUI Assistant.",
      galleryBannerBtn: "Explore Showcase Gallery Below ↓",
    },
    gallery: {
      badge: "Visual Experience",
      title: "Showcase Gallery & UI Walkthrough",
      subtitle: "High-fidelity production screenshots of AstroBite v2.0 on real mobile devices. Click any screenshot to view full resolution with technical architecture specs.",
      catAll: "All Screens",
      catAi: "AI Vision Scanner",
      catGenui: "GenUI & Chat",
      catFeatures: "Dashboard & Features",
      catWidgets: "OS Home Widgets",
      techSpecsLabel: "Technical Architecture & Specs",
      closeTooltip: "Close (Esc)",
      prevTooltip: "Previous (←)",
      nextTooltip: "Next (→)",
    },
    career: {
      badge: "CAREER TRACK RECORD",
      title: "Commercial Track Record & Milestones",
      subtitle: "5 years of dedicated mobile engineering (Flutter / iOS / Android), directly contributing to 1M+ download social networks, multi-industry POS/Kiosk hardware systems, and cutting-edge Vision AI products.",
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
      testsPassingBadge: "198/198 Tests Passing",
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
          description: "Zero compromises on product health. 100% genuine automated test passes (198/198 in AstroBite), 0 memory leak, and locked 60 FPS.",
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
      statusBadge: "🟢 Open to Opportunities (Mobile Engineer)",
      title: "Get in Touch & Career Opportunities",
      description: "I am actively open to Mobile Engineer (Mid-Level) roles to build high-performance mobile products and solve challenging engineering problems.",
      terminalChannel: "contact-channel // mobile-engineer",
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
