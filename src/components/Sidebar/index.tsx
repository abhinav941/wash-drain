import React, { ReactNode } from 'react';
import { NavLinkProps } from 'react-router-dom';

import { Container, SideLink, Collaspable, Item } from './styled';

export const Sidebar = ({ children, ...restProps }: ChildrenProps) => {
    const [visible, setVisible] = React.useState(false);
    return <Container>{children}</Container>;
};

Sidebar.SideLink = ({ children, ...restProps }: ChildrenProps & NavLinkProps) => {
    return <SideLink {...restProps}>{children}</SideLink>;
};

Sidebar.Collaspable = ({ children, ...restProps }: ChildrenProps & NavLinkProps) => {
    return <Collaspable {...restProps}> {children} </Collaspable>;
};
