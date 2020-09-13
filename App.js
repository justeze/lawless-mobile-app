import React from 'react';
import Home from './src/screens/home';
import { Provider } from 'react-redux';
import storeRedux from './src/redux/store';
// import Login from './src/screens/login'
const App = () => {
    return (
        <>
            <Provider store={storeRedux}>
                <Home />
                {/* <Login/> */}
            </Provider>
        </>
    )
};

export default App;