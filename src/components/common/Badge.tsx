import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'purple' | 'slate' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-[#E8ECF2] text-sky-700 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-sky-300/70',
    emerald: 'bg-[#E8ECF2] text-emerald-700 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-emerald-300/70',
    purple: 'bg-[#E8ECF2] text-purple-700 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-purple-300/70',
    slate: 'bg-[#E8ECF2] text-slate-700 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-slate-300/70',
    amber: 'bg-[#E8ECF2] text-amber-700 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-amber-300/70',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
