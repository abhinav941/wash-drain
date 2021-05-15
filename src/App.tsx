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
    const [visible, setVisible] = React.useState<boolean>(false);

    const toggleVisibility = () => {
        setVisible(prevProps => {
            return !prevProps;
        });
    };
    return (
        <ThemeProvider theme={lightTheme}>
            <Router history={history}>
                <button onClick={toggleVisibility}> Show modal </button>

                <Modal visible={visible}>
                    <Modal.Title> Add Something </Modal.Title>
                    <Modal.Description> to add something here</Modal.Description>
                    <Modal.CancelButton onClick={toggleVisibility} />
                    <Modal.Content> </Modal.Content>
                    <Modal.Footer> </Modal.Footer>
                </Modal>
            </Router>
        </ThemeProvider>
    );
}

export default App;
