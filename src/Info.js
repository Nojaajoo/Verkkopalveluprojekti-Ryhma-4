import React from 'react'
import {Redirect} from 'react-router'
import {Link} from 'react-router-dom'


export default function Info({user}) {

    if (user===null) {
        return <Redirect to="/login" />
    }

    return (
        <div>
        <p>Home</p>
        <Link to="/">Logout</Link>
    </div>
    )
}
