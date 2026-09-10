import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { FileSpreadsheet, FileText, Table, Printer, Search, RotateCcw, Trash, SquarePen } from "lucide-react";

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

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Recent Approvals
                    </h1>

                    <Link
                        href="/dashboard/recent-approvals/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded primary_btn"
                    >
                        + Add New
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
                                    placeholder="Search Name / Visa Category..."
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

                                <Link
                                    href="/dashboard/recent-approvals"
                                    className="bg-gray-600 text-white rounded flex gap-2 common-btn"
                                >
                                    <RotateCcw size={16} />
                                    <span>Reset</span>
                                </Link>

                            </form>
                        </div>

                        <div className="lg:col-span-6 flex flex-wrap gap-2 justify-content-lg-end order-2 lg:order-1 all-download-btns">

                            <a
                                href="/dashboard/recent-approvals/export/excel"
                                className="bg-green-600 text-white rounded flex gap-2 common-pdf-btn d-excel-btn"
                            >
                                <FileSpreadsheet size={16} />
                                Excel
                            </a>

                            <a
                                href="/dashboard/recent-approvals/export/pdf"
                                className="bg-red-600 text-white rounded flex gap-2 common-pdf-btn d-pdf-btn"
                            >
                                <FileText size={16} />
                                PDF
                            </a>

                            <a
                                href="/dashboard/recent-approvals/export/csv"
                                className="bg-blue-600 text-white rounded flex gap-2 common-pdf-btn d-csv-btn"
                            >
                                <Table size={16} />
                                CSV
                            </a>

                            <a
                                href="/dashboard/recent-approvals/print"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-white rounded flex gap-2 common-pdf-btn d-print-btn"
                            >
                                <Printer size={16} />
                                Print
                            </a>

                        </div>

                        {/* Search */}

                    </div>
                </div>

                {/* Table */}

                <div className="overflow-x-auto bg-white rounded styled-table">

                    <table className="w-full border-collapse">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border">#</th>

                                <th className="border">
                                    Image
                                </th>

                                <th className="border">
                                    Name
                                </th>

                                <th className="border">
                                    Approval Date
                                </th>

                                <th className="border">
                                    Visa Category
                                </th>

                                <th className="border">
                                    Status
                                </th> 
                                
                                <th className="border text-center">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {recentApprovals.data.length > 0 ? (

                                recentApprovals.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border text-center">
                                            {index + 1}
                                        </td>

                                        <td className="border text-center">

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

                                        <td className="border">
                                            {item.name}
                                        </td>

                                        <td className="border">
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

                                        <td className="border">
                                            {item.visa_category}
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

                                        

                                        <td className="border text-center">

                                            <div className="flex justify-center gap-2">

                                                <Link
                                                    href={`/dashboard/recent-approvals/${item.id}/edit`}
                                                    className="edit-btn flex gap-2 align-items-center"
                                                >
                                                    <SquarePen /> <span>Edit</span>
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteRecord(
                                                            item.id
                                                        )
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
                                        colSpan={8}
                                        className="text-md-center py-6"
                                    >
                                        No Records Found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}

                <div className="flex gap-2 mt-6 flex-wrap common-pagination">

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