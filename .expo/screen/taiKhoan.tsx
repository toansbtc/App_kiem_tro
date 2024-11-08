// TaiKhoan.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Định nghĩa interface cho userData
interface UserData {
  id: string;
  UserName: string;
  hoTen: string;
  soDienThoai: string;
  email: string;
  soCanCuocCongDan?: string;
  diaChi?: string;
  giayPhep?: string;
  role: string;
}

export default function TaiKhoan({ navigation }: { navigation: any }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        console.log('Fetched userData:', data); // Debugging
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu người dùng', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData'); // Xóa thông tin người dùng hiện tại
      Alert.alert('Đăng xuất thành công');
      navigation.navigate('DangNhap'); // Đảm bảo tên màn hình khớp chính xác
    } catch (error) {
      console.error('Lỗi khi đăng xuất', error);
      Alert.alert('Lỗi', 'Đã có lỗi xảy ra khi đăng xuất.');
    }
  };

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Đang tải thông tin tài khoản...</Text>
      </View>
    );
  }

  const isChuTro = userData.id.startsWith('CT'); // Kiểm tra nếu là chủ trọ

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tài Khoản</Text>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/ảnh login.jpg')}
            style={styles.logo}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>ID: {userData.id}</Text>
          <Text style={styles.label}>Tên đăng nhập: {userData.UserName}</Text>
          <Text style={styles.label}>Họ tên: {userData.hoTen}</Text>
          <Text style={styles.label}>Số điện thoại: {userData.soDienThoai}</Text>
          <Text style={styles.label}>Email: {userData.email}</Text>
          {isChuTro && ( // Chỉ hiển thị thông tin này nếu là chủ trọ
            <>
              <Text style={styles.label}>CCCD: {userData.soCanCuocCongDan}</Text>
              <Text style={styles.label}>Địa chỉ: {userData.diaChi}</Text>
              <Text style={styles.label}>Giấy phép: {userData.giayPhep}</Text>
            </>
          )}
        </View>
        <Button
          title="Đăng xuất"
          onPress={handleLogout}
          color="#FF3B30"
        />
        <Button
          title="Quay lại"
          onPress={() => navigation.goBack()} // Quay lại trang trước đó
          color="#007BFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFDFDF',
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  loginContainer: {
    height: 500,
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    paddingBottom: 5,
  },
});
