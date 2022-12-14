import React from "react";
import './avatarIcon.scss';
const AvatarIcon = (props) => {
    return(
        <div className="avatar">
            <div className="avatar__img">
              <img src={props.imgSrc} alt=""/>
            </div>
            <div className="avatar__icon">
              {props.icon()}
            </div>
            
        </div>
    )
}
export default AvatarIcon;