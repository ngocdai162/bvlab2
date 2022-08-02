import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Dashboard from './component/dashboard/Dashboard';
import Container from './component/container/Container';
import PostSetting from './component/postSetting/PostSetting';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
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
  );
}

export default App;
