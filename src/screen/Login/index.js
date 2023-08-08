// import React from 'react'
import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image,TouchableOpacity, } from 'react-native';

import Styles from '../Login/styles';


import { TextInput } from 'react-native-gesture-handler';


export default function Login({ navigation }) {

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  const handleLoginPress = () => {
    navigation.navigate('Home');
  };


  const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleSubmit = () => {
    if (isValidEmail(email)) {
      Alert.alert('Success', 'Valid email address: ' + email);
    } else {
      Alert.alert('Error', 'Please enter a valid email address.');
    }
  };
  const isValidEmail = (text) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };



  return (
    <SafeAreaView style={Styles.containers}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={Styles.register_view}>
          <Image source={require('../../asset/img/logo.png')} />
        </View>
        <View>
          <Text style={Styles.main_text}>
          लॉग इन करें
          </Text>

          <TextInput
            style={Styles.input}
            placeholder="ईमेल"
            keyboardType="email-address" // 
            autoCapitalize="none" 
            value={email}
            onChangeText={handleEmailChange}
      />

        <TextInput
        style={Styles.input}
        placeholder="पासवर्ड"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />

      
        </View>
        <View style={Styles.btn_boxs}>

        <TouchableOpacity style={Styles.btn} onPress={handleLoginPress}>
            <Text style={Styles.btn_texts}>लॉग इन करें</Text>
          </TouchableOpacity>
          
          <Text>खाता नहीं है?</Text>

          <TouchableOpacity style={Styles.btns} onPress={handleRegisterPress}>
            <Text style={Styles.btn_texts}>रजिस्टर</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
