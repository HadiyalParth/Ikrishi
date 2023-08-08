import React from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from 'react-native';

import Styles from '../Specialadvice/style'

export default function Specialadvice() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.main_hedding}>
                   
                </View>

                <View style={Styles.askd__box}>
                    <Text style={Styles.box_tex}>अभी तक कोई विज्ञापन नहीं</Text>
                </View>
           
            </ScrollView>

        </SafeAreaView>
    )
}
