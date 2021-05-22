import React from 'react';

import { DeleteImageStyle } from './styled';
import { DangerButton, SecondaryButton, Modal } from 'components';

interface Props {
    visible: boolean;
    toggleVisibility: () => void;
}

const DeleteModalConatainer = ({ visible, toggleVisibility }: Props) => {
    return (
        <Modal visible={visible} style={{ width: '512px' }}>
            <Modal.CancelButton onClick={toggleVisibility} />

            <Modal.Content style={{ display: 'flex', justifyContent: 'center' }}>
                <DeleteImageStyle />
            </Modal.Content>

            <Modal.Title style={{ display: 'flex', justifyContent: 'center', fontSize: '25px' }}>
                Are you sure?
            </Modal.Title>

            <Modal.Description
                style={{ display: 'flex', justifyContent: 'center', fontSize: '16px', padding: '10px 25px' }}
            >
                Are you sure, You want to delete this modal<br></br>
                All details related to this modal will be delete
            </Modal.Description>

            <Modal.Footer style={{ marginTop: '20px' }}>
                <SecondaryButton size="large" style={{ width: '40%', textAlign: 'left' }}>
                    No, cancel
                </SecondaryButton>
                <DangerButton size="large" style={{ width: '50%' }}>
                    Yes, delete
                </DangerButton>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModalConatainer;
