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
    main_boxs:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      gap:20,
      marginTop:20,
    },
    home_iteam:{
      width: Layout.screen_width * 0.40,
      height:120,
      textAlign:'center',
      alignItems:'center',
      justifyContent:"space-between",
      textAlign:'center',
      backgroundColor:'#D6EBE2',
      shadowColor:'hwb(152 0% 60% / 0.3)',
      borderRadius:10
    },
    iteam_title:{
      width: Layout.screen_width * 0.40,
      fontSize:12,
      fontWeight:'600',
      lineHeight:18,
      textAlign:'center',
      color:'#fff',
      backgroundColor:'#7a4947',
      padding:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10
    },
    iteam_img:{
      flex:1,
      justifyContent:'center',
    },
    iteam_imgbox:{
        width:70,
        height:70,
    },
  
  });