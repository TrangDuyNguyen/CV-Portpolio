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
      'bg-[#F4F2EA] text-[#08090A] hover:bg-[#FFF4DE] hover:shadow-[0_0_20px_rgba(255,182,72,0.35)] font-semibold border border-transparent',
    secondary:
      'bg-[#141C2E] text-[#F4F2EA] hover:border-[#FF6417] border border-[rgba(244,242,234,0.12)]',
    outline:
      'bg-transparent text-[#F4F2EA] hover:text-[#FF6417] border border-[rgba(244,242,234,0.15)] hover:border-[#FF6417]',
    ghost:
      'bg-transparent text-[#8E96A4] hover:text-[#F4F2EA] hover:bg-[#141C2E]/50',
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
