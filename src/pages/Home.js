import React from "react";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
// import Dashboard from './component/dashboard/Dashboard';
import Container from '../component/container/Container';
import PostSetting from '../component/postSetting/PostSetting';
import Dashboard from "../component/dashboard/Dashboard";


const { Header, Footer, Sider, Content } = Layout;
const Home = () => {
    return (
        <div className="Home">
          <Layout>
            <Sider>
               <Dashboard/>
            </Sider>
           <Layout>
              <Content>
                <Container/>
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