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
                <Link to="/admin"><span className="indA">Ylläpito</span></Link>
                &nbsp;
                <Link to="/Logout"><span className="indA">Kirjaudu ulos</span></Link>
            </div>
    )
    } else {
        return <></>
    }
    
}
