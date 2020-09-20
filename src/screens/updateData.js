import React from 'react';
import { Picker } from '@react-native-community/picker';
// import { useSelector, useDispatch } from 'react-redux';
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
                        style={style.input} />
                    <TextInput
                        style={style.input}/>
                    <TouchableOpacity
                        style={style.input} >
                    </TouchableOpacity>
                    <Picker
                        selectedValue={form.cat}
                        style={style.input}
                        >
                        <Picker.Item label="Food" value="2" />
                        <Picker.Item label="Drink" value="1" />
                    </Picker>
                    <TouchableOpacity
                        style={style.btnLogin}
                        >
                        <Text style={style.txtBtnLogin} >REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default UpdateData

