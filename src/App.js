import React, { Component } from 'react';
import './App.css';
import Navar from './comp/Navar'
import Signin from './comp/Signin'
import Signup from './comp/Signup'
import Blog from './comp/Blog'
import Store from './comp/Store'
import Home1 from './comp/Home1'
import { connect } from 'react-redux'
import axios from 'axios'


import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
  }






  render() {
    return (

      <div>

        <Navar />
        <Router>

          <Route exact path="/store">
            <Store />
          </Route>

          <Route exact path="/cart">
            <h1>cart</h1>
            <h1>cart</h1>
            <h1>cart</h1>
            <h1>cart</h1>
          </Route>

          <Route exact path="/signin">
            <Signin />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/blog">
            <Blog />
          </Route>


          <Route exact path="/home">
            <Home1 />

          </Route>

        </Router>
      </div>



    )
  }



}


/*function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
}, mapDispatchToProps*/
export default App;


