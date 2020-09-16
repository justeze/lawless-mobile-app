import React from 'react';
import 'react-native-gesture-handler';

// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';


import Home from '../../screens/home';
import Cart from '../../screens/cart';

import Icon from 'react-native-vector-icons/FontAwesome';
// import defaultIcon from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const cart = useSelector((state) => state.menu.carts.length);

    return (
        <Tab.Navigator
        initialRouteName="BotTab"
        tabBarOptions={{
          activeTintColor: 'brown',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Carts"
          component={Cart}
          options={{
            tabBarLabel: 'Carts',
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-cart" color={color} size={30} />
            ),
            tabBarBadge: cart,
          }}
        />
        <Tab.Screen
          name="UserProfile"
          component={""}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="user-circle" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
};

export default BottomTab

// const StackHome = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="bottomtab"
//                     component={BottomTab}
//                     options={{
//                         headerShown: false,
//                     }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default StackHome;