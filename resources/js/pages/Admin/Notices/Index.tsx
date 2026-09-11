import React, { FormEvent, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Search, RotateCcw, Trash, SquarePen } from "lucide-react";

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
            {/* <Head title="Notice Management" /> */}

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">
                    <h1 className="text-2xl font-bold main_heading">
                        Notice Management
                    </h1>

                    <Link
                        href="/dashboard/notices/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded primary_btn"
                    >
                       + Add Notice
                    </Link>
                </div>

                <div className="col-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <form
                                onSubmit={submitSearch}
                                className="flex gap-2 search-form"
                            >
                                <input
                                    type="text"
                                    value={search}
                                    placeholder="Search notice..."
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="border rounded px-3 py-2 w-80"
                                />

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white rounded flex gap-2 common-btn"
                                >
                                    <Search size={16} />
                                    <span>Search</span>
                                </button>

                                <Link
                                    href="/dashboard/notices"
                                    className="bg-gray-600 text-white rounded flex gap-2 common-btn"
                                >
                                    <RotateCcw size={16} />
                                    <span>Reset</span>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto bg-white rounded styled-table">

                    <table className="w-full border-collapse">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border">
                                    #
                                </th>

                                <th className="border">
                                    Description
                                </th>

                                <th className="border">
                                    Status
                                </th>

                                <th className="border">
                                    Created At
                                </th>

                                <th className="border text-center">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {notices.data.length > 0 ? (

                                notices.data.map((notice, index) => (

                                    <tr key={notice.id}>

                                        <td className="border">
                                            {(notices.current_page - 1) * 10 + index + 1}
                                        </td>

                                        <td className="border">
                                            {notice.description}
                                        </td>

                                        <td className="border">

                                            {notice.status ? (

                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
                                                    Active
                                                </span>

                                            ) : (

                                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded">
                                                    Inactive
                                                </span>

                                            )}

                                        </td>

                                        <td className="border">
                                            {formatDate(notice.created_at)}
                                        </td>

                                        <td className="border text-center">

                                            <div className="flex justify-center gap-2">

                                                <Link
                                                    href={`/dashboard/notices/${notice.id}/edit`}
                                                    className="edit-btn flex gap-2 align-items-center"
                                                >
                                                    <SquarePen /> <span>Edit</span>
                                                </Link>

                                                <button
                                                    onClick={() => deleteNotice(notice.id)}
                                                    className="delete-btn flex gap-2 align-items-center"
                                                >
                                                    <Trash /> <span>Delete</span>
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan={5}
                                        className="text-md-center py-6"
                                    >
                                        No notices found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                <div className="flex gap-2 mt-6 flex-wrap common-pagination">

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
                            } ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
                        />

                    ))}

                </div>

            </div>
        </>
    );
}