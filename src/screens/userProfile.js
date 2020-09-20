import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Overlay } from 'react-native-elements';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LoggedOut } from '../redux/actions/auth'
import { clearCart } from '../redux/actions/menu'

import imgPlaceholder from '../assets/img/imgPlaceholder.png'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import style from '../styles/userProfile'


const UserProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [logout, setLogout] = useState(false);

    const auth = useSelector((state) => state.auth.data);
    
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    // console.log(auth)
    useEffect(() => {
        if (logout) {
            dispatch(clearCart());
            dispatch(LoggedOut());
            setLogout(false);
            // console.log(logOut)
            navigation.navigate('Login');
        }
    }, [dispatch, logout, navigation]);

    const handleLogout = () => {
        setLogout(true);
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={style.header}>
                <View style={style.photo}>
                    {auth.data === null ? <Image source={imgPlaceholder} style={style.userImg} />
                        : auth.data.avatar.length ? <Image source={{uri: auth.data.avatar}} style={style.userImg} /> 
                        : <Image source={imgPlaceholder} style={style.userImg} />}
                </View>
                <Text style={style.name}>{auth.data.username}</Text>
                <Text style={style.id}>{auth.data.email}</Text>
            </View>
            <View style={style.footer}>
                <TouchableOpacity
                    style={style.orderHistory}>
                    <Icon name="calendar" size={25} color={'black'} />
                    <Text style={style.orderHistoryText}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.orderHistory}>
                    <Icon name="user" size={25} color={'black'} />
                    <Text style={style.orderHistoryText}>Update Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.orderHistory} onPress={() => {
                        toggleOverlay();
                    }}>
                    <Icon name="logout" size={25} color={'black'} />
                    <Text style={style.orderHistoryText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={style.promp}>
                <Text>Logout ?</Text>
                <View style={style.btn}>
                    <TouchableOpacity
                        onPress={() => {
                            toggleOverlay();
                            handleLogout()
                        }}
                        style={style.yes}>
                        <Text style={style.str}>yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.yes} onPress={() => toggleOverlay()}>
                        <Text style={style.str}>no</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>
        </ScrollView>
    )
}

export default UserProfile