import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { authRegisterCreator } from '../redux/actions/auth'

import style from '../styles/register';


const Register = ({ navigation }) => {
    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth.isLogin);
    const auth = useSelector((state) => state.auth.data);

    const [form, setform] = useState({ name: null, email: null, password: null });

    useEffect(() => {
        if (login) {
            // console.log(login)
            navigation.navigate('BottomTab');
        }
    }, [auth]);
    // console.log(login)

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
                        style={style.input} onChangeText={(text) => setform({ ...form, email: text })} />
                    <TextInput
                        textContentType="username"
                        placeholder="username"
                        style={style.input} onChangeText={(text) => setform({ ...form, name: text })} />
                    <TextInput
                        textContentType="password"
                        placeholder="password"
                        secureTextEntry={true}
                        style={style.input} onChangeText={(text) => setform({ ...form, password: text })} />
                    <TouchableOpacity
                        style={style.btnLogin} onPress={() => {
                            dispatch(authRegisterCreator(form.email, form.name, form.password))
                        }}>
                        <Text style={style.txtBtnLogin} >REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.regis} onPress={() => navigation.navigate('Login')}>
                        <Text style={style.loginRegis}>Already have an account? Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Register;


