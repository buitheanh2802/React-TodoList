import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './../slices/account.slice';

const store = configureStore({
    reducer : {
        account : accountReducer
    },
    devTools : process.env.MODE === 'development'
});


export default store;