
import './App.css';
import banner from "./img/donitsibanneri.jpg"

function App() {
  return (
    <div className="App container">
      <div className="banner row">
        <picture className="col-12">
          <img className="img-fluid" src={banner} alt=""/>
        </picture>
      {/* <h1>DONITSIKAUPPA</h1>
        <p>banneri tähän</p> */}
      </div>
      <div className="products row">
        <div className="col-12">
          <div className="row">
            <div className="donut col-4">
              <p>DONITSI</p>
            </div>
            <div className="donut col-4">
              <p>DONITSI</p>
            </div>
            <div className="donut col-4">
              <p>DONITSI</p>
            </div>
          </div>
          <div className="row">
            <div className="donut col-4">
            <p>DONITSI</p>
            </div>
            <div className="donut col-4">
             <p>DONITSI</p>
            </div>
            <div className="donut col-4">
             <p>DONITSI</p>
            </div>
          </div>
          <div className="row">
            <div className="donut col-4">
             <p>DONITSI</p>
            </div>
            <div className="donut col-4">
             <p>DONITSI</p>
            </div>
            <div className="donut col-4">
              <p>DONITSI</p>
            </div>
          </div>
            
          
        </div>
          
      </div>
     
    </div>
  );
}

export default App;
