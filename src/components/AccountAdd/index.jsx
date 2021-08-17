import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AccountAdd = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className="py-[10px] text-center text-[24px] font-semibold mb-[20px] ">
                {t('titleAdd')}
            </h1>
        </div>
    );
};

export default AccountAdd;
