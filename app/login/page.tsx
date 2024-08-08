'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="border text-card-foreground w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <p className="font-semibold">Welcome back</p>
                    <p>Please log in to continue</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                        Email
                    </label>
                    <div className="relative">
                        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10" id="email" placeholder="Enter your email" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-3 h-5 w-5 text-muted-foreground">
                            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                        </svg>
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pl-10 pr-10"
                            id="password"
                            placeholder="********"
                            type={passwordVisible ? 'text' : 'password'}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                        >
                            <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 h-5 w-5 text-muted-foreground focus:outline-none"
                            aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                        >
                            {passwordVisible ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                            ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    transform="rotate(180)"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M4.5 15.5C7.5 9 16.5 9 19.5 15.5"
                                            stroke="#000000"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.8162 12.1825L19.5 8.5"
                                            stroke="#000000"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 10.625V7"
                                            stroke="#000000"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.18383 12.1825L4.5 8.5"
                                            stroke="#000000"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            role="checkbox"
                            aria-checked="false"
                            className="peer h-4 w-4 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            id="remember"
                        />
                        <label
                            className="font-medium text-sm"
                            htmlFor="remember"
                        >
                            Remember me
                        </label>
                    </div>
                    <Link href="#" className="text-sm text-blue-600">
                        Forgot password?
                    </Link>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black text-white">
                    Sign In
                </button>
                <div className="text-center">
                    <p className="text-sm">
                        Don't have an account?
                        <Link href="/register" className="text-blue-600">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}