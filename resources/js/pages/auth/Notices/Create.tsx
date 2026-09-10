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

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Add Notice
                    </h1>

                    <Link
                        href="/dashboard/notices"
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
                            className="w-full border rounded px-3 py-2"
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
                            className="primary_btn text-white px-8 py-2 rounded disabled:opacity-50"
                        >
                            {processing
                                ? 'Saving...'
                                : 'Save Notice'}
                        </button>

                        <Link
                            href="/dashboard/notices"
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