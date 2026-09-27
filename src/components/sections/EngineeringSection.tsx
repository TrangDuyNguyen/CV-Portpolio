import React from 'react';
import { Scissors, ShieldAlert, Cpu, GitCommit, Check } from 'lucide-react';
import { Badge } from '../common/Badge';

export const EngineeringSection: React.FC = () => {
  const principles = [
    {
      icon: <Scissors className="w-5 h-5 text-amber-600" />,
      title: "YAGNI First (Ruthless Simplicity)",
      description: "Có thực sự cần xây dựng tính năng này không? Không viết code phỏng đoán tương lai hay tạo ra các abstraction phức tạp không ai yêu cầu.",
      tag: "Rule #1",
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-600" />,
      title: "Native & Standard Libs Over Bloat",
      description: "Tận dụng tối đa sức mạnh native của iOS/Android và chuẩn hóa thư viện nền tảng trước khi kéo bất kỳ dependency bên ngoài nào.",
      tag: "Rule #2",
    },
    {
      icon: <GitCommit className="w-5 h-5 text-emerald-600" />,
      title: "Shortest Working Diff",
      description: "Một dòng giải quyết vấn đề tốt hơn 50 dòng phức tạp. Ưu tiên giải pháp tinh gọn, minh bạch, giảm thiểu diện tích bề mặt lỗi.",
      tag: "Rule #3",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-purple-600" />,
      title: "Zero-Tolerance Quality (8-Gate SOP)",
      description: "Không chấp nhận 'du di' chất lượng. 100% test pass thực chất (198/198 tests trong AstroBite), 0 memory leak và 60 FPS ổn định.",
      tag: "Rule #4",
    },
  ];

  return (
    <section id="engineering" className="py-24 border-t border-slate-300/70 bg-[#E8ECF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 reveal">
          <Badge variant="amber" size="md" className="mb-3">
            TRIẾT LÝ PHÁT TRIỂN PHẦN MỀM
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            Strict Ponytail Mindset & 8-Gate Quality
          </h2>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Tôi tiếp cận công việc lập trình với tinh thần tôn trọng sự tối giản, ghét bỏ sự phức tạp hóa không cần thiết (bloat) và bảo vệ chất lượng sản phẩm bằng hệ thống kiểm thử tự động nghiêm ngặt.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {principles.map((p, idx) => (
            <div
              key={p.title}
              className={`bg-[#E8ECF2] rounded-3xl p-6 shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] border border-white/80 transition-all duration-300 reveal stagger-${(idx % 2) + 1}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60">
                  {p.icon}
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-[#E8ECF2] text-slate-600 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] border border-white/60">
                  {p.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Quote Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#E8ECF2] shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] border border-white/90 flex flex-col md:flex-row items-center justify-between gap-6 reveal">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-800">
              "Boring code over clever code. Fewest files possible."
            </h4>
            <p className="text-xs text-slate-500">
              Mã nguồn tốt nhất là mã nguồn dễ hiểu, dễ sửa, chịu tải cao và không gây bất ngờ trong môi trường production.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-[#E8ECF2] text-emerald-700 shadow-[inset_2px_2px_5px_#c5d1e2,inset_-2px_-2px_5px_#ffffff] border border-emerald-300/60 text-xs font-mono flex items-center gap-2 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>198/198 Tests Passing</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#E8ECF2] text-sky-700 shadow-[inset_2px_2px_5px_#c5d1e2,inset_-2px_-2px_5px_#ffffff] border border-sky-300/60 text-xs font-mono font-semibold">
              0 Memory Leak
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
