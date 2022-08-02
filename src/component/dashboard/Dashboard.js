import React from "react";
import DashboardItem from "./DashboardItem";
import './dashboard.scss';

const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <div className="dashboard__main">
              <div className="dashboard__main__title">
                <img src="../../images/logo.jpg"/>
                <div className="dashboard__main__title__text">
                  <span className='dashboard__main__title__text__main'>DIGITAL</span>
                  <span>Managerment</span>
                </div>
              </div>
              <div className="dashboard__main__menu">
                <ul>
                    <li>
                      <DashboardItem text = "Dashboard" classIcon='fa-solid fa-gear'/>
                    </li>
                    <li>
                      <DashboardItem text = "Calendar"  classIcon='fa-solid fa-calendar'/>
                    </li> 
                    <li>
                      <DashboardItem text = "Analytics"  classIcon='fa-solid fa-chart-line'/>
                    </li> 
                    <li>
                      <DashboardItem text = "Ads"  classIcon='fa-solid fa-headset'/>
                    </li>
                    <li>
                      <DashboardItem text = "Campaigns"  classIcon='fa-solid fa-backpack'/>
                    </li>
                    <li>
                      <DashboardItem text = "Setting"  classIcon='fa-solid fa-calendar'/>
                    </li>
                </ul>
              </div>
            </div>
            <div className="dashboard__account">
              <div className="dashboard__account__user">
                <img src="../images/avt.jpg" alt="avatar"/>
              </div>
              <p>Vanessa</p>
              <span>@vanessasays</span>
              <button>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Sign out
              </button>
            </div>
            

        </div>
    )
}
export default Dashboard;