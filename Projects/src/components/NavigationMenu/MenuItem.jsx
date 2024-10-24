import { useState } from "react";
import MenuList from "./MenuList";
import {FaMinus, FaPlus} from "react-icons/fa"




export default function MenuItem({item}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren, //copy the existing state, ensuring that other properties of the object remain unchanged
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
            //  This inverts the current boolean value for the key getCurrentLabel. If it was true, it becomes false, and vice versa.
        })
    }

    return <li>
        <div>
        <p>{item.label}</p>
        {
            item && item.children && item.children.length > 0 ?
            <span onClick={()=> handleToggleChildren(item.label)}>
                {
                    displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />
                }
            </span> : null
        }
        </div>

        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? 
            <MenuList list={item.children}/>
            : null
        }
    </li>
}