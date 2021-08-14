import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    models: [],
    process: {
        listLoading : false,
        actionsLoading : {
            remove : false,
            update : false,
            add : false
        }
    }
}

const accountSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        startCall(state,action){
            const { callType } = action.payload;
            if(callType == 'list'){
                state.process.listLoading = true;
            }else {
                for(const actionsLoading in state.process.actionsLoading){

                }
            }
        },
        gets(state,action){
            const { data } = action.payload;
            state.models = data;
        }
    }
});

const { actions, reducer } = accountSlice;

export const { gets,startCall } = actions;

export default reducer;

