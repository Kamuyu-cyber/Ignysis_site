import React from 'react';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`px-4 py-2 rounded border border-gray-700 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
      {...props}
    />
  )
);
Input.displayName = 'Input'; 