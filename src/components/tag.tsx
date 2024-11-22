export default function Tag({label}: { label: string }) {
    return (
        <span
            className="uppercase font-bold rounded bg-slate-600 dark:bg-slate-300 text-slate-100 dark:text-slate-800 py-0.5 px-1 text-xs">
            {label}
        </span>
    )
}
