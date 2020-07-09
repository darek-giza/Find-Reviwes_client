import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';
import Dashboard from "./components/Dashboard";

const App = () => (

  <Router>
    <Dashboard>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
      </Switch>
    </Dashboard>
  </Router>

);
export default App;
