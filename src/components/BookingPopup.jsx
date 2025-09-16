import React, { useState } from 'react';
import CloseIcon from './CloseIcon';

const BookingPopup = ({ isOpen, onClose }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');


  if (!isOpen) return null;

  const getDefaultPickupTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 10);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const defaultPickupTime = getDefaultPickupTime();

  const districtsData = [
    { id: 'hcm_q1', name: 'Quận 1', wards: [{ id: 'hcm_q1_cw', name: 'Phường Cầu Ông Lãnh' }, { id: 'hcm_q1_bd', name: 'Phường Bến Thành' }] },
    { id: 'hcm_q2', name: 'Quận 2', wards: [{ id: 'hcm_q2_at', name: 'Phường An Thới' }, { id: 'hcm_q2_bt', name: 'Phường Bình Trưng' }] },
    { id: 'hcm_q3', name: 'Quận 3', wards: [{ id: 'hcm_q3_p1', name: 'Phường 1' }, { id: 'hcm_q3_p2', name: 'Phường 2' }] },
  ];

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-25 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Đặt tài xế</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <CloseIcon />
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Loại tài xế</label>
            <div className="flex justify-around">
              <label className="flex items-center">
                <input type="radio" name="driverType" value="oto" className="mr-2" defaultChecked />
                Ô tô
              </label>
              <label className="flex items-center">
                <input type="radio" name="driverType" value="xemay" className="mr-2" />
                Xe máy
              </label>
              <label className="flex items-center">
                <input type="radio" name="driverType" value="full" className="mr-2" />
                Thuê xe & tài
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="pickupTime" className="block text-gray-700 font-bold mb-2">Giờ đón</label>
            <input type="time" id="pickupTime" defaultValue={defaultPickupTime} className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Địa chỉ</label>
            <div className="grid grid-cols-1 gap-3">
              <select
                className="w-full px-3 py-2 border rounded-lg"
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setSelectedWard(''); // Reset ward when district changes
                }}
                value={selectedDistrict}
              >
                <option value="">Chọn Quận/Huyện</option>
                {districtsData.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>

              <select
                className="w-full px-3 py-2 border rounded-lg"
                onChange={(e) => setSelectedWard(e.target.value)}
                value={selectedWard}
                disabled={!selectedDistrict} // Disable if no district is selected
              >
                <option value="">Chọn Xã/Phường</option>
                {selectedDistrict &&
                  districtsData
                    .find((d) => d.id === selectedDistrict)
                    ?.wards.map((ward) => (
                      <option key={ward.id} value={ward.id}>
                        {ward.name}
                      </option>
                    ))}
              </select>

              <input
                type="text"
                placeholder="Nhập tên đường, số nhà"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark">
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;
