import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import OthersCom from './Components/OtherCom/OthersCom';
import Header from './Components/Header/Header';
import DetailsInfo from './Components/DetailsInfo/DetailsInfo';

function App() {
  return (
    <div>     
      <Header/>
      <Router>
        <Switch>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/details">
            <Details/>
          </Route>

          <Route path="/detailsinfo/:userId">
            <DetailsInfo/>
          </Route>

          <Route path="/others">
            <OthersCom/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="*">
            <h1 style={{color:"red",textAlign:"center"}}>404- NOT FOUND</h1>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
