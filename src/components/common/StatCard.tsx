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
      data-cursor="pointer"
      className="bg-[#0E131F]/90 rounded-2xl p-5 border border-[rgba(244,242,234,0.08)] hover:border-[#FF6417]/50 hover:shadow-[0_0_24px_rgba(255,100,23,0.15)] transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F4F2EA] group-hover:text-[#FFB648] transition-colors font-mono">
            {stat.value}
          </span>
          <div className="p-2.5 rounded-xl bg-[#141C2E] border border-[rgba(244,242,234,0.1)] text-[#FFB648] group-hover:scale-110 transition-transform duration-300">
            <MorphIcon icon={hovered ? config.iconB : config.iconA} size={20} strokeWidth={2} />
          </div>
        </div>
        <h3 className="text-sm font-semibold text-[#F4F2EA] mb-1 group-hover:text-[#FFF4DE] transition-colors">
          {stat.label}
        </h3>
      </div>
      <p className="text-xs text-[#8E96A4] leading-relaxed mt-2.5">
        {stat.desc}
      </p>
    </div>
  );
};
