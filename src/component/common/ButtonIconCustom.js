import React from "react";
import { DownloadOutlined } from '@ant-design/icons';
const ButtonIconCustom = (props) => {
    return(
        <div className="button-custom">
            <button>
               <Button type="primary" icon={<DownloadOutlined />}  />
               <span>{props.text}</span>
            </button>
        </div>
    )
}
export default ButtonIconCustom;