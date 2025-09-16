import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import PhoneIcon from './PhoneIcon';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import logo from '../assets/logo.png';

const NavLink = ({ href, text, isActive, onClick, isScrolled }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isScrolled
        ? isActive
          ? 'text-primary bg-white'
          : 'text-gray-200 hover:text-white'
        : isActive
          ? 'text-white bg-primary'
          : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
    }`}
  >
    {text}
  </a>
);

const Logo = ({ onClick, isScrolled }) => (
    <a href="#hero" className={`${isScrolled ? 'flex items-center gap-3 group bg-gray-900' : 'flex items-center gap-3 group'}`} onClick={onClick}>
        <img src={logo} alt="Bạn Cứ Uống, Tôi Lái" className="h-12" />
        <span>Bạn cứ uống, tôi lái</span>
    </a>
);

export const Header = ({ onBookNowClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  const navLinks = [
    { href: '#hero', text: 'Trang chủ' },
    { href: '#services', text: 'Dịch vụ' },
    { href: '#testimonials', text: 'Đánh giá' },
    { href: '#contact', text: 'Liên hệ' },
  ];

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (href !== '#hero') {
      setIsScrolled(true);
    } else {
      if (window.scrollY <= 100) {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state based on scroll position
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        // Only change back to transparent if we are not on a sub-page
        if (activeLink === '#hero') {
          setIsScrolled(false);
        }
      }

      // Update active link based on scroll position
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + (headerRef.current?.offsetHeight || 0) + 50;
      let currentSection = '';
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          currentSection = `#${section.id}`;
          break;
        }
      }
      // If no section is active, and we are at the top, set hero as active
      if (!currentSection && window.scrollY < 200) {
        currentSection = '#hero';
      }
      if(currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink, navLinks]); // Rerun effect when activeLink changes to ensure consistency

  return (
    <header 
      ref={headerRef} 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 text-gray-300' 
          : 'bg-gray-900 text-gray-300'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-6">
        <Logo onClick={() => handleLinkClick('#hero')} isScrolled={isScrolled} />

        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink 
              key={link.text} 
              {...link} 
              isActive={activeLink === link.href} 
              onClick={() => handleLinkClick(link.href)}
              isScrolled={isScrolled}
            />
          ))}
        </nav>

        <div className="hidden lg:block ml-4">
          <Button href="#!" icon={<PhoneIcon />} variant="primary" onClick={onBookNowClick}>
            Đặt xe ngay
          </Button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            className={`p-2 rounded-md hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-primary'
            }`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={isScrolled ? 'bg-primary' : 'bg-white'}>
            <nav className="px-2 pt-2 pb-4 border-t border-gray-200/50">
            <ul className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                <li key={link.text}>
                    <a
                    href={link.href}
                    onClick={() => {
                        closeMenu();
                        handleLinkClick(link.href);
                    }}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                        isScrolled
                        ? activeLink === link.href
                            ? 'text-primary bg-white'
                            : 'text-gray-200 hover:text-white'
                        : activeLink === link.href
                            ? 'text-white bg-primary'
                            : 'text-gray-700 hover:bg-primary/10'
                    }`}
                    >
                    {link.text}
                    </a>
                </li>
                ))}
                <li className="pt-4 px-4">
                <Button
                    href="#!"
                    icon={<PhoneIcon />}
                    variant="accent"
                    onClick={() => {
                        closeMenu();
                        onBookNowClick();
                    }}
                    fullWidth
                >
                    Đặt xe ngay
                </Button>
                </li>
            </ul>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;