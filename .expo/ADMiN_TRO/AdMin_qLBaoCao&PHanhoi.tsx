import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Feedback {
  id: string;
  title: string;
  content: string;
}

interface Report {
  id: string;
  issue: string;
  description: string;
}

interface ReportFeedbackScreenProps {
  navigation: NavigationProp<any>; // Adjust this type as needed based on your navigation structure
}

const ReportFeedbackScreen: React.FC<ReportFeedbackScreenProps> = ({ navigation }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    { id: '1', title: 'Giao diện không thân thiện', content: 'Nội dung phản hồi về giao diện...' },
    { id: '2', title: 'Cần thêm tính năng tìm kiếm', content: 'Nội dung phản hồi về tính năng...' },
  ]);

  const [reports, setReports] = useState<Report[]>([
    { id: '1', issue: 'Lỗi tải trang', description: 'Mô tả lỗi tải trang khi sử dụng ứng dụng.' },
    { id: '2', issue: 'Lỗi đăng nhập', description: 'Mô tả lỗi không thể đăng nhập.' },
  ]);

  const [newFeedbackTitle, setNewFeedbackTitle] = useState<string>('');
  const [newFeedbackContent, setNewFeedbackContent] = useState<string>('');
  const [newReportIssue, setNewReportIssue] = useState<string>('');
  const [newReportDescription, setNewReportDescription] = useState<string>('');

  // Hàm xử lý thêm phản hồi
  const handleAddFeedback = () => {
    if (newFeedbackTitle && newFeedbackContent) {
      const newFeedback: Feedback = {
        id: (feedbacks.length + 1).toString(),
        title: newFeedbackTitle,
        content: newFeedbackContent,
      };
      setFeedbacks([...feedbacks, newFeedback]);
      setNewFeedbackTitle('');
      setNewFeedbackContent('');
    } else {
      Alert.alert('Lỗi', 'Vui lòng điền đủ thông tin phản hồi.');
    }
  };

  // Hàm xử lý thêm báo cáo
  const handleAddReport = () => {
    if (newReportIssue && newReportDescription) {
      const newReport: Report = {
        id: (reports.length + 1).toString(),
        issue: newReportIssue,
        description: newReportDescription,
      };
      setReports([...reports, newReport]);
      setNewReportIssue('');
      setNewReportDescription('');
    } else {
      Alert.alert('Lỗi', 'Vui lòng điền đủ thông tin báo cáo.');
    }
  };

  const renderFeedbackItem = ({ item }: { item: Feedback }) => (
    <View style={styles.feedbackItem}>
      <Text style={styles.feedbackTitle}>{item.title}</Text>
      <Text style={styles.feedbackContent}>{item.content}</Text>
    </View>
  );

  const renderReportItem = ({ item }: { item: Report }) => (
    <View style={styles.reportItem}>
      <Text style={styles.reportIssue}>{item.issue}</Text>
      <Text style={styles.reportDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Báo Cáo và Phản Hồi</Text>

      <Text style={styles.subHeader}>Gửi Phản Hồi</Text>
      <TextInput
        style={styles.input}
        value={newFeedbackTitle}
        onChangeText={setNewFeedbackTitle}
        placeholder="Tiêu đề phản hồi"
      />
      <TextInput
        style={styles.input}
        value={newFeedbackContent}
        onChangeText={setNewFeedbackContent}
        placeholder="Nội dung phản hồi"
        multiline
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddFeedback}>
        <Text style={styles.addButtonText}>Gửi Phản Hồi</Text>
      </TouchableOpacity>

      <Text style={styles.subHeader}>Gửi Báo Cáo</Text>
      <TextInput
        style={styles.input}
        value={newReportIssue}
        onChangeText={setNewReportIssue}
        placeholder="Vấn đề"
      />
      <TextInput
        style={styles.input}
        value={newReportDescription}
        onChangeText={setNewReportDescription}
        placeholder="Mô tả"
        multiline
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddReport}>
        <Text style={styles.addButtonText}>Gửi Báo Cáo</Text>
      </TouchableOpacity>

      <Text style={styles.subHeader}>Danh Sách Phản Hồi</Text>
      <FlatList
        data={feedbacks}
        renderItem={renderFeedbackItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Không có phản hồi nào.</Text>}
      />

      <Text style={styles.subHeader}>Danh Sách Báo Cáo</Text>
      <FlatList
        data={reports}
        renderItem={renderReportItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Không có báo cáo nào.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginVertical: 4,
  },
  addButton: {
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  feedbackItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedbackContent: {
    fontSize: 14,
    marginVertical: 8,
  },
  reportItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  reportIssue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reportDescription: {
    fontSize: 14,
    marginVertical: 8,
  },
});

export default ReportFeedbackScreen;
