import React from 'react';
import SafeDriverIcon from './icon/service/SafeDriverIcon';
import MapRouteIcon from './icon/service/MapRouteIcon';
import PrivateDriverIcon from './icon/service/PrivateDriverIcon';
import RideShareIcon from './icon/service/RideShareIcon';
import CarRescueIcon from './icon/service/CarRescueIcon';
import BikeRescueIcon from './icon/service/BikeRescueIcon';
import { useInView } from '../hooks/useInView';

const servicesData = [
  {
    icon: <SafeDriverIcon />,
    title: 'Lái xe hộ an toàn',
    description: 'Đưa bạn và xe về nhà an toàn sau những buổi tiệc, gặp gỡ bạn bè mà không cần lo lắng về việc lái xe.',
  },
  {
    icon: <MapRouteIcon />,
    title: 'Tài xế đường dài',
    description: 'Khám phá Đà Nẵng và các tỉnh lân cận trọn vẹn, tiện lợi và không lo đường xá với tài xế riêng của chúng tôi.',
  },
  {
    icon: <PrivateDriverIcon />,
    title: 'Tài xế riêng theo giờ',
    description: 'Dịch vụ chuyên nghiệp, linh hoạt cho các chuyến công tác, tham dự sự kiện hoặc các nhu cầu di chuyển cá nhân.',
  },
  {
    icon: <RideShareIcon />,
    title: 'Xe tiện chuyến',
    description: 'Dịch vụ đi chung xe, tiết kiệm chi phí cho các chuyến đi giữa các thành phố hoặc ra sân bay.',
  },
  {
    icon: <CarRescueIcon />,
    title: 'Cứu hộ xe ô tô',
    description: 'Hỗ trợ nhanh chóng khi xe của bạn gặp sự cố trên đường, từ hết bình, thủng lốp đến các vấn đề phức tạp hơn.',
  },
  {
    icon: <BikeRescueIcon />,
    title: 'Cứu hộ xe máy',
    description: 'Đừng để sự cố xe máy làm gián đoạn hành trình của bạn. Chúng tôi có mặt để giúp bạn mọi lúc, mọi nơi.',
  },
];

const ServiceItem = ({ icon, title, description, isInView, delay }) => (
  <div 
    className={`bg-white p-3 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-500 flex flex-col items-center text-center transform hover:-translate-y-2 border-t-4 border-transparent hover:border-primary ${
      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: delay }}
  >
    <div className="mb-5 text-primary">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="text-center py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-extrabold mb-2 text-gray-900">
          Dịch vụ của chúng tôi
        </h3>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
          An toàn, tiện lợi và chuyên nghiệp. Chúng tôi cung cấp các giải pháp di chuyển phù hợp với mọi nhu cầu của bạn.
        </p>
      </div>
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
        {servicesData.map((service, index) => (
          <ServiceItem 
            key={service.title} 
            {...service} 
            isInView={isInView} 
            delay={`${index * 150}ms`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;