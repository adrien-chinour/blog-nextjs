export default function Footer() {
    return (
        <footer
            className="flex justify-between py-6 mt-2 uppercase text-zinc-600 dark:text-zinc-400 text-xs font-bold px-4">
            <p>© Adrien Chinour</p>
            <ul className="flex gap-4">
                <li>
                    <a className="hover:underline hover:text-zinc-700 hover:dark:text-zinc-300" target="_blank"
                       rel="nofollow" href="https://github.com/adrien-chinour/">
                        Github
                    </a>
                </li>
                <li>
                    <a className="hover:underline hover:text-zinc-700 hover:dark:text-zinc-300" target="_blank"
                       rel="nofollow" href="https://stackoverflow.com/users/13884867/adrien-chinour">
                        Stack Overflow
                    </a>
                </li>
            </ul>
        </footer>
    )
}
