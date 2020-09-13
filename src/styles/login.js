import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 2,
    padding: 10,
    paddingTop: 20,
    textAlign: 'justify',
    alignItems: 'center',
    alignContent: 'center',
  },
  login: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    color: 'black',
    width: 290,
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    borderRadius: 8,
    backgroundColor: '#D5DBDB',
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'black',
    height: 45,
  },
  txtBtnLogin: {
    color: 'white'
  },
  createAcc: {
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
  },
  regis: {
    marginTop: 10,
    alignItems: 'center',
  },
  // for register
  register: {
    color: 'black',
    width: 280,
    height: 42,
    marginBottom: 15,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: '#D5DBDB',
  },
  btnRegis: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: '#C6456A',
    height: 42,
  },
  loginRegis: {
    color: 'black',
  },
});
