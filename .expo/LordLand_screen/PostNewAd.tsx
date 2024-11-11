import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import LayoutLord from './Layout_lord';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from 'react-native-check-box';
import QuanLyTin from './QuanLyTin';
export type RootStackParamList = {
  QuanLyTin: { tinMoi: TinMoi }
};

export interface TinMoi {
  id: string;
  nguoiDang: string
  tieuDe: string;
  gia: string;
  xa: string;
  huyen: string;
  tinh: string;
  soPhongNgu: number;
  diaChiPhong: string;
  quanHuyen: string;
  tinhThanh: string;
  // trangThai: string;
  soLuotXem: number;
  soLuotHoi: number;
  soNguoiToiDa: number;
  giaDien: string;
  giaNuoc: string;
  giaQuet_Don: string;
  hinhAnh: any;
  giaPhong: number;
  viTriLau: number;
  soChoDeXe: number;
  loaiChoDeXe: string;
  loaiSanPhoi: string;
  dienTich: number;
  soNguoi: number;
  xetDuyet: boolean
}

const DangTinMoi = () => {
  const [tieuDe, setTieuDe] = useState('');
  const [nguoiDang, setNguoiDang] = useState('');
  const [giaPhong, setGiaPhong] = useState('');
  const [soChoDeXe, setSoChoDeXe] = useState('');
  const [soNguoiToiDa, setSoNguoiToiDa] = useState('');
  const [dienTich, setDienTich] = useState('');
  const [hinhAnh, setHinhAnh] = useState<any>([]);
  const [giaNuoc, setGiaNuoc] = useState('');
  const [tinhThanh, setTinhThanh] = useState('');
  const [giaDien, setGiaDien] = useState('');
  const [xa, setXa] = useState('');
  const [quanHuyen, setQuanHuyen] = useState('');
  const [duong, setDuong] = useState('');
  const [viTriLau, setViTriLau] = useState('');
  const [soPhongNgu, setSoPhongNgu] = useState('');
  const [loaiChoDeXe, setLoaiChoDeXe] = useState('chung');
  const [loaiSanPhoi, setLoaiSanPhoi] = useState('chung');
  const [giaQuet_Don, setGiaQuet_Don] = useState('');
  const [dichVu, setDichVu] = useState([
    { id: '1', ten: 'Gác', daChon: false },
    { id: '2', ten: 'Cửa sổ', daChon: false },
    { id: '3', ten: 'Ban công', daChon: false },
    { id: '4', ten: 'Tủ lạnh', daChon: false },
    { id: '5', ten: 'Bồn rửa', daChon: false },
    { id: '6', ten: 'Tủ đồ', daChon: false },
    { id: '7', ten: 'Máy giặt', daChon: false },
    { id: '8', ten: 'Thang máy', daChon: false },
    { id: '9', ten: 'Thú cưng', daChon: false },
  ]);
  const [soNguoi, setSoNguoi] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const taiHinhAnh = async () => {
    // await AsyncStorage.clear()
    const ketQua = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });
    if (!ketQua.canceled && ketQua.assets && ketQua.assets.length > 0) {
      setHinhAnh([...hinhAnh, ketQua.assets[0].uri]);
    }
  };


  const guiTin = async () => {
    const tinMoi: TinMoi = {
      id: Date.now().toString(),
      nguoiDang: await AsyncStorage.getItem('userData'),
      tieuDe,
      gia: giaPhong,
      xa,
      huyen: quanHuyen,
      tinh: tinhThanh,
      soPhongNgu: parseInt(soPhongNgu) || 0, // Adjust to match `number` type
      diaChiPhong: viTriLau,
      quanHuyen,
      tinhThanh,
      soLuotXem: 1,
      soLuotHoi: 1,
      soNguoiToiDa: parseInt(soNguoiToiDa) || 0, // Convert to `number`
      giaDien,
      giaNuoc,
      giaQuet_Don,
      hinhAnh,
      giaPhong: parseFloat(giaPhong) || 0, // Convert to `number`
      viTriLau: parseInt(viTriLau) || 0, // Ensure `number` type
      soChoDeXe: parseInt(soChoDeXe) || 0,
      loaiChoDeXe,
      loaiSanPhoi,
      dienTich: parseFloat(dienTich) || 0,
      soNguoi: parseInt(soNguoi) || 0, // Ensure it matches `number` type
      xetDuyet: false,
    };

    try {
      const danhSachTin = JSON.parse(await AsyncStorage.getItem('danhSachTin')) || [];
      danhSachTin.push(tinMoi);
      await AsyncStorage.setItem('danhSachTin', JSON.stringify(danhSachTin));
      navigation.navigate('QuanLyTin', { tinMoi });
    } catch (error) {
      console.log("Lỗi khi lưu tin đăng:", error);
    }
  };


  return (
    <LayoutLord title="Đăng Tin Mới" navigation={navigation}>
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chi phí điện</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputWithUnit]}
                placeholder="Nhập chi phí điện"
                value={giaDien}
                onChangeText={setGiaDien}
              />
              <Text style={styles.unit}>kw</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chi phí nước</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputWithUnit]}
                placeholder="Nhập chi phí nước"
                value={giaNuoc}
                onChangeText={setGiaNuoc}
              />
              <Text style={styles.unit}>m/3</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nhập diện tích</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputWithUnit]}
                placeholder="Nhập Diện tích"
                value={dienTich}
                onChangeText={setDienTich}
              />
              <Text style={styles.unit}>m^2</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nhập giá phòng</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputWithUnit]}
                placeholder="Nhập giá phòng"
                value={giaPhong}
                onChangeText={setGiaPhong}
              />
              <Text style={styles.unit}>/Tháng</Text>
            </View>
          </View>
        </View>

        {/* Chi phí điện */}
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tỉnh</Text>
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="Nhập Tỉnh"
                value={tinhThanh}
                onChangeText={setTinhThanh}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Huyện Quận</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputWithUnit]}
                placeholder="Nhập huyện"
                value={quanHuyen}
                onChangeText={setQuanHuyen}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Xã</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.inputWithUnit]}
                placeholder="Nhập Xã,khu phố"
                value={xa}
                onChangeText={setXa}
              />
            </View>
          </View>
        </View>

        {/* Vị trí lầu */}
        <View style={styles.row}>
        </View>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Vị trí lầu</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập vị trí lầu"
              value={viTriLau}
              onChangeText={setViTriLau}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Số người ở</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập số người ở"
              value={soNguoi}
              onChangeText={setSoNguoi}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Giá dọn dẹp</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập giá quét dọn"
              value={giaQuet_Don}
              onChangeText={setGiaQuet_Don}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Số phòng ngủ</Text>
            <TextInput
              style={styles.input}
              placeholder="Số phòng ngủ"
              value={soPhongNgu}
              onChangeText={setSoPhongNgu}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.horizontalLine} />
        </View>
        {/* Dropdown và Bảng Checkbox */}
        <Text>Chỗ để xe:</Text>
        <Picker selectedValue={loaiChoDeXe} onValueChange={(itemValue) => setLoaiChoDeXe(itemValue)} style={styles.picker}>
          <Picker.Item label="Chung" value="chung" />
          <Picker.Item label="Riêng" value="rieng" />
        </Picker>

        <Text>Sân phơi:</Text>
        <Picker selectedValue={loaiSanPhoi} onValueChange={(itemValue) => setLoaiSanPhoi(itemValue)} style={styles.picker}>
          <Picker.Item label="Chung" value="chung" />
          <Picker.Item label="Riêng" value="rieng" />
        </Picker>

        <Text>Dịch vụ:</Text>
        <View style={styles.table}>
          {dichVu.map((dichVuItem, index) => (
            <View key={dichVuItem.id} style={styles.tableRow}>
              <CheckBox
                isChecked={dichVuItem.daChon}
                onClick={() => {
                  const dichVuMoi = [...dichVu];
                  dichVuMoi[index].daChon = !dichVuItem.daChon;
                  setDichVu(dichVuMoi);
                }}
              />
              <Text style={styles.tableText}>{dichVuItem.ten}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
        </View>

        {/* Nút Tải Ảnh và Gửi Tin */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.imageUpload} onPress={taiHinhAnh}>
            <Icon name="image-outline" size={24} color="#fff" />
            <Text style={styles.imageUploadText}>Chọn Ảnh</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={guiTin}>
            <Text style={styles.submitText}>Gửi Tin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LayoutLord>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginBottom: 10,
    justifyContent: 'space-between', // Distributes space between elements
  },
  horizontalLine: {
    width: '80%',     // Adjust the width as needed
    height: 2,        // Set a thin height for a line effect
    backgroundColor: 'black',
  },
  alignLabel: {
    flexDirection: 'row', // Aligns label and input horizontally
    alignItems: 'center', // Centers vertically
  },
  label: {
    color: '#333',
    width: 100, // Fixed width for consistent alignment
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    backgroundColor: '#DDA0DD',
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
  },
  unit: {
    fontSize: 16,
    marginLeft: 5,
    alignSelf: 'center',
    color: '#333',
  },
  inputWithUnit: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: '#DDA0DD',
    borderRadius: 10,
    marginVertical: 5,
  },
  table: {
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  tableText: {
    marginLeft: 8,
    color: '#333',
  },
  imageUpload: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },
  imageUploadText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});


export default DangTinMoi;
