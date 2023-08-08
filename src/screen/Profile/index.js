import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native';
import Styles from '../Profile/style';

export default function Profile() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.flex_boxs}>
                <Image source={require('../../asset/img/female.jpeg')} style={Styles.edit_box} />
                <Image source={require('../../asset/img/user_avatar.png')} />
                </View>

                <View style={{marginTop:20}}>

                    <View style={Styles.profile_edit_text}>
                        <Text style={Styles.prof_text}>पूरा नाम :</Text>
                        <Text style={Styles.prof_texts}>Parth</Text>
                    </View>
                    <View style={Styles.profile_edit_text}>
                        <Text style={Styles.prof_text}>ईमेल :</Text>
                        <Text style={Styles.prof_texts}> abc@gmail.com</Text>
                    </View>
                    <View style={Styles.profile_edit_text}>
                        <Text style={Styles.prof_text}>फ़ोन नंबर :</Text>
                        <Text style={Styles.prof_texts}> 8469001114</Text>
                    </View>
                    <View style={Styles.profile_edit_text}>
                        <Text style={Styles.prof_text}>आयु:</Text>
                        <Text style={Styles.prof_texts}> 24</Text>
                    </View>
                    <View style={Styles.profile_edit_text}>
                        <Text style={Styles.prof_text}>उपयोगकर्ता का प्रकार :</Text>
                        <Text style={Styles.prof_texts}> Farm Input {'\n'} Seller</Text>
                    </View>
                    <View style={Styles.profile_edit_text}>
                        <Text style={Styles.prof_text}>लिंग :</Text>
                        <Text style={Styles.prof_texts}>Male</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
