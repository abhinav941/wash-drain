import React from 'react';
import { NavLinkProps } from 'react-router-dom';

import {
    Container,
    ActiveIcon,
    InactiveIcon,
    SideLink,
    CloseIcon,
    Menu,
    SubMenuLink,
    OpenIcon,
    Title,
    Icon,
} from './styled';

import ArrowDown from '../../assets/icons/arrow-down.png';

interface IconProps {
    active: string;
    inactive: string;
}

export const Sidebar = ({ children, ...restProps }: ChildrenProps) => {
    return <Container>{children}</Container>;
};

Sidebar.SideLink = ({ children, ...restProps }: ChildrenProps & NavLinkProps) => {
    return <SideLink {...restProps}>{children}</SideLink>;
};

Sidebar.SubMenuLink = ({ children, ...restProps }: ChildrenProps & NavLinkProps) => {
    return <SubMenuLink {...restProps}>{children}</SubMenuLink>;
};

Sidebar.Menu = ({ children, ...restProps }: ChildrenProps) => {
    return <Menu {...restProps}>{children}</Menu>;
};

Sidebar.Title = ({ children, withCrate, ...restProps }: ChildrenProps & { withCrate?: boolean }) => {
    return (
        <Title {...restProps}>
            {children} {withCrate ? <Crate /> : null}
        </Title>
    );
};

Sidebar.Icon = ({ children, active, inactive, ...restProps }: ChildrenProps & IconProps) => {
    return (
        <Icon>
            <ActiveIcon src={active} />
            <InactiveIcon src={inactive} />
        </Icon>
    );
};

const Crate = () => {
    return (
        <>
            <CloseIcon src={ArrowDown} /> <OpenIcon src={ArrowDown} />
        </>
    );
};
