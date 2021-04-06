import React from 'react';
import "./Cart.css";

export default function Cart() {
    return (
        <div id="shoppingcart">
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4><b>Ostoskori</b></h4>
                                </div>
                                <div className="col align-self-center text-right text-muted">3 tuotetta</div>
                            </div>
                        </div>
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"></img></div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
                                <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"></img></div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
                                <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg"></img></div>
                                <div className="col">
                                    <div className="row text-muted">Shirt</div>
                                    <div className="row">Cotton T-shirt</div>
                                </div>
                                <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
                                <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="back-to-shop"><a href="#">&#129044;</a>&nbsp;<span className="text-muted">Takaisin kauppaan</span></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5><b>Yhteenveto</b></h5>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col" style={{paddingLeft:"0"}}>TUOTTEITA: 3</div>
                            <div className="col text-right">&euro; 132.00</div>
                        </div>
                        <form>
                            <p>Kuljetus</p> <select>
                                <option className="text-muted">Kotiinkuljetus - &euro;5.00</option>
                                <option className="text-muted">Nouto myymälästä - &euro;0.00</option>
                            </select>
                            <p>Lahjakortti</p> <input id="code" placeholder="Kirjoita koodi tähän"></input>
                        </form>
                        <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                            <div className="col">HINTA YHTEENSÄ</div>
                            <div className="col text-right">&euro; 137.00</div>
                        </div> <button className="btn">MAKSA TILAUS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
