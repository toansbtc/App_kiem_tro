import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout1 from './layout1'; // Giả định layout1 trong cùng thư mục
import { NavigationProp } from '@react-navigation/native'; // Nhập kiểu Navigation nếu bạn dùng React Navigation

interface User {
  UserName: string;
  notifications?: string[];
}

interface ThongBaoProps {
  navigation: NavigationProp<any>;
}

const ThongBao: React.FC<ThongBaoProps> = ({ navigation }) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        const users: User[] = JSON.parse(storedUsers);
        const currentUserData = await AsyncStorage.getItem('userData');
        const currentUser = currentUserData ? JSON.parse(currentUserData) : null;
        const username = currentUser?.UserName || ''; // Lấy tên đăng nhập từ userData

        const user = users.find((u: User) => u.UserName === username);
        if (user && user.notifications) {
          setNotifications(user.notifications);
        }
      }
    };
    fetchNotifications();
  }, []);

  // Hàm điều hướng đến màn hình chi tiết thông báo
  const handlePressNotification = (notification: string) => {
    navigation.navigate('ThongBaoChiTiet', { notification });
  };

  return (
    <Layout1 title="Thông Báo" navigation={navigation}>
      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => index.toString()} // Đảm bảo dùng chỉ số vì thông báo có thể không có id
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePressNotification(item)} style={styles.notificationItem}>
              <Text style={styles.notificationText}>
                {item.length > 50 ? item.slice(0, 50) + '...' : item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Layout1>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ThongBao;
