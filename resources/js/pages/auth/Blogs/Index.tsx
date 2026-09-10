import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Search, RotateCcw, Trash, SquarePen } from "lucide-react";

interface Blog {
    id: number;
    title: string;
    slug: string;
    featured_image: string | null;
    status: boolean;
    created_at: string;
    category: {
        id: number;
        name: string;
    };
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    blogs: {
        data: Blog[];
        links: PaginationLink[];
    };
    filters: {
        search: string;
    };
}

export default function Index({ blogs, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/blogs',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteRecord = (id: number) => {
        if (confirm('Are you sure you want to delete this blog?')) {
            router.delete(`/dashboard/blogs/${id}`);
        }
    };

    return (
        <>
            <Head title="Blog Management" />

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Blog Management
                    </h1>

                    <Link
                        href="/dashboard/blogs/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded primary_btn"
                    >
                        + Add Blog
                    </Link>

                </div>

                {/* Search */}

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
                                    placeholder="Search Title / Slug..."
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
                                    href="/dashboard/blogs"
                                    className="bg-gray-600 text-white rounded flex gap-2 common-btn"
                                >
                                    <RotateCcw size={16} />
                                    <span>Reset</span>
                                </Link>

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
                                    Image
                                </th>

                                <th className="border">
                                    Title
                                </th>

                                <th className="border">
                                    Category
                                </th>

                                <th className="border">
                                    Slug
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

                            {blogs.data.length > 0 ? (

                                blogs.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border text-center">
                                            {index + 1}
                                        </td>

                                        <td className="border">

                                            {item.featured_image ? (

                                                <img
                                                    src={`/storage/${item.featured_image}`}
                                                    alt={item.title}
                                                    className="w-20 h-20 object-cover rounded"
                                                />

                                            ) : (

                                                <span className="text-gray-500">
                                                    No Image
                                                </span>

                                            )}

                                        </td>

                                        <td className="border">
                                            {item.title}
                                        </td>

                                        <td className="border">
                                            {item.category?.name}
                                        </td>

                                        <td className="border">
                                            {item.slug}
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
                                                'en-GB',
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
                                                    href={`/dashboard/blogs/${item.id}/edit`}
                                                    className="edit-btn flex gap-2 align-items-center"
                                                >
                                                    <SquarePen /> <span>Edit</span>
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteRecord(item.id)
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
                                        No Blogs Found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}

                <div className="flex gap-2 mt-6 flex-wrap common-pagination">

                    {blogs.links.map((link, index) => (

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