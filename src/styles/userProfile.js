import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 350,
    backgroundColor: 'brown',
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
  },
  userImg: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 140,
  },
  name: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  id: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    alignSelf: 'center',
    top: 20,
    padding: 10,
  },
  orderHistory: {
    height: 55,
    width: 350,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: 'black',
    marginRight: 5
  },
  orderHistoryText: {
    marginLeft: 12,
    fontSize: 18,
    color: 'black'
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