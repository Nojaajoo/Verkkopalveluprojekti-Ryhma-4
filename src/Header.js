import React from 'react'
import './Header.css';
import logo from "./img/donitsilogo.png"

export default function Header() {
    return (
        <div className="header container-fluid">
            <div className="row">
                <picture className="col-5 col-sm-4 col-md-3 col-lg-1">
                <img className="img-fluid p-1" src={logo} alt="logo"/>
                </picture>
                <div className="col-7 col-sm-8 col-md-9 col-lg-11">
                <p>Header: VALIKKO - LOGO - SEARCH - yms. kirjautuminen, ostoskori... </p>
            </div>
            </div>
            
            
            
            
        </div>
    )
}
