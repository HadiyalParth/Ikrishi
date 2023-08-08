import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from 'react-native';

import Styles from '../Expert/Style'

export default function Expert({ navigation }) {
    const handleAskquestionsPress = () => {
        navigation.navigate('Askquestions');
      };
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.main_hedding}>
                    <Text style={Styles.list_text}>आपके सभी प्रश्नों की सूची</Text>
                    <TouchableOpacity style={Styles.ask_btn} onPress={handleAskquestionsPress}>
                        <Text style={Styles.aks_text}>पूछना ?</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.askd__box}>
                    <Text style={Styles.box_tex}>आपने अभी तक कोई प्रश्न नहीं पूछा है। मदद की ज़रूरत है? अभी पूछें </Text>
                </View>
           
            </ScrollView>

        </SafeAreaView>
    )
}
