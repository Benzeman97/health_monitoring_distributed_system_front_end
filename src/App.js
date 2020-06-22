import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Login from "./components/Login";
import Portal from './Portal';
import {Keto} from './components/Keto';
import TDEE from './components/TDEE';
import {BMI} from './components/BMI'
import Lipid from './components/Lipid';
import Diabetes from "./components/Diabetes";
import Channelling from './components/Channelling';

class App extends Component {
  render() {
    return (

      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Portal}/>
          <Route path="/tdee" component={TDEE}/>
          <Route path="/bmi" component={BMI}/>
          <Route path="/keto" component={Keto}/>
          <Route path="/lipid" component={Lipid}/>  
          <Route path="/diabetes" component={Diabetes}/>   
          <Route path="/channel" component={Channelling}/>
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
     
   
      
    );
  }
}

export default App;
