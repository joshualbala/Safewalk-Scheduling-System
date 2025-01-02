import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

export const protectRoute = () =>{
     const router = useRouter();
        try{
            var isSignedIn = getAuth().currentUser;
        } catch(e){
            isSignedIn = null;
        }
      
        useEffect(() => {
          if (!isSignedIn) {
            router.push("/sign-in");
          } 
        }, [isSignedIn, router]);
      
        return isSignedIn;
}