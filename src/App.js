import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import ListPlaces from "./pages/ListPlaces"
import './App.css';
import Dashboard from "./components/Dashboard";

const App = () => (

  <Router>
    <Dashboard>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/places" exact={true} component={ListPlaces}/>
      </Switch>
    </Dashboard>
  </Router>

);
export default App;
