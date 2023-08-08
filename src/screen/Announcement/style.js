import {
    StyleSheet
} from 'react-native';
import Layout from '../../constant/Layout';
import { ScreenWidth } from '@rneui/themed/dist/config';
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
    main_box:{
        marginTop:50,
    },
    announcement_box:{
        width: Layout.screen_width * 0.90,
        backgroundColor:'#fff',
        borderRadius:10,
        padding:15,
        marginTop:20,
    },
    agl_img:{
        width: Layout.screen_width * 0.85,
    },
    agl_imgs:{
        width: Layout.screen_width * 0.85,
        height:200,
    },
    agl_imgs_2:{
        width: Layout.screen_width * 0.85,
        height:500,
    },
    agl_imgs_3:{
        width: Layout.screen_width * 0.85,
        height:750,
    },
    hedding_text:{
        fontSize:22,
        fontWeight:'600',
        paddingBottom:10,
        color:'#5D8B75'
    },
    all_text:{
        fontSize:18,
        fontWeight:'500',
        color:'#606B67',
        paddingTop:10
    }
   
});