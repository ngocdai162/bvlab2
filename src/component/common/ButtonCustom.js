import React from "react";
import './buttonCustom.scss';
const ButtonCustom = (props) => {
    return(
        <div className="button-custom">
            <button>
               <span>{props.text}</span>
            </button>
        </div>
    )
}
export default ButtonCustom;