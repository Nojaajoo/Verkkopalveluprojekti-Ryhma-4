import React from 'react'
import './App.css';
import banner from "./img/donitsibanneri.jpg"

export default function Carousel() {
    return (
        <div>
            <div id="donitsikaruselli" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={banner} className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Donitsimainos 1</h5>
                        <p>Nam, täällä on tämmösiäkin donitseja!</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={banner} className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Donitsimainos 2</h5>
                        <p>Nam nam, täällä on tämmösiäkin donitseja!</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={banner} className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Donitsimainos 3</h5>
                        <p>Nam nam nam, täällä on tämmösiäkin donitseja!</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}
