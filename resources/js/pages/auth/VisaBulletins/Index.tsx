import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface VisaBulletin {
    id: number;
    month: string;

    family_filing_f1: string;
    family_filing_f2a: string;
    family_filing_f2b: string;
    family_filing_f3: string;
    family_filing_f4: string;

    family_final_f1: string;
    family_final_f2a: string;
    family_final_f2b: string;
    family_final_f3: string;
    family_final_f4: string;

    created_at: string;
}

interface Props {
    visaBulletins: {
        data: VisaBulletin[];
        current_page: number;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
    filters: {
        search: string;
    };
}

export default function Index({ visaBulletins, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/visa-bulletins',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteVisaBulletin = (id: number) => {
        if (!confirm('Are you sure you want to delete this record?')) {
            return;
        }

        router.delete(`/dashboard/visa-bulletins/${id}`);
    };

    return (
        <>
            <Head title="Visa Bulletins" />

            <div className="app-inner-content">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold main_heading">
                        Visa Bulletin Management
                    </h1>

                    <Link
                        href="/dashboard/visa-bulletins/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        + Add Visa Bulletin
                    </Link>

                </div>

                <form
                    onSubmit={handleSearch}
                    className="flex gap-2 search-form"
                >
                    <input
                        type="text"
                        placeholder="Search Month..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded px-3 py-2 w-80"
                    />

                    <button
                        type="submit"
                        className="bg-gray-700 text-white px-4 rounded"
                    >
                        Search
                    </button>

                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 rounded"
                        onClick={() => {
                            setSearch('');
                            router.get('/dashboard/visa-bulletins');
                        }}
                    >
                        Reset
                    </button>

                </form>

                <div className="overflow-x-auto bg-white rounded shadow styled-table">

                    <table className="min-w-full border">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border px-3 py-2">#</th>
                                <th className="border px-3 py-2">Month</th>

                                <th className="border px-3 py-2">Filing F1</th>
                                <th className="border px-3 py-2">Filing F2A</th>
                                <th className="border px-3 py-2">Filing F2B</th>
                                <th className="border px-3 py-2">Filing F3</th>
                                <th className="border px-3 py-2">Filing F4</th>

                                <th className="border px-3 py-2">Final F1</th>
                                <th className="border px-3 py-2">Final F2A</th>
                                <th className="border px-3 py-2">Final F2B</th>
                                <th className="border px-3 py-2">Final F3</th>
                                <th className="border px-3 py-2">Final F4</th>

                                <th className="border px-3 py-2">Created At</th>
                                <th className="border px-3 py-2">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {visaBulletins.data.length > 0 ? (
                                visaBulletins.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border px-3 py-2">
                                            {(visaBulletins.current_page - 1) * 10 + index + 1}
                                        </td>

                                        <td className="border px-3 py-2">
                                            {item.month}
                                        </td>

                                        <td className="border px-3 py-2">{item.family_filing_f1}</td>
                                        <td className="border px-3 py-2">{item.family_filing_f2a}</td>
                                        <td className="border px-3 py-2">{item.family_filing_f2b}</td>
                                        <td className="border px-3 py-2">{item.family_filing_f3}</td>
                                        <td className="border px-3 py-2">{item.family_filing_f4}</td>

                                        <td className="border px-3 py-2">{item.family_final_f1}</td>
                                        <td className="border px-3 py-2">{item.family_final_f2a}</td>
                                        <td className="border px-3 py-2">{item.family_final_f2b}</td>
                                        <td className="border px-3 py-2">{item.family_final_f3}</td>
                                        <td className="border px-3 py-2">{item.family_final_f4}</td>

                                        <td className="border px-3 py-2">
                                            {new Date(item.created_at).toLocaleDateString(
                                                'en-US',
                                                {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                }
                                            )}
                                        </td>

                                        <td className="border px-3 py-2">

                                            <div className="flex gap-2">

                                                <Link
                                                    href={`/dashboard/visa-bulletins/${item.id}/edit`}
                                                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => deleteVisaBulletin(item.id)}
                                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))
                            ) : (
                                <tr>

                                    <td
                                        colSpan={14}
                                        className="text-center py-6"
                                    >
                                        No records found.
                                    </td>

                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

                <div className="flex justify-end mt-6 gap-2">

                    {visaBulletins.links.map((link, index) => (

                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.visit(link.url)}
                            className={`px-3 py-1 rounded border ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white'
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />

                    ))}

                </div>

            </div>
        </>
    );
}