import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, } from 'react-native';
import Styles from '../Conversations/style'
import { Tab, TabView } from '@rneui/themed';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Conversations() {
    const [index, setIndex] = useState(0);
    const [search, setSearch] = useState('')


    updateSearch = (search) => {
        setSearch({ search });
    };
    return (

        <>
            <View style={Styles.chat_boxs}>
                <Input
                    placeholder="खोजना..."
                    onChangeText={updateSearch}
                    value={search}
                    style={Styles.search_box}
                />
            </View>
            <View style={Styles.containers}>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    style={{ backgroundColor: '#fff' }}
                    indicatorStyle={{
                        backgroundColor: '#008000',
                        height: 5,
                    }}
                    variant="#fff"
                >

                    <Tab.Item
                        title=" लोग"
                        titleStyle={{ fontSize: 16, color: '#000' }}
                    // icon={{ name: 'timer', type: 'ionicon', color: '#000' }}
                    />
                    <Tab.Item
                        title=" समूह"
                        color={"#000"}
                        titleStyle={{ fontSize: 16, color: '#000', }}

                    />

                </Tab>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity style={Styles.pepole_btn}>
                    <Text style={Styles.pepole_text}>लोगों को जोड़ें</Text>
                </TouchableOpacity>
            </View>

            <TabView value={index} onChange={setIndex} animationType="spring">

                <TabView.Item style={Styles.bgc}>
                    <View style={Styles.containers}>

                        <View style={Styles.all_boxs}>

                            <TouchableOpacity style={Styles.clint_name_list}>

                                <View style={Styles.Box_flex}>
                                    <Image source={require('../../asset/img/female.jpeg')} style={Styles.profile_img} />
                                    <View>
                                        <Text> Kkunajn </Text>
                                        <Text> Kkunjan@gmail.com </Text>
                                    </View>
                                </View>
                                <View>
                                    <Icon name="angle-right" style={Styles.icons} color="#000" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.clint_name_list}>
                                <View style={Styles.Box_flex}>
                                    <Image source={require('../../asset/img/male.jpeg')} style={Styles.profile_img} />
                                    <View>
                                        <Text> Mr.Chiarg </Text>
                                        <Text> chiragbhisikar2005@gmail.com </Text>
                                    </View>
                                </View>
                                <View>
                                    <Icon name="angle-right" style={Styles.icons} color="#000" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.clint_name_list}>
                                <View style={Styles.Box_flex}>
                                    <Image source={require('../../asset/img/male.jpeg')} style={Styles.profile_img} />
                                    <View>
                                        <Text> Harshil </Text>
                                        <Text> hadiyalharshil5@gmail.com </Text>
                                    </View>
                                </View>
                                <View>
                                    <Icon name="angle-right" style={Styles.icons} color="#000" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.clint_name_list}>

                                <View style={Styles.Box_flex}>
                                    <Image source={require('../../asset/img/male.jpeg')} style={Styles.profile_img} />
                                    <View>
                                        <Text> Mr.Chirag Bhisikar </Text>
                                        <Text> chiragbhisikar2208@gmail.com </Text>
                                    </View>
                                </View>

                                <View>
                                    <Icon name="angle-right" style={Styles.icons} color="#000" />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.clint_name_list}>

                                <View style={Styles.Box_flex}>
                                    <Image source={require('../../asset/img/female.jpeg')} style={Styles.profile_img} />
                                    <View>
                                        <Text> Pushti </Text>
                                        <Text> pushti@gmail.com </Text>
                                    </View>
                                </View>

                                <View>
                                    <Icon name="angle-right" style={Styles.icons} color="#000" />
                                </View>

                            </TouchableOpacity>
                        </View>
                        <View>



                        </View>

                    </View>

                </TabView.Item>

                <TabView.Item style={Styles.bgc}>
                    <View style={Styles.containers}>

                        <View style={Styles.all_boxs}>

                            <TouchableOpacity style={Styles.clint_name_list}>

                                <View style={Styles.Box_flex}>
                                    <Image source={require('../../asset/img/female.jpeg')} style={Styles.profile_img} />
                                    <View>
                                        <Text> Hii </Text>
                                        
                                    </View>
                                </View>
                                <View>
                                    <Icon name="angle-right" style={Styles.icons} color="#000" />
                                </View>
                            </TouchableOpacity>

                           
                        </View>
                        <View>
                       </View>

                    </View>
                </TabView.Item>

            </TabView>
        </>
    )
}
