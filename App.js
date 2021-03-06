import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/store';


import Login from './src/screens/login'
import Register from './src/screens/register'
import BottomTab from './src/components/menu/botTabNav'

// import Register from './src/screens/register'

const { persistor, store } = configureStore();

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <Stack.Navigator headerMode="none">
                            <Stack.Screen name='Login' component={Login} />
                            <Stack.Screen name="Register" component={Register} />
                            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                        </Stack.Navigator>
                        {/* <Register/> */}
                    </NavigationContainer>
                </PersistGate>
            </Provider>

        </>
    )
};

export default App;