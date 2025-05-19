'use client';
import { registerUser } from '@/api/authService';
import Image from '@/components/Image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const registerAction = async (formData: FormData) => {
    try {
      const username = formData.get('username') as string;
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const confirmPassword = formData.get('confirmPassword') as string;

      if (!username || !email || !password) {
        setError('All fields are required');
        return;
      }

      if (confirmPassword !== password) {
        setError('Passwords do not match');
        return;
      }

      const accessToken = await registerUser({ username, email, password });

      if (accessToken) {
        // Set token in cookie for middleware authentication
        document.cookie = `token=${accessToken}; path=/; max-age=${
          60 * 60 * 24 * 7
        }`; // 7 days

        // Redirect to homepage
        router.push('/');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An error occurred during registration');
    }
  };

  return (
    <div className="h-screen flex items-center justify-between p-8">
      <div className="w-1/2 lg:flex hidden items-center justify-center">
        <Image path="general/logo.svg" alt="logo" w={320} h={320} />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <h1 className="md:text-6xl xsm:text-4xl text-2xl font-bold">
          Happening now
        </h1>
        <h1 className="text-2xl">Join today.</h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-col gap-4">
          {/* Register form */}
          <form action={registerAction} className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              className="w-72 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white text-black cursor-pointer border-[1px] border-white"
              placeholder="Enter a username"
              required
            />
            <input
              type="text"
              name="email"
              className="w-72 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white text-black cursor-pointer border-[1px] border-white"
              placeholder="Enter a email"
              required
            />
            <input
              type="password"
              name="password"
              className="w-72 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white text-black cursor-pointer border-[1px] border-white"
              placeholder="Enter a password"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              className="w-72 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white text-black cursor-pointer border-[1px] border-white"
              placeholder="Confirm your password"
              required
            />
            <button
              type="submit"
              className="w-72 flex items-center justify-center gap-2 p-2 rounded-full bg-black text-white font-bold cursor-pointer border-[1px] border-white hover:bg-white hover:text-black"
            >
              Sign up
            </button>
          </form>

          <span className="text-textGray mt-10">Already have an account?</span>
          <Link href="/sign-in">
            <button
              type="button"
              className="w-72 flex items-center justify-center gap-2 p-2 rounded-full bg-white text-black font-bold cursor-pointer border-[1px] border-white"
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
