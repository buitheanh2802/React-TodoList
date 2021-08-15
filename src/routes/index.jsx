import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AccoutList from './../components/AccountList';
import Container from '@material-ui/core/Container';

const Routes = () => {
    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <BrowserRouter>
                    <Switch>
                        <Route path='/'>
                            <AccoutList />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </React.Fragment>
    );
};

export default Routes;
