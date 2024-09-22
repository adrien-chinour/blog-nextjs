import Link from "next/link";
import {NavigationCommand} from "@/components/NavigationCommand";
import React from "react";

export default function Header() {
    return (
        <header className="md:flex p-2 mb-4 mx-4 lg:mx-2 justify-between items-end" role="navigation">
            <h1 className="title text-2xl text-center md:text-left mb-4 md:mb-0">
                <a className="hover:underline" href="/">Undefined</a>
            </h1>
            <nav>
                <ul className="flex justify-center gap-4 font-medium">
                    <li><Link className="hover:underline" href="/articles">Articles</Link></li>
                    <li><Link className="hover:underline" href="/projets">Projets</Link></li>
                    <NavigationCommand/>
                </ul>
            </nav>
        </header>
    )
}
