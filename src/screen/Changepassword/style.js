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
        marginTop: 30,
    },
    input: {
        width: Layout.screen_width * 0.90,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#C8DAD3',
        borderRadius: 4,
        padding: 16,
        marginTop: 10,
        color: '#008b8b'
    },
    input_age: {
        width: '90%',
        marginTop: 20
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },

    button: {
        width: Layout.screen_width * 0.90,
        fontSize: 16,
        padding: 14,
        marginTop: 25,
        backgroundColor: '#00703C',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#B4D9C8',
    }
});