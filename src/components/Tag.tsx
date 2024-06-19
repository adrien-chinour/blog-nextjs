export default function Tag({label}: { label: string }) {
    return (
        <span
            className="uppercase font-bold rounded bg-zinc-600 dark:bg-zinc-300 text-zinc-100 dark:text-zinc-800 py-0.5 px-1 text-xs">
            {label}
        </span>
    )
}
