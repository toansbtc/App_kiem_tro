import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const [role, setRole] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async () => {
    if (!role) {
      Alert.alert('Vui lòng chọn vai trò!');
      return;
    }

    try {
      const userData = {
        username,
        password,
        role,
        email: role === 'người thuê trọ' ? email : undefined,
        phoneNumber: role === 'người thuê trọ' ? phoneNumber : undefined,
        bankAccount: role === 'chủ trọ' ? bankAccount : undefined,
        address: role === 'chủ trọ' ? address : undefined,
      };

      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Đăng ký thành công!');
      navigation.navigate('LoginScreen'); // Navigate to login after registration
    } catch (error) {
      Alert.alert('Đăng ký thất bại!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Đăng ký</Text>
      <Text>Chọn vai trò:</Text>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => setRole('chủ trọ')} style={{ marginRight: 20 }}>
          <Text style={{ color: role === 'chủ trọ' ? 'blue' : 'black' }}>Chủ trọ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRole('người thuê trọ')}>
          <Text style={{ color: role === 'người thuê trọ' ? 'blue' : 'black' }}>Người thuê trọ</Text>
        </TouchableOpacity>
      </View>

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

      {role === 'người thuê trọ' && (
        <>
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
          <TextInput placeholder="Số điện thoại" value={phoneNumber} onChangeText={setPhoneNumber} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
        </>
      )}
      
      {role === 'chủ trọ' && (
        <>
          <TextInput placeholder="Số tài khoản ngân hàng" value={bankAccount} onChangeText={setBankAccount} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
          <TextInput placeholder="Địa chỉ căn hộ/tòa nhà" value={address} onChangeText={setAddress} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
        </>
      )}

      <Button title="Đăng ký" onPress={handleRegister} />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue', textAlign: 'center' }}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}
