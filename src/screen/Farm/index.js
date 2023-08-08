import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Farm/style';

export default function Farm() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>भूमि की तैयारी</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>मिट्टी परीक्षण</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>जुताई कब और कैसे करे</Text>

                    <View style={Styles.img_flex}>
                    <Image source={require('../../asset/img/farm_1.jpg')} style={Styles.gen_page_img} />
                    <Image source={require('../../asset/img/farm_2.jpg')} style={Styles.gen_page_img} />
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>खाली खेतों की ग्रीष्म कालीन गहरी जुताई मिट्टी पलटने वाले हल से 15  मार्च - 15 मई तक 9 से 12 इंच गहराई तक करें ।</Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>सामान्य वर्षो में विपरीत दिशा में दो बार कल्टीवेटर एवं पाटा चलाकर खेत को तैयार करें.</Text>
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>ऊबड़-खाबड़ खेतों को समतल करने के बाद खेती करने से उत्पादन में  10 -15 % तक बढ़ोतरी हो सकती हे। </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
