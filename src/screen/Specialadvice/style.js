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
    main_hedding:{
        width: Layout.screen_width * 0.90,
        flex:1,  
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:50,   
        marginBottom:20
    },
    list_text:{
        fontSize:20,
        color:'#5D8B75'
    },
    ask_btn:{
        backgroundColor:'#E5742B',
        borderRadius:10,
    },
    aks_text:{
        fontSize:18,
        fontWeight:'700',
        // lineHeight:16,
        color:'#EFDCD0',
        // borderWidth:1,
        borderRadius:10,
        padding:10,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    askd__box:{
        width: Layout.screen_width * 0.90,
        backgroundColor:'#ffffff',
        padding:16,
        borderRadius:5,
    },
    box_tex:{
        fontSize:18,
        fontWeight:'500',
        color:'#606B67'
    }
  });