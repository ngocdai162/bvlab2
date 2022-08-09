import React from "react";
import { useState } from "react";
import DashboardItem from "./DashboardItem";
import './dashboard.scss';
import { Button, Menu } from 'antd';
import { MenuOutlined,CalendarOutlined,LineChartOutlined,DotChartOutlined,FieldTimeOutlined,SettingOutlined } from '@ant-design/icons';

const Dashboard = (props) => {
  const getItem=(label, key, icon) =>{
    return {
      key,
      icon,
      label,
    };
  }
  const items = [
    getItem('Dashboard', '1',<MenuOutlined />),
    getItem('Calendar', '2',<CalendarOutlined /> ),
    getItem('Analytics', '3',<LineChartOutlined /> ),
    getItem('Ads', '4',<DotChartOutlined />),
    getItem('Campaigns', '5',<FieldTimeOutlined /> ),
    getItem('Setting', '6',<SettingOutlined /> ),
    
  ]
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
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
                <Menu
                defaultSelectedKeys={['2']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                />
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