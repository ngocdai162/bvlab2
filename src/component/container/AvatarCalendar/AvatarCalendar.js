import React from "react";
import './avatarCalendar.scss';
const AvatarCalendar = (props) => {
    return(
        <div className="avt-calendar">
            <img src={props.srcImg} alt=""/>
        </div>
    )
}
export default AvatarCalendar;