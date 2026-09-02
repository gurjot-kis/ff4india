import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface EmergencyBroadcastForm {
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
    } = useForm<EmergencyBroadcastForm>({
        description: '',
        status: true,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/emergency-broadcasts', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Create Emergency Broadcast" />

            <div className="p-4">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold">
                        Create Emergency Broadcast
                    </h1>

                    <Link
                        href="/dashboard/emergency-broadcasts"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <div className="bg-white rounded-lg shadow p-6">

                    <form onSubmit={submit}>

                        {/* Description */}

                        <div className="mb-6">

                            <label className="block font-medium mb-2">
                                Description
                            </label>

                            <textarea
                                rows={6}
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Emergency Broadcast..."
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                            />

                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.description}
                                </p>
                            )}

                        </div>

                        {/* Status */}

                        <div className="mb-6">

                            <label className="block font-medium mb-2">
                                Status
                            </label>

                            <select
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                href="/dashboard/emergency-broadcasts"
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