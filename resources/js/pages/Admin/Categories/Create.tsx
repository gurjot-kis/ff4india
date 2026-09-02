import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface FormData {
    name: string;
    status: boolean;
}

export default function Create() {
    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            name: '',
            status: true,
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/categories');
    };

    return (
        <>
            <Head title="Create Category" />

            <div className="p-4">

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-2xl font-bold">
                        Create Category
                    </h1>

                    <Link
                        href="/dashboard/categories"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <div className="bg-white shadow rounded-lg p-6">

                    <form onSubmit={submit}>

                        {/* Category Name */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Category Name
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Category Name"
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
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
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
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
                                {processing ? 'Saving...' : 'Save'}
                            </button>

                            <button
                                type="button"
                                onClick={() => reset()}
                                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded"
                            >
                                Reset
                            </button>

                            <Link
                                href="/dashboard/categories"
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