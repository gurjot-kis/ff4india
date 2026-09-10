import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Search, RotateCcw, Trash, SquarePen } from "lucide-react";

interface EmergencyBroadcast {
    id: number;
    description: string;
    status: boolean;
    created_at: string;
}

interface Props {
    emergencyBroadcasts: {
        data: EmergencyBroadcast[];
        current_page: number;
        per_page: number;
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

export default function Index({
    emergencyBroadcasts,
    filters,
}: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/emergency-broadcasts',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteBroadcast = (id: number) => {
        if (!confirm('Are you sure you want to delete this record?')) {
            return;
        }

        router.delete(`/dashboard/emergency-broadcasts/${id}`);
    };

    return (
        <>
            <Head title="Emergency Broadcast Management" />

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Emergency Broadcast Management
                    </h1>

                    <Link
                        href="/dashboard/emergency-broadcasts/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded primary_btn"
                    >
                        + Add Broadcast
                    </Link>

                </div>

                <div className="col-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <form
                                onSubmit={handleSearch}
                                className="flex gap-2 search-form"
                            >
                                <input
                                    type="text"
                                    className="border rounded px-3 py-2 w-80"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white rounded flex gap-2 common-btn"
                                >
                                    <Search size={16} />
                                    <span>Search</span>
                                </button>

                                <button
                                    type="button"
                                    className="bg-gray-600 text-white rounded flex gap-2 common-btn"
                                    onClick={() => {
                                        setSearch('');
                                        router.get('/dashboard/emergency-broadcasts');
                                    }}
                                >
                                    <RotateCcw size={16} />
                                    <span>Reset</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Table */}

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

                            {emergencyBroadcasts.data.length > 0 ? (
                                emergencyBroadcasts.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border">

                                            {(emergencyBroadcasts.current_page - 1) *
                                                emergencyBroadcasts.per_page +
                                                index +
                                                1}

                                        </td>

                                        <td className="border">

                                            {item.description}

                                        </td>

                                        <td className="border">

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

                                        <td className="border">

                                            {new Date(item.created_at).toLocaleDateString(
                                                'en-US',
                                                {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                }
                                            )}

                                        </td>

                                        <td className="border text-center">

                                            <div className="flex justify-center gap-2">

                                                <Link
                                                    href={`/dashboard/emergency-broadcasts/${item.id}/edit`}
                                                    className="edit-btn flex gap-2 align-items-center"
                                                >
                                                    <SquarePen /> <span>Edit</span>
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteBroadcast(item.id)
                                                    }
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
                                        colSpan={10}
                                        className="text-md-center py-6"
                                    >
                                        No records found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}




                <div className="flex gap-2 mt-6 flex-wrap common-pagination">

                    {emergencyBroadcasts.links.map((link, index) => (
                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.visit(link.url)}
                            className={`px-4 py-2 border rounded ${link.active
                                ? 'bg-blue-600 text-white'
                                : 'bg-white'
                                } ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        />
                    ))}

                </div>

            </div>
        </>
    );
}