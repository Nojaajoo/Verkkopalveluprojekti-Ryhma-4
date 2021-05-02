import React from 'react';
import "./Admin.css";
import {useState,useEffect} from "react";
import AdminNewProduct from './AdminNewProduct';

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

    const [adminproducts, setAdminproducts] = useState([]);

    // tuotteiden tietojen näyttäminen
    useEffect(async() => {
        // if (category !== null) {
        try {
          const response = await fetch(url + 'admin/getProductsToEdit.php/');
          const json = await response.json();
          if (response.ok) {
            console.log(json)
            setAdminproducts(json);
          } else {
            alert(json.error);
          }
        } catch (error) {
          alert(error);
        }
    //   }
      }, [])

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

    //kuvatiedoston tallentaminen backendiin
    function sendImageFile() {
    
        const formData = new FormData();
        formData.append("imagefile",imagefile);
        fetch (url + "admin/saveProductImage.php",
            {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data; "
                }
            }
        )
    };



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
                    // if (imagefile != null) {
                        
                    //     // formData.append("imagefile",imagefile);
                    //     // fetch (url + "admin/saveProductImage.php",
                    //     //     {
                    //     //         method: "POST",
                    //     //         body: formData
                    //     //     }
                    //     // )
                    //     // sendImageFile(); // lähetetään onnistuneen tuotteen lisäyksen jälkeen kyseiselle tuotteelle kuuluva tuotekuva backendiin
                    //     // setImagefile(null);
                    // }
                    alert("lisäys onnistui!");
            	} else {
            	alert("testi")
            	}
            }, (error) => {
            	alert(error);
            }
        )
    };

    function newProductAndImage(e) {
        addNewProduct(e);
        sendImageFile();
    }
    
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

                {/* uusien tuotteiden lisäys */}

                <div className="row">
                    <h3 className="col-12 text-center mb-5"><b>Ylläpito</b></h3>
                </div>

                <div className="row">
                    <div className="col-12" >
                        <h5>Uusien tuotteiden lisäys</h5>
                    </div>
                    
                    <AdminNewProduct newProductAndImage={newProductAndImage} addNewProduct={addNewProduct} setHinta={setHinta} setImagefile={setImagefile} setKustannus={setKustannus} setMaku={setMaku} setTaytemaku={setTaytemaku} setTrnro={setTrnro} setTuotenimi={setTuotenimi} categories={categories} />
                   
                    
                </div>

                {/* tuotteiden muokkaaminen, poisto */}

                <div className="row">
                    <h5>Tuotteiden muokkaaminen</h5>
                    <div>
                        <table class="table" id="editproducts">
                            <tr>
                                <th scope="col">Tuotenro</th>
                                <th scope="col">Tuotenimi</th>
                                <th scope="col">Hinta</th>
                                <th scope="col">Kustannus</th>
                                <th scope="col">Tuoteryhmä</th>
                                <th scope="col">Maku</th>
                                <th scope="col">Täytemaku</th>
                                <th scope="col">Kuva</th>
                            </tr>
                            {adminproducts.map(product => (
              
                            <tr key={product.tuotenro} >
                                <td scope="col">{product.tuotenro}</td>
                                <td scope="col">{product.tuotenimi}</td>
                                <td scope="col">{product.hinta}</td>
                                <td scope="col">{product.kustannus}</td>
                                <td scope="col">{product.trnro}</td>
                                <td scope="col">{product.maku}</td>
                                <td scope="col">{product.taytemaku}</td>
                                <td scope="col">{product.kuva}</td>
                                
                            </tr>
                            ))}
                        </table>
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

// const filetToUpload = imagefile;
//                         const data = new FormData();
//                         data.append("name", "Image Upload");
//                         data.append("file_attachment", filetToUpload);

//                         let response = await fetch(
//                             url + "admin/saveProductImage.php",
//                             {
//                                 method: "POST",
//                                 body: data,
//                                 headers: {
//                                     "Content-Type": "multipart/form-data; ",
//                                 },
//                             }
//                         );
//                         let responseJson = await response.json();
//                         if (responseJson.status == 1) {
//                             alert("Upload successful: image");
//                         } else {
//                             alert("please select file first");
//                         }