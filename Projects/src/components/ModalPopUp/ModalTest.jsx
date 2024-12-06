import React, { useState } from "react";
import ModalPopUp from "./ModalPopUp";
//Parent
export default function ModalTest(){

    const [showModal, setShowModal] = useState(false);
    function handleToggleModalPop(){
        setShowModal(!showModal)
    }

    function onClose(){
        setShowModal(false)
    }

    
    return (<div>
        <button onClick={handleToggleModalPop}>open modal popup</button>
        {
            showModal && <ModalPopUp onClose={onClose} 
            body={<p>Customized body</p>}/>
        }
    </div>)
}