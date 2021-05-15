import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import 'antd/dist/antd.css';

import { lightTheme } from 'utils';

export const history = createBrowserHistory();

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router history={history}>helllos</Router>
        </ThemeProvider>
    );
}

export default App;
