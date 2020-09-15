import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { searchMenu } from '../../redux/actions/menu'

const TopTabNav = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <View style={style.primContainer}>
                <View style={style.secContainer}>
                    <TextInput placeholder="What do you want ?" style={style.search} onChangeText={(char) =>
                        dispatch(searchMenu(char, 'menu_name'))
                    } />
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
        borderColor: "black",
        borderRadius: 15,
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
