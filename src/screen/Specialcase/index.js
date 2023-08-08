import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Specialcase/style';

export default function Specialcase() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.btn_boxs}>

                    <TouchableOpacity style={Styles.btn}>
                        <Text style={Styles.btn_texts}>कटाई व गहाई:</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={Styles.general_box}>

                    <Text style={Styles.hedding_text}>कैसे करे।</Text>

                    <View style={Styles.img_flex}>
                        <Image source={require('../../asset/img/specialcase_1.jpg')} style={Styles.gen_page_img} />
                        <Image source={require('../../asset/img/specialcase_2.jpg')} style={Styles.gen_page_img} />
                    </View>

                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>फसल की कटाई उपयुक्त समय पर कर लेने से चटकने पर दाने बिखरने से होने वाली हानि में समुचित कमी लाई जा सकती है।</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>फलियों के पकने की उचित अवस्था पर (फलियों का रंग बदलने पर या हरापन पूर्णतया समाप्त होने पर) कटाई करनी चाहिए ।</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}> कटाई के समय बीजों में उपयुक्त नमी की मात्रा 14-16 प्रतिशत है ।</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>बीजों को साफ सुथरी बोरियों में भरे.</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>बोरियों की सिलाई के बाद उन्हें 6 बोरियों तक की छल्ली लगायें।</Text>
                    </View>
                    <View style={Styles.img_flexs}>
                    <Text style={Styles.doted}>·</Text>
                    <Text style={Styles.all_text}>फसल को 2-3 दिन तक धूप में सुखाकर थ्रशर से धीमी गति (300-400 आर.पी.एम.) पर गहाई करनी चाहिए ।</Text>
                    </View>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
