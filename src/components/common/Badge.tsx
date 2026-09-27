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
    cyan: 'bg-[#E8ECF2] dark:bg-[#0D1829] text-sky-700 dark:text-sky-300 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#182a44] border border-sky-300/70 dark:border-sky-700/60',
    emerald: 'bg-[#E8ECF2] dark:bg-[#091C17] text-emerald-700 dark:text-emerald-300 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#143026] border border-emerald-300/70 dark:border-emerald-700/60',
    purple: 'bg-[#E8ECF2] dark:bg-[#1A1229] text-purple-700 dark:text-purple-300 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#2c1f44] border border-purple-300/70 dark:border-purple-700/60',
    slate: 'bg-[#E8ECF2] dark:bg-[#151F32] text-slate-700 dark:text-slate-300 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1E2D44] border border-slate-300/70 dark:border-slate-700/60',
    amber: 'bg-[#E8ECF2] dark:bg-[#21170A] text-amber-700 dark:text-amber-300 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#382810] border border-amber-300/70 dark:border-amber-700/60',
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
