import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Logout({setUser, url}) {

    useEffect(() => {
        async function logout() {
            const config = {
                method: "GET",
                credentials: 'include'
            }
    
            const address = url + "logout/logout.php"
            console.log(address);
            try {
                await fetch(address, config);
                setUser(null);
            } catch (error) {
                alert(error);
            }
        }
        logout();
        }, [])



    return (
        <div>
            <p>Olet kirjautunut ulos</p>
            <Link to="/login">Kirjaudu uudelleen</Link>
        </div>
    )
}
