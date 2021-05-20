import { styled } from 'utils';

//----------------------------------------------------------------
//                   Todo make this responsive
//----------------------------------------------------------------
export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 100px auto;
    grid-template-areas:
        'sidebar header'
        'sidebar content';
`;

export const Header = styled.div`
    grid-area: header;
`;

export const Content = styled.div`
    grid-area: content;
`;

export const Sidebar = styled.div`
    grid-area: sidebar;
`;
