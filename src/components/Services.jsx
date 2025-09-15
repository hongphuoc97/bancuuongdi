import React from 'react';

// Simple SVG icons for demonstration
const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const servicesData = [
  {
    icon: <CarIcon />,
    title: "Lái xe hộ",
    description: "Đưa bạn và xe về nhà an toàn sau những buổi tiệc, gặp gỡ bạn bè."
  },
  {
    icon: <MapIcon />,
    title: "Thuê xe kèm tài xế",
    description: "Khám phá Đà Nẵng và các tỉnh lân cận trọn vẹn, không lo đường xá."
  },
  {
    icon: <UserIcon />,
    title: "Tài xế riêng theo giờ",
    description: "Dịch vụ chuyên nghiệp, linh hoạt cho công tác, sự kiện hoặc nhu cầu cá nhân."
  }
];

const ServiceItem = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-primary">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="text-center py-16 md:py-24 px-5 bg-light">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Dịch vụ của chúng tôi</h2>
      <p className="max-w-3xl mx-auto text-lg text-secondary mb-12">An toàn, tiện lợi và chuyên nghiệp. Chúng tôi cung cấp các giải pháp di chuyển phù hợp với mọi nhu cầu của bạn.</p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {servicesData.map((service, index) => (
          <ServiceItem data-index={index} key={service.title} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;