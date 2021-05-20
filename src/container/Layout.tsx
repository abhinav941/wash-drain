import React from 'react';

import { Layout } from 'components';

export default function LayoutContainer() {
    return (
        <Layout>
            <Layout.Sidebar>Sidebar</Layout.Sidebar>
            <Layout.Header> Header</Layout.Header>
            <Layout.Content> Content</Layout.Content>
        </Layout>
    );
}
