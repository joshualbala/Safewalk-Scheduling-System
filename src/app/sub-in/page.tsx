'use client'
import React, {useContext, createContext, useEffect, useState, useRef} from "react";
import  {Component, setWhichPage} from "@/app/components/header_button";
import {protectRoute } from "../ProtectRoutes";
import {  onStartup, UserInfo,setNewShifts, app, auth } from "../firebaseConfig";
import InSelectButton from "../components/SelectButton/InSelectButton";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function sub_in() {
    protectRoute()
    const [usrDoc, setUsrDoc] = useState<Promise<UserInfo> | null>(null);
    const [openShifts, setOpenShifts] = useState<Promise<string[]> | null> (null)
    setWhichPage(1)
    
    
    const [screenWidth, setScreenWidth] = useState<number>(1000);
    var initList:(string[]) = [];
    let [inList, setInList] = useState(initList);
    let [shifts, setShifts] = useState(initList)
    let prevSubbed = useRef([""]);
    
    useEffect(() => {
    if (usrDoc){
        usrDoc.then((newDoc) => {
            if (newDoc.temp_shifts){
                setInList([...newDoc.temp_shifts])
                prevSubbed.current = newDoc.temp_shifts
            }
        })
    }
    }, [usrDoc])
    
    
    useEffect(()=>{
        if (openShifts){
            openShifts.then((theShifts) =>{
                if (theShifts){
                    setShifts(theShifts)
                }
            })
        }
    }, [openShifts])
    
        
    useEffect(() => {
        const login_list = onAuthStateChanged(auth, (user) => {
            onStartup(user).then((output) => {
                setUsrDoc(output[0] as Promise<UserInfo>)
                setOpenShifts(output[1] as Promise<string[]>)
        })})
        return login_list
    }, [""])
    
    
    
    const [childBoolean, setChildBoolean] = useState(false);

    const [submitButton, setSubmit] = useState<JSX.Element | null>(null);

       useEffect(() => {
            if (childBoolean) {
                setSubmit(
                <button className = "absolute top-l 840:fixed 840:top-h lg:top-f bg-gray-900 p-3 w-96 font-xl rounded-3xl text-white text-center border-8 border-blue-600 hover:bg-blue-900 active:bg-white" 
                    onClick={() => {
                        setNewShifts(inList);}} >Submit</button>    
                );
            }
        }, [childBoolean, inList]);

    const handleCallBack = (value: boolean) => setChildBoolean(value);
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
                <div className="p-5 border-10 border-solid border-blue-700 rounded-3xl">
                <div className="grid grid-cols-8 grid-rows-4 gap-2.5">
                    {/* 1 x 1 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24"></div>
    
                    {/* 1 x 2 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Sunday</p>
                    </div>
    
                    {/* 1 x 3 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Monday</p>
                    </div>
    
                    {/* 1 x 4 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Tuesday</p>
                    </div>
    
                    {/* 1 x 5 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Wednesday</p>
                    </div>
    
                    {/* 1 x 6 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Thursday</p>
                    </div>
    
                    {/* 1 x 7 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Friday</p>
                    </div>
    
                    {/* 1 x 8 */}
                    <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Saturday</p>
                    </div>
    
                    {/* 2 x 1 */}
                    <div className="flex bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6 lg:text-base lg:leading-14">9:00PM - 11:00PM</div>
                    </div>
    
                    {/* 2 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sun9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 2 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="mon9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 2 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="tue9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 2 x 5 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="wed9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 2 x 6 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="thu9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 2 x 7 */}
                    <div className="bg-gray-900 border-2 border-blue-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                
    
                    {/* 2 x 8 */}
                        <div className="bg-gray-900 border-2 border-blue-700 w-18 h-18 lg:w-24 lg:h-24"></div>
    
                    {/* 3 x 1 */}
                    <div className="flex bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6 lg:text-base lg:leading-14">10:15PM - 12:15AM</div>
                    </div>
    
                    {/* 3 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sun10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 3 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="mon10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 3 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="tue10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 3 x 5 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="wed10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
            
    
                    {/* 3 x 6 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="thu10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 3 x 7 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="fri10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 3 x 8 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sat10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 4 x 1 */}
                    <div className="flex bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                        <div className="text-center capitalize font-bold transform translate-y-4 text-xs leading-6 lg:text-base lg:leading-14">12:15 PM - 2:15 AM</div>
                    </div>
    
                    {/* 4 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sun12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 4 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="mon12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 4 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="tue12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 4 x 5 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="wed12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 4 x 6 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="thu12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 4 x 7 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="fri12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
    
                    {/* 4 x 8 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sat12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                </div>
                </div>
                {submitButton}
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
                <div className="p-5 min-w-[540px] border-10 border-solid border-blue-700 rounded-3xl">
                  <div className="grid grid-cols-4 grid-rows-8 gap-2">
                        {/* 1 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                        {/* 1 x 2 */}
                        <div className="flex bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <div className="text-center capitalize font-bold flex items-center text-xs leading-6">9:00PM - 11:00PM</div>
                        </div>
                        {/* 1 x 3 */}
                        <div className="flex bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <div className="text-center capitalize font-bold flex items-center text-xs leading-6">10:15PM - 12:15AM</div>
                        </div>
                        {/* 1 x 4 */}
                        <div className="flex bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <div className="text-center capitalize font-bold flex items-center text-xs leading-6">12:15 PM - 2:15 AM</div>
                        </div>
                        {/* 2 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Sunday</p>
                        </div>
                        {/* 2 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sun9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 2 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sun10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 2 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sun12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                         {/* 3 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Monday</p>
                        </div>
                        {/* 3 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="mon9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 3 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="mon10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 3 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="mon12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 4 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Tuesday</p>
                        </div>
                        {/* 4 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="tue9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 4 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="tue10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 4 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="tue12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 5 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Wednesday</p>
                        </div>
                        {/* 5 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="wed9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 5 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="wed10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 5 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="wed12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 6 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Thursday</p>
                        </div>
                        {/* 6 x 2 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="thu9" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 6 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="thu10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 6 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="thu12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 7 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Friday</p>
                        </div>
                        {/* 7 x 2 */}
                        <div className="bg-gray-900 border-2 border-blue-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                        {/* 7 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="fri10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 7 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="fri12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 8 x 1 */}
                        <div className="bg-blue-700 w-18 h-18 lg:w-24 lg:h-24">
                            <p className="text-center capitalize font-bold text-xs leading-75 lg:leading-100 lg:text-base">Saturday</p>
                        </div>
                        {/* 8 x 2 */}
                        <div className="bg-gray-900 border-2 border-blue-700 w-18 h-18 lg:w-24 lg:h-24"></div>
                        {/* 8 x 3 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sat10" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                        {/* 8 x 4 */}
                        <InSelectButton sendBoolean={handleCallBack} prevSubbed={prevSubbed} openShifts= {shifts} setOpenShifts={setShifts} shift="sat12" changeList={inList} setChangeList={setInList} className="w-18 h-18 lg:w-24 lg:h-24 hover:bg-blue-900 active:bg-white"/>
                    </div>
            </div>
            {submitButton}
            </main>
        </>
        )
    }
}

