import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface Preference {
    id: number;
    session: string;

    visa_f1_all: string;
    visa_f1_china: string;
    visa_f1_india: string;
    visa_f1_mexico: string;
    visa_f1_philippines: string;

    visa_f2a_all: string;
    visa_f2a_china: string;
    visa_f2a_india: string;
    visa_f2a_mexico: string;
    visa_f2a_philippines: string;

    visa_f2b_all: string;
    visa_f2b_china: string;
    visa_f2b_india: string;
    visa_f2b_mexico: string;
    visa_f2b_philippines: string;

    visa_f3_all: string;
    visa_f3_china: string;
    visa_f3_india: string;
    visa_f3_mexico: string;
    visa_f3_philippines: string;

    visa_f4_all: string;
    visa_f4_china: string;
    visa_f4_india: string;
    visa_f4_mexico: string;
    visa_f4_philippines: string;

    status: boolean;
}

interface Props {
    preference: Preference;
}

export default function Edit({ preference }: Props) {

    const { data, setData, put, processing, errors } =
        useForm<Preference>({
            ...preference,
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        put(`/dashboard/visa-applications/${preference.id}`);
    };

    const renderField = (
        label: string,
        name: keyof Preference
    ) => (
        <div>
            <label className="block text-sm font-medium mb-1">
                {label}
            </label>

            <input
                type="text"
                value={data[name] as string}
                onChange={(e) =>
                    setData(name, e.target.value as never)
                }
                className="w-full border rounded px-3 py-2"
            />

            {errors[name] && (
                <p className="text-red-500 text-sm mt-1">
                    {errors[name]}
                </p>
            )}
        </div>
    );

    return (
        <>
            <Head title="Edit Visa Bulletin Application" />

            <div className="p-4">

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-2xl font-bold">
                        Edit Visa Bulletin Application
                    </h1>

                    <Link
                        href="/dashboard/visa-applications"
                        className="bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>

                </div>

                <form
                    onSubmit={submit}
                    className="bg-white p-6 rounded shadow"
                >

                    {/* Session */}

                    <div className="mb-8">

                        <label className="block font-semibold mb-2">
                            Session
                        </label>

                        <input
                            type="text"
                            value={data.session}
                            onChange={(e) =>
                                setData('session', e.target.value)
                            }
                            className="w-full border rounded px-3 py-2"
                        />

                        {errors.session && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.session}
                            </p>
                        )}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl font-bold mb-4">
                        F1
                    </h2>

                    <div className="grid grid-cols-5 gap-4 mb-8">

                        {renderField('All', 'visa_f1_all')}
                        {renderField('China', 'visa_f1_china')}
                        {renderField('India', 'visa_f1_india')}
                        {renderField('Mexico', 'visa_f1_mexico')}
                        {renderField('Philippines', 'visa_f1_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl font-bold mb-4">
                        F2A
                    </h2>

                    <div className="grid grid-cols-5 gap-4 mb-8">

                        {renderField('All', 'visa_f2a_all')}
                        {renderField('China', 'visa_f2a_china')}
                        {renderField('India', 'visa_f2a_india')}
                        {renderField('Mexico', 'visa_f2a_mexico')}
                        {renderField('Philippines', 'visa_f2a_philippines')}

                    </div>

                                        {/* ======================= */}

                    <h2 className="text-xl font-bold mb-4">
                        F2B
                    </h2>

                    <div className="grid grid-cols-5 gap-4 mb-8">

                        {renderField('All', 'visa_f2b_all')}
                        {renderField('China', 'visa_f2b_china')}
                        {renderField('India', 'visa_f2b_india')}
                        {renderField('Mexico', 'visa_f2b_mexico')}
                        {renderField('Philippines', 'visa_f2b_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl font-bold mb-4">
                        F3
                    </h2>

                    <div className="grid grid-cols-5 gap-4 mb-8">

                        {renderField('All', 'visa_f3_all')}
                        {renderField('China', 'visa_f3_china')}
                        {renderField('India', 'visa_f3_india')}
                        {renderField('Mexico', 'visa_f3_mexico')}
                        {renderField('Philippines', 'visa_f3_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl font-bold mb-4">
                        F4
                    </h2>

                    <div className="grid grid-cols-5 gap-4 mb-8">

                        {renderField('All', 'visa_f4_all')}
                        {renderField('China', 'visa_f4_china')}
                        {renderField('India', 'visa_f4_india')}
                        {renderField('Mexico', 'visa_f4_mexico')}
                        {renderField('Philippines', 'visa_f4_philippines')}

                    </div>

                                        {/* ======================= */}

                    <div className="mb-8">
                        <label className="block font-semibold mb-2">
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

                        {errors.status && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.status}
                            </p>
                        )}
                    </div>

                    {/* Buttons */}

                    <div className="flex gap-3">

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
                        >
                            {processing ? 'Updating...' : 'Update'}
                        </button>

                         

                        <Link
                            href="/dashboard/visa-applications"
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
                        >
                            Cancel
                        </Link>

                    </div>

                </form>

            </div>

        </>
    );
}