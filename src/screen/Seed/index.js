import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Seed/style';

export default function Seed() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>बीज दर</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>बीजोपचार</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>बीज की मात्रा ,बुवाई का समय ,फसल अंतरण और बुवाई की विधि</Text>

                    <View style={Styles.img_flex}>
                    <Image source={require('../../asset/img/seed_1.jpg')} style={Styles.gen_page_img} />
                    <Image source={require('../../asset/img/seed_2.jpg')} style={Styles.gen_page_img} />
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>कतारों  की दूरी 45 सेंटीमीटर और पौधे से पौधे की दूरी 5-10 सेंटीमीटर.</Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>बीज गहराई 2-3 सेमी .</Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>बीज दर 65-70 किग्रा/हे . </Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>जून माह के दूसरे सप्ताह से जुलाई माह के प्रथम सप्ताह  उचित होता हे.</Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}> मानसून के आगमन के पश्चात ही, न्यूनतम 10 सेमी वर्षा होने की स्थिति में बोवनी करें.</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>गहरी काली भूमि तथा अधिक वर्षा क्षेत्रों में बी.बी.एफ (चौड़ी क्यारी प्रणाली) या (रिज फरो पद्धति) कुडमेड प्राणाली का चयन करें.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
