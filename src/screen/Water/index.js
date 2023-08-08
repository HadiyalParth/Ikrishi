import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Water/style';

export default function Water () {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>सिंचाई</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>जल संरक्षण उपाय कैसे करे</Text>

                    <View style={Styles.img_flex}>
                    <Image source={require('../../asset/img/water_1.jpg')} style={Styles.gen_page_img} />
                    <Image source={require('../../asset/img/water_2.jpg')} style={Styles.gen_page_img} />
                    </View>

                    
                    <Text style={Styles.all_text}>1.खरीफ में  सिंचाई की आवश्यकता नहीं होती है। </Text>
                   
                    <Text style={Styles.all_text}>2.फलियों में दाना भरते समय अर्थात् सितम्बर माह में यदि खेत में नमी  {'\n'} होने पर 1 या 2 हल्की सिंचाई कर सकते हे।</Text>
                    <Text style={Styles.all_text}>3. साधारण सीड ड्रील से बुवाई के समय 5-6 कतारों के बाद फरो ओपनर के माध्यम से एक कूंड बनाए । </Text>
                    <Text style={Styles.all_text}>4. खाली कूंड को डोरा चलाते वक्त गहरा कर दे । जल निकासी एवं जल संरक्षण दोनों होगा ।</Text>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
