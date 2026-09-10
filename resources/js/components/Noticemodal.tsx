import { useEffect, useState } from 'react';

export interface NoticeItem {
    id: string | number;
    text: string;
}

interface NoticeModalProps {
    notices: NoticeItem[];
    /** Unique key so different pages/notice sets don't clash in storage */
    storageKey?: string;
    /** Show automatically once per browser session (default: true) */
    autoShow?: boolean;
}

export default function NoticeModal({
    notices,
    storageKey = 'ff4india-notice-dismissed',
    autoShow = true,
}: NoticeModalProps) {
    const [open, setOpen] = useState(false);
    const [dontShowAgain, setDontShowAgain] = useState(false);

    useEffect(() => {
        if (!autoShow || notices.length === 0) return;

        const dismissed = sessionStorage.getItem(storageKey);
        if (!dismissed) {
            setOpen(true);
        }
    }, [autoShow, notices.length, storageKey]);

    function handleClose() {
        if (dontShowAgain) {
            sessionStorage.setItem(storageKey, '1');
        }
        setOpen(false);
    }

    if (!open || notices.length === 0) return null;

    return (
        <div className="notice-overlay" onClick={handleClose}>
            <div className="notice-popup" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    className="notice-close"
                    onClick={handleClose}
                    aria-label="Close notice"
                >
                    ×
                </button>

                <div className="notice-icon">
                    <i className="fa-solid fa-bell"></i>
                </div>

                <h2>Important Notice</h2>

                <div className="notice-list">
                    {notices.map((notice) => (
                        <div className="notice-list-item" key={notice.id}>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <p>{notice.text}</p>
                        </div>
                    ))}
                </div>

                <label className="notice-dismiss-check">
                    <input
                        type="checkbox"
                        checked={dontShowAgain}
                        onChange={(e) => setDontShowAgain(e.target.checked)}
                    />
                    <span>Don&apos;t show this again today</span>
                </label>

                <button type="button" className="common-btn w-100" onClick={handleClose}>
                    I Understand
                </button>
            </div>
        </div>
    );
}