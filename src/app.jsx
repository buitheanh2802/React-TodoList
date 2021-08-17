import React, { useEffect, useState } from 'react';
import store, { pStore } from './redux/store';
import { Provider } from 'react-redux';
import RootRoute from './routes';
import i18n from './helpers/i18n';
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/css/index.css';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={pStore} loading={null}>
                <I18nextProvider i18n={i18n}>
                    <RootRoute />
                </I18nextProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
