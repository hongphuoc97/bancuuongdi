import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import PhoneIcon from './PhoneIcon';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

const NavLink = ({ href, text, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-white bg-primary'
        : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
    }`}
  >
    {text}
  </a>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const headerRef = useRef(null);

  const navLinks = [
    { href: '#hero', text: 'Trang chủ' },
    { href: '#services', text: 'Dịch vụ' },
    { href: '#testimonials', text: 'Đánh giá' },
    { href: '#contact', text: 'Liên hệ' },
  ];

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + (headerRef.current?.offsetHeight || 0) + 50;

      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header 
      ref={headerRef} 
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200/80 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-6">
        <div className="text-2xl font-bold text-primary">
          <a href="#hero" onClick={() => setActiveLink('#hero')}>Bạn Cứ Uống, Tôi Lái</a>
        </div>

        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink 
              key={link.text} 
              {...link} 
              isActive={activeLink === link.href} 
              onClick={() => setActiveLink(link.href)}
            />
          ))}
        </nav>

        <div className="hidden lg:block ml-4">
          <Button href="#contact" icon={<PhoneIcon />} variant="accent">
            Đặt xe ngay
          </Button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            className="p-2 rounded-md text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="px-2 pt-2 pb-4 border-t border-gray-200">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  onClick={() => {
                    closeMenu();
                    setActiveLink(link.href);
                  }}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeLink === link.href
                      ? 'text-white bg-primary'
                      : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {link.text}
                </a>
              </li>
            ))}
            <li className="pt-4 px-4">
              <Button
                href="#contact"
                icon={<PhoneIcon />}
                variant="accent"
                onClick={closeMenu}
                fullWidth
              >
                Đặt xe ngay
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;