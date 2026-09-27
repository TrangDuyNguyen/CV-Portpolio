import React from 'react';
import { Briefcase, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';
import { careerData } from '../../data/careerData';
import { Badge } from '../common/Badge';

export const CareerSection: React.FC = () => {
  return (
    <section id="career" className="py-24 border-t border-slate-300/70 bg-[#E8ECF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <Badge variant="cyan" size="md" className="mb-3">
            LỊCH SỬ KINH NGHIỆM
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            Commercial Track Record & Milestones
          </h2>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Hơn 5 năm đồng hành cùng các sản phẩm quy mô lớn, từ ứng dụng mạng xã hội triệu người dùng (1M+ downloads) đến hệ sinh thái Kiosk tự phục vụ bán lẻ và sản phẩm dinh dưỡng Vision AI thế hệ mới.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-0.5 before:bg-slate-300 before:-translate-x-1/2">
          {careerData.map((item, index) => (
            <div
              key={item.company}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 reveal stagger-${(index % 2) + 1} ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-7 w-7 h-7 rounded-full bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] border-2 border-sky-600 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-sky-600" />
              </div>

              {/* Card Container */}
              <div className="ml-10 md:ml-0 md:w-1/2">
                <div className="bg-[#E8ECF2] rounded-3xl p-6 sm:p-7 shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] border border-white/80 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <Badge variant="slate" size="sm">
                      {item.type}
                    </Badge>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold mb-3">
                    <Briefcase className="w-4 h-4 text-slate-500" />
                    <span>{item.company}</span>
                    {item.project && (
                      <span className="text-xs text-slate-500 font-normal">
                        • {item.project}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-5">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-300/60">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-[#E8ECF2] text-slate-700 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] border border-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Box */}
        <div className="mt-16 bg-[#E8ECF2] rounded-3xl p-6 sm:p-7 shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] border border-white/90 flex flex-col sm:flex-row items-center justify-between gap-6 reveal">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60 text-purple-600">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-700 block mb-0.5 font-semibold">
                NỀN TẢNG HỌC VẤN CHUYÊN NGÀNH
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-800">
                Cao Đẳng FPT Polytechnic — Lập trình máy tính & Phát triển phần mềm
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Bằng Cử nhân Thực hành CNTT • Tiếng Anh chuyên ngành (Working Proficiency)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
