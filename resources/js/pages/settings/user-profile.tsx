import { Form, Head, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import DeleteUser from '@/components/delete-user';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { edit } from '@/routes/profile';
import { send } from '@/routes/verification';
import type { Auth } from '@/types';
import { User, Lock } from 'lucide-react';

import { useRef, useState } from 'react';
import SecurityController from '@/actions/App/Http/Controllers/Settings/SecurityController';

import type { Props as ManagePasskeysProps } from '@/components/manage-passkeys';
import ManagePasskeys from '@/components/manage-passkeys';
import type { Props as ManageTwoFactorProps } from '@/components/manage-two-factor';
import ManageTwoFactor from '@/components/manage-two-factor';
import PasswordInput from '@/components/password-input';

type PageProps = {
    auth: Auth;
    passwordRules: string;
};

export default function Profile({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const { auth, passwordRules } = usePage<PageProps>().props;


    const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');

    return (
        <>
            <Head title="Profile settings" />

            <div className="app-inner-content">

                <h1 className="sr-only">Profile settings</h1>

                <div className="flex justify-between items-center mb-6 heading-outer">
                    <div>
                        <h1 className="text-2xl font-bold main_heading">
                            Manage profile
                        </h1>

                        <p className="text-sm text-muted-foreground mt-2">Manage your profile and account settings</p>

                    </div>

                </div>

                <div className="space-y-6 create-visa-bulletin rounded">


                    <div className="flex flex-col lg:flex-row lg:space-x-12">


                        <div className="w-full">
                            <nav className="settings-tabs">

                                <a
                                    href=""
                                    id="profile-link"
                                    data-active={activeTab === 'profile'}
                                    className="settings-tab"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab('profile');
                                    }}
                                >
                                    <User className="settings-tab-icon" size={16} />
                                    Profile
                                </a>
                                <br />
                                <a
                                    href=""
                                    id="confirm-password-link"
                                    data-active={activeTab === 'password'}
                                    className="settings-tab"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab('password');
                                    }}
                                >
                                    <Lock className="settings-tab-icon" size={16} />
                                    Confirm password
                                </a>
                            </nav>

                        </div>



                        <div data-orientation="horizontal" role="none" data-slot="separator-root" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-6 lg:hidden mt-3"></div>


                    </div>

                    <div className="flex-1">
                        <div id="profile_box" className="settings-content" style={{ display: activeTab === 'profile' ? 'block' : 'none' }}>

                            <Form
                                {...ProfileController.update.form()}
                                options={{
                                    preserveScroll: true,
                                }}
                                className="space-y-6"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="w-full grid gap-2 mb-3">
                                                <Label htmlFor="name">Name</Label>

                                                <Input
                                                    id="name"
                                                    className="mt-1 block w-full"
                                                    defaultValue={auth.user.name}
                                                    name="name"
                                                    required
                                                    autoComplete="name"
                                                    placeholder="Full name"
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={errors.name}
                                                />
                                            </div>

                                            <div className="w-full grid gap-2 mb-3">
                                                <Label htmlFor="email">Email address</Label>

                                                <Input
                                                    id=""
                                                    type="email"
                                                    className="mt-1 block w-full"
                                                    defaultValue={auth.user.email}
                                                    name="email"
                                                    disabled
                                                    autoComplete="username"
                                                    placeholder="Email address"
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={errors.email}
                                                />
                                            </div>

                                            <div className="w-full grid gap-2 mb-4">
                                                <Label htmlFor="profileImage">Image</Label>

                                                <img
                                                    id="profileImage" alt="image"
                                                    className="mt-1 block w-full profile_image"
                                                    src={`${import.meta.env.VITE_IMAGE_URL}${auth.user.image}`}
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={errors.email}
                                                />
                                            </div>



                                        </div>

                                        {mustVerifyEmail &&
                                            auth.user.email_verified_at === null && (
                                                <div>
                                                    <p className="-mt-4 text-sm text-muted-foreground">
                                                        Your email address is unverified.{' '}
                                                        <Link
                                                            href={send()}
                                                            as="button"
                                                            className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                                        >
                                                            Click here to re-send the
                                                            verification email.
                                                        </Link>
                                                    </p>

                                                    {status ===
                                                        'verification-link-sent' && (
                                                            <div className="mt-2 text-sm font-medium text-green-600">
                                                                A new verification link has been
                                                                sent to your email address.
                                                            </div>
                                                        )}
                                                </div>
                                            )}

                                        <div className="flex items-center gap-4">
                                            <Button
                                                disabled={processing}
                                                data-test="update-profile-button"
                                                className="primary_btn text-white px-8 sm:px-10 py-2 rounded disabled:opacity-50"
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </div>
                        <div id="confirm_password_box" className="settings-content" style={{ display: activeTab === 'password' ? 'block' : 'none' }}>

                            <Form
                                {...SecurityController.update.form()}
                                options={{
                                    preserveScroll: true,
                                }}
                                resetOnError={[
                                    'password',
                                    'password_confirmation',
                                    'current_password',
                                ]}
                                resetOnSuccess
                                onError={(errors) => {
                                    if (errors.password) {
                                        passwordInput.current?.focus();
                                    }

                                    if (errors.current_password) {
                                        currentPasswordInput.current?.focus();
                                    }
                                }}
                                className="space-y-6"
                            >
                                {({ errors, processing }) => (
                                    <>
                                        <div className="grid gap-2 mb-4">
                                            <Label htmlFor="current_password">
                                                Current password
                                            </Label>

                                            <PasswordInput
                                                id="current_password"
                                                ref={currentPasswordInput}
                                                name="current_password"
                                                className="mt-1 block w-full"
                                                autoComplete="current-password"
                                                placeholder="Current password"
                                            />

                                            <InputError message={errors.current_password} />
                                        </div>

                                        <div className="grid gap-2 mb-4">
                                            <Label htmlFor="password">New password</Label>

                                            <PasswordInput
                                                id="password"
                                                ref={passwordInput}
                                                name="password"
                                                className="mt-1 block w-full"
                                                autoComplete="new-password"
                                                placeholder="New password"
                                                passwordrules={passwordRules}
                                            />

                                            <InputError message={errors.password} />
                                        </div>

                                        <div className="grid gap-2 mb-4">
                                            <Label htmlFor="password_confirmation">
                                                Confirm password
                                            </Label>

                                            <PasswordInput
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                className="mt-1 block w-full"
                                                autoComplete="new-password"
                                                placeholder="Confirm password"
                                                passwordrules={passwordRules}
                                            />

                                            <InputError
                                                message={errors.password_confirmation}
                                            />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Button
                                                disabled={processing}
                                                data-test="update-password-button"
                                                className="primary_btn text-white px-8 sm:px-10 py-2 rounded disabled:opacity-50"
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Form>

                        </div></div>

                </div>
            </div>

            {/* <DeleteUser /> */}
        </>
    );
}

// Profile.layout = {
//     breadcrumbs: [
//         {
//             title: 'Profile settings',
//             href: edit(),
//         },
//     ],
// };
