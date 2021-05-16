import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const screenSize = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
};

/* Colors: */
export const color = {
    'pure-white': '#ffffff',
    'light-red': '#E25757',
    'white': '#DFE7ED',
    'grey': '#A5B8CC',
    'blue-dark': '#33608A',
    'blue-light': '#28CBD5',
    'blue-picton': '#7DE6FF',
    'blue-navy': '#07335B',
};

export const shadow = {
    'very-light': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    light: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    high: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    'very-high': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
};

export const lightTheme: Theme = {
    button: {
        primary: color['blue-light'],
        secondary: 'none',
        danger: color['light-red'],
        primaryFontColor: color['pure-white'],
        secondaryFontColor: color['blue-navy'],
        dangerFontColor: color['pure-white'],
        shadow: 'none',
    },
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
