import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/SPAVEL' exact component={Home} />
          <Route path='/SPAVEL/services'  component={Services} />
          <Route path='/SPAVEL/products'  component={Products} />
          <Route path='/SPAVEL/sign-up'  component={SignUp} />
        </Switch>

        <Footer />
        
      </Router>
      

    </>

      
  );
}

export default App;
