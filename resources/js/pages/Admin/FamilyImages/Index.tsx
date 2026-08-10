import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface FamilyImage {
    id: number;
    image: string | null;
    name: string;
    priority_date: string | null;
    description: string;
    status: boolean;
    set_homepage: boolean;
    review: string;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    familyImages: {
        data: FamilyImage[];
        links: PaginationLink[];
    };
    filters: {
        search: string;
    };
}

export default function Index({ familyImages, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/family-images',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteRecord = (id: number) => {
        if (
            confirm(
                'Are you sure you want to delete this family image?'
            )
        ) {
            router.delete(`/dashboard/family-images/${id}`);
        }
    };

    return (
        <>
            <Head title="Family Image Management" />

            <div className="p-6">

                {/* Header */}

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-2xl font-bold">
                        Family Image Management
                    </h1>

                    <Link
                        href="/dashboard/family-images/create"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        + Add Family Image
                    </Link>

                </div>

                {/* Search */}

                <form
                    onSubmit={handleSearch}
                    className="flex gap-2 mb-5"
                >

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search Name..."
                        className="border rounded px-3 py-2 w-80"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Search
                    </button>

                    <Link
                        href="/dashboard/family-images"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
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
                                    Image
                                </th>

                                <th className="border px-4 py-3 text-left">
                                    Name
                                </th>

                                <th className="border px-4 py-3 text-center">
                                    Priority Date
                                </th>

                                <th className="border px-4 py-3 text-left">
                                    Description
                                </th>

                                <th className="border px-4 py-3 text-left">
                                    Review
                                </th>

                                <th className="border px-4 py-3 text-center">
                                    Status
                                </th>

                                <th className="border px-4 py-3 text-center">
                                    Homepage
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

                            {familyImages.data.length > 0 ? (

                                familyImages.data.map(
                                    (item, index) => (

                                        <tr key={item.id}>

                                            {/* # */}

                                            <td className="border px-4 py-3 text-center">
                                                {index + 1}
                                            </td>

                                            {/* Image */}

                                            <td className="border px-4 py-3">

                                                {item.image ? (

                                                    <img
                                                        src={`/storage/${item.image}`}
                                                        alt={item.name}
                                                        className="w-24 h-20 object-cover rounded border"
                                                    />

                                                ) : (

                                                    <span className="text-gray-500">
                                                        No Image
                                                    </span>

                                                )}

                                            </td>

                                            {/* Name */}

                                            <td className="border px-4 py-3">
                                                {item.name}
                                            </td>

                                            {/* Priority Date */}

                                            <td className="border px-4 py-3 text-center">

                                                {item.priority_date
                                                    ? new Date(
                                                          item.priority_date
                                                      ).toLocaleDateString(
                                                          'en-GB',
                                                          {
                                                              day: 'numeric',
                                                              month: 'long',
                                                              year: 'numeric',
                                                          }
                                                      )
                                                    : '-'}

                                            </td>

                                            {/* Description */}

                                            <td className="border px-4 py-3">

                                                <div
                                                    className="max-w-xs line-clamp-3"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            item.description ||
                                                            '-',
                                                    }}
                                                />

                                            </td>

                                            {/* Review */}

                                            <td className="border px-4 py-3">

                                                <div
                                                    className="max-w-xs line-clamp-3"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            item.review ||
                                                            '-',
                                                    }}
                                                />

                                            </td>

                                            {/* Status */}

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

                                            {/* Homepage */}

                                            <td className="border px-4 py-3 text-center">

                                                {item.set_homepage ? (

                                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                                                        Yes
                                                    </span>

                                                ) : (

                                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded">
                                                        No
                                                    </span>

                                                )}

                                            </td>

                                            {/* Created At */}

                                            <td className="border px-4 py-3 text-center">

                                                {new Date(
                                                    item.created_at
                                                ).toLocaleDateString(
                                                    'en-GB',
                                                    {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                    }
                                                )}

                                            </td>

                                            {/* Actions */}

                                            <td className="border px-4 py-3 text-center">

                                                <div className="flex justify-center gap-2">

                                                    <Link
                                                        href={`/dashboard/family-images/${item.id}/edit`}
                                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        type="button"
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

                                    )
                                )

                            ) : (

                                <tr>

                                    <td
                                        colSpan={10}
                                        className="text-center py-6"
                                    >
                                        No Family Images Found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}

                <div className="flex gap-2 mt-6 flex-wrap">

                    {familyImages.links.map(
                        (link, index) => (

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

                        )
                    )}

                </div>

            </div>
        </>
    );
}