import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Logout({setUser, url}) {

    useEffect(() => {
        async function logout() {
            const config = {
                method: "GET",
                credentials: 'include'
            }
    
            
            try {
                await fetch(url + "logout.php", config);
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
