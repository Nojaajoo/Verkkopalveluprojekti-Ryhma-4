import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useHistory} from 'react-router'
import './login.css';

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
                sessionStorage.setItem('kayttaja', null);
                setUser(null); 
                // history.push('/');
            } catch (error) {
                alert(error);
            }
        }
        logout();
        }, [])



    return (
        <div className="container text-center pt-5 logoutPage">
            <h3>Olet kirjautunut ulos</h3>
            <Link to="/login" className="btn loginButton pt-2">Kirjaudu uudelleen</Link>
        </div>
    )
}
