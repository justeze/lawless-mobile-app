import React, { Fragment, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { requestMenuCreator, addToCart } from '../../redux/actions/menu'


const Menu = () => {
    const menu = useSelector((state) => state.menu.menus);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestMenuCreator())
    }, [])
    // console.log(menu)

    return (
        <>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {menu.length ? (
                        <Fragment>
                            {menu.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} onPress={() => {
                                        dispatch(addToCart(item.id, item.menu_name, item.menu_price, item.menu_img, item.category))
                                    }}>
                                        <Card style={{ height: 180, width: 150, borderRadius: 10 }}>
                                            <CardItem cardBody>
                                                <Image
                                                    source={{
                                                        uri: item.menu_img,
                                                    }}
                                                    style={{ height: 100, width: null, flex: 1, borderRadius: 10 }}
                                                />
                                            </CardItem>
                                            <CardItem style={{ justifyContent: 'center' }}>
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    {item.menu_name}
                                                </Text>
                                            </CardItem>
                                            <CardItem
                                                style={{ justifyContent: 'center', marginTop: -15 }}>
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    Rp. {item.menu_price}
                                                </Text>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>
                                );
                            })}
                        </Fragment>
                    ) : (
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
                                Loading ...
                            </Text>
                        )
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default Menu