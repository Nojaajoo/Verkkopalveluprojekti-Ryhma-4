import React from 'react'
import {Link} from 'react-router-dom';

export default function Indicator({user}) {
    console.log(user);

    if (!user) {
        return ( <div><p>tyhjä</p></div>)
    } else {
        return (
                <div>
                    <p>Olet kirjautunut ylläpitäjänä!</p>
                    <Link to="/Logout">Kirjaudu ulos</Link>
                </div>
            
        )
    }
    
}
