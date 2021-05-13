import baseStyled, { ThemedStyledInterface } from "styled-components";

export const screenSize = {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
};

const colors = {
    blue: "#007bff",
    indigo: "#6610f2",
    purple: "#6f42c1",
    pink: "#e83e8c",
    red: "#dc3545",
    orange: "#fd7e14",
    yellow: "#ffc107",
    green: "#28a745",
    teal: "#20c997",
    cyan: "#17a2b8",
    white: "#fff",
    gray: "#6c757d",
    grayDark: "#343a40",
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#343a40",
};

export const shadow = {
    "very-light": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    light: " 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    medium: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    high: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "very-high": "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
};

export const lightTheme: Theme = {
    primaryColor: colors.cyan,
    secondaryColor: "#4B5F7A",
    background: {
        primary: "white",
        secondary: "#F8F6F4",
    },

    sidebar: {
        background: "white",
        activeBackgroundColor: "#FCFAF9",
        boxShadow: "#00000026",
        borderBottom: "#f4f4f4",
        textColor: "#232323",
        activeBorderColor: colors.cyan,
        badgeColor: "#a8a8a8",
        linkColor: colors.cyan,
    },
    componentsColor: {
        paragraph: "#7e7c8c",
        forgotText: "#1890ff",
        loginPageSep: "#cccccc",
        cardRow: {
            cardRowBorderColor: "#909090",
            data: "#4b5f7a",
            header: "#4b5f7a",
            actionBtnShadow: "#00000029",
        },
    },
    tabs: {
        activeColor: "#E54919",
        inactiveColor: "#A8A8A8",
    },
    registrationPage: {
        borderColor: "#eee",
        backgroundColor: "#f8f6f4",
        contentColor: "#FBFBFB",
    },
    button: {
        primary: colors.cyan,
        fontWeight: 500,
        secondary: "#7E7C8A",
        primaryFontColor: "#f9f9f9",
        secondaryFontColor: "#F9f9f9",
        shadow: "0px 3px 3px #00000029",
        backFontColor: "#FFFFFF",
        backColor: colors.danger,
    },

    body: "#E2E2E2",
    text: "#363537",
    toggleBorder: "#FFF",
    gradient: "linear-gradient(#39598A, #79D7ED)",
};
// Demo colors
export const darkTheme: Theme = {
    primaryColor: colors.cyan,
    secondaryColor: "#4B5F7A",
    background: {
        primary: "#0C0032",
        secondary: "#F8F6F4",
    },

    sidebar: {
        background: "#0C0032",
        boxShadow: "#000000",
        borderBottom: "#000",
        textColor: "#3500D3",
        activeBackgroundColor: "#FCFAF9",
        activeBorderColor: colors.cyan,
        badgeColor: "#a8a8a8",
        linkColor: colors.cyan,
    },
    componentsColor: {
        paragraph: "#ffffff",
        forgotText: "#1890ff",
        cardRow: {
            cardRowBorderColor: "#909090",
            data: "#4b5f7a",
            header: "#4b5f7a",
            actionBtnShadow: "#00000029",
        },
        loginPageSep: "#cccccc",
    },
    tabs: {
        activeColor: "black",
        inactiveColor: "#A8A8A8",
    },
    registrationPage: {
        borderColor: "#f8f6f4",
        backgroundColor: "#f9f9f9",
        contentColor: "#FBFBFB",
    },
    button: {
        primary: colors.cyan,
        secondary: "#7E7C8A",
        fontWeight: 500,
        primaryFontColor: "#f9f9f9",
        secondaryFontColor: "#F9f9f9",
        shadow: "0px 3px 3px #00000029",
        backFontColor: "#FFFFFF",
        backColor: "#7E7C8A",
    },

    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    gradient: "linear-gradient(#091236, #1E215D)",
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;
