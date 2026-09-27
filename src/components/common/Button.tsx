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
    primary: 'bg-[#E8ECF2] text-slate-800 hover:text-sky-700 shadow-[5px_5px_10px_#c2cee0,-5px_-5px_10px_#ffffff] hover:shadow-[7px_7px_14px_#bed0e2,-7px_-7px_14px_#ffffff] active:shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] border border-white/90 font-semibold',
    secondary: 'bg-[#E8ECF2] text-slate-700 hover:text-slate-900 shadow-[4px_4px_8px_#c5d1e2,-4px_-4px_8px_#ffffff] active:shadow-[inset_3px_3px_6px_#c2cee0,inset_-3px_-3px_6px_#ffffff] border border-white/70',
    outline: 'bg-[#E8ECF2] text-slate-700 hover:text-sky-600 shadow-[3px_3px_6px_#c5d1e2,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_5px_#c2cee0,inset_-2px_-2px_5px_#ffffff] border border-slate-300/60',
    ghost: 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-[#E8ECF2]/60 hover:shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff]',
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
