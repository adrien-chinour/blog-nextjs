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
import {Layers, Newspaper, Terminal} from "lucide-react";
import {getHistory, HistoryItem} from "@/services/history";

export function NavigationCommand() {
    const router = useRouter();
    const [open, setOpen] = useState(false)
    const [history, setHistory] = useState<HistoryItem[]>([])

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

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    const goTo = (href: string) => {
        router.push(href);
        setOpen(false);
    }

    return (
        <>
            <button className="inline" onClick={() => setOpen(true)} title="Menu commande (Ctrl+J / ⌘+J)">
                <Terminal size={20}/>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Tape une commande ou une recherche..."/>
                <CommandList>
                    <CommandEmpty>Aucun résultat.</CommandEmpty>
                    <CommandGroup heading="Historique">
                        {
                            history &&
                            history.map((item) => (
                                <CommandItem key={item.href} onSelect={() => goTo(item.href)}>
                                    <Newspaper size={16} strokeWidth={1} className="mr-2"/>
                                    <span>{item.title}</span>
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
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
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
