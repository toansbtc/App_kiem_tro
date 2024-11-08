import { StyleSheet } from "react-native";

//------------------------------------------------------------------CSS-------------------
// Styles cho component
const styleLayOut = StyleSheet.create({
    container: {
      flex: 1, // Chiếm toàn bộ chiều cao màn hình
    },
    topBar: {
      height: 41,
      backgroundColor: '#333333', // Màu nền cho topBar
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    headBar: {
      height: 77,
      backgroundColor: '#66CC99', // Màu nền cho headBar
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      position: 'absolute',
      top: 41,
      left: 0,
      right: 0,
    },
    titleContainer: {
      height: 96,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', // Giữ nguyên
      top: 90,
      left: 0,
      right: 0,
      zIndex: 1, // Đảm bảo tiêu đề luôn nằm trên cùng
    },
    headBarTextContainer: {
      backgroundColor: '#0066FF', // Màu nền cho thanh tiêu đề
      paddingVertical: 5,
      width: '100%',
      alignItems: 'center',
    },
    headBarText: {
      color: '#FFFFCC',
      fontSize: 22,
      fontWeight: '900',
      textAlign: 'center',
      paddingHorizontal: 10,
    },
    searchBar: {
      height: 50,
      width: '90%', // Chiều rộng của thanh tìm kiếm
      backgroundColor: '#fff',
      borderRadius: 20, // Bo góc
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      overflow: 'hidden',
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#66CC99', // Màu viền
      marginBottom: 1,
    },
    searchText: {
      color: '#000',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 5,
      flex: 1, // Ô tìm kiếm chiếm toàn bộ không gian còn lại
    },
    iconSearch: {
      width: 30,
      height: 28,
      resizeMode: 'contain', // Giữ tỷ lệ khi thay đổi kích thước
      marginRight: 10,
    },
    iconClose: {
      width: 30,
      height: 22,
      resizeMode: 'contain',
    },
    iconFilter: {
      width: 50,
      height: 35,
      resizeMode: 'contain',
      marginLeft: 4,
    },
    content: {
      flex: 1,
      paddingTop: 50, // Có thể tăng lên nếu cần thiết để tạo khoảng cách với tiêu đề
      padding: 0,
      marginTop: 96, // Tạo khoảng cách giữa content và tiêu đề
    },
    footer: {
      height: 65,
      backgroundColor: '#33CCFF', // Màu nền của footer
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 15,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
    footerIcon: {
      width: 45,
      height: 33,
      resizeMode: 'contain',
      borderWidth: 3,
      borderColor: '#33CCFF',
      borderRadius: 10,
      shadowColor: '#0099CC', // Đổ bóng
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, // Tạo hiệu ứng nổi cho icon
    },
    s_RoomContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: 80,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#33CCFF',
    },
    s_RoomIcon: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      position: 'absolute',
      bottom: 35,
    },
    // Styles cho modal bộ lọc
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
    },
    listItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    modalButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });


export default styleLayOut;