import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';

import Header from './Components/Header/Header';
import DetailsInfo from './Components/DetailsInfo/DetailsInfo';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>     
      <Header/>
      <Router>
        <Switch>

          <Route path="/home">
            <Home/>
          </Route>         

          <Route path="/detailsinfo/:userId">
            <DetailsInfo/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
