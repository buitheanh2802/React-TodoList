import React, { useEffect, useState } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './helpers/materialUi';
import RootRoute from './routes';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <RootRoute />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
