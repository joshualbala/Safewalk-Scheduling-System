'use client';
import React from 'react'
// import "./globals.css";
import "@/app/globals.css"
import Link from 'next/link'
//import {whichPage, setWhichPage} from '@/app/Contexts'
import { useContext } from "react";
import Image from 'next/image'; // Import the Next.js Image component


// export default function HeaderButton 

var whichPage = 0;
export function setWhichPage(which:number){
    whichPage = which;
}

export const Component = () => {

    //Default 
    if(whichPage == 0){
        return(
            <div className="flex content-center sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <Image src="/safewalk_logo.png" alt="Safewalk Logo" className= "fixed top-1 left-2 w-0 h-0 730:w-20 730:h-16" width={85} height={50}/>
                    <h1 className="fixed left-28 top-3 text-rm 1310:text-5xl font-cool font-bol">SAFEWALK</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-700 text-2xl font-cool border-black active:bg-black hover:bg-blue-200">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button>
                        </div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-700 text-2xl font-cool border-black active:bg-black hover:bg-red-200">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button>
                        </div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-700 text-2xl font-cool border-black active:bg-black hover:bg-green-200">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(3))}>Availability </button>
                        </div>
                    </Link>
                </div>
                    
            </div>
        )
    }

    //Sub-in Page
    if(whichPage == 1){
        return(
            <div className="flex content-center sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <Image src="/safewalk_logo.png" alt="Safewalk Logo" className= "fixed top-1 left-2 w-0 h-0 730:w-20 730:h-16"  width={85} height={50}/>
                    <h1 className="fixed left-28 top-3 text-rm 1310:text-5xl font-cool font-bol">SAFEWALK</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-700 text-2xl font-cool border-black hover:bg-blue-200 active:bg-black">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button>
                        </div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-200 text-2xl font-cool border-black active:bg-black hover:bg-red-700">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button>
                        </div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-200 text-2xl font-cool border-black active:bg-black hover:bg-green-700">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(3))}>Availability </button>
                        </div>
                    </Link>
                </div>
                    
            </div>
        )
    }

    //Sub-out Page
    if(whichPage == 2){
        return(
            <div className="flex content-center sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <Image src="/safewalk_logo.png" alt="Safewalk Logo" className= "fixed top-1 left-2 w-0 h-0 730:w-20 730:h-16"  width={85} height={50}/>
                    <h1 className="fixed left-28 top-3 text-rm 1310:text-5xl font-cool font-bol">SAFEWALK</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-200 text-2xl font-cool border-black active:bg-black hover:bg-blue-700">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button>
                        </div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-700 text-2xl font-cool border-black active:bg-black hover:bg-red-200">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button>
                        </div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-200 text-2xl font-cool border-black active:bg-black hover:bg-green-700">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(3))}>Availability </button>
                        </div>
                    </Link>
                </div>
                    
            </div>
        )
    }

    // Availability Page
    if(whichPage == 3){
        return(
            <div className="flex sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <Image src="/safewalk_logo.png" alt="Safewalk Logo" className= "fixed top-1 left-2 w-0 h-0 730:w-20 730:h-16"  width={85} height={50}/>
                    <h1 className="fixed left-28 top-3 text-rm 1310:text-5xl font-cool font-bol">SAFEWALK</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-200 text-2xl font-cool border-black active:bg-black hover:bg-blue-700" >
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button>
                        </div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-200 text-2xl font-cool border-black active:bg-black hover:bg-red-700">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button>
                        </div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-700 text-2xl font-cool border-black active:bg-black hover:bg-green-200">
                            <button className="w-50 h-20" onClick={(some:any) => (setWhichPage(3))}>Availability </button>
                        </div>
                    </Link>
                </div>
                    
            </div>
        )
    }
}
