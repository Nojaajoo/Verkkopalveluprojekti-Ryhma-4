import React from 'react';
import "./Cart.css";
import {useState, useEffect} from "react";

export default function Cart({url,cart,setCart}) {
    const [total, setTotal] = useState(0);

    // useEffect(() => {
    //     if ("cart" in localStorage) {
            
    //     }
    //   }, [])

    function removeItem(product) {
         
            // const newCart = [...cart,product];
            // setCart(newCart);
            // localStorage.setItem("cart",JSON.stringify(newCart));
            console.log(localStorage)
          
      }

      //ostoskorin tuotteiden poisto, määrien muuttaminen yms kesken

    return (
        <div id="shoppingcart">
            <div className="card cartCard">
                <div className="row cartRow">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row cartRow">
                                <div className="col cartCol">
                                    <h4><b>Ostoskori</b></h4>
                                </div>
                                <div className="col cartCol align-self-center text-right text-muted">{cart.length} tuotetta</div>
                            </div>
                        </div>

                        <div className="row cartRow border-top border-bottom">
                            {cart.map(product => (

                                <div key={product.tuotenro} className="row cartRow main align-items-center">
                                    <div className="col-2 cartCol"><img className="img-fluid cartImg" src={url + "img/" + product.kuva}></img></div>
                                    <div className="col cartCol">
                                        <div className="row cartRow text-muted">{product.tuotenimi}</div>
                                        <div className="row cartRow">{product.maku} {product.taytemaku}</div>
                                    </div>
                                    <div className="col cartCol"> <a className="aCart" href="#">-</a><a href="#" className="border aCart">1</a><a className="aCart" href="#">+</a> </div>
                                    <div className="col cartCol">{product.hinta} €&nbsp;&nbsp;<a onClick={e => removeItem(product)} href="#"><span className="close">&#10005;</span></a></div>
                                </div>

                            ))}
                            
                        </div>
                        
                        <div className="back-to-shop"><a className="aCart" href="/">&#129044;&nbsp;<span className="text-muted">Takaisin</span></a></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5 className="h5Cart"><b>Yhteenveto</b></h5>
                        </div>
                        <hr></hr>
                        <div className="row cartRow">
                            <div className="col cartCol" style={{paddingLeft:"0"}}>TUOTTEITA: {cart.length}</div>
                            <div className="col cartCol text-right">&euro; {total}</div>
                        </div>
                        <form className="formCart">
                            <p>Kuljetus</p> <select className="selectCart">
                                <option className="text-muted">Kotiinkuljetus - &euro;5.00</option>
                                <option className="text-muted">Nouto myymälästä - &euro;0.00</option>
                            </select>
                            <p>Lahjakortti</p> <input className="inputCart" id="code" placeholder="Kirjoita koodi tähän"></input>
                        </form>
                        <div className="row cartRow" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                            <div className="col cartCol">HINTA YHTEENSÄ</div>
                            <div className="col cartCol text-right">&euro; {total}</div>
                        </div> <button className="btn btnCart">LÄHETÄ TILAUS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
