import React from "react";
import ReactDom from "react-dom";

import "./styles/Modal.css";

const modalNode =  document.querySelector("#modal")

function Modal(props) {
    if(!props.Visible) {
        return "";
    }
    
    return ReactDom.createPortal(
            <React.Fragment>
                <div className="overload"></div>
                <section className="ModalContainer">
                    <button className="close" onClick={props.handleModal}>x</button>
                    <div className="ModalContainer_info">
                        {props.children}
                    </div>
                </section>
            </React.Fragment>
            , modalNode)
}

export default Modal