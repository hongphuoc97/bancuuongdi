import React from 'react';
import Button from './Button';
import PhoneIcon from './PhoneIcon';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-[60vh] min-h-[400px] text-center px-5 bg-cover bg-center text-white"
      // Để tối ưu hiệu suất cho trang production, bạn nên tải hình ảnh này về,
      // tối ưu hóa nó (ví dụ: chuyển sang định dạng WebP) và phục vụ từ
      // thư mục `assets` của dự án.
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Bạn Cứ Uống, Tôi Lái</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">An toàn là trên hết. Tận hưởng cuộc vui, việc đưa bạn và xe về nhà an toàn đã có chúng tôi lo.</p>
        <Button href="#contact" variant="secondary" icon={<PhoneIcon />}>Đặt xe ngay</Button>
      </div>
    </section>
  );
};

export default Hero;