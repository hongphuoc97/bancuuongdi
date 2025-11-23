import React, { useState, useEffect } from 'react';
import CloseIcon from './icon/web/CloseIcon';
import ClockIcon from './icon/web/ClockIcon';
import PlusIcon from './icon/web/PlusIcon';
import MinusIcon from './icon/web/MinusIcon';

// This data can be moved to a separate file or fetched from an API
const districtsData = [
	{
		id: 'dn_haichau',
		name: 'Quận Hải Châu',
		wards: [
			{ id: 'dn_haichau_haichau1', name: 'Phường Hải Châu I' },
			{ id: 'dn_haichau_haichau2', name: 'Phường Hải Châu II' },
			{ id: 'dn_haichau_thachthang', name: 'Phường Thạch Thang' },
			{ id: 'dn_haichau_thanhbinh', name: 'Phường Thanh Bình' },
			{ id: 'dn_haichau_thuanphuoc', name: 'Phường Thuận Phước' },
			{ id: 'dn_haichau_hoathuantay', name: 'Phường Hòa Thuận Tây' },
			{ id: 'dn_haichau_hoathuandong', name: 'Phường Hòa Thuận Đông' },
			{ id: 'dn_haichau_namduong', name: 'Phường Nam Dương' },
			{ id: 'dn_haichau_phuocninh', name: 'Phường Phước Ninh' },
			{ id: 'dn_haichau_binhhien', name: 'Phường Bình Hiên' },
			{ id: 'dn_haichau_binhthuan', name: 'Phường Bình Thuận' },
			{ id: 'dn_haichau_hoacuongbac', name: 'Phường Hòa Cường Bắc' },
			{ id: 'dn_haichau_hoacuongnam', name: 'Phường Hòa Cường Nam' },
		],
	},
	{
		id: 'dn_camle',
		name: 'Quận Cẩm Lệ',
		wards: [
			{ id: 'dn_camle_khuetrung', name: 'Phường Khuê Trung' },
			{ id: 'dn_camle_hoathodong', name: 'Phường Hòa Thọ Đông' },
			{ id: 'dn_camle_hoathotay', name: 'Phường Hòa Thọ Tây' },
			{ id: 'dn_camle_hoaan', name: 'Phường Hòa An' },
			{ id: 'dn_camle_hoaphat', name: 'Phường Hòa Phát' },
			{ id: 'dn_camle_hoaxuan', name: 'Phường Hòa Xuân' },
		],
	},
	{
		id: 'dn_thanhkhe',
		name: 'Quận Thanh Khê',
		wards: [
			{ id: 'dn_thanhkhe_thanhkhedong', name: 'Phường Thanh Khê Đông' },
			{ id: 'dn_thanhkhe_thanhkhetay', name: 'Phường Thanh Khê Tây' },
			{ id: 'dn_thanhkhe_xuanha', name: 'Phường Xuân Hà' },
			{ id: 'dn_thanhkhe_tamthuan', name: 'Phường Tam Thuận' },
			{ id: 'dn_thanhkhe_ankhe', name: 'Phường An Khê' },
			{ id: 'dn_thanhkhe_hoakhe', name: 'Phường Hòa Khê' },
			{ id: 'dn_thanhkhe_chinhgian', name: 'Phường Chính Gián' },
			{ id: 'dn_thanhkhe_vinhtrung', name: 'Phường Vĩnh Trung' },
			{ id: 'dn_thanhkhe_tanchinh', name: 'Phường Tân Chính' },
			{ id: 'dn_thanhkhe_thacgian', name: 'Phường Thạc Gián' },
		],
	},
	{
		id: 'dn_lienchieu',
		name: 'Quận Liên Chiểu',
		wards: [
			{ id: 'dn_lienchieu_hoahiepnam', name: 'Phường Hòa Hiệp Nam' },
			{ id: 'dn_lienchieu_hoahiepnbac', name: 'Phường Hòa Hiệp Bắc' },
			{ id: 'dn_lienchieu_hoakhanhnam', name: 'Phường Hòa Khánh Nam' },
			{ id: 'dn_lienchieu_hoakhanhbac', name: 'Phường Hòa Khánh Bắc' },
			{ id: 'dn_lienchieu_hoaminh', name: 'Phường Hòa Minh' },
		],
	},
	{
		id: 'dn_nguhanhson',
		name: 'Quận Ngũ Hành Sơn',
		wards: [
			{ id: 'dn_nguhanhson_myan', name: 'Phường Mỹ An' },
			{ id: 'dn_nguhanhson_khuemy', name: 'Phường Khuê Mỹ' },
			{ id: 'dn_nguhanhson_hoaquy', name: 'Phường Hoà Quý' },
			{ id: 'dn_nguhanhson_hoahai', name: 'Phường Hoà Hải' },
		],
	},
	{
		id: 'dn_sontra',
		name: 'Quận Sơn Trà',
		wards: [
			{ id: 'dn_sontra_thoquang', name: 'Phường Thọ Quang' },
			{ id: 'dn_sontra_naihiendong', name: 'Phường Nại Hiên Đông' },
			{ id: 'dn_sontra_manthai', name: 'Phường Mân Thái' },
			{ id: 'dn_sontra_anhaibac', name: 'Phường An Hải Bắc' },
			{ id: 'dn_sontra_phuocmy', name: 'Phường Phước Mỹ' },
			{ id: 'dn_sontra_anhaitay', name: 'Phường An Hải Tây' },
			{ id: 'dn_sontra_anhaidong', name: 'Phường An Hải Đông' },
		],
	},
	{
		id: 'dn_hoavang',
		name: 'Huyện Hòa Vang',
		wards: [
			{ id: 'dn_hoavang_hoabac', name: 'Xã Hòa Bắc' },
			{ id: 'dn_hoavang_hoalien', name: 'Xã Hòa Liên' },
			{ id: 'dn_hoavang_hoaninh', name: 'Xã Hòa Ninh' },
			{ id: 'dn_hoavang_hoason', name: 'Xã Hòa Sơn' },
			{ id: 'dn_hoavang_hoanhon', name: 'Xã Hòa Nhơn' },
			{ id: 'dn_hoavang_hoaphu', name: 'Xã Hòa Phú' },
			{ id: 'dn_hoavang_hoaphong', name: 'Xã Hòa Phong' },
			{ id: 'dn_hoavang_hoachau', name: 'Xã Hòa Châu' },
			{ id: 'dn_hoavang_hoatien', name: 'Xã Hòa Tiến' },
			{ id: 'dn_hoavang_hoaphuoc', name: 'Xã Hòa Phước' },
			{ id: 'dn_hoavang_hoakhuong', name: 'Xã Hòa Khương' },
		],
	},
];

const BookingPopup = ({ isOpen, onClose }) => {
	const [pickup, setPickup] = useState({ district: '', ward: '', street: '' });
	const [destination, setDestination] = useState({ district: '', ward: '', street: '' });
	const [stopPoint, setStopPoint] = useState({ district: '', ward: '', street: '' });
	const [showStopPoint, setShowStopPoint] = useState(false);
	const [estimatedCost, setEstimatedCost] = useState(0);
	const [driverType, setDriverType] = useState('oto');
	const [customerName, setCustomerName] = useState('');
	const [customerPhone, setCustomerPhone] = useState('');

	const getDefaultPickupTime = () => {
		const now = new Date();
		now.setMinutes(now.getMinutes() + 10);
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	};

	const defaultPickupTime = getDefaultPickupTime();

	// Calculate cost based on service type and stops
	useEffect(() => {
		const BASE_FEE = driverType === 'oto' ? 150000 : 70000;
		const STOP_FEE = driverType === 'oto' ? 50000 : 20000;

		let totalCost = BASE_FEE;
		if (showStopPoint) {
			totalCost += STOP_FEE;
		}
		setEstimatedCost(totalCost);
	}, [showStopPoint, driverType]);

	const handleRemoveStopPoint = () => {
		setShowStopPoint(false);
		setStopPoint({ district: '', ward: '', street: '' }); // Clear the data
	};

	if (!isOpen) return null;

	const AddressInputs = ({ title, location, setLocation, isEnabled = true }) => {
		const handleDistrictChange = (e) => {
			setLocation({ ...location, district: e.target.value, ward: '' });
		};
		const handleWardChange = (e) => {
			setLocation({ ...location, ward: e.target.value });
		};
		const handleStreetChange = (e) => {
			setLocation({ ...location, street: e.target.value });
		};

		return (
			<div>
				<label className="block text-gray-700 font-bold mb-2">{title}</label>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<select
						className="w-full px-3 py-2 border rounded-lg bg-gray-50"
						onChange={handleDistrictChange}
						value={location.district}
						disabled={!isEnabled}
					>
						<option value="">Chọn Quận/Huyện</option>
						{districtsData.map((district) => (
							<option key={district.id} value={district.id}>
								{district.name}
							</option>
						))}
					</select>

					<select
						className="w-full px-3 py-2 border rounded-lg bg-gray-50"
						onChange={handleWardChange}
						value={location.ward}
						disabled={!location.district || !isEnabled}
					>
						<option value="">Chọn Xã/Phường</option>
						{location.district &&
							districtsData
								.find((d) => d.id === location.district)
								?.wards.map((ward) => (
									<option key={ward.id} value={ward.id}>
										{ward.name}
									</option>
								))}
					</select>

					<div className="md:col-span-2">
						<input
							type="text"
							placeholder="Nhập tên đường, số nhà"
							className="w-full px-3 py-2 border rounded-lg bg-gray-50"
							value={location.street}
							onChange={handleStreetChange}
							disabled={!isEnabled}
							autoComplete="off"
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-3 md:p-4 overflow-y-auto">
			<div className="bg-white rounded-2xl shadow-2xl p-5 md:p-8 max-w-xl w-full max-h-[95vh] overflow-y-auto my-auto">
				<div className="flex justify-between items-center mb-5 md:mb-6">
					<h2 className="text-xl md:text-2xl font-bold text-primary">Đặt tài xế</h2>
					<button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1">
						<CloseIcon />
					</button>
				</div>

				<form className="space-y-4 md:space-y-5">
					{/* Loại tài xế */}
					<div>
						<label className="block text-sm md:text-base text-gray-700 font-bold mb-2">Loại tài xế</label>
						<div className="grid grid-cols-3 gap-1.5 md:gap-2 rounded-lg p-1.5 md:p-2 bg-gray-100">
							<label className="cursor-pointer">
								<input
									type="radio"
									name="driverType"
									value="oto"
									className="peer sr-only"
									checked={driverType === 'oto'}
									onChange={(e) => setDriverType(e.target.value)}
								/>
								<div className="text-center py-2.5 md:py-3 px-2 md:px-4 rounded-md cursor-pointer text-sm md:text-base text-gray-600 peer-checked:bg-white peer-checked:text-primary peer-checked:shadow font-semibold transition-all duration-200">
									Ô tô
								</div>
							</label>
							<label className="cursor-pointer">
								<input
									type="radio"
									name="driverType"
									value="xemay"
									className="peer sr-only"
									checked={driverType === 'xemay'}
									onChange={(e) => setDriverType(e.target.value)}
								/>
								<div className="text-center py-2.5 md:py-3 px-2 md:px-4 rounded-md cursor-pointer text-sm md:text-base text-gray-600 peer-checked:bg-white peer-checked:text-primary peer-checked:shadow font-semibold transition-all duration-200">
									Xe máy
								</div>
							</label>
							<label className="cursor-pointer">
								<input
									type="radio"
									name="driverType"
									value="full"
									className="peer sr-only"
									checked={driverType === 'full'}
									onChange={(e) => setDriverType(e.target.value)}
								/>
								<div className="text-center py-2.5 md:py-3 px-2 md:px-4 rounded-md cursor-pointer text-sm md:text-base text-gray-600 peer-checked:bg-white peer-checked:text-primary peer-checked:shadow font-semibold transition-all duration-200">
									Thuê xe & tài
								</div>
							</label>
						</div>
					</div>

					{/* Tên & Điện thoại */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
						<div>
							<label htmlFor="customerName" className="block text-sm md:text-base text-gray-700 font-bold mb-2">
								Tên của bạn
							</label>
							<input
								type="text"
								id="customerName"
								placeholder="Nhập họ và tên"
								className="w-full px-3 md:px-4 py-3 md:py-2.5 text-base md:text-sm border rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
								value={customerName}
								onChange={(e) => setCustomerName(e.target.value)}
								autoComplete="name"
								required
							/>
						</div>
						<div>
							<label htmlFor="customerPhone" className="block text-sm md:text-base text-gray-700 font-bold mb-2">
								Số điện thoại
							</label>
							<input
								type="tel"
								id="customerPhone"
								placeholder="Nhập số điện thoại"
								className="w-full px-3 md:px-4 py-3 md:py-2.5 text-base md:text-sm border rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
								value={customerPhone}
								onChange={(e) => setCustomerPhone(e.target.value)}
								autoComplete="tel"
								required
							/>
						</div>
					</div>

					{/* Giờ đón */}
					<div className="relative">
						<label htmlFor="pickupTime" className="block text-sm md:text-base text-gray-700 font-bold mb-2">
							Giờ đón
						</label>
						<div className="absolute inset-y-0 left-3 top-9 md:top-8 flex items-center pointer-events-none text-gray-400">
							<ClockIcon />
						</div>
						<input
							type="time"
							id="pickupTime"
							defaultValue={defaultPickupTime}
							className="w-full pl-10 pr-3 md:px-4 py-3 md:py-2.5 text-base md:text-sm border rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
						/>
					</div>

					{/* Địa điểm */}
					<AddressInputs title="Điểm đón" location={pickup} setLocation={setPickup} />
					<AddressInputs title="Điểm đến" location={destination} setLocation={setDestination} />

					{/* Điểm dừng */}
					{showStopPoint && (
						<div className="relative">
							<AddressInputs title="Điểm dừng" location={stopPoint} setLocation={setStopPoint} />
							<button
								type="button"
								onClick={handleRemoveStopPoint}
								className="absolute top-0 right-0 flex items-center gap-1 text-xs md:text-sm font-semibold text-red-600 hover:text-red-800 transition-colors"
							>
								<MinusIcon />
								Xóa
							</button>
						</div>
					)}

					{/* Nút thêm điểm dừng */}
					{!showStopPoint && (
						<button
							type="button"
							onClick={() => setShowStopPoint(true)}
							className="w-full flex items-center justify-center gap-2 text-sm md:text-base text-primary font-semibold py-3 px-4 border-2 border-dashed border-primary/50 rounded-lg hover:bg-primary/10 transition-colors"
						>
							<PlusIcon />
							Thêm điểm dừng
						</button>
					)}

					{/* Ước tính chi phí */}
					<div className="bg-primary/10 p-4 rounded-lg flex justify-between items-center mt-6">
						<span className="font-bold text-sm md:text-base text-gray-700">Ước tính chi phí:</span>
						<span className="font-bold text-lg md:text-xl text-primary">
							{estimatedCost.toLocaleString('vi-VN')} VNĐ
						</span>
					</div>

					{/* Buttons */}
					<div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-4 md:gap-4">
						<button
							type="button"
							onClick={onClose}
							className="w-full md:w-auto bg-gray-200 text-gray-800 px-6 md:px-8 py-3 md:py-2.5 text-base md:text-sm rounded-lg font-semibold hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
						>
							Đóng
						</button>
						<button
							type="submit"
							className="w-full md:w-auto bg-primary text-white px-6 md:px-8 py-3 md:py-2.5 text-base md:text-sm rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
						>
							Xác nhận
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BookingPopup;
