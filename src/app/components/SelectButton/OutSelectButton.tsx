"use client"
import { SelectButtonProps } from "./SelectButton.types";
const OutSelectButton: React.FC<SelectButtonProps> = (props) => {

    function handleClick(){
        if(props.changeList.includes(props.shift)){
            let temp = props.changeList.filter((item) => item != props.shift)
            props.setChangeList(temp)
        } else{
            let temp = [...props.changeList, props.shift]
            props.setChangeList(temp)
        }
        console.log(props.changeList)
    }
    if (props.changeList.includes(props.shift)){
        return (
            <button onClick= {handleClick} className={props.className + "bg-gray-500"}> button </button>
        )
    }
    return (
        <button onClick= {handleClick} className={props.className + "bg-red-700"}> button </button>
    )
    
}

export default OutSelectButton;
