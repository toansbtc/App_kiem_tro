import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Policy {
  id: string;
  title: string;
  content: string;
}

interface Notification {
  id: string;
  message: string;
}

interface SystemManagementScreenProps {
  navigation: NavigationProp<any>; // Adjust this type as needed based on your navigation structure
}

const SystemManagementScreen: React.FC<SystemManagementScreenProps> = ({ navigation }) => {
  const [policies, setPolicies] = useState<Policy[]>([
    { id: '1', title: 'Chính sách bảo mật', content: 'Nội dung chính sách bảo mật...' },
    { id: '2', title: 'Điều khoản sử dụng', content: 'Nội dung điều khoản sử dụng...' },
  ]);

  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', message: 'Thông báo 1' },
    { id: '2', message: 'Thông báo 2' },
  ]);

  const [editingPolicyId, setEditingPolicyId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedContent, setEditedContent] = useState<string>('');

  // Hàm xử lý khi nhấn nút chỉnh sửa chính sách
  const handleEditPolicy = (policy: Policy) => {
    setEditingPolicyId(policy.id);
    setEditedTitle(policy.title);
    setEditedContent(policy.content);
  };

  // Hàm xử lý khi nhấn nút lưu chính sách
  const handleSavePolicy = (policyId: string) => {
    setPolicies((prevPolicies) =>
      prevPolicies.map((policy) =>
        policy.id === policyId ? { ...policy, title: editedTitle, content: editedContent } : policy
      )
    );
    setEditingPolicyId(null);
    setEditedTitle('');
    setEditedContent('');
  };

  // Hàm xử lý khi nhấn nút xóa chính sách
  const handleDeletePolicy = (policyId: string) => {
    Alert.alert('Xóa', `Bạn có chắc muốn xóa chính sách ID: ${policyId}?`, [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {
        text: 'Xóa',
        onPress: () => {
          setPolicies(policies.filter((policy) => policy.id !== policyId));
        },
        style: 'destructive',
      },
    ]);
  };

  // Hàm xử lý thêm thông báo
  const handleAddNotification = () => {
    // Mở màn hình thêm thông báo
    navigation.navigate('AddNotification'); // Thay đổi tên màn hình theo cấu trúc điều hướng của bạn
  };

  // Hàm xử lý xóa thông báo
  const handleDeleteNotification = (notificationId: string) => {
    Alert.alert('Xóa', `Bạn có chắc muốn xóa thông báo ID: ${notificationId}?`, [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {
        text: 'Xóa',
        onPress: () => {
          setNotifications(notifications.filter((notification) => notification.id !== notificationId));
        },
        style: 'destructive',
      },
    ]);
  };

  const renderPolicyItem = ({ item }: { item: Policy }) => (
    <View style={styles.policyItem}>
      {editingPolicyId === item.id ? (
        <>
          <TextInput
            style={styles.input}
            value={editedTitle}
            onChangeText={setEditedTitle}
            placeholder="Tiêu đề"
          />
          <TextInput
            style={styles.input}
            value={editedContent}
            onChangeText={setEditedContent}
            placeholder="Nội dung"
            multiline
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => handleSavePolicy(item.id)}
          >
            <Text style={styles.buttonText}>Lưu</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.policyTitle}>{item.title}</Text>
          <Text style={styles.policyContent}>{item.content}</Text>
          <View style={styles.policyActions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEditPolicy(item)}
            >
              <Text style={styles.buttonText}>Chỉnh sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeletePolicy(item.id)}
            >
              <Text style={styles.buttonText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteNotification(item.id)}
      >
        <Text style={styles.buttonText}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chính Sách và Điều Khoản</Text>
      <FlatList
        data={policies}
        renderItem={renderPolicyItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Không có chính sách nào.</Text>}
      />
      
      <Text style={styles.subHeader}>Thông Báo</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Không có thông báo nào.</Text>}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddNotification}
      >
        <Text style={styles.addButtonText}>Thêm Thông Báo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  policyItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  policyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  policyContent: {
    fontSize: 14,
    marginVertical: 8,
  },
  policyActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  notificationItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationMessage: {
    fontSize: 14,
  },
  buttonText: {
    color: '#007BFF',
  },
  editButton: {
    padding: 8,
  },
  deleteButton: {
    padding: 8,
  },
  saveButton: {
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    marginTop: 8,
  },
  addButton: {
    padding: 12,
    backgroundColor: '#28a745',
    borderRadius: 4,
    marginTop: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginVertical: 4,
  },
});

export default SystemManagementScreen;
