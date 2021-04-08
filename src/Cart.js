import React from 'react';
import "./Cart.css";

export default function Cart() {
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
                                <div className="col cartCol align-self-center text-right text-muted">3 tuotetta</div>
                            </div>
                        </div>
                        <div className="row cartRow border-top border-bottom">
                            <div className="row cartRow main align-items-center">
                                <div className="col-2 cartCol"><img className="img-fluid cartImg" src="https://i.imgur.com/1GrakTl.jpg"></img></div>
                                <div className="col cartCol">
                                    <div className="row cartRow text-muted">Shirt</div>
                                    <div className="row cartRow">Cotton T-shirt</div>
                                </div>
                                <div className="col cartCol"> <a className="aCart" href="#">-</a><a href="#" className="border aCart">1</a><a className="aCart" href="#">+</a> </div>
                                <div className="col cartCol">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="row cartRow">
                            <div className="row cartRow main align-items-center">
                                <div className="col-2 cartCol"><img className="img-fluid cartImg" src="https://i.imgur.com/ba3tvGm.jpg"></img></div>
                                <div className="col cartCol">
                                    <div className="row cartRow text-muted">Shirt</div>
                                    <div className="row cartRow">Cotton T-shirt</div>
                                </div>
                                <div className="col cartCol"> <a className="aCart" href="#">-</a><a href="#" className="border aCart">1</a><a className="aCart" href="#">+</a> </div>
                                <div className="col cartCol">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="row cartRow border-top border-bottom">
                            <div className="row cartRow main align-items-center">
                                <div className="col-2 cartCol"><img className="img-fluid cartImg" src="https://i.imgur.com/pHQ3xT3.jpg"></img></div>
                                <div className="col cartCol">
                                    <div className="row cartRow text-muted">Shirt</div>
                                    <div className="row cartRow">Cotton T-shirt</div>
                                </div>
                                <div className="col cartCol"> <a className="aCart" href="#">-</a><a href="#" className="border aCart">1</a><a className="aCart" href="#">+</a> </div>
                                <div className="col cartCol">&euro; 44.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="back-to-shop"><a className="aCart" href="#">&#129044;</a>&nbsp;<span className="text-muted">Takaisin kauppaan</span></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5 className="h5Cart"><b>Yhteenveto</b></h5>
                        </div>
                        <hr></hr>
                        <div className="row cartRow">
                            <div className="col cartCol" style={{paddingLeft:"0"}}>TUOTTEITA: 3</div>
                            <div className="col cartCol text-right">&euro; 132.00</div>
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
                            <div className="col cartCol text-right">&euro; 137.00</div>
                        </div> <button className="btn btnCart">MAKSA TILAUS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
