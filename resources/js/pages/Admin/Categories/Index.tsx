import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface Category {
    id: number;
    name: string;
    slug: string;
    status: boolean;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    categories: {
        data: Category[];
        links: PaginationLink[];
    };
    filters: {
        search: string;
    };
}

export default function Index({ categories, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/categories',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteRecord = (id: number) => {
        if (confirm('Are you sure you want to delete this category?')) {
            router.delete(`/dashboard/categories/${id}`);
        }
    };

    return (
        <>
            <Head title="Category Management" />

            <div className="p-4">

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">
                        Category Management
                    </h1>

                    <Link
                        href="/dashboard/categories/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        + Add New
                    </Link>
                </div>

                {/* Search */}

                <form
                    onSubmit={handleSearch}
                    className="flex gap-2 mb-5"
                >
                    <input
                        type="text"
                        className="border rounded px-3 py-2 w-80"
                        placeholder="Search Name / Slug..."
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
                        href="/dashboard/categories"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Reset
                    </Link>
                </form>

                {/* Table */}

                <div className="overflow-x-auto bg-white rounded shadow">

                    <table className="w-full border-collapse">

                        <thead className="bg-gray-100">

                            <tr>
                                <th className="border px-4 py-3 text-center">
                                    #
                                </th>

                                <th className="border px-4 py-3 text-left">
                                    Category Name
                                </th>

                                <th className="border px-4 py-3 text-left">
                                    Slug
                                </th>

                                <th className="border px-4 py-3 text-center">
                                    Status
                                </th>

                                <th className="border px-4 py-3 text-center">
                                    Created At
                                </th>

                                <th className="border px-4 py-3 text-center">
                                    Action
                                </th>
                            </tr>

                        </thead>

                        <tbody>

                            {categories.data.length > 0 ? (

                                categories.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border px-4 py-3 text-center">
                                            {index + 1}
                                        </td>

                                        <td className="border px-4 py-3">
                                            {item.name}
                                        </td>

                                        <td className="border px-4 py-3">
                                            {item.slug}
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
                                                    href={`/dashboard/categories/${item.id}/edit`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => deleteRecord(item.id)}
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
                                        colSpan={6}
                                        className="text-center py-6"
                                    >
                                        No Categories Found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}

                <div className="flex gap-2 mt-6 flex-wrap">

                    {categories.links.map((link, index) => (

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