import React from "react";
import { CloseSquareOutlined } from '@ant-design/icons';
const Tab = (props) => {
    return(
        <div className="avt">
            <img src={props.srcImg} alt=""/>
            <CloseSquareOutlined/>
        </div>
    )
}
export default Tab;