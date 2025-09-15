import React from 'react';
import PhoneIcon from './PhoneIcon';
import MailIcon from './MailIcon';
import LocationIcon from './LocationIcon';

// Social Media Icons
const SocialIcon = ({ href, children }) => (
  <a href={href} className="text-gray-500 hover:text-primary transition-colors duration-300">
    <span className="sr-only">{children.props.title}</span>
    {children}
  </a>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <title>Facebook</title>
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const ZaloIcon = () => ( // Placeholder icon for Zalo
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <title>Zalo</title>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 7h2v2h-2z" />
    </svg>
);

const Footer = () => {
  const navLinks = [
    { href: "#hero", text: "Trang chủ" },
    { href: "#services", text: "Dịch vụ" },
    { href: "#testimonials", text: "Đánh giá" },
  ];

  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-dark">Bạn Cứ Uống, Tôi Lái</h3>
            <p className="text-secondary">
              Dịch vụ lái xe hộ chuyên nghiệp, an toàn và đáng tin cậy tại Đà Nẵng. Chúng tôi luôn sẵn sàng phục vụ bạn.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.text}>
                  <a href={link.href} className="text-secondary hover:text-primary transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark">Thông tin liên hệ</h3>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start">
                <PhoneIcon />
                <a href="tel:0123456789" className="hover:text-primary ml-2">Hotline: 0123.456.789</a>
              </li>
              <li className="flex items-start">
                <MailIcon />
                <a href="mailto:contact@bancuuongtoilai.com" className="hover:text-primary ml-2">contact@bancuuongtoilai.com</a>
              </li>
              <li className="flex items-start">
                <LocationIcon />
                <span className="ml-2">Hải Châu, Đà Nẵng</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <SocialIcon href="#">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="#">
                <ZaloIcon />
              </SocialIcon>
            </div>
            <p className="text-secondary pt-4">Gọi ngay để đặt xe!</p>
            <a 
              href="tel:0123456789" 
              className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              0123.456.789
            </a>
          </div>
        </div>
      </div>
      <div className="bg-light py-4 px-6">
        <p className="text-center text-gray-500 text-sm">&copy; {new Date().getFullYear()} Bạn Cứ Uống, Tôi Lái. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;