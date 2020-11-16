import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import AuthProvider from './lib/AuthProvider';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Private from "./pages/Private";

class App extends Component {
  render() {
    return (
      <AuthProvider>        {/*       <---  Envolvemos los componentes con AuthProvider       */}

        <div className="container">
          <Navbar />
          <h1>Basic React Authentication</h1>
          <Switch>
          {/*     Agregamos ruta para Login
              Agregamos ruta para el SignUp */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route exact path='/private' component={Private} />
          </Switch>  
        </div>

      </AuthProvider>
    );
  }
}

export default App;
