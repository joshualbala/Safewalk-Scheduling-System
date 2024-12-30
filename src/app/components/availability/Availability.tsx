'use client'
import React, { useState, useRef, useEffect } from "react";


export default function availability() {
    return(
        <main className="flex flex-col justify-between items-center min-h-screen p-24">
        <div className="p-5 border-10 border-solid border-green-700 rounded-3xl">
            <div className="grid grid-cols-8 grid-rows-4 gap-2.5">
                

                {/* 1 x 1 */}
                <div className="bg-green-700 w-24 h-24"></div>

                {/* 1 x 2 */}
                <div className="bg-green-700 w-24 h-24">
                    <p className="text-center capitalize font-bold leading-12">Monday</p>
                </div>

                {/* 1 x 3 */}
                <div className="bg-green-700 w-24 h-24">
                    <p className="text-center capitalize font-bold leading-12">Tuesday</p>
                </div>

                {/* 1 x 4 */}
                <div className="bg-green-700 w-24 h-24">
                    <p className="text-center capitalize font-bold leading-12">Wednesday</p>
                </div>

                {/* 1 x 5 */}
                <div className="bg-green-700 w-24 h-24">
                    <p className="text-center capitalize font-bold leading-12">Thursday</p>
                </div>

                {/* 1 x 6 */}
                <div className="bg-green-700 w-24 h-24">
                    <p className="text-center capitalize font-bold leading-12">Friday</p>
                </div>

                {/* 1 x 7 */}
                <div className="bg-green-700 w-24 h-24">
                    <p className="text-center capitalize font-bold leading-12">Saturday</p>
                </div>

                {/* 1 x 8 */}
                <div className="bg-green-700 w-24 h-24">
                    <p className="text-center capitalize font-bold leading-12">Sunday</p>
                </div>

                {/* 2 x 1 */}
                <div className="flex bg-green-700 w-24 h-24">
                    <div className="text-center capitalize font-bold leading-14 transform translate-y-4">9:00PM - 11:00PM</div>
                </div>

                {/* 2 x 2 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 3 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 4 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 5 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 6 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 7 */}
                <div className="bg-green-700 w-24 h-24">
                    <div className="bg-gray-500 w-24 h-24"></div>
                </div>

                {/* 2 x 8 */}
                <div className="bg-green-700 w-24 h-24">
                    <div className="bg-gray-500 w-24 h-24"></div>
                </div>

                {/* 3 x 1 */}
                <div className="flex bg-green-700 w-24 h-24">
                    <div className="transform text-center capitalize font-bold leading-14 translate-y-4">10:15PM - 12:15AM</div>
                </div>

                {/* 3 x 2 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 3 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 4 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 5 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>  

                {/* 3 x 6 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 7 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 8 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 1 */}
                <div className="flex bg-green-700 w-24 h-24">
                    <div className="transform text-center capitalize font-bold leading-14 translate-y-4">12:15 PM - 2:15 AM</div>
                </div>

                {/* 4 x 2 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 3 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 4 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 5 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 6 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 7 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 8 */}
                <div className="bg-green-700 w-24 h-24 ">
                    <button className="bg-green-700 w-24 h-24 hover:bg-green-900 active:bg-white"> button </button>
                </div>
            </div>
        </div>
    </main>
    )

}