import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

// Định nghĩa kiểu UserProps
interface UserProps {
  id: string;
  hoTen: string;
  soDienThoai: string;
  email: string;
  diaChi: string;
  soCanCuocCongDan: string;
  role: string; // Giả sử role có thể là 'chuTro', 'thueTro', ...
  UserName: string;
  Pass: string;
  giayPhep?: string; // Giấy phép có thể không cần thiết cho tất cả người dùng
}

// Định nghĩa kiểu cho ParamList
type RootStackParamList = {
  EditUser: { user: UserProps };
  AdminHome: undefined;
  QLtk: undefined;
  QLTin: undefined;
  QLNoiDung_heThong: undefined;
  QLBC_PH: undefined;
  QLthanhtoangoiDV: undefined;
  AddUser: undefined;
};

// Định nghĩa EditUserScreen với Props rõ ràng
const EditUserScreen: React.FC<{
  navigation: NavigationProp<RootStackParamList, 'EditUser'>; // Điều chỉnh NavigationProp
  route: RouteProp<RootStackParamList, 'EditUser'>;
}> = ({ navigation, route }) => {
  const { user } = route.params;

  const [hoTen, setHoTen] = useState(user.hoTen);
  const [soDienThoai, setSoDienThoai] = useState(user.soDienThoai);
  const [email, setEmail] = useState(user.email);
  const [diaChi, setDiaChi] = useState(user.diaChi);
  const [soCanCuocCongDan, setSoCanCuocCongDan] = useState(user.soCanCuocCongDan);
  const [UserName, setUserName] = useState(user.UserName);
  const [Pass, setPass] = useState(user.Pass);
  const [giayPhep, setGiayPhep] = useState(user.giayPhep || ''); // Khởi tạo giá trị giấy phép
  const [showPassword, setShowPassword] = useState(false); // Trạng thái hiển thị mật khẩu

  const handleEditUser = () => {
    Alert.alert('Cập nhật người dùng', 'Người dùng đã được cập nhật thành công!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chỉnh Sửa Tài Khoản</Text>
      <TextInput
        style={styles.input}
        placeholder="Họ tên"
        value={hoTen}
        onChangeText={setHoTen}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={soDienThoai}
        onChangeText={setSoDienThoai}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ"
        value={diaChi}
        onChangeText={setDiaChi}
      />
      <TextInput
        style={styles.input}
        placeholder="Số căn cước công dân"
        value={soCanCuocCongDan}
        onChangeText={setSoCanCuocCongDan}
      />
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        value={UserName}
        onChangeText={setUserName}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]} // Giữ nguyên kích thước
          placeholder="Mật khẩu"
          secureTextEntry={!showPassword} // Hiện mật khẩu khi showPassword là true
          value={Pass}
          onChangeText={setPass}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>{showPassword ? 'Ẩn' : 'Hiện'}</Text>
        </TouchableOpacity>
      </View>
      {/* Hiển thị trường Giấy phép chỉ nếu người dùng là chủ trọ */}
      {user.role === 'chuTro' && ( // Kiểm tra vai trò
        <TextInput
          style={styles.input}
          placeholder="Giấy phép"
          value={giayPhep}
          onChangeText={setGiayPhep}
        />
      )}
      <TouchableOpacity style={styles.editButton} onPress={handleEditUser}>
        <Text style={styles.buttonText}>Cập Nhật Tài Khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    flex: 1, // Đảm bảo ô mật khẩu giữ nguyên kích thước
  },
  showPasswordText: {
    color: '#4CAF50',
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default EditUserScreen;
