import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Disease/style';

export default function Disease() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>

                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>बीमारी और प्रबंधन  -1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>बीमारी और प्रबंधन -2</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>बीमारी और प्रबंधन -3</Text>
                    </TouchableOpacity>
                </View>


                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>राइजोक्टोनिया एरियल ब्लाइट</Text>

                    <View style={Styles.img_flex}>
                        <Image source={require('../../asset/img/disease_1.jpg')} style={Styles.gen_page_img} />
                        <Image source={require('../../asset/img/disease_2.jpg')} style={Styles.gen_page_img} />
                    </View>


                    <Text style={Styles.all_text}>राइजोक्टोनिया एरियल ब्लाइट और एन्थ्रेक्नोज जैसे फंगल रोगों के नियंत्रण के लिए निम्न में से एक रसायन का चुनाव करे।</Text>
                    <Text style={Styles.all_texts}>फली भरने के चरण के दौरान कवकनाशी का छिड़काव करने से बीज की गुणवत्ता में सुधार करने में भी मदद मिलती है।</Text>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>पायराक्लोस्ट्रोबिन 20% w/w WG 375-500 ग्राम/हे.</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>पायराक्लोस्ट्रोबिन 13.3 ग्राम/ली + इपोक्सीकोनाजोल 50 ग्राम/ली SE 750 मिली/हे.</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>हेक्साकोनाज़ोल 5EC @ 1 मिली/ली पानी।</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>पायरोक्लोस्ट्रोबिन 20WG @ 500 ग्राम/हे</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>टेबुकोनाजोल 625 मिली/हे</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
