'use client';
import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const base = 'inline-flex items-center justify-center font-body font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2';
const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};
const variants = {
  primary: 'bg-brand text-white hover:bg-brand-hover disabled:bg-brand/50',
  secondary: 'bg-brand/10 text-brand hover:bg-brand/20 disabled:bg-brand/10',
  outline: 'border border-brand text-brand bg-transparent hover:bg-brand/5 disabled:border-brand/20',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        base,
        sizes[size],
        variants[variant],
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      ].join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 