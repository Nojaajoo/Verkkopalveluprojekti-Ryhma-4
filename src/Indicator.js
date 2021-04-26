import React from 'react'
import {Link} from 'react-router-dom';

export default function Indicator({user}) {

    if (user===null) {
        return
    } else {
        return (
            <div>
                <p>Olet kirjautunut ylläpitäjänä!</p>
                <Link to="/Logout">Kirjaudu ulos</Link>
            </div>
        )
    }
}
