"use client"
import {Dispatch, SetStateAction, useState, useEffect } from "react";
import  {Component} from "@/app/components/header_button";
import { setWhichPage } from "@/app/components/header_button";
import { protectRoute } from "../ProtectRoutes";
import { usrDoc } from "../firebaseConfig";
import AvailSelectButton from "../components/SelectButton/AvailSelectButton";

export default function availability() {
    // if(!protectRoute()){
    //      return null;
    // }
    setWhichPage(3);
    var initList:(string[]) = [""];
    let [availList, setAvailList] = useState(initList);
    async function setInit(){
        new Promise(()=>{
            while(!usrDoc);
        })
        .then(()=>{
            if (usrDoc.availability != undefined){
                setAvailList(usrDoc.availability)
            }
        })
    }
    //setInit()
    
    const [screenWidth, setScreenWidth] = useState<number>(1000);

    useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
    }, []);

    if(screenWidth > 840){
        return(
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="header" ><Component/></div>
            <main className="flex flex-col justify-between items-center min-h-screen p-24 bg-gray-900">
                <div className="p-5 border-10 border-solid border-green-700 rounded-3xl">
                <div className="grid grid-cols-8 grid-rows-4 gap-2.5">
                    {/* 1 x 1 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24"></div>
    
                    {/* 1 x 2 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Sunday</p>
                    </div>
    
                    {/* 1 x 3 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Monday</p>
                    </div>
    
                    {/* 1 x 4 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Tuesday</p>
                    </div>
    
                    {/* 1 x 5 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Wednesday</p>
                    </div>
    
                    {/* 1 x 6 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Thursday</p>
                    </div>
    
                    {/* 1 x 7 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Friday</p>
                    </div>
    
                    {/* 1 x 8 */}
                    <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Saturday</p>
                    </div>
    
                    {/* 2 x 1 */}
                    <div className="flex bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6 lg:text-base lg:leading-14">9:00PM - 11:00PM</div>
                    </div>
    
                    {/* 2 x 2 */}
                        <AvailSelectButton shift="sun9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 2 x 3 */}
                        <AvailSelectButton shift="mon9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 2 x 4 */}
                        <AvailSelectButton shift="tue9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 2 x 5 */}
                        <AvailSelectButton shift="wed9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 2 x 6 */}
                        <AvailSelectButton shift="thu9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 2 x 7 */}
                    <div className="bg-gray-900 border-2 border-green-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                
    
                    {/* 2 x 8 */}
                        <div className="bg-gray-900 border-2 border-green-700 w-18 h-18 lg:w-24 lg:h-24"></div>
    
                    {/* 3 x 1 */}
                    <div className="flex bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6 lg:text-base lg:leading-14">10:15PM - 12:15AM</div>
                    </div>
    
                    {/* 3 x 2 */}
                        <AvailSelectButton shift="sun10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 3 x 3 */}
                        <AvailSelectButton shift="mon10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 3 x 4 */}
                        <AvailSelectButton shift="tue10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 3 x 5 */}
                        <AvailSelectButton shift="wed10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
            
    
                    {/* 3 x 6 */}
                        <AvailSelectButton shift="thu10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 3 x 7 */}
                        <AvailSelectButton shift="fri10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 3 x 8 */}
                        <AvailSelectButton shift="sat10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 4 x 1 */}
                    <div className="flex bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                        <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6 lg:text-base lg:leading-14">12:15 PM - 2:15 AM</div>
                    </div>
    
                    {/* 4 x 2 */}
                        <AvailSelectButton shift="sun12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 4 x 3 */}
                        <AvailSelectButton shift="mon12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 4 x 4 */}
                        <AvailSelectButton shift="tue12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 4 x 5 */}
                        <AvailSelectButton shift="wed12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 4 x 6 */}
                        <AvailSelectButton shift="thu12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 4 x 7 */}
                        <AvailSelectButton shift="fri12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
    
                    {/* 4 x 8 */}
                        <AvailSelectButton shift="sat12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                </div>
                </div>
            </main>
            </>
        )
    }
    else{
        return(    
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="header" ><Component/></div>
            <main className="flex flex-col justify-between items-center min-h-screen p-24 bg-gray-900 min-w-540">
                <div className="p-5 min-w-[540px] border-10 border-solid border-green-700 rounded-3xl">
                  <div className="grid grid-cols-4 grid-rows-8 gap-2">
                        {/* 1 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                        {/* 1 x 2 */}
                        <div className="flex bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6">9:00PM - 11:00PM</div>
                        </div>
                        {/* 1 x 3 */}
                        <div className="flex bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6">10:15PM - 12:15AM</div>
                        </div>
                        {/* 1 x 4 */}
                        <div className="flex bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6">12:15 PM - 2:15 AM</div>
                        </div>
                        {/* 2 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Sunday</p>
                        </div>
                        {/* 2 x 2 */}
                        <AvailSelectButton shift="sun9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 2 x 3 */}
                        <AvailSelectButton shift="sun10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 2 x 4 */}
                        <AvailSelectButton shift="sun12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                         {/* 3 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Monday</p>
                        </div>
                        {/* 3 x 2 */}
                        <AvailSelectButton shift="mon9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 3 x 3 */}
                        <AvailSelectButton shift="mon10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 3 x 4 */}
                        <AvailSelectButton shift="mon12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 4 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Tuesday</p>
                        </div>
                        {/* 4 x 2 */}
                        <AvailSelectButton shift="tue9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 4 x 3 */}
                        <AvailSelectButton shift="tue10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 4 x 4 */}
                        <AvailSelectButton shift="tue12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 5 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Wednesday</p>
                        </div>
                        {/* 5 x 2 */}
                        <AvailSelectButton shift="wed9" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 5 x 3 */}
                        <AvailSelectButton shift="wed10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 5 x 4 */}
                        <AvailSelectButton shift="wed12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 6 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Thursday</p>
                        </div>
                        {/* 6 x 2 */}
                        <AvailSelectButton shift="thu10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 6 x 3 */}
                        <AvailSelectButton shift="thu10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 6 x 4 */}
                        <AvailSelectButton shift="thu12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 7 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Friday</p>
                        </div>
                        {/* 7 x 2 */}
                        <div className="bg-gray-900 border-2 border-green-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                        {/* 7 x 3 */}
                        <AvailSelectButton shift="fri10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 7 x 4 */}
                        <AvailSelectButton shift="fri12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 8 x 1 */}
                        <div className="bg-green-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Saturday</p>
                        </div>
                        {/* 8 x 2 */}
                        <div className="bg-gray-900 border-2 border-green-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                        {/* 8 x 3 */}
                        <AvailSelectButton shift="sat10" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                        {/* 8 x 4 */}
                        <AvailSelectButton shift="sat12" changeList={availList} setChangeList={setAvailList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-green-900 active:bg-white"/>
                    </div>
            </div>
            </main>
        </>
        )
    }
}

