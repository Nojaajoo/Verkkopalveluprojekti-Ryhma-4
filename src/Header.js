import React from 'react'
import './Header.css';
import logo from "./img/donitsilogo.png"

export default function Header() {
    return (
        <div className="header container-fluid">
            <div className="row">
                <picture className="col-2">
                <img className="img-fluid p-1" src={logo} alt="logo"/>
                </picture>
                <div className="col-10">
                <p>Header: VALIKKO - LOGO - SEARCH - yms. kirjautuminen, ostoskori... </p>
            </div>
            </div>
            
            
            
            
        </div>
    )
}
