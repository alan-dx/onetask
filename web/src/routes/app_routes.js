import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;