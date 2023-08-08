import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Instantlisting/style';


export default function Instantlisting({ navigation }) {
    const handleGeneralPress = () => {
        navigation.navigate('General');
      };
    const handleFarmPress = () => {
        navigation.navigate('Farm');
      };
    const handleSeedPress = () => {
        navigation.navigate('Seed');
      };
    const handleNutrientsPress = () => {
        navigation.navigate('Nutrients');
      };
    const handleWaterPress = () => {
        navigation.navigate('Water');
      };
    const handleInsectPress = () => {
        navigation.navigate('Insect');
      };
    const handleDiseasePress = () => {
        navigation.navigate('Disease');
      };
    const handleWeedPress = () => {
        navigation.navigate('Weed');
      };
    const handleStoragePress = () => {
        navigation.navigate('Storage');
      };
    const handleSpecialcasePress = () => {
        navigation.navigate('Specialcase');
      };
  return (
    <SafeAreaView style={Styles.containers}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>

      <View style={Styles.mtb_top}></View>

      <View style={Styles.main_boxs}>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleGeneralPress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/general.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>सामान्य</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleFarmPress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/farm.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>खेत</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.main_boxs}>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleSeedPress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/Seed.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>बीज</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleNutrientsPress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/nutrients.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>पोषक तत्त्व</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.main_boxs}>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleWaterPress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/water.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>पानी</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleInsectPress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/insect.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>कीट</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.main_boxs}>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleDiseasePress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/disease.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>बीमारी</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleWeedPress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/weed.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>खर-पतवार</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.main_boxs}>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleStoragePress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/accumulation.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>संचयन</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.home_iteam} onPress={handleSpecialcasePress}>
          <View style={Styles.iteam_img}>
            <Image source={require('../../asset/img/agronomy.png')} style={Styles.iteam_imgbox} />
          </View>
          <Text style={Styles.iteam_title}>विशेष मामला</Text>
        </TouchableOpacity>
      </View>


    
    </ScrollView>

  </SafeAreaView>
  )
}
