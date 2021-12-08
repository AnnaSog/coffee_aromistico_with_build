import {  NavLink } from "react-router-dom";

import "./menu.css";
import logo  from "./Logo.png";

const Menu = () => {
    return(
        <div className="menu">
            <img src={logo} alt="logo_coffee" />
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} to='/' className="menu_item" >Coffee house</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} to='/OurCoffee' className="menu_item" >Our coffee</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} to='/ForOurPleasure' className="menu_item" >For your pleasure</NavLink>
    
        </div>
    )
}

export default Menu;