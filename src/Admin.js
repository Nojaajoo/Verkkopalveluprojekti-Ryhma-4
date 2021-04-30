import React from 'react';
import "./Admin.css";
import {useState,useEffect} from "react";
import { Redirect } from 'react-router';

export default function Admin({categories,url}) {

    

    const [imagefile, setImagefile] = useState(null); // kuvatiedosto, josta erotellaan kuvan nimi
    
    const [tuotenimi, setTuotenimi] = useState("");
    const [hinta, setHinta] = useState(0);
    const [kustannus, setKustannus] = useState(0);
    const [trnro, setTrnro] = useState(0);
    const [maku, setMaku] = useState("");
    const [taytemaku, setTaytemaku] = useState("");
    const [kuva, setKuva] = useState("");

    const [tilausnro, setTilausnro] = useState(0);
    const [rivinro, setRivinro] = useState(0);
    const [tuotenro, setTuotenro] = useState(0);
    const [kpl, setKpl] = useState(0);


    //laittaa kuvatiedoston nimen kuva muuttujaan
    useEffect(() => {
        if (imagefile != null) {
            setKuva(imagefile.name);
        }
    }, [imagefile])

    let check = sessionStorage.getItem('kayttaja');
    check = JSON.parse(check);

    if(check === null) {
        return <Redirect to="/login" />
    }



    //uuden tuotteen lähettäminen backendiin
    function addNewProduct(e) {
        e.preventDefault();
        let status = 0;
        fetch( url + "admin/newProduct.php",{
            method: 'POST',
            headers: {
            	'Accept': 'application/json',
            	'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            	tuotenimi: tuotenimi,
                hinta: hinta,
                kustannus: kustannus,
                trnro: trnro,
                maku: maku,
                taytemaku: taytemaku,
                kuva: kuva
            })
        })
        .then(res => {
            console.log(res);
            status = parseInt(res.status);
        })
        .then(
            (res) => {
                console.log(res);
            	if (status === 200) {
                    if (imagefile != null) {
                        sendImageFile(); // lähetetään onnistuneen tuotteen lisäyksen jälkeen kyseiselle tuotteelle kuuluva tuotekuva backendiin
                        setImagefile(null);
                    }
                    alert("lisäys onnistui!");
            	} else {
            	alert("testi")
            	}
            }, (error) => {
            	alert(error);
            }
        )
    };

    //kuvatiedoston tallentaminen backendiin
    function sendImageFile() {
        
        const formData = new FormData();
        formData.append("imagefile",imagefile);
        fetch (url + "admin/saveProductImage.php",
            {
                method: "POST",
                body: formData
            }
        )
    };
    
    function modifyOrder(e) {
        e.preventDefault();
        let status = 0;
        fetch( url + "admin/modifyOrder.php",{
            method: 'POST',
            headers: {
            	'Accept': 'application/json',
            	'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tilausnro: tilausnro,
                rivinro: rivinro,
            	tuotenro: tuotenro,
                kpl: kpl
            })
        })
        .then(res => {
            console.log(res);
            status = parseInt(res.status);
        })
        .then(
            (res) => {
                console.log(res);
            	if (status === 200) {
                    alert("muutos onnistui!");
            	} else {
            	    alert("testi")
            	}
            }, (error) => {
            	alert(error);
            }
        )
    };

    return (
        <div id="Adminpage">
            <div id="admincontent">

                <div className="row">
                    <h3 className="col-12 text-center mb-5"><b>Ylläpito</b></h3>
                </div>

                <div className="row">
                    <div className="col-12" >
                        <h5>Uusien tuotteiden lisäys</h5>
                    </div>
                    <div className="col-12">
                        <form className="row justify-content-evenly" id="newproduct" onSubmit={addNewProduct}>
                            <div className="col-12" className="newProductFormInputs">
                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="tuotenimi" className="col-form-label">Tuotenimi:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setTuotenimi(e.target.value)} required name="tuotenimi" maxLength="30" type="text" id="tuotenimi" className="form-control" aria-describedby="tuotenimiHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="tuotenimiHelpInline" className="form-text">
                                        Syötä tuotteen nimi. (max 30 merkkiä. Pakollinen.)
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="hinta" className="col-form-label">Hinta:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setHinta(e.target.value)} name="hinta" type="number" min="0" step=".01" id="hinta" className="form-control" aria-describedby="hintaHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="hintaHelpInline" className="form-text">
                                        Syötä tuotteen hinta.
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="kustannus" className="col-form-label">Kustannus:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setKustannus(e.target.value)} name="kustannus" type="number" min="0" step=".01" id="kustannus" className="form-control" aria-describedby="kustannusHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="kustannusHelpInline" className="form-text">
                                        Syötä tuotteen kustannus.
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="trnro" className="col-form-label">Tuoteryhmä:</label>
                                    </div>
                                    <div className="col-5">
                                    <select onChange={e => setTrnro(Number(e.target.value))} required name="trnro" id="trnro" className="form-select" aria-describedby="trnroHelpInline">
                                        <option defaultValue value={null}>Valitse tuoteryhmän numero</option>
                                        {categories.map(tuoteryhma => {
                                            return (
                                                <option key={tuoteryhma.trnro} value={tuoteryhma.trnro}>{tuoteryhma.trnro}: {tuoteryhma.trnimi}</option>
                                            );
                                        })}
                                    </select>
                                    </div>
                                    <div className="col-4">
                                        <span id="trnroHelpInline" className="form-text">
                                        Valitse tuoteryhmä johon tuote kuuluu. (Pakollinen.)
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="maku" className="col-form-label">Maku:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setMaku(e.target.value)} name="maku" maxLength="20" type="text" id="maku" className="form-control" aria-describedby="makuHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="makuHelpInline" className="form-text">
                                        Syötä tuotteen maku. (max 20 merkkiä.)
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="taytemaku" className="col-form-label">Täytemaku:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setTaytemaku(e.target.value)} name="taytemaku" maxLength="20" type="text" id="taytemaku" className="form-control" aria-describedby="taytemakuHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="taytemakuHelpInline" className="form-text">
                                        Syötä tuotteen täytteen maku. (max 20 merkkiä.)
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput imagefileupload">
                                    <div className="col-3">
                                        <label htmlFor="imagefile" className="col-form-label">Kuvatiedosto:</label>
                                    </div>
                                    <div className="col-5">
                                        <input name="imagefile" onChange={e => setImagefile(e.target.files[0])} type="file" id="imagefile" className="form-control" aria-describedby="kuvatiedostoHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="kuvatiedostoHelpInline" className="form-text">
                                        Lataa tuotteen kuvatiedosto tästä. (tiedostotyyppi: .png)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className=" col-12 col-sm-3 align-self-center">
                                <button className="btn btnAdmin" >Lisää uusi tuote</button>
                            </div>                          
                        </form>
                    </div>
                </div>

                {/* Tilausten hallinta */}

                <div className="row">
                    <div className="col-12" >
                        <h5>Tilausten hallinta</h5>
                    </div>
                    <div className="col-12">
                        <form className="row justify-content-evenly" id="newproduct" onSubmit={modifyOrder}>
                            <div className="col-12" className="newProductFormInputs">
                                
                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="tilausnro" className="col-form-label">Tilausnumero:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setTilausnro(e.target.value)} required name="tilausnro" maxLength="30" type="text" id="tilausnro" className="form-control" aria-describedby="tilausnroHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="tilausnroHelpInline" className="form-text">
                                        Syötä tilauksen tuotenumero.
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="rivinro" className="col-form-label">Rivinumero:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setRivinro(e.target.value)} required name="rivinro" maxLength="30" type="text" id="rivinro" className="form-control" aria-describedby="rivinroHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="rivinroHelpInline" className="form-text">
                                        Syötä tilauksen rivinumero.
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="tuotenro" className="col-form-label">Tuotenumero:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setTuotenro(e.target.value)} required name="tuotenro" maxLength="30" type="text" id="tuotenro" className="form-control" aria-describedby="tuotenroHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="tuotenroHelpInline" className="form-text">
                                        Syötä tilauksen kappaleen tuotenumero.
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label htmlFor="kpl" className="col-form-label">Kappalemäärä:</label>
                                    </div>
                                    <div className="col-5">
                                        <input onChange={e => setKpl(e.target.value)} required name="kpl" maxLength="30" type="text" id="kpl" className="form-control" aria-describedby="kplHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="kplHelpInline" className="form-text">
                                        Syötä tilauksen tuotteiden kappalemäärä.
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className=" col-12 col-sm-3 align-self-center">
                                <button className="btn btnAdmin" >Muuta tilausta</button>
                            </div>                          
                        </form>
                    </div>
                </div>

            </div> 
        </div>
    ) 
}
