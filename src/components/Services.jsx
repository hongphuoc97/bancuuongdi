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

const priceData = [
  {
    route: 'Đà Nẵng - Hội An',
    prices: [
      { type: 'Xe 4 chỗ', price: '300.000đ' },
      { type: 'Xe 6 chỗ', price: '400.000đ' },
    ]
  },
  {
    route: 'Đà Nẵng - Tam Kỳ',
    prices: [
      { type: 'Xe 4 chỗ', price: '550.000đ' },
      { type: 'Xe 6 chỗ', price: '650.000đ' },
    ]
  },
  {
    route: 'Đà Nẵng - Huế',
    prices: [
      { type: 'Xe 4 chỗ', price: '900.000đ' },
      { type: 'Xe 6 chỗ', price: '1.000.000đ' },
    ]
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
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
          An toàn, tiện lợi và chuyên nghiệp. Chúng tôi cung cấp các giải pháp di chuyển phù hợp với mọi nhu cầu của bạn.
        </p>
      </div>

      {/* Services Grid */}
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 mb-16">
        {servicesData.map((service, index) => (
          <ServiceItem 
            key={service.title} 
            {...service} 
            isInView={isInView} 
            delay={`${index * 150}ms`} 
          />
        ))}
      </div>

      {/* Pricing Table Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
          Bảng giá dịch vụ
        </h3>
        <p className="text-gray-600 mb-10 text-lg">
          Giá cạnh tranh, minh bạch và không có chi phí ẩn
        </p>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {priceData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-primary mb-6 border-b-2 border-primary pb-4">
                {item.route}
              </h4>
              <div className="space-y-3">
                {item.prices.map((price, priceIndex) => (
                  <div key={priceIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-700 font-medium">{price.type}</span>
                    <span className="text-primary font-bold text-lg">{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Price Notes */}
        <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 space-y-3">
          <p className="text-gray-700 flex items-start">
            <span className="text-primary font-bold mr-3">📞</span>
            <span><strong>Giá lượt về:</strong> Vui lòng gọi để tư vấn</span>
          </p>
          <p className="text-gray-700 flex items-start">
            <span className="text-primary font-bold mr-3">👥</span>
            <span><strong>Giá 1 chỗ ngồi:</strong> Vui lòng gọi để ghép xe và tư vấn</span>
          </p>
          <p className="text-gray-700 flex items-start mt-4">
            <span className="text-primary font-bold mr-3">⭐</span>
            <span><strong>Hotline:</strong> <a href="tel:0345421303" className="text-primary hover:underline font-bold">0345.421.303</a></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;