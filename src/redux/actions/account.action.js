import accountApi from './../../api/accountApi';
import { gets, startCall } from './../slices/account.slice';

export const accountGets = () => dispatch => {
    // dispatch startCall 
    dispatch(startCall({ callType: 'list' }));
    return accountApi.gets()
        .then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
}