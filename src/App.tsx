import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";

import "antd/dist/antd.css";

import { darkTheme, lightTheme } from "utils/theme";
import { useDarkMode } from "components/useTheme";

export const history = createBrowserHistory();

function App() {
    const [theme /* toggleTheme */, , componentMounted] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    if (!componentMounted) {
        return <div />;
    }
    return (
        <ThemeProvider theme={themeMode}>
        </ThemeProvider>
    );
}

export default App;
