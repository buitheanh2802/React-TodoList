import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './../slices/account.slice';

const store = configureStore({
    reducer : {
        account : accountReducer
    }
});

console.log(process.env.API_URL);


export default store;