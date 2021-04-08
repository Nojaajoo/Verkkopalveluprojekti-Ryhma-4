import React,{useEffect,useState} from 'react';
import "./App.css";
import logo from "./img/donitsilogo.png";

export default function Home({url,category}) {
    const [products, setProducts] = useState([]);
    let donitsiteksti = "Tässäpä olisi yllättävän maukas donitsi"

    useEffect(async() => {
      if (category !== null) {
      try {
        const response = await fetch(url + 'products/getproducts.php/' + category?.trnro);
        const json = await response.json();
        if (response.ok) {
          console.log(json)
          setProducts(json);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    }, [category])
  

    return (
      <div className="App">
        <h3>{category?.trnimi}</h3>
        <div className="container-fluid">
          <div className="row">
            {products.map(product => (
              
              <div key={product.tuotenro} className="col-12 col-sm-6 col-md-4 col-lg-3">
                {/* <p>{product.tuotenimi}</p> */}
                  <div className="card donitsicard text-start">
                    <img src={url + "img/" + product.kuva} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">{product.tuotenimi}</h5>
                      <p className="card-text">{donitsiteksti}</p>
                      <a className="cartLink" href="#">{product.hinta}€ <span className="addDonutToCart">Osta!</span></a>
                    </div>
                  </div>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    )
  
  }