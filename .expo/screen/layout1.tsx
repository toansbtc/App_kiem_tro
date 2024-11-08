import React, { useState, ReactNode, useEffect} from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableWithoutFeedback, TextInput, Modal, Button, TouchableOpacity } from 'react-native';
import styles from './styleLayOut'; // Đường dẫn đến file styles của bạn

// Định nghĩa props cho component Layout1
interface LayoutProps {
  children: ReactNode; // Các thành phần con của Layout1
  title: string; // Tiêu đề hiển thị trên thanh header
  navigation: any; // Điều hướng cho việc chuyển màn hình
}



// Component chính Layout1
const Layout1: React.FC<LayoutProps> = ({ children, title, navigation }) => {
  // Khởi tạo state cho trạng thái của thanh tìm kiếm và các bộ lọc
  const [isFocused, setIsFocused] = useState(false); // Trạng thái khi thanh tìm kiếm được focus
  const [searchTerm, setSearchTerm] = useState(''); // Giá trị nhập vào ô tìm kiếm
  const [showRoomTypeList, setShowRoomTypeList] = useState(false); // Trạng thái hiển thị danh sách loại phòng
  const [showLocationList, setShowLocationList] = useState(false); // Trạng thái hiển thị danh sách địa điểm
  const [selectedDistrict, setSelectedDistrict] = useState(''); // Huyện đã chọn
  const [districtList, setDistrictList] = useState<string[]>([]); // Danh sách huyện theo tỉnh
  const [showDistrictList, setShowDistrictList] = useState(false); // Trạng thái hiển thị danh sách huyện


  // Khởi tạo bộ lọc với các tiêu chí cơ bản (có thể mở rộng thêm)
  const [filters, setFilters] = useState({
    priceRangeMin: '', // Giá tối thiểu
    priceRangeMax: '', // Giá tối đa
    roomType: '',      // Loại phòng
    location: '',       // Địa điểm tỉnh
    district:'',        // huyện

  });

  const [isFilterModalVisible, setFilterModalVisible] = useState(false); // Trạng thái hiển thị modal bộ lọc
  const [roomTypeList] = useState(['Phòng đơn', 'Phòng đôi', 'Phòng 5 người ở', 'Phòng ghép']); // Danh sách loại phòng có sẵn
  const [selectedRoomType, setSelectedRoomType] = useState(''); // Loại phòng đã chọn
  const [locationList] = useState(['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Đông Nai', 'Bình Dương', 'Bình Thuận', 'Bình Phước']); // Danh sách tỉnh/thành phố có sẵn
  const [selectedLocation, setSelectedLocation] = useState(''); // Địa điểm đã chọn

  const districtListByProvince: { [key: string]: string[] } = {
    'Hà Nội': [
  'Quận Ba Đình', 
  'Quận Hoàn Kiếm', 
  'Quận Tây Hồ', 
  'Quận Long Biên', 
  'Quận Cầu Giấy', 
  'Quận Đống Đa', 
  'Quận Hai Bà Trưng', 
  'Quận Hoàng Mai', 
  'Quận Thanh Xuân'
],
   'Hồ Chí Minh': [
  'Quận 1', 
  'Quận 3', 
  'Quận 5', 
  'Quận Tân Bình', 
  'Quận Bình Thạnh', 
  'Quận Phú Nhuận', 
  'Quận Gò Vấp', 
  'Quận 7', 
  'Quận Thủ Đức'
],
    'Đà Nẵng': [
  'Quận Hải Châu', 
  'Quận Thanh Khê', 
  'Quận Sơn Trà', 
  'Quận Ngũ Hành Sơn', 
  'Quận Liên Chiểu', 
  'Quận Cẩm Lệ', 
  'Huyện Hòa Vang', 
  'Huyện Hoàng Sa'
],

    'Đồng Nai': [
  'Thành phố Biên Hòa', 
  'Huyện Long Thành', 
  'Huyện Nhơn Trạch', 
  'Huyện Trảng Bom', 
  'Huyện Vĩnh Cửu', 
  'Huyện Thống Nhất', 
  'Huyện Xuân Lộc', 
  'Huyện Cẩm Mỹ', 
  'Thị xã Long Khánh'
],

   'Bình Dương': [
  'Thành phố Thủ Dầu Một', 
  'Thành phố Dĩ An', 
  'Thành phố Thuận An', 
  'Huyện Bến Cát', 
  'Huyện Tân Uyên', 
  'Huyện Phú Giáo', 
  'Huyện Bắc Tân Uyên'
],

    'Bình Thuận': [
  'Thành phố Phan Thiết', 
  'Huyện Hàm Thuận Bắc', 
  'Huyện Hàm Thuận Nam', 
  'Huyện Tánh Linh', 
  'Huyện Đức Linh', 
  'Huyện Phú Quý', 
  'Huyện Bắc Bình'
],

  'Bình Phước': [
  'Thành phố Đồng Xoài', 
  'Huyện Đồng Phú', 
  'Huyện Bù Đăng', 
  'Huyện Bù Gia Mập', 
  'Huyện Phước Long', 
  'Huyện Chơn Thành', 
  'Huyện Lộc Ninh'
],

  
  };




  // Hàm toggle trạng thái của thanh tìm kiếm (mở/đóng)
  const toggleSearchBar = () => {
    setIsFocused(!isFocused);
  };

  // Hàm thực hiện tìm kiếm khi nhấn nút tìm kiếm
  const handleSearch = () => {
    navigation.navigate('GiaoDienTim', {
      searchTerm, // truyền searchTerm
      filters: {
        priceRangeMin: filters.priceRangeMin,
        priceRangeMax: filters.priceRangeMax,
        selectedRoomType, // thêm loại phòng đã chọn vào bộ lọc
        selectedLocation, // thêm địa điểm đã chọn vào bộ lọc
        selectedDistrict // thêm huyện đã chọn vào bộ lọc
      }
    });

     console.log("Searching for:", searchTerm);
    console.log("Filters:", {
      priceRangeMin: filters.priceRangeMin,
      priceRangeMax: filters.priceRangeMax,
      selectedRoomType,
      selectedLocation,
      selectedDistrict
    });
    
  };
  

  // Hàm xóa dữ liệu tìm kiếm và bộ lọc
  const clearSearchAndFilters = () => {
    setSearchTerm('');  // Xóa dữ liệu trong ô tìm kiếm
    setFilters({ priceRangeMin: '', priceRangeMax: '', roomType: '', location: '' , district: ''});  // Reset bộ lọc
    setSelectedRoomType('');
    setSelectedLocation('');
    setSelectedDistrict('');
  };


  useEffect(() => {
    if (selectedLocation) {
      setDistrictList(districtListByProvince[selectedLocation] || []);
      setSelectedDistrict(''); // Xóa lựa chọn huyện cũ khi tỉnh thay đổi
    }
  }, [selectedLocation]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.topBar}></View>

      {/* Thanh tìm kiếm và các bộ lọc */}
      <View style={styles.headBar}>
        <TouchableWithoutFeedback onPress={toggleSearchBar}>
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={handleSearch}>
              <Image source={require('../../assets/search_Icon.png')} style={styles.iconSearch} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchText}
              placeholder="Tìm Phòng giá rẻ tại đây..."
              onChangeText={setSearchTerm}
              value={searchTerm}
              onFocus={toggleSearchBar}
              onBlur={toggleSearchBar}
            />
            <TouchableWithoutFeedback onPress={() => setSearchTerm('')}>
              <Image source={require('../../assets/close_Icon.png')} style={styles.iconClose} />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>

        {/* Nút mở modal bộ lọc */}
        <TouchableWithoutFeedback onPress={() => setFilterModalVisible(true)}>
          <Image source={require('../../assets/filter_Icon.png')} style={styles.iconFilter} />
        </TouchableWithoutFeedback>
      </View>

      {/* Modal bộ lọc */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterModalVisible}
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Chọn bộ lọc</Text>

            {/* Bộ lọc giá */}
            <TextInput
              placeholder="Giá tối thiểu"
              value={filters.priceRangeMin}
              onChangeText={(text) => setFilters({ ...filters, priceRangeMin: text })}
              style={styles.modalInput}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Giá tối đa"
              value={filters.priceRangeMax}
              onChangeText={(text) => setFilters({ ...filters, priceRangeMax: text })}
              style={styles.modalInput}
              keyboardType="numeric"
            />

            {/* Bộ lọc loại phòng */}
            <TouchableOpacity onPress={() => setShowRoomTypeList(!showRoomTypeList)}>
              <Text style={styles.modalInput}>
                {selectedRoomType || 'Chọn loại phòng'}
              </Text>
            </TouchableOpacity>

            {showRoomTypeList && roomTypeList.map(item => (
              <TouchableOpacity key={item} onPress={() => {
                setSelectedRoomType(item);
                setShowRoomTypeList(false);
              }}>
                <Text style={styles.listItem}>{item}</Text>
              </TouchableOpacity>
            ))}

            {/* Bộ lọc địa điểm tỉnh */}
            <TouchableOpacity onPress={() => setShowLocationList(!showLocationList)}>
              <Text style={styles.modalInput}>
                {selectedLocation || 'Chọn tỉnh'}
              </Text>
            </TouchableOpacity>

            {showLocationList && locationList.map(item => (
              <TouchableOpacity key={item} onPress={() => {
                setSelectedLocation(item);
                setShowLocationList(false);
              }}>
                <Text style={styles.listItem}>{item}</Text>
              </TouchableOpacity>
            ))}

            {/* Bộ lọc huyện */}
                  <TouchableOpacity onPress={() => setShowDistrictList(!showDistrictList)}>
                    <Text style={styles.modalInput}>
                      {selectedDistrict || 'Chọn huyện'}
                    </Text>
                  </TouchableOpacity>

                  {showDistrictList && districtList.map(district => (
                    <TouchableOpacity key={district} onPress={() => {
                      setSelectedDistrict(district);
                      setShowDistrictList(false);
                    }}>
                      <Text style={styles.listItem}>{district}</Text>
                    </TouchableOpacity>
                  ))}


            {/* Nút áp dụng và hủy bộ lọc */}
            <View style={styles.modalButtonContainer}>
            <Button title="Áp dụng" onPress={() => {
                handleSearch(); // Gọi hàm tìm kiếm
                setFilterModalVisible(false); // Đóng modal
              }} />
              <Button title="Hủy" onPress={() => {
                clearSearchAndFilters();
                setFilterModalVisible(false);
              }} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Thanh tiêu đề */}
      <View style={styles.titleContainer}>
        <View style={styles.headBarTextContainer}>
          <Text style={styles.headBarText}>{title}</Text>
        </View>
      </View>

      {/* Phần nội dung */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Thanh điều hướng dưới cùng */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/home_Icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ChatList')}>
          <Image source={require('../../assets/chat_Icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GiaoDienTim')}>
          <View style={styles.s_RoomContainer}>
            <Image source={require('../../assets/searchRoom_Icon.png')} style={styles.s_RoomIcon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ThongBao')}>
          <Image source={require('../../assets/notifications_Icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TaiKhoan')}>
          <Image source={require('../../assets/acccount_Icon.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Layout1;
