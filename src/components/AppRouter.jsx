import React, { useContext } from 'react';
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    // console.log(isAuth)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth 
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route 
                        key={route.path}
                        element={<route.element/>}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Route path='*' element={<Navigate replace to="/posts" />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route 
                        key={route.element}
                        element={<route.element/>}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Route path='*' element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;