"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";

var sign = false;
export const getSignIn = () =>{
  return sign;
}

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [wrongAddr, setWrongAddr]  = useState(<></>);

  const handleSubmit = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      if(res?.user){
        sign = true;
        router.push("/availability");
      }
      else{
        console.log("WRONG EMAIL OR PASSWORD");
        setWrongAddr(<div className = "p-3 bottom-32 bg-red-600 rounded-md md: p-0 bottom-20"><h1> Username or Password is incorrect</h1></div>);
      }
    } catch(e) {
      console.error("Sign-in error:", e);
    }
  };
  var emailInp = document.getElementById("email");
// Execute a function when the user presses a key on the keyboard
 if(emailInp){
  emailInp.addEventListener("keypress",
    function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        if (document){
          var butElm = document.getElementById("myBtn");
          if (butElm){
            butElm.click();
          }
          
        }
        
      }
    });
 }
  var passInp = document.getElementById("password");
  if(passInp){
    passInp.addEventListener("keypress",
      function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          if (document){
            var butElm = document.getElementById("myBtn");
            if (butElm){
              butElm.click();
            }
            
          }
          
        }
      });
   }

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg border-10 border-gray-900">
        <h1 className="text-2xl font-bold text-center text-neon-yellow mb-6">Sign In</h1>
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
          <button id="myBtn"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-neon-yellow text-gray-900 font-bold rounded-md shadow-md focus:outline-none hover:bg-yellow-400"
          >
            Sign In
          </button>
          
      </div>
      {wrongAddr}
    </div>
  );
}
