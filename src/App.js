import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
  
  return (
   
    <BrowserRouter>
      
          <Routes>
            <Route path='' element = {<LoginPage/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        
    </BrowserRouter>
  );
}

export default App;

