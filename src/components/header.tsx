import React from "react";
import {Search} from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="md:flex p-2 mb-4 mx-4 lg:mx-2 justify-between items-end">
            <h1 className="title text-2xl text-center md:text-left mb-4 md:mb-0">
                <Link className="hover:underline" href="/">Undefined</Link>
            </h1>
            <nav role="navigation">
                <ul className="flex justify-center gap-4 font-medium">
                    <li><Link className="hover:underline" href="/articles">Articles</Link></li>
                    <li><Link className="hover:underline" href="/projets">Projets</Link></li>
                    <li className="content-baseline">
                        <Link className="hover:underline" href="/recherche"><Search/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
