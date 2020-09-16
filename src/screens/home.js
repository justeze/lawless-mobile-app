import React from 'react'
import { View } from 'react-native'
// import BotNavigator from '../components/menu/botTabNav'
import Menu from '../components/menu/menu'
import TopNav from '../components/menu/topNav'

const Home = () => {
    return (
            <View style={{ flex: 1 }}>
                <TopNav />
                <Menu />
            </View>
    )
}


export default Home
