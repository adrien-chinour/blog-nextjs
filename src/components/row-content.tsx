import React from "react";

export default function RowContent({title, moreLink, children}: {title: string, moreLink: string, children: React.ReactNode}) {
    return (
        <section className="px-4 md:px-0">
            <header className="flex justify-between items-end">
                <h2 className="title font-serif">{title}</h2>
                <a href={moreLink} className="text-sm font-bold hover:underline">Voir plus →</a>
            </header>
            {children}
        </section>
    )
}
