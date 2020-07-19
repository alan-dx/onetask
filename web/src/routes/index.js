import React, { useContext } from 'react';

import AuthRoutes from './auth_routes';
import AppRoutes from './app_routes';
import AuthContext from '../contexts/auth';

const Routes = () => {

    const { signed } = useContext(AuthContext);
    
    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;