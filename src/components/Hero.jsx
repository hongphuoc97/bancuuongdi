import React, { useState, useEffect } from 'react';
import Button from './Button';
import PhoneIcon from './PhoneIcon';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen min-h-[500px] bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533496909133-73c3a2a9d5d8?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Background Animation & Overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 transition-transform duration-[2000ms] ease-in-out ${isMounted ? 'scale-100' : 'scale-125'}`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533496909133-73c3a2a9d5d8?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      <div className="relative z-10 text-center px-4">
        <div 
          className={`transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-shadow-lg">
            Bạn Cứ Uống, Tôi Lái
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 text-shadow-md">
            An toàn là trên hết. Tận hưởng cuộc vui, việc đưa bạn và xe về nhà an toàn đã có chúng tôi lo.
          </p>
        </div>
        <div 
          className={`transition-all duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" variant="secondary" icon={<PhoneIcon />} size="lg">
              Gọi ngay: 0123.456.789
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Xem Dịch Vụ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;