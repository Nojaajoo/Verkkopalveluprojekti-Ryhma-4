import React from 'react';
import './Header.css';
import logo from "./img/donitsilogo.png";
import {useState,useEffect} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import CartIcon from "./CartIcon";
import Indicator from './Indicator';


export default function Header({url,cart,setCategory, amount, categories, setCategories, user}) {
    //const [categories, setCategories] = useState([])
  //  const url = "http://localhost/donitsikauppa/";
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
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" width="120" className="d-inline-block" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav linkit">
                    <li className="nav-item navText">
                    <Link className="nav-link" to="/">Etusivu</Link>
                    </li>
                    <li className="nav-item navText">
                    <Link className="nav-link" to="/Info">Tietoa meistä</Link>
                    </li>
                    <li className="nav-item navText">
                    <Link className="nav-link" to="/Login">Kirjaudu</Link>
                    </li>
                    <li className="nav-item navText">
                    <Link className="nav-link" to="/Admin">Admin (poista kun valmis)</Link>
                    </li>
                    <li className="nav-item dropdown navText">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tuotteet
                    </a>
                    <ul className="dropdown-menu dropTausta" aria-labelledby="navbarDropdownMenuLink">
                    {categories.map(tuoteryhma => {
                        return (
                            <li key={tuoteryhma.trnro}>
                                {/* <Router> */}
                                    <Link
                                        className="dropdown-item dropText"
                                        to={{
                                            pathname: '/',
                                            state: {
                                                trnro: tuoteryhma.trnro,
                                                trnimi: tuoteryhma.trnimi
                                            }
                                        }}
                                    >{tuoteryhma.trnimi}
                                    </Link>
                                {/* </Router> */}
                            </li>
                        );
                    })} 
                    </ul>
                    </li>
                    <form className="d-flex searchForm pt-2">
                        <input className="form-control me-2 searchText" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn searchButton" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ml-auto cartIcon">
                    <li className="nav-item" >
                    <CartIcon cart={cart} amount={amount} />
                    </li>
                </ul>
                </ul>
                
                </div>
            </div>
        </nav>
            <div className="container text-center indicator">
                <Indicator user={user} />
            </div>
        </>    
    )
}
