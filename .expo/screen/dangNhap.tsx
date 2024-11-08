import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesDn from './styleDN'; // Đảm bảo bạn đã định nghĩa các kiểu ở đây
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; // Đảm bảo bạn đã định nghĩa các loại ở đây

type DangNhapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DangNhap'
>;

type Props = {
  navigation: DangNhapScreenNavigationProp;
};

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
  Pass: string; // Thuộc tính mật khẩu
}

// Thông tin tài khoản admin tĩnh
const ADMIN_USER: UserData = {
  id: 'admin1',
  UserName: 'admin',
  hoTen: 'Người dùng admin',
  soDienThoai: '123456789',
  email: 'admin@example.com',
  role: 'admin',
  Pass: '12345', // Mật khẩu tĩnh cho admin
};

export default function DangNhap({ navigation }: Props) {
  const [UserName, setUserName] = useState<string>('');
  const [Pass, setPass] = useState<string>('');

  const handleLogin = async () => {
    if (!UserName || !Pass) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên đăng nhập và mật khẩu.');
      return;
    }

    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const usersArray: UserData[] = existingUsers ? JSON.parse(existingUsers) : [];
      
      // Thêm tài khoản admin tĩnh vào mảng người dùng
      usersArray.push(ADMIN_USER);

      // Kiểm tra thông tin tài khoản
      const user = usersArray.find(
        (u) => u.UserName === UserName && u.Pass === Pass
      );

      if (user) {
        // Lưu thông tin người dùng hiện tại vào 'userData'
        await AsyncStorage.setItem('userData', JSON.stringify(user));

        Alert.alert('Đăng nhập thành công!', 'Chào mừng bạn đã đến với trọ bịp');

        // Điều hướng dựa trên vai trò người dùng
        if (user.role === 'admin') {
          navigation.navigate('AdminHome'); // Điều hướng đến AdminHome
        } else if (user.id.startsWith('NT')) {
          navigation.navigate('Home'); // Điều hướng đến Home
        } else if (user.id.startsWith('CT')) {
          navigation.navigate('ManageAds'); // Điều hướng đến Dashboard
        }
      } else {
        Alert.alert('Lỗi', 'Tài khoản hoặc mật khẩu không đúng.');
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu người dùng', error);
      Alert.alert('Đăng nhập thất bại', 'Đã có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <View style={stylesDn.container}>
      <Text style={stylesDn.text}>Đăng Nhập</Text>
      <View style={stylesDn.inputContainer}>
        <Text style={stylesDn.label}>Tên đăng nhập</Text>
        <TextInput
          style={stylesDn.input}
          placeholder="Nhập tên đăng nhập"
          onChangeText={setUserName}
          value={UserName}
        />

        <Text style={stylesDn.label}>Mật khẩu</Text>
        <TextInput
          style={stylesDn.input}
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
          onChangeText={setPass}
          value={Pass}
        />

        <TouchableOpacity onPress={handleLogin}>
          <View style={stylesDn.button}>
            <Text style={stylesDn.buttonText}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('DangKy')}>
          <Text style={stylesDn.link}>Chưa có tài khoản? Đăng ký ngay!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
