"use client"

import {useHistory} from "@/contexts/history-context";
import {useEffect} from "react";

export default function HistoryLogger({title, href}: Readonly<{ title: string, href: string }>) {
    const {pushItem} = useHistory();

    useEffect(() => {
        console.log("Push item on History Logger")
        pushItem({type: 'article', title: title, href: href});
    }, []);

    return (
        <></>
    )
}
