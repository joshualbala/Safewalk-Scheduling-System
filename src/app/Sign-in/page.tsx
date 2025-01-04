"use client";

import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";
import Image from 'next/image'; // Import the Next.js Image component
import { onStartup } from "@/app/firebaseConfig";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [wrongAddr, setWrongAddr] = useState<JSX.Element | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(1000); // State for screen width
  const router = useRouter();

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res?.user) { 
        setEmail("");
        setPassword("");
        setWrongAddr(null);
        router.push("/availability");
      } else {
        setWrongAddr(
          <div id="tues9" className="p-3 bottom-32 bg-red-600 rounded-md">
            <h1>Username or password is incorrect</h1>
          </div>
        );
      }
    } catch (e) {
      console.error("Sign-in error:", e);
      setWrongAddr(
        <div className="p-3 bottom-32 bg-red-600 rounded-md">
          <h1>Sign-in failed. Please try again.</h1>
        </div>
      );
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* Background image */}
      {screenWidth > 0 && (
        <Image
          src="/safewalk-white.png"
          alt="Safewalk Logo"
          layout="fill" // Cover the whole page
          objectFit="cover" // Keep proportions
          priority={true}
          className="absolute inset-0 z-0 scale-105"
        />
      )}

      {/* Overlay for darker appearance */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Sign-in form */}
      <div className="relative z-20 bg-gray-800 bg-opacity-95 p-10 rounded-lg shadow-lg border-2 border-gray-700 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-neon-yellow mb-8">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon-yellow"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon-yellow"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-neon-yellow text-gray-900 font-bold rounded-md shadow-md focus:outline-none hover:bg-yellow-400"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Error message */}
      {wrongAddr && (
        <div className="absolute bottom-10 z-20 bg-red-600 p-3 rounded-md text-white">
          {wrongAddr}
        </div>
      )}
    </div>
  );
}

