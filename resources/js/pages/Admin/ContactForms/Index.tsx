import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface ContactForm {
    id: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: boolean;
    created_at: string;
}

interface Props {
    contactForms: {
        data: ContactForm[];
        current_page: number;
        per_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
    filters: {
        search: string;
    };
}

export default function Index({
    contactForms,
    filters,
}: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/contact-forms',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

  

    return (
        <>
            <Head title="Contact Forms Management" />

            <div className="p-6">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-2xl font-bold">
                        Contact Forms Management
                    </h1>

                    
                </div>

                <form
                    onSubmit={handleSearch}
                    className="flex gap-2 mb-5"
                >

                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-3 py-2 w-80"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="bg-gray-700 text-white px-4 rounded"
                    >
                        Search
                    </button>

                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 rounded"
                        onClick={() => {
                            setSearch('');
                            router.get('/dashboard/contact-forms');
                        }}
                    >
                        Reset
                    </button>

                </form>

                <div className="overflow-x-auto bg-white rounded shadow">

                    <table className="min-w-full border">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border px-4 py-2 w-16">
                                    #
                                </th>

                                <th className="border px-4 py-2">
                                    Name
                                </th>

                                <th className="border px-4 py-2">
                                    Email
                                </th>

                                <th className="border px-4 py-2">
                                    Phone
                                </th>

                                <th className="border px-4 py-2">
                                    Message
                                </th>

                              
                                <th className="border px-4 py-2 w-44">
                                    Created At
                                </th>

                             

                            </tr>

                        </thead>

                        <tbody>

                            {contactForms.data.length > 0 ? (
                                contactForms.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border px-4 py-2 text-center">

                                            {(contactForms.current_page - 1) *
                                                contactForms.per_page +
                                                index +
                                                1}

                                        </td>

                                        <td className="border px-4 py-2">

                                            {item.name}

                                        </td>

                                        <td className="border px-4 py-2">

                                            {item.email}

                                        </td>   
                                        <td className="border px-4 py-2">

                                            {item.phone}

                                        </td>       

                                        <td className="border px-4 py-2">

                                            {item.message}

                                        </td>


                                        

                                        <td className="border px-4 py-2">

                                            {new Date(item.created_at).toLocaleDateString(
                                                'en-US',
                                                {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                }
                                            )}

                                        </td>

                                         

                                    </tr>

                                ))
                            ) : (

                                <tr>

                                    <td
                                        colSpan={5}
                                        className="text-center py-6"
                                    >
                                        No records found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                <div className="flex justify-end mt-6 gap-2">

                    {contactForms.links.map((link, index) => (

                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.visit(link.url)}
                            className={`px-3 py-1 border rounded ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white'
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        />

                    ))}

                </div>

            </div>
        </>
    );
}