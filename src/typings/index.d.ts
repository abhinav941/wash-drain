type Theme = {
    primaryColor: string;
    secondaryColor: string;

    background: {
        primary: string;
        secondary: string;
    };

    sidebar: any;
    componentsColor: {
        paragraph: string;
        forgotText: string;
        loginPageSep: string;
        cardRow: {
            header: string;
            data: string;
            actionBtnShadow: string;
            cardRowBorderColor: string;
        };
    };
    registrationPage: {
        borderColor: string;
        backgroundColor: string;
        contentColor: string;
    };
    button: {
        primary: string;
        secondary: string;
        fontWeight:number;
        shadow: string;
        primaryFontColor: string;
        secondaryFontColor: string;
        backFontColor: string;
        backColor: string;
    };
    tabs: {
        activeColor: string;
        inactiveColor: string;
    };

    // TEMP
    body: string;
    text: string;
    toggleBorder: string;
    gradient: string;
};
