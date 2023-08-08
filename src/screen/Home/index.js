import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';

import Styles from '../Home/styles';

export default function Home({ navigation }) {
  const handleHomePress = () => {
    navigation.navigate('Home');
  };
  const handleAgronomyPress = () => {
    navigation.navigate('Agronomy');
  };
  const handleExpertPress = () => {
    navigation.navigate('Expert');
  };
  const handleAccountPress = () => {
    navigation.navigate('Account');
  };
  const handleSeasonPress = () => {
    navigation.navigate('Season');
  };
  const handleKnow_areaPress = () => {
    navigation.navigate('Know_area');
  };
  const handleConversationsPress = () => {
    navigation.navigate('Conversations');
  };
  const handleAnnouncementPress = () => {
    navigation.navigate('Announcement');
  };
  const handleSpecialadvicePress = () => {
    navigation.navigate('Specialadvice');
  };
  const handleExpensetrackerPress = () => {
    navigation.navigate('Expensetracker');
  };
  return (
    <SafeAreaView style={Styles.containers}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

        <View style={Styles.mtb_top}></View>

        <View style={Styles.main_boxs}>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleSeasonPress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/agroment.png')} />
            </View>
            <Text style={Styles.iteam_title}>मौसम</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleKnow_areaPress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/field.png')} />
            </View>
            <Text style={Styles.iteam_title}>अपने क्षेत्र को जानें</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.main_boxs}>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleExpertPress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/expert.png')} />
            </View>
            <Text style={Styles.iteam_title}>एक विशेषज्ञ से पूछो</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleConversationsPress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/discussion.png')} />
            </View>
            <Text style={Styles.iteam_title}>वार्तालाप</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.main_boxs}>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleAnnouncementPress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/announcement.png')} />
            </View>
            <Text style={Styles.iteam_title}>घोषणा</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleSpecialadvicePress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/advisory.png')} />
            </View>
            <Text style={Styles.iteam_title}>विशेष सलाह</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.main_boxs}>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleExpensetrackerPress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/finaces.png')} />
            </View>
            <Text style={Styles.iteam_title}>व्यय ट्रैकर</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.home_iteam} onPress={handleAgronomyPress}>
            <View style={Styles.iteam_img}>
              <Image source={require('../../asset/img/crop_pop.png')} />
            </View>
            <Text style={Styles.iteam_title}>कृषिविज्ञान</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Image source={require('../../asset/img/dashboard.jpg')} style={Styles.kishan_imag} />
        </View>

        {/* Footer Start */}
        <View style={Styles.footer_main}>

          <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} onPress={handleHomePress}>
            <Image source={require('../../asset/img/bottom_icon/home/home_inactive.png')} />
            <Text style={{ color: '#000' }}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
            onPress={handleAgronomyPress}>

            <Image source={require('../../asset/img/bottom_icon/home/home_inactive.png')} />
            <Text style={{ color: '#000' }}>Agronomy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} onPress={handleExpertPress} >
            <Image source={require('../../asset/img/bottom_icon/home/home_inactive.png')} />
            <Text style={{ color: '#000' }}>Expert</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} onPress={handleAccountPress}>
            <Image source={require('../../asset/img/bottom_icon/home/home_inactive.png')} />
            <Text style={{ color: '#000' }}>Account</Text>
          </TouchableOpacity>


        </View>
        {/* Footer End */}

      </ScrollView>

    </SafeAreaView>

  )
}
