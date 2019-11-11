import React, { useState } from "react";
import ProtectedRoute from './components/ProtectedRoute'
import BubblePage from './components/BubblePage'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/bubble" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
