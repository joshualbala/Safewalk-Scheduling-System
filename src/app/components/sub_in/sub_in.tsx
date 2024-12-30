'use client'
import React, { useState, useRef, useEffect } from "react";
import styles from "@/app/components/sub_in/page.module.css";

export default function sub_in() {
    return(
        <main className="flex flex-col justify-between items-center min-h-screen p-24">
        <div className="p-5 border-8 border-solid border-blue-700 rounded-3xl">
            <div className="grid grid-cols-8 grid-rows-4 gap-2.5">
                

                {/* 1 x 1 */}
                <div className="bg-blue-700 w-24 h-24"></div>

                {/* 1 x 2 */}
                <div className="bg-blue-700 w-24 h-24">
                    <p className={styles.text}>Monday</p>
                </div>

                {/* 1 x 3 */}
                <div className="bg-blue-700 w-24 h-24">
                    <p className={styles.text}>Tuesday</p>
                </div>

                {/* 1 x 4 */}
                <div className="bg-blue-700 w-24 h-24">
                    <p className={styles.text}>Wednesday</p>
                </div>

                {/* 1 x 5 */}
                <div className="bg-blue-700 w-24 h-24">
                    <p className={styles.text}>Thursday</p>
                </div>

                {/* 1 x 6 */}
                <div className="bg-blue-700 w-24 h-24">
                    <p className={styles.text}>Friday</p>
                </div>

                {/* 1 x 7 */}
                <div className="bg-blue-700 w-24 h-24">
                    <p className={styles.text}>Saturday</p>
                </div>

                {/* 1 x 8 */}
                <div className="bg-blue-700 w-24 h-24">
                    <p className={styles.text}>Sunday</p>
                </div>

                {/* 2 x 1 */}
                <div className="bg-blue-700 w-24 h-24">
                    <div className={styles.second_text}>9:00PM - 11:00PM</div>
                </div>

                {/* 2 x 2 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 3 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 4 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 5 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 6 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 2 x 7 */}
                <div className="bg-blue-700 w-24 h-24">
                    <div className="bg-gray-500 w-24 h-24"></div>
                </div>

                {/* 2 x 8 */}
                <div className="bg-blue-700 w-24 h-24">
                    <div className="bg-gray-500 w-24 h-24"></div>
                </div>

                {/* 3 x 1 */}
                <div className="bg-blue-700 w-24 h-24">
                    <div className={styles.second_text}>10:15PM - 12:15AM</div>
                </div>

                {/* 3 x 2 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 3 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 4 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 5 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>  

                {/* 3 x 6 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 7 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 3 x 8 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 1 */}
                <div className="bg-blue-700 w-24 h-24">
                    <div className={styles.second_text}>12:15 PM - 2:15 AM</div>
                </div>

                {/* 4 x 2 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 3 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 4 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 5 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 6 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 7 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>

                {/* 4 x 8 */}
                <div className="bg-blue-700 w-24 h-24 ">
                    <button className="bg-blue-700 w-24 h-24 hover:bg-blue-900 active:bg-white"> button </button>
                </div>
            </div>
        </div>
    </main>
    )

}