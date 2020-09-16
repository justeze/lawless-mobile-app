import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import storeRedux from './src/redux/store';

import Login from './src/screens/login'
// import StackHome from './src/components/menu/botTabNav';
import BottomTab from './src/components/menu/botTabNav'

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Provider store={storeRedux}>
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                        {/* <Stack.Screen name='HomeStack' component={StackHome} /> */}
                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
        </>
    )
};

export default App;