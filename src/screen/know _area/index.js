import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../know _area/style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Know_area() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.know_box}>
                    <Text style={Styles.know_text}>अपने क्षेत्र के बारे में सब कुछ जानें</Text>
                </View>

                <View>

                    <TouchableOpacity style={Styles.field_btn}>
                        <Text style={Styles.field_text}>फसल तनाव परिवर्तनशीलता</Text>
                        <Icon name="angle-right" style={Styles.icons} color="#000" />
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.field_btn}>
                        <Text style={Styles.field_text}>मृदा नमी परिवर्तनशीलता</Text>
                        <Icon name="angle-right" style={Styles.icons} color="#000" />
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.field_btn}>
                        <Text style={Styles.field_text}>फसल जल तनाव सूचकांक</Text>
                        <Icon name="angle-right" style={Styles.icons} color="#000" />
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.field_btn}>
                        <Text style={Styles.field_text}>भूतल तापमान परिवर्तनशीलता</Text>
                        <Icon name="angle-right" style={Styles.icons} color="#000" />
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}
