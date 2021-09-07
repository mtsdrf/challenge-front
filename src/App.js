import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from './views/Welcome';
import LightSide from './views/LightSide';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/choose" component={LightSide}/>
            </Switch>
        </BrowserRouter>
    );
}