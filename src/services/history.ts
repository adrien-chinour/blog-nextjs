export type HistoryItem = {
    type: 'article',
    title: string,
    href: string,
}

export function getHistory(): HistoryItem[] {
    if (typeof window === 'undefined') {
        throw new Error('getHistory can only be used on client component')
    }

    return JSON.parse(window.localStorage.getItem('history') ?? '[]') as HistoryItem[];
}

export function pushToHistory(historyItem: HistoryItem) {
    if (typeof window === 'undefined') {
        throw new Error('getHistory can only be used on client component')
    }

    let history = getHistory().filter((t) => t.href !== historyItem.href);

    history.push(historyItem);
    history = history
        .reverse()
        .slice(0, 10);

    window.localStorage.setItem('history', JSON.stringify(history));
}
