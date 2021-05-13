import { useEffect, useState } from "react";

export const useDarkMode = (): [string, () => void, boolean] => {
    const [theme, setTheme] = useState("light");
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = (mode: string) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    const toggleTheme = () => {
        if (theme === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localTheme
            ? // FIXME: This should be dark, but as it's not yet complete, it's disabled
              setMode("light")
            : localTheme
            ? setTheme(localTheme)
            : setMode("light");
        setComponentMounted(true);
    }, []);

    return [theme, toggleTheme, componentMounted];
};
