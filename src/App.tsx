import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';

import { lightTheme } from 'utils';
import { Modal } from 'components/Modal';

export const history = createBrowserHistory();

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router history={history}>
                <Modal visible={true} loading={false}>
                    Hello
                </Modal>
            </Router>
        </ThemeProvider>
    );
}

export default App;
