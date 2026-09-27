import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { profileData } from '../../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-300/70 bg-[#E8ECF2] text-slate-600 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-300/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-slate-800 text-lg">
                {profileData.name}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-lg bg-[#E8ECF2] text-slate-700 font-mono shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] border border-white/60">
                {profileData.roleTitle}
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Chuyên sâu Flutter, Native iOS/Android, Clean Architecture và ứng dụng Multimodal AI trong sản phẩm di động thực tế.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-sky-600 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="p-2 text-slate-600 hover:text-emerald-700 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-600 hover:text-sky-600 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all cursor-pointer ml-1"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Nguyen Duy Trang. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>via React 18, Vite & Classic Light Neumorphism</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
