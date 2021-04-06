import React from 'react'
import './Order.css'

export default function order() {
    return (
        <div className="container">
        <form className="card mt-5">
          <div className="card-header korttiTausta">
            <h4>Yhteystiedot</h4>
          </div>
            <div className="car-body row pt-3 ps-3">
            
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Etunimi</span>
              <input type="text" class="form-control" name="enimi" />
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Sukunimi</span>
              <input type="text" class="form-control" name="snimi" />
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Osoite</span>
              <input type="text" class="form-control" name="osoite" />
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Postinumero</span>
              <input type="text" class="form-control" name="postinro"/>
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Postitoimipaikka</span>
              <input type="text" class="form-control" name="postitmp" />
            </div>
            <div class="input-group mb-3 col-6 formItem">
              <span class="input-group-text inputTeksti" id="basic-addon1">Puhelinnumero</span>
              <input type="text" class="form-control" name="puhnro" />
            </div>
            <div class="text-right col-12">
              <button class="btn btn-secondary mb-2">Seuraava</button>
            </div>
          </div>
        </form>
      </div>
    )
}
