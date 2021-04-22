import React, {useState} from 'react'
import './Order.css'
// import uuid from 'react-uuid'

export default function Order({url,cart,emptyCart}) {

  const [snimi, setEnimi] = useState('');
  const [enimi, setSnimi] = useState('');
  const [osoite, setOsoite] = useState('');
  const [postinro, setPostinro] = useState('');
  const [postitmp, setPostitmp] = useState('');
  const [puhnro, setPuhnro] = useState('');
  const [finished, setFinished] = useState(false);

  function order(e) {
    e.preventDefault();
    fetch(url + 'order/add.php',{
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sukunimi: snimi,
        etunimi: enimi,
        osoite: osoite,
        postinro: postinro,
        postitmp: postitmp,
        puhnro: puhnro,
        cart: cart,
      })
    })
    .then (res => {
      return res.json();
    })
    .then (
      (res) => {
        emptyCart();
        setFinished(true);
      }, (error) => {
        alert(error);
      }
    )
  }

  let sum = 0;

  if (finished === false) {
    return (
      <div>
        {/* <h3 className="header">Order items</h3>
        <table className="table">
          <tbody>
            {cart.map(product => {
              sum+=parseFloat(product.hinta);
              return (
                <tr>
                  <td>{product.tuotenimi}</td>
                  <td>{product.hinta} €</td>
                  <td></td>
                </tr>
            )
            })}
            <tr>
              <td className="sumrow"></td>
              <td className="sumrow">{sum.toFixed(2)} €</td>
              <td className="sumrow"><a href="#" onClick={e => emptyCart()}>Empty</a></td>
            </tr>
          </tbody>
        </table> */}

        
        {/* <>
          <h3 className="header">Client information</h3>
          <form onSubmit={order}>
            <div className="form-group">
              <label>Etunimi:</label>
              <input className="form-control" onChange={e => setEnimi(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Sukunimi:</label>
              <input className="form-control" onChange={e => setSnimi(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Osoite:</label>
              <input className="form-control" onChange={e => setOsoite(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Postinumero:</label>
              <input className="form-control" onChange={e => setPostinro(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Postitoimipaikka:</label>
              <input className="form-control" onChange={e => setPostitmp(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Puhelinnumero:</label>
              <input className="form-control" onChange={e => setPuhnro(e.target.value)}/>
            </div>
            <div className="buttons">
              <button className="btn btn-primary">Order</button>
            </div>
          </form>
          </> */}

          {cart.length > 0 &&
          <div className="container">
        <form className="card mt-5"  onSubmit={order}>
          <div className="card-header korttiTausta">
            <h4>Yhteystiedot</h4>
          </div>
            <div className="card-body row pt-3 ps-3">
            
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Etunimi</span>
              <input type="text" class="form-control" name="enimi" onChange={e => setEnimi(e.target.value)}/>
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Sukunimi</span>
              <input type="text" class="form-control" name="snimi" onChange={e => setSnimi(e.target.value)}/>
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Osoite</span>
              <input type="text" class="form-control" name="osoite" onChange={e => setOsoite(e.target.value)}/>
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Postinumero</span>
              <input type="text" class="form-control" name="postinro" onChange={e => setPostinro(e.target.value)}/>
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Postitoimipaikka</span>
              <input type="text" class="form-control" name="postitmp" onChange={e => setPostitmp(e.target.value)}/>
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Puhelinnumero</span>
              <input type="text" class="form-control" name="puhnro" onChange={e => setPuhnro(e.target.value)}/>
            </div>
            <div class="text-right col-12">
              <button class="btn btn-secondary mb-2">Seuraava</button>
            </div>
          </div>
        </form>
      </div>
        
        }
      </div>
    )
  }
}
