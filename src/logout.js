import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useHistory} from 'react-router'

export default function Logout({setUser, url}) {

    let history = useHistory();

    useEffect(() => {
        async function logout() {
            const config = {
                method: "GET",
                credentials: 'include'
            }
            
            
            const address = url + "login/logout.php"
            console.log(address);
            try {
                await fetch(address, config);
                setUser(null); 
                sessionStorage.setItem('kayttaja', null);
                // history.push('/');
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
