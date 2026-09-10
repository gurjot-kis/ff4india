import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Editor } from '@tinymce/tinymce-react';

interface Category {
    id: number;
    name: string;
}

interface Blog {
    id: number;
    category_id: number;
    title: string;
    slug: string;
    featured_image: string |null;
    description: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    status: boolean;
}

interface Props {
    blog: Blog;
    categories: Category[];
}

interface FormData {
    category_id: number;
    title: string;
    featured_image: File | null;
    description: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    status: boolean;
}

export default function Edit({ blog, categories }: Props) {

    const { data, setData, put, processing, errors } =
        useForm<FormData>({
            category_id: blog.category_id,
            title: blog.title,
            featured_image: null,
            description: blog.description,
            meta_title: blog.meta_title ?? '',
            meta_description: blog.meta_description ?? '',
            meta_keywords: blog.meta_keywords ?? '',
            status: blog.status,
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        put(`/dashboard/blogs/${blog.id}`, {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Edit Blog" />

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Edit Blog
                    </h1>

                    <Link
                        href="/dashboard/blogs"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <form
                    onSubmit={submit}
                    className="rounded create-visa-bulletin"
                >

                    {/* Category */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Category
                        </label>

                        <select
                            value={data.category_id}
                            onChange={(e) =>
                                setData(
                                    'category_id',
                                    Number(e.target.value)
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        >

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

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
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

                    {/* Slug */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Slug
                        </label>

                        <input
                            type="text"
                            value={blog.slug}
                            disabled
                            className="w-full border rounded px-3 py-2 bg-gray-100"
                        />

                    </div>

                    {/* Current Image */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Current Featured Image
                        </label>

                        {blog.featured_image ? (

                            <img
                                src={`/storage/${blog.featured_image}`}
                                className="w-40 rounded border"
                                alt={blog.title}
                            />

                        ) : (

                            <p>No Image Uploaded</p>

                        )}

                    </div>

                    {/* Change Image */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Change Featured Image
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

                    </div>

                    {/* Description */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Description
                        </label>

                        {/* <textarea
                            rows={10}
                            value={data.description}
                            onChange={(e) =>
                                setData(
                                    'description',
                                    e.target.value
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        /> */}

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

                    </div>

                    <hr className="my-6"/>

                    <h2 className="text-xl font-semibold mb-5">
                        SEO Information
                    </h2>

                    {/* Meta Title */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Meta Title
                        </label>

                        <input
                            type="text"
                            value={data.meta_title}
                            onChange={(e) =>
                                setData(
                                    'meta_title',
                                    e.target.value
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                    </div>

                    {/* Meta Description */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Meta Description
                        </label>

                        <textarea
                            rows={4}
                            value={data.meta_description}
                            onChange={(e) =>
                                setData(
                                    'meta_description',
                                    e.target.value
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                    </div>

                    {/* Meta Keywords */}

                    <div className="mb-3">

                        <label className="block font-semibold mb-2">
                            Meta Keywords
                        </label>

                        <input
                            type="text"
                            value={data.meta_keywords}
                            onChange={(e) =>
                                setData(
                                    'meta_keywords',
                                    e.target.value
                                )
                            }
                            className="w-full border rounded px-3 py-2"
                        />

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
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-3 mt-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="primary_btn text-white px-10 py-2 rounded disabled:opacity-50"
                        >
                            {processing ? 'Updating...' : 'Update'}
                        </button>

                        <Link
                            href="/dashboard/blogs"
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