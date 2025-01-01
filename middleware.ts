// import { NextResponse } from "next/server";
// import { FirebaseApp } from "firebase/app";
// import { getSignIn } from "@/app/sign-in/page";

// export function middleware(request: { url: string | URL | undefined; }){
//     console.log(getSignIn);
//     if(!getSignIn()){
//         console.log("Sign", getSignIn)
//         return NextResponse.redirect(
//             new URL('/', request.url)
//         )
//     }

//     return NextResponse.next();
// }