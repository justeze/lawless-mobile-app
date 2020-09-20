import React from 'react';
import 'react-native-gesture-handler';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';


import Home from '../../screens/home';
import Cart from '../../screens/cart';
import AddData from '../../screens/addData'
import UserProfile from '../../screens/userProfile'

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/MaterialIcons';

// import defaultIcon from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const { menu, auth } = useSelector((state) => state);

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
      {auth.isAdmin === false ? null : (
        <Tab.Screen
          name="AddMenu"
          component={AddData}
          options={{
            tabBarLabel: 'Carts',
            tabBarIcon: ({ color }) => (
              <Iconn name="library-add" color={color} size={30} />
            ),
          }}
        />)}
      {/* {auth.isAdmin === true ? null : */}
        <Tab.Screen
          name="Carts"
          component={Cart}
          options={{
            tabBarLabel: 'Carts',
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-cart" color={color} size={30} />
            ),
            tabBarBadge: menu.carts.length,
          }}
        />
        {/* } */}

      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
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