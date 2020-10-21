
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from react-router-dom;


import './App.css';



class App extends Component {

  render() {

    return (
      <React.Fragment>
        <h1 className="text-info">Peace be upon you</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/project" component={Project}/>
            <Route path="/services" component={Services}/>
          </Switch>
        </Router>
        
      </React.Fragment>
    )
  }
}


export default App;