import React from 'react'
import {Redirect} from 'react-router'
import {Link} from 'react-router-dom'


export default function Info({user}) {

    if (sessionStorage.getItem('kayttaja' != null)) {
        return (
            <div>
            <p>Home</p>
            <Link to="/logout">Logout</Link>
            </div>
        )
        
    } else {

    return <Redirect to="/login" />
    }
}
