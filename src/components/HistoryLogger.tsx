"use client"

import {useEffect} from "react";
import {getHistory, pushToHistory} from "@/services/history";

export default function HistoryLogger({title, href}: Readonly<{ title: string, href: string }>) {
    useEffect(() => {
        pushToHistory({type: 'article', title: title, href: href});
        console.log(getHistory());
    }, [title, href])

    return (
        <></>
    )
}
