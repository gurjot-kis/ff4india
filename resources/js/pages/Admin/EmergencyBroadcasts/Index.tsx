import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

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

            <div className="p-4">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold">
                        Emergency Broadcast Management
                    </h1>

                    <Link
                        href="/dashboard/emergency-broadcasts/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        + Add Broadcast
                    </Link>

                </div>

                <form
                    onSubmit={handleSearch}
                    className="flex gap-2 mb-5"
                >

                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-3 py-2 w-80"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
                            router.get('/dashboard/emergency-broadcasts');
                        }}
                    >
                        Reset
                    </button>

                </form>

                <div className="overflow-x-auto bg-white rounded shadow">

                    <table className="min-w-full border">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border px-4 py-2 w-16">
                                    #
                                </th>

                                <th className="border px-4 py-2">
                                    Description
                                </th>

                                <th className="border px-4 py-2 w-32">
                                    Status
                                </th>

                                <th className="border px-4 py-2 w-44">
                                    Created At
                                </th>

                                <th className="border px-4 py-2 w-40">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {emergencyBroadcasts.data.length > 0 ? (
                                emergencyBroadcasts.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border px-4 py-2 text-center">

                                            {(emergencyBroadcasts.current_page - 1) *
                                                emergencyBroadcasts.per_page +
                                                index +
                                                1}

                                        </td>

                                        <td className="border px-4 py-2">

                                            {item.description}

                                        </td>

                                        <td className="border px-4 py-2 text-center">

                                            {item.status ? (
                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                                                    Active
                                                </span>
                                            ) : (
                                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
                                                    Inactive
                                                </span>
                                            )}

                                        </td>

                                        <td className="border px-4 py-2">

                                            {new Date(item.created_at).toLocaleDateString(
                                                'en-US',
                                                {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                }
                                            )}

                                        </td>

                                        <td className="border px-4 py-2">

                                            <div className="flex gap-2">

                                                <Link
                                                    href={`/dashboard/emergency-broadcasts/${item.id}/edit`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteBroadcast(item.id)
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
                                        No records found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                <div className="flex justify-end mt-6 gap-2">

                    {emergencyBroadcasts.links.map((link, index) => (

                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.visit(link.url)}
                            className={`px-3 py-1 border rounded ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white'
                            }`}
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