import React from 'react';

const Button = ({ href = "#", children, icon, variant = 'primary' }) => {
  const baseClasses = "inline-flex items-center gap-2 py-2.5 px-6 rounded-lg font-semibold no-underline transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-white text-primary hover:bg-gray-100",
    accent: "bg-accent text-white hover:bg-accent-dark"
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {icon}
      {children}
    </a>
  );
};

export default Button;