
import './App.css';
// import banner from "./img/donitsibanneri.jpg"
import logo from "./img/donitsilogo.png"
import {useState,useEffect} from 'react';
import {Switch,Route,useLocation} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import Carousel from './Carousel';
import Cart from './Cart';
import Order from './Order';
import Info from './Info';
import Login from './Login';

const URL = "http://localhost/verkkopalveluprojekti/";

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();

  //callback function add product to cart
  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem("cart",JSON.stringify(newCart));
    console.log(localStorage)
  }

  useEffect(() => {
    if ("cart" in localStorage) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])

  useEffect(() => {
    if (location.state!==undefined) {
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
    }
  }, [location.state])

  return (
    <>
    <Header url={URL} cart={cart} setCategory={setCategory}/>
    <div className="App">
      
        <Carousel />
        <div id="content" className="container-fluid">
          <Switch>
            <Route path="/" render={() => <Home
            url={URL}
            category={category}
            addToCart={addToCart}/>}
            exact
            />
            <Route path="/Cart" render={() => <Cart cart={cart} setCart={setCart} url={URL} />} />
            <Route path="/Order" render={() => <Order />} />
            <Route path="/Info" render={() => <Info />} />
            <Route path="/Login" render={() => <Login />} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </div>
    <Footer />
  </>
  );
}

//       <div className="App">

//         

//         <div className="row">
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>

//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
//             <div className="card text-start">
//               <img src={logo} className="card-img-top" alt="..."></img>
//               <div className="card-body">
//                 <h5 className="card-title">Tuotteen nimi</h5>
//                 <p className="card-text">Tuotteen kuvaus, mm maukas donitsi!</p>
//                 <p className="card-text"><small className="text-muted">Tarvittaessa lisää tekstiä</small></p>
//                 <a className="cartLink" href="#"><span className="addDonutToCart">Osta!</span></a>
//               </div>
//             </div>
//           </div>
          
//         </div>

//       </div>
//   );
// }

export default App;

