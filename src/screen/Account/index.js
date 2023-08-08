import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../Account/style'

export default function Account({ navigation }) {
    const handleProfilePress = () => {
        navigation.navigate('Profile');
      };
    const handleChangepasswordPress = () => {
        navigation.navigate('Changepassword');
      };
    const handleMobilePress = () => {
        navigation.navigate('Mobile');
      };
  return (
    <SafeAreaView style={Styles.containers}>
    <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={Styles.all_box}>

        <TouchableOpacity style={Styles.field_btn} onPress={handleProfilePress}>
            <Text style={Styles.field_text}>उपयोगकर्ता रूपरेखा</Text>
            <Icon name="angle-right" style={Styles.icons} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.field_btn} onPress={handleChangepasswordPress}>
            <Text style={Styles.field_text}>पासवर्ड बदलें</Text>
            <Icon name="angle-right" style={Styles.icons} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.field_btn} onPress={handleMobilePress}>
            <Text style={Styles.field_text}>लॉग आउट</Text>
            <Icon name="angle-right" style={Styles.icons} color="#000" />
        </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
  )
}
