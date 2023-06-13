import React from "react";
import "../components/Header.css"
import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "../Assets/logo.png"

export const Header = () => {
    return(
        <div className="Header">
            
             <img src={logo} alt="" />
            
            <Link to="/">Telefones</Link>
            <Link to="/cart">Sua Escolha:</Link>
        </div>
    )
}