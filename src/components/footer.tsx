import React from "react";

export default function Footer() {
    return (
        <footer role="contentinfo"
            className="flex justify-between py-6 mt-2 items-center uppercase text-slate-600 dark:text-slate-400 text-xs font-bold px-4">
            <p className="hidden lg:block">© Adrien Chinour</p>
            <ul className="flex gap-4">
                <li>
                    <a className="hover:underline hover:text-slate-700 dark:hover:text-slate-300" target="_blank"
                       rel="nofollow" href="https://github.com/adrien-chinour/">
                        Github
                    </a>
                </li>
                <li>
                    <a className="hover:underline hover:text-slate-700 dark:hover:text-slate-300" target="_blank"
                       rel="nofollow" href="https://stackoverflow.com/users/13884867/adrien-chinour">
                        Stack Overflow
                    </a>
                </li>
            </ul>
        </footer>
    )
}
