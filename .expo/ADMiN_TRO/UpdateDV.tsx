import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface ServicePackage {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface UpdatePackageProps {
  route: {
    params: {
      servicePackages?: ServicePackage[];
      setServicePackages: (packages: ServicePackage[]) => void;
      packageId?: number;
    };
  };
}

const UpdatePackage: React.FC<UpdatePackageProps> = ({ route }) => {
  const { servicePackages = [], setServicePackages, packageId } = route.params;

  const packageToUpdate = packageId
    ? servicePackages.find((pkg) => pkg.id === packageId)
    : null;

  // Log kiểm tra dữ liệu ban đầu
  console.log('Received servicePackages:', servicePackages);
  console.log('Received packageId:', packageId);
  console.log('Package to update:', packageToUpdate);

  const [updatedPackage, setUpdatedPackage] = useState<{ name: string; description: string; price: string }>({
    name: packageToUpdate?.name || '',
    description: packageToUpdate?.description || '',
    price: packageToUpdate ? packageToUpdate.price.toString() : '',
  });

  useEffect(() => {
    if (packageToUpdate) {
      setUpdatedPackage({
        name: packageToUpdate.name,
        description: packageToUpdate.description,
        price: packageToUpdate.price.toString(),
      });
    } else {
      console.warn("Không tìm thấy gói dịch vụ với packageId:", packageId);
    }
  }, [packageToUpdate]);

  const handleUpdatePackage = () => {
    if (updatedPackage.name && updatedPackage.description && updatedPackage.price) {
      const newPackages = servicePackages.map((pkg) =>
        pkg.id === packageId
          ? { ...pkg, ...updatedPackage, price: Number(updatedPackage.price) }
          : pkg
      );
      setServicePackages(newPackages);
      Alert.alert('Thông báo', 'Cập nhật gói dịch vụ thành công!');
    } else {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin gói dịch vụ.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cập nhật Gói Dịch Vụ</Text>
      {packageToUpdate ? (
        <View style={styles.updatePackageContainer}>
          <Text style={styles.subHeader}>Thông tin Gói Dịch Vụ</Text>
          <TextInput
            placeholder="Tên gói"
            value={updatedPackage.name}
            onChangeText={(text) => setUpdatedPackage({ ...updatedPackage, name: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Mô tả"
            value={updatedPackage.description}
            onChangeText={(text) => setUpdatedPackage({ ...updatedPackage, description: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Giá (VNĐ)"
            value={updatedPackage.price}
            keyboardType="numeric"
            onChangeText={(text) => setUpdatedPackage({ ...updatedPackage, price: text })}
            style={styles.input}
          />
          <Button title="Cập nhật Gói Dịch Vụ" onPress={handleUpdatePackage} />
        </View>
      ) : (
        <Text>Không tìm thấy thông tin gói dịch vụ cần cập nhật.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  updatePackageContainer: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#e9e9e9',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default UpdatePackage;
