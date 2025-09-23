import React, { useState, useEffect, useCallback } from 'react';
import Avatar from './Avatar';

const QuoteIcon = () => (
  <svg className="w-3 h-3 md:w-6 md:h-6 text-primary/10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
  </svg>
);

const testimonialsData = [
  {
    quote: 'Dịch vụ rất chuyên nghiệp, tài xế thân thiện và lái xe an toàn. Tôi thực sự rất hài lòng và chắc chắn sẽ sử dụng lại!',
    author: 'Anh Nguyễn Văn An',
    location: 'Quận Hải Châu, Đà Nẵng',
    avatar: 'https://i.pravatar.cc/150?u=nguyenvanan'
  },
  {
    quote: 'Tài xế đến rất đúng giờ, xe sạch sẽ. Một giải pháp tuyệt vời cho những người hay phải đi tiếp khách như tôi. Highly recommended!',
    author: 'Chị Trần Thị Bình',
    location: 'Thành phố Hội An',
    avatar: 'https://i.pravatar.cc/150?u=tranthibinh'
  },
  {
    quote: 'Ứng cứu kịp thời lúc nửa đêm. Giá cả hợp lý, tài xế nhiệt tình. Cảm ơn dịch vụ rất nhiều.',
    author: 'Anh Lê Văn Cường',
    location: 'Quận Sơn Trà, Đà Nẵng',
    avatar: 'https://i.pravatar.cc/150?u=levancuong'
  },
  {
    quote: 'Đặt xe qua điện thoại rất nhanh chóng, chỉ 15 phút là tài xế có mặt. Xe của mình được lái về cẩn thận.',
    author: 'Chị Phạm Thị Dung',
    location: 'Quận Ngũ Hành Sơn, Đà Nẵng',
    avatar: 'https://i.pravatar.cc/150?u=phamthidung'
  },
];

const TestimonialCard = ({ quote, author, location, avatar }) => (
  <figure className="relative w-full flex-shrink-0 bg-white p-8 rounded-2xl shadow-lg">
    <div className="absolute top-8 right-8">
      <QuoteIcon />
    </div>
    <blockquote className="relative z-10">
      <p className="text-lg text-gray-700 leading-relaxed">{quote}</p>
    </blockquote>
    <figcaption className="mt-6 flex items-center">
      <Avatar src={avatar} alt={author} />
      <div className="ml-4 text-left">
        <div className="font-bold text-gray-900">{author}</div>
        <div className="text-sm text-gray-500">{location}</div>
      </div>
    </figcaption>
  </figure>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrent(current === testimonialsData.length - 1 ? 0 : current + 1);
  }, [current]);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonialsData.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [current, nextTestimonial]);

  return (
    <section id="testimonials" className="bg-gray-50 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">Khách hàng nói gì về chúng tôi</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
          Sự hài lòng và an toàn của bạn là ưu tiên hàng đầu của chúng tôi.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.author} className="w-full flex-shrink-0 p-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevTestimonial} 
          aria-label="Previous testimonial"
          className="absolute top-1/2 -left-6 md:-left-16 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={nextTestimonial} 
          aria-label="Next testimonial"
          className="absolute top-1/2 -right-6 md:-right-16 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrent(index)} 
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${current === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;