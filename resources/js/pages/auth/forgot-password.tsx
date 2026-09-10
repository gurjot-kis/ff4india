import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, Mail, ArrowRight } from 'lucide-react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <>
            <Head title="Forgot password" />

            <div className="auth-card">
                {/* <div className="auth-logo">
                    <img src="/logo.svg" alt="logo" />
                </div> */}

                <h1 className="auth-title">Forgot password</h1>
                <p className="auth-subtitle">Enter your email to receive a password reset link</p>

                {status && (
                    <div className="mb-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <Form
                    {...email.form()}
                    className="auth-form flex flex-col gap-3"
                >
                    {({ processing, errors }) => (
                        <>
                            <div>
                                <Label htmlFor="email" className="auth-field-label">Email address</Label>
                                <div className="auth-input-wrap">
                                    <span className="auth-input-icon">
                                        <Mail size={16} />
                                    </span>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        autoFocus
                                        placeholder="email@example.com"
                                        className="auth-input"
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-1" />
                            </div>

                            <Button
                                className="auth-btn"
                                disabled={processing}
                                data-test="email-password-reset-link-button"
                            >
                                {processing ? (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                ) : (
                                    <>
                                        Email password reset link
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </Button>
                        </>
                    )}
                </Form>

                <div className="auth-footer-link">
                    Or, return to <TextLink href={login()}>log in</TextLink>
                </div>
            </div>
        </>
    );
}

ForgotPassword.layout = {
    title: 'Forgot password',
    description: 'Enter your email to receive a password reset link',
};