import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const EditorialStatement: React.FC = () => {
  const { language } = useLanguage();

  const isVi = language === 'vi';

  return (
    <section id="manifesto" className="py-24 md:py-32 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Editorial Lead */}
        <div className="max-w-4xl mb-16 md:mb-24 reveal">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-4">
            {isVi ? '// Triết Lý Kỹ Thuật' : '// Engineering Philosophy'}
          </p>

          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#F4F2EA] leading-[1.12] tracking-tight">
            {isVi ? (
              <>
                Một kỹ sư, trọn vẹn từ{' '}
                <span className="text-[#FF6417] not-italic">kiến trúc lõi</span> đến{' '}
                <span className="text-[#FFB648]">trải nghiệm người dùng</span>.
              </>
            ) : (
              <>
                One engineer, complete from{' '}
                <span className="text-[#FF6417] not-italic">core architecture</span> to{' '}
                <span className="text-[#FFB648]">fluid user experience</span>.
              </>
            )}
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#8E96A4] font-light leading-relaxed max-w-3xl" data-cursor="lens">
            {isVi ? (
              <>
                Tôi thiết kế <span className="thermal-word text-[#F4F2EA]">Clean Architecture</span>, kết nối trực tiếp với{' '}
                <span className="thermal-word text-[#F4F2EA]">phần cứng Native</span>, và tối ưu từng khung hình{' '}
                <span className="thermal-word text-[#FFB648]">60 FPS</span> — để không một giá trị kỹ thuật nào bị thất thoát giữa bản vẽ kiến trúc và sản phẩm thực tế trên tay người dùng.
              </>
            ) : (
              <>
                I design <span className="thermal-word text-[#F4F2EA]">Clean Architecture</span>, bridge directly to{' '}
                <span className="thermal-word text-[#F4F2EA]">native hardware</span>, and optimize every frame to{' '}
                <span className="thermal-word text-[#FFB648]">60 FPS</span> — so nothing gets lost between architectural blueprints and the product in the user's hands.
              </>
            )}
          </p>
        </div>

        {/* 3 Bespoke Editorial Columns (No heavy cards, clean typographic separation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-8 border-t border-[rgba(244,242,234,0.08)] reveal">
          
          {/* Column 1: Architecture */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-[#FFB648]">
              01 / {isVi ? 'KIẾN TRÚC' : 'ARCHITECTURE'}
            </div>
            <h3 className="text-xl font-medium text-[#F4F2EA]">
              {isVi ? 'Clean Domain & Quản Lý State' : 'Clean Domain & Predictable State'}
            </h3>
            <p className="text-sm text-[#8E96A4] leading-relaxed">
              {isVi
                ? 'Tách biệt rành mạch Data Source, Repository và Presentation qua BLoC hoặc Riverpod. Dữ liệu ngoại tuyến được đảm bảo bởi SQLite local cache và hàng đợi đồng bộ tự phục hồi.'
                : 'Decoupling Data Sources, Repositories, and Presentation with BLoC and Riverpod. Offline resilience guaranteed by SQLite local caching and self-healing sync queues.'}
            </p>
          </div>

          {/* Column 2: Platform Bridges */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-[#FFB648]">
              02 / {isVi ? 'NATIVE BRIDGES' : 'NATIVE BRIDGES'}
            </div>
            <h3 className="text-xl font-medium text-[#F4F2EA]">
              {isVi ? 'Phần Cứng & Tích Hợp Nền Tảng' : 'Hardware & Native Integration'}
            </h3>
            <p className="text-sm text-[#8E96A4] leading-relaxed">
              {isVi
                ? 'Không dừng lại ở Flutter thuần: trực tiếp viết Kotlin và Swift Platform Channels để điều khiển máy in nhiệt ESC/POS, máy quét mã vạch POS, WebSocket realtime và CallKit iOS.'
                : 'Not bounded by pure Flutter: authoring Kotlin and Swift Platform Channels to command ESC/POS thermal printers, POS barcode scanners, real-time WebSockets, and iOS CallKit.'}
            </p>
          </div>

          {/* Column 3: Craft & Reliability */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-[#FFB648]">
              03 / {isVi ? 'HIỆU NĂNG' : 'PERFORMANCE'}
            </div>
            <h3 className="text-xl font-medium text-[#F4F2EA]">
              {isVi ? '60 FPS, Bộ Nhớ & Release CI/CD' : '60 FPS, Memory & Release CI/CD'}
            </h3>
            <p className="text-sm text-[#8E96A4] leading-relaxed">
              {isVi
                ? 'Kiểm soát chặt chẽ vòng đời Widget, triệt tiêu rò rỉ bộ nhớ (0 memory leak), đo đạc giật lag bằng DevTools Profiler và tự động hóa quy trình phân phối ứng dụng qua Fastlane.'
                : 'Strict Widget lifecycle auditing, zero memory leaks, frame-jank profiling via DevTools, and automated App Store and Play Store releases driven by Fastlane CI/CD.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

