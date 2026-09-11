import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface FormData {
    image: File | null;
    name: string;
    priority_date: string;
    description: string;
    status: boolean;
    set_homepage: boolean;
    review: string;
}

export default function Create() {
    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            image: null,
            name: '',
            priority_date: '',
            description: '',
            status: true,
            set_homepage: false,
            review: '',
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/family-images', {
            forceFormData: true,
        });
    };

    return (
        <>
            {/* <Head title="Create Family Image" /> */}

            <div className="app-inner-content">

                {/* Header */}

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Create Family Image
                    </h1>

                    <Link
                        href="/dashboard/family-images"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <form
                    onSubmit={submit}
                    className="rounded create-visa-bulletin"
                >

                    {/* Image */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Image
                        </label>

                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={(e) =>
                                setData(
                                    'image',
                                    e.target.files?.[0] ?? null
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                        <p className="text-gray-500 text-sm mt-1">
                            Allowed: JPG, JPEG, PNG, WEBP. Maximum size:
                            2MB.
                        </p>

                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image}
                            </p>
                        )}

                    </div>

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
                            placeholder="Enter name"
                        />

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData('name', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter name"
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}

                    </div>

                    {/* Priority Date */}

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            Case Approved On

                        </label>

                        <input
                            type="date"
                            value={data.priority_date}
                            onChange={(e) =>
                                setData(
                                    'priority_date',
                                    e.target.value
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                        {errors.priority_date && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.priority_date}
                            </p>
                        )}

                    </div>

                    {/* Description */}

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            Visa Category
                        </label>

                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData(
                                    'description',
                                    e.target.value
                                )
                            }
                            rows={1}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter description"
                        />

                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}

                    </div>

                    {/* Review */}

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            Review
                        </label>

                        <textarea
                            value={data.review}
                            onChange={(e) =>
                                setData(
                                    'review',
                                    e.target.value
                                )
                            }
                            rows={6}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter review"
                        />

                        {errors.review && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.review}
                            </p>
                        )}

                    </div>

                    {/* Status */}

                    <div className="mb-5">

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

                    {/* Set Homepage */}

                    <div className="mb-6">

                        <label className="block mb-2 font-medium">
                            Set Homepage
                        </label>

                        <select
                            value={data.set_homepage ? '1' : '0'}
                            onChange={(e) =>
                                setData(
                                    'set_homepage',
                                    e.target.value === '1'
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="1">
                                Yes
                            </option>

                            <option value="0">
                                No
                            </option>
                        </select>

                        <p className="text-gray-500 text-sm mt-1">
                            If set to Yes, this image will be displayed
                            on the homepage.
                        </p>


                    </div>

                    {/* Priority Date */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Priority Date
                        </label>

                        <input
                            type="date"
                            value={data.priority_date}
                            onChange={(e) =>
                                setData(
                                    'priority_date',
                                    e.target.value
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                        {errors.priority_date && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.priority_date}
                            </p>
                        )}

                    </div>

                    {/* Description */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Description
                        </label>

                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData(
                                    'description',
                                    e.target.value
                                )
                            }
                            rows={6}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter description"
                        />

                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}

                    </div>

                    {/* Review */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Review
                        </label>

                        <textarea
                            value={data.review}
                            onChange={(e) =>
                                setData(
                                    'review',
                                    e.target.value
                                )
                            }
                            rows={6}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter review"
                        />

                        {errors.review && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.review}
                            </p>
                        )}

                    </div>

                    {/* Status */}

                    <div className="mb-3">

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

                    {/* Set Homepage */}

                    <div className="">

                        <label className="block font-semibold mb-2">
                            Set Homepage
                        </label>

                        <select
                            value={data.set_homepage ? '1' : '0'}
                            onChange={(e) =>
                                setData(
                                    'set_homepage',
                                    e.target.value === '1'
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        >
                            <option value="1">
                                Yes
                            </option>

                            <option value="0">
                                No
                            </option>
                        </select>

                        <p className="text-gray-500 text-sm mt-1">
                            If set to Yes, this image will be displayed
                            on the homepage.
                        </p>

                        {errors.set_homepage && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.set_homepage}
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
                            href="/dashboard/family-images"
                            className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded"
                        >
                            Cancel
                        </Link>

                    </div>

                </form>

            </div>
        </>
    );
}