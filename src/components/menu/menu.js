import React, { Fragment, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { requestMenuCreator } from '../../redux/actions/menu'


const Menu = () => {
    const dispatch = useDispatch()
    const menu = useSelector((state) => state.menu.menus);
    // console.log(menu)
    useEffect(() => {
        dispatch(requestMenuCreator())
    }, [])

    return (
        <>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {menu.length ? (
                        <Fragment>
                            {menu.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id}>
                                        <Card style={{ width: 150 }}>
                                            <CardItem cardBody>
                                                <Image
                                                    source={{
                                                        uri: item.menu_img,
                                                    }}
                                                    style={{ height: 100, width: null, flex: 1 }}
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
                                Loading...
                            </Text>
                        )
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default Menu