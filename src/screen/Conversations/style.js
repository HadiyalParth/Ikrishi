import {
    StyleSheet
} from 'react-native';
import Layout from '../../constant/Layout';
import { ScreenWidth } from '@rneui/themed/dist/config';
export default styles = StyleSheet.create({
    containers: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#E6F2ED',
        paddingLeft: 10,
        paddingRight: 10,
    },
    bgc:{
        width:'100%',
        backgroundColor:'#E6F2ED',
    },
    chat_boxs:{
        backgroundColor: '#E6F2ED',
        marginTop:50,
    },
    tab_view:{
        width: Layout.screen_width * 0.90,
    },
    search_box:{
        borderWidth:1,
        borderRadius:5
    },
    pepole_btn:{
        width: Layout.screen_width * 0.40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        backgroundColor:'#E5742B',
        padding:12,
        margin:10,
    },
    pepole_text:{
        fontSize:18,
        fontWeight:'700',
        color:'#EFDCD0',
    },
    all_boxs:{
        gap:20,
    },
    clint_name_list:{
        width: Layout.screen_width * 0.90,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        padding:20,
    },
    icons: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '700',
    },
    Box_flex:{
        flexDirection:'row',
        alignItems:'center',
        gap:8
    },
    profile_img:{
        width: 40,
        height: 40,
        borderRadius:50,
    }
});