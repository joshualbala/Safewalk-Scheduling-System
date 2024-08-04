import {Hour} from '@/app/components/hours'
import { Dispatch, SetStateAction } from "react";

export interface OutProps{
    className?:string
    curSubs?:Hour[] // this will be the react hook variable for the subs
    subSetter?: Dispatch<SetStateAction<string | null>>/// this will be setting the react hook variable on button presses

}