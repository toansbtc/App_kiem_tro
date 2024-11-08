// ChatNguoiThue.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import layout1 from './layout1';
import Layout1 from './layout1';
interface Message {
  sender: string; // ID người gửi
  content: string; // Nội dung tin nhắn
  timestamp: string; // Thời gian gửi
}
interface LayoutProps {
  title: string;
  navigation: any; // hoặc kiểu dữ liệu cụ thể hơn nếu bạn có
  children: React.ReactNode; // chắc chắn rằng bạn đã định nghĩa children
}

const ChatNguoiThue = ({ navigation }: { navigation: any }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [innKeeperPhone, setInnKeeperPhone] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Lấy số điện thoại chủ trọ từ thông tin phòng
      const roomData = JSON.parse(await AsyncStorage.getItem('roomData') || '[]');
      const roomInfo = roomData.find(room => room.id === '1'); // Thay '1' bằng id phòng cụ thể
      setInnKeeperPhone(roomInfo?.InnKeeper_Phone);
    };

    fetchData();
  }, []);

  const handleSendMessage = async () => {
    const newMessage: Message = {
      sender: 'thue', // ID người thuê
      content: messageInput,
      timestamp: new Date().toISOString(),
    };

    // Cập nhật danh sách tin nhắn
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput('');

    // Cập nhật thông báo
    const currentUserData = await AsyncStorage.getItem('userData');
    const currentUser = JSON.parse(currentUserData || '{}');
    const notifications = currentUser.notifications || [];
    notifications.push(`Tin nhắn từ ${currentUser.UserName}: ${newMessage.content}`);
    await AsyncStorage.setItem('userData', JSON.stringify({ ...currentUser, notifications }));
  };

  return (
    <Layout1 title="Chat" navigation={navigation}>
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={item.sender === 'thue' ? styles.sender : styles.receiver}>
                {item.sender === 'thue' ? 'Bạn: ' : 'Chủ trọ: '}
                {item.content}
              </Text>
            </View>
          )}
        />
        <TextInput
          value={messageInput}
          onChangeText={setMessageInput}
          placeholder="Nhập tin nhắn..."
          style={styles.input}
        />
        <Button title="Gửi" onPress={handleSendMessage} />
      </View>
    </Layout1>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  messageContainer: {
    marginBottom: 10,
  },
  sender: {
    alignSelf: 'flex-end',
    backgroundColor: '#cfe9ff',
    padding: 10,
    borderRadius: 10,
  },
  receiver: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f0f0',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});

export default ChatNguoiThue;
