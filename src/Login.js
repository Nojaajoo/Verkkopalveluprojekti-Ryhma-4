import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router';
import './login.css'

export default function Login({url, setUser, user}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    let history = useHistory();

    async function login(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const config = {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Accept' : 'application/json',
            },
            body: formData
          }
      
          const response = await fetch(url + 'login/' + 'login.php', config);
          const json = await response.json();

        if(response.ok) {
            setUser(json);
            sessionStorage.setItem('kayttaja', JSON.stringify(json));            
            history.push('/admin');
        } else {
            alert("Error logging in.")
        }



    }


    return (
        <div className="container text-center">
            <h3>Kirjaudu</h3>
            <form onSubmit={login}>
                <div className="form-group">
                    <label for="kayttajatunnus">Username</label>
                    <input id="kayttajatunnus" className="form-control" placeholder="Käyttäjätunnus" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="salasana">Password</label>
                    <input id="salasana" className="form-control" placeholder="Salasana" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="pt-2">
                    <button className="btn loginButton">Kirjaudu sisään!</button>
                </div>
            </form>
        </div>
    )
}
