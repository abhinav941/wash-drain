import { Modal } from 'components/Modal';
import React from 'react';

const SampleModalContainer = () => {
    const [visible, setVisible] = React.useState<boolean>(false);

    const toggleVisibility = () => {
        setVisible(prevProps => {
            return !prevProps;
        });
    };
    return (
        <>
            <button onClick={toggleVisibility}> Show modal </button>
            <Modal visible={visible}>
                <Modal.Title> Add Something </Modal.Title>
                <Modal.Description> to add something here</Modal.Description>
                <Modal.CancelButton onClick={toggleVisibility} />
                <Modal.Content> </Modal.Content>
                <Modal.Footer> </Modal.Footer>
            </Modal>
        </>
    );
};

export default SampleModalContainer;
