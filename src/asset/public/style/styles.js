import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  containers:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#E6F2ED',
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo_view: {
    alignItems: 'center',
  },
  logo: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  main_text: {
    fontSize: 18,
    lineHeight: 26,
    color: '#00703C',
    textAlign: 'center',
    paddingTop: 10,
  },
  btn_boxs: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingTop: 10,
  },
  btn: {
    backgroundColor: '#E38B51',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    borderRadius: 10,
  },
  btn_texts: {
    fontSize: 16,
    color: '#EBDED6',
    textAlign: 'center'
  },
  main_image_box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    paddingTop: 30,
  },
  logo_img: {
    width: 100,
    height: 100
  },
  kishan_imag: {
    width: '100%',
    height: 300,
    marginTop: 10,
    marginBottom: 5,
  },
  register_view: {
    alignItems: 'center',
    paddingTop: 40
  },
  input: {
    width:350,
    borderWidth: 1,
    borderColor:'#476559',
    borderRadius:4,
    padding: 10,
    marginTop:10,
  },
});