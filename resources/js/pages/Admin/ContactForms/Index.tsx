import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { FileSpreadsheet, FileText, Table, Printer, Search, RotateCcw, Trash, SquarePen } from "lucide-react";

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

    const deleteRecord = (id: number) => {
        if (confirm('Are you sure you want to delete this contact form?')) {
            router.delete(`/dashboard/contact-forms/${id}`);
        }
    };


    return (
        <>
            {/* <Head title="Contact Forms Management" /> */}

            <div className="app-inner-content">
                <div className="flex justify-between items-center mb-6 heading-outer">
                    <h1 className="text-2xl font-bold main_heading">
                        Contact Forms Management
                    </h1>
                </div>

                <div className="col-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <form
                                onSubmit={handleSearch}
                                className="flex gap-2 search-form"
                            >

                                <input
                                    type="text"
                                    className="border rounded px-3 py-2 w-80"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white rounded flex gap-2 common-btn"
                                >
                                    <Search size={16} />
                                    <span>Search</span>
                                </button>

                                <Link
                                    href="/dashboard/contact-forms"
                                    className="bg-gray-600 text-white rounded flex gap-2 common-btn"
                                >
                                    <RotateCcw size={16} />
                                    <span>Reset</span>
                                </Link>

                            </form>
                        </div>

                        <div className="lg:col-span-6 flex flex-wrap gap-2 justify-content-lg-end order-2 lg:order-1 all-download-btns">

                            <a
                                href="/dashboard/contact-forms/export/excel"
                                className="bg-green-600 text-white rounded flex gap-2 common-pdf-btn d-excel-btn"
                            >
                                <FileSpreadsheet size={16} />
                                Excel
                            </a>

                            <a
                                href="/dashboard/contact-forms/export/pdf"
                                className="bg-red-600 text-white rounded flex gap-2 common-pdf-btn d-pdf-btn"
                            >
                                <FileText size={16} />
                                PDF
                            </a>

                            <a
                                href="/dashboard/contact-forms/export/csv"
                                className="bg-blue-600 text-white rounded flex gap-2 common-pdf-btn d-csv-btn"
                            >
                                <Table size={16} />
                                CSV
                            </a>

                            <a
                                href="/dashboard/contact-forms/print"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-white rounded flex gap-2 common-pdf-btn d-print-btn"
                            >
                                <Printer size={16} />
                                Print
                            </a>

                        </div>

                    </div>
                </div>


                <div className="overflow-x-auto bg-white rounded styled-table">

                    <table className="w-full border-collapse">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border">
                                    #
                                </th>

                                <th className="border">
                                    Name
                                </th>

                                <th className="border">
                                    Email
                                </th>

                                <th className="border">
                                    Phone
                                </th>

                                <th className="border">
                                    Message
                                </th>


                                <th className="border">
                                    Created At
                                </th>

                                <th className="border px-4 py-2 w-32">
                                    Action
                                </th>



                            </tr>

                        </thead>

                        <tbody>

                            {contactForms.data.length > 0 ? (
                                contactForms.data.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="border text-center">

                                            {(contactForms.current_page - 1) *
                                                contactForms.per_page +
                                                index +
                                                1}

                                        </td>

                                        <td className="border">

                                            {item.name}

                                        </td>

                                        <td className="border">

                                            {item.email}

                                        </td>
                                        <td className="border">

                                            {item.phone}

                                        </td>

                                        <td className="border">

                                            {item.message}

                                        </td>




                                        <td className="border">

                                            {new Date(item.created_at).toLocaleDateString(
                                                'en-US',
                                                {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                }
                                            )}
                                        </td>

                                        <td className="border px-4 py-3 text-center">
                                            <div className="flex justify-center gap-2">
                                                

                                                <button
                                                    onClick={() =>
                                                        deleteRecord(
                                                            item.id
                                                        )
                                                    }
                                                    className="delete-btn flex gap-2 align-items-center"
                                                >
                                                    <Trash /> <span>Delete</span>
                                                </button>

                                            </div>
                                        </td>

                                    </tr>

                                ))
                            ) : (

                                <tr>
                                    <td
                                        colSpan={5}
                                        className="text-md-center py-6"
                                    >
                                        No records found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

                <div className="flex gap-2 mt-6 flex-wrap common-pagination">

                    {contactForms.links.map((link, index) => (

                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => link.url && router.visit(link.url)}
                            className={`px-4 py-2 border rounded ${link.active
                                ? 'bg-blue-600 text-white'
                                : 'bg-white'
                                } ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
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