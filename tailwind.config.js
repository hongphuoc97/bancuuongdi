/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d4ed8', // Màu xanh dương đậm (Thủy) - Tương hợp
          dark: '#1e40af',   // Tông màu tối hơn cho trạng thái hover
        },
        accent: {
          DEFAULT: '#f59e0b', // Màu vàng hổ phách (Thổ) - Tương sinh
          dark: '#d97706',   // Tông màu tối hơn cho hover
        },
        secondary: '#6c757d', // Màu phụ trung tính
        light: '#f8f9fa',     // Màu nền sáng
        dark: '#212529',      // Màu chữ/nền tối
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};