import React from 'react'

import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import Logout from 'react-native-vector-icons/AntDesign';
import user from '../assets/img/wiener.png';
import style from '../styles/userProfile'


const UserProfile = () => {
    return (
        <ScrollView style={style.container}>
            <View style={style.header}>
                <TouchableOpacity
                    style={style.logout}>
                    <Icon name="logout" size={15} color={'white'} />
                    <Text style={style.logoutText}>Logout</Text>
                </TouchableOpacity>
                <View style={style.photo}>
                    <Image source={user} style={style.userImg} />
                </View>
                <Text style={style.name}>Kambing</Text>
                <Text style={style.id}>@email</Text>
                <View style={style.btnContainer}>
                    <TouchableOpacity
                        style={style.orderHistory}>
                        <Icon name="calendar" size={15} color={'white'} />
                        <Text style={style.orderHistoryText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.updateProfile}>
                        <Icon name="user" size={15} color={'white'} />
                        <Text style={style.updateProfileText}>Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={style.promp}>
                <Text>Logout ?</Text>
                <View style={style.btn}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('auth');
                            toggleOverlay();
                        }}
                        style={style.yes}>
                        <Text style={style.str}>yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.yes} onPress={() => toggleOverlay()}>
                        <Text style={style.str}>no</Text>
                    </TouchableOpacity>
                </View>
            </Overlay> */}
        </ScrollView>
    )
}

export default UserProfile