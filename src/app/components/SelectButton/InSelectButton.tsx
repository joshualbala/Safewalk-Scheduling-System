import { InButtonProps } from "./SelectButton.types";
const InSelectButton: React.FC<InButtonProps> = (props:InButtonProps) => {

    function handleClick(){
        if(props.changeList.includes(props.shift) && !props.prevSubbed.current.includes(props.shift)){
            let temp = props.changeList.filter((item) => item != props.shift)
            props.setChangeList(temp)
            
        } else if (props.changeList){
            let temp = [...props.changeList, props.shift]
            props.setChangeList(temp)
        }
        props.sendBoolean(true);
    }
    if (props.changeList.includes(props.shift) && props.prevSubbed.current.includes(props.shift)){
       return( <button onClick= {handleClick} className={props.className + " border-2 border-blue-700"}></button>)
       
    }
    if ((props.changeList.includes(props.shift)) || (!props.openShifts.includes(props.shift))){
        return (<button onClick= {handleClick} className={props.className + " bg-gray-500"}></button>)
    }
   
    return (
        <button onClick= {handleClick} className={props.className + " bg-blue-700"}></button>
    )
    
}

export default InSelectButton;
