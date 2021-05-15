import React, { ReactNode } from 'react';
import { Modal as AntdModal } from 'antd';

import { Container, Title, Description, Content, Footer } from './styled';

interface ChildrenProps {
    children: ReactNode;
}

interface ModalProps {
    visible: boolean;
    loading: boolean;
}

export const Modal = ({ children, visible, loading, ...restProps }: ModalProps & ChildrenProps) => {
    return <Container {...restProps}>{children}</Container>;
};

Modal.Title = (props: ChildrenProps) => {
    return <Title>{props.children}</Title>;
};

Modal.Description = (props: ChildrenProps) => {
    return <Description>{props.children}</Description>;
};

Modal.Content = (props: ChildrenProps) => {
    return <Content>{props.children}</Content>;
};

Modal.Footer = (props: ChildrenProps) => {
    return <Footer>{props.children}</Footer>;
};
