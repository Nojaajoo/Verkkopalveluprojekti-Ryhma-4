import React from 'react'
import {Link} from 'react-router-dom';
import './login.css';

export default function Indicator({user}) {


    let check = sessionStorage.getItem('kayttaja');
    check = JSON.parse(check);
    

    if (check != null) {
        return (
            <div>
                <p>Olet kirjautunut ylläpitäjänä!</p>
                <Link to="/admin">Ylläpito</Link>
                &nbsp;
                <Link to="/Logout">Kirjaudu ulos</Link>
            </div>
    )
    } else {
        return <p></p>
    }
    
}
