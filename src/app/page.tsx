"use client"
import { protectRoute } from "./ProtectRoutes";

export default function Home() {
  protectRoute();
     
    return (
       <div></div>
    );
   }