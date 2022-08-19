import React from "react";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Container from '../component/container/Container';
import PostSetting from '../component/postSetting/PostSetting';
import Dashboard from "../component/dashboard/Dashboard";
import Campaigns from "../component/container/Campaigns/Campaigns";
import CalendarContent from "../component/container/CalendarContent/CalendarContent";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { dashboardSelector } from "../redux/selectors";
import Ads from "../component/container/Ads/Ads";
import Settings from "../component/container/Settings/Setting";
import Analytics from "../component/container/Analytics/Analytics";
const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
    const dashboardActive = useSelector(dashboardSelector);
  
    return (
        <div className="Home">
          <Layout>
            <Sider>
               <Dashboard/>
            </Sider>
           <Layout>
              <Content style={{
                 overflowY: 'scroll',
                 height: '100vh', 
                 backgroundColor: '#23242a'
              }}>
                 <Container/>
                 {dashboardActive=='calendar' && <CalendarContent/>}
                 {dashboardActive=='analytics' && <Analytics/>}
                 {dashboardActive=='ads' && <Ads/>}
                 {dashboardActive=='campaigns' && <Campaigns/>}
                 {dashboardActive=='setting' && <Settings/>}
              </Content>
              <Sider width="30%"
               style={{ 
               overflow: 'auto',
               height: '100vh',
               }} 
              >
                 <PostSetting/>
              </Sider>
           </Layout>
         </Layout> 
        </div>
    )
}
   
export default Home;