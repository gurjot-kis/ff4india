import { usePage } from '@inertiajs/react';

import AppLogoIcon from '@/components/app-logo-icon';


import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

export default function AppLogo() {
    const { name } = usePage().props;

    const { auth, passwordRules } = usePage<PageProps>().props;

    return (
        <>
            <div className="flex aspect-square size-10 items-center justify-center rounded-md">
                <img alt="image" className="block w-full profile_image" src={`${import.meta.env.VITE_IMAGE_URL}${auth.user.image}`}  />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    {auth.user.name}
                </span>
            </div>
        </>
    );
}
