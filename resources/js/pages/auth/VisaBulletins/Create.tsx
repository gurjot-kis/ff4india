import React, { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface VisaBulletinForm {
    month: string;

    family_filing_f1: string;
    family_filing_f2a: string;
    family_filing_f2b: string;
    family_filing_f3: string;
    family_filing_f4: string;

    family_final_f1: string;
    family_final_f2a: string;
    family_final_f2b: string;
    family_final_f3: string;
    family_final_f4: string;
}

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm<VisaBulletinForm>({
        month: '',

        family_filing_f1: '',
        family_filing_f2a: '',
        family_filing_f2b: '',
        family_filing_f3: '',
        family_filing_f4: '',

        family_final_f1: '',
        family_final_f2a: '',
        family_final_f2b: '',
        family_final_f3: '',
        family_final_f4: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post('/dashboard/visa-bulletins', {
            preserveScroll: true,
        });
    };

    const inputClass =
        'w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none';

    return (
        <>
            <Head title="Create Visa Bulletin" />

            <div className="app-inner-content">

                <div className="mb-6 flex items-center justify-between">

                    <h1 className="text-2xl font-bold main_heading">
                        Create Visa Bulletin
                    </h1>

                    <Link
                        href="/dashboard/visa-bulletins"
                        className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
                    >
                        Back
                    </Link>

                </div>

                <div className="rounded-lg bg-white p-6 shadow">

                    <form onSubmit={submit}>

                        {/* Month */}

                        <div className="mb-6">

                            <label className="mb-2 block font-medium">
                                Month
                            </label>

                            <input
                                type="text"
                                className={inputClass}
                                placeholder="Example: July 2026"
                                value={data.month}
                                onChange={(e) =>
                                    setData('month', e.target.value)
                                }
                            />

                            {errors.month && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.month}
                                </p>
                            )}

                        </div>

                        {/* Family Filing */}

                        <h2 className="mb-4 text-lg font-semibold">
                            Family Filing
                        </h2>

                        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">

                            <div>
                                <label>F1</label>

                                <input
                                    className={inputClass}
                                    value={data.family_filing_f1}
                                    onChange={(e) =>
                                        setData('family_filing_f1', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F2A</label>

                                <input
                                    className={inputClass}
                                    value={data.family_filing_f2a}
                                    onChange={(e) =>
                                        setData('family_filing_f2a', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F2B</label>

                                <input
                                    className={inputClass}
                                    value={data.family_filing_f2b}
                                    onChange={(e) =>
                                        setData('family_filing_f2b', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F3</label>

                                <input
                                    className={inputClass}
                                    value={data.family_filing_f3}
                                    onChange={(e) =>
                                        setData('family_filing_f3', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F4</label>

                                <input
                                    className={inputClass}
                                    value={data.family_filing_f4}
                                    onChange={(e) =>
                                        setData('family_filing_f4', e.target.value)
                                    }
                                />
                            </div>

                        </div>

                        {/* Family Final */}

                        <h2 className="mb-4 text-lg font-semibold">
                            Family Final
                        </h2>

                        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">

                            <div>
                                <label>F1</label>

                                <input
                                    className={inputClass}
                                    value={data.family_final_f1}
                                    onChange={(e) =>
                                        setData('family_final_f1', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F2A</label>

                                <input
                                    className={inputClass}
                                    value={data.family_final_f2a}
                                    onChange={(e) =>
                                        setData('family_final_f2a', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F2B</label>

                                <input
                                    className={inputClass}
                                    value={data.family_final_f2b}
                                    onChange={(e) =>
                                        setData('family_final_f2b', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F3</label>

                                <input
                                    className={inputClass}
                                    value={data.family_final_f3}
                                    onChange={(e) =>
                                        setData('family_final_f3', e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>F4</label>

                                <input
                                    className={inputClass}
                                    value={data.family_final_f4}
                                    onChange={(e) =>
                                        setData('family_final_f4', e.target.value)
                                    }
                                />
                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Save'}
                            </button>

                            <button
                                type="button"
                                onClick={() => reset()}
                                className="rounded bg-gray-600 px-5 py-2 text-white hover:bg-gray-700"
                            >
                                Reset
                            </button>

                            <Link
                                href="/dashboard/visa-bulletins"
                                className="rounded bg-red-600 px-5 py-2 text-white hover:bg-red-700"
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