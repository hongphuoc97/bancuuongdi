import React from 'react';

const Button = ({ href = "#", children, icon }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-primary text-white py-2.5 px-6 rounded-lg font-semibold no-underline hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
    >
      {icon}
      {children}
    </a>
  );
};

export default Button;