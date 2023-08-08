
import React from 'react'
import { Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native'
import Styles from '../../asset/public/style/styles';
// import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function MobileScreen({ navigation }) {
  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={Styles.logo_view}>
          <Image source={require('../../asset/img/splash-logo.jpeg')} style={Styles.logo} />
        </View>
        <View style={{ textAlign: 'center', justifyContent: 'center' }}>
          <Text style={Styles.main_text}>
            This application helps small holder farmers to digitally increase
            India will help them optimize resource use and provide context specific advice under changing climate
            market scenario.
          </Text>
        </View>
        <View style={Styles.btn_boxs}>


          <TouchableOpacity style={Styles.btn} onPress={handleRegisterPress}>
            <Text style={Styles.btn_texts}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.btn}>
            <Text style={Styles.btn_texts}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.main_image_box}>
          <Image source={require('../../asset/img/icarda.png')} style={Styles.logo_img} />
          <Image source={require('../../asset/img/gomp.png')} style={Styles.logo_img} />
        </View>
        <View>
          <Image source={require('../../asset/img/kisaan.jpg')} style={Styles.kishan_imag} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
