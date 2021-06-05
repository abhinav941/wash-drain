import React from 'react';

import { Sidebar } from 'components';

//----------------------------------------------------------------
// Icons
//----------------------------------------------------------------
import DashboardFaded from 'assets/icons/dashboard-faded.png';
import Dashboard from 'assets/icons/dashboard.png';

import Customer from 'assets/icons/inventory.png';
import CustomerFaded from 'assets/icons/inventory-faded.png';

// import Offers from 'assets/icons/offers.png';
// import OffersFaded from 'assets/icons/offers-faded.png';

export const SidebarContainer = () => {
    return (
        <Sidebar>
            <Sidebar.SideLink to="/home">
                <Sidebar.Icon active={Dashboard} inactive={DashboardFaded} />
                <Sidebar.Title>Dashboard</Sidebar.Title>
            </Sidebar.SideLink>
            <Sidebar.SideLink to="/contact">
                <Sidebar.Title>Contact</Sidebar.Title>
            </Sidebar.SideLink>
            <Sidebar.SideLink to="/about">
                {/* <Sidebar.Icon active={Offers} inactive={OffersFaded} /> */}
                <Sidebar.Title withCrate>About</Sidebar.Title>
                <Sidebar.Menu>
                    <Sidebar.SubMenuLink exact to="/about">
                        about us
                    </Sidebar.SubMenuLink>
                    <Sidebar.SubMenuLink to="/about/me"> about me </Sidebar.SubMenuLink>
                </Sidebar.Menu>
            </Sidebar.SideLink>
            <Sidebar.SideLink exact to="/">
                <Sidebar.Title> Contct </Sidebar.Title>
                <Sidebar.Icon active={Customer} inactive={CustomerFaded} />
            </Sidebar.SideLink>
        </Sidebar>
    );
};
