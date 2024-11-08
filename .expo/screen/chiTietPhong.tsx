import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './styleCtPhong';
import roomdata from './dataPhong';
import { useNavigation, useRoute } from '@react-navigation/native'; // Nhập useNavigation
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { TinMoi } from '../LordLand_screen/PostNewAd';



interface Room {
  image: any; // Kiểu dữ liệu cho hình ảnh
  name: string; // Kiểu dữ liệu cho tên phòng
  price: number; // Kiểu dữ liệu cho giá phòng
  availableRooms: number; // Kiểu dữ liệu cho số phòng còn trống


}

interface Phone {
  phoneNumber: string; // Chỉ định kiểu dữ liệu cho phoneNumber
}
// Khai báo kiểu cho các tham số màn hình
type RootStackParamList = {
  GiaoDienTim: undefined; // Màn hình này ❌ ✔️ tham số
  ChiTietPhong: { room: any }; // Màn hình chi tiết phòng nhận tham số room
  DatPhongNgay: { room: any };
  Chat: { room: any; innKeeperName: string; innKeeperPhone: undefined };


};

// Định nghĩa kiểu navigation cho màn hình này
type ChiTietPhongScreenProp = StackNavigationProp<RootStackParamList, 'ChiTietPhong'>;

// Tạo Stack Navigator với kiểu tham số
const Stack = createStackNavigator();

const ChiTietPhong = ({ route }) => {
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<{ comment: string, rating: number }[]>([]);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const navigation = useNavigation<ChiTietPhongScreenProp>(); // Khởi tạo navigation
  // Nhận dữ liệu phòng từ route
  console.log('dataaaaaaaa', route.params)
  const { room } = route.params




  // Khởi tạo trạng thái cho việc hiển thị danh sách phòng
  const [showRooms, setShowRooms] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);;
  const [currentRoom, setCurrentRoom] = useState<TinMoi>(room);// Thêm trạng thái cho phòng hiện tại
  const [binhLuan, setBinhLuan] = useState<String[]>([]);
  const [danhgia, setdanhgia] = useState('');


  // slider function
  // Các hàm liên quan đến slide chuyển ảnh
  // Hàm để chuyển đến ảnh tiếp theo
  const handleNextImage = () => {
    console.log("Next image")
    setActiveIndex((prevIndex) =>
      prevIndex === room.immageSlide.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Hàm để quay lại ảnh trước đó
  const handlePreviousImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? room.immageSlide.length - 1 : prevIndex - 1
    );
  };


  //-------------------------------------------------------
  const handleInputChange = (text: string) => {
    setComment(text);
  };

  const sendComment = () => {
    if (comment !== "" && selectedRating !== 0) {
      setAllComment([...allComment, { comment, rating: selectedRating }]);
      setComment("");
      setSelectedRating(0);
      console.log(allComment);
    }
  };
  //------------------------------- hàm chuyển trang sang zalo hoặc sms
  // Hàm xử lý khi người dùng nhấn vào số điện thoại

  const handlePhonePress = (phoneNumber: string) => {
    Alert.alert(
      'Liên hệ qua',
      'Chọn một cách để liên hệ:',
      [
        {
          text: 'Gọi điện',
          onPress: () => Linking.openURL(`tel:${phoneNumber}`),
        },

        {
          text: 'Gửi tin nhắn SMS',
          onPress: () => Linking.openURL(`sms:${phoneNumber}`),
        },
        {
          text: 'Hủy',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };





  //--------------------------------------------
  const handleStarPressIn = (star: number) => {
    // Add any logic you want to execute when the star is pressed in
    console.log(`Pressed in on star ${star}`);
  };

  const handleStarPressOut = () => {
    // Add any logic you want to execute when the star is released
    console.log('Released the star');
  };
  const handleStarHover = (index: number) => {
    setHoverRating(index);
  };

  const handleStarClick = (index: number) => {
    setSelectedRating(index);
  };

  let imagePossition = 0;
  return (

    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Ảnh phòng & slider*/}
        {/* Slider ảnh */}
        <View style={styles.sliderContainer}>
          <Image source={{ uri: room.hinhAnh[0] }} style={styles.image} />
          <View style={styles.sliderButtons}>
            <TouchableOpacity onPress={handlePreviousImage} style={styles.navButton}>
              <Text style={styles.navButtonText}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextImage} style={styles.navButton}>
              <Text style={styles.navButtonText}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* Container chứa thông tin chung của phòng */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{currentRoom.tieuDe}</Text>
          <Text style={styles.price}>Giá: {currentRoom.giaPhong}</Text>
          <Text style={styles.availableRooms}>Còn {currentRoom.soPhongNgu} phòng trống</Text>

          {/* Vị trí */}
          <View style={styles.row}>
            <Image
              source={require('../../assets/location_Icon.png')} // Đường dẫn tới hình ảnh icon vị trí
              style={styles.icon}
            />
            <Text style={styles.location}>{currentRoom.quanHuyen}, {currentRoom.huyen}</Text>
          </View>

          {/* Giờ giấc tự do */}
          {/* <View style={styles.row}>
            <Image
              source={require('../../assets/oclock_Icon.png')} // Đường dẫn tới hình ảnh icon giờ giấc
              style={styles.icon}
            />
            <Text style={styles.location}>Giờ giấc: {currentRoom. ? 'Tự do' : 'Giới hạn'}</Text>
          </View> */}


          {/* Chi phí dự kiến */}
          <Text style={styles.title}>Chi phí sinh hoạt</Text>
          <View style={styles.groupBox}>
            <View style={styles.costContainer}>
              <View style={styles.costBox}>
                <Text style={styles.label}>Chi phí điện:</Text>
                <Text style={styles.cost}>{currentRoom.giaDien} VND/ kWh</Text>
              </View>
              <View style={styles.costBox}>
                <Text style={styles.label}>Chi phí nước:</Text>
                <Text style={styles.cost}>{currentRoom.giaNuoc} VND/ m3</Text>
              </View>
              {/* <View style={styles.costBox}>
                <Text style={styles.label}>Chi phí Internet:</Text>
                <Text style={styles.cost}>{currentRoom.gia// mạng
                } VND/ tháng</Text>
              </View> */}
              <View style={styles.costBox}>
                <Text style={styles.label}>Chi phí dọn rác:</Text>
                <Text style={styles.cost}>{currentRoom.giaQuet_Don} VND/ tháng</Text>
              </View>
            </View>
          </View>

          {/* Thông tin chi tiết khác của phòng */}

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Thông tin chi tiết:</Text>

            {/* Dãy thông tin mới thêm: Vị trí, Số người, Số lượng xem */}
            <View style={styles.detailRow}>
              <Text style={styles.details}>
                Vị trí: <Text style={styles.btItem}>{currentRoom.diaChiPhong}</Text>
              </Text>
              <Text style={styles.details}>
                Số người: <Text style={styles.btItem}>{currentRoom.soNguoi} người</Text>
              </Text>
              <Text style={styles.details}>
                Số lượng xe: <Text style={styles.btItem}>{currentRoom.soChoDeXe}</Text>
              </Text>
            </View>

            {/* Dãy thông tin mới thêm: Chỗ để xe, Sân phơi, Diện tích */}
            <View style={styles.detailRow}>
              <Text style={styles.details}>
                Chỗ để xe: <Text style={styles.btItem}>chung</Text>
              </Text>
              <Text style={styles.details}>
                Sân phơi:  <Text style={styles.btItem}>chung</Text>
              </Text>
              <Text style={styles.details}>
                Diện tích: <Text style={styles.btItem}>{currentRoom.dienTich}</Text>
              </Text>
            </View>

            {/* Đường kẻ ngang */}
            <View style={styles.separator} />

            {/* Các thông tin ✔️ sẵn như Gác, Cửa sổ, Ban công, ... */}
            {/* <View style={styles.detailRow}>
              <Text style={styles.details}>
                Gác: <Text style={room.attic ? styles.hasItem : styles.noItem}>{room.attic ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                Cửa sổ: <Text style={room.window ? styles.hasItem : styles.noItem}>{room.window ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                Ban công: <Text style={room.balcony ? styles.hasItem : styles.noItem}>{room.balcony ? '✔️' : '❌'}</Text>
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.details}>
                Tủ lạnh: <Text style={room.fridge ? styles.hasItem : styles.noItem}>{room.fridge ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                Bồn rửa: <Text style={room.sink ? styles.hasItem : styles.noItem}>{room.sink ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                Tủ đồ: <Text style={room.wardrobe ? styles.hasItem : styles.noItem}>{room.wardrobe ? '✔️' : '❌'}</Text>
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.details}>
                Máy giặt: <Text style={room.sharedOwner ? styles.hasItem : styles.noItem}>{room.sharedOwner ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                Thang máy: <Text style={room.sharedOwner1 ? styles.hasItem : styles.noItem}>{room.sharedOwner1 ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                thú cưng: <Text style={room.sharedOwner2 ? styles.hasItem : styles.noItem}>{room.sharedOwner2 ? '✔️' : '❌'}</Text>
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.details}>
                Máy Lạnh: <Text style={room.freezers ? styles.hasItem : styles.noItem}>{room.freezers ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                Máy nước nóng: <Text style={room.water_heater ? styles.hasItem : styles.noItem}>{room.water_heater ? '✔️' : '❌'}</Text>
              </Text>
              <Text style={styles.details}>
                Giường <Text style={room.bed ? styles.hasItem : styles.noItem}>{room.bed ? '✔️' : '❌'}</Text>
              </Text> 
            </View>*/}





          </View>

        </View>



      </ScrollView>





      {/*-------------------------Yêu cầu dịch vụ-----------------------------------------------------*/}



      <View style={styles.infoContainer}>
        <Text style={styles.additionalTitle}>Liên Hệ</Text>
        <View style={styles.buttonContainer}>
          {/* Các nút khác */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Debugging: Check if the phone number exists
              // console.log("Navigating to Chat with phone number:", currentRoom.p);
              navigation.navigate('Chat', {
                room: room,
                innKeeperName: room.InnKeeper_name,
                innKeeperPhone: room.InnKeeper_Phone, // Ensure this is defined

              });
            }}
          >
            <Image
              source={require('../../assets/chat_Icon.png')}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <Image
              source={require('../../assets/phone_Icon.png')}
              style={styles.buttonImage}
            />
            <View style={styles.phoneContainer}>
              <Text style={styles.buttonText}>Phone</Text>
              <TouchableOpacity onPress={() => handlePhonePress(room.InnKeeper_Phone)}>
                <Text style={styles.phoneNumber}>{room.InnKeeper_Phone}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>





  );
};

// CSS Styles phân chia theo chức năng
export default ChiTietPhong;
