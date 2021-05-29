import React, { ReactNode } from 'react';

import { Container, SideLink } from './styled';

export const Sidebar = ({ children, ...restProps }: ChildrenProps) => {
    return <Container>{children}</Container>;
};

Sidebar.SideLink = ({ children, ...restProps }: ChildrenProps) => {
    return (
        <SideLink to="" {...restProps}>
            {children}
        </SideLink>
    );
};
