import React from 'react';

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`px-4 py-2 rounded font-semibold transition ${className}`}
      {...props}
    />
  )
);
Button.displayName = 'Button'; 