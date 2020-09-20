import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, TouchableHighlight, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { searchMenu } from '../../redux/actions/menu'
import { Overlay } from 'react-native-elements';




const TopNav = () => {
    const dispatch = useDispatch();


    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    
    return (
        <>
            <View style={style.primContainer}>
                <View style={style.secContainer}>
                    <TextInput placeholder="What do you want ?" style={style.search} onChangeText={(char) =>
                        dispatch(searchMenu(char, 'menu_name'))
                    } />
                    <Image source={require("../../assets/img/loupe.png")} style={style.searchImg} />

                </View>
                <Overlay
                    isVisible={visible}
                    animationType={'fade'}
                    onBackdropPress={toggleOverlay}
                    overlayStyle={style.promp}
                >
                    <View style={style.catFilterContainer}>
                    <Text>Category :</Text>
                    <Text>dropdown menu here</Text>
                    </View>
                    <View style={style.priceFilterContainer}>
                    <Text>Price :</Text>
                    <Text>dropdown menu here</Text>
                    </View>
                    <View style={style.btn}>
                        <TouchableOpacity style={style.yes} onPress={() => { toggleOverlay() }}>
                            <Text style={style.str}>yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.yes} onPress={() => toggleOverlay()}>
                            <Text style={style.str}>no</Text>
                        </TouchableOpacity>
                    </View>
                </Overlay>
                <TouchableHighlight
                    style={style.openButton}
                    onPress={() => {
                        toggleOverlay();
                    }}
                >
                    <Icon name='align-right' color={'white'} size={20} />
                </TouchableHighlight>
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
    openButton: {
        backgroundColor: "brown",
        height: 40,
        width: 40,
        padding: 10,
        alignContent: 'center',
        top: 5,
        right: 10,
        borderRadius: 5
    },
    promp: {
        width: '70%',
        height: 140,
    },
    catFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        justifyContent: 'flex-end',
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
        marginRight: 5,
        backgroundColor: 'black',
    },
    str: {
        color: 'white',
    },
});
