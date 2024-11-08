import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLayout from './Layout_lord';

const QuanLyTin = ({ navigation }) => {
  const [danhSachTin, setDanhSachTin] = useState([]);

  useEffect(() => {
    const layDanhSachTin = async () => {
      const tinDaLuu = await AsyncStorage.getItem('danhSachTin');
      if (tinDaLuu) {
        setDanhSachTin(JSON.parse(tinDaLuu));
      }
    };
    layDanhSachTin();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.roomContainer}>
      <Image source={{ uri: item.hinhAnh[0] }} style={styles.roomImage} />
      <View style={styles.roomInfo}>
        <Text style={styles.roomName}>{item.tieuDe}</Text>
        <Text>{item.soPhongNgu} phòng ngủ, lầu {item.diaChiPhong}</Text>
        <Text style={styles.roomPrice}>{item.gia} VND</Text>
        <Text style={styles.location}>{item.huyen}, {item.tinh}</Text>
        <Text style={styles.trangThai}>Trạng thái: {item.trangThai}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppLayout title="Quản lý tin" navigation={navigation}>
        <FlatList
          data={danhSachTin}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </AppLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContainer: {
    padding: 10,
  },
  roomContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  roomImage: {
    width: '100%',
    height: 120,
  },
  roomInfo: {
    padding: 10,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomPrice: {
    fontSize: 14,
    color: 'green',
  },
  location: {
    fontSize: 12,
    color: 'gray',
  },
  trangThai: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default QuanLyTin;
