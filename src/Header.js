import React from 'react';
import './Header.css';
import logo from "./img/donitsilogo.png";
import {useState,useEffect} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';


export default function Header({setCategory}) {
    const [categories, setCategories] = useState([])
    const url = "http://localhost/donitsikauppa/";
    useEffect(async() => {
        try {
            const response = await fetch(url + 'products/getcategories.php');
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
                setCategory(json[0]);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [])

    
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navbarContent">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo" width="120" className="d-inline-block" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {categories.map(tuoteryhma => (
                            <li key={tuoteryhma.trnro}>
                                <Router>
                                <Link
                                    className="dropdown-item"
                                    to={{
                                        pathname: '/',
                                        state: {
                                            trnro: tuoteryhma.trnro,
                                            trnimi: tuoteryhma.trnimi
                                        }
                                    }}
                                    >{tuoteryhma.trnimi}
                                </Link>
                                </Router>
                            </li>
                            ))} 
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>    
    )
}
