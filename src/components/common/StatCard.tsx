import React, { useState } from 'react';
import { MorphIcon } from 'morphicons/react';
import { Download, Users, Zap, Clock, Boxes, CheckCircle2, Bot, Sparkles, Shield, ShieldCheck } from 'lucide';
import { StatItem } from '../../types';

interface StatCardProps {
  stat: StatItem;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const [hovered, setHovered] = useState(false);

  const getIconConfig = () => {
    switch (stat.iconName) {
      case 'download':
        return {
          iconA: Download,
          iconB: Users,
          textColor: 'text-sky-600',
        };
      case 'shield':
        return {
          iconA: Shield,
          iconB: ShieldCheck,
          textColor: 'text-emerald-600',
        };
      case 'zap':
        return {
          iconA: Zap,
          iconB: Clock,
          textColor: 'text-amber-600',
        };
      case 'check-circle':
        return {
          iconA: CheckCircle2,
          iconB: Sparkles,
          textColor: 'text-purple-600',
        };
      case 'boxes':
        return {
          iconA: Boxes,
          iconB: CheckCircle2,
          textColor: 'text-emerald-600',
        };
      case 'bot':
        return {
          iconA: Bot,
          iconB: Sparkles,
          textColor: 'text-indigo-600',
        };
      default:
        return {
          iconA: Zap,
          iconB: Sparkles,
          textColor: 'text-sky-600',
        };
    }
  };

  const config = getIconConfig();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#E8ECF2] dark:bg-[#151F32] rounded-2xl p-5 shadow-[6px_6px_14px_#c2cee0,-6px_-6px_14px_#ffffff] dark:shadow-[6px_6px_14px_#050811,-6px_-6px_14px_#1E2D44] hover:shadow-[9px_9px_18px_#bed0e2,-9px_-9px_18px_#ffffff] dark:hover:shadow-[9px_9px_18px_#04060d,-9px_-9px_18px_#22344f] transition-all duration-300 group border border-white/80 dark:border-slate-800 cursor-pointer h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors font-mono">
            {stat.value}
          </span>
          <div className={`p-2.5 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 ${config.textColor} group-hover:scale-110 transition-transform duration-300`}>
            <MorphIcon icon={hovered ? config.iconB : config.iconA} size={20} strokeWidth={2} />
          </div>
        </div>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
          {stat.label}
        </h3>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
        {stat.desc}
      </p>
    </div>
  );
};
