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
      navSkills: "Năng lực",
      navEngineering: "Cách làm việc",
      navContact: "Liên hệ",
      downloadCv: "Tải CV",
      downloadCvFull: "Tải CV (PDF 2 Trang)",
      themeLightTooltip: "Chuyển sang giao diện tối",
      themeDarkTooltip: "Chuyển sang giao diện sáng",
      langSwitchTooltip: "Switch to English",
    },
    hero: {
      eyebrow: "MOBILE ENGINEER · 5+ YEARS EXPERIENCE",
      roleLabel: "MOBILE ENGINEER",
      fullName: "Nguyen Duy Trang",
      headline: "Tôi xây dựng ứng dụng di động phục vụ những nhu cầu thực tế.",
      supportingLine: "Flutter · Native iOS · Native Android",
      description: "Hơn 5 năm làm việc với Flutter và ứng dụng native iOS, Android. Tôi quan tâm đến chất lượng sản phẩm, kiến trúc dễ bảo trì và trải nghiệm ổn định khi đưa ứng dụng vào vận hành.",
      ctaDownloadCv: "Tải CV",
      ctaProjects: "Xem dự án",
      ctaContact: "Liên hệ",
      viewPrintableCv: "Xem Bản In CV A4",
      floatingBadge: "5+ Năm Kinh Nghiệm Mobile",
      mockupBadge: "AstroBite • Flagship",
      scrollCue: "Cuộn xuống",
      metricsTitle: "Thông Tin Nổi Bật",
      metricsSub: "Kinh nghiệm thực tế từ các sản phẩm đã phát hành",
    },
    about: {
      badge: "ĐÔI NÉT VỀ TÔI",
      headline: "Không chỉ viết code. Tôi muốn hiểu sản phẩm mình đang xây dựng.",
      p1: "Tôi là Mobile Engineer với hơn 5 năm kinh nghiệm phát triển ứng dụng thực tế. Công việc của tôi trải dài từ xây dựng tính năng, tích hợp dịch vụ đến xử lý những vấn đề phát sinh trong quá trình vận hành.",
      p2: "Tôi thường bắt đầu bằng việc hiểu bài toán, sau đó chọn cách triển khai phù hợp. Công nghệ có thể thay đổi; nền tảng engineering tốt mới là thứ giúp tôi thích nghi và làm việc hiệu quả trên nhiều nền tảng.",
      pillar1Title: "Hiểu bài toán",
      pillar1Desc: "Làm rõ nhu cầu trước khi chọn giải pháp kỹ thuật.",
      pillar2Title: "Xây dựng có nền tảng",
      pillar2Desc: "Ưu tiên cấu trúc rõ ràng, dễ kiểm thử và thuận tiện mở rộng.",
      pillar3Title: "Quan tâm đến vận hành",
      pillar3Desc: "Chú ý hiệu năng, độ ổn định và trải nghiệm thực tế của người dùng.",
    },
    astrobite: {
      badgeFlagship: "DỰ ÁN CÁ NHÂN",
      roleTag: "Personal Project · Flutter",
      tagline: "Ăn uống khoa học, bắt đầu từ những lựa chọn hằng ngày.",
      description: "AstroBite là ứng dụng theo dõi dinh dưỡng, hỗ trợ ghi nhận bữa ăn và đưa ra thông tin tham khảo để người dùng hiểu rõ hơn thói quen ăn uống của mình.",
      pillarsHeader: "Vấn đề và cách tiếp cận",
      pillarsSub: "Tập trung vào luồng dữ liệu offline-first, tích hợp AI và khả năng đồng bộ giữa dữ liệu cục bộ với backend.",
      macroIntro: "Phân bổ 3 nhóm dưỡng chất đa lượng:",
      macroCarbs: "Carbs (Đường bột)",
      macroProtein: "Đạm (Protein)",
      macroFat: "Chất béo (Fat)",
      viewScreensLink: "Xem các màn hình của AstroBite",
      galleryBannerTitle: "Bộ Sưu Tập Màn Hình Ứng Dụng Thực Tế",
      galleryBannerDesc: "Giao diện theo dõi dinh dưỡng, phân tích hình ảnh và trợ lý AI.",
      galleryBannerBtn: "Xem thư viện ảnh bên dưới ↓",
      featuresHeader: "Một số chức năng",
      featuresSub: "Hỗ trợ theo dõi dinh dưỡng hàng ngày tiện lợi, linh hoạt và trực quan.",
      featuresBadge: "TÍNH NĂNG TIÊU BIỂU",
      demoVideoTitle: "Trải Nghiệm Hoạt Động Của AstroBite",
      demoVideoSubtitle: "Các luồng chính từ ghi nhận bữa ăn đến theo dõi thông tin dinh dưỡng",
    },
    gallery: {
      badge: "HÌNH ẢNH SẢN PHẨM",
      title: "Một vài màn hình của AstroBite",
      subtitle: "Các luồng chính từ ghi nhận bữa ăn đến theo dõi thông tin dinh dưỡng.",
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
      badge: "KINH NGHIỆM",
      title: "Những sản phẩm tôi đã tham gia phát triển.",
      subtitle: "Một số dấu mốc trong hành trình làm sản phẩm, từ nền tảng số đến ứng dụng phục vụ hoạt động kinh doanh.",
      eduBadge: "HỌC VẤN CHUYÊN NGÀNH",
      eduSchool: "Cao Đẳng FPT Polytechnic — Lập trình máy tính & Phát triển phần mềm",
      eduDegree: "Bằng Cử nhân Thực hành CNTT • Tiếng Anh chuyên ngành",
      eduDetails: "Nền tảng vững chắc về cấu trúc dữ liệu, thuật toán, lập trình hướng đối tượng và quy trình phát triển phần mềm di động.",
    },
    engineering: {
      badge: "CÁCH TÔI LÀM VIỆC",
      title: "Giải pháp tốt không chỉ chạy được. Nó còn phải phù hợp.",
      description: "Khi phát triển một tính năng, tôi cân nhắc cả yêu cầu hiện tại lẫn khả năng duy trì về sau.",
      quote: "\"Code cần dễ đọc, dễ kiểm thử và đủ linh hoạt để thay đổi khi sản phẩm phát triển.\"",
      subquote: "Một tính năng chỉ thực sự hoàn thiện khi hoạt động ổn định trong những điều kiện sử dụng thực tế.",
      ruleTags: ["Bài toán", "Cấu trúc", "Thực tế"],
      principles: [
        {
          title: "Đúng vấn đề trước, đúng công nghệ sau",
          description: "Tôi tìm hiểu luồng nghiệp vụ và giới hạn của hệ thống trước khi chọn cách triển khai.",
          example: "Làm rõ yêu cầu thanh toán POS và in bill trước khi thiết kế Platform Channel.",
        },
        {
          title: "Ưu tiên sự rõ ràng",
          description: "Code cần dễ đọc, dễ kiểm thử và đủ linh hoạt để thay đổi khi sản phẩm phát triển.",
          example: "Tách biệt domain logic, state management và UI presentation mạch lạc.",
        },
        {
          title: "Nghĩ đến lúc đưa vào sử dụng",
          description: "Một tính năng chỉ thực sự hoàn thiện khi hoạt động ổn định trong những điều kiện sử dụng thực tế.",
          example: "Xử lý kết nối mạng chập chờn bằng SQLite local cache và hàng đợi pending queue.",
        },
      ],
    },
    skills: {
      badge: "NĂNG LỰC",
      title: "Những gì tôi sử dụng để xây dựng sản phẩm.",
      description: "Kinh nghiệm tập trung vào phát triển ứng dụng di động, thiết kế cấu trúc phần mềm và tích hợp các dịch vụ cần thiết cho sản phẩm.",
      coreStrength: "Năng lực cốt lõi",
      productionReady: "Đã triển khai trong sản phẩm",
    },
    contact: {
      statusBadge: "LIÊN HỆ",
      title: "Bạn đang tìm một Mobile Engineer?",
      description: "Tôi sẵn sàng trao đổi về cơ hội mới và những sản phẩm có bài toán thú vị.",
      terminalChannel: "trangndps10349@gmail.com",
      statusActive: "Sẵn sàng đón nhận cơ hội mới",
      emailLabel: "Email liên hệ",
      phoneLabel: "Số điện thoại",
      locationLabel: "Địa điểm làm việc",
      locationValue: "TP. Hồ Chí Minh, Việt Nam",
      copyTooltip: "Sao chép email",
      copiedText: "Đã sao chép vào bộ nhớ tạm",
      downloadTitle: "Hồ Sơ Bản In (PDF)",
      downloadDesc: "Bản CV chi tiết định dạng PDF 2 trang chuẩn ATS",
      downloadPdfBtn: "Tải CV (PDF)",
      viewWebBtn: "Gửi email cho tôi",
    },
    footer: {
      roleDesc: "Mobile Engineer",
      rights: "Nguyen Duy Trang · Mobile Engineer",
      craftedWith: "Được xây dựng với sự tập trung vào sản phẩm, kỹ thuật và từng chi tiết nhỏ.",
      backToTop: "Lên đầu trang",
    },
  },
  en: {
    navbar: {
      brandRole: "Mobile Engineer",
      navAbout: "About",
      navExperience: "Experience",
      navProjects: "Projects",
      navSkills: "Capabilities",
      navEngineering: "Approach",
      navContact: "Contact",
      downloadCv: "Download CV",
      downloadCvFull: "Download CV (PDF 2-Page)",
      themeLightTooltip: "Switch to dark mode",
      themeDarkTooltip: "Switch to light mode",
      langSwitchTooltip: "Chuyển sang Tiếng Việt",
    },
    hero: {
      eyebrow: "MOBILE ENGINEER · 5+ YEARS EXPERIENCE",
      roleLabel: "MOBILE ENGINEER",
      fullName: "Nguyen Duy Trang",
      headline: "Building dependable mobile applications for real-world needs.",
      supportingLine: "Flutter · Native iOS · Native Android",
      description: "5+ years working across Flutter and native iOS/Android. Focused on product craft, maintainable architecture, and stable production runtime.",
      ctaDownloadCv: "Download CV",
      ctaProjects: "Explore Work",
      ctaContact: "Contact Me",
      viewPrintableCv: "View Printable A4 CV",
      floatingBadge: "5+ Years Mobile Engineering",
      mockupBadge: "AstroBite • Flagship",
      scrollCue: "Scroll to explore",
      metricsTitle: "Key Highlights",
      metricsSub: "Proven track record across commercial systems",
    },
    about: {
      badge: "ABOUT ME",
      headline: "More than just code. Understanding the product I build.",
      p1: "I am a Mobile Engineer with 5+ years of hands-on production experience. My work spans feature development, service integrations, and solving runtime challenges in live systems.",
      p2: "I always start by understanding the problem before choosing the implementation. Technologies evolve; strong engineering fundamentals are what keep me adaptable across platforms.",
      pillar1Title: "Understand the Problem",
      pillar1Desc: "Clarifying business requirements before picking technical solutions.",
      pillar2Title: "Solid Foundations",
      pillar2Desc: "Prioritizing clear structure, testability, and maintainability.",
      pillar3Title: "Production Mindset",
      pillar3Desc: "Paying close attention to performance, stability, and real-world user conditions.",
    },
    astrobite: {
      badgeFlagship: "PERSONAL PROJECT",
      roleTag: "Personal Project · Flutter",
      tagline: "Healthy eating starts with mindful daily choices.",
      description: "AstroBite is a nutrition tracking application designed to log meals and provide helpful insights so users understand their nutritional habits.",
      pillarsHeader: "Problems and Approach",
      pillarsSub: "Focusing on offline-first data flows, AI integration, and robust local-to-backend synchronization.",
      macroIntro: "Macronutrient breakdown:",
      macroCarbs: "Carbohydrates",
      macroProtein: "Protein",
      macroFat: "Healthy Fats",
      viewScreensLink: "View AstroBite Screens",
      galleryBannerTitle: "Production Interface Showcase",
      galleryBannerDesc: "Nutrition tracking UI, food analysis, and AI assistant.",
      galleryBannerBtn: "Browse screenshot gallery ↓",
      featuresHeader: "Core Features",
      featuresSub: "Making nutrition logging accessible, flexible, and intuitive.",
      featuresBadge: "CORE CAPABILITIES",
      demoVideoTitle: "AstroBite Hands-on Demo",
      demoVideoSubtitle: "Key flows from meal logging to nutritional analytics",
    },
    gallery: {
      badge: "PRODUCT INTERFACE",
      title: "Selected AstroBite Screens",
      subtitle: "Key workflows from meal recording to daily nutrition insights.",
      catAll: "All",
      catAi: "AI Vision Scanner",
      catGenui: "AI Coach",
      catCockpit: "Dashboard",
      catFeatures: "Tools & Analytics",
      catWidgets: "Profile & Goals",
      techSpecsLabel: "Technical specifications",
      closeTooltip: "Close (Esc)",
      prevTooltip: "Previous (←)",
      nextTooltip: "Next (→)",
    },
    career: {
      badge: "EXPERIENCE",
      title: "Products I have contributed to building.",
      subtitle: "Milestones across my journey from consumer digital platforms to business POS systems.",
      eduBadge: "FORMAL EDUCATION",
      eduSchool: "FPT Polytechnic College — Computer Programming & Software Development",
      eduDegree: "Associate Degree in IT • Specialized English",
      eduDetails: "Solid grounding in data structures, algorithms, object-oriented design, and mobile engineering lifecycle.",
    },
    engineering: {
      badge: "HOW I WORK",
      title: "A good solution does more than run. It fits the problem.",
      description: "When implementing a feature, I balance immediate requirements with long-term maintainability.",
      quote: "\"Code should be clear, testable, and adaptable as the product evolves.\"",
      subquote: "A feature is only complete when it performs dependably under real-world conditions.",
      ruleTags: ["Problem", "Structure", "Runtime"],
      principles: [
        {
          title: "Right problem first, right tech second",
          description: "Understanding business flows and system constraints before deciding how to build.",
          example: "Clarifying POS payment and receipt printing flows before architecting Platform Channels.",
        },
        {
          title: "Prioritize clarity",
          description: "Code should be easy to read, test, and adapt as product needs expand.",
          example: "Decoupling domain logic, state management, and UI presentation cleanly.",
        },
        {
          title: "Design for real-world usage",
          description: "A feature is truly finished when it remains resilient under real user conditions.",
          example: "Handling patchy connectivity with SQLite local cache and a self-healing pending queue.",
        },
      ],
    },
    skills: {
      badge: "CAPABILITIES",
      title: "What I use to build dependable products.",
      description: "Focused on mobile applications, clean software structure, and reliable service integrations.",
      coreStrength: "Core Competency",
      productionReady: "Production Deployed",
    },
    contact: {
      statusBadge: "CONTACT",
      title: "Looking for a Mobile Engineer?",
      description: "Open to new opportunities and products tackling meaningful technical challenges.",
      terminalChannel: "trangndps10349@gmail.com",
      statusActive: "Available for new opportunities",
      emailLabel: "Email address",
      phoneLabel: "Phone number",
      locationLabel: "Location",
      locationValue: "Ho Chi Minh City, Vietnam",
      copyTooltip: "Copy email",
      copiedText: "Copied to clipboard",
      downloadTitle: "Official Resume (PDF)",
      downloadDesc: "Detailed 2-page ATS-optimized resume",
      downloadPdfBtn: "Download CV (PDF)",
      viewWebBtn: "Write to me",
    },
    footer: {
      roleDesc: "Mobile Engineer",
      rights: "Nguyen Duy Trang · Mobile Engineer",
      craftedWith: "Built with focus on product craft, engineering clarity, and attention to detail.",
      backToTop: "Back to top",
    },
  },
};
