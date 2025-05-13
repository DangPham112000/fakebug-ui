import Image from '@/components/Image';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
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
        <div className="flex flex-col gap-4">
          {/* Register with credentials */}

          <form action="" className="flex flex-col gap-4 ">
            <input
              type="text"
              className="w-72 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white text-black cursor-pointer border-[1px] border-white"
              placeholder="Enter a username"
            />
            <input
              type="text"
              className="w-72 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white text-black cursor-pointer border-[1px] border-white"
              placeholder="Enter a password"
            />
            <input
              type="text"
              className="w-72 flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white text-black cursor-pointer border-[1px] border-white"
              placeholder="Confirm your password"
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
