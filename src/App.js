import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';

const App = () => (
  <Router>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
      </Switch>
  </Router>
);
export default App;
