import config from '@/config';

export default function AppLogo() {
    return (
        <>
            <div className="app_logo">
                <img
                    src={`${config.storageUrl}/images/F4-Logo-Blue.png`}
                    alt="Logo"
                    className="logo-image"
                />
                <span className="logo-text">We Understand Immigration Better</span>
            </div>
        </>
    );
}