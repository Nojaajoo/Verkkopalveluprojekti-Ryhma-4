import React from 'react';
import logo from "./img/donitsilogo.png";

export default function NotFound() {
    return (
        <div style={{textAlign: "center"}} >
            <img src={logo} alt="logo" width="200" className="d-inline-block m-5" />
            <p><b>SIVUA EI LÖYTYNYT</b></p>
        </div>
    )
}
