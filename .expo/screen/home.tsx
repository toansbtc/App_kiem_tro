import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import AppLayout from './layout1';  // Đảm bảo đường dẫn import đúng
import anh1 from '../../assets/anhphong_1.jpg';
import anh2 from '../../assets/anhPhong_2.jpg';

type HomesProps = {
  navigation: any; // Thay 'any' bằng kiểu cụ thể nếu biết (ví dụ: `StackNavigationProp<ParamList>`)
};

const Homes: React.FC<HomesProps> = ({ navigation }) => {
  const img1 = Image.resolveAssetSource(anh1).uri;
  const img2 = Image.resolveAssetSource(anh2).uri;
  const { width, height } = Dimensions.get('window');
  const sliderHeight = height / 4;
  const sliderWidth = width;
  const [currentImage, setCurrentImage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const images = [img1, img2];

  const handleNext = () => {
    if (currentImage < images.length - 1 && scrollViewRef.current) {
      setCurrentImage(currentImage + 1);
      scrollViewRef.current.scrollTo({ x: (currentImage + 1) * width, animated: true });
    }
  };

  const handlePrev = () => {
    if (currentImage > 0 && scrollViewRef.current) {
      setCurrentImage(currentImage - 1);
      scrollViewRef.current.scrollTo({ x: (currentImage - 1) * width, animated: true });
    }
  };

  // Các mục trên trang chủ
  const searchCategories = [
    { title: 'Phòng trọ sinh viên', icon: '🏠' },
    { title: 'Phòng trọ có gác', icon: '🏡' },
    { title: 'Phòng trọ giá rẻ', icon: '💰' },
    { title: 'Có ban công', icon: '🌇' },
    { title: 'Phòng trọ theo quận', icon: '📍' },
    { title: 'Cho người nước ngoài', icon: '✈️' },
  ];

  const navigateToCategory = (title: string) => {
    navigation.navigate('GiaoDienTim', { title });
  };

  return (
    <AppLayout title="Home" navigation={navigation}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Slider */}
          <View style={styles.sliderContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              ref={scrollViewRef}
              style={styles.slider}
            >
              {images.map((img, index) => (
                <Image
                  key={index}
                  source={{ uri: img }}
                  style={{ width: sliderWidth, height: sliderHeight, resizeMode: 'cover' }}
                />
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.leftButton} onPress={handlePrev}>
              <Text style={styles.navText}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightButton} onPress={handleNext}>
              <Text style={styles.navText}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          {/* Nội dung các mục tìm kiếm */}
          <Text style={styles.sectionTitle}>Xu hướng tìm kiếm</Text>
          <View style={styles.categoryContainer}>
            {searchCategories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.searchCategory}
                onPress={() => navigateToCategory(item.title)}
              >
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.categoryText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
            
          </View>
          {/* Dịch vụ hỗ trợ */}
          <Text style={styles.sectionTitle}>Dịch vụ hỗ trợ khi thuê trọ tại NhaTroVN</Text>
          <View style={styles.categoryContainer}>
            {[
              { title: 'Dọn dẹp nhà trọ', icon: '🧹' },
              { title: 'Hỗ trợ kết nối internet', icon: '🌐' },
              { title: 'Chuyển trọ', icon: '🚚' },
              { title: 'Tư vấn hợp đồng thuê', icon: '📄' },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.searchCategory}>
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.categoryText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  sliderContainer: { width: '100%', height: Dimensions.get('window').height / 4, position: 'relative', justifyContent: 'center', alignItems: 'center' },
  slider: { width: '100%', height: '100%' },
  leftButton: { position: 'absolute', top: '45%', left: 5, zIndex: 1 },
  rightButton: { position: 'absolute', top: '45%', right: 5, zIndex: 1 },
  navText: { fontSize: 50, color: 'orange', fontWeight: 'bold' },
  searchCategory: { width: '45%', padding: 15, margin: 5, backgroundColor: '#e0f7fa', borderRadius: 12, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3, elevation: 5 },
  icon: { fontSize: 28, marginBottom: 5 },
  categoryText: { fontSize: 16, fontWeight: '500' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', margin: 10, color: '#00796b' },
  categoryContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginVertical: 10 },
});

export default Homes;
