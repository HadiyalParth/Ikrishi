import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';

import Styles from '../Season/style';

export default function Season() {
 
  return (
    <SafeAreaView style={Styles.containers}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

        <View style={Styles.season_box}>

            <TouchableOpacity style={Styles.season_btn}>
              <Text style={Styles.season_text}>वर्तमान मौसम</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.season_btn}>
              <Text style={Styles.season_text}>6 दिन का पूर्वानुमान</Text>
            </TouchableOpacity>

        </View>

        <View>
          <Text style={Styles.heding_text}>सिनॉप्टिक स्थिति</Text>
        </View>
       
       <View>
        <Image source={require('../../asset/img/IMG_2539.png')} style={Styles.synoptic_img} />
       </View>

      </ScrollView>

    </SafeAreaView>

  )
}
