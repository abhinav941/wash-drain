import React, { ReactNode } from 'react';
import { NavLinkProps } from 'react-router-dom';

import { Container, SideLink, CloseIcon, Menu, SubMenuLink, OpenIcon, Title, Icon } from './styled';

export const Sidebar = ({ children, ...restProps }: ChildrenProps) => {
    return <Container>{children}</Container>;
};

Sidebar.SideLink = ({ children, ...restProps }: ChildrenProps & NavLinkProps) => {
    return <SideLink {...restProps}>{children}</SideLink>;
};

Sidebar.SubMenuLink = ({ children, ...restProps }: ChildrenProps & NavLinkProps) => {
    return <SubMenuLink {...restProps}>{children}</SubMenuLink>;
};

Sidebar.Menu = ({ children, ...restProps }: ChildrenProps & { visible: boolean }) => {
    return <Menu {...restProps}>{children}</Menu>;
};

Sidebar.Title = ({ children, ...restProps }: ChildrenProps) => {
    return <Title {...restProps}>{children}</Title>;
};

Sidebar.Icon = ({ children, ...restProps }: ChildrenProps) => {
    return <Icon>{children}</Icon>;
};

Sidebar.Crate = () => {
    return (
        <>
            <CloseIcon /> <OpenIcon />
        </>
    );
};
