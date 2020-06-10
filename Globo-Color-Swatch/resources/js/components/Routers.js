import React, { Component } from 'react';
import IntegrateTheme from './IntegrateTheme';
import Dashboard from './Dashboard';
import {
    Switch,
    Route
} from "react-router-dom";
import Custom from './Custom';

class Routers extends Component {

    render() {
        return (
            <Switch >
                <Route exact path="/" component={Dashboard} />
                <Route path="/integrate" component={IntegrateTheme} />
                <Route path="/custom" component={Custom} />
            </Switch>
        );
    }
}

export default Routers;