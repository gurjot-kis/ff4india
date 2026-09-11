import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface FormData {
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

export default function Create() {
    const { data, setData, post, processing, errors } =
        useForm<FormData>({
            session: '',

            visa_f1_all: '',
            visa_f1_china: '',
            visa_f1_india: '',
            visa_f1_mexico: '',
            visa_f1_philippines: '',

            visa_f2a_all: '',
            visa_f2a_china: '',
            visa_f2a_india: '',
            visa_f2a_mexico: '',
            visa_f2a_philippines: '',

            visa_f2b_all: '',
            visa_f2b_china: '',
            visa_f2b_india: '',
            visa_f2b_mexico: '',
            visa_f2b_philippines: '',

            visa_f3_all: '',
            visa_f3_china: '',
            visa_f3_india: '',
            visa_f3_mexico: '',
            visa_f3_philippines: '',

            visa_f4_all: '',
            visa_f4_china: '',
            visa_f4_india: '',
            visa_f4_mexico: '',
            visa_f4_philippines: '',

            status: true,
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/visa-applications');
    };

    const renderField = (
        label: string,
        name: keyof FormData
    ) => (
        <div>
            <label className="block text-sm font-medium mb-1">
                {label}
            </label>

            <input
                type="text" required value={data[name] as string}
                onChange={(e) =>
                    setData(name, e.target.value)
                }
                className="w-full border rounded px-3 py-2"
            />

            {errors[name] && (
                <p className="text-red-500 text-sm">
                    {errors[name]}
                </p>
            )}
        </div>
    );

    return (
        <>
            {/* <Head title="Create Visa Bulletin Application" /> */}

            <div className="app-inner-content">

                <div className="flex justify-between mb-6 heading-outer">
                    <h1 className="text-2xl font-bold main_heading">
                        Create Visa Bulletin Application
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
                    className="rounded create-visa-bulletin"
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
                            className="w-full border rounded px-3 py-2" required placeholder="July 2026"
                        />
                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F1
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {renderField('All', 'visa_f1_all')}
                        {renderField('China', 'visa_f1_china')}
                        {renderField('India', 'visa_f1_india')}
                        {renderField('Mexico', 'visa_f1_mexico')}
                        {renderField('Philippines', 'visa_f1_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F2A
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {renderField('All', 'visa_f2a_all')}
                        {renderField('China', 'visa_f2a_china')}
                        {renderField('India', 'visa_f2a_india')}
                        {renderField('Mexico', 'visa_f2a_mexico')}
                        {renderField('Philippines', 'visa_f2a_philippines')}

                    </div>
                                        {/* ======================= */}

                    <h2 className="text-xl">
                        F2B
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {renderField('All', 'visa_f2b_all')}
                        {renderField('China', 'visa_f2b_china')}
                        {renderField('India', 'visa_f2b_india')}
                        {renderField('Mexico', 'visa_f2b_mexico')}
                        {renderField('Philippines', 'visa_f2b_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F3
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {renderField('All', 'visa_f3_all')}
                        {renderField('China', 'visa_f3_china')}
                        {renderField('India', 'visa_f3_india')}
                        {renderField('Mexico', 'visa_f3_mexico')}
                        {renderField('Philippines', 'visa_f3_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F4
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-3">

                        {renderField('All', 'visa_f4_all')}
                        {renderField('China', 'visa_f4_china')}
                        {renderField('India', 'visa_f4_india')}
                        {renderField('Mexico', 'visa_f4_mexico')}
                        {renderField('Philippines', 'visa_f4_philippines')}

                    </div>

                                        {/* Status */}

                    <div className="mb-6">
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

                    <div className="flex gap-3 mt-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="primary_btn text-white px-8 py-2 rounded disabled:opacity-50"
                        >
                            {processing ? 'Saving...' : 'Save'}
                        </button>

                        

                        <Link
                            href="/dashboard/visa-applications"
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