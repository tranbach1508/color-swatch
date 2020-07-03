import React, { Component } from 'react';
import IntegrateTheme from './IntegrateTheme';
import Dashboard from './Dashboard';
import Settings from './Settings';
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
                <Route path="/index" component={Dashboard} />
                <Route path="/integrate" component={IntegrateTheme} />
                <Route path="/custom" component={Custom} />
                <Route path="/settings" component={Settings} />
            </Switch>
        );
    }
}

export default Routers;