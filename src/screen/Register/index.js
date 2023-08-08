// import React from 'react'
import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image,TouchableOpacity, } from 'react-native';

import Styles from '../Register/style';


import { TextInput } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input'
import { Dropdown } from 'react-native-element-dropdown';


const data = [
  { label: 'किसान', value: '1' },
  { label: 'एक्सटेंशन एजेंट', value: '2' },
  { label: 'वैज्ञानिक', value: '3' },
  { label: 'नीति निर्माता', value: '4' },
  { label: 'फार्म इनपुट विक्रेता', value: '5' },
  { label: 'उद्यमी', value: '6' },
];
const gander = [
  { label: 'लिंग', value: '1' },
  { label: 'पुस्र्ष', value: '2' },
  { label: 'महिला', value: '3' },
];


export default function Register({ navigation }) {


 
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [isGander, setGander] = useState(null);
    const [isFocusgander, setIsFocusgander] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[Styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    const ganderLabel = () => {
      if (isGander || isFocusgander) {
        return (
          <Text style={[Styles.label, isFocusgander && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

  const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };


  const [text, setText] = useState('');
  const [number, onChangeNumber] = React.useState('');

  const [age, onChangeAge] = React.useState('');

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

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
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
          रजिस्टर
          </Text>
          <TextInput
            style={Styles.input}
            placeholder="नाम"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
          />
          <TextInput
        style={Styles.input}
        placeholder="ईमेल दर्ज करें"
        keyboardType="email-address" // 
        autoCapitalize="none" 
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={Styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="फोन नंबर दर्ज करें"
        keyboardType="numeric"
      />
        <TextInput
        style={Styles.input}
        placeholder="पासवर्ड दर्ज करें"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
     
      <TextInput
        style={Styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="अपनी आयु दर्ज करें"
        keyboardType="numeric"
      />
      <Dropdown
          style={[Styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={data}
          
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'उपयोगकर्ता का प्रकार' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}        
        />
        

        <Dropdown
          style={[Styles.dropdown, isFocusgander && { borderColor: 'blue' }]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={gander}
          
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusgander ? 'लिंग' : '...'}
          searchPlaceholder="Search..."
          value={isGander}
          onFocus={() => setIsFocusgander(true)}
          onBlur={() => setIsFocusgander(false)}
          onChange={item => {
            setGander(item.value);
            setIsFocusgander(false);
          }}        
        />
        </View>
        <View style={Styles.btn_boxs}>


          <TouchableOpacity style={Styles.btn} onPress={handleRegisterPress}>
            <Text style={Styles.btn_texts}>रजिस्टर</Text>
          </TouchableOpacity>

          <Text>क्या आपके पास पहले से एक खाता मौजूद है?</Text>
          <TouchableOpacity style={Styles.btn} onPress={handleLoginPress}>
            <Text style={Styles.btn_texts}>लॉग इन करें </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
