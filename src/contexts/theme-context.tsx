"use client"

import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {getCookie, setCookie} from "@/utils/cookies";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};

export function ThemeProvider({children}: { children: ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = (getCookie('theme') as 'light' | 'dark') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setCookie('theme', newTheme, 180);

        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
