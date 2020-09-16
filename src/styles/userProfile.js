import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
    color: 'white',
  },
  id: {
    color: 'white',
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: -12,
    marginLeft: 10
  },
  orderHistory: {
    height: 45,
    width: 150,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: 'white',
    top: 30,
    marginRight: 5
  },
  orderHistoryText: {
    marginLeft: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  updateProfile: {
    height: 45,
    padding: 20,
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: 'white',
    top: 30,
  },
  updateProfileText: {
    marginLeft: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  logout: {
    height: 45,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    top: -25,
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
  logoutText: {
    marginLeft: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
});