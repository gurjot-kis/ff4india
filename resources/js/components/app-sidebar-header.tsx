import { usePage } from '@inertiajs/react';

import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';
import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const { auth } = usePage<PageProps>().props;
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4 app-header">
            <div className="flex items-center gap-2 w-100 justify-content-between app-headerinner">
                <div>
                    <SidebarTrigger className="-ml-1" />
                    {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
                </div>
                <div className="profile_detail">
                    <div className="flex aspect-square size-10 items-center justify-center rounded-md">
                        <img alt="image" className="block w-full profile_image" src={`${import.meta.env.VITE_IMAGE_URL}${auth.user.image}`} />
                    </div>
                    <div className="ml-1 grid flex-1 text-left text-sm">
                        <span className="mb-0.5 truncate leading-tight font-semibold">
                            {auth.user.name}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
