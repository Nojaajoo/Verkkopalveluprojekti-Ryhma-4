import React from 'react';
import "./Admin.css";
import {useState,useEffect} from "react";

export default function Admin({categories}) {
    const [imagefile, setImagefile] = useState(null);

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
                        <form className="row justify-content-evenly" id="newproduct" action="">
                            <div className="col-12" className="newProductFormInputs">
                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label for="tuotenimi" className="col-form-label">Tuotenimi:</label>
                                    </div>
                                    <div className="col-5">
                                        <input name="tuotenimi" maxLength="30" type="text" id="tuotenimi" className="form-control" aria-describedby="tuotenimiHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="tuotenimiHelpInline" className="form-text">
                                        Syötä tuotteen nimi. (max 30 merkkiä. Pakollinen.)
                                        </span>
                                    </div>
                                </div>

                                <div class="row g-3 align-items-center newProductFormInput">
                                    <div class="col-3">
                                        <label for="hinta" class="col-form-label">Hinta:</label>
                                    </div>
                                    <div class="col-5">
                                        <input name="hinta" type="number" min="0" step=".01" id="hinta" class="form-control" aria-describedby="hintaHelpInline"></input>
                                    </div>
                                    <div class="col-4">
                                        <span id="hintaHelpInline" class="form-text">
                                        Syötä tuotteen hinta.
                                        </span>
                                    </div>
                                </div>

                                <div class="row g-3 align-items-center newProductFormInput">
                                    <div class="col-3">
                                        <label for="kustannus" class="col-form-label">Kustannus:</label>
                                    </div>
                                    <div class="col-5">
                                        <input name="kustannus" type="number" min="0" step=".01" id="kustannus" class="form-control" aria-describedby="kustannusHelpInline"></input>
                                    </div>
                                    <div class="col-4">
                                        <span id="kustannusHelpInline" class="form-text">
                                        Syötä tuotteen kustannus.
                                        </span>
                                    </div>
                                </div>

                                <div class="row g-3 align-items-center newProductFormInput">
                                    <div class="col-3">
                                        <label for="trnro" class="col-form-label">Tuoteryhmä:</label>
                                    </div>
                                    <div class="col-5">
                                    <select name="trnro" id="trnro" class="form-select" aria-describedby="trnroHelpInline">
                                        <option selected value={null}>Valitse tuoteryhmän numero</option>
                                        {categories.map(tuoteryhma => {
                                            return (
                                                <option value={tuoteryhma.trnro}>{tuoteryhma.trnro}: {tuoteryhma.trnimi}</option>
                                            );
                                        })}
                                    </select>
                                    </div>
                                    <div class="col-4">
                                        <span id="trnroHelpInline" class="form-text">
                                        Valitse tuoteryhmä johon tuote kuuluu. (Pakollinen.)
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label for="maku" className="col-form-label">Maku:</label>
                                    </div>
                                    <div className="col-5">
                                        <input name="maku" maxLength="20" type="text" id="maku" className="form-control" aria-describedby="makuHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="makuHelpInline" className="form-text">
                                        Syötä tuotteen maku. (max 20 merkkiä.)
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label for="taytemaku" className="col-form-label">Täytemaku:</label>
                                    </div>
                                    <div className="col-5">
                                        <input name="taytemaku" maxLength="20" type="text" id="taytemaku" className="form-control" aria-describedby="taytemakuHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="taytemakuHelpInline" className="form-text">
                                        Syötä tuotteen täytteen maku. (max 20 merkkiä.)
                                        </span>
                                    </div>
                                </div>

                                <div className="row g-3 align-items-center newProductFormInput imagefileupload">
                                    <div className="col-3">
                                        <label for="kuvatiedosto" className="col-form-label">Kuvatiedosto:</label>
                                    </div>
                                    <div className="col-5">
                                        <input name="kuvatiedosto" onChange={e => setImagefile(e.target.files[0])} type="file" id="kuvatiedosto" className="form-control" aria-describedby="kuvatiedostoHelpInline"></input>
                                    </div>
                                    <div className="col-4">
                                        <span id="kuvatiedostoHelpInline" className="form-text">
                                        Lataa tuotteen kuvatiedosto tästä.
                                        </span>
                                    </div>
                                </div>
                                {/* jos ei onnistu lukea kuvatiedoston nimeä file inputista, voi sen varmaan lukea tästä alta */}
                                {imagefile != null ? (<><p hidden name="kuva">{imagefile.name}</p></>) : (null)}
                                
                                {/* tuotteen kuvatiedoston nimi tallennetaan piilotettuun input fieldiin, josta se luetaan lähetettäessä backendiin */}
                                {/* <div hidden className="row g-3 align-items-center newProductFormInput">
                                    <div className="col-3">
                                        <label for="kuva" className="col-form-label">Kuva:</label>
                                    </div>
                                    <div className="col-5">
                                        <input name="kuva" maxLength="20" type="text" id="kuva" className="form-control" aria-describedby="kuvaHelpInline" 
                                        value={imagefile.name} >
                                            
                                        </input>
                                    </div>
                                    <div className="col-4">
                                        <span id="kuvaHelpInline" className="form-text">
                                        Tuotteen kuvatiedoston nimi.
                                        </span>
                                    </div>
                                </div> */}
                            </div>

                            <div className=" col-12 col-sm-3 align-self-center">
                                <input className="btn btnAdmin" type="button" value="Lisää uusi tuote"/>
                            </div>                          
                        </form>
                    </div>
                </div>

                <div className="row">
                    <h5>Tilausten hallinta</h5>
                    <p>Tilausten hallinta 1.0 Coming soon. HYPE!</p>
                </div>
            </div> 
        </div>
    )
}
