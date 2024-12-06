import React from "react";
import './modal.css'
//child
export default function ModalPopUp({id, header, body, footer, onClose}){//props
    return <div id={id || 'Modal'} className="modal">
        <div className="content">
            {/* //Header content */}
            <div className="header">
                <span onClick={onClose} className="close-modal-icon"> &times; </span>
                <h2>{header ? header : 'Header'}</h2>
            </div>
            {/* //Body content */}
            <div className="body">
                {
                body ? (body): (
                        <p>This is our modal body</p>
                    )
                    
                }
            </div>
            {/* //Footer content */}
            <div className="footer">
                    {
                        footer ? footer : <h2>footer</h2>
                    }
            </div>

        </div>
        
    </div>
}