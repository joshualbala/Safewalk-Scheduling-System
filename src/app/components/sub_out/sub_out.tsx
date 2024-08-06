'use client'
import React, { useState, useRef, useEffect } from "react";
import {OutProps} from "@/app/components/sub_out/OutProps"
import styles from "@/app/components/sub_out/page.module.css";
export const Sub_Out: React.FC<OutProps> = (props) => {
    return(
    <main className={styles.main}>
    <div className={styles.border}>
        <div className={styles.grid_container}>
            {/* <!-- Create 32 grid items (8 columns * 4 rows) --> */}

            {/* 1 x 1 */}
            <div className={styles.grid_item}></div>

            {/* 1 x 2 */}
            <div className={styles.grid_item}>
                <p className={styles.text}>Monday</p>
            </div>

            {/* 1 x 3 */}
            <div className={styles.grid_item}>
                <p className={styles.text}>Tuesday</p>
            </div>

            {/* 1 x 4 */}
            <div className={styles.grid_item}>
                <p className={styles.text}>Wednesday</p>
            </div>

            {/* 1 x 5 */}
            <div className={styles.grid_item}>
                <p className={styles.text}>Thursday</p>
            </div>

            {/* 1 x 6 */}
            <div className={styles.grid_item}>
                <p className={styles.text}>Friday</p>
            </div>

            {/* 1 x 7 */}
            <div className={styles.grid_item}>
                <p className={styles.text}>Saturday</p>
            </div>

            {/* 1 x 8 */}
            <div className={styles.grid_item}>
                <p className={styles.text}>Sunday</p>
            </div>

            {/* 2 x 1 */}
            <div className={styles.grid_item}>
                <div className={styles.second_text}>9:00PM - 11:00PM</div>
            </div>

            {/* 2 x 2 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 2 x 3 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 2 x 4 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 2 x 5 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 2 x 6 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 2 x 7 */}
            <div className={styles.grid_item}>
                <div className={styles.grayout}></div>
            </div>

            {/* 2 x 8 */}
            <div className={styles.grid_item}>
                <div className={styles.grayout}></div>
            </div>

            {/* 3 x 1 */}
            <div className={styles.grid_item}>
                <div className={styles.second_text}>10:15PM - 12:15AM</div>
            </div>

            {/* 3 x 2 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 3 x 3 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 3 x 4 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 3 x 5 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>  

            {/* 3 x 6 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 3 x 7 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 3 x 8 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 4 x 1 */}
            <div className={styles.grid_item}>
                <div className={styles.second_text}>12:15 PM - 2:15 AM</div>
            </div>

            {/* 4 x 2 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 4 x 3 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 4 x 4 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 4 x 5 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 4 x 6 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 4 x 7 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>

            {/* 4 x 8 */}
            <div className={styles.grid_item}>
                <button className={styles.grid_item}> button </button>
            </div>
        </div>
    </div>
</main>
    )

}