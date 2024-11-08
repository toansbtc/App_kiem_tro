import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GiaoDienTim from './.expo/screen/timPhong';
import ChiTietPhong from './.expo/screen/chiTietPhong';
import DatPhongNgay from './.expo/screen/DatPhongNgay';
import Home from './.expo/screen/home';
import Chat from './.expo/screen/chat';
import ThongBao from './.expo/screen/thongBao';
import TaiKhoan from './.expo/screen/taiKhoan';

import Dashboard from './.expo/LordLand_screen/Dashboard';
import PostNewAd from './.expo/LordLand_screen/PostNewAd';
import QuanLyTin from './.expo/LordLand_screen/QuanLyTin';
import PackagePricing from './.expo/LordLand_screen/PackagePricing';
import PaymentHistory from './.expo/LordLand_screen/PaymentHistory';
import SupportHelp from './.expo/LordLand_screen/SupportHelp';
import Chat_ChuTro from './.expo/LordLand_screen/Chat';

import AdminHome from './.expo/ADMiN_TRO/AdMin_Home';
import QLtk from './.expo/ADMiN_TRO/AdMin_QLTK';
import QLTin from './.expo/ADMiN_TRO/AdMin_qLTinDang';
import QLNoidung_HeThong from './.expo/ADMiN_TRO/AdMin_QLNoiDung&HeThong';
import QLBC_PH from './.expo/ADMiN_TRO/AdMin_qLBaoCao&PHanhoi';
import QLthanhtoangoiDV from './.expo/ADMiN_TRO/Admin_QLThanhToangoiDV';
import AddUserScreen from './.expo/ADMiN_TRO/Admin_AddUser';
import EditUserScreen from './.expo/ADMiN_TRO/Admin_EditUser';
import Update_DV from './.expo/ADMiN_TRO/UpdateDV';
import ChiTietThanhToan from './.expo/ADMiN_TRO/Admin_chiTietThanhToan';
import ThemDV from './.expo/ADMiN_TRO/Admin_ThemDV';
import ChatAdmin from './.expo/ADMiN_TRO/Admin_chat';
import RegisterScreen from './.expo/LordLand_screen/LoginScreen';
import LoginScreen from './.expo/LordLand_screen/RegisterScreen';
import NewAd from './.expo/LordLand_screen/PostNewAd'; // Sửa import này

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  GiaoDienTim: undefined;
  ChiTietPhong: undefined;
  DatPhongNgay: undefined;
  Chat: undefined;
  ThongBao: undefined;
  TaiKhoan: undefined;
  Dashboard: undefined;
  PostNewAd: undefined;
  QuanLyTin: { newAd?: typeof NewAd };
  PackagePricing: undefined;
  PaymentHistory: undefined;
  SupportHelp: undefined;
  Chat_ChuTro: undefined;
  AdminHome: undefined;
  QLtk: undefined;
  QLTin: undefined;
  QLNoidung_HeThong: undefined;
  QLBC_PH: undefined;
  QLthanhtoangoiDV: undefined;
  AddUserScreen: undefined;
  EditUserScreen: undefined;
  Update_DV: undefined;
  ChiTietThanhToan: undefined;
  ThemDV: undefined;
  ChatAdmin: undefined;
};

export default function App() {
  const [initialRoute, setInitialRoute] = useState('LoginScreen');

  useEffect(() => {
    const checkUserRole = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        setInitialRoute(userData.role === 'chủ trọ' ? 'Dashboard' : 'Home');
      } else {
        setInitialRoute('LoginScreen');
      }
    };
    checkUserRole();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GiaoDienTim">
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="GiaoDienTim" component={GiaoDienTim} options={{ headerShown: false }} />
        <Stack.Screen name="ChiTietPhong" component={ChiTietPhong} options={{ title: 'Chi tiết phòng', headerStyle: { backgroundColor: '#3498db' } }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="PostNewAd" component={PostNewAd} options={{ headerShown: false }} />
        <Stack.Screen name="QuanLyTin" component={QuanLyTin} options={{ headerShown: false }} />
        <Stack.Screen name="PackagePricing" component={PackagePricing} options={{ title: 'Package Pricing' }} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} options={{ title: 'Payment History' }} />
        <Stack.Screen name="SupportHelp" component={SupportHelp} options={{ title: 'Support & Help' }} />
        <Stack.Screen name="Chat_ChuTro" component={Chat_ChuTro} options={{ title: 'Chat' }} />
        <Stack.Screen name="AdminHome" component={AdminHome} options={{ title: 'Admin Home' }} />
        <Stack.Screen name="QLtk" component={QLtk} options={{ title: 'Manage Accounts' }} />
        <Stack.Screen name="QLTin" component={QLTin} options={{ title: 'Manage Posts' }} />
        <Stack.Screen name="QLNoidung_HeThong" component={QLNoidung_HeThong} options={{ title: 'Manage Content & System' }} />
        <Stack.Screen name="QLBC_PH" component={QLBC_PH} options={{ title: 'Reports & Feedback' }} />
        <Stack.Screen name="QLthanhtoangoiDV" component={QLthanhtoangoiDV} options={{ title: 'Service Payment Management' }} />
        <Stack.Screen name="AddUserScreen" component={AddUserScreen} options={{ title: 'Add User' }} />
        <Stack.Screen name="EditUserScreen" component={EditUserScreen} options={{ title: 'Edit User' }} />
        <Stack.Screen name="Update_DV" component={Update_DV} options={{ title: 'Update Service' }} />
        <Stack.Screen name="ChiTietThanhToan" component={ChiTietThanhToan} options={{ title: 'Payment Details' }} />
        <Stack.Screen name="ThemDV" component={ThemDV} options={{ title: 'Add Service' }} />
        <Stack.Screen name="ChatAdmin" component={ChatAdmin} options={{ title: 'Admin Chat' }} />
        <Stack.Screen name="TaiKhoan" component={TaiKhoan} options={{ title: 'TaiKhoan' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
