import React from "react";
import { SettingOutlined } from '@ant-design/icons';
import './dashboardItem.scss';
const DashboardItem = (props) => {
    return(
        <div className="dashboard-item">
            <SettingOutlined />
            <p>{props.text}</p>
        </div>
    )
}
export default  DashboardItem;