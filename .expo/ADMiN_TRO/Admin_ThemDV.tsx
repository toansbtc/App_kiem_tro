import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface ServicePackage {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface AddPackageProps {
  route: {
    params: {
      servicePackages: ServicePackage[];
      setServicePackages: (packages: ServicePackage[]) => void;
    };
  };
}

const AddPackage: React.FC<AddPackageProps> = ({ route }) => {
  const { servicePackages, setServicePackages } = route.params;

  const [newPackage, setNewPackage] = useState<{ name: string; description: string; price: string }>({
    name: '',
    description: '',
    price: '',
  });

  const handleAddPackage = () => {
    if (newPackage.name && newPackage.description && newPackage.price) {
      const newId = servicePackages.length + 1;
      setServicePackages([...servicePackages, { ...newPackage, price: Number(newPackage.price), id: newId }]);
      Alert.alert('Thông báo', 'Gói dịch vụ đã được thêm thành công!');
      setNewPackage({ name: '', description: '', price: '' });
    } else {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin gói dịch vụ.');
    }
  };

  return (
    <View style={styles.addPackageContainer}>
      <Text style={styles.subHeader}>Thêm gói dịch vụ mới</Text>
      <TextInput
        placeholder="Tên gói"
        value={newPackage.name}
        onChangeText={(text) => setNewPackage({ ...newPackage, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Mô tả"
        value={newPackage.description}
        onChangeText={(text) => setNewPackage({ ...newPackage, description: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Giá (VNĐ)"
        value={newPackage.price}
        keyboardType="numeric"
        onChangeText={(text) => setNewPackage({ ...newPackage, price: text })}
        style={styles.input}
      />
      <Button title="Thêm Gói Dịch Vụ" onPress={handleAddPackage} />
    </View>
  );
};

const styles = StyleSheet.create({
  addPackageContainer: {
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

export default AddPackage;
