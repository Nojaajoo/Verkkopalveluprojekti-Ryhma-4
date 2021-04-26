
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
import Admin from './Admin';
import Indicator from './Indicator';
import Logout from './logout';

const URL = "http://localhost/verkkopalveluprojekti/";

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);
  // const [sumPrice, setSumPrice] = useState(0);
  // const [cartItemAmount, setCartItemAmount] = useState(0);
  const [delivery, setDelivery] = useState(0); //ostoskoriin välitettävä toimitusmaksun tilamuuttuja, ettei valinta katoa kun käy muualla
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);

  let location = useLocation();
//muuttujat ostoskorin yhteenlasketulle hinnalle ja tavaroiden määrälle
  // var sum = 0;
  var amount = 0;

  //callback function add product to cart
  function addToCart(product) {
    if (cart.some(item => item.tuotenro === product.tuotenro)) {
      const existingProduct = cart.filter(item => item.tuotenro === product.tuotenro);
      updateAmount(parseInt(existingProduct[0].amount) +1, product);
    }
    else {
      product["amount"] = 1;
      const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem("cart",JSON.stringify(newCart));
    }
    // console.log(cart);
    // console.log(product);
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.tuotenro !== product.tuotenro);
    setCart(itemsWithoutRemoved);
    localStorage.setItem("cart",JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product) {
    if (amount <= 0) {
      removeFromCart(product);
      return;
    }
    product.amount = amount;
    const index = cart.findIndex((item => item.tuotenro === product.tuotenro));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem("cart",JSON.stringify(modifiedCart));
  }

  function emptyCart() {
    setCart([]);
    localStorage.removeItem("cart");
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
    <Header url={URL} cart={cart} amount={amount} setCategory={setCategory} categories={categories} setCategories={setCategories}/>
    <div className="App">
      
        {/* <Carousel /> */}
        <div id="content" className="container-fluid">
          <Switch>
            <Route path="/" render={() => 
            <>
              <Carousel />
              <Home
              url={URL}
              category={category}
              addToCart={addToCart}
              />
            </>
            } exact />
            <Route path="/Cart" render={() => <><Carousel /><Cart 
              cart={cart} 
              setCart={setCart} 
              url={URL} 
              removeFromCart={removeFromCart} 
              updateAmount={updateAmount} 
              emptyCart={emptyCart}
              delivery={delivery}
              setDelivery={setDelivery}
              // sum={sum}
              amount={amount}
              /></>} />
            <Route path="/Order" render={() => <><Carousel /> <Order url={URL}cart={cart}emptyCart={emptyCart}/></>} />
            <Route path="/Info" render={() => <><Carousel /><Info setUser={setUser}/></>} />
            <Route path="/Login" render={() => <Login url={URL} setUser={setUser} user={user} />} />
            <Route path="/Admin" render={() => <Admin categories={categories} />} />
            <Route path="/Indicator" render={() => <Indicator user={user} /> } />
            <Route path="/Logout" render={() => <Logout setUser={setUser} url={URL} /> } />
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

