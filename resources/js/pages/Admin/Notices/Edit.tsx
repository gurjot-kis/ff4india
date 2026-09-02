import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface Notice {
    id: number;
    description: string;
    status: boolean;
}

interface Props {
    notice: Notice;
}

export default function Edit({ notice }: Props) {
    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        description: notice.description,
        status: notice.status,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        put(`/dashboard/notices/${notice.id}`, {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Edit Notice" />

            <div className="p-4">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold">
                        Edit Notice
                    </h1>

                    <Link
                        href="/dashboard/notices"
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                        Back
                    </Link>

                </div>

                <div className="bg-white rounded-lg shadow p-6">

                    <form onSubmit={submit}>

                        {/* Description */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Description
                            </label>

                         

                            <textarea
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Notice"
                                rows={5}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            ></textarea>

                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.description}
                                </p>
                            )}

                        </div>

                        {/* Status */}

                        <div className="mb-6">

                            <label className="block mb-2 font-medium">
                                Status
                            </label>

                            <select
                                className="w-full border rounded px-3 py-2"
                                value={data.status ? '1' : '0'}
                                onChange={(e) =>
                                    setData(
                                        'status',
                                        e.target.value === '1'
                                    )
                                }
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
                                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing
                                    ? 'Updating...'
                                    : 'Update Notice'}
                            </button>

                            <Link
                                href="/dashboard/notices"
                                className="px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
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