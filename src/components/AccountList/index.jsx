import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accountGets } from './../../redux/actions/account.action';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';

const AccountList = () => {
    const account = useSelector(state => state.account);
    const { t } = useTranslation()
    const dispatch = useDispatch();
    useEffect(() => {
        if (account.models.length == 0) {
            dispatch(accountGets())
        }
    }, []);

    return (
        <div className="w-[1024px] mx-auto ">
            <h1 className="py-[10px] text-center text-[24px] font-semibold mb-[20px] ">
                {t('titleList')}
            </h1>
            <Link className="px-[15px] items-center gap-[5px] text-center block w-[100px] bg-blue-500 rounded-sm text-white py-[8px] text-[14px]" to="/add">Thêm mới</Link>
            <div className="flex px-[5px] py-[15px] mb-[5px] border-b font-medium ">
                <div className="w-[5%] font-semibold " >ID</div>
                <div className="w-[15%] font-semibold ">Ảnh đại diện</div>
                <div className="w-[15%] font-semibold ">Tên đăng nhập</div>
                <div className="w-[15%] font-semibold ">Họ và tên</div>
                <div className="w-[10%] font-semibold ">Giới tính</div>
                <div className="w-[10%] font-semibold text-center">Lớp</div>
                <div className="w-[10%] font-semibold text-center">Emoji</div>
                <div className="w-[20%] font-semibold text-center ">Actions</div>
            </div>
            {
                account.models.length > 0 ?
                    account.models.map((item, key) => {
                        return <div key={key} className="flex px-[5px] py-[15px] mb-[5px] font-medium ">
                            <div className="my-auto w-[5%] " >{key + 1}</div>
                            <div className="my-auto w-[15%] ">
                                <img className="object-cover rounded-full w-[50px] h-[50px] " src={item.avatar} alt={item.userName} />
                            </div>
                            <div className="my-auto w-[15%] ">{item.userName}</div>
                            <div className="my-auto w-[15%] ">{item.fullName}</div>
                            <div className="my-auto w-[10%] ">
                                {item.gender == false ? 'Nam' : 'Nữ'}
                            </div>
                            <div className="my-auto w-[10%] text-center">
                                {item.class}
                            </div>
                            <div className="my-auto w-[10%] text-center">
                                {item.emoji}
                            </div>
                            <div className="my-auto flex gap-[10px] justify-center w-[20%] text-center ">
                                <Link className="px-[15px] flex items-center gap-[5px] bg-yellow-600 rounded-sm text-white py-[8px] text-[14px] " to="/">
                                    <ClipLoader color="white" size={15} />
                                    <span>Sửa</span>
                                </Link>
                                <Link className="px-[15px] flex items-center gap-[5px] bg-red-600 text-white rounded-sm py-[8px] text-[14px] " to="/">
                                    <ClipLoader color="white" size={15} />
                                    <span>Xóa</span>
                                </Link>
                            </div>
                        </div>
                    })
                    :
                    ''
            }
        </div>
    );
};

export default AccountList;
