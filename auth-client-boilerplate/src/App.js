import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
//importamos Login
//importamos Private

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          {/*     Agregamos ruta para Login
        Agregamos ruta para el SignUp */}

          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
