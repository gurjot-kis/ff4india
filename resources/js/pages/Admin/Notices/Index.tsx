import React, { FormEvent, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface Notice {
    id: number;
    description: string;
    status: boolean;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Notices {
    data: Notice[];
    current_page: number;
    last_page: number;
    links: PaginationLink[];
}

interface Props {
    notices: Notices;
    filters: {
        search: string;
    };
}

export default function Index({ notices, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const submitSearch = (e: FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/notices',
            {
                search,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteNotice = (id: number) => {
        if (!confirm('Are you sure you want to delete this notice?')) {
            return;
        }

        router.delete(`/dashboard/notices/${id}`);
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <>
            <Head title="Notice Management" />

            <div className="p-6">

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">
                        Notice Management
                    </h1>

                    <Link
                        href="/dashboard/notices/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Add Notice
                    </Link>
                </div>

                <form
                    onSubmit={submitSearch}
                    className="mb-6 flex gap-2"
                >
                    <input
                        type="text"
                        value={search}
                        placeholder="Search notice..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded px-4 py-2 w-80"
                    />

                    <button
                        type="submit"
                        className="bg-gray-800 text-white px-5 rounded"
                    >
                        Search
                    </button>
                    
                    <button>
                     <Link href={`/dashboard/notices`} className="bg-gray-800 text-white px-5 rounded">
                        Reset
                    </Link>
                    </button>

                </form>

                <div className="overflow-x-auto bg-white rounded shadow">

                    <table className="min-w-full border">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border p-3 text-left">
                                    #
                                </th>

                                <th className="border p-3 text-left">
                                    Description
                                </th>

                                <th className="border p-3 text-center">
                                    Status
                                </th>

                                <th className="border p-3 text-center">
                                    Created At
                                </th>

                                <th className="border p-3 text-center">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {notices.data.length > 0 ? (

                                notices.data.map((notice, index) => (

                                    <tr key={notice.id}>

                                        <td className="border p-3">
                                            {(notices.current_page - 1) * 10 + index + 1}
                                        </td>

                                        <td className="border p-3">
                                            {notice.description}
                                        </td>

                                        <td className="border p-3 text-center">

                                            {notice.status ? (

                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                                                    Active
                                                </span>

                                            ) : (

                                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
                                                    Inactive
                                                </span>

                                            )}

                                        </td>

                                        <td className="border p-3 text-center">
                                            {formatDate(notice.created_at)}
                                        </td>

                                        <td className="border p-3">

                                            <div className="flex justify-center gap-2">

                                                <Link
                                                    href={`/dashboard/notices/${notice.id}/edit`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => deleteNotice(notice.id)}
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
                                        className="border p-6 text-center"
                                    >
                                        No notices found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                <div className="flex gap-2 mt-6">

                    {notices.links.map((link, index) => (

                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => {
                                if (link.url) {
                                    router.visit(link.url);
                                }
                            }}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            className={`px-4 py-2 border rounded ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white'
                            }`}
                        />

                    ))}

                </div>

            </div>
        </>
    );
}