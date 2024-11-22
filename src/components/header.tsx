import React from "react";
import {Search} from "lucide-react";

export default function Header() {
    return (
        <header className="md:flex p-2 mb-4 mx-4 lg:mx-2 justify-between items-end">
            <h1 className="title text-2xl text-center md:text-left mb-4 md:mb-0">
                <a className="hover:underline" href="/">Undefined</a>
            </h1>
            <nav role="navigation">
                <ul className="flex justify-center gap-4 font-medium">
                    <li><a className="hover:underline" href="/articles">Articles</a></li>
                    <li><a className="hover:underline" href="/projets">Projets</a></li>
                    <li className="content-baseline">
                        <a className="hover:underline" href="/recherche"><Search /></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
