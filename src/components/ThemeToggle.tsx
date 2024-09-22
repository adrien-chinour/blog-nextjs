"use client"

import {useTheme} from "@/contexts/ThemeContext";
import {Switch} from "@/components/ui/switch";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return (
        <Switch checked={theme === 'dark'} onClick={() => toggleTheme()} />
    );
}
