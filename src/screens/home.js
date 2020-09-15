import React from 'react'
import { View } from 'react-native'
// import BotNavigator from '../components/menu/botTabNav'
import Menu from '../components/menu/menu'
import TopNavigator from '../components/menu/topTabNav'

const Home = () => {
    return (
            <View style={{ flex: 1 }}>
                <TopNavigator />
                <Menu />
            </View>
    )
}


export default Home
