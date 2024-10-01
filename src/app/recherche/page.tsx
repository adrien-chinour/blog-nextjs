import InstantSearch from "@/components/search/instant-search";

export const dynamic = 'force-dynamic';

export default async function Page() {
    return (
        <main className="px-4 container-fit">
            <InstantSearch />
        </main>
    )
}
