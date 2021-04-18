import React from 'react';
import "./Cart.css";
import {useState, useEffect} from "react";
import CartItem from './CartItem';
// import uuid from "react-uuid";

export default function Cart({url,cart,removeFromCart, updateAmount, emptyCart, sum, amount}) {
    // const [sum, setSum] = useState(0);
    

    function changeAmount(e,product,index) {
        updateAmount(e.target.value, product);
      }

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
                                <div className="col cartCol align-self-center text-right text-muted">
                                    {cart.map((product) => {amount+=(parseFloat(product.amount));})} {amount} tuotetta</div>
                            </div>
                        </div>

                        <div className="row cartRow border-top border-bottom">

                        {cart.map((product,index) => {
                            sum+=(parseFloat(product.hinta)*(product.amount));
                            return (
                                <CartItem product={product} 
                                index={index} 
                                url={url} 
                                removeFromCart={removeFromCart} 
                                changeAmount={changeAmount} 
                                updateAmount={updateAmount} />
                                )
                        })}
                                                    
                        </div>
                        
                        <div className="back-to-shop"><a className="aCart" href="/">&#129044;&nbsp;<span className="text-muted">Takaisin</span></a></div>
                        <div className="back-to-shop"><a onClick={e => emptyCart()} className="aCart" href="#"><span className="text-muted">Tyhjennä Kori</span></a></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5 className="h5Cart"><b>Yhteenveto</b></h5>
                        </div>
                        <hr></hr>
                        <div className="row cartRow">
                            <div className="col cartCol" style={{paddingLeft:"0"}}>TUOTTEITA: {amount}</div>
                            <div className="col cartCol text-right">
                            
                            </div>
                        </div>
                        <form className="formCart">
                            <p>Kuljetus</p> 
                            <select name="toimitus" className="selectCart">
                                <option value="5" className="text-muted">Kotiinkuljetus - &euro;5.00</option>
                                <option selected value="0" className="text-muted">Nouto myymälästä - &euro;0.00</option>
                            </select>
                            <p>Lahjakortti</p> <input className="inputCart" id="code" placeholder="Kirjoita koodi tähän"></input>
                        </form>
                        <div className="row cartRow" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                            <div className="col cartCol">HINTA YHTEENSÄ</div>
                            <div className="col cartCol text-right">&euro; {sum.toFixed(2)}</div>
                        </div> <button className="btn btnCart">LÄHETÄ TILAUS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
