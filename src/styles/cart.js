import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#EAF2F8',
  },
  top: {
    width: '100%',
    height: '26%',
    backgroundColor: 'red',
  },
  topImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  listCont: {
    alignSelf: 'center',
    width: '95%',
    marginTop: 10,
    backgroundColor: '#EAF2F8',
  },
  list: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    height: 110,
    borderWidth: 0.3,
    borderColor: '#EAEDED',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 1,
    borderRadius: 5,
  },
  listPic: {
    height: '100%',
    width: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  desc: {
    alignSelf: 'flex-start',
    width: '30%',
  },
  delete: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 8,
  },
  deleteText: {
    color: 'white',
    fontSize: 15,
  },
  qty: {
    marginTop: 15,
    flexDirection: 'row'
  },
  numQty: {
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 5,
    width: 50,
    alignItems: 'center'
  },
  empty: {
    marginTop: 40,
    alignItems: 'center',
  },
  total: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 5,
    justifyContent: 'space-between'
  },
  totalText: {
    padding: 10,
    color: 'black',
    fontSize: 20,
  },
  priceText: {
    padding: 10,
    color: 'black',
    fontSize: 20,
  },
  order: {
    padding: 10,
    height: 50,
    backgroundColor: 'brown',
    borderRadius: 5,
  },
  orderText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  promp: {
    width: '70%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    flexDirection: 'row',
  },
  yes: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    width: 70,
    padding: 8,
    backgroundColor: 'black',
  },
  str: {
    color: 'white',
  },
});