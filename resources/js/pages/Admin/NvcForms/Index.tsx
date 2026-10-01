import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import {
    FileSpreadsheet,
    FileText,
    Table,
    Printer,
    Search,
    RotateCcw,
    Trash,
} from 'lucide-react';
import config from '@/config'; 

interface InquiryAttachment {
    id: number;
    original_name: string;
    file_name: string;
    file_path: string;
    mime_type: string | null;
    file_size: number | null;
}

interface Inquiry {
    id: number;
    email: string;
    category: string | null;
    filing_status: string | null;
    case_number: string | null;
    principal_name: string | null;
    dob: string | null;
    petitioner_name: string | null;
    inquirer: string | null;
    visa_category: string[] | null;
    aor_name: string | null;
    aor_law_office: string | null;
    inquirer_name: string | null;
    comments: string | null;
    created_at: string;
    attachments: InquiryAttachment[];
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    inquiries: {
        data: Inquiry[];
        current_page: number;
        per_page: number;
        last_page: number;
        links: PaginationLink[];
    };
    filters: {
        search: string;
    };
}

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const formatDate = (date: string | null) => {
    if (!date) {
        return '-';
    }

    // Laravel serializes dates as ISO strings (e.g. 2000-01-01T00:00:00.000000Z).
    // Reading the Y-M-D part directly avoids timezone day-shifts.
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})/);

    if (match) {
        const [, year, month, day] = match;

        return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
    }

    return new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

const formatFilingStatus = (status: string | null) => {
    if (!status) {
        return '-';
    }

    return status
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

const formatVisaCategories = (categories: string[] | null | undefined) => {
    if (!categories || categories.length === 0) {
        return '-';
    }

    return categories.join(', ');
};

const formatFileSize = (size: number | null) => {
    if (!size) {
        return '-';
    }

    if (size < 1024) {
        return `${size} B`;
    }

    if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

export default function Index({ inquiries, filters }: Props) {
    const { flash } = usePage<{
        flash?: { success?: string; error?: string };
    }>().props;

    const [search, setSearch] = useState(filters.search || '');

    const queryString = filters.search
        ? `?search=${encodeURIComponent(filters.search)}`
        : '';

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        router.get(
            '/dashboard/nvc-forms',
            { search },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const deleteRecord = (id: number) => {
        if (confirm('Are you sure you want to delete this NVC inquiry?')) {
            router.delete(`/dashboard/nvc-forms/${id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <div className="app-inner-content">
            <div className="flex justify-between items-center mb-6 heading-outer">
                <h1 className="text-2xl font-bold main_heading">
                    NVC Inquiries Management
                </h1>
            </div>

            {flash?.success && (
                <div className="mb-4 rounded border border-green-300 bg-green-100 px-4 py-2 text-green-800">
                    {flash.success}
                </div>
            )}

            {flash?.error && (
                <div className="mb-4 rounded border border-red-300 bg-red-100 px-4 py-2 text-red-800">
                    {flash.error}
                </div>
            )}

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
                                placeholder="Search email, case number, name..."
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
                                href="/dashboard/nvc-forms"
                                className="bg-gray-600 text-white rounded flex gap-2 common-btn"
                            >
                                <RotateCcw size={16} />
                                <span>Reset</span>
                            </Link>
                        </form>
                    </div>

                    <div className="lg:col-span-6 flex flex-wrap gap-2 justify-content-lg-end order-2 lg:order-1 all-download-btns">
                        <a
                            href={`/dashboard/nvc-forms/export/excel${queryString}`}
                            className="bg-green-600 text-white rounded flex gap-2 common-pdf-btn d-excel-btn"
                        >
                            <FileSpreadsheet size={16} />
                            Excel
                        </a>

                        <a
                            href={`/dashboard/nvc-forms/export/pdf${queryString}`}
                            className="bg-red-600 text-white rounded flex gap-2 common-pdf-btn d-pdf-btn"
                        >
                            <FileText size={16} />
                            PDF
                        </a>

                        <a
                            href={`/dashboard/nvc-forms/export/csv${queryString}`}
                            className="bg-blue-600 text-white rounded flex gap-2 common-pdf-btn d-csv-btn"
                        >
                            <Table size={16} />
                            CSV
                        </a>

                        <a
                            href={`/dashboard/nvc-forms/print${queryString}`}
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
                            <th className="border">#</th>
                            <th className="border">Email</th>
                            <th className="border">Filing Status</th>
                            <th className="border">Case Number</th>
                            <th className="border">Principal Name</th>
                            <th className="border">DOB</th>
                            <th className="border">Petitioner Name</th>
                            <th className="border">Who Are You?</th>
                            <th className="border">Visa Category</th>
                            <th className="border">Comments</th>
                            <th className="border">Attachments</th>
                            <th className="border">Created At</th>
                            <th className="border px-4 py-2 w-32">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {inquiries.data.length > 0 ? (
                            inquiries.data.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border text-center px-3 py-2">
                                        {(inquiries.current_page - 1) *
                                            inquiries.per_page +
                                            index +
                                            1}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.email || '-'}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {formatFilingStatus(item.filing_status)}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.case_number || '-'}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.principal_name || '-'}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {formatDate(item.dob)}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.petitioner_name || '-'}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.inquirer || '-'}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {formatVisaCategories(item.visa_category)}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.comments || '-'}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.attachments?.length ? (
                                            <div className="flex flex-col gap-1">
                                                {item.attachments.map(
                                                    (attachment) => (
                                                        <a
                                                            key={attachment.id}
                                                            href={`${config.storageUrl}/${attachment.file_path}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:underline"
                                                        >
                                                            {attachment.original_name}
                                                            {attachment.file_size
                                                                ? ` (${formatFileSize(
                                                                      attachment.file_size
                                                                  )})`
                                                                : ''}
                                                        </a>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            '-'
                                        )}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {formatDate(item.created_at)}
                                    </td>

                                    <td className="border px-4 py-3 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    deleteRecord(item.id)
                                                }
                                                className="delete-btn flex gap-2 align-items-center"
                                            >
                                                <Trash size={16} />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={16}
                                    className="text-md-center py-6"
                                >
                                    No NVC inquiries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {inquiries.last_page > 1 && inquiries.links.length > 0 && (
                <div className="flex gap-2 mt-6 flex-wrap common-pagination">
                    {inquiries.links.map((link, index) => (
                        <button
                            key={index}
                            type="button"
                            disabled={!link.url}
                            onClick={() =>
                                link.url &&
                                router.visit(link.url, {
                                    preserveState: true,
                                    preserveScroll: true,
                                })
                            }
                            className={`px-4 py-2 border rounded ${
                                link.active
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white'
                            } ${
                                !link.url
                                    ? 'pointer-events-none opacity-50'
                                    : ''
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
