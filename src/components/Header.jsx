import React from 'react';
import Button from './Button';
import PhoneIcon from './PhoneIcon';

const Header = () => {
  const navLinks = [
    { href: "#hero", text: "Trang chủ" },
    { href: "#services", text: "Dịch vụ" },
    { href: "#testimonials", text: "Đánh giá" },
    { href: "#contact", text: "Liên hệ" },
  ];
  
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="text-2xl md:text-3xl font-bold text-primary">
        <a href="#">Bạn Cứ Uống, Tôi Lái</a>
      </div>
      <nav className="hidden lg:flex items-center">
        {navLinks.map((link) => (
          <a key={link.text} href={link.href} className="mx-4 font-medium text-gray-600 hover:text-primary transition-colors duration-300">
            {link.text}
          </a>
        ))}
      </nav>
      <div className="hidden lg:block">
        <Button href="#contact" icon={<PhoneIcon />} variant="accent">Đặt xe ngay</Button>
      </div>
    </header>
  );
};

export default Header;