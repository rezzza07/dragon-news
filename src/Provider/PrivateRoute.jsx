import React, { use } from 'react';
import { AuthContext } from './authProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user);

    const location = useLocation();
    // console.log(location);

    if(loading){
        return <Loading></Loading>;
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    // if user ----> return children
    
    // navigate ---->Login
};

export default PrivateRoute;