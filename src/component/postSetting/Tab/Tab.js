import React from "react";
import { CloseSquareOutlined } from '@ant-design/icons';
import './tab.scss';
const Tab = (props) => {
    return(
        <div className="tab">
            <span>{props.text}</span>
            <CloseSquareOutlined/>
        </div>
    )
}
export default Tab;