import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Expensetracker/style';


export default function Expensetracker() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.expens_iteam}>
                        <Text style={Styles.expens_text}>वर्तमान फसल</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.expens_iteam}>
                        <Text style={Styles.expens_text}>सभी फसलें</Text>                      
                    </TouchableOpacity>
                </View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.expens_iteam}>
                        <Text style={Styles.expens_text}>लंबे समय तक का विश्लेषण</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.expens_iteam}>
                        <Text style={Styles.expens_text}>कृषि ऋण</Text>                      
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
