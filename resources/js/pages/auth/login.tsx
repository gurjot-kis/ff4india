import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasskeyVerify from '@/components/passkey-verify';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="Log in" />

            <div className="auth-card">
                {/* <div className="auth-logo">
                    <img src="/logo.svg" alt="logo" />
                </div> */}

                <h1 className="auth-title">Log in to your account</h1>
                <p className="auth-subtitle">Enter your email and password below to log in</p>

                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="auth-form flex flex-col gap-3"
                >
                    {({ processing, errors }) => (
                        <>
                            <div>
                                <Label htmlFor="email" className="auth-field-label">Email</Label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon">
                                        <Mail size={16} />
                                    </span>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        className="auth-input"
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-1" />
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="auth-field-label">Password</Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-sm mb-2"
                                            tabIndex={5}
                                        >
                                            Forgot your password?
                                        </TextLink>
                                    )}
                                </div>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon">
                                        <Lock size={16} />
                                    </span>
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Password"
                                        className="auth-input"
                                    />
                                    <button
                                        type="button"
                                        className="auth-input-toggle"
                                        onClick={() => setShowPassword((v) => !v)}
                                        tabIndex={-1}
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                                <InputError message={errors.password} className="mt-1" />
                            </div>

                            <div className="auth-remember">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>

                            <Button
                                type="submit"
                                className="auth-btn"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Spinner />}
                                Log in
                                <ArrowRight size={16} />
                            </Button>
                        </>
                    )}
                </Form>

                {status && (
                    <div className="mt-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
            </div>
        </>
    );
}

// Login.layout = {
//     title: 'Log in to your account',
//     description: 'Enter your email and password below to log in',
// };