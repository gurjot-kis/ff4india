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

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Create Category
                    </h1>

                    <Link
                        href="/dashboard/categories"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <form
                    onSubmit={submit}
                    className="rounded create-visa-bulletin"
                >

                    {/* Category Name */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Category Name
                        </label>

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData('name', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter Category Name"
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
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
                            {processing ? 'Saving...' : 'Save'}
                        </button>

                        <button
                            type="button"
                            onClick={() => reset()}
                            className="reset_button bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded"
                        >
                            Reset
                        </button>

                        <Link
                            href="/dashboard/categories"
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