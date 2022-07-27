import React from "react";
import DashboardItem from "./DashboardItem";

const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <div className="dashboard__title">
                <img src="../../images/logo.jpg"/>
                <div className="dashboard__title__text">
                  <p>DIGITAL</p>
                  <span>Managerment</span>
                </div>
            </div>
            <div className="dashboard__menu">
               <DashboardItem text = "Setting"/>
            </div>
        </div>
    )
}
export default Dashboard;