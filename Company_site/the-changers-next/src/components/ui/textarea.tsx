import React from 'react';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`px-4 py-2 rounded border border-gray-700 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea'; 