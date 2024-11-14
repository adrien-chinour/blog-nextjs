import {create} from "zustand";
import {persist} from "zustand/middleware";

type HistoryItem = {
    type: 'article',
    title: string,
    href: string,
}

interface HistoryStore {
    history: HistoryItem[];
    addItem: (item: HistoryItem) => void;
    clearHistory: () => void;
}

const useHistoryStore = create<HistoryStore>()(
    persist(
        (set) => ({
            history: [],

            addItem: (item: HistoryItem) =>
                set((state) => {
                    // Check if the article already exists to prevent duplicates
                    const exists = state.history.some((i) => i.href === item.href);
                    if (exists) return state;

                    return {
                        history: [...state.history, item],
                    };
                }),

            clearHistory: () => set({ history: [] }),
        }),
        {
            name: "article-history",
        }
    )
);


export default useHistoryStore;
