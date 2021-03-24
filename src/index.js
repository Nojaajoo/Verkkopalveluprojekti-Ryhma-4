import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Header";
// import Carousel from "./Carousel";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <>
    <Header />
    {/* <Carousel /> */}
    <App />
    <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

