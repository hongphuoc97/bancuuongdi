import React, { useState } from 'react';
import PhoneIcon from './icon/web/PhoneIcon';

const MessengerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9.05 21.62 10.45 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.35-3.88-.95l-.28-.15-2.89.44.44-2.89-.15-.28C4.35 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.64-12.67c-.2-.2-.52-.2-.72 0l-2.5 2.5c-.2.2-.2.52 0 .72l2.5 2.5c.2.2.52.2.72 0 .2-.2.2-.52 0-.72l-1.64-1.64 1.64-1.64c.2-.2.2-.52 0-.72zm-7.28 0c-.2.2-.2.52 0 .72l1.64 1.64-1.64 1.64c-.2.2-.2.52 0 .72.2.2.52.2.72 0l2.5-2.5c.2-.2.2-.52 0-.72l-2.5-2.5c-.2-.2-.52-.2-.72 0z" />
  </svg>
);

const ZaloIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-6 h-6">
    <path d="M24 2C12.95 2 4 10.95 4 22c0 5.65 2.41 10.74 6.29 14.29L8.54 40l9.87-5.02C20.95 36.86 22.41 37 24 37c11.05 0 20-8.95 20-20S35.05 2 24 2zm0 36c-1.41 0-2.78-.15-4.12-.42l-2.97 1.51 1.5-4.89C7.33 30.97 5 26.78 5 22c0-9.94 8.06-18 18-18s18 8.06 18 18-8.06 18-18 18z"/>
  </svg>
);

const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Inject shake animation styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        10% { transform: translateX(-2px) rotate(-5deg); }
        20% { transform: translateX(2px) rotate(5deg); }
        30% { transform: translateX(-2px) rotate(-5deg); }
        40% { transform: translateX(2px) rotate(5deg); }
        50% { transform: translateX(0) rotate(0deg); }
        60% { transform: translateX(-2px) rotate(-5deg); }
        70% { transform: translateX(2px) rotate(5deg); }
        80% { transform: translateX(-2px) rotate(-5deg); }
        90% { transform: translateX(2px) rotate(5deg); }
      }
      
      .phone-ring {
        animation: shake 1.2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const contactOptions = [
    {
      id: 'phone',
      label: 'Gọi điện',
      icon: <PhoneIcon />,
      href: 'tel:0345421303',
      bgColor: 'bg-green-500 hover:bg-green-600',
    },
    {
      id: 'messenger',
      label: 'Messenger',
      icon: <MessengerIcon />,
      href: 'https://www.facebook.com/profile.php?id=61554510803672',
      bgColor: 'bg-blue-500 hover:bg-blue-600',
      target: '_blank',
    },
    {
      id: 'zalo',
      label: 'Zalo',
      icon: <ZaloIcon />,
      href: 'https://zalo.me/0905761912',
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      target: '_blank',
    },
  ];

  return (
    <>
      {/* Floating Button Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-end gap-3">
        {/* Contact Options */}
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {contactOptions.map((option) => (
              <a
                key={option.id}
                href={option.href}
                target={option.target}
                rel={option.target === '_blank' ? 'noopener noreferrer' : ''}
                className={`flex items-center gap-2 ${option.bgColor} text-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 group ${
                  option.id === 'phone' || option.id === 'messenger' ? 'phone-ring' : ''
                }`}
                title={option.label}
              >
                <span className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">{option.icon}</span>
                <span className="hidden md:inline-block text-sm font-medium whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                  {option.label}
                </span>
              </a>
            ))}
          </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
          title="Liên hệ"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      {/* Backdrop when open */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-transparent cursor-default"
          aria-label="Close contact menu"
        />
      )}
    </>
  );
};

export default FloatingContactButtons;
