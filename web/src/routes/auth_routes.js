import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
//Control the condition to navigate between the routes;
const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default AuthRoutes;