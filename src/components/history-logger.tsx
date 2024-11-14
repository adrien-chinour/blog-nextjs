"use client"

import {useEffect} from "react";
import useHistoryStore from "@/stores/history-store";

export default function HistoryLogger({title, href}: Readonly<{ title: string, href: string }>) {
    const addItem = useHistoryStore((state) => state.addItem);

    useEffect(() => {
        addItem({
            type: 'article',
            href: href,
            title: title
        })
    }, [title, href, addItem]);

    return (
        <></>
    )
}
