import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Insect/style';

export default function Insect() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>

                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पौध संरक्षण</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पेस्ट-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पेस्ट-2</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पेस्ट-3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पेस्ट-4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पेस्ट-5</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btn_boxs}>
                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>पेस्ट-6</Text>
                    </TouchableOpacity>
                </View>


                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>कीटों के नाम और उपाय की विधियां</Text>

                    <View style={Styles.img_flex}>
                        <Image source={require('../../asset/img/insect_1.jpg')} style={Styles.gen_page_img} />
                        <Image source={require('../../asset/img/insect_2.jpg')} style={Styles.gen_page_img} />
                    </View>


                    <Text style={Styles.all_text}>1.तने की मक्खी , ब्लूबीटल, अर्ध कुन्डलक इल्ली,  तम्बाखू की इल्ली, चने की फली छेदक, सफेद मक्खी, जेसिडस, माइट्स और थ्रिप्स (रस चूसक) प्रमुख हैं।</Text>

                    <Text style={Styles.all_text}>2. कीटों के आक्रमण से 5 -50 % तक पैदावार में कमी आ जाती है। </Text>
                    <Text style={Styles.all_text}>3. इन कीटों के नियंत्रण के उपाय निम्नलिखित हैं:-</Text>
                    <Text style={Styles.all_text}>4. खाली कूंड को डोरा चलाते वक्त गहरा कर दे । जल निकासी एवं जल संरक्षण दोनों होगा ।</Text>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>कृषिगत नियंत्रण</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>रासायनिक नियंत्रण</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>जैविक नियंत्रण</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
