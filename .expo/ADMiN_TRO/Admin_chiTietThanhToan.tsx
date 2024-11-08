import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

interface PaymentHistory {
  date: string;
  packageName: string;
  amount: number;
  status: string;
}

type AdminStackParamList = {
  ChiTietThanhToan: { ChiTietThanhToan: PaymentHistory };
};

type PaymentDetailsRouteProp = RouteProp<AdminStackParamList, 'ChiTietThanhToan'>;

interface Props {
  route: PaymentDetailsRouteProp;
}

const PaymentDetailsScreen = ({ route }: Props) => {
  const { ChiTietThanhToan } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chi tiết thanh toán: {ChiTietThanhToan.packageName}</Text>
      <ScrollView>
        <View style={styles.paymentRow}>
          <Text>Ngày: {ChiTietThanhToan.date}</Text>
          <Text>Số tiền: {ChiTietThanhToan.amount.toLocaleString()} VND</Text>
          <Text>Trạng thái: {ChiTietThanhToan.status}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paymentRow: {
    flexDirection: 'column',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default PaymentDetailsScreen;
