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
  
  main_text: {
    fontSize: 24,
    lineHeight: 26,
    color: '#00703C',
    textAlign: 'center',
    paddingTop: 10,
  },
  btn_boxs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingTop: 10,
  },
  btn: {
    width: Layout.screen_width * 0.95,
    backgroundColor: '#00703C',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    borderRadius: 10,
    marginTop:22,
  },
  btns: {
    width: Layout.screen_width * 0.95,
    backgroundColor: '#00703C',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    borderRadius: 10,
    marginTop:10,
  },
  btn_texts: {
    fontSize: 16,
    color: '#EBDED6',
    textAlign: 'center'
  },
  register_view: {
    alignItems: 'center',
    paddingTop: 40
  },
  input: {
    width: Layout.screen_width * 0.95,
    borderWidth: 1,
    borderColor:'#C8DAD3',
    fontSize:15,
    borderRadius:4,
    padding: 10,
    paddingLeft:15,
    paddingRight:15,
    marginTop:22,
  },

});