import { NavLink } from "react-router-dom";
import "./navbar.css";
import brandlogo from "../images/brandlogo.png"


let Navbar=()=>{
    return(
        <div className="navbar navbar-expand-lg fixed-top">
            <div className="container container-div">
            <div className="brand-logo-div">
             <img src={brandlogo} className="brand-logo"/>
            </div>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/About" className="nav-link">About us</NavLink></li>
                    <li className="nav-item"><NavLink to="/Services"className="nav-link">Services</NavLink></li>
                    <li className="nav-item"><NavLink to="/Shop" className="nav-link">Shop</NavLink></li>
                    <li className="nav-item" ><NavLink to="/Contact" className="nav-link">Contact us</NavLink></li>
                </ul>
            </div>
            <div>
                <ul className="navbar-nav">
                <li className="nav-item"><NavLink to="/" className="nav-link"><i className="bi bi-search"></i></NavLink></li>
                <li className="nav-item"><NavLink to="/" className="nav-link"><i className="bi bi-person-circle"></i></NavLink></li>
                <li className="nav-item"><NavLink to="/" className="nav-link"><i className="bi bi-cart"></i></NavLink></li>
                </ul>
            </div>
            </div>
            
           
        </div>
    )
}
export default Navbar