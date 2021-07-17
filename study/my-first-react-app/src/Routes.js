import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import Detail from './components/Detail';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/detail/:id" component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;