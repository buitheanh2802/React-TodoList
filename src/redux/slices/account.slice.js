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
    },
    errors : null
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
        },
        catchError(state,action){
            state.errors = action.payload
        }
    }
});

const { actions, reducer } = accountSlice;

export const { gets,startCall,catchError } = actions;

export default reducer;

