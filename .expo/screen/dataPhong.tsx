interface UserData {
  soDienThoai: string;
}
 
 const data = [
      
      {
        id: '1',
        image: require('../../assets/anhphong3.jpg'),
        name: 'Phòng A102',
        price: '1,500,000 VND/tháng',
        info: '20m²',
        bedrom: '1 phòng tắm',
        roomLocation: 'Lầu 1',
        availableRooms: 12, //phòng trống
        district: 'Xuân Lộc',
        province: 'Đồng Nai',
        // sửa từ đây
        electricityCost:'10.000', // điện
        waterCost: '5.000', // nước
        internetCost: '0', // mạng
        serviceCost: '15.000', // dọn rác
        maxOccupants: 1, // người ở 
        viewsCount: 1, // số Lượng chỗ đậu xe
        ChoDeXe:'Chung',
        SanPhoi:'Riêng',
        attic: 'Có',  // gác
        window: 'Có', 
        balcony: '', // rỗng tượng trưng cho không 
        fridge: 'có', // tủ lạnh
        sink: 'Có', // bồn rữa
        wardrobe: 'Có', // tủ đồ
        sharedOwner:'có', // máy giặt
        sharedOwner1:'', // thang máy
        sharedOwner2:'có', // thú cưng
        freezers:'có' , // máy lạnh
        water_heater:'' ,   // máy nước nóng
        bed:'' , // giường
      
        roomType:'Phòng Đơn, một người ở',
      
        immageSlide: [
        require('../../assets/anhphong3.jpg'),
          require('../../assets/anhPhong_2.jpg'),
        
        ],
          InnKeeper_name: 'Trinh Huy Hoang',
          InnKeeper_Phone: '0546789901',
      },
    {
      id: '2',
      image: require('../../assets/phong1.png'),
      name: 'Phòng 01',
      price: '2,500,000 VND/tháng',
      info: '38m²',
      bedrom:'1 phòng tắm',
      roomLocation:'Lầu 2',
      availableRooms: 10,
      district: 'Quận 3', // Thêm thông tin huyện
      province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
      // sửa từ đây
      electricityCost:'8.000',
      waterCost: '3.000',
      internetCost: '20.000',
      serviceCost: '15.000',
      maxOccupants: 2, 
      viewsCount: 2,
      ChoDeXe:'Chung',
      SanPhoi:'Riêng',
      attic: 'Có',
      window: 'Có',
      balcony: '', // rỗng tượng trưng cho không 
      fridge: 'có',
      sink: 'Có',
      wardrobe: 'Có',
      sharedOwner:'có',
      sharedOwner1:'',
      sharedOwner2:'có',
      freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Phòng đôi, 2 người ở ',
 immageSlide: [
      require('../../assets/phong1.png'),
        require('../../assets/anhPhong_2.jpg'),
  
      ],
        InnKeeper_name: 'Phát chủ trọ',
      InnKeeper_Phone:'0323654321'
    },
  {
  id: '3',
    image:require('../../assets/anhphong_4.jpg'),
    name: 'Phòng 301',
    price: '4,500,000 VND/tháng',
    info: '78m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 3',
    availableRooms: 12,
    district: 'Quận 1', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Phòng 5 người ở, gia đình 5 người',
 immageSlide: [
     require('../../assets/anhphong_4.jpg'),
      require('../../assets/anhPhong_2.jpg'),
  
    ],
     InnKeeper_name: 'Tiến chủ trọ',
     InnKeeper_Phone:'0323654654'
  },
  {
    id: '4',
    image: require('../../assets/anhPhong_2.jpg'),
    name: 'Phòng 110 Ở ghép 5 người',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'trệt',
    availableRooms: 10,
    district: 'Quận Ba Đình', // Thêm thông tin huyện
    province: 'Hà Nội', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
    roomType:'Phòng ghép',
    immageSlide: [
     require('../../assets/anhPhong_2.jpg'),
     require('../../assets/anhphong_4.jpg'),
    ],
     InnKeeper_name: 'Nguyễn Da',
     InnKeeper_Phone:'0323654458'
  },
  
  {
    id: '5',
    image: require('../../assets/anhphong_3.jpg'),
    name: 'Phòng 1',
    price: '3,000,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 12,
    district: 'Quận 12', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Phòng 5 người ở',
 immageSlide: [
     require('../../assets/anhphong_4.jpg'),
      require('../../assets/anhPhong_2.jpg'),
  
    ],
     InnKeeper_name: 'Thị Bưởi',
     InnKeeper_Phone:'0323654897'
  },
  
  {
    id: '6',
    image: require('../../assets/anhphong_4.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'1 phòng tắm',
    roomLocation:'trệt',
    availableRooms: 10,
    district: 'Quận 6', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
 immageSlide: [
     require('../../assets/anhphong_4.jpg'),
      require('../../assets/anhPhong_2.jpg'),
  
    ],
     InnKeeper_name: 'Calo Dai',
     InnKeeper_Phone:'0323654123'
  },
  {
  id: '7',
    image: require('../../assets/anhphong_5.jpg'),
    name: 'Phòng 1',
    price: '3,000,000 VND/tháng',
    info: '20m²',
    bedrom:'3 phòng tắm',
    roomLocation:'Lầu 2',
    availableRooms: 12,
    district: 'Quận 1', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
 immageSlide: [
     require('../../assets/anhphong_4.jpg'),
      require('../../assets/anhPhong_2.jpg'),
      require('../../assets/anhphong_5.jpg'),
    ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  
  {
    id: '8',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Quận 3', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  
  {
    id: '9',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Quận 3', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  
  {
    id: '10',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Quận 3', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  
  {
    id: '11',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Quận 3', // Thêm thông tin huyện
    province: 'TP. Hồ Chí Minh', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  
  {
    id: '12',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },


  {
    id: '13',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '14',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '15',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '16',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '17',
    image: require('../../assets/anhphong10.jpg'),
    name: 'Phòng trọ gần trường đại học Thủ Dầu 1, đường huỳnh văn Lũy',
    price: '2,500,000 VND/tháng',
    info: '30m²',
    bedrom:'1 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Thủ Dầu 1', // Thêm thông tin huyện
    province: 'Bình Dương', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 3,
    viewsCount:3,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'3 người ở',
immageSlide: [
  require('../../assets/anhphong13.jpg'),
    require('../../assets/anhphong14.jpg'),
    require('../../assets/anhphong10.jpg'),
    require('../../assets/anhphong13.jpg'),
    require('../../assets/anhphong12.jpg'),
    require('../../assets/anhphong14.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '18',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',    
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '19',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },

  {
    id: '19',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '20',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  {
    id: '21',
    image: require('../../assets/anhphong_6.jpg'),
    name: 'Phòng 2',
    price: '2,500,000 VND/tháng',
    info: '18m²',
    bedrom:'2 phòng tắm',
    roomLocation:'Lầu 1',
    availableRooms: 10,
    district: 'Long Khánh', // Thêm thông tin huyện
    province: 'Đồng Nai', // Thêm thông tin tỉnh
    // sửa từ đây
    electricityCost:'8.000',
    waterCost: '3.000',
    internetCost: '20.000',
    serviceCost: '15.000',
    maxOccupants: 5,
    viewsCount:5,
    ChoDeXe:'Chung',
    SanPhoi:'Riêng',
    attic: 'Có',
    window: 'Có',
    balcony: '', // rỗng tượng trưng cho không 
    fridge: 'có',
    sink: 'Có',
    wardrobe: 'Có',
    sharedOwner:'có',
    sharedOwner1:'',
    sharedOwner2:'có',
    freezers:'có' , // máy lạnh
      water_heater:'' ,   // máy nước nóng
      bed:'' , // giường
roomType:'Đơn',
immageSlide: [
  require('../../assets/anhphong3.jpg'),
    require('../../assets/anhPhong_2.jpg'),
  
  ],
     InnKeeper_name: 'Hoàng đẹp trai',
     InnKeeper_Phone:'0323654457'
  },
  
  
    // Thêm nhiều phòng hơn nếu cần
    ];
    export default data;  