import React from 'react';

interface SharePageProps {
    title?: string;
    description?: string;
}

export default function SharePage({
    title = document.title,
    description = '',
}: SharePageProps) {
    const pageUrl = window.location.href;

    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text: description,
                    url: pageUrl,
                });
            } catch (error) {
                // User cancelled the share dialog
            }
        }
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(pageUrl);
            alert('Link copied!');
        } catch (error) {
            console.error('Failed to copy link:', error);
        }
    };


    const shareOnFacebook = () => {
        const width = 600;
        const height = 500;

        const left =
            window.screenX + (window.outerWidth - width) / 2;

        const top =
            window.screenY + (window.outerHeight - height) / 2;

        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
        )}`;

        window.open(
            url,
            'facebook-share',
            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
        );
    };


    const shareOnTwitter = () => {
        const width = 600;
        const height = 500;

        const left =
            window.screenX + (window.outerWidth - width) / 2;

        const top =
            window.screenY + (window.outerHeight - height) / 2;

        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
        )}&text=${encodeURIComponent(document.title)}`;

        window.open(
            url,
            'twitter-share',
            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
        );
    };


    const shareOnLinkedIn = () => {
        const width = 600;
        const height = 500;

        const left =
            window.screenX + (window.outerWidth - width) / 2;

        const top =
            window.screenY + (window.outerHeight - height) / 2;

        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            window.location.href
        )}`;

        window.open(
            url,
            'linkedin-share',
            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
        );
    };

    return (




        <div className="share-page">
            <span>Share this page:</span>


            <button
                type="button"
                onClick={shareOnFacebook}
                className="share-btn facebook"
            >
                Facebook
            </button>


            <a
                href={`mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`}
                className="share-btn gmail"
            >
                Email
            </a>


            <button
                type="button"
                onClick={shareOnTwitter}
                className="share-btn twitter"
            >
                X / Twitter
            </button>

            <button
                type="button"
                onClick={shareOnLinkedIn}
                className="share-btn linkedin"
            >
                LinkedIn
            </button>

            <a
                href="https://www.facebook.com/groups/2009733842410836"
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn whatsapp"
            >
                Messenger
            </a>




            {/* Copy */}
            <button
                type="button"
                onClick={copyLink}
                className="share-btn copy"
            >
                Copy Link
            </button>

            {/* Mobile / Browser Share */}
            {typeof navigator !== 'undefined' &&
                typeof navigator.share === 'function' && (
                    <button
                        type="button"
                        onClick={handleNativeShare}
                        className="share-btn native"
                    >
                        More
                    </button>
                )}
        </div>
    );
}