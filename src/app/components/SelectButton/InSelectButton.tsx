import { InButtonProps } from "./SelectButton.types";
import { usrDoc } from "@/app/firebaseConfig";

const InSelectButton: React.FC<InButtonProps> = (props:InButtonProps) => {

    function handleClick(){
        if(props.changeList.includes(props.shift) && !props.prevSubbed.current.includes(props.shift)){
            let temp = props.changeList.filter((item) => item != props.shift)
            props.setChangeList(temp)
        } else if (props.changeList){
            let temp = [...props.changeList, props.shift]
            props.setChangeList(temp)
        }
        
    }
    if ((props.changeList.includes(props.shift)) || (!props.openShifts.includes(props.shift))){
        return (
            <button onClick= {handleClick} className={props.className + " bg-gray-500"}> button </button>
        )
    }
    return (
        <button onClick= {handleClick} className={props.className + " bg-blue-700"}> button </button>
    )
    
}

export default InSelectButton;
