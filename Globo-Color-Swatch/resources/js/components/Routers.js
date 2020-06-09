import React, { Component } from 'react';
import IntegrateTheme from './IntegrateTheme';
import Dashboard from './Dashboard';
import {
    Switch,
    Route
  } from "react-router-dom";

class Routers extends Component {

    render() {
        return (
            <Switch >
                <Route exact path="/" component={ Dashboard }/>
                <Route path="/integrate" component={ IntegrateTheme }/>
            </Switch>
        );
    }
}

export default Routers;