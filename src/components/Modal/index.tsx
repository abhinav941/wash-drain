import React, { ReactNode } from 'react';

import { Container, Title, Description, Content, Footer, CancelButtonContainer } from './styled';

import { ReactComponent as CancelButton } from 'assets/icons/close.svg';

interface ChildrenProps {
    children: ReactNode;
}

interface ModalProps {
    visible: boolean;
}

export const Modal = ({ children, visible, ...restProps }: ModalProps & ChildrenProps) => {
    return (
        <Container visible={visible} {...restProps}>
            {children}
        </Container>
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
            <CancelButton />
        </CancelButtonContainer>
    );
};
