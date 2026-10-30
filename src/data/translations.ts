import { Language } from '../context/LanguageContext';

export interface TranslationDictionary {
  navbar: {
    brandRole: string;
    navAbout: string;
    navExperience: string;
    navProjects: string;
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
    ctaProjects: string;
    ctaDownloadCv: string;
    ctaContact: string;
    avatarExpYears: string;
    avatarExpSkills: string;
    avatarWorkType: string;
    avatarWorkModes: string;
    avatarLocation: string;
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
    featuresHeader: string;
    featuresSub: string;
    featuresBadge: string;
    demoVideoTitle: string;
    demoVideoSubtitle: string;
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
      navAbout: "Giới thiệu",
      navExperience: "Kinh nghiệm",
      navProjects: "Dự án",
      navSkills: "Kỹ năng",
      navEngineering: "Tiếp cận kỹ thuật",
      navContact: "Liên hệ",
      downloadCv: "Tải CV (PDF)",
      downloadCvFull: "Tải CV (PDF 2 Trang)",
      themeLightTooltip: "Chuyển sang giao diện tối",
      themeDarkTooltip: "Chuyển sang giao diện sáng",
      langSwitchTooltip: "Switch to English",
    },
    hero: {
      openToWork: "Sẵn sàng cơ hội mới",
      greeting: "Xin chào, tôi là",
      fullNameFirst: "Nguyễn Duy",
      fullNameLast: "Trang",
      subHeadline: "Mobile Engineer | Flutter · Native iOS (Swift) · Android (Kotlin)",
      bullet1Title: "5+ năm kinh nghiệm phát triển ứng dụng di động",
      bullet1Text: "Tham gia phát triển và duy trì các sản phẩm di động thương mại đa dạng: mạng xã hội du lịch 1M+ downloads, ứng dụng nhắn tin OTT thời gian thực, fintech chuyển tiền quốc tế và hệ thống POS/Kiosk đa ngành.",
      bullet2Title: "Kiến trúc phân tầng & Vận hành ổn định",
      bullet2Text: "Áp dụng Clean Architecture (Feature-First), phân tách rõ ràng presentation, business logic và data access; quản lý trạng thái hiệu quả với Riverpod và BLoC; chú trọng xử lý lỗi và dữ liệu cục bộ.",
      bullet3Title: "Tích hợp Native Platform Channels & AI",
      bullet3Text: "Thành thạo kết nối phần cứng ngoại vi (máy in nhiệt ESC/POS, máy quét mã vạch) qua Kotlin Platform Channels; tích hợp Google Gemini Vision & Speech-to-Text vào sản phẩm di động.",
      missionTitle: "Mục tiêu & Định hướng:",
      missionText: "Ứng tuyển vị trí Mid-Level Mobile Engineer, đóng góp năng lực kỹ thuật thực tế để xây dựng những trải nghiệm ứng dụng mượt mà, ổn định và dễ bảo trì.",
      ctaProjects: "Xem Dự Án",
      ctaDownloadCv: "Tải CV PDF",
      ctaContact: "Liên Hệ",
      avatarExpYears: "5+ Năm Kinh Nghiệm",
      avatarExpSkills: "Flutter · Swift · Kotlin",
      avatarWorkType: "Full-time",
      avatarWorkModes: "Hybrid · Remote · Onsite",
      avatarLocation: "TP. Hồ Chí Minh, Việt Nam",
      metricsTitle: "Thông Tin Nổi Bật",
      metricsSub: "Kinh nghiệm thực tế từ các sản phẩm đã phát hành",
    },
    astrobite: {
      badgeFlagship: "DỰ ÁN CÁ NHÂN TIÊU BIỂU",
      roleTag: "Solo Developer / Personal Project",
      tagline: "Trợ Lý Ghi Nhận Bữa Ăn & Dinh Dưỡng Bằng AI",
      description: "AstroBite là ứng dụng Flutter hỗ trợ ghi nhận bữa ăn và theo dõi dinh dưỡng hằng ngày. Người dùng có thể nhập thực phẩm thủ công, tra cứu sản phẩm bằng mã vạch, phân tích hình ảnh món ăn bằng Gemini Vision và ghi nhận bữa ăn từ giọng nói tiếng Việt. Ứng dụng sử dụng Cloud Firestore để lưu trữ dữ liệu và local cache để hỗ trợ các luồng ghi nhận khi không có kết nối mạng.",
      pillarsHeader: "4 Điểm Nhấn Kỹ Thuật Trọng Tâm",
      pillarsSub: "Case Study & Kiến Trúc Ứng Dụng",
      macroIntro: "Phân bổ 3 nhóm dưỡng chất đa lượng:",
      macroCarbs: "Carbs (Đường bột)",
      macroProtein: "Đạm (Protein)",
      macroFat: "Chất béo (Fat)",
      viewScreensLink: "Xem ảnh chụp màn hình",
      galleryBannerTitle: "Bộ Sưu Tập Màn Hình Ứng Dụng Thực Tế",
      galleryBannerDesc: "Giao diện theo phong cách Claymorphism, camera quét món ăn AI, trợ lý trò chuyện và thống kê dinh dưỡng.",
      galleryBannerBtn: "Xem thư viện ảnh bên dưới ↓",
      featuresHeader: "Các Tính Năng Chính Của Ứng Dụng",
      featuresSub: "Hỗ trợ theo dõi dinh dưỡng hàng ngày tiện lợi, linh hoạt và trực quan.",
      featuresBadge: "TÍNH NĂNG TIÊU BIỂU",
      demoVideoTitle: "Video Trải Nghiệm Ứng Dụng Thực Tế",
      demoVideoSubtitle: "Xem demo các luồng quét món ăn bằng AI, nhận diện giọng nói và theo dõi chỉ số dinh dưỡng",
    },
    gallery: {
      badge: "Giao Diện Ứng Dụng",
      title: "Ảnh Chụp Màn Hình AstroBite",
      subtitle: "Bộ sưu tập các màn hình chính của ứng dụng AstroBite. Nhấp vào ảnh để xem chi tiết và thông số kiến trúc kỹ thuật tương ứng.",
      catAll: "Tất cả",
      catAi: "AI Vision Scanner",
      catGenui: "Trợ Lý AI",
      catCockpit: "Dashboard",
      catFeatures: "Công cụ & Thống kê",
      catWidgets: "Hồ Sơ Cá Nhân",
      techSpecsLabel: "Thông số kỹ thuật & Công nghệ sử dụng",
      closeTooltip: "Đóng (Esc)",
      prevTooltip: "Ảnh trước (←)",
      nextTooltip: "Ảnh sau (→)",
    },
    career: {
      badge: "KINH NGHIỆM LÀM VIỆC",
      title: "Quá Trình Công Tác & Dự Án Thương Mại",
      subtitle: "Hơn 5 năm kinh nghiệm phát triển ứng dụng di động thương mại, trực tiếp tham gia xây dựng mạng xã hội du lịch 1M+ downloads, giải pháp phần cứng POS/Kiosk và ứng dụng OTT.",
      eduBadge: "HỌC VẤN CHUYÊN NGÀNH",
      eduSchool: "Cao Đẳng FPT Polytechnic — Lập trình máy tính & Phát triển phần mềm",
      eduDegree: "Bằng Cử nhân Thực hành CNTT • Tiếng Anh chuyên ngành",
      eduDetails: "Nền tảng vững chắc về cấu trúc dữ liệu, thuật toán, lập trình hướng đối tượng và quy trình phát triển phần mềm di động.",
    },
    engineering: {
      badge: "NGUYÊN TẮC KỸ THUẬT",
      title: "Cách Tiếp Cận Kỹ Thuật & Giải Quyết Vấn Đề",
      description: "Tôi ưu tiên các giải pháp kỹ thuật tinh gọn, phân tách trách nhiệm rõ ràng, xử lý cẩn trọng các trạng thái biên và đảm bảo tính ổn định trong môi trường thực tế.",
      quote: "\"Viết code rõ ràng, dễ bảo trì và hạn chế tối đa độ phức tạp không cần thiết.\"",
      subquote: "Mã nguồn tốt là mã nguồn dễ hiểu, dễ kiểm thử, có cấu trúc mạch lạc và vận hành bền bỉ.",
      ruleTags: ["Kiến trúc", "Độ tin cậy", "Native Integration"],
      principles: [
        {
          title: "Kiến Trúc Phân Tầng Dễ Bảo Trì",
          description: "Phân tách rõ ràng giữa UI (presentation), nghiệp vụ (business logic) và truy xuất dữ liệu (data access). Giúp tính năng dễ kiểm thử độc lập, hạn chế phụ thuộc chéo và dễ dàng mở rộng khi nghiệp vụ thay đổi.",
          example: "Áp dụng Clean Architecture (Feature-First) trên AstroBite và Aquannets; mô hình VIPER/MVVM trên Hahalolo & Halome iOS.",
        },
        {
          title: "Xử Lý Trạng Thái & Dữ Liệu Cục Bộ",
          description: "Chú trọng các trạng thái loading, error, empty và offline. Với các luồng đặt món hay ghi nhận dữ liệu, ưu tiên lưu trữ cục bộ trước khi đồng bộ để tránh mất dữ liệu người dùng khi kết nối mạng chập chờn.",
          example: "Thiết kế luồng lưu đơn hàng offline bằng SQLite trên Kiosk POS Finviet và hàng đợi pending-queue trên AstroBite.",
        },
        {
          title: "Tích Hợp Sâu Native Platform",
          description: "Khi các plugin Flutter có sẵn không đáp ứng đủ yêu cầu phần cứng hoặc nền tảng, tôi chủ động viết Platform Channels bằng Kotlin/Swift để tương tác trực tiếp với SDK thiết bị và dịch vụ native.",
          example: "Xây dựng Kotlin Platform Channels điều khiển máy in nhiệt ESC/POS và máy quét mã vạch cho Finviet; tích hợp CallKit iOS cho Halome.",
        },
      ],
    },
    skills: {
      badge: "NĂNG LỰC CÔNG NGHỆ",
      title: "Kỹ Năng Kỹ Thuật & Công Nghệ Sử Dụng",
      description: "Hệ thống kỹ năng được tích lũy và kiểm chứng qua các dự án thương mại thực tế, tập trung vào nền tảng Mobile, kiến trúc phân tầng và tích hợp hệ thống.",
      coreStrength: "Công nghệ trọng tâm",
      productionReady: "Kinh nghiệm thực chiến",
    },
    contact: {
      statusBadge: "🟢 Sẵn sàng cho cơ hội Mobile Engineer mới",
      title: "Kết Nối & Trao Đổi Cơ Hội Hợp Tác",
      description: "Tôi luôn sẵn sàng trao đổi về các cơ hội nghề nghiệp vị trí Mobile Engineer, cùng đội ngũ tạo ra những sản phẩm ứng dụng chất lượng và có giá trị thực tế.",
      terminalChannel: "contact // mobile-engineer",
      statusActive: "Active & Responsive",
      emailLabel: "Địa chỉ Email",
      phoneLabel: "Số điện thoại / Zalo",
      locationLabel: "Địa điểm làm việc",
      locationValue: "TP. Hồ Chí Minh, Việt Nam",
      copyTooltip: "Sao chép email",
      copiedText: "Đã sao chép!",
      downloadTitle: "Tải Hồ Sơ Ứng Tuyển (CV PDF)",
      downloadDesc: "Bản CV chi tiết tổng hợp kinh nghiệm thương mại và các dự án di động đã tham gia.",
      downloadPdfBtn: "Tải CV PDF (2 Trang)",
      viewWebBtn: "Xem Bản In Web",
    },
    footer: {
      roleDesc: "Chuyên về Flutter, Native iOS (Swift), Android (Kotlin) và kiến trúc ứng dụng di động bền vững.",
      rights: "© 2026 Nguyễn Duy Trang. All rights reserved.",
      craftedWith: "Được xây dựng với",
      backToTop: "Lên đầu trang",
    },
  },
  en: {
    navbar: {
      brandRole: "Mobile Engineer",
      navAbout: "About",
      navExperience: "Experience",
      navProjects: "Projects",
      navSkills: "Skills",
      navEngineering: "Approach",
      navContact: "Contact",
      downloadCv: "Download CV",
      downloadCvFull: "Download CV (2-Page PDF)",
      themeLightTooltip: "Switch to dark theme",
      themeDarkTooltip: "Switch to light theme",
      langSwitchTooltip: "Chuyển sang tiếng Việt",
    },
    hero: {
      openToWork: "Open to Work",
      greeting: "Hello, I am",
      fullNameFirst: "Nguyen Duy",
      fullNameLast: "Trang",
      subHeadline: "Mobile Engineer | Flutter · Native iOS (Swift) · Android (Kotlin)",
      bullet1Title: "5+ years of mobile development experience",
      bullet1Text: "Contributed to diverse commercial mobile apps: travel social network with 1M+ downloads, real-time OTT messaging, international remittance, and multi-vertical POS/Kiosk solutions.",
      bullet2Title: "Maintainable architecture & production reliability",
      bullet2Text: "Practicing Clean Architecture (Feature-First) with clean separation of presentation, business logic, and data layers; state management with Riverpod and BLoC; resilient offline persistence.",
      bullet3Title: "Native platform integration & AI exploration",
      bullet3Text: "Experienced in interfacing with hardware peripherals (ESC/POS thermal printers, barcode scanners) via Kotlin Platform Channels; integrating Google Gemini Vision & Speech-to-Text.",
      missionTitle: "Career Objective:",
      missionText: "Seeking a Mid-Level Mobile Engineer position to deliver reliable, maintainable, and high-quality mobile experiences for production users.",
      ctaProjects: "View Projects",
      ctaDownloadCv: "Download CV",
      ctaContact: "Contact Me",
      avatarExpYears: "5+ Years Experience",
      avatarExpSkills: "Flutter · Swift · Kotlin",
      avatarWorkType: "Full-time",
      avatarWorkModes: "Hybrid · Remote · Onsite",
      avatarLocation: "Ho Chi Minh City, Vietnam",
      metricsTitle: "Key Highlights",
      metricsSub: "Proven track record across released commercial mobile applications",
    },
    astrobite: {
      badgeFlagship: "FEATURED PERSONAL PROJECT",
      roleTag: "Solo Developer / Personal Project",
      tagline: "AI Food Scanner & Nutrition Tracker",
      description: "AstroBite is a Flutter application designed for meal logging and daily nutrition tracking. Users can enter food manually, look up products through barcode, analyze meal photos with Gemini Vision, and record meals using Vietnamese voice input. The application uses Cloud Firestore for persistence and local caching for responsive logging during offline periods.",
      pillarsHeader: "4 Core Technical Deep-Dives",
      pillarsSub: "Case Study & Architecture Breakdown",
      macroIntro: "Key macronutrient breakdown:",
      macroCarbs: "Carbs (Carbohydrates)",
      macroProtein: "Protein",
      macroFat: "Fat",
      viewScreensLink: "View Screenshots",
      galleryBannerTitle: "Production UI Screenshots Showcase",
      galleryBannerDesc: "Claymorphic styling, AI camera food scanner, conversational coach, and nutrition analytics.",
      galleryBannerBtn: "Explore Gallery Below ↓",
      featuresHeader: "Core Application Capabilities",
      featuresSub: "Designed to provide frictionless daily meal tracking and dietary insights.",
      featuresBadge: "KEY FEATURES",
      demoVideoTitle: "Live Application Walkthrough",
      demoVideoSubtitle: "Watch the end-to-end demo covering AI food recognition, voice logging, and nutrition tracking",
    },
    gallery: {
      badge: "Application UI",
      title: "AstroBite Screenshots Showcase",
      subtitle: "Curated collection of AstroBite production screens. Click any screenshot to inspect details and technical specifications.",
      catAll: "All",
      catAi: "AI Vision Scanner",
      catGenui: "AI Assistant",
      catCockpit: "Dashboard",
      catFeatures: "Tools & Analytics",
      catWidgets: "User Profile",
      techSpecsLabel: "Technical Architecture & Stack",
      closeTooltip: "Close (Esc)",
      prevTooltip: "Previous (←)",
      nextTooltip: "Next (→)",
    },
    career: {
      badge: "PROFESSIONAL EXPERIENCE",
      title: "Commercial Track Record & Experience",
      subtitle: "5+ years of mobile application development experience, building products for 1M+ download social networks, multi-industry POS/Kiosk solutions, and OTT messaging.",
      eduBadge: "EDUCATION",
      eduSchool: "FPT Polytechnic College — Computer Programming & Software Development",
      eduDegree: "Associate Degree in Information Technology • Professional Working English",
      eduDetails: "Solid foundation in data structures, algorithms, object-oriented design, and professional mobile application engineering.",
    },
    engineering: {
      badge: "ENGINEERING APPROACH",
      title: "How I Approach Engineering & Problem Solving",
      description: "I prioritize maintainable architecture, clear separation of concerns, careful handling of edge cases, and dependable production performance.",
      quote: "\"Write clean, maintainable code and avoid unnecessary complexity.\"",
      subquote: "Great software is easy to understand, easy to test, logically structured, and reliable in real-world conditions.",
      ruleTags: ["Architecture", "Reliability", "Native Integration"],
      principles: [
        {
          title: "Maintainable Layered Architecture",
          description: "Cleanly decouple UI (presentation), business logic, and data access. Keeps features independently testable, reduces circular dependencies, and simplifies future extensions as business requirements evolve.",
          example: "Applied Clean Architecture (Feature-First) in AstroBite and Aquannets; VIPER & MVVM patterns in Hahalolo & Halome iOS.",
        },
        {
          title: "Resilient State & Local Persistence",
          description: "Treat loading, error, empty, and offline states as first-class citizens. For checkout and data-entry flows, prioritize local persistence before synchronization to prevent data loss on unstable networks.",
          example: "Engineered offline order storage using SQLite on Finviet POS/Kiosk and pending sync queues on AstroBite.",
        },
        {
          title: "Deep Native Platform Integration",
          description: "When off-the-shelf Flutter plugins fall short of hardware or platform demands, I build custom Kotlin/Swift Platform Channels to interface directly with device SDKs and native capabilities.",
          example: "Developed Kotlin Platform Channels for ESC/POS thermal printers and barcode scanners for Finviet; integrated CallKit on iOS for Halome.",
        },
      ],
    },
    skills: {
      badge: "TECHNICAL COMPETENCIES",
      title: "Technical Skills & Technologies",
      description: "Core technical capabilities honed through 5+ years of production experience, focusing on mobile ecosystems, layered architecture, and hardware integration.",
      coreStrength: "Core Specialty",
      productionReady: "Production Experience",
    },
    contact: {
      statusBadge: "🟢 Open to Mobile Engineer Opportunities",
      title: "Get in Touch & Connect",
      description: "I am actively open to discussing Mobile Engineer opportunities to build impactful, robust, and user-centric mobile products.",
      terminalChannel: "contact // mobile-engineer",
      statusActive: "Active & Responsive",
      emailLabel: "Email Address",
      phoneLabel: "Phone / Zalo",
      locationLabel: "Location",
      locationValue: "Ho Chi Minh City, Vietnam",
      copyTooltip: "Copy email",
      copiedText: "Copied!",
      downloadTitle: "Download Resume (CV PDF)",
      downloadDesc: "Detailed resume summarizing commercial experience and mobile projects.",
      downloadPdfBtn: "Download CV (2-Page PDF)",
      viewWebBtn: "View Web Print",
    },
    footer: {
      roleDesc: "Specializing in Flutter, Native iOS (Swift), Android (Kotlin), and maintainable mobile software engineering.",
      rights: "© 2026 Nguyen Duy Trang. All rights reserved.",
      craftedWith: "Crafted with",
      backToTop: "Back to Top",
    },
  },
};
