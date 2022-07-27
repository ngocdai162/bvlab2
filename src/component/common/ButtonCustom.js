import React from "react";
const ButtonCustom = (props) => {
    return(
        <div className="button-custom">
            <button>
               <span>{props.text}</span>
            </button>
        </div>
    )
}
export default ButtonCustom