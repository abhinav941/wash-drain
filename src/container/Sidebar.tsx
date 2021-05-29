import React from 'react';

import { Sidebar } from 'components';

import { ReactComponent as Logo } from 'assets/images/logo.svg';

export const SidebarContainer = () => {
    return (
        <Sidebar>
            <Sidebar.SideLink>Inner Content</Sidebar.SideLink>
        </Sidebar>
    );
};
