import React from 'react'
import {Link} from 'react-router-dom';

export default function Indicator({user}) {


    
    

    if (sessionStorage.getItem('kayttaja') != null) {
        return (
            <div>
                <p>Olet kirjautunut ylläpitäjänä!</p>
                <Link to="/Logout">Kirjaudu ulos</Link>
            </div>
    )
    } else {
        return <p></p>
    }
    
}
