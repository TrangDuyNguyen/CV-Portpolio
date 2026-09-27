import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = '4xl',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClass = {
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
  }[maxWidth];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full ${maxWidthClass} bg-[#E8ECF2] dark:bg-[#151F32] border border-white/90 dark:border-slate-700/80 rounded-3xl shadow-[16px_16px_36px_#b0bfd0,-16px_-16px_36px_#ffffff] dark:shadow-[16px_16px_36px_#04060d,-16px_-16px_36px_#1E2D44] overflow-hidden z-10 max-h-[90vh] flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-300/60 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#151F32]">
          <h2 className="text-base font-semibold text-slate-800 dark:text-white truncate pr-4">
            {title || ''}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1A283E] border border-white/80 dark:border-slate-700 transition-all cursor-pointer"
            aria-label="Đóng hộp thoại"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-6 text-slate-700 dark:text-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
};
