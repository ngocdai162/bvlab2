import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Dashboard from './component/dashboard/Dashboard';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
       <Sider>
         <Dashboard/>
       </Sider>
       <Layout>
         <Content>Content</Content>
         <Sider>Sider-2</Sider>
       </Layout>
      </Layout>
    </div>
  );
}

export default App;
