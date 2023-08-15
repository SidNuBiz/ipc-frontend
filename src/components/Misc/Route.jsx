import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";



const ProtectedRoute = ({isAdmin}) => {

  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  console.log(isAdmin)

  return (
    <Fragment>
      {loading === false && (
        isAdmin ? (isAuthenticated && user.role === 'admin' ? <Outlet /> : <Navigate to='/login' />) :  (isAuthenticated ? <Outlet /> : <Navigate to='/login' />) 
      )}
    </Fragment>
  );
};

export default ProtectedRoute;