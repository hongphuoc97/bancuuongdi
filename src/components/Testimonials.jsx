import React from 'react';

// Quote Icon
const QuoteIcon = () => (
  <svg className="w-12 h-12 text-primary/20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
);

const testimonialsData = [
  {
    quote: "Dịch vụ rất chuyên nghiệp, tài xế thân thiện và lái xe an toàn. Tôi thực sự rất hài lòng và chắc chắn sẽ sử dụng lại!",
    author: "Anh Nguyễn Văn A",
    location: "Đà Nẵng"
  },
  {
    quote: "Tài xế đến rất đúng giờ, xe sạch sẽ. Một giải pháp tuyệt vời cho những người hay phải đi tiếp khách như tôi. Highly recommended!",
    author: "Chị Trần Thị B",
    location: "Hội An"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24 px-5 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark">Khách hàng nói gì về chúng tôi</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <figure key={index} className="bg-light p-8 rounded-lg shadow-md flex flex-col items-center">
            <QuoteIcon />
            <blockquote className="mt-4">
              <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-bold text-dark">{testimonial.author}</div>
              <div className="text-sm text-secondary">{testimonial.location}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;