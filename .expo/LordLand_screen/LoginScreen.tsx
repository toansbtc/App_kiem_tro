import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        if (userData.username === username && userData.password === password) {
          Alert.alert('Đăng nhập thành công!');
          navigation.navigate(userData.role === 'chủ trọ' ? 'Dashboard' : 'Home');
        } else {
          Alert.alert('Tên người dùng hoặc mật khẩu không chính xác');
        }
      } else {
        Alert.alert('Không tìm thấy tài khoản, vui lòng đăng ký trước.');
      }
    } catch (error) {
      Alert.alert('Đăng nhập thất bại!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Đăng nhập</Text>
      <TextInput
        placeholder="Tên người dùng"
        value={username}
        onChangeText={setUsername}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
      <Button title='Bạn chưa có tài khoản? Đăng ký' onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
}
