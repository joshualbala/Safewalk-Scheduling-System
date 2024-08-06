
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import  {Component} from "./components/header_button";
import {Availability} from "./components/availability/Availability";
import { Hour } from "./components/hours";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
        <body className={inter.className}>
        <div className="header" ><Component/></div>
        {/* <Availability className="hello" curSubs={[]} ></Availability> */}
          <br></br>
            {children}
          <footer className="footer"></footer>  
        </body>
    </html>
  );
}
  