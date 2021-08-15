import React, { useEffect, useState } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import RootRoute from './routes';
import i18n from './helpers/i18n';
import { I18nextProvider } from 'react-i18next';

const App = () => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <RootRoute />
            </I18nextProvider>
        </Provider>
    );
};

export default App;
