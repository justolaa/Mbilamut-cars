import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  external = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-bold",
  };

  const variants = {
    primary: "bg-brand-500 hover:bg-brand-400 text-surface-black shadow-brand-glow hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-surface-card hover:bg-surface-border text-white border border-surface-border hover:border-brand-500/50",
    whatsapp: "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-brand-glow hover:scale-[1.02] active:scale-[0.98]",
    outline: "bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-brand-500",
    ghost: "bg-transparent hover:bg-white/5 text-surface-muted hover:text-white",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} {...props}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}