import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"

import "antd/dist/antd.css";

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
    </Router>
  );
}

export default App;
