import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';
import Cart from '../../screens/cart';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
        initialRouteName="BotTab"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Carts"
          component={Cart}
          options={{
            tabBarLabel: 'Carts',
            tabBarIcon: ({ color, size }) => (
              <Icon name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    );
};

const StackHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="bottomtab"
                    component={BottomTab}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackHome;

{/* <View style={style.container}>
                <View style={style.homeIcon}>
                    <Image source={require("../../assets/icon/home.png")} style={{ height: 25, width: 25 }}/>
                </View>
                <View style={style.orderIcon}>
                    <Image source={require("../../assets/icon/shopping-cart.png")} style={{ height: 25, width: 25 }}/>
                </View>
                <View style={style.historyIcon}>
                    <Image source={require("../../assets/icon/packing-list.png")} style={{ height: 25, width: 25 }}/>
                </View>
                <View style={style.accIcon}>
                    <Image source={require("../../assets/icon/person.png")} style={{ height: 25, width: 25 }}/>
                </View>
            </View> */}

// const style = StyleSheet.create({
//     container: {
//         height: 55,
//         flexDirection: "row",
//         borderTopWidth: 1,
//         borderColor: "black"
//     },
//     homeIcon: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 4
//     },
//     orderIcon: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 4 
//     },
//     historyIcon: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 4 
//     },
//     accIcon: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 4 
//     },
//   });
