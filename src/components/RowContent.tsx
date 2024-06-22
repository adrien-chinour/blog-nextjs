import React from "react";

export default function RowContent({title, moreLink, children}: {title: string, moreLink: string, children: React.ReactNode}) {
    return (
        <div className="px-4 md:px-0">
            <div className="flex justify-between items-end">
                <h2 className="title font-serif">{title}</h2>
                <a href={moreLink} className="font-serif hover:underline">Voir plus →</a>
            </div>
            {children}
        </div>
    )
}
