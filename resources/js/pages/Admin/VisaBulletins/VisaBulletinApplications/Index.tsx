import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface VisaBulletinPage {
    id: number;
    session: string;

    visa_f1_all: string;
    visa_f1_china: string;
    visa_f1_india: string;
    visa_f1_mexico: string;
    visa_f1_philippines: string;

    visa_f2a_all: string;
    visa_f2a_china: string;
    visa_f2a_india: string;
    visa_f2a_mexico: string;
    visa_f2a_philippines: string;

    visa_f2b_all: string;
    visa_f2b_china: string;
    visa_f2b_india: string;
    visa_f2b_mexico: string;
    visa_f2b_philippines: string;

    visa_f3_all: string;
    visa_f3_china: string;
    visa_f3_india: string;
    visa_f3_mexico: string;
    visa_f3_philippines: string;

    visa_f4_all: string;
    visa_f4_china: string;
    visa_f4_india: string;
    visa_f4_mexico: string;
    visa_f4_philippines: string;

    status: boolean;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    preferences: {
        data: VisaBulletinPage[];
        links: PaginationLink[];
    };
    filters: {
        search: string;
    };
}

export default function Index({ preferences, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/visa-applications',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteRecord = (id: number) => {
        if (confirm('Are you sure you want to delete this record?')) {
            router.delete(`/dashboard/visa-applications/${id}`);
        }
    };

    const renderCategory = (
    item: VisaBulletinPage,
    prefix: string
    ) => (
        <td className="px-3 py-2 text-sm align-top whitespace-nowrap">

            {item[`${prefix}_all` as keyof VisaBulletinPage]}<br />

            {item[`${prefix}_china` as keyof VisaBulletinPage]}<br />
            {item[`${prefix}_india` as keyof VisaBulletinPage]}<br />

            {item[`${prefix}_mexico` as keyof VisaBulletinPage]}<br />

            {item[`${prefix}_philippines` as keyof VisaBulletinPage]}<br />

        </td>
    );

    return (
        <>
            <Head title="Visa Bulletin Application" />

    <div className="bg-white shadow rounded p-6">
        <div className="p-6">

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">
                        Visa Bulletin Application
                    </h1>

                    <Link
                        href="/dashboard/visa-applications/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        + Add New
                    </Link>
                </div>
            <div className="col-12">

                <div className="flex gap-2 mb-4">

                    <a
                        href="/dashboard/visa-applications/export/excel"
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Excel
                    </a>

                    <a
                        href="/dashboard/visa-applications/export/pdf"
                        className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        PDF
                    </a>

                    <a
                        href="/dashboard/visa-applications/export/csv"
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        CSV
                    </a>

                    <a
                        href="/dashboard/visa-applications/print"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Print
                    </a>

                </div>

                {/* Search */}
                <div className="flex gap-2 mb-4">
                <form
                    onSubmit={handleSearch}
                    className="flex gap-2 mb-5"
                >
                    <input
                        type="text"
                        className="border rounded px-3 py-2 w-80"
                        placeholder="Search Session..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 rounded"
                    >
                        Search
                    </button>

                    <Link
                        href="/dashboard/visa-applications"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Reset
                    </Link>
                </form>
                </div>
            </div>
        </div>
                {/* Table */}

                <div className="overflow-x-auto bg-white rounded shadow">

                    <table className="w-full border-collapse">

                        <thead className="bg-gray-100">

                            <tr>
                                <th className="border px-3 py-2">#</th>
                                <th className="border px-3 py-2">Session</th>
                                <th className="border px-3 py-2">F1</th>
                                <th className="border px-3 py-2">F2A</th>
                                <th className="border px-3 py-2">F2B</th>
                                <th className="border px-3 py-2">F3</th>
                                <th className="border px-3 py-2">F4</th>
                                <th className="border px-3 py-2">Status</th>
                                <th className="border px-3 py-2">Created</th>
                                <th className="border px-3 py-2">Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {preferences.data.length > 0 ? (
                                preferences.data.map((item, index) => (
                                    <tr key={item.id}>

                                        <td className="border px-4 py-3">
                                            {index + 1}
                                        </td>

                                        <td className="border px-4 py-3">
                                            {item.session}
                                        </td>

                                        <td className="border px-4 py-3">
                                        {renderCategory(item, 'visa_f1')}
                                        </td>

                                        <td className="border px-4 py-3">
                                        {renderCategory(item, 'visa_f2a')}
                                        </td>

                                        <td className="border px-4 py-3">
                                        {renderCategory(item, 'visa_f2b')}
                                        </td>

                                        <td className="border px-4 py-3">
                                        {renderCategory(item, 'visa_f3')}
                                        </td>

                                        <td className="border px-4 py-3">
                                        {renderCategory(item, 'visa_f4')}
                                        </td>

                                        <td className="border px-4 py-3 text-center">
                                            {item.status ? (
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded">
                                                    Inactive
                                                </span>
                                            )}
                                        </td>

                                        <td className="border px-4 py-3 text-center">
                                            {new Date(item.created_at).toLocaleDateString(
                                                'en-GB',
                                                {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                }
                                            )}
                                        </td>

                                        <td className="border px-4 py-3 text-center">

                                            <div className="flex justify-center gap-2">

                                                <Link
                                                    href={`/dashboard/visa-applications/${item.id}/edit`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteRecord(item.id)
                                                    }
                                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
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
                                        colSpan={5}
                                        className="text-center py-6"
                                    >
                                        No Records Found.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}

                <div className="flex gap-2 mt-6 flex-wrap">

                    {preferences.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url || '#'}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            className={`px-4 py-2 border rounded ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white'
                            } ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
                        />
                    ))}

                </div>

            </div>
        </>
    );
}