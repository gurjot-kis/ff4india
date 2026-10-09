import { Head } from '@inertiajs/react';
import HeaderSearch from '@/components/Frontend/Home/HeaderSearch';

interface Result {
    type: 'About' | 'Service' | 'Blog';
    title: string;
    description: string;
    url: string;
}

interface Props {
    q: string;
    results: Result[]; 
}

export default function Search({ q, results }: Props) {
    return (
        <>
            <Head title={q ? `Search: ${q}` : 'Search'} />

            <main className="mx-auto max-w-3xl px-4 py-10">
                <h1 className="mb-6 text-2xl font-semibold">Search</h1>

                <HeaderSearch initial={q} />

                {q.length > 0 && q.length < 2 && (
                    <p className="mt-6 text-gray-600">Type at least 2 characters.</p>
                )}

                {q.length >= 2 && (
                    <p className="mt-6 text-gray-600">
                        {results.length} result{results.length === 1 ? '' : 's'} for “{q}”
                    </p>
                )}

                <ul className="mt-4 divide-y divide-gray-200">
                    {results.map((r, i) => (
                        <li key={`${r.type}-${i}`} className="py-4">
                            {/* plain <a> so the #hash and full page load work as requested */}
                            <a href={r.url} className="group block">
                                <span className="text-xs text-gray-500">{r.type}</span>
                                <span className="block text-lg font-medium text-blue-700 group-hover:underline">
                                    {r.title}
                                </span>
                                {r.description && (
                                    <span className="block text-gray-700">{r.description}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {q.length >= 2 && results.length === 0 && (
                    <p className="mt-6 text-gray-600">
                        Nothing found. Try a different word.
                    </p>
                )}
            </main>
        </>
    );
}
