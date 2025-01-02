"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Availability from "./availability/page";
import SignInPage from "./sign-in/page";
import { protectRoute } from "./ProtectRoutes";

export default function Home() {
    if(!protectRoute()){
         return null;
    }
    return (
       <div></div>
    );
  }