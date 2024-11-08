import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const AddUserScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const [hoTen, setHoTen] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [email, setEmail] = useState('');
  const [diaChi, setDiaChi] = useState('');
  const [soCanCuocCongDan, setSoCanCuocCongDan] = useState('');
  const [role, setRole] = useState('Người thuê'); // Mặc định là Người thuê
  const [UserName, setUserName] = useState('');
  const [Pass, setPass] = useState('');

  const handleAddUser = () => {
    // Thực hiện thêm người dùng
    Alert.alert('Thêm người dùng', 'Người dùng đã được thêm thành công!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thêm Tài Khoản</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={Pass}
        onChangeText={setPass}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
        <Text style={styles.buttonText}>Thêm Tài Khoản</Text>
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
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddUserScreen;
