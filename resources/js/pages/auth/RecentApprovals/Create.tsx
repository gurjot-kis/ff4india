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

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Add Recent Approval
                    </h1>

                    <Link
                        href="/dashboard/recent-approvals"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <form
                    onSubmit={submit}
                    className="rounded create-visa-bulletin"
                >

                    {/* Name */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
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

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
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

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
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

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
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

                    <div className="">

                        <label className="block font-semibold mb-2">
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

                    <div className="flex gap-3 mt-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="primary_btn text-white px-10 py-2 rounded disabled:opacity-50"
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
                            href="/dashboard/recent-approvals"
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