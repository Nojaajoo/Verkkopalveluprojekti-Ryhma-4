
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

const URL = "http://localhost/verkkopalveluprojekti/";

function App() {
  const [category, setCategory] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
    }
  }, [location.state])

  return (
    <>
      <Header url={URL} setCategory={setCategory}/>
      <Carousel />
      <div id="content" className="container-fluid">
        <Switch>
          <Route path="/" render={() => <Home
          url={URL}
          category={category}/>}
          exact
          />
          <Route path="/Cart" render={() => <Cart />} />
          <Route path="/Order" render={() => <Order />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    <Footer />
  </>
  );
}

//       <div className="App">

//         <div id="donitsikaruselli" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={banner} className="d-block w-100" alt="..."></img>
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Donitsimainos 1</h5>
//                 <p>Nam, täällä on tämmösiäkin donitseja!</p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img src={banner} className="d-block w-100" alt="..."></img>
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Donitsimainos 2</h5>
//                 <p>Nam nam, täällä on tämmösiäkin donitseja!</p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img src={banner} className="d-block w-100" alt="..."></img>
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Donitsimainos 3</h5>
//                 <p>Nam nam nam, täällä on tämmösiäkin donitseja!</p>
//               </div>
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>

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

