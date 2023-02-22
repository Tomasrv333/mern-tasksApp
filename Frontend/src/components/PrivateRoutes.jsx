import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const auth = false;

    if(auth === undefined) {
        return 'Loading...'
    }

    return auth === true ? <Outlet></Outlet> : <Navigate to='/auth' />
}

export default PrivateRoutes