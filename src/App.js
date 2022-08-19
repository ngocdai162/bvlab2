import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { acceptUser } from './redux/slice/isUser';
import { useSelector } from 'react-redux';
import { isUserSelector } from './redux/selectors';


function App() {
  const isUser = useSelector(isUserSelector);
  console.log(isUser);
  return (
   
    <BrowserRouter>
          <Routes>
            <Route path='' element = {<LoginPage/>}/>
            {isUser && <Route path='/home' element={<Home/>}/>}
          </Routes>
    </BrowserRouter>
  );
}

export default App;

