import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Question from './Questions';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/finalproject/">
        
          
          <div className="App__Form">
           
            
              <h1 class="font1">Quiz Buckers</h1>
              <div className="FormTitle">
                
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Log In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              <Route exact path="/que" component={Question}>
              
              </Route>
          

        </div>
      </Router>
    );
  }
}

export default App;
