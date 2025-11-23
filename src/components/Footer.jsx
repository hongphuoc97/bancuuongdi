import React from 'react';
import PhoneIcon from './icon/web/PhoneIcon';
import MailIcon from './icon/web/MailIcon';
import LocationIcon from './icon/web/LocationIcon';

/**
 * Social media link wrapper with enhanced styling.
 */
const SocialIcon = ({ href, title, children }) => (
  <a
    href={href}
    aria-label={title}
    target='_blank'
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

// Zalo icon with Zalo text
const ZaloIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <title>Zalo</title>
        <rect x="1" y="1" width="22" height="22" rx="3" fill="#0084FF"/>
        <text x="12" y="17" fontSize="9" fontWeight="900" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif" letterSpacing="-0.5">Zalo</text>
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

  const services = [
    'Lái xe hộ tự lái',
    'Lái xe sự kiện',
    'Lái xe công tác',
    'Dịch vụ 24/7',
  ];

  const benefits = [
    'Tài xế chuyên nghiệp',
    'Giá cạnh tranh',
    'An toàn tuyệt đối',
    'Phục vụ nhanh chóng',
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          
          {/* About Section */}
          <div className="lg:col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white">Bạn Cứ Uống, Tôi Lái</h3>
            <p className="text-gray-400 text-sm">
              Dịch vụ lái xe hộ chuyên nghiệp, an toàn và đáng tin cậy. Chúng tôi luôn sẵn sàng phục vụ bạn 24/7 tại Đà Nẵng.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-xs text-gray-500">Giờ hoạt động:</p>
              <p className="text-sm text-gray-300">Mở cửa 24/7</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Dịch vụ</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-400 hover:text-primary transition-colors">
                  ✓ {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider text-white uppercase">Liên kết</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-sm hover:text-primary transition-colors duration-300">
                    → {link.text}
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
                <li key={item.text} className="flex items-start">
                  <div className="flex-shrink-0 text-primary mr-3 mt-1">{item.icon}</div>
                  <a href={item.href} className="text-sm hover:text-primary transition-colors duration-300">
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
              className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300 shadow-lg w-full text-center"
            >
              0345421303
            </a>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Theo dõi chúng tôi</h4>
              <div className="flex space-x-4">
                <SocialIcon href="https://www.facebook.com/people/Xe-gh%C3%A9p-xe-ti%E1%BB%87n-chuy%E1%BA%BFn-%C4%90%C3%A0-N%E1%BA%B5ng/61554510803672/" title="Facebook" target="_blank">
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon href="https://zalo.me/0905761912" title="Zalo">
                  <ZaloIcon />
                </SocialIcon>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-700">
              <p className="text-xs text-gray-500">Đánh giá: ⭐⭐⭐⭐⭐ (4.9/5)</p>
            </div>
          </div>

        </div>

        {/* Benefits Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold text-white text-center mb-8">Tại sao chọn chúng tôi?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                <p className="text-sm font-semibold text-primary mb-1">✓</p>
                <p className="text-sm text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Bạn Cứ Uống, Tôi Lái. All Rights Reserved. | Designed with ❤️ for you
        </p>
      </div>
    </footer>
  );
};


export default Footer;