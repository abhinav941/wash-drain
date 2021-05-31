import { styled } from 'utils';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
`;

export const SideLink = styled(NavLink)<{ navStyle?: object }>`
    padding: 10px;
    margin-bottom: 10px;

    display: flex;

    color: ${props => props.theme.sidebar.fontColor};
    background-color: ${props => props.theme.sidebar.backgroundColor};
    border-radius: 6px;
    text-transform: uppercase;

    &:hover {
        color: ${props => props.theme.sidebar.activeFontColor};
    }

    &.active {
        color: ${props => props.theme.sidebar.activeFontColor};
        background-color: ${props => props.theme.sidebar.activeBackgroundColor};
        opacity: 1;
        ${props => (props.navStyle ? { ...props.navStyle } : null)}
        box-shadow:${props => props.theme.sidebar.activeBoxShadow}
    }
`;

export const Collaspable = styled(SideLink)``;

export const Item = styled.div``;
