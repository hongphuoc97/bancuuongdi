import React, { useState, useEffect } from 'react';
import Button from './Button';
import PhoneIcon from './PhoneIcon';
import otoImage from '../assets/oto.png';
import xemayImage from '../assets/xemay.png';

const images = [otoImage, xemayImage];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearTimeout(mountTimer);
      clearInterval(imageTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen min-h-[500px] text-white overflow-hidden"
    >
      {/* Image Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Text Content */}
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
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 text-shadow-md">
            Đã uống rượu bia thì không lái xe.
          </p>
        </div>
        <div 
          className={`transition-all duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" variant="outline" icon={<PhoneIcon />} size="lg">
              Gọi ngay: 0345.421.303
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