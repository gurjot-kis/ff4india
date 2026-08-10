import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface FormData {
    name: string;
    image: File | null;
    approval_date: string;
    visa_category: string;
    status: boolean;
}

export default function Create() {
    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            name: '',
            image: null,
            approval_date: '',
            visa_category: '',
            status: true,
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/recent-approvals', {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Add Recent Approval" />

            <div className="p-6">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold">
                        Add Recent Approval
                    </h1>

                    <Link
                        href="/dashboard/recent-approvals"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <div className="bg-white rounded shadow p-6">

                    <form onSubmit={submit}>

                        {/* Name */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Name
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                                placeholder="Enter Name"
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* Image */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setData(
                                        'image',
                                        e.target.files
                                            ? e.target.files[0]
                                            : null
                                    )
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.image}
                                </p>
                            )}

                        </div>

                        {/* Approval Date */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Approval Date
                            </label>

                            <input
                                type="date"
                                value={data.approval_date}
                                onChange={(e) =>
                                    setData(
                                        'approval_date',
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                            {errors.approval_date && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.approval_date}
                                </p>
                            )}

                        </div>

                        {/* Visa Category */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Visa Category
                            </label>

                            <input
                                type="text"
                                value={data.visa_category}
                                onChange={(e) =>
                                    setData(
                                        'visa_category',
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded px-3 py-2"
                                placeholder="Example: F1"
                            />

                            {errors.visa_category && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.visa_category}
                                </p>
                            )}

                        </div>

                        {/* Status */}

                        <div className="mb-6">

                            <label className="block mb-2 font-medium">
                                Status
                            </label>

                            <select
                                value={data.status ? '1' : '0'}
                                onChange={(e) =>
                                    setData(
                                        'status',
                                        e.target.value === '1'
                                    )
                                }
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="1">
                                    Active
                                </option>

                                <option value="0">
                                    Inactive
                                </option>

                            </select>

                            {errors.status && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.status}
                                </p>
                            )}

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded disabled:opacity-50"
                            >
                                {processing
                                    ? 'Saving...'
                                    : 'Save'}
                            </button>

                            <button
                                type="button"
                                onClick={() => reset()}
                                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded"
                            >
                                Reset
                            </button>

                            <Link
                                href="/dashboard/recent-approvals"
                                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
                            >
                                Cancel
                            </Link>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}