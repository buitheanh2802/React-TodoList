import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lng : 'vi'
}

const settingSlice = createSlice({
    name : "setting",
    initialState,
    reducers : {

    }
});

const { reducer,actions } = settingSlice;

export default reducer;