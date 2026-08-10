import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface FamilyImage {
    id: number;
    image: string | null;
    name: string;
    priority_date: string | null;
    description: string;
    status: boolean;
    set_homepage: boolean;
    review: string;
}

interface Props {
    familyImage: FamilyImage;
}

interface FormData {
    _method: 'PUT';
    image: File | null;
    name: string;
    priority_date: string;
    description: string;
    status: boolean;
    set_homepage: boolean;
    review: string;
}

export default function Edit({ familyImage }: Props) {
    const { data, setData, post, processing, errors } =
        useForm<FormData>({
            _method: 'PUT',
            image: null,
            name: familyImage.name || '',
            priority_date: familyImage.priority_date
                ? familyImage.priority_date.substring(0, 10)
                : '',
            description: familyImage.description || '',
            status: Boolean(familyImage.status),
            set_homepage: Boolean(familyImage.set_homepage),
            review: familyImage.review || '',
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(`/dashboard/family-images/${familyImage.id}`, {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Edit Family Image" />

            <div className="p-6">

                {/* Header */}

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold">
                        Edit Family Image
                    </h1>

                    <Link
                        href="/dashboard/family-images"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <div className="bg-white rounded shadow p-6">

                    <form onSubmit={submit}>

                        {/* Current Image */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Current Image
                            </label>

                            {familyImage.image ? (

                                <img
                                    src={`/storage/${familyImage.image}`}
                                    alt={familyImage.name}
                                    className="w-40 h-32 object-cover rounded border"
                                />

                            ) : (

                                <p className="text-gray-500">
                                    No image uploaded.
                                </p>

                            )}

                        </div>

                        {/* Change Image */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Change Image
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
                                Leave empty to keep the current image.
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

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
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

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* Priority Date */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
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

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
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
                                rows={8}
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
                                rows={8}
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
                                If set to Yes, this family image will be
                                displayed on the homepage.
                            </p>

                            {errors.set_homepage && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.set_homepage}
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
                                    ? 'Updating...'
                                    : 'Update'}
                            </button>

                            <Link
                                href="/dashboard/family-images"
                                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded"
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