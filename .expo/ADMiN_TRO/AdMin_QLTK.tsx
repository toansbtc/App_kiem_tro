import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, TextInput, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NguoiThue {
  id: string;
  hoTen: string;
  soDienThoai: string;
  email: string;
  diaChi?: string;
  soCanCuocCongDan: string;
  role: string;
  giayPhep?: string;
  UserName: string;
  Pass: string;
  notifications?: string[]; // Thêm trường thông báo
}

const UserListScreen = () => {
  const [users, setUsers] = useState<NguoiThue[]>([]);
  const [selectedUser, setSelectedUser] = useState<NguoiThue | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [notification, setNotification] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = async (id: string) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
    Alert.alert('Thông báo', 'Xóa tài khoản thành công');
  };

  const viewDetails = (user: NguoiThue) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const sendNotification = async () => {
    if (selectedUser) {
      const updatedUsers = users.map(user => {
        if (user.id === selectedUser.id) {
          const newNotifications = user.notifications ? [...user.notifications, notification] : [notification];
          return { ...user, notifications: newNotifications };
        }
        return user;
      });
      setUsers(updatedUsers);
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
      Alert.alert('Thông báo', `Thông báo đã được gửi đến ${selectedUser.UserName}`);
      setNotification('');
      setModalVisible(false);
    }
  };
  

  const updateUser = async () => {
    if (selectedUser) {
      const updatedUsers = users.map(user => (user.id === selectedUser.id ? selectedUser : user));
      setUsers(updatedUsers);
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
      Alert.alert('Thông báo', 'Cập nhật tài khoản thành công');
      setModalVisible(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>Quản Lý Tài Khoản</Text>

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>ID: {item.id}</Text>
            <Text>Username: {item.UserName}</Text>
            <Text>Role: {item.role}</Text>
            <TouchableOpacity onPress={() => viewDetails(item)} style={{ backgroundColor: '#008080', padding: 5, marginTop: 5, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Chi Tiết</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteUser(item.id)} style={{ backgroundColor: '#FF6347', padding: 5, marginTop: 5, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Modal để hiển thị chi tiết người dùng và chỉnh sửa */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Chi Tiết Tài Khoản</Text>
            {selectedUser && (
              <>
                <Text>ID: {selectedUser.id}</Text>
                <TextInput
                  placeholder="Họ Tên"
                  value={selectedUser.hoTen}
                  onChangeText={text => setSelectedUser({ ...selectedUser, hoTen: text })}
                  style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                />
                <TextInput
                  placeholder="Số Điện Thoại"
                  value={selectedUser.soDienThoai}
                  onChangeText={text => setSelectedUser({ ...selectedUser, soDienThoai: text })}
                  style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                />
                <TextInput
                  placeholder="Email"
                  value={selectedUser.email}
                  onChangeText={text => setSelectedUser({ ...selectedUser, email: text })}
                  style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                />
                
                {selectedUser.id.startsWith('NT') ? null : (
                  <>
                    <TextInput
                      placeholder="Địa Chỉ"
                      value={selectedUser.diaChi}
                      onChangeText={text => setSelectedUser({ ...selectedUser, diaChi: text })}
                      style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                    />
                    <TextInput
                      placeholder="Số Căn Cước Công Dân"
                      value={selectedUser.soCanCuocCongDan}
                      onChangeText={text => setSelectedUser({ ...selectedUser, soCanCuocCongDan: text })}
                      style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                    />
                    <TextInput
                      placeholder="Giấy Phép"
                      value={selectedUser.giayPhep}
                      onChangeText={text => setSelectedUser({ ...selectedUser, giayPhep: text })}
                      style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                    />
                  </>
                )}
                
                <TextInput
                  placeholder="Cập nhật tên người dùng"
                  value={selectedUser.UserName}
                  onChangeText={text => setSelectedUser({ ...selectedUser, UserName: text })}
                  style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                />
                <TextInput
                  placeholder="Cập nhật mật khẩu"
                  value={selectedUser.Pass}
                  onChangeText={text => setSelectedUser({ ...selectedUser, Pass: text })}
                  style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginBottom: 10 }}>
                  <Text style={{ color: 'blue', textAlign: 'right' }}>
                    {showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  </Text>
                </TouchableOpacity>

                <TextInput
                  placeholder="Nhập thông báo"
                  value={notification}
                  onChangeText={setNotification}
                  style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 5 }}
                  multiline={true} // Cho phép nhập nhiều dòng
                  numberOfLines={4} // Đặt số dòng hiển thị mặc định
                />
                <TouchableOpacity onPress={sendNotification} style={{ backgroundColor: '#4169E1', padding: 8, marginVertical: 5, borderRadius: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>Gửi Thông Báo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={updateUser} style={{ backgroundColor: '#008080', padding: 8, marginVertical: 5, borderRadius: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>Cập Nhật</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={{ backgroundColor: '#FF6347', padding: 8, marginVertical: 5, borderRadius: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>Đóng</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserListScreen;
