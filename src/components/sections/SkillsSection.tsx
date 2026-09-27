import React from 'react';
import { Smartphone, Layers, Cloud, Wrench, Star } from 'lucide-react';
import { skillsData } from '../../data/skillsData';
import { Badge } from '../common/Badge';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Mobile')) {
      return <Smartphone className="w-5 h-5 text-sky-600" />;
    }
    if (category.includes('Architecture')) {
      return <Layers className="w-5 h-5 text-emerald-600" />;
    }
    if (category.includes('AI')) {
      return <Cloud className="w-5 h-5 text-purple-600" />;
    }
    return <Wrench className="w-5 h-5 text-amber-600" />;
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-300/70 bg-[#E8ECF2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 reveal">
          <Badge variant="cyan" size="md" className="mb-3">
            NĂNG LỰC CÔNG NGHỆ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            Technical Skills & Architecture Matrix
          </h2>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Hệ sinh thái kỹ năng tích lũy qua hơn 5 năm thực chiến, phân định rõ ràng giữa các kỹ năng lõi (Core Specialty) và khả năng tích hợp công nghệ chuyên sâu.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((group, idx) => (
            <div
              key={group.category}
              className={`bg-[#E8ECF2] rounded-3xl p-6 sm:p-7 shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] border border-white/80 transition-all duration-300 flex flex-col justify-between reveal stagger-${(idx % 2) + 1}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-2xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] border border-white/60">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-5">
                  {group.description}
                </p>

                {/* Skills Tag Cloud - Tactile Neumorphic Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.skills.map((s) => (
                    <div
                      key={s.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all ${
                        s.isKey
                          ? 'bg-[#E8ECF2] text-sky-800 font-semibold shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] border border-sky-300/70'
                          : 'bg-[#E8ECF2] text-slate-700 shadow-[2px_2px_5px_#c5d1e2,-2px_-2px_5px_#ffffff] hover:shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-white/70'
                      }`}
                    >
                      {s.isKey && <Star className="w-3 h-3 text-sky-600 fill-sky-600" />}
                      <span>{s.name}</span>
                      <span className="text-[10px] text-slate-500 font-sans ml-1">
                        ({s.level})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-300/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-medium text-sky-700">
                  <Star className="w-3 h-3 text-sky-600 fill-sky-600" /> Điểm mạnh trọng tâm
                </span>
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
