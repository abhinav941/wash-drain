import React, { ReactNode } from 'react';

import {
    Container,
    CancelButton,
    Title,
    Description,
    Content,
    Footer,
    CancelButtonContainer,
    Backdrop,
} from './styled';

import CloseIcon from 'assets/icons/close.png';

interface ChildrenProps {
    children: ReactNode;
    style?: Object;
}

interface ModalProps {
    visible: boolean;
}

export const Modal = ({ children, visible, ...restProps }: ModalProps & ChildrenProps) => {
    return (
        <>
            {visible ? <Backdrop /> : null}
            <Container visible={visible} {...restProps}>
                {children}
            </Container>
        </>
    );
};

Modal.Title = ({ children, ...restProps }: ChildrenProps) => {
    return <Title {...restProps}>{children}</Title>;
};

Modal.Description = ({ children, ...restProps }: ChildrenProps) => {
    return <Description {...restProps}>{children}</Description>;
};

Modal.Content = ({ children, ...restProps }: ChildrenProps) => {
    return <Content {...restProps}>{children}</Content>;
};

Modal.Footer = ({ children, ...restProps }: ChildrenProps) => {
    return <Footer {...restProps}>{children}</Footer>;
};

Modal.CancelButton = ({ ...restProps }: any) => {
    return (
        <CancelButtonContainer {...restProps}>
            <CancelButton src={CloseIcon} />
        </CancelButtonContainer>
    );
};
