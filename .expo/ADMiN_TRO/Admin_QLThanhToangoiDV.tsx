import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Định nghĩa kiểu cho Stack Navigation
type AdminStackParamList = {
  ChiTietThanhToan: { ChiTietThanhToan: PaymentHistory };
  ThemDV: { servicePackages: ServicePackage[]; setServicePackages: (packages: ServicePackage[]) => void };
  UpdateDV: { packageId: number; servicePackages: ServicePackage[]; setServicePackages: (packages: ServicePackage[]) => void };
};
type NavigationProps = StackNavigationProp<AdminStackParamList>;

// Define types for ServicePackage and PaymentHistory
interface ServicePackage {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface PaymentHistory {
  date: string;
  packageName: string;
  amount: number;
  status: string;
}

const QlTin_ThanhToan = () => {
  const navigation = useNavigation<NavigationProps>();
  const [servicePackages, setServicePackages] = useState<ServicePackage[]>([
    { id: 1, name: 'Gói Cơ Bản', description: 'Đăng tin 1 tháng', price: 100000 },
    { id: 2, name: 'Gói Nâng Cao', description: 'Đăng tin 3 tháng', price: 250000 },
    { id: 3, name: 'Gói VIP1', description: 'Đăng tin 6 tháng', price: 450000 },
    { id: 4, name: 'Gói VIP2', description: 'Đăng tin 6 tháng', price: 450000 },
    { id: 5, name: 'Gói VIP3', description: 'Đăng tin 6 tháng', price: 450000 },
    { id: 6, name: 'Gói VIP4', description: 'Đăng tin 6 tháng', price: 450000 },
  ]);
  const handleDeletePackage = (pkgId: number) => {
    Alert.alert('Xác nhận', 'Bạn có chắc muốn xóa gói dịch vụ này?', [
      { text: 'Hủy', style: 'cancel' },
      {
        text: 'Xóa',
        onPress: () => {
          const updatedPackages = servicePackages.filter((pkg) => pkg.id !== pkgId);
          setServicePackages(updatedPackages);
          Alert.alert('Thông báo', 'Gói dịch vụ đã được xóa thành công!');
        },
      },
    ]);
  };

  const handleEditPackage = (pkgId: number) => {
    navigation.navigate('UpdateDV', { packageId: pkgId, servicePackages, setServicePackages });
  };

  const handlePaymentDetails = (payment: PaymentHistory) => {
    navigation.navigate('ChiTietThanhToan', { ChiTietThanhToan: payment });
  };

  const handleAddService = () => {
    navigation.navigate('ThemDV', { servicePackages, setServicePackages });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quản lý gói dịch vụ</Text>
      <Text style={styles.subHeader}>Các gói dịch vụ</Text>
      <ScrollView style={styles.scrollContainer}>
        <View>
          {servicePackages.map((pkg) => (
            <View key={pkg.id} style={styles.servicePackage}>
              <Text style={styles.title}>{pkg.name}</Text>
              <Text>{pkg.description}</Text>
              <Text style={styles.price}>{pkg.price.toLocaleString()} VND</Text>
              <View style={styles.buttonContainer}>
                <Button title="Xóa" onPress={() => handleDeletePackage(pkg.id)} />
                <Button title="Cập nhật" onPress={() => handleEditPackage(pkg.id)} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Button title="Thêm dịch vụ" onPress={handleAddService} color="#007bff"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  servicePackage: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft:200,
  },
  paymentHistoryContainer: {
    marginTop: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    marginTop: 10,
  },
});

export default QlTin_ThanhToan;
