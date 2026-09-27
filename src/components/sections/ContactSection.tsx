import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Download, Github, Linkedin, ExternalLink, FileText } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-300/70 bg-[#E8ECF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <Badge variant="emerald" size="md" className="mb-3">
              {profileData.status}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
              Kết Nối & Trao Đổi Cơ Hội Nghề Nghiệp
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tôi luôn cởi mở đón nhận các cơ hội vị trí <strong>Mobile Engineer (Mid-Level)</strong>, tham gia xây dựng các sản phẩm di động hiệu năng cao và giải quyết các bài toán công nghệ thách thức.
            </p>
          </div>

          {/* Minimalist Neumorphic Contact Console */}
          <div className="bg-[#E8ECF2] rounded-3xl p-6 sm:p-10 shadow-[10px_10px_22px_#c0cdda,-10px_-10px_22px_#ffffff] border border-white/90 relative overflow-hidden reveal">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-300/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                <span className="text-xs font-mono text-slate-500 ml-2">
                  contact-channel // mobile-engineer
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-700 flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active & Responsive
              </span>
            </div>

            {/* Contact Rows - Inset Sunken Cavities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] text-sky-600 border border-white/80">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Email Address</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-[#E8ECF2] shadow-[2px_2px_5px_#c5d1e2,-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/70 transition-all cursor-pointer"
                  title="Sao chép email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] text-emerald-600 border border-white/80">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Hotline / Zalo</span>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-[#E8ECF2] text-slate-600 shadow-[inset_1px_1px_2px_#c5d1e2,inset_-1px_-1px_2px_#ffffff]">
                  VN (+84)
                </span>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] text-purple-600 border border-white/80">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-mono">Location & YOB</span>
                  <span className="text-sm font-bold text-slate-800">
                    {profileData.location} • Sinh năm {profileData.birthYear}
                  </span>
                </div>
              </div>

              {/* Profiles */}
              <div className="p-4 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60 flex items-center justify-around">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-600" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <div className="w-px h-6 bg-slate-300" />
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Bottom Download CV Action */}
            <div className="pt-6 border-t border-slate-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-800">
                  Tải Hồ Sơ Năng Lực (CV PDF)
                </h4>
                <p className="text-xs text-slate-500">
                  Bản cập nhật mới nhất đầy đủ kinh nghiệm và dự án thực chiến.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asLink
                  href={profileData.cvPdfUrl}
                  download="Mobile_Engineer_Nguyen_Duy_Trang.pdf"
                  variant="primary"
                  size="md"
                  icon={<Download className="w-4 h-4 text-sky-600" />}
                >
                  Tải CV (PDF 2 Trang Chuẩn)
                </Button>

                <Button
                  asLink
                  href={profileData.cvViewUrl}
                  target="_blank"
                  variant="outline"
                  size="md"
                  icon={<FileText className="w-4 h-4 text-slate-600" />}
                >
                  Xem Bản In Web A4
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
