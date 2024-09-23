"use client"

import {useEffect} from "react";
import {useHistory} from "@/contexts/history-context";

export default function HistoryLogger({title, href}: Readonly<{ title: string, href: string }>) {
    const {pushItem} = useHistory();

    useEffect(() => {
        pushItem({type: 'article', title: title, href: href});
    }, [title, href, pushItem])

    return (
        <></>
    )
}
