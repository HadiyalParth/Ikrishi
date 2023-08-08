import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import Styles from '../Agronomy/style';


export default function Agronomy({ navigation }) {
    const handleInstantlistingPress = () => {
        navigation.navigate('Instantlisting');
      };
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                
                <View style={Styles.mtb_top}></View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/soyabean.png')} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={Styles.iteam_title}>सोयाबीन</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/cotton.png')} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={Styles.iteam_title}>कपास</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/wheat.png')} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={Styles.iteam_title}>गेहूँ</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/lentil.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>मसूर की दाल</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/corn.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>मक्का</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/sugarcane.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>गन्ना</Text>
                    </TouchableOpacity>

                </View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/leaf.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>अल्फाल्फा</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/bean.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>बाकला</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/bananas.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>केला</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/beet.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>मीठे चुक़ंदर</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/lime.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>साइट्रस</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/tree.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>खजूर</Text>
                    </TouchableOpacity>

                </View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/rice.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>चावल</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/spring.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>चारा</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/wheat1.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>जौ</Text>
                    </TouchableOpacity>

                </View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/tomato.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>टमाटर</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/olive.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>जैतून</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/chilli_pepper.png')} style={{width:50,height:50}} />
                        </View>
                        <Text style={Styles.iteam_title}>मिर्च</Text>
                    </TouchableOpacity>

                </View>

                <View style={Styles.main_boxs}>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/onion.png')} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={Styles.iteam_title}>प्याज</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/potato.png')} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={Styles.iteam_title}>आलू</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.home_iteam} onPress={handleInstantlistingPress}>
                        <View style={Styles.iteam_img}>
                            <Image source={require('../../asset/img/vegetable.png')} style={{ width: 50, height: 50 }} />
                        </View>
                        <Text style={Styles.iteam_title}>सब्ज़ियाँ</Text>
                    </TouchableOpacity>

                </View>




           
            </ScrollView>

        </SafeAreaView>
    )
}
