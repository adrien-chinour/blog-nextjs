"use client"

import {useTheme} from "@/contexts/theme-context";
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
    }, [toggleTheme])

    return (
        <Switch checked={theme === 'dark'} onClick={() => toggleTheme()} title="Changer le thème (Ctrl+M / ⌘+M)"/>
    );
}
