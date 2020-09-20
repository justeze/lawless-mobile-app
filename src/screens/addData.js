import React, { useState } from 'react';
import { Overlay } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { requestMenuCreator } from '../redux/actions/menu'

import style from '../styles/addData';




const AddData = ({ navigation }) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        menuName: null,
        menuPrice: null,
        category: 2,
        image: null,
    });

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const chooseImage = () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('dicancel');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response;
                setForm({ ...form, image: source });
            }
        });
    };

    const addMenu = () => {

        let formData = new FormData();
        formData.append('menu_name', form.menuName);
        formData.append('menu_price', form.menuPrice);
        formData.append('category_id', form.category);
        formData.append('menu_img', {
            uri: `file://${form.image.path}`,
            type: form.image.type,
            name: form.image.fileName,
            size: form.image.fileSize,
        });

        const configHeader = {
            headers: {
                'content-type': 'multipart/form-data',
                contentType: false,
                mimeType: 'multipart/form-data',
                'cache-control': 'no-cache',
                accept: 'application/json',
            },
        };

        const URL = `http://192.168.0.4:3100/`;
        Axios.post(URL, formData, configHeader)
            .then((res) => {
                setForm({
                    menuName: null,
                    menuPrice: null,
                    category: 2,
                    image: null,
                });
                dispatch(requestMenuCreator());

                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.form}>
                    <View style={style.spoon}>
                        <Image style={style.logoImg} />
                    </View>
                    <Text style={style.login}>ADD</Text>
                    <TextInput
                        style={style.input} value={form.menuName}
                        onChangeText={(text) => setForm({ ...form, menuName: text })} />
                    <TextInput
                        style={style.input} value={form.menuPrice}
                        keyboardType='numeric'
                        onChangeText={(text) => setForm({ ...form, menuPrice: text })} />
                    <Picker
                        selectedValue={form.category}
                        style={style.input}
                        onValueChange={(itemValue, itemIndex) => {
                            console.log(itemValue);
                            console.log(itemIndex);
                            setForm({ ...form, category: itemValue });
                        }}>
                        <Picker.Item label="Food" value="2" />
                        <Picker.Item label="Drink" value="1" />
                    </Picker>
                    <TouchableOpacity
                        style={style.input} onPress={() => chooseImage()}>
                        {form.image ? (
                            <Image
                                source={form.image}
                                style={{ width: 150, height: 100, alignSelf: 'center' }}
                            />
                        ) : (
                                <Text
                                    style={{  fontSize: 15, marginTop: 35, alignSelf: 'center' }}>
                                    No Image
                                </Text>
                            )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.btnLogin} onPress={() => {
                            addMenu()
                            toggleOverlay()
                        }}>
                        <Text style={style.txtBtnLogin} >ADD</Text>
                    </TouchableOpacity>
                    <Overlay
                        isVisible={visible}
                        animationType={'fade'}
                        onBackdropPress={toggleOverlay}
                        overlayStyle={style.promp}>
                        <Text>done</Text>
                        <View style={style.btn}>
                            <TouchableOpacity style={style.yes} onPress={() => {
                                toggleOverlay()
                                navigation.navigate('Home');
                            }
                            }>
                                <Text style={style.str}>no</Text>
                            </TouchableOpacity>
                        </View>
                    </Overlay>
                </View>
            </View>
        </View>
    )
}

export default AddData

