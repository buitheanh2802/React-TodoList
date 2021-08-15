import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accountGets } from './../../redux/actions/account.action';

const AccountList = () => {
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    useEffect(() => {
        if(account.models.length == 0){
            dispatch(accountGets())
        }
    }, []);

    return (
        <div></div>
    );
};

export default AccountList;
