import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

// Components
import AppNavBar from "./components/ui/AppNavBar";
import Footer from "./components/ui/Footer";

import Home from "./components/pages/Home";
import National from "./components/news/National";
import States from "./components/news/States";
import Cat from "./components/news/Cat";
import Weather from "./components/weather/Weather";
import Search from "./components/news/Search";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Kerala from "./components/news/states/Kerala";
import TN from "./components/news/states/TN";
import Karnataka from "./components/news/states/Karataka";
import AP from "./components/news/states/AP";
import Telangana from "./components/news/states/Telangana";
import MH from "./components/news/states/MH";

import Buisness from "./components/news/categories/Buisness";
import Entertainment from "./components/news/categories/Entertainment";
import General from "./components/news/categories/General";
import Health from "./components/news/categories/Health";
import Science from "./components/news/categories/Science";
import Sports from "./components/news/categories/Sports";
import Technology from "./components/news/categories/Technology";

import Favorites from "./components/pages/Favorites";
import Profile from "./components/auth/Profile";

import NotFound from "./components/ui/NotFound";

import { checkUser } from "./actions/Auth";

class App extends Component {
  componentDidMount() {
    this.props.checkUser();
  }

  render() {
    return (
      <Fragment>
        <AppNavBar />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/nation' component={National} />
            <Route path='/kerala' exact component={Kerala} />
            <Route path='/tamilnadu' exact component={TN} />
            <Route path='/telegana' exact component={Telangana} />
            <Route path='/andhrapradesh' exact component={AP} />
            <Route path='/maharastra' exact component={MH} />
            <Route path='/karnataka' exact component={Karnataka} />

            <Route path='/states' component={States} />
            <Route path='/category' component={Cat} />
            <Route path='/weather' component={Weather} />
            <Route path='/search' component={Search} />

            <Route path='/buisness' component={Buisness} />
            <Route path='/entertainment' component={Entertainment} />
            <Route path='/general' component={General} />
            <Route path='/health' component={Health} />
            <Route path='/science' component={Science} />
            <Route path='/sports' component={Sports} />
            <Route path='/technology' component={Technology} />

            <Route path='/favorites' component={Favorites} />

            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </Fragment>
    );
  }
}

export default connect(null, { checkUser })(App);
