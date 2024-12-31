"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      if (user) {
        setEmail("");
        setPassword("");
        router.push("/Availability");
      }
    } catch (err) {
      console.error("Sign-in error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-neon-yellow mb-6">Sign In</h1>
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
            className={`w-full py-2 px-4 bg-neon-yellow text-gray-900 font-bold rounded-md shadow-md focus:outline-none transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-400"
            }`}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          {error && (
            <p className="text-sm text-red-400 mt-3 text-center">
              {error.message}
            </p>
          )}
        </form>
        {user && (
          <p className="mt-4 text-center text-gray-400">
            Welcome back, <span className="text-neon-yellow">{user.user?.email}</span>!
          </p>
        )}
      </div>
    </div>
  );
}
