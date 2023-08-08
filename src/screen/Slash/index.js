
import React from 'react'
import { Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native'
import Styles from '../Slash/styles';
import { Alert } from 'react-native';

export default function MobileScreen({ navigation }) {
  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
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
          यह एप्लिकेशन छोटे धारक किसानों को डिजिटल रूप से बढ़ाने में मदद करता है भारत उन्हें संसाधन उपयोग का अनुकूलन करने में मदद करेगा और बदलती जलवायु के तहत संदर्भ विशिष्ट सलाह प्रदान करेगा बाजार परिदृश्य।
          </Text>
        </View>
        <View style={Styles.btn_boxs}>


          <TouchableOpacity style={Styles.btn} onPress={handleRegisterPress}>
            <Text style={Styles.btn_texts}>पंजीकरण करवाना</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.btn} onPress={handleLoginPress}>
            <Text style={Styles.btn_texts}>जारी रखना</Text>
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
