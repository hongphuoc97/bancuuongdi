/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import PhoneIcon from './icon/web/PhoneIcon';
import MenuIcon from './icon/web/MenuIcon';
import CloseIcon from './icon/web/CloseIcon';
import logo from '../assets/logoghep.png';

const NavLink = ({ href, text, isActive, onClick, isScrolled }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isScrolled
        ? isActive
          ? 'text-black bg-white'
          : 'text-gray-200 hover:text-white'
        : isActive
          ? 'text-white bg-primary'
          : 'text-white hover:bg-primary/10 hover:text-primary'
    }`}
  >
    {text}
  </a>
);

const Logo = ({ onClick, cssClass }) => (
    <a href="#hero" className={cssClass} onClick={onClick}>
        <img src={logo} alt="Bạn Cứ Uống, Tôi Lái" className="h-12" />
        <span>Xe ghép xe tiện chuyến Đà Nẵng</span>
    </a>
);

export const Header = ({ onBookNowClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoStyle, setLogoStyle] = useState('text-white flex items-center gap-3 group');
  const [navItemStyle, setNavItemStyle] = useState('sticky top-0 z-50 transition-all duration-300 bg-gray-900 text-gray-300');
  const headerRef = useRef(null);

  const navLinks = [
    { href: '#hero', text: 'Trang chủ' },
    { href: '#services', text: 'Dịch vụ' },
    { href: '#news', text: 'Tin tức' },
    { href: '#testimonials', text: 'Đánh giá' },
    { href: '#contact', text: 'Liên hệ' },
  ];

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    closeMenu(); // Đóng menu mobile khi click vào link
    
    // Scroll to section
    if (href === '#hero') {
      // Scroll to top for hero
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsScrolled(false);
    } else {
      // Scroll to other sections
      const sectionId = href.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = headerRef.current?.offsetHeight || 80;
        const elementPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        setIsScrolled(true);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state based on scroll position
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        // Only change back to transparent if we are at the top
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
  }, [activeLink, navLinks]);

  return (
    <header 
      ref={headerRef} 
      className={navItemStyle}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3 md:p-4 lg:px-6 md:py-4">
        <Logo 
          onClick={() => handleLinkClick('#hero')} 
          cssClass="text-white flex items-center gap-2 md:gap-3 group text-sm md:text-base cursor-pointer" 
        />

        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink 
              key={link.text} 
              {...link} 
              isActive={activeLink === link.href} 
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              isScrolled={isScrolled}
            />
          ))}
        </nav>

        <div className="hidden lg:block ml-4">
          <Button href="tel:0345421303" icon={<PhoneIcon />} variant="primary">
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

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`${isScrolled ? 'bg-primary' : 'bg-gray-800'} px-4 py-4`}>
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                  isScrolled
                    ? activeLink === link.href
                      ? 'text-primary bg-white'
                      : 'text-gray-200 hover:text-white'
                    : activeLink === link.href
                      ? 'text-white bg-primary'
                      : 'text-gray-100 hover:bg-primary/20'
                }`}
              >
                {link.text}
              </a>
            ))}
            <div className="pt-3 px-4">
              {/* <Button
                href="tel:0345421303"
                icon={<PhoneIcon />}
                variant="accent"
                fullWidth={true}
              >
                Đặt xe ngay
              </Button> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;