import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router';

export default function Login({url, setUser, user}) {
    const [username, setUsername] = useState('donitsiadmin');
    const [password, setPassword] = useState('donitsi123');

    
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
            history.push('/admin');
            let r = user;
            console.log(r);
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
                <div>
                    <button className="btn btn-primary">Kirjaudu sisään!</button>
                </div>
            </form>
        </div>
    )
}
