import { SelectButtonProps } from "./SelectButton.types";
import { useState } from "react";



const AvailSelectButton: React.FC<SelectButtonProps> = (props) => {
    function handleClick(){
        if(props.changeList && props.changeList.includes(props.shift)){
            let temp = props.changeList.filter((item) => item != props.shift)
            props.setChangeList(temp)
        } else if (props.changeList){
            let temp = [...props.changeList, props.shift]
            props.setChangeList(temp)
        }
        props.sendBoolean(true);
    }
    if (props.changeList && props.changeList.includes(props.shift)){
        return (
            <button onClick= {handleClick} className={props.className + " bg-green-700"}> </button>
        )
    }
    return (
        <button onClick= {handleClick} className={props.className + " bg-gray-900 text-8xl text-center leading-3 font-cool text-green-700"}> X </button>
    )
    
}

export default AvailSelectButton;
