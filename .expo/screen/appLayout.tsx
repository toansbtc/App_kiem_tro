import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableWithoutFeedback } from 'react-native';

const AppLayout = ({ children, title }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Xử lý sự kiện nhấn vào thanh tìm kiếm
  const toggleSearchBar = () => {
    setIsFocused(!isFocused);
  };

  return (
    <View style={styles.container}>
      {/* Đè lên StatusBar */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Thanh top bar */}
      <View style={styles.topBar}></View>

        {/* Thanh headbar */}
    <View style={styles.headBar}>
      <TouchableWithoutFeedback onPress={toggleSearchBar}>
        <View style={styles.searchBar}>
          <Image source={require('../../assets/search_Icon.png')} style={styles.iconSearch} />
          <Text style={styles.searchText}>Tìm Phòng giá bịp tại đây...</Text>
          <Image source={require('../../assets/close_Icon.png')} style={styles.iconClose} />
        </View>
      </TouchableWithoutFeedback>
      <Image source={require('../../assets/filter_Icon.png')} style={styles.iconFilter} />
    </View>

      {/* Văn bản tiêu đề nằm ở giữa các trang */}
      <View style={styles.titleContainer}>
        <View style={styles.headBarTextContainer}>
          <Text style={styles.headBarText}>{title}</Text>
        </View>
      </View>

      {/* Nội dung chính */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Footer */}
    <View style={styles.footer}>
      <Image source={require('../../assets/home_Icon.png')} style={styles.footerIcon} />
      <Image source={require('../../assets/chat_Icon.png')} style={styles.footerIcon} />
      <View style={styles.s_RoomContainer}>
        <Image source={require('../../assets/searchRoom_Icon.png')} style={styles.s_RoomIcon} />
      </View>
      <Image source={require('../../assets/notifications_Icon.png')} style={styles.footerIcon} />
      <Image source={require('../../assets/acccount_Icon.png')} style={styles.footerIcon} />
    </View>

    </View>
  );
};


  //***********************************|PHẦN CSS|******************************************************//
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    //--------------------------top bar-----------------------------------------//
    topBar: {
      height: 41, 
      backgroundColor: '#333333', 
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingHorizontal: 15, 
      position: 'absolute', 
      top: 0, 
      left: 0,
      right: 0,
    },

    //---------------------- head bar --------------------------//
    headBar: {
      height: 77, // Giảm chiều cao của thanh headBar
      backgroundColor: '#66CC99', 
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingHorizontal: 15, 
      position: 'absolute', 
      top: 41, 
      left: 0,
      right: 0,
    },
    titleContainer: {
      height: 96, // Điều chỉnh chiều cao cho phù hợp
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'absolute',
      top: 90, // Điều chỉnh vị trí để tránh bị che
      left: 0,
      right: 0,
    },
    //thanh bọc chữ tiêu đề
    headBarTextContainer: {
      backgroundColor: '#0066FF', 
      paddingVertical: 5, 
      width: '100%', // Thanh bọc sẽ trải full ngang màn hình
      alignItems: 'center', // Căn nội dung bên trong theo chiều ngang
    },
    headBarText: {
      color: '#FFFFCC', 
      fontSize: 22,
      fontWeight: '900',
      textAlign: 'center', // Căn chữ giữa theo chiều ngang
      paddingHorizontal: 10, // Khoảng cách padding bên trong để chữ không bị dính vào viền
    },


    //---thanh search------//
    searchBar: {
      height: 50,
      width: 380, 
      backgroundColor: '#fff',
      borderRadius: 20,
      justifyContent: 'flex-start', // Đặt nội dung sang bên trái
      alignItems: 'center', // Căn nội dung theo chiều dọc
      flexDirection: 'row',
      overflow: 'hidden', 
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#66CC99',
      marginBottom: 1
    },
    searchText: {
      color: '#000', 
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 5, // Khoảng cách từ icon đến chữ
    },
    iconSearch: {
      width: 30,            
      height: 28,    
      resizeMode: 'contain', 
      marginRight: 10,     
  
    },
    iconClose: {
      width: 30,
      height: 22,
      resizeMode: 'contain',
      marginLeft:62,
    },
    
    
    
    iconFilter: {
      width: 50,            
      height: 35,           
      resizeMode: 'contain', 
      marginRight: 10,      
    },
    
      //--------------------------------conten------------------------------//
      content: {
        flex: 1,
        paddingTop: 150, // Đảm bảo nội dung không bị che bởi thanh
        padding: 10,
      },



      //----------------------------footer-------------------------------//
    
    
    footer: {
      height: 65,
      backgroundColor: '#33CCFF', // Màu xanh nhạt cho footer
      justifyContent: 'space-between', // Căn đều các mục trong footer
      alignItems: 'center', // Căn giữa nội dung theo chiều dọc
      flexDirection: 'row', // Sắp xếp các mục trong footer theo hàng ngang
      paddingHorizontal: 15, // Khoảng cách padding cho các mục bên trong
      borderTopWidth: 1,
      borderTopColor: '#ddd', // Đường viền trên nhạt
    },

    footerIcon: {
      width: 45,
      height: 33,
      resizeMode: 'contain',
      borderWidth: 3,
      borderColor: '#33CCFF', // Màu viền nổi bật
      borderRadius: 10,
      shadowColor: '#0099CC',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
  },
  

  s_RoomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Để có thể dùng absolute cho biểu tượng
    width: 80, // Kích thước vòng tròn
    height: 100, // Kích thước vòng tròn
    borderRadius: 50, // Để tạo hình tròn
    backgroundColor: '#33CCFF', // Màu nền cho vòng tròn
    
  },
  
  s_RoomIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute', // Để đưa icon lên phía trên
    bottom: 35 // Điều chỉnh vị trí cho phù hợp
  },
  


  });

  export default AppLayout;
