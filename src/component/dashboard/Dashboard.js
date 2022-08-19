import React, { useEffect } from "react";
import { useState } from "react";
import DashboardItem from "./DashboardItem";
import './dashboard.scss';
import { Button, Menu } from 'antd';
import { MenuOutlined,CalendarOutlined,LineChartOutlined,DotChartOutlined,FieldTimeOutlined,SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { dashboardSelector } from "../../redux/selectors";
import { activeTab } from "../../redux/slice/dashboardSlice";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const dashboardActive = useSelector(dashboardSelector);
  console.log(dashboardActive)
  const getItem=(label, key, icon) =>{
    return {
      key,
      icon,
      label,
    };
  }
  const items = [
    getItem('Menu', 'Menu',<MenuOutlined />),
    getItem('Calendar', 'calendar',<CalendarOutlined /> ),
    getItem('Analytics', 'analytics',<LineChartOutlined /> ),
    getItem('Ads', 'ads',<DotChartOutlined />),
    getItem('Campaigns', 'campaigns',<FieldTimeOutlined /> ),
    getItem('Setting', 'setting',<SettingOutlined /> ),
  ]
  const handleClickMenu = (info) => {
    console.log(info.key)
    dispatch(activeTab(info.key))
  }
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = (e) => {
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
                defaultSelectedKeys={['menu']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                onClick = {handleClickMenu}
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