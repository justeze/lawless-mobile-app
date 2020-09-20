import React, { useState, useEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authLoginCreator } from '../redux/actions/auth'

import style from '../styles/login';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth.isLogin);
    const auth = useSelector((state) => state.auth.data);

    const [form, setForm] = useState({ name: null, password: null });

    useEffect(() => {
        if (login) {
            navigation.navigate('BottomTab');
        }
    }, [auth]);
    // console.log(login)
    // if (login) {
    //     navigation.navigate('BottomTab');
    // }

    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.form}>
                    <View style={style.spoon}>
                        <Image style={style.logoImg} />
                    </View>
                    <Text style={style.login}>Sign In</Text>
                    <TextInput placeholder="username" style={style.input} onChangeText={(text) => setForm({ ...form, name: text })} />
                    <TextInput
                        textContentType="password"
                        placeholder="password"
                        secureTextEntry={true}
                        style={style.input} onChangeText={(text) => setForm({ ...form, password: text })} />
                    <TouchableOpacity
                        style={style.btnLogin} onPress={() => {
                            dispatch(authLoginCreator(form.name, form.password))
                            // console.log(form.name)
                            // console.log(form.password)
                        }}>
                        <Text style={style.txtBtnLogin} >LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.regis} onPress={() => {
                            navigation.navigate('Register')
                        }}>
                        <Text style={style.loginRegis}>Don't have an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;


