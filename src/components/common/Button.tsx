import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  asLink = false,
  href,
  download,
  target,
  rel,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-[#E8ECF2] dark:bg-[#151F32] text-slate-800 dark:text-slate-100 hover:text-sky-700 dark:hover:text-sky-400 shadow-[5px_5px_10px_#c2cee0,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#050811,-5px_-5px_10px_#1E2D44] hover:shadow-[7px_7px_14px_#bed0e2,-7px_-7px_14px_#ffffff] dark:hover:shadow-[7px_7px_14px_#04060d,-7px_-7px_14px_#22344f] active:shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] dark:active:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/90 dark:border-slate-700/80 font-semibold',
    secondary:
      'bg-[#E8ECF2] dark:bg-[#151F32] text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white shadow-[4px_4px_8px_#c5d1e2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#050811,-4px_-4px_8px_#1E2D44] active:shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] dark:active:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/70 dark:border-slate-700/60',
    outline:
      'bg-[#E8ECF2] dark:bg-[#151F32] text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 shadow-[3px_3px_6px_#c5d1e2,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_5px_#c2cee0,inset_-2px_-2px_5px_#ffffff] dark:active:shadow-[inset_2px_2px_5px_#050811,inset_-2px_-2px_5px_#1A283E] border border-slate-300/60 dark:border-slate-700/70',
    ghost:
      'bg-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-[#E8ECF2]/60 dark:hover:bg-[#151F32]/60 hover:shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:hover:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1A283E]',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
    </>
  );

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asLink && href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
