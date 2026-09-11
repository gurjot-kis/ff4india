import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

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

    useEffect(() => {
        if (!autoShow || notices.length === 0) return;

        const dismissed = sessionStorage.getItem(storageKey);
        if (!dismissed) {
            setOpen(true);
        }
    }, [autoShow, notices.length, storageKey]);

    function handleClose() {
        sessionStorage.setItem(storageKey, '1');
        setOpen(false);
    }

    if (!open || notices.length === 0) return null;

    return (
        <div className="notice-overlay" onClick={handleClose}>
            <div className="notice-popup" onClick={(e) => e.stopPropagation()}>
                <div className="notice-header">
                    <div className="notice-icon">
                        <img src="/storage/images/notice.svg" alt="Notice" />
                    </div>

                    <div className="notice-header-text">
                        <h2>Notices</h2>
                    </div>

                    <button
                        type="button"
                        className="notice-close"
                        onClick={handleClose}
                        aria-label="Close notice"
                    >
                        ×
                    </button>
                </div>

                <div className="notice-body">
                    <div className="notice-list">
                        {notices.map((notice, index) => (
                            <div className="notice-list-item" key={notice.id}>
                                <span className="diamond-icon"><Check /></span>
                                <p>{notice.text}</p>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="notice-actions">
                    <button type="button" className="notice-btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button type="button" className="notice-btn-primary" onClick={handleClose}>
                        Got It
                    </button>
                </div>
            </div>
        </div>
    );
}