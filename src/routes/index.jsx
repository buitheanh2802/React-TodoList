import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AccountAdd = React.lazy(() => import('./../components/AccountAdd'));
const AccountList = React.lazy(() => import('./../components/AccountList'));

const Routes = () => {
    return (
        <React.Fragment>
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
