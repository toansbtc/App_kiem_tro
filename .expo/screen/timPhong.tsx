import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import AppLayout from './layout1';
import data from './dataPhong';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TinMoi } from '../LordLand_screen/PostNewAd';

const GiaoDienTim = ({ route, navigation }) => {
  const [dataPhong, setDataPhong] = useState<TinMoi[]>([])

  useEffect(() => {
    const getData = async () => {
      const data: TinMoi[] = JSON.parse(await AsyncStorage.getItem('danhSachTin'))
      if (data) {
        console.log(data)
        const filterdata = data.filter((value) => value.xetDuyet === true)
        setDataPhong(filterdata);
      }
    }
    getData()
  }, [])


  // Kiểm tra xem có tham số title trong route.params không
  const title = route.params?.title ? route.params.title : "danh sách phòng";
  const searchTerm = route.params?.searchTerm || '';
  const filters = route.params?.filters || {};

  // Thực hiện lọc danh sách phòng dựa trên searchTerm và filters
  //  const filteredData = data.filter(item => {
  //   const matchesSearchTerm = Object.values(item).some(field =>
  //     typeof field === 'string' && field.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   const matchesPriceRange = (!filters.priceRangeMin || parseInt(item.price.replace(/[^0-9]/g, '')) >= parseInt(filters.priceRangeMin)) &&
  //                             (!filters.priceRangeMax || parseInt(item.price.replace(/[^0-9]/g, '')) <= parseInt(filters.priceRangeMax));
  //   const matchesRoomType = !filters.roomType || item.roomType === filters.roomType;
  //   const matchesLocation = !filters.location || item.province === filters.location;
  //   const matchesDistrict = !filters.selectedDistrict || item.district === filters.selectedDistrict; // Thêm điều kiện cho huyện

  //           // Log để kiểm tra
  //     console.log("Item:", item);
  //     console.log("Matches Search Term:", matchesSearchTerm);
  //     console.log("Matches Price Range:", matchesPriceRange);
  //     console.log("Matches Room Type:", matchesRoomType);
  //     console.log("Matches Location:", matchesLocation);
  //     console.log("Matches District:", matchesDistrict);


  //   return matchesSearchTerm && matchesPriceRange && matchesRoomType && matchesLocation && matchesDistrict;
  // });

  const filteredData = dataPhong.filter(item => {
    const matchesSearchTerm = Object.values(item).some(field =>
      typeof field === 'string' && field.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesPriceRange = (!filters.priceRangeMin || parseInt(item.gia.replace(/[^0-9]/g, '')) >= parseInt(filters.priceRangeMin)) &&
      (!filters.priceRangeMax || parseInt(item.gia.replace(/[^0-9]/g, '')) <= parseInt(filters.priceRangeMax));
    const matchesRoomType = !filters.roomType || item.soPhongNgu === filters.roomType;
    const matchesLocation = !filters.location || item.tinh === filters.location;
    const matchesDistrict = !filters.selectedDistrict || item.huyen === filters.selectedDistrict; // Thêm điều kiện cho huyện

    // Log để kiểm tra
    // console.log("Item:", item);
    // console.log("Matches Search Term:", matchesSearchTerm);
    // console.log("Matches Price Range:", matchesPriceRange);
    // console.log("Matches Room Type:", matchesRoomType);
    // console.log("Matches Location:", matchesLocation);
    // console.log("Matches District:", matchesDistrict);


    return matchesSearchTerm && matchesPriceRange && matchesRoomType && matchesLocation && matchesDistrict;
  });

  // Kiểm tra số lượng mục đã lọc
  console.log("Filtered Data Length:", filteredData.length);

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity style={styles.roomContainer} onPress={() => navigation.navigate('ChiTietPhong', { room: item })}>
  //     <Image source={item.image} style={styles.roomImage} />
  //     <View style={styles.roomInfo}>
  //       <Text style={styles.roomName}>{item.name}</Text>
  //       <Text>{item.info}, {item.bedrom}, {item.roomLocation}</Text>
  //       <Text style={styles.roomPrice}>{item.price}</Text>
  //       <Text style={styles.availableRooms}>Còn {item.availableRooms} phòng trống</Text>
  //       <Text style={styles.location}>{item.district}, {item.province}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.roomContainer} onPress={() => navigation.navigate('ChiTietPhong', { room: item })}>
        <Image source={{ uri: item.hinhAnh[0] }} style={styles.roomImage} />
        <View style={styles.roomInfo}>
          {/* <Text style={styles.roomName}>{item.}</Text>
        <Text>{item.info}, {item.bedrom}, {item.roomLocation}</Text>
        <Text style={styles.roomPrice}>{item.price}</Text>
        <Text style={styles.availableRooms}>Còn {item.availableRooms} phòng trống</Text> */}
          <Text style={styles.location}>{item.tinh}, {item.huyen}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppLayout title={title} navigation={navigation}>
        {filteredData.length === 0 ? (
          <Text>Không có phòng nào phù hợp với tiêu chí tìm kiếm của bạn.</Text>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </AppLayout>
    </SafeAreaView>
  );
};





const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContainer: {
    padding: 0,

  },
  flatList: {
    paddingTop: 0, // Không có padding ở trên cùng

  },
  roomContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  roomImage: {
    width: '100%',
    height: 120,
  },
  roomInfo: {
    padding: 10,
  },
  roomName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  roomPrice: {
    color: '#e74c3c',
    fontWeight: 'bold',
    marginTop: 5,
  },
  availableRooms: {
    marginTop: 5,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  location: {
    marginTop: 5,
    color: '#34495e',
  },
});

export default GiaoDienTim;






