// Import the functions you need from the SDKs you need
import { unsubscribe } from "diagnostics_channel";
import {initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, 
  collection, onSnapshot, doc, getDoc, getDocs, //getting data 
query, where, updateDoc,
getDocFromServer,
DocumentReference,
DocumentData} //
 from "firebase/firestore";
import availability from "./availability/page";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, 
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const db = getFirestore();

const colRef = collection(db, 'Users')


interface UserInfo {
  availability?:string[],
  email?:string,
  perm_shifts?:string[],
  temp_shifts?:string[],
}
var curUsr = auth.currentUser

var usrDoc:Promise<UserInfo>;



var shifts:Map<string, number> = new Map(
  [["mon9",4],
  ["tue9",4],
  ["wed9",4],
  ["thu9",4],
  ["sun9",4],
  ["mon10",4],
  ["tue10",4],
  ["wed10",4],
  ["thu10",4],
  ["fri10",4],
  ["sat10",4],
  ["sun10",4],
  ["mon12",4],
  ["tue12",4],
  ["wed12",4],
  ["thu12",4],
  ["fri12",4],
  ["sat12",4],
  ["sun12",4]]
)

var openShifts:Promise<string[]>;
var usrDocRef:DocumentReference<DocumentData, DocumentData>;
export async function onStartup(){
  onAuthStateChanged(auth, (user)=>{
  
  curUsr = user
  if (user && !usrDoc){
    usrDocRef = doc(db, 'Users', user.uid)
    try{
        usrDoc = Promise.resolve(getDoc(usrDocRef).then((docSnap) => {
          const res = docSnap.data() as UserInfo;
          return res
          
        })
        
      )
    }catch (error){
      console.log("server call failed")
    }
    
  }else if (!user){
    console.log("what is happening")
  }
  })
  

  openShifts = getDocs(colRef)
  .then((snapshot) => {
    let tempShift = new Map(shifts)
    snapshot.docs.forEach(doc=>
    {
      var curDock:UserInfo = doc.data() as UserInfo
      if (curDock.temp_shifts){
      curDock.temp_shifts.forEach(shift => {
        var curLeft = tempShift.get(shift)
        if (curLeft){
          tempShift.set(shift, curLeft - 1)
        }
        
      })
    }
  }
    )
    var ret:string[]= [];
    tempShift.forEach((value, key) =>{
      if (value != 0){
        ret.push(key)
      }
    })
    return ret;
  })
}

export function setNewAvail(newList:string[]){
    usrDoc.then((newDoc) => {
      updateDoc(usrDocRef, {availability:newList})
      .then(() =>{
        console.log("DONE!")
      })
        
    })
}

export function setNewShifts(newList:string[]){
  
 
    usrDoc.then((newDoc) => {
      updateDoc(usrDocRef, {temp_shifts:newList})
      .then(() =>{
        console.log("DONE!")
      })
    })

 
}

export {app, auth, usrDoc, openShifts}