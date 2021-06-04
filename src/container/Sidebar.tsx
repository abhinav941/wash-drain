import React from 'react';

import { Sidebar } from 'components';

import { ReactComponent as Logo } from 'assets/images/logo.svg';

export const SidebarContainer = () => {
    const [visible, setVisible] = React.useState(false);

    const toggleVisibility = () => {
        setVisible(prevProps => {
            return !prevProps;
        });
    };

    return (
        <Sidebar>
            <Sidebar.SideLink to="/home">Inner Content</Sidebar.SideLink>
            <Sidebar.SideLink to="/contact"> Contact </Sidebar.SideLink>
            <Sidebar.SideLink to="/about" onClick={toggleVisibility}>
                <Sidebar.Title>
                    About <Sidebar.Crate />
                </Sidebar.Title>

                <Sidebar.Menu visible={visible}>
                    <Sidebar.SubMenuLink exact to="/about">
                        {' '}
                        about us{' '}
                    </Sidebar.SubMenuLink>
                    <Sidebar.SubMenuLink to="/about/me"> about me </Sidebar.SubMenuLink>
                </Sidebar.Menu>
            </Sidebar.SideLink>
        </Sidebar>
    );
};
