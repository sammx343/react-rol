import React from 'react';
import './App.css';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Games from './views/Games';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/games">
          <Games></Games>
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
        <Route path="/">
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
