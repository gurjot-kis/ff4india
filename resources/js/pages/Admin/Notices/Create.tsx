import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface NoticeForm {
    description: string;
    status: boolean;
}

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm<NoticeForm>({
        description: '',
        status: true,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/notices', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Add Notice" />

            <div className="p-4">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold">
                        Add Notice
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
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.description}
                                </div>
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
                                    setData('status', e.target.value === '1')
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
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.status}
                                </div>
                            )}

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing
                                    ? 'Saving...'
                                    : 'Save Notice'}
                            </button>

                            <button
                                type="button"
                                onClick={() => reset()}
                                className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600"
                            >
                                Reset
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}