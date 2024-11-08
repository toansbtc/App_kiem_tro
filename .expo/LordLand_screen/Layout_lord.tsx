import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState,ReactNode } from 'react';
import {  Text,  Image, StatusBar, TouchableWithoutFeedback, Modal, Button } from 'react-native';
interface LayoutProps {
  children: ReactNode;
  title: string;
  navigation: any;
}
const LayoutLord  : React.FC<LayoutProps> = ({ children, title, navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#B19CD9" // Light purple placeholder
        />
        <TouchableOpacity>
          <Icon name="person-circle" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.content}>{children}</View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PostNewAd')}>
          <Icon name="add-circle" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ManageAds')}>
          <Icon name="list" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentHistory')}>
          <Icon name="card" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Icon name="chatbubble" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PackagePricing')}>
          <Icon name="pricetag" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SupportHelp')}>
          <Icon name="help-circle" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6A0DAD', // Deep purple background
    paddingTop: 30, // Pushes header down a bit to avoid covering status bar
    paddingBottom: 15, // Increased header height
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15, // Rounded corners for the header
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#DDA0DD', // Light purple search bar background
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
  },
  content: {
    flex: 1, // This will allow the content area to grow and fill the available space
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6A0DAD', // Matching header color
    paddingVertical: 15, // Increased footer height
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15, // Rounded corners for the footer
  },
});

export default LayoutLord  ;
