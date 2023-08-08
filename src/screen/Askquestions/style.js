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
  main_hedding: {
    width: Layout.screen_width * 0.90,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 20
  },
  list_text: {
    fontSize: 26,
    color: '#5D8B75'
  },
  input: {
    width: Layout.screen_width * 0.95,
    borderWidth: 1,
    borderColor: '#C8DAD3',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
  input_age: {
    width: '90%',
    marginTop: 20
  },
  dropdown: {
    width: Layout.screen_width * 0.95,
    height: 50,
    borderWidth: 1,
    borderColor: '#C8DAD3',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputs: {
    width: Layout.screen_width * 0.95,
    borderWidth: 1,
    borderColor: '#C8DAD3',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
  addres_input: {
    width: Layout.screen_width * 0.95,
    height: 100,
    color: '#000',
    borderWidth: 1,
    borderColor: '#C8DAD3',
    fontSize: 20,
    paddingLeft:10,
    marginTop: 10,
  },
  label_text:{
    fontSize:16,
    fontWeight:'500',
    color:'#476559',
    marginTop:10,
  },
  notis_txt:{
    fontSize:16,
    color:'#000',
    marginTop:10,
    marginBottom:20,
  },
  askq_btn:{
    width: Layout.screen_width * 0.95,
    alignItems:'center',
    backgroundColor:'#00703C',
    borderRadius:5,
    padding:16,
  },
  askq_text:{
    fontSize:20,
    fontWeight:'700',
    color:'#B4D9C8',
  },
});