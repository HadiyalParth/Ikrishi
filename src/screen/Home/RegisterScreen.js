// import React from 'react'
import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, } from 'react-native';

import Styles from '../../asset/public/style/styles';
import { TextInput } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input'

export default function RegisterScreen() {

  const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // const handleSubmit = () => {
  //   // Handle the password submission here
  //   console.log('Password submitted:', password);
  // };

  const [text, setText] = useState('');
  const [number, onChangeNumber] = React.useState('');
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
            Register
          </Text>
          <TextInput
            style={Styles.input}
            placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
          />
          <TextInput
        style={Styles.input}
        placeholder="Enter your email"
        keyboardType="email-address" // 
        autoCapitalize="none" 
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
        <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <NumericInput type='up-down' onChange={value => console.log(value)} 
        placeholder="age"
      />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
