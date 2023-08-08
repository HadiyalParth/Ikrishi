import {
    StyleSheet
} from 'react-native';
import Layout from '../../constant/Layout';

export default styles = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#E6F2ED',
        paddingLeft: 10,
        paddingRight: 10,
    },
    mtb_top: {
        marginTop: 50,
    },
    flex_boxs:{
        width:Layout.screen_width * 0.90,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    edit_box:{
        width:Layout.screen_width * 0.25,
        height: Layout.screen_height * 0.12,
        borderRadius:100
    },
    profile_edit_text:{
        width:Layout.screen_width * 0.90,
        flexDirection:'row',
        gap:10,
        paddingBottom:15,
    },
    prof_text:{
        fontSize:22,
        fontWeight:'700',
        color:'#476559',
    },
    prof_texts:{
        fontSize:22,
        color:'#476559',
    },
});