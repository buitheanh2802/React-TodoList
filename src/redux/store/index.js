import { configureStore } from '@reduxjs/toolkit';
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'
import accountReducer from './../slices/account.slice';
import settingReducer from './../slices/setting.slice';

const persistConfig = {
    storage,
    key : 'setting',
    whitelist : ['setting']
}
const rootReducer = combineReducers({
    account : accountReducer,
    setting : settingReducer
})
const pReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer : pReducer,
    devTools : process.env.MODE === 'development',
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck : false
        })
    }
});

export const pStore = persistStore(store);

export default store;