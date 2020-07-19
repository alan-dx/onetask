import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Login from '../pages/Login/index';
// import Register from '../pages/Register/index';

import AuthRoutes from './auth_routes';
// import AppRoutes from './app_routes';


const Routes = () => {
    return <AuthRoutes />
        // <BrowserRouter>
        //     <Switch>
        //         <Route exact path='/' component={Login} />
        //         <Route exact path='/register' component={Register} />                                
        //     </Switch>
        // </BrowserRouter>

};

export default Routes;