"use client"

import * as React from "react"
import {useEffect, useState} from "react"

import {useRouter} from "next/navigation";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command";
import {Layers, Newspaper, Search, SunMoon, Terminal, Trash2} from "lucide-react";
import {useTheme} from "@/contexts/theme-context";
import useHistoryStore from "@/stores/history-store";

export function NavigationCommand() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])


    const history = useHistoryStore((state) => state.history);
    const clearHistory = useHistoryStore((state) => state.clearHistory);

    const clear = () => {
        clearHistory();
        setOpen(false);
    }

    const router = useRouter();
    const goTo = (href: string) => {
        router.push(href);
        setOpen(false);
    }

    const {toggleTheme} = useTheme();
    const switchTheme = () => {
        toggleTheme();
        setOpen(false);
    }

    return (
        <>
            <button className="ml-2" onClick={() => setOpen(true)} title="Menu commande (Ctrl+J / ⌘+J)">
                <Terminal size={20} strokeWidth={3}/>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Tape une commande ou une recherche..."/>
                <CommandList>
                    <CommandEmpty>Aucun résultat.</CommandEmpty>
                    {
                        history.length !== 0 &&
                        (
                            <CommandGroup heading="Historique">
                                {history.map((item) => (
                                    <CommandItem key={item.href} onSelect={() => goTo(item.href)}>
                                        <Newspaper size={16} strokeWidth={1} className="mr-2"/>
                                        <span>{item.title}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )
                    }
                    <CommandSeparator/>
                    <CommandGroup heading="Navigation">
                        <CommandItem onSelect={() => goTo('/articles')}>
                            <Layers size={16} strokeWidth={1} className="mr-2"/>
                            <span>Aller à la page <strong>Articles</strong></span>
                        </CommandItem>
                        <CommandItem onSelect={() => goTo('/projets')}>
                            <Layers size={16} strokeWidth={1} className="mr-2"/>
                            <span>Aller à la page <strong>Projets</strong></span>
                        </CommandItem>
                        <CommandItem onSelect={() => goTo('/recherche')}>
                            <Search size={16} strokeWidth={1} className="mr-2"/>
                            <span>Aller à la page <strong>Recherche</strong></span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandGroup heading="Paramètres">
                        <CommandItem onSelect={switchTheme}>
                            <SunMoon size={16} strokeWidth={1} className="mr-2"/>
                            <span>Changer le thème</span>
                        </CommandItem>
                        <CommandItem onSelect={clear}>
                            <Trash2 size={16} strokeWidth={1} className="mr-2"/>
                            <span>Vider mon historique</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
