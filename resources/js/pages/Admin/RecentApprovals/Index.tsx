import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface RecentApproval {
    id: number;
    name: string;
    image: string | null;
    approval_date: string;
    visa_category: string;
    status: boolean;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    recentApprovals: {
        data: RecentApproval[];
        links: PaginationLink[];
    };
    filters: {
        search: string;
    };
}

export default function Index({
    recentApprovals,
    filters,
}: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/recent-approvals',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteRecord = (id: number) => {
        if (confirm('Are you sure you want to delete this record?')) {
            router.delete(`/dashboard/recent-approvals/${id}`);
        }
    };

    
    

    return (
        <>
            <Head title="Recent Approvals" /> 

            <div className="p-4">

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-2xl font-bold">
                        Recent Approvals
                    </h1>

                    <Link
                        href="/dashboard/recent-approvals/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        + Add New
                    </Link>

                </div>


            <div className="col-12">

                <div className="flex gap-2 mb-4">

                    <a
                        href="/dashboard/recent-approvals/export/excel"
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Excel
                    </a>

                    <a
                        href="/dashboard/recent-approvals/export/pdf"
                        className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        PDF
                    </a>

                    <a
                        href="/dashboard/recent-approvals/export/csv"
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        CSV
                    </a>

                    <a
                        href="/dashboard/recent-approvals/print"
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
                            placeholder="Search Name / Visa Category..."
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
                            href="/dashboard/recent-approvals"
                            className="bg-gray-700 text-white px-4 py-2 rounded"
                        >
                            Reset
                        </Link>

                    </form>
                </div>

            </div>

                {/* Table */}

                <div className="overflow-x-auto bg-white rounded shadow">

                    <table className="min-w-full border-collapse">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border px-4 py-3">#</th>

                                <th className="border px-4 py-3">
                                    Image
                                </th>

                                <th className="border px-4 py-3">
                                    Name
                                </th>

                                <th className="border px-4 py-3">
                                    Approval Date
                                </th>

                                <th className="border px-4 py-3">
                                    Visa Category
                                </th>

                                <th className="border px-4 py-3">
                                    Status
                                </th> 
                                
                                <th className="border px-4 py-3">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {recentApprovals.data.length > 0 ? (

                                recentApprovals.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border px-4 py-3 text-center">
                                            {index + 1}
                                        </td>

                                        <td className="border px-4 py-3 text-center">

                                            {item.image ? (

                                                <img
                                                    src={`/storage/${item.image}`}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded mx-auto"
                                                />

                                            ) : (

                                                <span className="text-gray-400">
                                                    No Image
                                                </span>

                                            )}

                                        </td>

                                        <td className="border px-4 py-3">
                                            {item.name}
                                        </td>

                                        <td className="border px-4 py-3 text-center">
                                            {new Date(
                                                item.approval_date
                                            ).toLocaleDateString(
                                                'en-GB',
                                                {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                }
                                            )}
                                        </td>

                                        <td className="border px-4 py-3">
                                            {item.visa_category}
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

                                        

                                        <td className="border px-4 py-3">

                                            <div className="flex justify-center gap-2">

                                                <Link
                                                    href={`/dashboard/recent-approvals/${item.id}/edit`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteRecord(
                                                            item.id
                                                        )
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
                                        colSpan={8}
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

                    {recentApprovals.links.map((link, index) => (

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
                            } ${
                                !link.url
                                    ? 'pointer-events-none opacity-50'
                                    : ''
                            }`}
                        />

                    ))}

                </div>

            </div>

        </>
    );
}