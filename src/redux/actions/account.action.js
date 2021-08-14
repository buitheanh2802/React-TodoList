import accountApi from './../../api/accountApi';
import { gets, startCall,catchError } from './../slices/account.slice';

export const accountGets = () => dispatch => {
    // dispatch startCall 
    dispatch(startCall({ callType: 'list' }));
    return accountApi.gets()
        .then(response => {
            dispatch(gets({ data : response}))
        }).catch(err => {
            dispatch(catchError({ status : false, error : err.response.data}))
        })
}