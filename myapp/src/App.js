import './App.css';
import {BrowserRouter as Router,Route,Routes,NavLink} from "react-router-dom"
import Home from './component/Home/Home';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Contact from './component/Contact/Contact';
import Createacnt from './component/CreateAccount/Createacnt';
import Services from './component/Services/Services';
import Login from './component/Login/Login';
import Verification from './component/Verification/Verification';
import Navbar from './component/Navbar/Navbar';
function App() {
  return (
  <div className="app">
    <Router>
       <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/About'/>
        <Route element={<Shop/>} path='/Shop'/>
        <Route element={<Services/>} path='Services'/>
        <Route element={<Contact/>} path='/Contact'/>
        <Route element={<Createacnt/>} path='/Create'/>
        <Route element={<Login/>} path='/Login'/>
        <Route element={<Verification/>} path='/Verification'/>
      </Routes>
    </Router>
    
  </div>
  );
}

export default App;
