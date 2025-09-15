import React from 'react';
import Button from './Button';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.024 10.024 0 006.963 6.963l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const Header = () => {
  const navLinks = [
    { href: "#hero", text: "Trang chủ" },
    { href: "#services", text: "Dịch vụ" },
    { href: "#testimonials", text: "Đánh giá" },
    { href: "#contact", text: "Liên hệ" },
  ];

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-light border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="text-2xl md:text-3xl font-bold text-primary">
        <a href="#">Bạn Cứ Uống, Tôi Lái</a>
      </div>
      <nav className="hidden lg:flex items-center">
        {navLinks.map((link) => (
          <a key={link.text} href={link.href} className="mx-4 text-gray-600 font-medium hover:text-primary transition-colors duration-300">
            {link.text}
          </a>
        ))}
      </nav>
      <div className="hidden lg:block">
        <Button href="#contact" icon={<PhoneIcon />}>Đặt xe ngay</Button>
      </div>
    </header>
  );
};

export default Header;