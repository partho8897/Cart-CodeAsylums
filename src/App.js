import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import buy from './buy';

export default class App extends Component {

 render() {
    return (
        <div>
        
        <div >
            <Router>
            <div>
                <ul>
                    <li><Link to={'/Home'}><h5>HOME</h5></Link></li>
                    <li><Link to={'/buy'}><h5>BUY NOW</h5></Link></li>
                </ul>
            <br/>
          <Switch>
              <Route exact path='/Home' component={Home} />
              <Route exact path='/buy' component={buy} />
          
          </Switch>
            </div>
            </Router>
        </div>
    
        </div>
 
);
}
}