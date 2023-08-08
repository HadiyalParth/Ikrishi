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
    main_boxs:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      gap:20,
      marginTop:50,
    },
    expens_iteam:{
      width: Layout.screen_width * 0.40,
      height:120,
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      backgroundColor:'#D6EBE2',
      shadowColor:'hwb(152 0% 60% / 0.3)',
      borderRadius:10
    },
    expens_text:{
        fontSize:18,
        fontWeight:'600',
        color:'#008000',
        textAlign:'center',
    },

  
  });