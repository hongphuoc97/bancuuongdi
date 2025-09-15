import React from 'react';

/**
 * A reusable button component that supports three variants (primary,
 * secondary and accent) and accepts an optional icon. Additional
 * props are forwarded to the underlying anchor element so that callers
 * can attach onClick handlers or other attributes.
 */
const Button = ({ href = '#', children, icon, variant = 'primary', ...rest }) => {
  // Base styling shared across all button variants
  const baseClasses =
    'inline-flex items-center gap-2 py-2.5 px-6 rounded-lg font-semibold no-underline transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5';
  // Define the colour palette for each variant
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-white text-primary hover:bg-gray-100 hover:text-dark',
    accent: 'bg-accent text-dark hover:bg-accent-dark',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black py-2 px-4',
  };
  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`} {...rest}>
      {icon}
      {children}
    </a>
  );
};

export default Button;