import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface ThongBaoChiTietProps {
  route: RouteProp<{ params: { notification: string } }, 'params'>;
  navigation: NavigationProp<any>;
}

const ThongBaoChiTiet: React.FC<ThongBaoChiTietProps> = ({ route, navigation }) => {
  const { notification } = route.params;

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Quay lại</Text>
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Chi Tiết Thông Báo</Text>

      {/* Nội dung thông báo */}
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{notification}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 50, // khoảng trống cho status bar
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  content: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default ThongBaoChiTiet;
