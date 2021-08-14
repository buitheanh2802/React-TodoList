import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
    return (
       <Provider store={store}>
           hello world
       </Provider>
    );
};

export default App;