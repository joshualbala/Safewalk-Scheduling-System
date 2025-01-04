import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const protectRoute = () =>{
     const router = useRouter();
      
        useEffect(() => {
          try{
            getAuth().onAuthStateChanged(function(user) {
              //console.log("get auth exists")
              if (!user) {
                router.push("/sign-in");
              } 
            });
          }catch(e){
          router.push("/sign-in");
        }
        }, []);
}