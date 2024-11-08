import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface AdminHomeScreenProps {
  navigation: NavigationProp<any>; // Điều chỉnh loại này nếu cần dựa trên cấu trúc điều hướng của bạn
}

const AdminHomeScreen: React.FC<AdminHomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trang Chủ Admin</Text>

      {/* Group Box: Quản lý tài khoản người dùng */}
      <View style={styles.groupBox}>
        <Text style={styles.groupHeader}>Quản lý tài khoản</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('QLtk')} // Điều hướng đến UserManagement
        >
          {/* Thêm icon hình ảnh user.png */}
          <Image source={require('../../assets/User.png')} style={styles.icon} /> 
          <Text style={styles.buttonText}>Người dùng</Text>
        </TouchableOpacity>
      </View>
      
      {/* Group Box: QQuản lý thanh toán và gói dịch vụ*/}
      <View style={styles.groupBox}>
        <Text style={styles.groupHeader}>Quản lý gói dịch vụ</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('QLthanhtoangoiDV')} // Điều hướng đến UserManagement
        >
          {/* Thêm icon hình ảnh user.png */}
          <Image source={require('../../assets/GoiDV_Icon.png')} style={styles.icon} /> 
          <Text style={styles.buttonText}>Các gói dịch vụ</Text>
        </TouchableOpacity>
      </View>

      {/* Group Box: Quản lý tin đăng trọ */}
      <View style={styles.groupBox}>
        <Text style={styles.groupHeader}>Quản lý tin đăng trọ</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('QLTin')}
        >
          {/* Thêm icon cho phần này nếu cần */}
          <Image source={require('../../assets/commodation_Icon.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Tin đăng trọ</Text>
        </TouchableOpacity>
      </View>

      {/* Group Box: Quản lý báo cáo và phản hồi */}
      <View style={styles.groupBox}>
        <Text style={styles.groupHeader}>Quản lý phản hồi</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ChatAdmin')}
        >
           {/* Thêm icon hình ảnh user.png */}
           <Image source={require('../../assets/feedback_Icon.png')} style={styles.icon} /> 
          <Text style={styles.buttonText}> Phản hồi người dùng</Text>
        </TouchableOpacity>
      </View>

      {/* Group Box: Quản lý nội dung và hệ thống */}
      <View style={styles.groupBox}>
        <Text style={styles.groupHeader}>Quản lý Thanh toán</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('QLNoiDung_heThong')}
        >
           {/* Thêm icon hình ảnh user.png */}
           <Image source={require('../../assets/content_Icon.png')} style={styles.icon} /> 
          <Text style={styles.buttonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  groupBox: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  groupHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  button: {
    flexDirection: 'row', // Để icon và text nằm ngang
    alignItems: 'center', // Căn giữa icon và text
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 15, // Thêm padding ngang để button đẹp hơn
  },
  icon: {
    width: 34, // Chiều rộng của icon
    height: 24, // Chiều cao của icon
    marginRight: 10, // Khoảng cách giữa icon và text
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',    
  },
});

export default AdminHomeScreen;
