import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './helpers/materialUi';
import AccountList from './components/AccountList';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Container maxWidth="md">
                    <h3 style={{ textAlign: 'center' }}>Todo List Account</h3>
                    <AccountList />
                </Container>
            </ThemeProvider>
        </Provider>
    );
};

export default App;