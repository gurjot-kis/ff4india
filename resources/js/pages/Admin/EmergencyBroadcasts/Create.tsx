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
            {/* <Head title="Create Emergency Broadcast" /> */}

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Create Emergency Broadcast
                    </h1>

                    <Link
                        href="/dashboard/emergency-broadcasts"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <form
                    onSubmit={submit}
                    className="rounded create-visa-bulletin"
                >

                    {/* Description */}

                    <div className="mb-8">

                        <label className="block font-semibold mb-2">
                            Description
                        </label>

                        <textarea
                            rows={6}
                            className="w-full border rounded px-3 py-2"
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

                    <div className="mb-8">

                        <label className="block font-semibold mb-2">
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
                            <p className="text-red-500 text-sm mt-1">
                                {errors.status}
                            </p>
                        )}

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-3 mt-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="primary_btn text-white px-8 sm:px-10 py-2 rounded disabled:opacity-50"
                        >
                            {processing
                                ? 'Saving...'
                                : 'Save'}
                        </button>

                        <button
                            type="button"
                            onClick={() => reset()}
                            className="reset_button bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded"
                        >
                            Reset
                        </button>

                        <Link
                            href="/dashboard/emergency-broadcasts"
                            className="cancel_button bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded"
                        >
                            Cancel
                        </Link>

                    </div>

                </form>

            </div>
        </>
    );
}