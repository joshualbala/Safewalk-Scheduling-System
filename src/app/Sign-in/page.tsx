'use client'
import React, { useState } from "react";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth"
import {auth} from "@/app/firebaseConfig";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  
  const handleSubmit = async () => {
    try{
      const res = await signInWithEmailAndPassword(email, password);
      console.log({res});
      // email('');
      // password('');
    }
   
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-100">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-gray-100 bg-gray-900 border border-gray-700 rounded-lg focus:ring focus:ring-yellow-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-gray-100 bg-gray-900 border border-gray-700 rounded-lg focus:ring focus:ring-yellow-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring focus:ring-yellow-500 focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
