import { styled } from 'utils';
import { NavLink } from 'react-router-dom';

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
export const OpenIcon = styled.img`
    margin-left: 10px;
    font-size: 20px;
`;

export const CloseIcon = styled.img`
    margin-left: 10px;
    transform: rotate(-90deg);
    font-size: 20px;
`;

//----------------------------------------------------------------
// Sidebar Icons
//----------------------------------------------------------------
export const Icon = styled.div`
    margin-right: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const ActiveIcon = styled.img``;
export const InactiveIcon = styled.img``;

export const SideLink = styled(NavLink)`
    font-size: 16px;
    position: relative;

    padding: 10px 20px;
    margin-bottom: 10px;

    color: ${props => props.theme.sidebar.fontColor};
    background-color: ${props => props.theme.sidebar.backgroundColor};
    border-radius: 6px;
    text-transform: uppercase;

    &:hover {
        color: ${props => props.theme.sidebar.activeFontColor};
    }

    ${CloseIcon},${InactiveIcon} {
        display: flex;
    }
    ${OpenIcon},${ActiveIcon} {
        display: none;
    }
    &.active {
        color: ${props => props.theme.sidebar.activeFontColor};
        background-color: ${props => props.theme.sidebar.activeBackgroundColor};
        opacity: 1;
        box-shadow: ${props => props.theme.sidebar.activeBoxShadow};

        ${Menu} {
            display: flex;
            padding: 0;
        }
        ${CloseIcon},${InactiveIcon} {
            display: none;
        }
        ${OpenIcon} ,${ActiveIcon} {
            display: flex;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 35px !important;
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
