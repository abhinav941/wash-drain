import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import {Router} from "react-router-dom"

import "antd/dist/antd.css";

import {  lightTheme } from "utils/theme";

export const history = createBrowserHistory();

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
    <Router history={history}>
    </Router>

        </ThemeProvider>
    );
}

export default App;
