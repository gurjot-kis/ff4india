import { FormEvent, useState } from 'react';
import { router, usePage } from '@inertiajs/react';

interface Props {
    /** wrapper class: "header-search-box" (desktop) or "mobile-search-input-group" (mobile) */
    className: string;
    /** class for the submit button, e.g. "search-btn" on desktop (mobile keeps its original, unclassed button) */
    buttonClassName?: string;
    /** called after a search is submitted, e.g. to close the mobile dropdown */
    onSearch?: () => void;
}

export default function HeaderSearch({ className, buttonClassName, onSearch }: Props) {
    const { url } = usePage();

    // keep the box filled with the current query while on /search?q=...
    const initial = url.startsWith('/search')
        ? new URLSearchParams(url.split('?')[1] ?? '').get('q') ?? ''
        : '';

    const [q, setQ] = useState(initial);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const term = q.trim();
        if (term.length < 2) return;

        router.get('/search', { q: term });
        onSearch?.();
    };

    return (
        <form onSubmit={submit} role="search" className={className}>
            <input
                type="search"
                name="q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
            />
            <button type="submit" className={buttonClassName} aria-label="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
}
