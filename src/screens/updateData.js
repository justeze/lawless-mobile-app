import React from 'react';

import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import style from '../styles/updateData';

const UpdateData = () => {
    return (
        <View style={style.container}>
        <View style={style.content}>
            <View style={style.form}>
                <View style={style.spoon}>
                    <Image style={style.logoImg} />
                </View>
                <Text style={style.login}>Sign Up</Text>
                <TextInput
                    textContentType="URL"
                    placeholder="email"
                    style={style.input} />
                <TextInput
                    textContentType="username"
                    placeholder="username"
                    style={style.input} />
                <TextInput
                    textContentType="password"
                    placeholder="password"
                    secureTextEntry={true}
                    style={style.input} />
                <TouchableOpacity
                    style={style.btnLogin}>
                    <Text style={style.txtBtnLogin} >REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.loginRegis}>Already have an account? Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

export default UpdateData

