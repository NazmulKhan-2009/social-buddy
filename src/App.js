import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import OthersCom from './Components/OtherCom/OthersCom';
import Header from './Components/Header/Header';
import DetailsInfo from './Components/DetailsInfo/DetailsInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h2>Scocial Buddy</h2>     */}
        {/* <Header/>   */}
      </header>
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
          <h3 style={{color:"red"}}>404- NOT FOUND</h3>

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
