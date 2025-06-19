'use client';
import React from 'react';

export type InputProps = {
  label?: string;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  type?: string;
  name?: string;
};

export function Input({
  label,
  error,
  placeholder,
  disabled = false,
  value,
  onChange,
  className = '',
  type = 'text',
  name,
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-on-surface" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={[
          'block w-full rounded-md border border-neutral-300 bg-surface px-3 py-2 text-on-surface placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition',
          disabled ? 'opacity-50 cursor-not-allowed' : '',
          error ? 'border-red-500' : '',
          className,
        ].join(' ')}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
} 