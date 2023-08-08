import React, { useState } from 'react';

import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Askquestions/style';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';

const data = [
    { label: 'जल प्रबंधन', value: '1' },
    { label: 'बीज और किस्में', value: '2' },
    { label: 'कीट और रोग', value: '3' },
    { label: 'पौधा पोषण', value: '4' },
    { label: 'खरपतवार प्रबंधन', value: '5' },
    { label: 'बाज़ार की स्थिति', value: '6' },
    { label: 'सब्सिडी और ऋण', value: '7' },
    { label: 'सामान्य सवाल', value: '8' },
];

export default function Askquestions() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [mulImage, setMulImage] = useState([]);

    const [text, setText] = useState('');
    const [number, onChangeNumber] = React.useState('');


    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[Styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };


    const uploadMyPhotoMultiple = () => {
        check(PERMISSIONS.ANDROID.CAMERA)
            .then(result => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        break;
                    case RESULTS.DENIED:
                        request(PERMISSIONS.ANDROID.CAMERA).then(result => {
                            if (result === 'granted') {
                                launchCameraMyPhotoMultiple();
                            }
                        });
                        break;
                    case RESULTS.GRANTED:
                        launchCameraMyPhotoMultiple();
                        break;
                    case RESULTS.BLOCKED:
                        request(PERMISSIONS.ANDROID.CAMERA).then(result => {
                            if (result === 'granted') {
                                launchCameraMyPhotoMultiple();
                            }
                        });
                        break;
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const launchCameraMyPhotoMultiple = () => {
        launchCamera({ maxWidth: 600, maxHeight: 600, quality: 1 }, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                if (
                    response?.assets === undefined ||
                    response?.assets === null ||
                    response?.assets === ''
                ) {
                } else {
                    mulImage.push({
                        name: response?.assets[0]?.fileName,
                        type: response?.assets[0]?.type,
                        uri: response?.assets[0]?.uri,
                    });
                }
            }
        });
    };

    console.log(mulImage);
    const MultiaplImageUpload = () => {
        launchImageLibrary({ noData: true }, response => {
            if (response) {
                if (
                    response?.assets === undefined ||
                    response?.assets === null ||
                    response?.assets === ''
                ) {
                } else {
                    mulImage.push({
                        name: response.assets[0].fileName,
                        type: response.assets[0].type,
                        uri: iOS_Platform
                            ? response.assets[0].uri.replace('file://', '')
                            : response.assets[0].uri,
                    });
                }
            }
        });
    };
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={Styles.mtb_top}></View>

                <View style={Styles.main_hedding}>
                    <Text style={Styles.list_text}>आपके सभी प्रश्नों की सूची</Text>
                </View>

                <Text style={Styles.label_text}>प्रश्न प्रकार का चयन करें</Text>
                <Dropdown
                    style={[Styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={Styles.placeholderStyle}
                    selectedTextStyle={Styles.selectedTextStyle}
                    inputSearchStyle={Styles.inputSearchStyle}
                    iconStyle={Styles.iconStyle}
                    data={data}

                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'प्रश्न चुनें' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />

                <Text style={Styles.label_text}>संदेश</Text>
                <TextInput style={Styles.addres_input}
                    placeholder='आपका प्रश्न यहाँ पर'
                    multiline={true}
                    editable={true}
                    numberOfLines={5}
                    keyboardType='default' />

                <Text style={Styles.label_text}>छवि अपलोड करें (वैकल्पिक)</Text>
                <TouchableOpacity style={Styles.input}
                    placeholder='आपका प्रश्न यहाँ पर'
                    onPress={() => (uploadMyPhotoMultiple())}>
                    <Text>Choose File</Text>
                </TouchableOpacity>

                <Text style={Styles.notis_txt}>केवल जेपीजी, जेपीईजी, पीएनजी और जीआईएफ फाइलों की अनुमति है</Text>


                <TouchableOpacity style={Styles.askq_btn}>
                    <Text style={Styles.askq_text}>जमा करना</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}
