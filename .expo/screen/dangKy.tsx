import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesDk from './styleDK';



export default function DangKy({ navigation }) {
  const [selectedOption, setSelectedOption] = useState<string>('Người thuê'); // Default to "Người thuê"
  const [formData, setFormData] = useState({
    id: '',
    hoTen: '',
    soDienThoai: '',
    email: '',
    diaChi: '',
    soCanCuocCongDan: '',
    giayPhep: '',
    UserName: '',
    Pass: '',
    confirmPass: '', // Password confirmation
    role: 'Người thuê', // Default role
  });

  const options: string[] = ['Người thuê', 'Chủ trọ'];

  useEffect(() => {
    generateAccountId(selectedOption);
  }, [selectedOption]);

  // Function to generate random account ID based on role
  const generateAccountId = (role: string) => {
    let prefix = role === 'Chủ trọ' ? 'CT' : 'NT';
    let randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // Generate 3-digit number
    setFormData(prevData => ({ ...prevData, id: `${prefix}${randomNumber}` })); // Update account ID in state
  };

  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle role selection
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setFormData({ ...formData, role: option }); // Update role in formData
  };

// Xử lý đăng ký
const handleRegistration = async () => {
  const { id, hoTen, soDienThoai, email, UserName, Pass, confirmPass } = formData;

  // Kiểm tra các trường không được để trống
  if (!UserName || !id || !Pass || !hoTen || !soDienThoai || !email) {
    Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
    return;
  }
  
  // Kiểm tra định dạng số điện thoại
  if (!/^\d{10}$/.test(soDienThoai)) {
    Alert.alert('Lỗi', 'Số điện thoại phải gồm 10 chữ số.');
    return;
  }

  // Kiểm tra xem mật khẩu có khớp không
  if (Pass !== confirmPass) {
    Alert.alert('Lỗi', 'Mật khẩu không khớp. Vui lòng kiểm tra lại.');
    return;
  }

  // Xác thực định dạng email
  if (!email.endsWith('@gmail.com')) {
    Alert.alert('Lỗi', 'Email phải có định dạng @gmail.com.');
    return;
  }

  try {
    // Lấy danh sách người dùng hiện có từ AsyncStorage
    const existingUsers = await AsyncStorage.getItem('users');
    const usersArray = existingUsers ? JSON.parse(existingUsers) : [];

    // Kiểm tra xem tên tài khoản đã tồn tại chưa
    const userExists = usersArray.some(user => user.UserName === UserName);
    if (userExists) {
      Alert.alert('Lỗi', 'Tên tài khoản đã tồn tại. Vui lòng chọn tên khác.');
      return;
    }

    const phoneExists = usersArray.some(user => user.soDienThoai === soDienThoai);
    if (phoneExists) {
      Alert.alert('Lỗi', 'Số điện thoại đã được đăng ký. Vui lòng sử dụng số khác.');
      return;
    }

    // Thêm tài khoản mới vào danh sách
    usersArray.push(formData);

    // Lưu danh sách mới vào AsyncStorage
    await AsyncStorage.setItem('users', JSON.stringify(usersArray));

    Alert.alert('Đăng ký thành công', 'Bạn đã đăng ký thành công.');
    navigation.navigate('DangNhap'); // Chuyển hướng đến trang đăng nhập
  } catch (error) {
    console.error('Lỗi khi lưu dữ liệu người dùng', error);
    Alert.alert('Đăng ký thất bại', 'Đã có lỗi xảy ra. Vui lòng thử lại.');
  }
};


  return (
    <View style={stylesDk.container}>
      <Text style={stylesDk.text}>Đăng ký</Text>

      {/* Role Selection */}
      <View style={stylesDk.radioButtonGroup}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={stylesDk.radioButtonContainer}
            onPress={() => handleOptionSelect(option)}
          >
            <View style={stylesDk.radioButton}>
              {selectedOption === option ? <View style={stylesDk.radioButtonSelected} /> : null}
            </View>
            <Text style={stylesDk.radioText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={stylesDk.Dangnhap}>
        <View style={stylesDk.viewnut}>

          <View style={stylesDk.inputContainer}>
                  <Text style={stylesDk.label}>ID</Text>
                  <TextInput
                    style={[stylesDk.input, { fontWeight: 'bold' }]} // Bold text
                    placeholder="Nhập tài khoản"
                    value={formData.id} // Use generated ID
                    editable={false} // Make field non-editable
                  />
                </View>

         {/* User Information Fields */}
          <View style={stylesDk.inputContainer}>
            <Text style={stylesDk.label}>Tên đăng nhập</Text>
            <TextInput
              style={stylesDk.input}
              placeholder="Nhập tên đăng nhập"
              onChangeText={(value) => handleInputChange('UserName', value)}
            />
          </View>

          <View style={stylesDk.inputContainer}>
            <Text style={stylesDk.label}>Mật khẩu</Text>
            <TextInput
              style={stylesDk.input}
              placeholder="Nhập mật khẩu"
              secureTextEntry={true}
              onChangeText={(value) => handleInputChange('Pass', value)}
            />
          </View>

          <View style={stylesDk.inputContainer}>
            <Text style={stylesDk.label}>Nhập lại mật khẩu</Text>
            <TextInput
              style={stylesDk.input}
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={true}
              onChangeText={(value) => handleInputChange('confirmPass', value)}
            />
          </View>

          {/* Conditional Fields Based on Role Selection */}
          {selectedOption === 'Người thuê' && (
            <>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Họ tên</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập họ tên"
                  onChangeText={(value) => handleInputChange('hoTen', value)}
                />
              </View>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Số điện thoại</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập số điện thoại"
                  onChangeText={(value) => handleInputChange('soDienThoai', value)}
                />
              </View>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Email</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập email"
                  onChangeText={(value) => handleInputChange('email', value)}
                />
              </View>
            </>
          )}

          {selectedOption === 'Chủ trọ' && (
            <>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Họ tên</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập họ tên"
                  onChangeText={(value) => handleInputChange('hoTen', value)}
                />
              </View>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Số điện thoại</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập số điện thoại"
                  onChangeText={(value) => handleInputChange('soDienThoai', value)}
                />
              </View>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Email</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập email"
                  onChangeText={(value) => handleInputChange('email', value)}
                />
              </View>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Địa chỉ</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập địa chỉ"
                  onChangeText={(value) => handleInputChange('diaChi', value)}
                />
              </View>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Số Căn cước công dân</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập số căn cước công dân"
                  onChangeText={(value) => handleInputChange('soCanCuocCongDan', value)}
                />
              </View>
              <View style={stylesDk.inputContainer}>
                <Text style={stylesDk.label}>Giấy phép</Text>
                <TextInput
                  style={stylesDk.input}
                  placeholder="Nhập thông tin giấy phép"
                  onChangeText={(value) => handleInputChange('giayPhep', value)}
                />
              </View>
            </>
          )}

          {/* Register Button */}
          <TouchableOpacity onPress={handleRegistration}>
            <View style={stylesDk.button}>
              <Text style={stylesDk.buttonText}>Đăng ký</Text>
            </View>
          </TouchableOpacity>

        </View>

        {/* Login Option */}
        <View style={stylesDk.footer}>
          <Text style={stylesDk.footerText}>Đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('DangNhap')}>
            <Text style={stylesDk.footerLink}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
