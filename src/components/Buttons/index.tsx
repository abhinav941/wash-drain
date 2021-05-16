import { Button as AntdButton } from 'antd';

import { styled } from 'utils';

const Button = styled(AntdButton)`
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 1.8px;
`;

export const ActionButton = styled.img`
    cursor: pointer;
    z-index: 1;
    &:hover {
        box-shadow: ${props => props.theme.button.shadow};
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.button.primary};
    color: ${props => props.theme.button.primaryFontColor};
    box-shadow: ${props => props.theme.button.shadow};

    &:hover {
        background-color: ${props => props.theme.button.primaryFontColor};
        color: ${props => props.theme.button.primary};
        border-color: ${props => props.theme.button.primary};
    }
`;

export const SecondaryButton = styled(Button)`
    background-color: ${props => props.theme.button.secondary};
    color: ${props => props.theme.button.secondaryFontColor};
    border: none;
    box-shadow: ${props => props.theme.button.shadow};

    &:hover {
        color: ${props => props.theme.button.secondaryFontColor};
    }
`;

export const DangerButton = styled(Button)`
    background-color: ${props => props.theme.button.danger};
    color: ${props => props.theme.button.dangerFontColor};
    box-shadow: ${props => props.theme.button.shadow};

    &:hover {
        background-color: ${props => props.theme.button.dangerFontColor};
        color: ${props => props.theme.button.danger};
        border-color: ${props => props.theme.button.danger};
    }
`;
