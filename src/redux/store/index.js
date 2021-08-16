import { configureStore } from '@reduxjs/toolkit';
import { persistReducer,persistStore } from 'redux-persist';
import accountReducer from './../slices/account.slice';
import settingReducer from './../slices/setting.slice';

const store = configureStore({
    reducer : {
        account : accountReducer,
        setting : settingReducer
    },
    devTools : process.env.MODE === 'development'
});

const persistConfig = {
    
}


export default store;