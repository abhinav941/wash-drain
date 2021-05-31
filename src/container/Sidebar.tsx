import React from 'react';

import { Sidebar } from 'components';

import { ReactComponent as Logo } from 'assets/images/logo.svg';

export const SidebarContainer = () => {
    return (
        <Sidebar>
            <Sidebar.SideLink to="/home">Inner Content</Sidebar.SideLink>
            <Sidebar.SideLink to="/contact"> Contact </Sidebar.SideLink>
        </Sidebar>
    );
};
