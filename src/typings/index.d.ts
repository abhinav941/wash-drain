type Theme = {
    button: {
        primary: string;
        secondary: string;
        danger: string;
        primaryFontColor: string;
        secondaryFontColor: string;
        dangerFontColor: string;
        shadow: string;
    };
    loader: {
        backgroundColor: string;
    };
};

interface ChildrenProps {
    children?: ReactNode;
    style?: Object;
}
