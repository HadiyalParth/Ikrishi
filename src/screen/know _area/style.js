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
    know_box:{
        marginTop: 50,
    },
    know_text:{
        fontSize:24,
        lineHeight:24,
        color:'#5D8B75',
    },
    
    field_btn: {
        width: Layout.screen_width * 0.90,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'left',
        backgroundColor: '#E5742B',
        padding: 10,
        borderRadius: 5,
        marginTop: 17,
    },
    field_text: {
        fontSize: 18,
        color: '#EFDCD0',
        fontWeight: '600',
        alignItems: 'center',
    },
    icons: {
        fontSize: 18,
        color: '#EFDCD0',
        fontWeight: '700',
    }
});