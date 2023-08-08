import {
    StyleSheet
  } from 'react-native';
  import Layout from '../../constant/Layout';
  export default styles = StyleSheet.create({
    containers:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#E6F2ED',
      paddingLeft: 10,
      paddingRight: 10,
    },
    mtb_top:{
      marginTop:50,
    },
    btn_boxs: {
      flexDirection: 'row',
      width: Layout.screen_width * 0.90,
      alignItems: 'flex-start',
      gap: 20,
      marginTop:10,
    },
    btn: {
        backgroundColor: '#E5742B',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderRadius: 10,
      },
      btn_texts: {
        fontSize: 16,
        color: '#EBDED6',
      },
      general_box:{
        width: Layout.screen_width * 0.90,
        backgroundColor:'#fff',
        borderRadius:10,
        padding:20,
        marginTop:20,
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
        color:'#000000',
        paddingTop:10
    },
    img_flex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        marginVertical:30,
    },
    gen_page_img:{
      width: Layout.screen_width * 0.37,
      height: Layout.screen_height * 0.15,
    },
    img_flexs:{
        flexDirection:'row',
        gap:5,
    },
    doted:{
        fontSize:40,
        fontWeight:'500',
        color:'#000000',
        
    },
    
  });