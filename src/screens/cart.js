import React, { useState } from 'react'

import { Overlay } from 'react-native-elements';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, deleteCart } from '../redux/actions/menu'

import style from '../styles/cart'
// import { State } from 'react-native-gesture-handler';

const Cart = () => {
    const cart = useSelector((state) => state.menu.carts);
    const auth = useSelector((state) => state.auth)
    console.log(auth)

    const dispatch = useDispatch()

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <>
            <View style={style.container}>
                <ScrollView style={style.listCont} showsVerticalScrollIndicator={false}>
                    {cart.length ?
                        cart.map((item) => {
                            // console.log(cart)
                            return (
                                <View key={item.id}>
                                    <TouchableOpacity press style={style.list} >
                                        <Image source={{ uri: item.img }} style={style.listPic} />
                                        <View style={style.desc}>
                                            <Text>{item.name}</Text>
                                            <Text>Rp. {item.price * item.qty}</Text>
                                            {auth.isAdmin === true ? null : (

                                                <View style={style.qty}>
                                                    <TouchableOpacity onPress={() => {
                                                        dispatch(decreaseQty(item.id))
                                                    }}>
                                                        <Image
                                                            source={require('../assets/img/home.png')}
                                                            style={{ width: 25, height: 25 }}
                                                        />
                                                    </TouchableOpacity>
                                                    <View
                                                        style={style.numQty}>
                                                        <Text>{item.qty}</Text>
                                                    </View>
                                                    <TouchableOpacity onPress={() => {
                                                        dispatch(increaseQty(item.id))
                                                    }}>
                                                        <Image
                                                            source={require('../assets/img/home.png')}
                                                            style={{ width: 25, height: 25 }}
                                                        />
                                                    </TouchableOpacity>
                                                </View>)}
                                        </View>

                                        <TouchableOpacity style={style.delete} onPress={() => {
                                            toggleOverlay();
                                        }}>
                                            <Text style={style.deleteText}>Delete</Text>
                                        </TouchableOpacity>
                                        {auth.isAdmin === false ? null : (
                                            <TouchableOpacity style={style.delete} onPress={() => {
                                                toggleOverlay();
                                            }}>
                                                <Text style={style.deleteText}>Delete</Text>
                                            </TouchableOpacity>)}
                                    </TouchableOpacity>
                                    <Overlay
                                        isVisible={visible}
                                        animationType={'fade'}
                                        onBackdropPress={toggleOverlay}
                                        overlayStyle={style.promp}>
                                        <Text>apus ?</Text>
                                        <View style={style.btn}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    dispatch(deleteCart(item.id))
                                                    toggleOverlay()
                                                }}
                                                style={style.yes}>
                                                <Text style={style.str}>yes</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={style.yes} onPress={() => toggleOverlay()}>
                                                <Text style={style.str}>no</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Overlay>

                                </View>


                            )
                        }

                        )
                        : <View style={style.empty}>
                            <Text>LO BELOMAN MESEN, BANG</Text>
                        </View>


                    }
                </ScrollView>

            </View>
            <View style={{ padding: 10 }}>
                <View style={style.total}>
                    <Text style={style.totalText}>Total harga : </Text>
                    <Text style={style.priceText}>Rp . {cart.reduce((total, item) => {
                        return total + item.price * item.qty;
                    }, 0)}</Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <TouchableOpacity style={style.order}>
                    <Text style={style.orderText}>Order</Text>
                </TouchableOpacity>
            </View>

        </>
    )

}

export default Cart