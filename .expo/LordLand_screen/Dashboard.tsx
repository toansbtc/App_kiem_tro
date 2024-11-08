import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LayoutLord  from './Layout_lord';
const Dashboard = ({navigation}) => {
  // Sample data for statistics, activity, and notifications
  const stats = [
    { id: '1', title: 'Active Ads', count: 5, icon: 'megaphone' },
    { id: '2', title: 'Total Views', count: 1200, icon: 'eye' },
    { id: '3', title: 'Inquiries', count: 45, icon: 'chatbox' },
    { id: '4', title: 'Account Balance', count: '$300', icon: 'wallet' },
  ];

  const recentActivity = [
    { id: '1', activity: 'Inquiry from John Doe', date: 'Oct 15, 2024' },
    { id: '2', activity: 'Ad expired: Cozy Studio', date: 'Oct 14, 2024' },
    { id: '3', activity: 'Ad renewed: City Apartment', date: 'Oct 12, 2024' },
  ];

  return (
    <LayoutLord  title="Dashboard" navigation={navigation}>
    <View style={styles.container}>
      {/* Statistics Overview */}
      <View style={styles.statsGrid}>
        {stats.map((item) => (
          <View key={item.id} style={styles.statItem}>
            <Icon name={item.icon} size={30} color="#6A0DAD" />
            <Text style={styles.statCount}>{item.count}</Text>
            <Text style={styles.statTitle}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Đăng quảng cáo mới</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Gia hạn quảng cáo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Quản lý quảng cáo</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <View style={styles.recentActivity}>
        <Text style={styles.sectionTitle}>Hoạt động gần đây</Text>
        <FlatList
          data={recentActivity}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <Text style={styles.activityText}>{item.activity}</Text>
              <Text style={styles.activityDate}>{item.date}</Text>
            </View>
          )}
        />
      </View>

      {/* Notifications */}
      <View style={styles.notifications}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Text style={styles.notificationText}>Bạn có quảng cáo sắp hết hạn!</Text>
        <Text style={styles.notificationText}>Nhắc nhở số dư thấp: thêm tiền.</Text>
      </View>
    </View>
    </LayoutLord >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    width: '22%', // Adjust to fit 4 stats in a row
    backgroundColor: '#f3f0ff',
    padding: 10,
    borderRadius: 10,
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginVertical: 5,
  },
  statTitle: {
    fontSize: 14,
    color: '#6A0DAD',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#6A0DAD',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  recentActivity: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 10,
  },
  activityItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityText: {
    fontSize: 14,
    color: '#333',
  },
  activityDate: {
    fontSize: 12,
    color: '#999',
  },
  notifications: {
    backgroundColor: '#f3f0ff',
    padding: 10,
    borderRadius: 10,
  },
  notificationText: {
    fontSize: 14,
    color: '#6A0DAD',
    marginBottom: 5,
  },
});

export default Dashboard;
