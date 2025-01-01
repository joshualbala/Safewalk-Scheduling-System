'use client';
import React from 'react'
// import "./globals.css";
import "@/app/globals.css"
import Link from 'next/link'
import { useState } from "react";

// export default function HeaderButton 

export const Component = () => {
    const [whichPage, setWhichPage] = useState(0); 
    if(whichPage == 0){
        return(
            <div className="flex content-center sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <h1 className="fixed left-2 top-3">Safewalk</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-700 text-base rounded-md border-2 border-black active:bg-black hover:bg-blue-200" ><button className="p-6" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button></div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-700 text-base rounded-md border-2 border-black active:bg-black hover:bg-red-200"><button className="p-6" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button></div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-700 text-base rounded-md border-2 border-black active:bg-black hover:bg-green-200"><button className="p-6" onClick={(some:any) => (setWhichPage(3))}>Availability </button></div>
                    </Link>
                </div>
                    
            </div>
        )
    }

    if(whichPage == 1){
        return(
            <div className="flex content-center sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <h1 className="fixed left-2 top-3">Safewalk</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-700 text-base rounded-md border-2 border-black hover:bg-blue-200 active:bg-black" ><button className="p-6" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button></div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-200 text-base rounded-md border-2  border-black active:bg-black hover:bg-red-700"><button className="p-6" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button></div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-200 text-base rounded-md border-2 border-black active:bg-black hover:bg-green-700"><button className="p-6" onClick={(some:any) => (setWhichPage(3))}>Availability </button></div>
                    </Link>
                </div>
                    
            </div>
        )
    }

    if(whichPage == 2){
        return(
            <div className="flex content-center sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <h1 className="fixed left-2 top-3">Safewalk</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-200 text-base rounded-md border-2 border-black active:bg-black hover:bg-blue-700" ><button className="p-6" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button></div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-700 text-base rounded-md border-2 border-black active:bg-black hover:bg-red-200"><button className="p-6" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button></div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-200 text-base rounded-md border-2 border-black active:bg-black hover:bg-green-700"><button className="p-6" onClick={(some:any) => (setWhichPage(3))}>Availability </button></div>
                    </Link>
                </div>
                    
            </div>
        )
    }

    if(whichPage == 3){
        return(
            <div className="flex content-center sticky top-0 text-black">
                <div className ="flex justify-center w-screen fixed bg-neon-yellow">
                    <h1 className="fixed left-2 top-3">Safewalk</h1>
                    <Link href= "sub-in">
                        <div className="bg-blue-200 text-base rounded-md border-2 border-black active:bg-black hover:bg-blue-700" ><button className="p-6" onClick={(some:any) => (setWhichPage(1))}>Sub-In</button></div>
                    </Link>
                    <Link href="sub-out">
                        <div className="bg-red-200 text-base rounded-md border-2 border-black active:bg-black hover:bg-red-700"><button className="p-6" onClick={(some:any) => (setWhichPage(2))}>Sub-Out </button></div>
                    </Link>
                    <Link href="availability">
                        <div className="bg-green-700 text-base rounded-md border-2 border-black active:bg-black hover:bg-green-200"><button className="p-6" onClick={(some:any) => (setWhichPage(3))}>Availability </button></div>
                    </Link>
                </div>
                    
            </div>
        )
    }
}
