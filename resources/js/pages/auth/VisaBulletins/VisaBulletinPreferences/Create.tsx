import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface FormData {
    session: string;

    pref_f1_all: string;
    pref_f1_china: string;
    pref_f1_india: string;
    pref_f1_mexico: string;
    pref_f1_philippines: string;

    pref_f2a_all: string;
    pref_f2a_china: string;
    pref_f2a_india: string;
    pref_f2a_mexico: string;
    pref_f2a_philippines: string;

    pref_f2b_all: string;
    pref_f2b_china: string;
    pref_f2b_india: string;
    pref_f2b_mexico: string;
    pref_f2b_philippines: string;

    pref_f3_all: string;
    pref_f3_china: string;
    pref_f3_india: string;
    pref_f3_mexico: string;
    pref_f3_philippines: string;

    pref_f4_all: string;
    pref_f4_china: string;
    pref_f4_india: string;
    pref_f4_mexico: string;
    pref_f4_philippines: string;

    status: boolean;
}

export default function Create() {
    const { data, setData, post, processing, errors } =
        useForm<FormData>({
            session: '',

            pref_f1_all: '',
            pref_f1_china: '',
            pref_f1_india: '',
            pref_f1_mexico: '',
            pref_f1_philippines: '',

            pref_f2a_all: '',
            pref_f2a_china: '',
            pref_f2a_india: '',
            pref_f2a_mexico: '',
            pref_f2a_philippines: '',

            pref_f2b_all: '',
            pref_f2b_china: '',
            pref_f2b_india: '',
            pref_f2b_mexico: '',
            pref_f2b_philippines: '',

            pref_f3_all: '',
            pref_f3_china: '',
            pref_f3_india: '',
            pref_f3_mexico: '',
            pref_f3_philippines: '',

            pref_f4_all: '',
            pref_f4_china: '',
            pref_f4_india: '',
            pref_f4_mexico: '',
            pref_f4_philippines: '',

            status: true,
        });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/visa-preferences');
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
                <p className="text-red-500 text-sm mt-1">
                    {errors[name]}
                </p>
            )}
        </div>
    );

    return (
        <>
            <Head title="Create Visa Bulletin Preference" />

            <div className="app-inner-content">

                <div className="flex justify-between items-center mb-6 heading-outer">

                    <h1 className="text-2xl font-bold main_heading">
                        Create Visa Bulletin Preference
                    </h1>

                    <Link
                        href="/dashboard/visa-preferences"
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

                        {renderField('All', 'pref_f1_all')}
                        {renderField('China', 'pref_f1_china')}
                        {renderField('India', 'pref_f1_india')}
                        {renderField('Mexico', 'pref_f1_mexico')}
                        {renderField('Philippines', 'pref_f1_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F2A
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {renderField('All', 'pref_f2a_all')}
                        {renderField('China', 'pref_f2a_china')}
                        {renderField('India', 'pref_f2a_india')}
                        {renderField('Mexico', 'pref_f2a_mexico')}
                        {renderField('Philippines', 'pref_f2a_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F2B
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {renderField('All', 'pref_f2b_all')}
                        {renderField('China', 'pref_f2b_china')}
                        {renderField('India', 'pref_f2b_india')}
                        {renderField('Mexico', 'pref_f2b_mexico')}
                        {renderField('Philippines', 'pref_f2b_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F3
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {renderField('All', 'pref_f3_all')}
                        {renderField('China', 'pref_f3_china')}
                        {renderField('India', 'pref_f3_india')}
                        {renderField('Mexico', 'pref_f3_mexico')}
                        {renderField('Philippines', 'pref_f3_philippines')}

                    </div>

                    {/* ======================= */}

                    <h2 className="text-xl">
                        F4
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-3">

                        {renderField('All', 'pref_f4_all')}
                        {renderField('China', 'pref_f4_china')}
                        {renderField('India', 'pref_f4_india')}
                        {renderField('Mexico', 'pref_f4_mexico')}
                        {renderField('Philippines', 'pref_f4_philippines')}

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

                    <div className="flex gap-3 mt-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="primary_btn text-white px-10 py-2 rounded disabled:opacity-50"
                        >
                            {processing ? 'Saving...' : 'Save'}
                        </button>

                        <Link
                            href="/dashboard/visa-preferences"
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