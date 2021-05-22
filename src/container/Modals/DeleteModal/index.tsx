import React from 'react';

import { Modal } from 'components/Modal';
import { DeleteImageStyle } from './styled';

const SampleModalContainer = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleVisibility = () => {
        console.log('clicked');

        setVisible(prevProps => {
            return !prevProps;
        });
    };
    return (
        <>
            <button onClick={toggleVisibility}> Show modal </button>
            <Modal visible={visible} style={{ width: '512px' }}>
                <Modal.Content style={{ display: 'flex', justifyContent: 'center' }}>
                    <DeleteImageStyle />
                </Modal.Content>
                <Modal.Title style={{ display: 'flex', justifyContent: 'center' }}>Are you sure?</Modal.Title>
                <Modal.Description style={{ display: 'flex', justifyContent: 'center' }}>
                    Are you sure, You want to delete this modal<br></br>
                    All details related to this modal will be delete
                </Modal.Description>
                <Modal.CancelButton onClick={toggleVisibility} />

                <Modal.Footer>
                    <h2>Footer buttons here</h2>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SampleModalContainer;
