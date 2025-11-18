import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const ForgotPassword = () => {
    const { resetPassword } = use(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error('Please enter your email address');
            return;
        }

        // validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            await resetPassword(email);
            toast.success('Password reset email sent successfully!');

            // generated for redirect to Gmail suggested by vs code
            setTimeout(() => {
                window.open('https://mail.google.com', '_blank');
                navigate('/login');
            }, 2000);

        } catch (error) {
            console.error('Password reset error:', error);

            // Show specific error messages based on Firebase error codes //generated
            let errorMessage = 'Failed to send reset email. Please try again.';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email address.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address format.';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many requests. Please try again later.';
            } else if (error.code === 'auth/network-request-failed') {
                errorMessage = 'Network error. Please check your connection.';
            }

            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                            Reset Your Password
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <form onSubmit={handleResetPassword} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? 'Sending...' : 'Send Reset Email'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <Link
                                to="/login"
                                className="text-sm text-orange-500 hover:text-orange-600"
                            >
                                ← Back to Login
                            </Link>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-orange-500 hover:text-orange-600">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 4000,
                    success: {
                        style: {
                            background: '#10b981',
                            color: '#fff',
                        },
                        iconTheme: {
                            primary: '#fff',
                            secondary: '#10b981',
                        },
                    },
                    error: {
                        style: {
                            background: '#ef4444',
                            color: '#fff',
                        },
                    },
                }}
            />
        </>
    );
};

export default ForgotPassword;