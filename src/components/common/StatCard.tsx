import React from 'react';
import { Download, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { StatItem } from '../../types';

interface StatCardProps {
  stat: StatItem;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const renderIcon = () => {
    switch (stat.iconName) {
      case 'download':
        return <Download className="w-5 h-5 text-sky-600" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'check-circle':
        return <CheckCircle2 className="w-5 h-5 text-purple-600" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      default:
        return <Zap className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <div className="bg-[#E8ECF2] rounded-2xl p-5 shadow-[6px_6px_14px_#c2cee0,-6px_-6px_14px_#ffffff] hover:shadow-[9px_9px_18px_#bed0e2,-9px_-9px_18px_#ffffff] transition-all duration-300 group border border-white/80">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800 group-hover:text-sky-600 transition-colors font-mono">
          {stat.value}
        </span>
        <div className="p-2.5 rounded-xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] border border-white/60">
          {renderIcon()}
        </div>
      </div>
      <h3 className="text-sm font-semibold text-slate-700 mb-1">
        {stat.label}
      </h3>
      <p className="text-xs text-slate-500 leading-relaxed">
        {stat.desc}
      </p>
    </div>
  );
};
