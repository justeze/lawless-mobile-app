import React from 'react';
import { Provider } from 'react-redux';
import StackHome from './src/components/menu/botTabNav';
import storeRedux from './src/redux/store';

// import Home from './src/screens/home';
// import Cart from './src/screens/cart'
// import Login from './src/screens/login'


const App = () => {
    return (
        <>
            <Provider store={storeRedux}>
                <StackHome />
                {/* <Home /> */}
                {/* <Login/> */}
                {/* <Cart/> */}
            </Provider>
        </>
    )
};

export default App;