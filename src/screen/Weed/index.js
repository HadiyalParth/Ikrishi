import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Weed/style';

export default function Weed() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>

                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>खरपतवार प्रबंधन -1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>खरपतवार प्रबंधन -2</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>यांत्रिक विधिया</Text>

                    <View style={Styles.img_flex}>
                        <Image source={require('../../asset/img/weed_1.jpg')} style={Styles.gen_page_img} />
                        <Image source={require('../../asset/img/weed_1.jpg')} style={Styles.gen_page_img} />
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>सोयाबीन की फसल में पहली निराई बुवाई के 20-25 दिन बाद तथा दूसरी 40-45दिन बाद करनी चाहिए।</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>इस हेतु फसल उगने के पश्चात डोरे/कुलपे चलावे.</Text>
                    </View>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
