import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FourTextInputFields = () => {
  const [topLeft, setTopLeft] = useState('');
  const [topRight, setTopRight] = useState('');
  const [bottomLeft, setBottomLeft] = useState('');
  const [bottomRight, setBottomRight] = useState('');

  return (
    <View style={styles.container}>
      {/* Hàng trên */}
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Trường trái trên"
          value={topLeft}
          onChangeText={setTopLeft}
        />
        <TextInput
          style={styles.input}
          placeholder="Trường phải trên"
          value={topRight}
          onChangeText={setTopRight}
        />
      </View>
      
      {/* Hàng dưới */}
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Trường trái dưới"
          value={bottomLeft}
          onChangeText={setBottomLeft}
        />
        <TextInput
          style={styles.input}
          placeholder="Trường phải dưới"
          value={bottomRight}
          onChangeText={setBottomRight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});

export default FourTextInputFields;
