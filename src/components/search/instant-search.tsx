"use client"

import {Input} from "@/components/ui/input";
import {FormEvent, useState} from "react";
import {Article} from "@/types/types";
import {searchArticles} from "@/actions/search";
import ArticleCard from "@/components/article/article-card";
import {useDebouncedCallback} from "use-debounce";

export default function InstantSearch() {
    const [results, setResults] = useState<Article[] | undefined>(undefined)

    const handleSearch = useDebouncedCallback(async (e: FormEvent) => {
        e.preventDefault();

        if (!(e.target instanceof HTMLInputElement) || e.target.value.length === 0) {
            setResults(undefined);
            return;
        }

        const articles = await searchArticles(e.target.value);
        setResults(articles)
    }, 400);

    return (
        <div>
            <Input type="search" onInput={handleSearch} placeholder="Rechercher..." autoFocus={true}/>
            {
                results !== undefined &&
                <>
                    <p className="text-muted text-xs mt-2">{results.length} résultat(s) trouvé(s).</p>
                    <div className="mt-4">
                        {
                            results.length !== 0 &&
                            results.map((article) =>
                                <ArticleCard key={article.id} article={article} variant="inline"/>
                            )
                        }
                    </div>
                </>
            }
        </div>
    )
}
