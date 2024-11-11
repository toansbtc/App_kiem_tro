import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TinMoi } from '../LordLand_screen/PostNewAd';

interface Post {
  id: string;
  title: string;
  description: string;
  author: string;
  approved: boolean;
}

interface PostManagementScreenProps {
  navigation: NavigationProp<any>;
}

const PostManagementScreen: React.FC<PostManagementScreenProps> = ({ navigation }) => {
  // let arrayPost: [TinMoi]
  const [arrayPosts, setArrayPosts] = useState<TinMoi[]>([])
  const [posts, setPosts] = useState<Post[]>([
    // { id: '1', title: 'Tin đăng 1', description: 'Mô tả tin đăng 1', author: 'Nguyễn Văn A', approved: false },
    // { id: '2', title: 'Tin đăng 2', description: 'Mô tả tin đăng 2', author: 'Trần Thị B', approved: false },
    // { id: '3', title: 'Tin đăng 3', description: 'Mô tả tin đăng 3', author: 'Lê Văn C', approved: true },
  ]);
  useEffect(() => {
    const getData = async () => {
      // await AsyncStorage.clear()
      const arrayPost: [TinMoi] = JSON.parse(await AsyncStorage.getItem('danhSachTin')) || [];
      console.log(arrayPost)
      setArrayPosts(arrayPost)
      if (arrayPost.length > 0) {
        const post: Post[] = [];
        arrayPost.forEach((value, index) => {

          if (value.xetDuyet === false) {

            post.push({ id: value.id, title: value.tieuDe, author: JSON.parse(value.nguoiDang).hoTen, approved: value.xetDuyet, description: `Diện tích phòng:${value.dienTich}\n Địa chỉ:${value.diaChiPhong}\n Giá:${value.gia}` })
          }
        })
        setPosts(post)
      }
    }

    getData();
  }, [])




  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedDescription, setEditedDescription] = useState<string>('');

  const handleEditPost = (post: Post) => {
    setEditingPostId(post.id);
    setEditedTitle(post.title);
    setEditedDescription(post.description);
  };

  const handleSavePost = async (postId: string) => {
    const postIndex = arrayPosts.findIndex((post) => post.id === postId)
    if (postIndex !== -1) {

      arrayPosts[postIndex].tieuDe = editedTitle
      console.log('postId', arrayPosts)
      await AsyncStorage.setItem('danhSachTin', JSON.stringify(arrayPosts));
    }
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, title: editedTitle } : post
      )
    );
    setEditingPostId(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleDeletePost = (postId: string) => {
    Alert.alert('Xóa', `Bạn có chắc muốn xóa tin đăng ID: ${postId}?`, [
      { text: 'Hủy', style: 'cancel' },
      {
        text: 'Xóa',
        onPress: async () => {
          setPosts(posts.filter((post) => post.id !== postId));

          const updatedArrayPost = arrayPosts.filter(post => post.id !== postId);
          await AsyncStorage.setItem('danhSachTin', JSON.stringify(updatedArrayPost));
        },
        style: 'destructive',
      },
    ]);
  };

  const handleApprovePost = async (postId: string) => {
    const postIndex = arrayPosts.findIndex((post) => post.id === postId)
    if (postIndex !== -1) {

      arrayPosts[postIndex].xetDuyet = true
      console.log('postId', arrayPosts)
      await AsyncStorage.setItem('danhSachTin', JSON.stringify(arrayPosts));
    }
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, approved: true } : post
      )
    );
    Alert.alert('Thông báo', 'Tin đăng đã được duyệt.');
  };

  const handleReportPost = (postId: string) => {
    Alert.alert('Báo cáo', 'Tin đăng này chứa nội dung nhạy cảm hoặc vi phạm.', [{ text: 'OK' }]);
  };

  const renderPostItem = ({ item }: { item: Post }) => (
    <View style={styles.postItem}>
      {editingPostId === item.id ? (
        <>
          <TextInput
            style={styles.input}
            value={editedTitle}
            onChangeText={setEditedTitle}
            placeholder="Tiêu đề"
          />
          <TextInput
            style={styles.input}
            value={editedDescription}
            onChangeText={setEditedDescription}
            placeholder="Mô tả"
            editable={false}
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => handleSavePost(item.id)}
          >
            <Text style={styles.buttonText}>Lưu</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>MÔ TẢ:</Text>
          <Text style={styles.postDescription}>{item.description}</Text>
          <Text style={styles.postAuthor}>Người đăng: {item.author}</Text>
          <Text
            style={[
              styles.postStatus,
              { color: item.approved ? '#28a745' : '#ffc107' }, // màu sắc phụ thuộc vào trạng thái duyệt
            ]}
          >
            Trạng thái: {item.approved ? 'Đã duyệt' : 'Chưa duyệt'}
          </Text>
          <View style={styles.postActions}>
            {!item.approved && (
              <TouchableOpacity
                style={styles.approveButton}
                onPress={() => handleApprovePost(item.id)}
              >
                <Text style={styles.buttonText}>Duyệt</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.reportButton}
              onPress={() => handleReportPost(item.id)}
            >
              <Text style={styles.buttonText}>Báo cáo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEditPost(item)}
            >
              <Text style={styles.buttonText}>Chỉnh sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeletePost(item.id)}
            >
              <Text style={styles.buttonText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quản Lý Tin Đăng</Text>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Không có tin đăng nào.</Text>}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddPost')}
      >
        <Text style={styles.addButtonText}>Thêm Tin Đăng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  postItem: { padding: 16, marginVertical: 8, backgroundColor: '#fff', borderRadius: 8 },
  postTitle: { fontSize: 18, fontWeight: 'bold' },
  postDescription: { fontSize: 14, marginVertical: 8 },
  postAuthor: { fontSize: 12, color: '#888' },
  postStatus: { fontSize: 12 },
  postActions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  buttonText: { color: '#007BFF' },
  approveButton: { padding: 8 },
  reportButton: { padding: 8 },
  editButton: { padding: 8 },
  deleteButton: { padding: 8 },
  saveButton: { padding: 12, backgroundColor: '#007BFF', borderRadius: 4, marginTop: 8 },
  addButton: { padding: 12, backgroundColor: '#28a745', borderRadius: 4, marginTop: 16, alignItems: 'center' },
  addButtonText: { color: '#fff', fontSize: 16 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 4, padding: 8, marginVertical: 4 },
});

export default PostManagementScreen;
