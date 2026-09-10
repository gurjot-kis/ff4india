import { useEffect, useRef, useState } from 'react';

export interface Country {
    name: string;
    iso: string;
    dial: string;
}

export const ccCountries: Country[] = [
    { name: 'India', iso: 'in', dial: '+91' },
    { name: 'United States', iso: 'us', dial: '+1' },
    { name: 'United Kingdom', iso: 'gb', dial: '+44' },
    { name: 'Canada', iso: 'ca', dial: '+1' },
    { name: 'Australia', iso: 'au', dial: '+61' },
    { name: 'Germany', iso: 'de', dial: '+49' },
    { name: 'France', iso: 'fr', dial: '+33' },
    { name: 'United Arab Emirates', iso: 'ae', dial: '+971' },
    { name: 'Mexico', iso: 'mx', dial: '+52' },
    { name: 'Brazil', iso: 'br', dial: '+55' },
    { name: 'China', iso: 'cn', dial: '+86' },
    { name: 'Japan', iso: 'jp', dial: '+81' },
    { name: 'South Korea', iso: 'kr', dial: '+82' },
    { name: 'Spain', iso: 'es', dial: '+34' },
    { name: 'Italy', iso: 'it', dial: '+39' },
    { name: 'Netherlands', iso: 'nl', dial: '+31' },
    { name: 'Singapore', iso: 'sg', dial: '+65' },
    { name: 'Philippines', iso: 'ph', dial: '+63' },
    { name: 'Pakistan', iso: 'pk', dial: '+92' },
    { name: 'Nigeria', iso: 'ng', dial: '+234' },
    { name: 'South Africa', iso: 'za', dial: '+27' },
    { name: 'Saudi Arabia', iso: 'sa', dial: '+966' },
    { name: 'Indonesia', iso: 'id', dial: '+62' },
    { name: 'Bangladesh', iso: 'bd', dial: '+880' },
    { name: 'Egypt', iso: 'eg', dial: '+20' },
    { name: 'Turkey', iso: 'tr', dial: '+90' },
    { name: 'Russia', iso: 'ru', dial: '+7' },
    { name: 'Vietnam', iso: 'vn', dial: '+84' },
    { name: 'New Zealand', iso: 'nz', dial: '+64' },
    { name: 'Ireland', iso: 'ie', dial: '+353' },
];

const ccFlagUrl = (iso: string) => `https://flagcdn.com/24x18/${iso}.png`;

interface CountryCodePhoneInputProps {
    /** The phone number portion only (no dial code) */
    phone: string;
    onPhoneChange: (phone: string) => void;
    /** Fires whenever the user picks a different country */
    onCountryChange?: (country: Country) => void;
    error?: string;
    /** ISO code to select by default, e.g. 'in' */
    defaultIso?: string;
}

export default function CountryCodePhoneInput({
    phone,
    onPhoneChange,
    onCountryChange,
    error,
    defaultIso = 'in',
}: CountryCodePhoneInputProps) {
    const [selected, setSelected] = useState<Country>(
        () => ccCountries.find((c) => c.iso === defaultIso) ?? ccCountries[0]
    );
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const groupRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const filtered = ccCountries.filter(
        (c) =>
            c.name.toLowerCase().includes(search.trim().toLowerCase()) ||
            c.dial.includes(search.trim())
    );

    // Focus the search box whenever the panel opens
    useEffect(() => {
        if (open) {
            setSearch('');
            const t = setTimeout(() => searchRef.current?.focus(), 10);
            return () => clearTimeout(t);
        }
    }, [open]);

    // Close on outside click / Escape
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (groupRef.current && !groupRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    function selectCountry(c: Country) {
        setSelected(c);
        setOpen(false);
        onCountryChange?.(c);
    }

    return (
        <div className="cc-input-group" ref={groupRef}>
            <button
                type="button"
                className="cc-trigger"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
            >
                <img className="cc-flag-img" src={ccFlagUrl(selected.iso)} alt={selected.name} />
                <span className="cc-code">{selected.dial}</span>
                <svg className="cc-caret" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M2.5 4.5L6 8l3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <input
                type="tel"
                className={`cc-phone-input ${error ? 'is-invalid' : ''}`}
                placeholder="Phone Number"
                inputMode="tel"
                value={phone}
                onChange={(e) => onPhoneChange(e.target.value)}
            />

            {open && (
                <div className="cc-panel open" role="listbox">
                    <div className="cc-search-wrap">
                        <div className="cc-search-inner">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                                <path
                                    d="M20 20l-3.5-3.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <input
                                ref={searchRef}
                                type="text"
                                className="cc-search-input"
                                placeholder="Search country or code"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="cc-list">
                        {filtered.length === 0 ? (
                            <div className="cc-empty">No countries found</div>
                        ) : (
                            filtered.map((c) => (
                                <button
                                    key={c.iso}
                                    type="button"
                                    role="option"
                                    aria-selected={c.iso === selected.iso}
                                    className={`cc-option${c.iso === selected.iso ? ' active' : ''}`}
                                    onClick={() => selectCountry(c)}
                                >
                                    <img src={ccFlagUrl(c.iso)} alt="" />
                                    <span className="cc-name">{c.name}</span>
                                    <span className="cc-dial">{c.dial}</span>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}