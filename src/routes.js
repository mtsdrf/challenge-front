import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from './pages/Welcome';
import Choose from './pages/Choose';

const createRoutes = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/choose" component={Choose}/>
            </Switch>
        </BrowserRouter>
    );
}

export default createRoutes;