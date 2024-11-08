import { StyleSheet } from 'react-native';
   //----------------------------- CSS Styles phân chia theo chức năng----------------------------//

  
   const styles = StyleSheet.create({
    // cuộn trang
    scrollView: {
      flex: 1, // Đảm bảo cuộn toàn bộ nội dung
      padding: 10, // Khoảng cách với các cạnh màn hình
    },
    // Container chính
    container: {
      flex: 1,
      padding: 10,
    },

    // Ảnh phòng
    image: {
      width: '110%',
      height: 200,
      
    },

    // Thông tin chung của phòng (Tên, giá, số phòng trống, địa chỉ)
    infoContainer: {
      backgroundColor: '#f9f9f9', // Màu nền của khung
      borderWidth: 1, // Đường viền
      borderColor: '#ccc', // Màu của đường viền
      borderRadius: 8, // Bo góc
      padding: 16, // Khoảng cách bên trong
      marginTop: 10, // Khoảng cách với phần trên
      position: 'relative', // Để có thể tạo mũi tên
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    price: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#e74c3c',
      marginVertical: 10,
    },
    info: {
      fontSize: 16,
    },
    availableRooms: {
      fontSize: 16,
      color: '#27ae60',
      marginTop: 10,
    },
    location: {
      fontSize: 16,
      color: '#34495e',
      marginTop: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5, // Khoảng cách giữa các dòng

    },
    icon: {
      width: 20, // Kích thước chiều rộng của icon
      height: 20, // Kích thước chiều cao của icon
      marginRight: 10, // Khoảng cách giữa icon và text
      marginTop:10,
    },

    // Chi phí dự kiến (Điện, nước, wifi, dịch vụ)
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: -7,
      marginTop: 17,
    },
    groupBox: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#CFCFCF',
      width: 404,
      marginLeft: -15,
    },
    costContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    costBox: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      marginVertical: 5,
      width: '49%',
    },
    label: {
      fontSize: 16,
      color: '#333',
    },
    cost: {
      fontSize: 16,
      color: '#e74c3c',
      fontWeight: 'bold',
    },

    //đường kẻ ngang
    separator: {
      borderBottomWidth: 1,  // Độ dày của đường kẻ
      borderBottomColor: 'rgba(0, 0, 0, 0.6)',  // Màu đen nhạt với độ mờ (transparency)
      shadowColor: '#000',  // Màu đổ bóng
      shadowOffset: { width: 0, height: 2 },  // Hướng của đổ bóng (chỉ xuống dưới)
      shadowOpacity: 0.2,  // Độ mờ của đổ bóng
      shadowRadius: 2,  // Bán kính làm mờ đổ bóng
      elevation: 2,  // Độ cao để làm cho đường kẻ có cảm giác nổi lên (chỉ áp dụng cho Android)
      marginVertical: 15,  // Khoảng cách trên và dưới
    },
    // Thông tin chi tiết của phòng (Các tiện ích: gác, cửa sổ, tủ lạnh,...)
    
    detailsContainer: {
      marginVertical: 10,
    },
    detailsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    detailRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    details: {
      width: '33%',
      marginBottom: 10,
      fontWeight: 'bold',  // Chữ in đậm cho phần mô tả
      color: 'black',      // Màu đen cho phần mô tả
    },
    hasItem: {
      fontWeight: 'normal',  // Không in đậm phần "Có"
      color: 'green',        // Màu xanh cho "Có"
    },
    btItem: {
      fontWeight: 'normal',  // Không in đậm phần "Có"
      color: 'black',        // Màu xanh cho "Có"
    },
    noItem: {
      fontWeight: 'normal',  // Không in đậm phần "Không"
      color: 'red',          // Màu đỏ cho "Không"
    },
    // code nút dưới thông tin 
    // Container chứa thông tin thêm
    additionalInfoContainer: {
      marginTop: 20, // Khoảng cách trên với groupBox
      padding: 10,
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    

    // Tiêu đề của phần thông tin thêm
    additionalTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 20,

    },

    // Container cho các nút hoặc thông tin thêm
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    // Phong cách của nút
    button1: {
    flexDirection: 'row', // Đặt hướng cho button là hàng ngang
    alignItems: 'center', // Căn giữa nội dung theo chiều dọc
    padding: 10,
    backgroundColor: '#2196F3', // Màu nền button
    borderRadius: 5,
    marginBottom: 10, // Khoảng cách giữa các button
    },

    button: {
      flexDirection: 'row', // Đặt hướng cho button là hàng ngang
      alignItems: 'center', // Căn giữa nội dung theo chiều dọc
      padding: 12,
      backgroundColor: 'transparent', // Màu nền button thành trong suốt
      borderColor: '#2196F3', // Màu viền của button
      borderWidth: 2, // Độ dày của viền
      borderRadius: 5,
      marginBottom: 10, // Khoảng cách giữa các button
      width:110,
      marginRight: 35,
      marginLeft:20,
      height:70,
    },
    
    phoneNumber: {
      fontSize: 12, // kích thước cho số điện thoại
      color: 'blue', // có thể thay đổi màu sắc theo ý muốn
      marginTop: 5, // tạo khoảng cách giữa chữ "Phone" và số điện thoại
      marginRight: 15,
    },

    phoneContainer: {
      alignItems: 'flex-start', // Căn chỉnh về bên trái
      marginTop: 10, // Khoảng cách nếu cần
    },


    // Phong cách của text trong nút
    buttonText: {
      color: '#2196F3', // Màu chữ
      fontSize: 17,
      textAlign: 'center',
    },
      // Phong cách của text trong nút
      buttonText1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20
      },
      buttonImage: {
        width: 20, // Chiều rộng hình ảnh
        height: 20, // Chiều cao hình ảnh
      }, 

    toggleButton: {
      fontSize: 17,
      color: '#3498db',
      marginTop: 10,
    },



    roomList: {
      marginTop: 10,
    },
    roomItem: {
      fontSize: 16,
      marginVertical: 2,
    },
      // -------------danh sách phòng------------//
    // phong cách của nút danh sách
    arrow: {
      position: 'absolute',
      top: -10, // Vị trí của mũi tên
      left: '50%', // Căn giữa
      marginLeft: -10, // Để căn chính xác
      width: 0,
      height: 0,
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#f9f9f9', // Màu nền của khung
    },

    additionalInfoContainer1: {
      padding: 16,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3, // Cho Android
    },
    toggleButton1: {
      fontSize: 16,
      color: '#007BFF',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    roomList1: {
      marginTop: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    roomGrid1: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    roomItem1: {
      width: '48%', // Chiếm 48% chiều rộng để có hai phòng trên mỗi hàng
      marginBottom: 10,
      padding: 15,
      backgroundColor: '#e7f3ff',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#007BFF',
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    tabButton: {
      padding: 10,
      backgroundColor: '#ddd', // Màu nền cho tab
      borderRadius: 5,
    },
    activeTab: {
      backgroundColor: '#3498db', // Màu nền cho tab đang được chọn
    },
    tabText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    contentContainer: {
      padding: 20,
      backgroundColor: '#f9f9f9', // Màu nền cho nội dung
      borderRadius: 5,
    },
    //-----bình luận
  comment: {
      marginBottom: 10, // Space between comments
      fontSize: 16, // Font size for the comments
  },
   // slider------------------------------
   sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  arrowButton: {
    padding: 0,
    backgroundColor: 'lightgrey', // Background color for visibility
    borderRadius: 5,
  },
  arrowText: {
    fontSize: 24,
    color: 'black', // Make sure the color contrasts with the background
  },
  imageContainer: {
    position: 'relative',
    // Đặt chiều cao và chiều rộng cho hình ảnh
    width: '100%',
    height: 200, // Chiều cao của hình ảnh
  },
  nextButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -30 }],
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Nền mờ hơn
    padding: 10,
    borderRadius: 5,
  },
 
  sliderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: '40%',
  },
  navButton: {
    backgroundColor: 'rgba(221, 221, 221, 0.45)', // Nền mờ hơn
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    padding: 10,
  backgroundColor: 'rgba(180, 201, 221, 0.4)',
  borderRadius: 5,
  },
 
 
  });

 


  export default styles;  // Đảm bảo xuất khẩu đúng cách