"use client"
import { OutButtonProps, SelectButtonProps } from "./SelectButton.types";
const OutSelectButton: React.FC<OutButtonProps> = (props:OutButtonProps) => {

    function handleClick(){
        if(props.changeList.includes(props.shift)){
            let temp = props.changeList.filter((item) => item != props.shift)
            props.setChangeList(temp)
        } else if (props.prevSubbed.current.includes(props.shift)){
            let temp = [...props.changeList, props.shift]
            props.setChangeList(temp)
        }
        props.sendBoolean(true);
    }
    if (props.changeList.includes(props.shift)){
        return (
            <button onClick= {handleClick} className={props.className + " bg-red-700"}></button>
        )
    } 
    if (props.prevSubbed.current.includes(props.shift)){
        return (<button onClick= {handleClick} className={props.className + " bg-gray-500"}></button>)
    }
    return (
       
       <div className={props.className + " border-2 border-red-700"}></div>
    )
}

export default OutSelectButton;
