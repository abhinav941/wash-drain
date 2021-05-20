import React from 'react';

import { Container, Header, Sidebar, Content } from './styled';

const Layout = ({ children }: any) => {
    return <Container>{children}</Container>;
};

Layout.Content = ({ children, ...restProps }: any) => {
    return <Content {...restProps}>{children}</Content>;
};

Layout.Header = ({ children, ...restProps }: any) => {
    return <Header {...restProps}>{children}</Header>;
};

Layout.Sidebar = ({ children, ...restProps }: any) => {
    return <Sidebar {...restProps}>{children}</Sidebar>;
};

export default Layout;
