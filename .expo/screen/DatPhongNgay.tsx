import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const DatPhongNgay = ({ route }) => {
  const { room } = route.params; // Lấy room từ route.params
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'datPhong', title: 'Đặt Phòng' },
    { key: 'datLichHen', title: 'Đặt Lịch Hẹn' },
  ]);

  const DatPhongRoute = () => (
    <View style={styles.scene}>
      <Text>Đặt phòng cho {room.name}</Text>
      {/* Thêm nội dung màn hình Đặt Phòng ở đây */}
    </View>
  );

  const DatLichHenRoute = () => (
    <View style={styles.scene}>
      <Text>Đặt Lịch Hẹn cho {room.name}</Text>
      <Text>Giá: {room.price} VND</Text>
      {/* Thêm các form hoặc thông tin cần thiết để đặt lịch hẹn */}
    </View>
  );

  const renderScene = SceneMap({
    datPhong: DatPhongRoute,
    datLichHen: DatLichHenRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={styles.tabBar}
      labelStyle={styles.tabLabel}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 400 }} // Thay đổi kích thước theo nhu cầu của bạn
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBar:{
  },

  tabLabel:{
  },
  activeTabLabel:{
  }


});

export default DatPhongNgay;
