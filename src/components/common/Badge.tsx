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
    cyan: 'bg-[#141C2E] text-[#FFF4DE] border border-[rgba(244,242,234,0.18)] shadow-[0_0_12px_rgba(255,100,23,0.12)]',
    emerald: 'bg-[#0D241C] text-[#34D399] border border-emerald-500/30',
    purple: 'bg-[#1E1736] text-[#C084FC] border border-purple-500/30',
    slate: 'bg-[#141C2E]/80 text-[#8E96A4] border border-[rgba(244,242,234,0.1)]',
    amber: 'bg-[#28180A] text-[#FFB648] border border-[#FF6417]/40 shadow-[0_0_12px_rgba(255,100,23,0.15)]',
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
