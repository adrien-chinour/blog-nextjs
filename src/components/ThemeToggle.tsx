"use client"

import {useTheme} from "@/contexts/ThemeContext";
import {Switch} from "@/components/ui/switch";
import {useEffect} from "react";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "m" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                toggleTheme()
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [theme])

    return (
        <Switch checked={theme === 'dark'} onClick={() => toggleTheme()} title="Changer le thème (Ctrl+M / ⌘+M)"/>
    );
}
