import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity,} from 'react-native';
import Styles from '../Announcement/style';

export default function Announcement() {
    return (
        <SafeAreaView style={Styles.containers}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={Styles.main_box}>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>कृषि यंत्र</Text>

                        <Text style={Styles.all_text}>04/08/2023</Text>

                        <Text style={Styles.all_text}>कृषि यंत्रों के आवेदन की तारीख 03 अगस्त तक बढ़ाई गई है , किसान भाई डीडी बनवाकर 03 अगस्त तक आवेदन कर सकते है एवं  जिन किसान भाइयों के आधार कार्ड मोबाइल  नंबर से लिंक नहीं हो तो कृपया आधार लिंक कराये क्यों उसके बिना आवेदन नही कर पाएंगे ।</Text>

                        <Text style={Styles.all_text}>धन्यवाद !</Text>

                        <Image source={require('../../asset/img/download.jpeg')} style={Styles.agl_img} />
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>19/07/23</Text>

                        <Text style={Styles.all_text}>खरगोन मे अच्छी बारिश की संभावना! किसान भाई अपने खेतो मे पानी की निकासी की उत्तम व्यवस्था करे, जिससे खेत मे बारिश का पानी जमा न हो|</Text>
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>कपास में निपिंग</Text>

                        <Text style={Styles.all_text}>18/07/23</Text>

                        <Text style={Styles.all_text}>निपिंग: यह बुआई के लगभग 30-40 दिन बाद फसल की शीर्ष कलियों को तोड़ने की एक विशेष खेती पद्धति है। निपिंग शीर्ष वृद्धि को रोकती है और पार्श्व शाखाओं को बढ़ावा देती है, इस प्रकार पौधे अधिक मजबूत हो जाते हैं और अधिक फूल और फलियाँ पैदा करते हैं और प्रति पौधे उपज बढ़ जाती है।</Text>
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>e- कृषि यन्त्र अनुदान</Text>

                        <Text style={Styles.all_text}>मध्य प्रदेश सरकार की तरफ से  2023- 2024 हेतु कृषि विभाग के अंतर्गत निम्नलिखित योजनाओं अंतर्गत सिंचाई उपकरणों हेतु दिनांक 17 जुलाई 2023 दोपहर 12 बजे से 31 जुलाई 2023 तक पोर्टल पर किसान भाई  अपने आवेदन प्रस्तुत कर सकेंगे। </Text>

                        <Text style={Styles.all_text}>प्राप्त आवेदनों में से लक्ष्यों के विरूद्ध ऑनलाइन लॉटरी दिनांक 01 अगस्त 2023 को सम्पादित की जावेगी।</Text>

                        <Text style={Styles.all_text}>लक्ष्यों का विवरण :</Text>

                        <Text style={Styles.all_text}>1. प्रधानमंत्री कृषि सिंचाई योजना (माइक्रो इरीगेशन)- स्प्रिंकलर सेट, ड्रिप सिस्टम</Text>

                        <Text style={Styles.all_text}>2. राष्ट्रीय मिशन ऑन ईडिबल ऑइल तिलहन - स्प्रिंकलर सेट, पंपसेट(डीजल/विद्युत), पाईप लाईन सेट</Text>

                        <Text style={Styles.all_text}>3. खाद्य एवं पोषण सुरक्षा दलहन - स्प्रिंकलर सेट, पाईप लाईन सेट, पंपसेट(डीजल/विद्युत)</Text>

                        <Text style={Styles.all_text}>धन्यवाद !</Text>
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>जोखिम प्रबंधन के तहत फसल बीमा जरूर करवाएं !</Text>

                        <Text style={Styles.all_text}>11/07/23</Text>

                        <Text style={Styles.all_text}>प्रधानमंत्री फसल बीमा योजना अंतर्गत विपरीत परिस्थितियों एवं प्राकृतिक आपदाओं से बचने हेतु फसल बीमा कराने की अंतिम तिथि 31 जुलाई 2023 तक है। </Text>

                        <Text style={Styles.all_text}>1. KCC वाले किसान फसल बुवाई प्रमाण-पत्र एवं पटवारी हल्के की जानकारी संबंधित बैंक में अद्यतन करावें । </Text>

                        <Text style={Styles.all_text}>2. अऋणी व डिफाल्टर कृषकों से आग्रह है, पास की CCB, RRB ज्ञा राष्ट्रीयकृत बैंक में फार्म जमा करायें, ताकि उनकी फसलों का बीमा हो सके। </Text>

                        <Text style={Styles.all_text}>फसल बीमा हेतु निम्न दस्तावेज ले जावें:-</Text>
                        <Text style={Styles.all_text}> बीमा प्रस्ताव पत्र ।</Text>
                        <Text style={Styles.all_text}>भू-अधिकार पुस्तिका की फोटो कॉपी ।</Text>
                        <Text style={Styles.all_text}>बोनी का प्रमाण-पत्र संबंधित (पटवारी अथवा पंचायत सचिव) से प्राप्त करें।</Text>
                        <Text style={Styles.all_text}>आधार कार्ड, वोटर आई.डी. कार्ड, पेनकार्ड इत्यादि (आधार कार्ड अनिवार्य) में से कोई एक</Text>
                        <Text style={Styles.all_text}> बैंक पासबुक की फोटोकॉपी</Text>
                        <Text></Text>
                        <Text style={Styles.all_text}>फसल का बीमा आवश्यक रूप से करावें !</Text>
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>23/06/23 :- उर्वरक संबधित सलाह</Text>

                        <Text style={Styles.all_text}>प्रिय किसान भाइयों, </Text>

                        <Text style={Styles.all_text}>नमस्कार!</Text>

                        <Text style={Styles.all_text}>आपके खेतो की मिट्टी परीक्षण की रिपोर्ट हमारे पास IISS-Bhopal से प्राप्त हो चुकी है, </Text>

                        <Text style={Styles.all_text}>बहुत जल्द हम आपको सोयाबीन और कपास की फसल के लिए उर्वरको की  मात्रा अपने खेतो मे कितनी देना है ,आपको बतायेंगे। </Text>

                        <Text style={Styles.all_text}>धन्यवाद! </Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>23/06 /23 ,खरगोन में संभावित बारिश</Text>

                        <Image source={require('../../asset/img/download_a.png')} style={Styles.agl_imgs} />

                        <Text style={Styles.all_text}>खरगोन में अगले पांच दिनों तक अच्छी बारिश की सम्भावना हे | </Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>सीहोर में मोषम आधारित पूर्वानुमान सलाह :-</Text>

                        <Text style={Styles.all_text}>प्रिय किसान भाइयो ,</Text>

                        <Text style={Styles.all_text}>जैसा की आपके क्षेत्र में  हल्की बारिश होना शुरू हो गई हे ,आपको बता दू की दिनांक 24 -25 जून से  (150 -160 mm तक ) सोयाबीन की बुवाई योग्य बारिश होना शुरू हो जाएगी। {"\n"} कृपया सोयबीन की बुवाई के लिए बीज उपचारित करके रखे।</Text>

                        <Text style={Styles.all_text}>धन्यवाद ! </Text>

                        <Image source={require('../../asset/img/download_b.png')} style={Styles.agl_imgs_2} />
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>सीहोर मे मोशम पूर्वानुमान सलाह</Text>

                        <Text style={Styles.all_text}> दिनाक 22- 23 जून से  बारिश होना शुरू हो जायेगी। </Text>

                        <Image source={require('../../asset/img/download_c.jpeg')} style={Styles.agl_imgs_2} />
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>पुरवानुमान</Text>

                        <Image source={require('../../asset/img/download_d.jpeg')} style={Styles.agl_imgs_3} />
                        
                        <Text style={Styles.all_text}> प्रिय किसान भाई,   खरगोन मे 22 तारिख से बारिश होने की संभावना है कृपया अपने कृषि कार्य पूर्ण करे!  जिन किसान भाईयो को सोयाबीन की बोनी करना है , वे अपने खेत तैयार रखे|</Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>मौसम पूर्वानुमान सलाह</Text>
                        
                        <Text style={Styles.all_text}> प्रिय दीपेश जी , शैलेन्द्र जी और सुजीत जी मानाखेड़ी और कोठरी में  रविवार के दिन से हल्की बारिश की सम्भावना हे , साथ ही भारी बारिश दिनाक 26 जून के बाद से ही  होगी। {"\n"} कृपया अपने खेतो की जुताई का कार्य समय से कर ले।  </Text>

                        <Text style={Styles.all_text}> धन्यवाद🙏 </Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>खाद</Text>
                        
                        <Text style={Styles.all_text}> प्रिय किसान भाइयो ,</Text>

                        <Text style={Styles.all_text}>आपको सूचित किया जाता हे की अभी कपास के खेत में खाद ना उपयोग करे,  आपके खेत की मिट्टी भोपाल जाच के लिए पहुचाई गयी हे , जिसका परिक्षण के उपरांत आपको खाद की मात्रा बता दी जाएगी उतना ही उपयोग करे | </Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>सीहोर में मोषम आधारित  पूर्वानुमान सलाह :-</Text>
                        
                        <Text style={Styles.all_text}> प्रिय किसान भाइयो अगले कुछ दिनों तक बादल छाए रहेंगे साथ ही दिनाक 4 जून को हल्की बारिश के आशार भी हे। साथ ही दिन के तापमान में भी 3-4 डिग्री तक गिरावट आएगी।</Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>Subsidies for Growing Fallow Pulse</Text>
                        
                        <Text style={Styles.all_text}> Just testing..Ajit</Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>Upcoming Drought</Text>
                        
                        <Text style={Styles.all_text}> This is an early warning for an upcoming drought spell in Central India. It is advised that farmers cultivated drought tolerant varieties and also adopt CSA packages to adapt to this phase.</Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>Subsidy for Growing Cotton in MP</Text>
                        
                        <Text style={Styles.all_text}> Please Ask ICARDA office in Amlaha</Text>
                        
                    </View>

                    <View style={Styles.announcement_box}>

                        <Text style={Styles.hedding_text}>नकली</Text>
                        
                        <Text style={Styles.all_text}> यह डमी विवरण है</Text>
                        
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
