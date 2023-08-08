import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';

import Styles from '../Changepassword/style';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Changepassword() {
    const [currentpassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newConfirmPassword, setNewConfirmPassword] = useState('');

    const handleSubmit = () => {
        console.log('HI');  
    }

    return (
        <SafeAreaView style={Styles.containers}>
            <KeyboardAwareScrollView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>

                    <View style={Styles.mtb_top}></View>

                    <TextInput
                        style={Styles.input}
                        placeholder="वर्तमान पासवर्ड "
                        secureTextEntry={true}
                        value={currentpassword}
                        onChangeText={(value) => { setCurrentPassword(value) }}
                    />
                    <TextInput
                        style={Styles.input}
                        placeholder="नया पासवर्ड"
                        secureTextEntry={true}
                        value={newPassword}
                        onChangeText={(value) => { setNewPassword(value) }}
                    />
                    <TextInput
                        style={Styles.input}
                        placeholder="पासवर्ड की पुष्टि कीजिये"
                        secureTextEntry={true}
                        value={newConfirmPassword}
                        onChangeText={(value) => { setNewConfirmPassword(value) }}
                    />

                    <TouchableOpacity style={Styles.button} onPress={() => handleSubmit()}>
                        <Text style={Styles.buttonText}>पासवर्ड बदलें</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
