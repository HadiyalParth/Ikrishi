import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Storage/style';

export default function Storage() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>

                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>भंडारण</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>कैसे करे।</Text>

                    <View style={Styles.img_flex}>
                        <Image source={require('../../asset/img/storage_1.jpg')} style={Styles.gen_page_img} />
                        <Image source={require('../../asset/img/storage_2.jpg')} style={Styles.gen_page_img} />
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>स्थल का सबसे उपयुक्त तापमान 25 डिग्री से. होना चाहिए। </Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>धूप में 2 से 3 दिनों तक सुखाकर एवं छानकर भंडारण सूखे एवं ठंडे स्थानों में कोठियों एवं बोरों में करें। </Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>बीज में 9 % के आस पास नमी रखे। </Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>बीजों को साफ सुथरी बोरियों में भरे.</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>बोरियों की सिलाई के बाद उन्हें 6 बोरियों तक की छल्ली लगायें।</Text>
                    </View>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
