import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BotNavigator = () => {
    return (
        <>
            <View style={style.container}>
                <View style={style.homeIcon}>
                    <Text style={{ color: '#545454'}}>Home</Text>
                </View>
                <View style={style.orderIcon}>
                    <Text style={{ color: '#545454'}}>Orders</Text>
                </View>
                <View style={style.historyIcon}>
                    <Text style={{ color: '#545454'}}>History</Text>
                </View>
                <View style={style.accIcon}>
                    <Text style={{ color: '#545454'}}>Akun</Text>
                </View>
            </View>
        </>
    )
}

export default BotNavigator

const style = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "#e8e8e8"
    },
    homeIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4
    },
    orderIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4 
    },
    historyIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4 
    },
    accIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4 
    },
  });
