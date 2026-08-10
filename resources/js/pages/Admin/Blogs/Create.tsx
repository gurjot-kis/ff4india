import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
}

interface FormData {
    category_id: string;
    title: string;
    featured_image: File | null;
    description: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    status: boolean;
}

export default function Create({ categories }: Props) {

    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            category_id: '',
            title: '',
            featured_image: null,
            description: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: '',
            status: true,
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/blogs', {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Create Blog" />

            <div className="p-6">

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-2xl font-bold">
                        Create Blog
                    </h1>

                    <Link
                        href="/dashboard/blogs"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <div className="bg-white rounded shadow p-6">

                    <form onSubmit={submit}>

                        {/* Category */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Category
                            </label>

                            <select
                                value={data.category_id}
                                onChange={(e) =>
                                    setData('category_id', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="">
                                    Select Category
                                </option>

                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}

                            </select>

                            {errors.category_id &&
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.category_id}
                                </p>
                            }

                        </div>

                        {/* Title */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Blog Title
                            </label>

                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                            {errors.title &&
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.title}
                                </p>
                            }

                        </div>

                        {/* Featured Image */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Featured Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setData(
                                        'featured_image',
                                        e.target.files
                                            ? e.target.files[0]
                                            : null
                                    )
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                            {errors.featured_image &&
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.featured_image}
                                </p>
                            }

                        </div>

                        {/* Description */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Description
                            </label>

                            <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY} value={data.description}
        onEditorChange={(content) =>
            setData('description', content)
        }
        init={{
            height: 500,
            menubar: true,
            plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
            ],
            toolbar:
                'undo redo | blocks | ' +
                'bold italic underline strikethrough | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | ' +
                'link image media table | ' +
                'removeformat | code fullscreen',
        }}
    />

    {errors.description && (
        <p className="text-red-500 text-sm mt-1">
            {errors.description}
        </p>
    )}

                            {/* <textarea
                                rows={10}
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                            {errors.description &&
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.description}
                                </p>
                            } */}

                        </div>

                        <hr className="my-6"/>

                        <h2 className="text-xl font-semibold mb-5">
                            SEO Information
                        </h2>

                        {/* Meta Title */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Meta Title
                            </label>

                            <input
                                type="text"
                                value={data.meta_title}
                                onChange={(e) =>
                                    setData('meta_title', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                        </div>

                        {/* Meta Description */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Meta Description
                            </label>

                            <textarea
                                rows={4}
                                value={data.meta_description}
                                onChange={(e) =>
                                    setData('meta_description', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                        </div>

                        {/* Meta Keywords */}

                        <div className="mb-5">

                            <label className="block mb-2 font-medium">
                                Meta Keywords
                            </label>

                            <input
                                type="text"
                                value={data.meta_keywords}
                                onChange={(e) =>
                                    setData('meta_keywords', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                                placeholder="keyword1, keyword2, keyword3"
                            />

                        </div>

                        {/* Status */}

                        <div className="mb-6">

                            <label className="block mb-2 font-medium">
                                Status
                            </label>

                            <select
                                value={data.status ? '1' : '0'}
                                onChange={(e) =>
                                    setData('status', e.target.value === '1')
                                }
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
                            >
                                {processing ? 'Saving...' : 'Save'}
                            </button>

                            <button
                                type="button"
                                onClick={() => reset()}
                                className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded"
                            >
                                Reset
                            </button>

                            <Link
                                href="/dashboard/blogs"
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