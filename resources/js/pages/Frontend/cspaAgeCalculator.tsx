// import React from 'react';
// import { Head, Link } from '@inertiajs/react';
import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';

export default function cspaAgeCalculator() {


    return (
        <>

            <section className="common-hero-sec text-center">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">CSPA Age Calculator</h1>
                        <p className="hero-description hero-common-des m-auto">
                            Calculate your child's age under the Child Status Protection Act (CSPA).Enter the required details below
                            to estimate CSPA eligibility.
                        </p>
                    </div>
                </div>
            </section>


            <section className="cspa-section common-padding">
                <div className="container position-relative z-2">
                    <div className="row align-items-start">

                        <div className="col-12 col-lg-7 col-xl-7 order-lg-1 order-2">
                            <div className="cspa-section_info-wrapper">

                                <div className="cspa-section_overview-card">
                                    <h2 className="cspa-section_card-title">What is CSPA?</h2>
                                    <div className="cspa-section_card-body">
                                        <p className="cspa-section_text">
                                            The <strong className="cspa-section_text-bold">Child Status Protection Act (CSPA)</strong> protects
                                            children from "aging out" of immigration eligibility when a visa number becomes available after the
                                            child turns 21.
                                        </p>
                                        <p className="cspa-section_text">
                                            Under CSPA, the child's "immigration age" is calculated by subtracting the time the I-130 petition was
                                            pending from their age on the date the visa became available.
                                        </p>
                                    </div>
                                </div>

                                <div className="cspa-section_steps-card">
                                    <h2 className="cspa-section_card-title cspa-section_card-title-steps">How CSPA Age is Calculated</h2>

                                    <div className="cspa-section_steps-list">

                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge">
                                                <span>1</span>
                                            </div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">Determine Date of Birth</h3>
                                                <p className="cspa-section_step-desc">
                                                    Use the child's official date of birth as shown on the birth certificate or passport. This is the
                                                    starting point for calculating the CSPA age.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge">
                                                <span>2</span>
                                            </div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">Calculate Age on Priority Date</h3>
                                                <p className="cspa-section_step-desc">
                                                    Calculate the child's biological age on the date the immigrant visa petition was filed (Priority
                                                    Date).
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge">
                                                <span>3</span>
                                            </div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">Subtract Pending Time</h3>
                                                <p className="cspa-section_step-desc">
                                                    Subtract the time the immigrant petition was pending with USCIS (from filing to approval) from the
                                                    child's biological age.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge">
                                                <span>4</span>
                                            </div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">CSPA Age Result</h3>
                                                <p className="cspa-section_step-desc">
                                                    If the calculated CSPA age is under 21 and all other eligibility requirements are met, the child
                                                    may qualify for CSPA protection and retain eligibility for immigration benefits.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-lg-5 col-xl-5 order-lg-2 order-1">
                            <div className="cspa-section_calculator-card">
                                <div className="cspa-section_calculator-header">
                                    <img src="./assets/images/cal.svg" alt="icon" />
                                    <h2 className="cspa-section_calculator-title">CSPA CALCULATOR</h2>
                                </div>


                                <form id="cspaForm" className="cspa-section_form">
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Child's Date of Birth <span className="required-field">*</span>
                                        </label>
                                        <div className="date-field">
                                            <input type="date" id="dob" name="dob" className="form-control native-date" required />
                                                <span>Date of Birth</span>
                                        </div>
                                        <div className="ios-trigger" data-target="dob">
                                            <span className="trigger-text placeholder">Date of Birth</span>
                                        </div>
                                    </div>

                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Priority Date <span className="required-field">*</span>
                                        </label>
                                        <div className="date-field">
                                            <input type="date" id="priorityDate" name="priorityDate" className="form-control native-date" required />
                                                <span>Priority Date</span>
                                        </div>


                                        <div className="ios-trigger" data-target="priorityDate">
                                            <span className="trigger-text placeholder">Priority Date</span>
                                        </div>
                                    </div>

                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Approval Date <span className="required-field">*</span>
                                        </label>
                                        <div className="date-field">
                                            <input type="date" id="approvalDate" name="approvalDate" className="form-control native-date" required />
                                                <span>Approval Date</span>
                                        </div>

                                        <div className="ios-trigger" data-target="approvalDate">
                                            <span className="trigger-text placeholder">Approval Date</span>
                                        </div>
                                    </div>

                                    <div className="f4-form-group cspa-date-field">
                                        <label forHtml="currentDate" className="f4-form-group-label">
                                            Date Petition Became Current <span className="required-field">*</span>
                                        </label>
                                        <div className="date-field">
                                            <input type="date" id="currentDate" name="currentDate" className="form-control native-date" required />
                                                <span>Visa Bulletin Date</span>
                                        </div>
                                        <div className="ios-trigger" data-target="currentDate">
                                            <span className="trigger-text placeholder">Visa Bulletin Date</span>
                                        </div>
                                    </div>

                                    <div className="cspa-section_actions">
                                        <button type="reset" className="cspa-section_btn cspa-section_btn-reset">
                                            <img src="./assets/images/reset.svg" alt="icon" />
                                            <span>Reset</span>
                                        </button>

                                        <button type="submit" className="cspa-section_btn cspa-section_btn-calculate" data-bs-toggle="modal"
                                            data-bs-target="#cspaResultModal">
                                            <img src="./assets/images/cal-2.svg" alt="icon" />
                                            <span>Calculate CSPA Age</span>
                                        </button>
                                    </div>
                                </form>

                                <div className="ios-backdrop" id="iosBackdrop"></div>
                                <div className="ios-sheet" id="iosSheet">
                                    <div className="sheet-header">
                                        <button type="button" className="sheet-btn" id="iosCancelBtn">Cancel</button>
                                        <button type="button" className="sheet-btn done" id="iosDoneBtn">Done</button>
                                    </div>
                                    <div className="wheel-picker">
                                        <div className="selection-bar"></div>
                                        <div className="wheel-col day" id="dayCol">
                                            <div className="wheel-col-inner" id="dayInner"></div>
                                        </div>
                                        <div className="wheel-col month" id="monthCol">
                                            <div className="wheel-col-inner" id="monthInner"></div>
                                        </div>
                                        <div className="wheel-col year" id="yearCol">
                                            <div className="wheel-col-inner" id="yearInner"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="modal fade" id="cspaResultModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content cspa-modal">
                        <div className="cspa-header">
                            <h2>CSPA RESULT</h2>

                            <button type="button" className="cspa-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className="cspa-body">

                            <div className="cspa-table-wrap">
                                <table className="cspa-table">
                                    <thead>
                                        <tr>
                                            <th colSpan={2}>CSPA CALCULATION</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th>Child's Date of Birth:</th>
                                            <td>08/14/2005</td>
                                        </tr>

                                        <tr>
                                            <th>Petition Filing Date:</th>
                                            <td>01/10/2022</td>
                                        </tr>

                                        <tr>
                                            <th>Petition Approval Date:</th>
                                            <td>07/02/2023</td>
                                        </tr>

                                        <tr>
                                            <th>Petition Pending Duration:</th>
                                            <td>1 Year 5 Months 22 Days</td>
                                        </tr>

                                        <tr>
                                            <th>Date when Petition Became Current:</th>
                                            <td>08/01/2025</td>
                                        </tr>

                                        <tr>
                                            <th>Actual Age when Visa Became Available:</th>
                                            <td>19 Years 11 Months 18 Days</td>
                                        </tr>

                                        <tr>
                                            <th>CSPA Age:</th>
                                            <td>18 Years 5 Months 26 Days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="cspa-result">
                                <p>Dear Applicant,</p>

                                <p>
                                    According to the calculations your are
                                    <strong>'ELIGIBLE'</strong> for immigrant visa.
                                    Visa Consulate Officer is the final authority who
                                    decides on CSPA eligibility.
                                </p>
                            </div>

                        </div>

                        <div className="cspa-section_actions cspa-modal-action">
                            <button type="button" className="cspa-section_btn cspa-section_btn-reset" data-bs-dismiss="modal"
                                aria-label="Close">
                                <span>Close</span>
                            </button>

                            <button type="button" id="calculateAgainBtn" className="cspa-section_btn cspa-section_btn-calculate"
                                data-bs-dismiss="modal">
                                <img src="./assets/images/cal-2.svg" alt="icon" />
                                    <span>Calculate Again</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>




        </>
    );
}