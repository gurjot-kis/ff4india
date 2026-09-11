import React, { FormEvent, useState, useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

interface HomePageEditable {
    id: number;
    left_heading: string;
    left_description: string;
}

interface Props {
    homePageEditable: HomePageEditable;
}

interface Flash {
    success?: string; error?: string;
}

interface PageProps {
    flash: Flash;
}

interface FormData {
    left_heading: string;
    left_description: string;
    status: boolean;
}

export default function Edit({ homePageEditable }: Props) {


    const [showSuccess, setShowSuccess] = useState('');




    const { data, setData, put, processing, errors } =
        useForm({
            left_heading: homePageEditable.left_heading || '',
            left_description: homePageEditable.left_description || ''
        });

    const [successMessage, setSuccessMessage] = useState('');

    const submit = (e: FormEvent) => {
        e.preventDefault();

        put(`/dashboard/home-page/${homePageEditable.id}`, {
            onSuccess: () => {
                setSuccessMessage(
                    'Homepage editable content updated successfully.'
                );

                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            },
        });
    };

    return (
        <>
            {/* <Head title="Edit Homepage Editable" /> */}

            <div className="app-inner-content">


                {/* Success Message */}
                {successMessage && (
                    <div className="mb-5 rounded bg-green-100 border border-green-400 text-green-700 px-4 py-3">
                        {successMessage}
                    </div>
                )}


                {/* Header */}

                <div className="flex items-center justify-between mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Edit Homepage Editable
                    </h1>

                    {/* <Link
                        href="/dashboard/home-page"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link> */}

                </div>

                <div className="bg-white rounded shadow p-6">

                    <form
                        onSubmit={submit}
                        className="rounded create-visa-bulletin"
                    >

                        {/* Left Heading */}

                        <div className="mb-3">

                            <label className="block mb-2 font-medium">
                                Left Heading
                            </label>

                            <input
                                type="text"
                                value={data.left_heading}
                                onChange={(e) =>
                                    setData(
                                        'left_heading',
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter left heading"
                            />

                            {errors.left_heading && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.left_heading}
                                </p>
                            )}

                        </div>

                        {/* Left Description */}

                        <div className="mb-3">

                            <label className="block mb-2 font-medium">
                                Left Description
                            </label>

                            <textarea
                                value={data.left_description}
                                onChange={(e) =>
                                    setData(
                                        'left_description',
                                        e.target.value
                                    )
                                }
                                rows={8}
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter left description"
                            />

                            {errors.left_description && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.left_description}
                                </p>
                            )}

                        </div>

                        {/* Status */}

                        {/* <div className="mb-6">

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

                        </div> */}

                        {/* Buttons */}

                        <div className="flex gap-3 mt-4">

                            <button
                                type="submit"
                                disabled={processing}
                                className="primary_btn text-white px-10 py-2 rounded disabled:opacity-50"
                            >
                                {processing
                                    ? 'Updating...'
                                    : 'Update'}
                            </button>

                            {/* <Link
                                href="/dashboard/home-page"
                                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded"
                            >
                                Cancel
                            </Link> */}

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}