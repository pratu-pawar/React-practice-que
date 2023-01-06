import React from "react";
import {NavLink} from "react-router-dom";
import "../App.css";

const Navbar = ()=>{ 
    return( 
        <div> 
            <ul> 
                <NavLink  className ="navlink" to="/"><li>Home</li></NavLink>
                <NavLink  className ="navlink" to="/about"><li> About</li></NavLink>
            </ul>

        </div>
    )
};

export default Navbar;