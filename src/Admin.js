import React from 'react';
import "./Admin.css";
import {useState,useEffect} from "react";
import AdminNewProduct from './AdminNewProduct';
import {Switch,Route} from 'react-router-dom';

export default function Admin({categories,url}) {
    const [imagefile, setImagefile] = useState(null); // kuvatiedosto, josta erotellaan kuvan nimi
    
    const [tuotenimi, setTuotenimi] = useState("");
    const [hinta, setHinta] = useState(0);
    const [kustannus, setKustannus] = useState(0);
    const [trnro, setTrnro] = useState(0);
    const [maku, setMaku] = useState("");
    const [taytemaku, setTaytemaku] = useState("");
    const [kuva, setKuva] = useState("");

    //laittaa kuvatiedoston nimen kuva muuttujaan
    useEffect(() => {
        if (imagefile != null) {
            setKuva(imagefile.name);
        }
    }, [imagefile])

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
                    
                    <AdminNewProduct addNewProduct={addNewProduct} setHinta={setHinta} setImagefile={setImagefile} setKustannus={setKustannus} setMaku={setMaku} setTaytemaku={setTaytemaku} setTrnro={setTrnro} setTuotenimi={setTuotenimi} categories={categories} />
                   
                    
                </div>

                <div className="row">
                    <h5>Tilausten hallinta</h5>
                    <p>Tilausten hallinta 1.0 Coming soon. HYPE!</p>
                </div>
            </div> 
        </div>
    )
}
