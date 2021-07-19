import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Thanks from './pages/Thanks';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/thanks' exact component={Thanks} />
            </Switch>
        </BrowserRouter>
    )
}