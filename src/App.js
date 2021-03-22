import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Home from "./Home";
import TwoPlayers from "./TwoPlayers/TwoPlayersHome";
import ComingSoon from "./ComingSoon";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/">
            <Route path="/twoplayers" component={TwoPlayers} />
            <Route path="/comingsoon" component={ComingSoon} />
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
