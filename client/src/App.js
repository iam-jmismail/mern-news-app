import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import AppNavBar from "./components/ui/AppNavBar";
import Home from "./components/pages/Home";
import National from "./components/news/National";
import States from "./components/news/States";
import Cat from "./components/news/Cat";
import Weather from "./components/weather/Weather";
import Search from "./components/news/Search";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AppNavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/nation' component={National} />
            <Route exact path='/states' component={States} />
            <Route exact path='/cat' component={Cat} />
            <Route exact path='/weather' component={Weather} />
            <Route exact path='/search' component={Search} />
            {/* Auth */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
