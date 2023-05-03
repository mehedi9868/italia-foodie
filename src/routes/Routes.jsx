/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import PrivateRoute from './PrivateRoute';
import ChefRecipes from '../components/ChefRecipes/ChefRecipes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "chef-recipes/:id",
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://italia-foodie-server.vercel.app/${params.id}`)
            }
        ]
    },
]);

export default router;