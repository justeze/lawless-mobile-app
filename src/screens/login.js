
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import style from '../styles/login';
// import background from '../image/berry.jpg';
// import logo from '../image/spoon.png';

const Login = ({ navigation }) => {
    return (
        <View style={style.container}>
            {/* <ImageBackground source={background} style={style.image}> */}
            <View style={style.content}>
                <View style={style.form}>
                    <View style={style.spoon}>
                        <Image style={style.logoImg} />
                    </View>
                    <Text style={style.login}>Sign In</Text>
                    <TextInput placeholder="username" style={style.input} />
                    <TextInput
                        textContentType="password"
                        placeholder="password"
                        secureTextEntry={true}
                        style={style.input} />
                    <TouchableOpacity
                        style={style.btnLogin}>
                        <Text style={style.txtBtnLogin}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.regis}
                    // onPress={() => navigation.navigate('Register')} 
                    >
                        <Text style={style.loginRegis}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </ImageBackground> */}
        </View>
    );
};

export default Login;


