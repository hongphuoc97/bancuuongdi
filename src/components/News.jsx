import React, { useState } from 'react';

// Dữ liệu mẫu cho các bài viết
const posts = [
  {
    id: 1,
    title: '5 Mẹo Sử Dụng Xe Tay Ga Bền Bỉ, Tiết Kiệm Xăng',
    description: 'Khám phá những bí quyết đơn giản giúp chiếc xe tay ga của bạn luôn vận hành êm ái, bền bỉ và tối ưu hóa mức tiêu thụ nhiên liệu.',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    href: '#!',
  },
  {
    id: 2,
    title: 'Top Các Địa Điểm Cứu Hộ Xe Uy Tín Tại Đà Nẵng',
    description: 'Lưu ngay danh sách các địa chỉ cứu hộ xe máy, ô tô chuyên nghiệp và nhanh chóng tại Đà Nẵng để không phải lo lắng khi xe gặp sự cố.',
    imageUrl: '/xecuuho.png',
    href: '#!',
  },
  {
    id: 3,
    title: 'Ăn Gì Ở Đà Nẵng? Các Quán Ăn Ngon Không Thể Bỏ Lỡ',
    description: 'Từ mỳ Quảng, bánh tráng thịt heo đến các loại hải sản tươi sống, cùng khám phá bản đồ ẩm thực đặc sắc của thành phố biển xinh đẹp.',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    href: '#!',
  },
    {
    id: 4,
    title: 'Ăn Gì Ở Đà Nẵng? Các Quán Ăn Ngon Không Thể Bỏ Lỡ',
    description: 'Từ mỳ Quảng, bánh tráng thịt heo đến các loại hải sản tươi sống, cùng khám phá bản đồ ẩm thực đặc sắc của thành phố biển xinh đẹp.',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    href: '#!',
  },
    {
    id: 5,
    title: 'Ăn Gì Ở Đà Nẵng? Các Quán Ăn Ngon Không Thể Bỏ Lỡ',
    description: 'Từ mỳ Quảng, bánh tráng thịt heo đến các loại hải sản tươi sống, cùng khám phá bản đồ ẩm thực đặc sắc của thành phố biển xinh đẹp.',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    href: '#!',
  },
    {
    id: 6,
    title: 'Ăn Gì Ở Đà Nẵng? Các Quán Ăn Ngon Không Thể Bỏ Lỡ',
    description: 'Từ mỳ Quảng, bánh tráng thịt heo đến các loại hải sản tươi sống, cùng khám phá bản đồ ẩm thực đặc sắc của thành phố biển xinh đẹp.',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    href: '#!',
  },
];

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Logic để tính toán các bài viết cho trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <section id="news" className="py-16 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
            Tin Tức & Cẩm Nang
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Khám Phá Cùng Chúng Tôi
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Những bài viết hữu ích về xe cộ, cứu hộ và những địa điểm thú vị tại Đà Nẵng.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {currentPosts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2 group">
                    <p className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Điều khiển phân trang */}
        <div className="mt-16 flex justify-center items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Trang trước
          </button>

          <span className="text-sm text-gray-700">
            Trang {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Trang sau
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;