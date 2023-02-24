import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";

function Header() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar_logo">
                    <img src={LOGO} alt="Logo" />
                </div>
            </NavLink>
            <div className="navbar_nav">
                <NavLink to="/">
                    <div>Accueil</div>
                </NavLink>
                <NavLink to="/about">
                    <div>A propos</div>
                </NavLink>
            </div>
        </nav>
    )
};

export default Header;