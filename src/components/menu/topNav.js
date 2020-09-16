import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { searchMenu } from '../../redux/actions/menu'

const TopNav = () => {
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
                <Icon name='align-right' style={style.filterIcon} size={20}/>

            </View>
        </>
    );
};
export default TopNav;

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
        maxWidth: 340
    },
    searchImg: {
        width: 25,
        height: 25,
        position: "absolute",
        left: 15,
        top: 12
    },
    filterIcon: {
        right: 20,
        top: 12
    }
});
