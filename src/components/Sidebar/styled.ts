import { styled } from 'utils';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
`;

//----------------------------------------------------------------
// Collapsable Menu styles
//----------------------------------------------------------------
export const Menu = styled.div<{ visible?: boolean }>`
    display: none;
    font-size: 12px;
    flex-direction: column;
`;

//----------------------------------------------------------------
// Crate Icons
//----------------------------------------------------------------
export const OpenIcon = styled(ArrowDown)`
    margin-left: 10px;
    font-size: 20px;
`;

export const CloseIcon = styled(ArrowDown)`
    margin-left: 10px;
    transform: rotate(-90deg);
    font-size: 20px;
`;

//----------------------------------------------------------------
// Sidebar Icons
//----------------------------------------------------------------
export const Icon = styled.div`
    margin-right: 10px;
`;

export const SideLink = styled(NavLink)<{ navStyle?: object }>`
    font-size: 16px;

    padding: 10px;
    margin-bottom: 10px;

    display: block;
    color: ${props => props.theme.sidebar.fontColor};
    background-color: ${props => props.theme.sidebar.backgroundColor};
    border-radius: 6px;
    text-transform: uppercase;

    &:hover {
        color: ${props => props.theme.sidebar.activeFontColor};
    }

    ${CloseIcon} {
        display: flex;
    }
    ${OpenIcon} {
        display: none;
    }
    &.active {
        color: ${props => props.theme.sidebar.activeFontColor};
        background-color: ${props => props.theme.sidebar.activeBackgroundColor};
        opacity: 1;
        ${props => (props.navStyle ? { ...props.navStyle } : null)}
        box-shadow:${props => props.theme.sidebar.activeBoxShadow};

        ${Menu} {
            display: flex;
            padding: 0;
        }
        ${CloseIcon} {
            display: none;
        }
        ${OpenIcon} {
            display: flex;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

export const SubMenuLink = styled(SideLink)`
    padding: 0;
    color: ${props => props.theme.sidebar.fontColor};
    background-color: ${props => props.theme.sidebar.activeBackgroundColor};
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 12px;
    &.active {
        color: ${props => props.theme.sidebar.activeFontColor};
        box-shadow: none;
    }
`;
