import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from './views/Welcome';
import Choose from './views/Choose';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/choose" component={Choose}/>
            </Switch>
        </BrowserRouter>
    );
}