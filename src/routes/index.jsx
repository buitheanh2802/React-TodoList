import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactSelect from 'react-select';

const AccountAdd = React.lazy(() => import('./../components/AccountAdd'));
const AccountList = React.lazy(() => import('./../components/AccountList'));
const ReactSelectOption = [
    {
        label: 'Tiếng việt',
        value: 'vi'
    },
    {
        label: 'English',
        value: 'en'
    }
]

const Routes = () => {
    const setting = useSelector(state => state.setting);
    console.log(setting);
    return (
        <React.Fragment>
            <div className="w-[1024px] mt-[20px] mx-auto ">
                <div className="w-[150px] ">
                    <ReactSelect
                        options={ReactSelectOption}
                        value={ReactSelectOption[0]}
                    />
                </div>
            </div>
            <BrowserRouter>
                <React.Suspense fallback={<div>Loading.....</div>}>
                    <Switch>
                        <Route path='/add'>
                            <AccountAdd />
                        </Route>
                        <Route path='/' exact={true}>
                            <AccountList />
                        </Route>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Routes;
