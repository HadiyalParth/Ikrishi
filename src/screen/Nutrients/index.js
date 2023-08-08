import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Nutrients/style';

export default function Nutrients() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पोषण प्रबंधन</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>उर्वरकों का प्रयोग</Text>

                    <View style={Styles.img_flex}>
                    <Image source={require('../../asset/img/nutrients_1.jpg')} style={Styles.gen_page_img} />
                    <Image source={require('../../asset/img/nutrients_2.jpg')} style={Styles.gen_page_img} />
                    </View>

                    <Text style={Styles.all_text}>1. सोयाबीन फसल के लिए आवश्यक पोषक तत्त्वों  25:60:40:20: कि.ग्रा/ हे (नाइट्रोजन, फॉस्फोरस, पोटाश व सल्फर) की पूर्ति केवल बोवनी के समय करें. </Text>

                    <Text style={Styles.all_text}>इसके लिए इनमे से कोई भी एक उर्वरकों के स्त्रोत का चयन किया जा सकता हैं :-</Text>
                   
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>यूरिया 56 कि.ग्रा + 375 किग्रा सुपर फॉस्फेट + 67 किग्रा म्यूरेट ऑफ पोटाश </Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}> डी.ए.पी. 125 किग्रा + 67 किग्रा म्यूरेट ऑफ़ पोटाश + 25 किग्रा/ हे बेन्टोनेट सल्फर या जिप्सम 200  कि.ग्रा/ हे .</Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>मिश्रित उर्वरक 12:32:16 @ 200 किग्रा + 25 किग्रा/ हे बेन्टोनेट सल्फर या जिप्सम 200  कि.ग्रा/ हे.</Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>मिश्रित उर्वरक 20:20:13 @300 किग्रा +25 किग्रा/ है बेन्टोनेट सल्फर या जिप्सम 200  कि.ग्रा/ हे.</Text>
                    </View>

                    <Text style={Styles.all_text}>2. मिट्टी परिक्षण के आधार पर वैज्ञानिको के सुझाव अनुसार उवर्रको का प्रयोग करे। </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
