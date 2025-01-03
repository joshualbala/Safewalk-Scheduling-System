import { SelectButtonProps } from "./SelectButton.types";


const AvailSelectButton: React.FC<SelectButtonProps> = (props:SelectButtonProps) => {

    function handleClick(){
        console.log(props.changeList)
        if(props.changeList && props.changeList.includes(props.shift)){
            let temp = props.changeList.filter((item) => item != props.shift)
            props.setChangeList(temp)
        } else if (props.changeList){
            let temp = [...props.changeList, props.shift]
            props.setChangeList(temp)
        }
        
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
