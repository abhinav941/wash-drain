import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';

import { lightTheme } from 'utils';
import SampleModalContainer from 'container/Modals/DeleteModal';

export const history = createBrowserHistory();

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router history={history}>
                <SampleModalContainer loading={false} visible={true} toggleVisibility={() => {}} />
            </Router>
        </ThemeProvider>
    );
}

export default App;
