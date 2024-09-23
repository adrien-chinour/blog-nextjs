"use client"

import {useHistory} from "@/contexts/history-context";
import {useEffect} from "react";

export default function HistoryLogger({title, href}: Readonly<{ title: string, href: string }>) {
    const {pushItem} = useHistory();

    useEffect(() => {
        pushItem({type: 'article', title: title, href: href});
    }, []);

    return (
        <></>
    )
}
