// InnKeeperChat.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Message = {
  id: string;
  text: string;
  sender: string;
  status: 'sent' | 'delivered' | 'read';
};

type InnKeeperChatProps = {
  route: {
    params?: {
      tenantPhone?: string;
    };
  };
};

const InnKeeperChat: React.FC<InnKeeperChatProps> = ({ route }) => {
  // Kiểm tra nếu tenantPhone tồn tại, nếu không đặt thành chuỗi rỗng
  const tenantPhone = route?.params?.tenantPhone || '';
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  // Nếu tenantPhone không tồn tại, không thiết lập storageKey
  const storageKey = tenantPhone ? `@messages_${tenantPhone}` : '';

  const loadMessages = async () => {
    try {
      if (storageKey) {
        const jsonValue = await AsyncStorage.getItem(storageKey);
        if (jsonValue) setMessages(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Error loading messages', e);
    }
  };

  const saveMessages = async (messages: Message[]) => {
    try {
      if (storageKey) {
        await AsyncStorage.setItem(storageKey, JSON.stringify(messages));
      }
    } catch (e) {
      console.error('Error saving messages', e);
    }
  };

  const handleSend = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'innKeeper',
        status: 'sent',
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      saveMessages(updatedMessages);
      setInputMessage('');
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  // Hiển thị thông báo lỗi nếu tenantPhone không tồn tại
  if (!tenantPhone) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Không có thông tin người thuê.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat với Người Thuê</Text>

      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'innKeeper' ? styles.innKeeperMessage : styles.userMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.statusText}>
              {item.status === 'sent' && 'Đã gửi'}
              {item.status === 'delivered' && 'Đã nhận'}
              {item.status === 'read' && 'Đã xem'}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tin nhắn..."
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <Button title="Gửi" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageContainer: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 5,
  },
  innKeeperMessage: {
    backgroundColor: '#e6e6e6',
    alignSelf: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#d1e7dd',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default InnKeeperChat;
