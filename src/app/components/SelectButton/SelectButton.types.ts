import { Dispatch, SetStateAction, MutableRefObject } from "react"

export interface SelectButtonProps {    
    shift:string,
    className?:string,
    changeList:string[] 
    setChangeList: Dispatch<SetStateAction<string[]> >
    sendBoolean: (value: boolean) => void;

}
export interface InButtonProps extends OutButtonProps{
    openShifts:string[]
    setOpenShifts:Dispatch<SetStateAction<string[]>>

}
export interface OutButtonProps extends SelectButtonProps{
    prevSubbed:MutableRefObject<string[]>
}