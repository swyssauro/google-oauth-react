import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Pages
import homePag from './pages/Home';
import fistPag from './pages/Login';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/explore" component={ homePag } />
            <Route exact path="/" component={ fistPag } />
        </Switch>
        </BrowserRouter>
    );
}