import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, TextInput, StyleSheet } from 'react-native';

const TopTabNav = () => {
    return (
        <>
            <View style={style.primContainer}>
                <View style={style.secContainer}>
                    <TextInput placeholder="What do you want ?" style={style.search} />
                    <Image source={require("../../assets/img/loupe.png")} style={style.searchImg} />
                </View>
            </View>
        </>
    );
};
export default TopTabNav;

const style = StyleSheet.create({
    primContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    secContainer: {
        position: "relative",
        flex: 1,
        marginLeft: 10
    },
    search: {
        borderWidth: 1,
        borderColor: "#e8e8e8",
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 50,
        paddingRight: 25,
        maxWidth: 380
    },
    searchImg: {
        width: 25,
        height: 25,
        position: "absolute",
        left: 15,
        top: 12
    },
  });
