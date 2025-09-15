import React from 'react';
import PhoneIcon from './PhoneIcon';
import MailIcon from './MailIcon';
import LocationIcon from './LocationIcon';

/**
 * Social media link wrapper with enhanced styling.
 */
const SocialIcon = ({ href, title, children }) => (
  <a
    href={href}
    aria-label={title}
    className="text-gray-400 hover:text-primary transform hover:scale-110 transition-all duration-300"
  >
    <span className="sr-only">{title}</span>
    {children}
  </a>
);

const FacebookIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <title>Facebook</title>
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

// A more distinct placeholder icon for Zalo
const ZaloIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <title>Zalo</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v.01M12 6.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5-2.462-5.5-5.5-5.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
);


const Footer = () => {
  const navLinks = [
    { href: '#hero', text: 'Trang chủ' },
    { href: '#services', text: 'Dịch vụ' },
    { href: '#testimonials', text: 'Đánh giá' },
  ];

  const contactInfo = [
    { icon: <PhoneIcon />, text: 'Hotline: 0345.421.303', href: 'tel:0345421303' },
    { icon: <MailIcon />, text: 'bancuuongdi@gmail.com', href: 'mailto:bancuuongdi@gmail.com' },
    { icon: <LocationIcon />, text: 'Hải Châu, Đà Nẵng', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div className="lg:col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white">Bạn Cứ Uống, Tôi Lái</h3>
            <p className="text-gray-400">
              Dịch vụ lái xe hộ chuyên nghiệp, an toàn và đáng tin cậy. Chúng tôi luôn sẵn sàng phục vụ bạn 24/7 tại Đà Nẵng.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Liên kết</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-300">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Liên hệ</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center justify-center md:justify-start">
                  <div className="flex-shrink-0 text-primary">{item.icon}</div>
                  <a href={item.href} className="hover:text-primary transition-colors duration-300 ml-3">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action & Social */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Gọi ngay!</h3>
            <a
              href="tel:0345421303"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              0123.456.789
            </a>
            <div className="pt-4">
              <h4 className="text-md font-semibold text-white mb-3">Kết nối với chúng tôi</h4>
              <div className="flex justify-center md:justify-start space-x-5">
                <SocialIcon href="#" title="Facebook">
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon href="#" title="Zalo">
                  <ZaloIcon />
                </SocialIcon>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-gray-900/50 border-t border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Bạn Cứ Uống, Tôi Lái. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;