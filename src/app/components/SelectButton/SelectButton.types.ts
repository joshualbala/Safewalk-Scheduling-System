import { Dispatch, SetStateAction } from "react"

export interface SelectButtonProps {    
    shift:string,
    className?:string,
    changeList:string[] 
    setChangeList: Dispatch<SetStateAction<string[]> >
}