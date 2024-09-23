"use client"

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

export type HistoryItem = {
    type: 'article',
    title: string,
    href: string,
}

type HistoryContextProps = {
    history: HistoryItem[];
    pushItem: (_item: HistoryItem) => void;
    clearHistory: () => void;
}

const HistoryContext = createContext<HistoryContextProps | undefined>(undefined);

export const useHistory = (): HistoryContextProps => {
    const context = useContext(HistoryContext);
    if (!context) {
        throw new Error('useHistory must be used within a HistoryProvider');
    }

    return context;
}

export function HistoryProvider({children}: { children: ReactNode }) {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    const getHistory = (): HistoryItem[] => {
        return JSON.parse(window.localStorage.getItem('history') ?? '[]') as HistoryItem[];
    }

    const pushItem = (item: HistoryItem) => {
        let history = getHistory().filter((t) => t.href !== item.href);

        history.push(item);
        history = history.reverse().slice(0, 10);

        window.localStorage.setItem('history', JSON.stringify(history));

        setHistory(getHistory());
    }

    const clearHistory = () => {
        window.localStorage.removeItem('history');
        setHistory([])
    }

    return <HistoryContext.Provider value={{history, pushItem, clearHistory}}>
        {children}
    </HistoryContext.Provider>
}
