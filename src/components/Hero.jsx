import React, { useState, useEffect } from 'react';
import Button from './Button';
import PhoneIcon from './icon/web/PhoneIcon';
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
      className="relative flex items-center justify-center min-h-[500px] md:min-h-[calc(100vh+80px)] text-white overflow-hidden"
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-shadow-lg">
            🚘 Đồng hành cùng bạn <br/>trên mọi hành trình tại Đà Nẵng
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 text-shadow-md">
            ✔️ Xe ghép – Xe tiện chuyến – Lái xe hộ chuyên nghiệp
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 text-shadow-md">
           ✔️ Đón tận nơi – Đi đúng giờ – Giá hợp lý
          </p>
        </div>
        <div 
          className={`transition-all duration-1000 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="tel:0345421303" variant="outline" icon={<PhoneIcon />} size="lg" >
              0345.421.303
            </Button>
            <Button href="#services" variant="outline" size="lg" >
              Xem Dịch Vụ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;