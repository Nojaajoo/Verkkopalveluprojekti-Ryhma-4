import React from 'react'

export default function AdminNewProduct({addNewProduct, setHinta, setImagefile, setKustannus, setMaku, setTaytemaku, setTrnro, setTuotenimi, categories}) {
    return (
        <div>
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
    )
}
