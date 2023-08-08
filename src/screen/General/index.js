import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../General/style';

export default function General() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>जानकारी</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>प्रस्तावना</Text>

                    <View style={Styles.img_flex}>
                    <Image source={require('../../asset/img/soyaben_1.jpg')} style={Styles.gen_page_img} />
                    <Image source={require('../../asset/img/soyaben_2.jpg')} style={Styles.gen_page_img} />
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>मध्यप्रदेश में सोयाबीन खरीफ की एक प्रमुख फसल है, जिसकी खेती लगभग 53.00 लाख हेक्टेयर क्षेत्रफल में की जाती है । </Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>देश में सोयाबीन उत्पादन के क्षेत्र में म.प्र. अग्रणी है.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
