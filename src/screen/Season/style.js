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
    season_box:{
      width: Layout.screen_width * 0.90,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:50,
    },
    season_btn:{
      width: Layout.screen_width * 0.40,
      alignItems:'center',
      backgroundColor:'#E5742B',
      padding:12,
      borderRadius:5,
    },
    season_text:{
      fontSize:14,
      fontWeight:'800',
      color:'#EEE9DC'
    },
    heding_text:{
      fontSize:26,
      fontWeight:"700",
      color:'#3b7058',
      textAlign:'center',
      paddingTop:27,
      paddingBottom:27,
    },
    synoptic_img:{
      width: Layout.screen_width * 0.90,
      height: Layout.screen_height * 0.60
    }
  });