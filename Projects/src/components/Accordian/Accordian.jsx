import { useState } from "react";
import {data} from './data.js'

export default function Accordian(){

    const [selected, setSelected] = useState(null)
    // for btn purpose
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])



    const handleSingleSelection = (getCurrentId)=>{
        setSelected(getCurrentId === selected ? null: getCurrentId)
    }

    const handleMultiSelection = (getCurrentId)=>{
        let copyMultiple = [...multiple]
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)
        
        setMultiple(copyMultiple)
       
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Multiple selection</button>
            <div className="accordian">
                {
                    data?.length > 0 ? 
                    data.map( (dataItem)=> <div className="item">

                        <div onClick={
                            enableMultiSelection ?
                            () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.qns}</h3>
                            <span>+</span>
                        </div>  
                        {
                            enableMultiSelection ?
                            multiple.indexOf(dataItem.id) !== -1 &&
                            (<div className="content">
                                {dataItem.ans}
                            </div> )
                            : selected === dataItem.id &&
                            (<div className="content">
                                {dataItem.ans}
                            </div>)
                        }
                    </div> ) 
                    : <div>No data found</div>
                }

            </div>
        </div>
    )
}