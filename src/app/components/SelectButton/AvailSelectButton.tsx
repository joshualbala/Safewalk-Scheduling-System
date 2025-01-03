import { SelectButtonProps } from "./SelectButton.types";
import { useState } from "react";



const AvailSelectButton: React.FC<SelectButtonProps> = (props) => {
    const [submit, setSubmit] = useState(false);
    function handleClick(){
        console.log(props.changeList)
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
            <button onClick= {handleClick} className={props.className + " bg-gray-500"}> button </button>
        )
    }
    return (
        <button onClick= {handleClick} className={props.className + " bg-green-700"}> button </button>
    )
    
}

export default AvailSelectButton;
