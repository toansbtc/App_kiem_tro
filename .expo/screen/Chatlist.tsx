import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Sửa đổi import
import Layout1 from './layout1'; // Nhập layout

type InnKeeper = {
  name: string;
  phone: string;
};

type ChatParams = {
  innKeeperName: string;
  innKeeperPhone: string;
};

type RootStackParamList = {
  ChatList: undefined; 
  Chat: ChatParams; 
};

// Định nghĩa kiểu NavigationProps với StackNavigationProp
type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ChatList'>;
};

const ChatList: React.FC<NavigationProps> = ({ navigation }) => { // Thêm navigation vào props
  const [innKeepers, setInnKeepers] = useState<InnKeeper[]>([]);

  // Hàm lưu danh sách chủ trọ
  const saveInnKeepers = async (innKeepers: InnKeeper[]) => {
    try {
      await AsyncStorage.setItem('@innKeeperList', JSON.stringify(innKeepers));
      console.log('Đã lưu danh sách chủ trọ:', innKeepers);
    } catch (e) {
      console.error('Error saving inn keepers', e);
    }
  };

  // Hàm tải danh sách chủ trọ
  const loadChatList = async () => {
    try {
      const storedInnKeepers = await AsyncStorage.getItem('@innKeeperList');
      if (storedInnKeepers) {
        const parsedInnKeepers = JSON.parse(storedInnKeepers);
        console.log('Đã tải danh sách chủ trọ:', parsedInnKeepers);
        setInnKeepers(parsedInnKeepers);
      }
    } catch (e) {
      console.error('Lỗi khi tải danh sách chủ trọ', e);
    }
  };

  useEffect(() => {
    loadChatList();
  }, []);

  useEffect(() => {
    console.log('Danh sách tin nhắn', innKeepers);
  }, [innKeepers]);

  // Hàm để render mỗi item trong danh sách
  const renderItem = ({ item }: { item: InnKeeper }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('Chat', { innKeeperName: item.name, innKeeperPhone: item.phone })} // Không cần ép kiểu nữa
    >
      <Text style={styles.listText}>{item.name}</Text>
      <Text style={styles.listText}>{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <Layout1 title="Danh sách chủ trọ hoặc phòng" navigation={navigation}>
      <View style={styles.container}>
        <FlatList
          data={innKeepers}
          keyExtractor={(item) => item.phone}
          renderItem={renderItem}
        />
      </View>
    </Layout1>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4FF',
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listText: {
    fontSize: 18,
  },
});

export default ChatList;
