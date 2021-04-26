import React from 'react'
import {Redirect} from 'react-router'
import {Link} from 'react-router-dom'


export default function Info({user}) {

    if (user===null) {
        return <Redirect to="/login" />
    } else {

    return (
        <div>
        <p>Home</p>
        <Link to="/logout">Logout</Link>
        </div>
    )
    }
}
